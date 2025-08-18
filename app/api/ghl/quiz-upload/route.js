import { createContact } from "@/lib/ghl";
import { put } from "@vercel/blob";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName") || "";
    const phone = formData.get("phone") || "";
    const email = formData.get("email") || "";
    const answersJson = formData.get("answers");
    const imageFile = formData.get("image");
    const utm_source = formData.get("utm_source") || "";
    const utm_medium = formData.get("utm_medium") || "";
    const utm_campaign = formData.get("utm_campaign") || "";

    console.log("📥 Received form submission:");
    console.log({
      fullName,
      phone,
      email,
      utm_source,
      utm_medium,
      utm_campaign,
      hasAnswers: !!answersJson,
      hasImage: !!imageFile,
    });

    // ✅ Validate required fields
    if (!fullName || !phone || !email || !answersJson) {
      console.warn("⚠️ Missing required fields.");
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    // ✅ Split name into first and last
    const [firstName, ...lastNameArr] = fullName.trim().split(" ");
    const lastName = lastNameArr.join(" ") || "_";

    // ✅ Parse quiz answers
    let answers = {};
    try {
      answers = JSON.parse(answersJson);
      console.log("✅ Parsed quiz answers:", answers);
    } catch (err) {
      console.error("❌ Failed to parse answers JSON:", err);
      return Response.json({ error: "Invalid answers format" }, { status: 400 });
    }

    // ✅ Upload image if exists
    let imageUrl = "";
    if (imageFile && typeof imageFile.name === "string") {
      try {
        const blob = await put(imageFile.name, imageFile, { access: "public" });
        imageUrl = blob.url;
        console.log("✅ Image uploaded:", imageUrl);
      } catch (err) {
        console.error("❌ Image upload failed:", err);
        return Response.json({ error: "Image upload failed" }, { status: 500 });
      }
    }

    // ✅ Build contact data for GHL
    const contactData = {
      firstName,
      lastName,
      phone,
      email,
      tags: ["quiz_submission"],
      customField: [
        { id: "DCy172WSa1AdaSRuqK7u", value: answers["0"] }, // Credit Card Count
        { id: "Z6FzLWBOB6i8eccDlPeI", value: answers["1"] }, // Reason
        { id: "WUfN0bJdzw886Bw4zwEU", value: answers["2"] }, // Score Goal
        { id: "4tSb9A6ox2UGDlPMYYWG", value: answers["3"] }, // Employment
        { id: "idnQuTcicgEcFLsOuB3Z", value: answers["4"] }, // Has Report
        { id: "3UFFWwdE59UkrEYjoexg", value: imageUrl },     // File (optional)
        { id: "I5i3Mwm7YUBWj3mTlJD4", value: utm_source },
        { id: "VlZaQZc9TsuwUJoF1ZOl", value: utm_medium },
        { id: "HHOdEmsCC8sUd6FP9z2z", value: utm_campaign },
      ],
    };

    console.log("📤 Sending contact to GHL:", contactData);

    // ✅ Create contact in GHL
    let contact;
    try {
      contact = await createContact(contactData);
      console.log("✅ Contact created in GHL:", contact?.id || contact);
    } catch (err) {
      console.error("❌ GHL contact creation failed:", err);
      return Response.json({ error: "GHL contact creation failed" }, { status: 500 });
    }

    return Response.json({
      success: true,
      message: "Contact created",
      contact,
      imageUrl,
    }, { status: 201 });

  } catch (err) {
    console.error("🔥 Unexpected server error:", err);
    return Response.json(
      { error: err.message || "Unexpected server error" },
      { status: 500 }
    );
  }
}