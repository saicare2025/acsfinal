import { createContact } from "@/lib/ghl";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName") || "";
    const phone = formData.get("phone") || "";
    const email = formData.get("email") || "";
    const appointmentTime = formData.get("appointmentTime") || "";
    const notes = formData.get("notes") || "";
    const utm_source = formData.get("utm_source") || "";
    const utm_medium = formData.get("utm_medium") || "";
    const utm_campaign = formData.get("utm_campaign") || "";

    const [firstName, ...lastNameArr] = fullName.trim().split(" ");
    const lastName = lastNameArr.join(" ") || "_";

    if (!firstName || !email || !phone || !appointmentTime) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Prepare GHL contact data
    const contactData = {
      firstName,
      lastName,
      email,
      phone,
      tags: ["calendar_submission"],
      customField: [
        {
          id: "F76FW0ArFF83G3rajbNL",
          value: appointmentTime,
        },
        {
          id: "U4bVkotSBQxyrQSo4ZE9",
          value: notes,
        },
        {
          id: "I5i3Mwm7YUBWj3mTlJD4",
          value: utm_source,
        },
        {
          id: "VlZaQZc9TsuwUJoF1ZOl",
          value: utm_medium,
        },
        {
          id: "HHOdEmsCC8sUd6FP9z2z",
          value: utm_campaign,
        },
      ],
    };

    const contact = await createContact(contactData);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Calendar submission saved",
        contact,
      }),
      { status: 201 }
    );
  } catch (err) {
    console.error("Calendar Upload Error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to process calendar submission" }),
      { status: 500 }
    );
  }
}