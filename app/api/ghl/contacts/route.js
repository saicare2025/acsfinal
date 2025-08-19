// app/api/contacts/route.js
import { createContact } from "@/lib/ghl";

const errorResponse = (message, status = 500, details) =>
  Response.json({ ok: false, error: message, details }, { status });

// --- helpers ---------------------------------------------------------------
const toArray = (v) =>
  Array.isArray(v)
    ? v
    : typeof v === "string"
      ? v.split(",")
      : [];

const cleanTags = (tags) =>
  [...new Set(
    toArray(tags)
      .map((t) => String(t).trim())
      .filter(Boolean)
  )];

const lower = (s) => (s ? String(s).toLowerCase() : "");

const pickSourceTag = (u) => {
  const src = lower(u.source);
  const med = lower(u.medium);

  if (u.fbclid || ["facebook","fb","meta","instagram"].includes(src)) return "FB Campaign";
  if (u.gclid || ["google","googleads","adwords"].includes(src) || ["cpc","ppc","sem"].includes(med)) return "Google";
  if (u.msclkid || ["bing","microsoft"].includes(src)) return "Bing";
  if (["tiktok","tt"].includes(src)) return "TikTok";
  if (["linkedin","li"].includes(src)) return "LinkedIn";
  if (["youtube"].includes(src)) return "YouTube";
  if (src) return src.charAt(0).toUpperCase() + src.slice(1);
  return "Direct";
};

const readUTM = (urlStr) => {
  const url = new URL(urlStr);
  const p = url.searchParams;
  const read = (k) => (p.get(k) || "").trim();
  return {
    source: read("utm_source"),
    medium: read("utm_medium"),
    campaign: read("utm_campaign"),
    term: read("utm_term"),
    content: read("utm_content"),
    gclid: read("gclid"),
    fbclid: read("fbclid"),
    msclkid: read("msclkid"),
  };
};
// --------------------------------------------------------------------------

export async function POST(request) {
  try {
    // Accept JSON even with charset param
    const ct = request.headers.get("content-type") || "";
    if (!ct.toLowerCase().includes("application/json")) {
      return errorResponse("Invalid content type. Expected JSON.", 415);
    }

    let contactData;
    try {
      contactData = await request.json();
    } catch {
      return errorResponse("Malformed JSON in request body.", 400);
    }

    const { firstName, lastName, email, phone } = contactData || {};
    if (!firstName || !lastName) return errorResponse("First and last name required.", 400);
    if (!email && !phone) return errorResponse("Provide email or phone.", 400);

    // --- Tag normalization + UTM fallback ---------------------------------
    // 1) Normalize any tags provided by the client
    const incomingTags = cleanTags(contactData?.tags);

    // 2) If no tags were provided, derive from UTM params in the request URL
    const utm = readUTM(request.url);
    const derived = [];
    if (incomingTags.length === 0) {
      const primary = pickSourceTag(utm);
      derived.push(primary);
      if (utm.campaign) derived.push(`cmp:${utm.campaign}`);
      if (utm.medium)   derived.push(`med:${utm.medium}`);
      if (utm.term)     derived.push(`term:${utm.term}`);
    }

    const tags = [...new Set([...incomingTags, ...derived])];

    // Prepare payload for provider; keep all client fields but enforce tags array
    const providerPayload = {
      ...contactData,
      tags,
    };

    // Create in GHL
    const created = await createContact(providerPayload);

    // 🔧 Normalize/flatten shape (some libs return { contact: {...} })
    const contact = created?.contact ?? created;

    // Optional: hard assert we have an ID to catch odd payloads
    if (!contact || !contact.id) {
      return errorResponse("Unexpected API response format from provider.", 502, created);
    }

    // Return a consistent, shallow shape that the client can rely on
    return Response.json(
      { ok: true, contact },
      { status: 201 }
    );
  } catch (err) {
    const status = err?.status && err.status >= 400 ? err.status : 500;
    return errorResponse(err?.message || "Failed to create contact.", status, err?.details);
  }
}
