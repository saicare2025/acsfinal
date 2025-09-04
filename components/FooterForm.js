import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import arrowIcon from "../app/assets/arrow.png";

const FooterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const validateForm = () => {
    const { fullName, email, phone } = formData;
    if (!fullName.trim()) {
      alert("Please enter your full name.");
      return false;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (!phone.trim()) {
      alert("Please enter your phone number.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone,
      };

      const response = await fetch("https://rest.gohighlevel.com/v1/contacts/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GHL_API_KEY}`,
          Version: "2021-07-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log("Full API Response:", result);

      if (!response.ok) {
        throw new Error(result.message || "GHL API error");
      }

      const contactId = result.id || result.contact?.id || result.data?.id;
      if (!contactId) {
        console.error("Unexpected API response format:", result);
        throw new Error("No contact ID received. Check console for details.");
      }

      router.push("/booking-confirmation");
    } catch (error) {
      console.error("Submission failed:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl border border-blue/10 bg-white/90 p-6 shadow-lg backdrop-blur-sm md:p-8">
      {/* Header with tagline + imported arrow image */}
      <div className="mb-6 flex items-center justify-center gap-4">
        <div>
          <h2 className="text-2xl text-center font-extrabold leading-tight text-blue sm:text-3xl">
            Free Credit File Assessment
          </h2>
          <p className="mt-1 text-sm text-center text-slate-600 sm:text-base">
            See if your negative listings can be removed – quick, confidential, and{" "}
            <span className="font-bold text-blue"><br></br>no win no fee.</span>
          </p>
        </div>
      
       

       
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 gap-3">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full rounded-xl bg-blue px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Processing..." : "Check My Removal Options"}
        </button>
      </form>
    </div>
  );
};

export default FooterForm;
