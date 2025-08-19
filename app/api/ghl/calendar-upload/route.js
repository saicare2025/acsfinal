// app/api/ghl/calendar-upload/route.js
import { createContact } from "@/lib/ghl";

// ------- helpers -------
const lower = (s) => (s ? String(s).toLowerCase() : "");

const pickSourceTag = (u) => {
  const src = lower(u.source);
  const med = lower(u.medium);

  if (u.fbclid || ["facebook", "fb", "meta", "instagram"].includes(src)) return "FB Campaign";
  if (u.gclid || ["google", "googleads", "adwords"].includes(src) || ["cpc", "ppc", "sem"].includes(med)) return "Google";
  if (u.msclkid || ["bing", "microsoft"].includes(src)) return "Bing";
  if (["tiktok", "tt"].includes(src)) return "TikTok";
  if (["linkedin", "li"].includes(src)) return "LinkedIn";
  if (["youtube"].includes(src)) return "YouTube";
  if (src) return src.charAt(0).toUpperCase() + src.slice(1);
  return "Direct";
};

const readUTMFromUrl = (urlStr) => {
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
// ----------------------

export async function POST(request) {
  try {
    const formData = await request.formData();

    const fullName        = (formData.get("fullName") || "").trim();
    const phone           = (formData.get("phone") || "").trim();
    const email           = (formData.get("email") || "").trim();
    const appointmentTime = (formData.get("appointmentTime") || "").trim();
    const notes           = (formData.get("notes") || "").trim();

    // UTM from form (optional)
    const utm_source   = (formData.get("utm_source") || "").trim();
    const utm_medium   = (formData.get("utm_medium") || "").trim();
    const utm_campaign = (formData.get("utm_campaign") || "").trim();
    const utm_term     = (formData.get("utm_term") || "").trim();
    const gclid        = (formData.get("gclid") || "").trim();
    const fbclid       = (formData.get("fbclid") || "").trim();
    const msclkid      = (formData.get("msclkid") || "").trim();

    // UTM fallback from URL if missing in form
    const urlUTM = readUTMFromUrl(request.url);
    const UTM = {
      source:   utm_source   || urlUTM.source,
      medium:   utm_medium   || urlUTM.medium,
      campaign: utm_campaign || urlUTM.campaign,
      term:     utm_term     || urlUTM.term,
      content:               urlUTM.content,
      gclid:    gclid        || urlUTM.gclid,
      fbclid:   fbclid       || urlUTM.fbclid,
      msclkid:  msclkid      || urlUTM.msclkid,
    };

    const [firstName, ...lastNameArr] = fullName.split(" ").filter(Boolean);
    const lastName = lastNameArr.join(" ") || "_";

    if (!firstName || !email || !phone || !appointmentTime) {
      return new Response(JSON.stringify({ ok: false, error: "Missing required fields" }), { status: 400 });
    }

    // Build tags: keep a stable tag + UTM-derived tags
    const tags = new Set(["calendar_submission"]);
    const primary = pickSourceTag(UTM);
    if (primary) tags.add(primary);
    if (UTM.campaign) tags.add(`cmp:${UTM.campaign}`);
    if (UTM.medium)   tags.add(`med:${UTM.medium}`);
    if (UTM.term)     tags.add(`term:${UTM.term}`);

    // Prepare contact payload
    const contactPayload = {
      firstName,
      lastName,
      email,
      phone,
      tags: Array.from(tags),
      // Your environment expects "customField" (singular) array
      customField: [
        { id: "F76FW0ArFF83G3rajbNL", value: appointmentTime }, // appointment time
        { id: "U4bVkotSBQxyrQSo4ZE9", value: notes },           // notes
        { id: "I5i3Mwm7YUBWj3mTlJD4", value: UTM.source },      // utm_source
        { id: "VlZaQZc9TsuwUJoF1ZOl", value: UTM.medium },      // utm_medium
        { id: "HHOdEmsCC8sUd6FP9z2z", value: UTM.campaign },    // utm_campaign
        // Optional: add fields for term/gclid/fbclid/msclkid if you've created them
      ],
    };

    const created = await createContact(contactPayload);

    // Flatten provider shape
    const contact = created?.contact ?? created;
    if (!contact?.id) {
      return new Response(JSON.stringify({ ok: false, error: "Unexpected provider response", details: created }), { status: 502 });
    }

    return new Response(
      JSON.stringify({ ok: true, message: "Calendar submission saved", contact }),
      { status: 201 }
    );
  } catch (err) {
    console.error("Calendar Upload Error:", err);
    return new Response(JSON.stringify({ ok: false, error: "Failed to process calendar submission" }), { status: 500 });
  }
}
