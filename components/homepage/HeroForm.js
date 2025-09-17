"use client";
import React, { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function FooterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

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
      "gclid",
      "fbclid",
      "msclkid",
    ];
    const out = {};
    keys.forEach((k) => {
      const v = searchParams.get(k);
      if (v) out[k.replace(/^utm_/, "")] = v;
    });
    return out;
  }, [searchParams]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const ACCEPTED_TYPES = [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/tiff",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "text/plain",
    "application/rtf",
  ];
  const MAX_MB = 25;
  const MAX_BYTES = MAX_MB * 1024 * 1024;

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const onFile = (e) => {
    const f = e.target.files?.[0] || null;
    setFileError("");
    if (!f) return setFile(null);
    if (f.size > MAX_BYTES) {
      setFile(null);
      return setFileError(`Max ${MAX_MB}MB.`);
    }
    if (!ACCEPTED_TYPES.includes(f.type)) {
      setFile(null);
      return setFileError("Allowed: PDF, JPG/PNG, TIFF, DOC/DOCX, TXT, RTF.");
    }
    setFile(f);
  };

  const safeRead = async (res) => {
    try {
      const ct = res.headers.get("content-type") || "";
      if (ct.includes("application/json")) return await res.json();
      return { ok: false, error: await res.text() };
    } catch {
      return { ok: false, error: "Failed to parse response" };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    // Minimal guard: need at least one contact method
    if (!formData.email.trim() && !formData.phone.trim()) {
      alert("Please provide an email or phone.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Build multipart payload
      const fd = new FormData();
      fd.append("firstName", (formData.firstName || "").trim());
      fd.append("lastName", (formData.lastName || "").trim());
      if (formData.email) fd.append("email", formData.email.trim());
      if (formData.phone) fd.append("phone", formData.phone.trim());

      // Pass UTMs (api reads utm_* and/or falls back to URL)
      Object.entries(utm).forEach(
        ([k, v]) => v && fd.append(`utm_${k}`, String(v))
      );

      if (file) fd.append("file", file, file.name);

      const res = await fetch("/api/ghl/contacts", {
        method: "POST",
        body: fd,
      });
      const payload = await safeRead(res);

      if (!res.ok || payload?.ok === false) {
        const msg =
          payload?.error ||
          payload?.message ||
          payload?.details ||
          `Request failed (${res.status})`;
        throw new Error(msg);
      }

      router.push("/meeting-schedule");
    } catch (err) {
      console.error("Submit error:", err);
      alert(err?.message || "Submission failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-xl max-w-md border border-slate-200 bg-slate-50 p-4 sm:p-5 shadow-sm">
      <div className="mb-4 text-center">
        
        <p className="mt-1 text-sm text-slate-700">
          See if your negative listings can be removed – quick and confidential
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* First + Last Name in a row */}
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={onChange}
            required
            className="w-full rounded-full border border-slate-300 bg-white px-3 py-2.5 text-sm placeholder-slate-600 focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={onChange}
            required
            className="w-full rounded-full border border-slate-300 bg-white px-3 py-2.5 text-sm placeholder-slate-600 focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={onChange}
          className="w-full rounded-full border border-slate-300 bg-white px-3 py-2.5 text-sm placeholder-slate-600 focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={onChange}
          className="w-full rounded-full border border-slate-300 bg-white px-3 py-2.5 text-sm placeholder-slate-600 focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
        />

        {/* Credit File Upload */}
        <div>
          <label
            htmlFor="credit-file"
            className="mb-1 block text-xs font-medium text-slate-900"
          >
            Upload your credit file (optional)
          </label>
          <input
            id="credit-file"
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,.tif,.tiff,.doc,.docx,.txt,.rtf"
            onChange={onFile}
            className="block w-full cursor-pointer text-xs text-slate-900 file:mr-3 file:rounded-full file:border-0 file:bg-blue file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-blue-600"
          />
          {fileError && (
            <p className="mt-1 text-[11px] font-medium text-red-600">
              {fileError}
            </p>
          )}
          {file && !fileError && (
            <p className="mt-1 text-[11px] text-slate-600">{file.name}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-blue px-4 py-2.5 text-sm font-semibold tracking-wide text-white shadow hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Processing..." : "Check My Removal Options"}
        </button>

      </form>
    </div>
  );
}
