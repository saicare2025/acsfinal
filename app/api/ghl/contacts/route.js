// app/api/ghl/contacts/route.js
import { createContact } from "@/lib/ghl";
import { put } from "@vercel/blob";

// export const runtime = "nodejs"; // uncomment if you hit Edge upload limits

const LOCATION_ID = process.env.GHL_LOCATION_ID;

/* helpers */
const lower = (s) => (s ? String(s).toLowerCase() : "");
const extFromType = (type = "") => {
  const [, subtype] = String(type).split("/");
  return subtype ? subtype.replace("+xml", "").replace("+json", "") : "bin";
};
const safeFilename = (base = "upload", type = "", original = "") => {
  const name = (original && original !== "blob" && original) || base;
  const ext = extFromType(type);
  const hasExt = /\.[a-z0-9]{2,5}$/i.test(name);
  return hasExt ? name : `${name}.${ext}`;
};
const readUTMFromUrl = (urlStr) => {
  const url = new URL(urlStr);
  const p = url.searchParams;
  const get = (k) => (p.get(k) || "").trim();
  return {
    source:   get("utm_source"),
    medium:   get("utm_medium"),
    campaign: get("utm_campaign"),
    term:     get("utm_term"),
    content:  get("utm_content"),
    gclid:    get("gclid"),
    fbclid:   get("fbclid"),
    msclkid:  get("msclkid"),
  };
};
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
const pushIf = (arr, id, value) => {
  if (id && value !== undefined && value !== null && String(value).trim() !== "") {
    arr.push({ id, value });
  }
  return arr;
};

export async function POST(request) {
  try {
    if (!LOCATION_ID) {
      return Response.json({ ok: false, error: "GHL_LOCATION_ID is not set" }, { status: 500 });
    }

    const formData = await request.formData();

    // Prefer first/last; fallback to fullName if present
    let firstName = (formData.get("firstName") || "").toString().trim();
    let lastName  = (formData.get("lastName")  || "").toString().trim();

    if (!firstName && !lastName) {
      const fullName = (formData.get("fullName") || "").toString().trim();
      if (fullName) {
        const parts = fullName.split(/\s+/).filter(Boolean);
        firstName = parts.shift() || "";
        lastName  = parts.join(" ");
      }
    }

    const email = (formData.get("email") || "").toString().trim();
    const phone = (formData.get("phone") || "").toString().trim();

    // UTM (form overrides URL)
    const urlUTM = readUTMFromUrl(request.url);
    const read = (k) => (formData.get(k) || urlUTM[k.replace(/^utm_/, "")] || "").toString().trim();
    const UTM = {
      source:   read("utm_source"),
      medium:   read("utm_medium"),
      campaign: read("utm_campaign"),
      term:     read("utm_term"),
      gclid:    read("gclid"),
      fbclid:   read("fbclid"),
      msclkid:  read("msclkid"),
    };

    // Optional file (supports "file" or "creditFile")
    let fileUrl = "";
    let fileType = "";
    const file = formData.get("file") || formData.get("creditFile");
    if (file && typeof file.arrayBuffer === "function") {
      try {
        const ct = file.type || "application/octet-stream";
        const filename = safeFilename("credit-file", ct, file.name);
        const blob = await put(filename, file, {
          access: "public",
          contentType: ct,
          addRandomSuffix: true,
        });
        fileUrl = blob.url;
        fileType = ct;
      } catch (e) {
        return Response.json(
          { ok: false, error: "File upload failed", details: String(e?.message || e) },
          { status: 500 }
        );
      }
    }

    // Tags
    const tagSet = new Set(["contact_form"]);
    const primary = pickSourceTag(UTM);
    if (primary) tagSet.add(primary);
    if (UTM.campaign) tagSet.add(`cmp:${UTM.campaign}`);
    if (UTM.medium)   tagSet.add(`med:${UTM.medium}`);
    if (UTM.term)     tagSet.add(`term:${UTM.term}`);
    if (fileUrl)      tagSet.add("has_credit_file");

    // Custom fields (match quiz route: use `customField` singular)
    const cf = [];
    pushIf(cf, "3UFFWwdE59UkrEYjoexg", fileUrl);   // Credit file URL (ensure this ID is correct in your GHL)
    pushIf(cf, "I5i3Mwm7YUBWj3mTlJD4", UTM.source);
    pushIf(cf, "VlZaQZc9TsuwUJoF1ZOl", UTM.medium);
    pushIf(cf, "HHOdEmsCC8sUd6FP9z2z", UTM.campaign);

    // Final payload (include locationId)
    const contactPayload = {
      locationId: LOCATION_ID,
      firstName,
      lastName,
      email,
      phone,
      tags: Array.from(tagSet),
      customField: cf,          // <- keep singular to match your working quiz flow
      customFields: cf,       // (optional) include both if you want to be extra safe
    };

    const created = await createContact(contactPayload);
    const contact = created?.contact ?? created;

    if (!contact?.id) {
      return Response.json(
        { ok: false, error: "Unexpected provider response", details: created },
        { status: 502 }
      );
    }

    return Response.json(
      { ok: true, message: "Contact created", contact, fileUrl, fileType },
      { status: 201 }
    );
  } catch (err) {
    return Response.json(
      { ok: false, error: err?.message || "Unexpected server error" },
      { status: 500 }
    );
  }
}
