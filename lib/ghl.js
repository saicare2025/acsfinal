// lib/ghl.js
const API_BASE_URL = "https://rest.gohighlevel.com/v1";

// ---- helpers ----------------------------------------------------
async function asJsonOrText(res) {
  const ct = res.headers.get("content-type") || "";
  if (ct.includes("application/json")) {
    try {
      const body = await res.json();
      return { isJson: true, body };
    } catch {
      // mislabeled or empty JSON body
      return { isJson: false, body: await res.text().catch(() => "") };
    }
  }
  return { isJson: false, body: await res.text().catch(() => "") };
}

function extractError(details) {
  if (!details) return "";
  if (typeof details === "string") return details;
  // Common GHL shapes:
  if (details.message) return details.message;
  if (details.error) return details.error;
  if (Array.isArray(details.errors) && details.errors[0]) {
    return details.errors[0].message || JSON.stringify(details.errors[0]);
  }
  return JSON.stringify(details);
}

function cleanTags(tags) {
  if (!tags) return [];
  const arr = Array.isArray(tags) ? tags : String(tags).split(",");
  return [...new Set(arr.map((t) => String(t).trim()).filter(Boolean))];
}

function cleanCustomFields(cfLike) {
  const arr = Array.isArray(cfLike) ? cfLike : [];
  return arr
    .map((x) => ({ id: String(x?.id || "").trim(), value: x?.value ?? "" }))
    .filter((x) => x.id && String(x.value).trim().length > 0);
}

function normalizeContactInput(contactData = {}) {
  // Accept either "customField" (your app) or "customFields" (GHL spec)
  const customFields = cleanCustomFields(contactData.customFields || contactData.customField);
  const tags = cleanTags(contactData.tags);

  // Remove the singular key so we don't send an unexpected property
  const { customField, ...rest } = contactData;

  // Prevent accidental undefineds that serialize to "undefined"
  const safe = Object.fromEntries(
    Object.entries(rest).filter(([_, v]) => v !== undefined && v !== null)
  );

  return {
    ...safe,
    tags,
    customFields, // <-- GHL expects THIS key
  };
}
// ----------------------------------------------------------------

export async function ghlFetch(endpoint, options = {}) {
  const apiKey = process.env.GHL_API_KEY;
  if (!apiKey) {
    const err = new Error("GHL_API_KEY is missing on the server.");
    err.status = 500;
    throw err;
  }

  const headers = {
    Authorization: `Bearer ${apiKey}`,
    Accept: "application/json",
    "Content-Type": "application/json",
    ...options.headers,
  };

  const normalized = String(endpoint || "").replace(/^\/+|\/+$/g, ""); // trim slashes
  const url = `${API_BASE_URL}/${normalized}`;

  let res;
  try {
    res = await fetch(url, {
      cache: "no-store",
      // redirect: "manual", // uncomment while debugging to catch redirects
      ...options,
      headers,
    });
  } catch (networkErr) {
    const err = new Error(`Network error calling GHL: ${networkErr?.message || networkErr}`);
    err.status = 502;
    throw err;
  }

  const { isJson, body } = await asJsonOrText(res);

  if (!res.ok) {
    const details = extractError(isJson ? body : body);
    const err = new Error(`GHL API Error (${res.status}): ${details || "Unknown error"}`);
    err.status = res.status;
    err.details = details || body;
    throw err;
  }

  // Handle empty 201/204 gracefully
  if (res.status === 204 || body === "" || body == null) {
    return {};
  }

  return isJson ? body : { raw: String(body) };
}

export async function createContact(contactData = {}) {
  const locationId = process.env.GHL_LOCATION_ID;
  if (!locationId) {
    const err = new Error("GHL_LOCATION_ID is missing on the server.");
    err.status = 500;
    throw err;
  }

  const hasEmailOrPhone = !!(contactData.email || contactData.phone);
  if (!hasEmailOrPhone) {
    const err = new Error("Contact must have at least an email or phone number.");
    err.status = 400;
    throw err;
  }

  // Normalize payload to GHL expectations
  const payload = {
    locationId,
    ...normalizeContactInput(contactData),
  };

  // Debug safely (dev only)
  // if (process.env.NODE_ENV !== "production") {
  //   console.log("[GHL.createContact] payload:", JSON.stringify(payload, null, 2));
  // }

  return ghlFetch("contacts", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
