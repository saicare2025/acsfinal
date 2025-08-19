// app/api/ghl/quiz-upload/route.js
import { createContact } from "@/lib/ghl";
import { put } from "@vercel/blob";

// export const runtime = "nodejs"; // uncomment if needed by your setup

// ---------- helpers ----------
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
const readUTMFromUrl = (urlStr) => {
  const url = new URL(urlStr);
  const p = url.searchParams;
  const read = (k) => (p.get(k) || "").trim();
  return {
    source:   read("utm_source"),
    medium:   read("utm_medium"),
    campaign: read("utm_campaign"),
    term:     read("utm_term"),
    content:  read("utm_content"),
    gclid:    read("gclid"),
    fbclid:   read("fbclid"),
    msclkid:  read("msclkid"),
  };
};
const pushIf = (arr, id, value) => {
  if (id && value !== undefined && value !== null && String(value).trim() !== "") {
    arr.push({ id, value });
  }
  return arr;
};
// --------------------------------

export async function POST(request) {
  try {
    const formData = await request.formData();

    const fullName   = (formData.get("fullName") || "").trim();
    const phone      = (formData.get("phone") || "").trim();
    const email      = (formData.get("email") || "").trim();
    const answersRaw = formData.get("answers");

    const imageFile  = formData.get("image");   // optional
    const reportFile = formData.get("report");  // optional

    // UTM (form + URL fallback)
    const urlUTM = readUTMFromUrl(request.url);
    const UTM = {
      source:   (formData.get("utm_source") || urlUTM.source || "").trim(),
      medium:   (formData.get("utm_medium") || urlUTM.medium || "").trim(),
      campaign: (formData.get("utm_campaign") || urlUTM.campaign || "").trim(),
      term:     (formData.get("utm_term") || urlUTM.term || "").trim(),
      gclid:    (formData.get("gclid") || urlUTM.gclid || "").trim(),
      fbclid:   (formData.get("fbclid") || urlUTM.fbclid || "").trim(),
      msclkid:  (formData.get("msclkid") || urlUTM.msclkid || "").trim(),
    };

    if (!fullName || !phone || !email || !answersRaw) {
      return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const [firstName, ...lastNameArr] = fullName.split(" ").filter(Boolean);
    const lastName = (lastNameArr.join(" ") || "_").trim();

    // Parse answers (string or Blob)
    let answers = {};
    try {
      if (typeof answersRaw === "string") answers = JSON.parse(answersRaw);
      else if (answersRaw?.text) answers = JSON.parse(await answersRaw.text());
      else throw new Error("answers must be JSON string or Blob");
    } catch {
      return Response.json({ ok: false, error: "Invalid answers format" }, { status: 400 });
    }

    // Upload one file (prefer report/PDF if both)
    let fileUrl = "";
    let fileType = "";
    const fileToUpload = reportFile || imageFile;
    if (fileToUpload && typeof fileToUpload.arrayBuffer === "function") {
      try {
        const isPdf = !!reportFile;
        const ct = isPdf ? "application/pdf" : (fileToUpload.type || "application/octet-stream");
        const filename = safeFilename(isPdf ? "quiz-report" : "quiz-image", ct, fileToUpload.name);
        const blob = await put(filename, fileToUpload, {
          access: "public",
          contentType: ct,
          addRandomSuffix: true,
        });
        fileUrl = blob.url;
        fileType = ct;
      } catch (e) {
        return Response.json({ ok: false, error: "File upload failed", details: String(e?.message || e) }, { status: 500 });
      }
    }

    // Tags
    const tagSet = new Set(["quiz_submission"]);
    const primary = pickSourceTag(UTM);
    if (primary) tagSet.add(primary);
    if (UTM.campaign) tagSet.add(`cmp:${UTM.campaign}`);
    if (UTM.medium)   tagSet.add(`med:${UTM.medium}`);
    if (UTM.term)     tagSet.add(`term:${UTM.term}`);
    if (reportFile)   tagSet.add("has_report_pdf");

    // Build ONLY non-empty custom fields
    const cf = [];
    pushIf(cf, "DCy172WSa1AdaSRuqK7u", answers["0"]); // Credit Card Count
    pushIf(cf, "Z6FzLWBOB6i8eccDlPeI", answers["1"]); // Reason
    pushIf(cf, "WUfN0bJdzw886Bw4zwEU", answers["2"]); // Score Goal
    pushIf(cf, "4tSb9A6ox2UGDlPMYYWG", answers["3"]); // Employment
    pushIf(cf, "idnQuTcicgEcFLsOuB3Z", answers["4"]); // Has Report
    pushIf(cf, "3UFFWwdE59UkrEYjoexg", fileUrl);      // Image OR PDF URL
    pushIf(cf, "I5i3Mwm7YUBWj3mTlJD4", UTM.source);   // utm_source
    pushIf(cf, "VlZaQZc9TsuwUJoF1ZOl", UTM.medium);   // utm_medium
    pushIf(cf, "HHOdEmsCC8sUd6FP9z2z", UTM.campaign); // utm_campaign
    // (add term/gclid/fbclid/msclkid if you have field IDs)

    const contactPayload = {
      firstName,
      lastName,
      phone,
      email,
      tags: Array.from(tagSet),
      customField: cf, // your lib maps this → customFields (plural)
    };

    // Create contact
    let created;
    try {
      created = await createContact(contactPayload);
    } catch (e) {
      // ✅ return provider's details so you can see the exact GHL error
      return Response.json(
        { ok: false, error: "GHL contact creation failed", details: e?.details || e?.message || String(e) },
        { status: e?.status && e.status >= 400 ? e.status : 500 }
      );
    }

    const contact = created?.contact ?? created;
    if (!contact?.id) {
      return Response.json({ ok: false, error: "Unexpected provider response", details: created }, { status: 502 });
    }

    return Response.json(
      { ok: true, message: "Contact created", contact, fileUrl, fileType },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ ok: false, error: err?.message || "Unexpected server error" }, { status: 500 });
  }
}
