"use client";
import React, { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import arrowIcon from "../app/assets/arrow.png";

const FooterForm = ({
  heading = "Free Credit File Assessment",
  subheading = "See if your negative listings can be removed – quick, confidential, and no win no fee.",
  paragraph = "",
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // ---- Parse UTM params from URL (normalized to: source, medium, campaign, term, content)
  const utm = useMemo(() => {
    const keys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "source",
      "medium",
      "campaign",
      "term",
      "content",
    ];
    const o = {};
    keys.forEach((k) => {
      const v = searchParams.get(k);
      if (v) o[k.replace(/^utm_/, "")] = v;
    });
    return o;
  }, [searchParams]);

  // ---- Build a primary source tag from UTM
  const pickSourceTag = (u = {}) => {
    const src = (u.source || "site").toLowerCase();
    if (["google", "adwords", "ads"].includes(src)) return "src:google";
    if (["facebook", "fb", "meta"].includes(src)) return "src:facebook";
    if (["instagram", "ig"].includes(src)) return "src:instagram";
    if (["tiktok", "tt"].includes(src)) return "src:tiktok";
    if (["bing", "microsoft"].includes(src)) return "src:bing";
    if (["referral", "partner"].includes(src)) return "src:referral";
    return `src:${src || "site"}`;
  };

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

  // ---- Robust reader for JSON or text error payloads
  const safeRead = async (res) => {
    const ct = res.headers.get("content-type") || "";
    if (ct.includes("application/json")) return await res.json();
    const text = await res.text();
    return { ok: false, error: text };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      // Tags from UTM
      const primary = pickSourceTag(utm);
      const tags = [primary];
      if (utm.campaign) tags.push(`cmp:${utm.campaign}`);
      if (utm.medium) tags.push(`med:${utm.medium}`);
      if (utm.term) tags.push(`term:${utm.term}`);

      // Split full name into first/last (best-effort)
      const parts = formData.fullName.trim().split(/\s+/);
      const firstName = parts.shift() || "";
      const lastName = parts.join(" ");

      const payload = {
        firstName,
        lastName,
        email: (formData.email || "").trim(),
        phone: formData.phone,
        tags,
        // Add customFields here if you later collect them in this same form.
      };

      const res = await fetch("/api/ghl/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await safeRead(res);
      console.log("Full API Response:", result);

      if (!res.ok || result?.ok === false) {
        const msg =
          result?.details ||
          result?.error ||
          result?.message ||
          `Request failed (${res.status})`;
        throw new Error(msg);
      }

      const contactId = result?.contact?.id || result?.id || result?.data?.id;
      if (!contactId)
        throw new Error("No contact ID received. Check console for details.");

      router.push("/meeting-schedule");
    } catch (error) {
      console.error("Submission failed:", error);
      alert(`Error: ${error?.message || "Submission failed"}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl border border-blue/10 bg-white/90 p-4 shadow-lg backdrop-blur-sm sm:p-6 md:p-8">
      {/* Header with dynamic content */}
      <div className="mb-6 text-center">
        <h2 className="text-xl font-extrabold leading-tight text-blue sm:text-2xl lg:text-3xl">
          {heading}
        </h2>
        <p className="mt-1 text-base text-center text-slate-600 sm:text-base">
          See if your negative listings can be removed – quick, confidential,
          and{" "}
          <span className="font-bold text-blue">
            <br></br>no win no fee.
          </span>
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-3">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-3 text-base transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-4 sm:py-2.5"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-3 text-base transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-4 sm:py-2.5"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-3 text-base transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-4 sm:py-2.5"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 w-full rounded-xl bg-blue px-4 py-3 text-base font-semibold uppercase tracking-wide text-white shadow-md transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 sm:px-5 sm:text-base"
        >
          {isSubmitting ? "Processing..." : "Check My Removal Options"}
        </button>
      </form>
    </div>
  );
};

export default FooterForm;
