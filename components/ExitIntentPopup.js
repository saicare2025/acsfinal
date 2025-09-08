"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";

const SCROLL_INACTIVITY_MS = 30_000; // 30s after last scroll
const FULL_INACTIVITY_MS = 60_000;   // 60s after any activity
const INACTIVITY_POLL_MS = 1_000;    // check every second

const ExitIntentPopup = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const scrollTimeoutRef = useRef(null);
  const inactivityIntervalRef = useRef(null);
  const lastActivityTimeRef = useRef(Date.now());

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

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

  useEffect(() => {
    const shown = sessionStorage.getItem("exitPopupShown");
    if (shown) setHasShown(true);
  }, []);

  const showPopup = () => {
    if (!hasShown && !isVisible) {
      setIsVisible(true);
      setHasShown(true);
      sessionStorage.setItem("exitPopupShown", "true");
    }
  };

  const closePopup = () => setIsVisible(false);

  // Any user activity refreshes the "last activity" clock
  const trackActivity = () => {
    lastActivityTimeRef.current = Date.now();
  };

  // Start/refresh a 30s timer after any scroll, then show
  const trackScroll = () => {
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    // If it's already shown or permanently suppressed, don't arm the timer
    if (hasShown || isVisible) return;
    scrollTimeoutRef.current = setTimeout(() => {
      showPopup();
    }, SCROLL_INACTIVITY_MS);
  };

  useEffect(() => {
    if (hasShown) return;

    const handleMouseLeave = (e) => {
      // Keep your exit-intent behavior as-is (instant), or comment out to delay everything
      if (e.clientY <= 0) showPopup();
    };

    const handlePopState = () => {
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth <= 768;
      if (isMobile) showPopup();
    };

    const activityEvents = [
      "mousedown",
      "mousemove",
      "keypress",
      "scroll",
      "touchstart",
      "click",
    ];
    activityEvents.forEach((event) =>
      document.addEventListener(event, trackActivity, true)
    );

    // Scroll inactivity (30s)
    document.addEventListener("scroll", trackScroll, true);

    // Full inactivity (60s since ANY activity)
    inactivityIntervalRef.current = setInterval(() => {
      if (hasShown || isVisible) return;
      const now = Date.now();
      const timeSinceActivity = now - lastActivityTimeRef.current;
      if (timeSinceActivity >= FULL_INACTIVITY_MS) {
        showPopup();
        if (inactivityIntervalRef.current) {
          clearInterval(inactivityIntervalRef.current);
          inactivityIntervalRef.current = null;
        }
      }
    }, INACTIVITY_POLL_MS);

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("popstate", handlePopState);
      activityEvents.forEach((event) =>
        document.removeEventListener(event, trackActivity, true)
      );
      document.removeEventListener("scroll", trackScroll, true);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      if (inactivityIntervalRef.current) {
        clearInterval(inactivityIntervalRef.current);
        inactivityIntervalRef.current = null;
      }
    };
  }, [hasShown, isVisible]);

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
          <ul className="text-sm text-left text-blue-800  mb-4">
            <li>✅ Clear defaults & improve your credit</li>
            <li>✅ Get back on track for loans & peace of mind</li>
          </ul>
          <p className="text-sm font-semibold text-blue-800 mb-3">
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
