// lib/ghl.js
const API_BASE_URL = "https://rest.gohighlevel.com/v1";

async function readSafely(res) {
  const ct = res.headers.get("content-type") || "";
  if (ct.includes("application/json")) {
    try { return { isJson: true, body: await res.json() }; }
    catch { /* mislabeled */ }
  }
  return { isJson: false, body: await res.text() };
}

export async function ghlFetch(endpoint, options = {}) {
  const apiKey = process.env.GHL_API_KEY;
  if (!apiKey) throw new Error("GHL_API_KEY is missing on the server.");

  const headers = {
    Authorization: `Bearer ${apiKey}`,
    Accept: "application/json",
    "Content-Type": "application/json",
    ...options.headers,
  };

  const normalized = String(endpoint || "").replace(/^\/|\/$/g, "");
  const url = `${API_BASE_URL}/${normalized}`;

  const res = await fetch(url, { ...options, headers });
  const { isJson, body } = await readSafely(res);

  if (!res.ok) {
    const details = isJson ? (body?.message || body?.error || body) : String(body || "");
    const err = new Error(`GHL API Error (${res.status}): ${details || "Unknown error"}`);
    err.status = res.status;
    err.details = details;
    err.response = res;
    throw err;
  }

  return isJson ? body : { raw: String(body) };
}

export async function createContact(contactData = {}) {
  const locationId = process.env.GHL_LOCATION_ID;
  if (!contactData.email && !contactData.phone) {
    throw new Error("Contact must have at least an email or phone number.");
  }
  const payload = { locationId, ...contactData };
  return ghlFetch("contacts", { method: "POST", body: JSON.stringify(payload) });
}
