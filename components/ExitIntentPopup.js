"use client";
import React, { useState, useEffect, useMemo, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";

const SHOW_AFTER_MS = 30_000; // 30s after landing

const ExitIntentPopup = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const timerRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  // ---- UTM helpers (unchanged) ----
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
      if (v) o[k].startsWith?.("utm_")
        ? (o[k.replace(/^utm_/, "")] = v)
        : (o[k] = v);
    });
    return o;
  }, [searchParams]);

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

  // ---- Only show once per session, after 30s on page ----
  useEffect(() => {
    const shown = sessionStorage.getItem("exitPopupShown");
    if (shown) {
      setHasShown(true);
      return;
    }

    timerRef.current = setTimeout(() => {
      setIsVisible(true);
      setHasShown(true);
      sessionStorage.setItem("exitPopupShown", "true");
    }, SHOW_AFTER_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const closePopup = () => setIsVisible(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const validateForm = () => {
    const { fullName, email, phone } = formData;
    if (!fullName.trim()) return alert("Please enter your full name."), false;
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email))
      return alert("Please enter a valid email address."), false;
    if (!phone.trim()) return alert("Please enter your phone number."), false;
    return true;
  };

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
      const primary = pickSourceTag(utm);
      const tags = [primary, "exit-intent-popup"];
      if (utm.campaign) tags.push(`cmp:${utm.campaign}`);
      if (utm.medium) tags.push(`med:${utm.medium}`);
      if (utm.term) tags.push(`term:${utm.term}`);

      const parts = formData.fullName.trim().split(/\s+/);
      const firstName = parts.shift() || "";
      const lastName = parts.join(" ");

      const payload = {
        firstName,
        lastName,
        email: (formData.email || "").trim(),
        phone: formData.phone,
        tags,
      };

      const res = await fetch("/api/ghl/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await safeRead(res);
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

      closePopup();
      router.push("/meeting-schedule");
    } catch (error) {
      console.error("Exit popup submission failed:", error);
      alert(`Error: ${error?.message || "Submission failed"}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative mx-4 w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <button
          onClick={closePopup}
          className="absolute right-4 top-4 rounded-full p-1 text-gray-400 bg-gray-100 hover:bg-gray-200 hover:text-gray-600 transition-colors"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        <div className="mb-6 mt-3 text-left">
          <h2 className="text-xl font-bold text-blue-800 mb-2">
            ⚠️ Don’t Let Bad Credit Hold You Back
          </h2>
          <ul className="text-base text-left text-blue-800 mb-4">
            <li>✅ Clear defaults & improve your credit</li>
            <li>✅ Get back on track for loans & peace of mind</li>
          </ul>
          <p className="text-base font-semibold text-blue-800 mb-3">
            Free confidential consultation — no obligation
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-green-600 px-6 py-3 text-white font-semibold shadow-lg transition-all hover:bg-green-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Processing..." : "Start My Free Credit Review"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            🔒 100% Confidential | No Obligation | Trusted Experts
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
