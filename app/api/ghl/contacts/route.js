// app/api/contacts/route.js
import { createContact } from "@/lib/ghl";

const errorResponse = (message, status = 500, details) =>
  Response.json({ ok: false, error: message, details }, { status });

export async function POST(request) {
  try {
    const ct = request.headers.get("content-type") || "";
    if (!ct.includes("application/json")) {
      return errorResponse("Invalid content type. Expected JSON.", 415);
    }

    let contactData;
    try { contactData = await request.json(); }
    catch { return errorResponse("Malformed JSON in request body.", 400); }

    const { firstName, lastName, email, phone } = contactData || {};
    if (!firstName || !lastName) return errorResponse("First and last name required.", 400);
    if (!email && !phone) return errorResponse("Provide email or phone.", 400);

    const created = await createContact(contactData);
    return Response.json({ ok: true, contact: created }, { status: 201 });
  } catch (err) {
    // If lib attached raw response text, surface it
    const status = err?.status && err.status >= 400 ? err.status : 500;
    return errorResponse(
      err?.message || "Failed to create contact.",
      status,
      err?.details
    );
  }
}
