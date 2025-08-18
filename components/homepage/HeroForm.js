"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Phone,
  MapPin,
  ClipboardList,
  BriefcaseBusiness,
  ChevronDown,
} from "lucide-react";

// Constants
const AUSTRALIAN_STATES = ["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"];

// Reusable Inputs
const TextInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  Icon,
  error,
  inputMode,
  maxLength,
  className = "",
}) => (
  <div className="space-y-1">
    <label className="block text-xs font-semibold uppercase tracking-wider text-blue-900">
      {label}
    </label>
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-700" />
      )}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        inputMode={inputMode}
        maxLength={maxLength}
        className={`w-full rounded-lg border bg-white py-2 pl-10 pr-4 text-sm placeholder:text-blue-400 transition-all duration-200 ${
          error
            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
            : "border-blue-100 focus:border-blue-500 focus:ring-blue-500"
        } ${className}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      />
    </div>
    {error && (
      <p id={`${name}-error`} className="text-xs text-red-500">
        {error}
      </p>
    )}
  </div>
);

const SelectInput = ({
  label,
  name,
  value,
  onChange,
  options,
  Icon,
  error,
  placeholder,
}) => (
  <div className="space-y-1">
    <label className="block text-xs font-semibold uppercase tracking-wider text-blue-900">
      {label}
    </label>
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-700" />
      )}
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-700" />
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full appearance-none rounded-lg border bg-white py-2 pl-10 pr-8 text-sm ${
          error
            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
            : "border-blue-100 focus:border-blue-500 focus:ring-blue-500"
        } ${!value ? "text-blue-400" : "text-blue-900"}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    {error && (
      <p id={`${name}-error`} className="text-xs text-red-500">
        {error}
      </p>
    )}
  </div>
);

const TextAreaInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  Icon,
  error,
  rows = 4,
  className = "",
}) => (
  <div className="space-y-1">
    <label className="block text-xs font-semibold uppercase tracking-wider text-blue-900">
      {label}
    </label>
    <div className="relative">
      {Icon && <Icon className="absolute left-3 top-3 h-4 w-4 text-blue-700" />}
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`w-full rounded-lg border bg-white py-2 pl-10 pr-4 text-sm placeholder:text-blue-400 transition-all duration-200 ${
          error
            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
            : "border-blue-100 focus:border-blue-500 focus:ring-blue-500"
        } ${className}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      />
    </div>
    {error && (
      <p id={`${name}-error`} className="text-xs text-red-500">
        {error}
      </p>
    )}
  </div>
);

export default function CreditAssessmentForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    state: "",
    isEmployed: "",
    description: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };
  const validateForm = () => {
    const errors = {};

    // Required field validations
    if (!formData.firstName.trim()) errors.firstName = "Required field";
    if (!formData.lastName.trim()) errors.lastName = "Required field";

    // Email validation (required + format check)
    if (!formData.email.trim()) {
      errors.email = "Required field";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    // Dropdown validations
    if (!formData.state) errors.state = "Please select a state";
    if (!formData.isEmployed) errors.isEmployed = "Please choose Yes or No";

    // Phone field exists check (no validation)
    if (!formData.phone) errors.phone = "Required field"; // Just checking existence

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!validateForm()) return;

  //   setIsSubmitting(true);
  //   try {
  //     const response = await fetch("/api/ghl", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     const result = await response.json();

  //     if (result?.success) {
  //       alert(result.message || "Submitted successfully.");
  //       setShowScheduleModal(true);
  //     } else {
  //       if (result?.errors) {
  //         setFormErrors(result.errors);
  //       } else {
  //         alert(result?.message || "An error occurred. Please try again.");
  //       }
  //     }
  //   } catch (err) {
  //     console.error("Submission error:", err);
  //     alert("An error occurred while submitting the form. Please try again.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };
 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  setIsSubmitting(true);

  // optional: safe reader to avoid JSON parse crashes
  const safeRead = async (res) => {
    const ct = res.headers.get("content-type") || "";
    if (ct.includes("application/json")) return await res.json();
    const text = await res.text();
    return { ok: false, error: text }; // normalize as JSON-like
  };

  try {
    const payload = {
      firstName: (formData.firstName || "").trim(),
      lastName: (formData.lastName || "").trim(),
      email: (formData.email || "").trim(),
      phone: formData.phone, // raw value; no validation/normalization
      state: formData.state,
      customFields: [
        // ✅ send exactly what the user selected
        { id: "B1YRYSDJYrX78SFAdFlY", value: formData.isEmployed }, // "Yes" or "No"
        { id: "U4bVkotSBQxyrQSo4ZE9", value: formData.description || "" },
      ],
    };

    // ✅ ensure this path matches your actual route file
    // if your file is app/api/contacts/route.js, use "/api/contacts"
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

    // Robust contact id extraction
    const contactId =
      result?.contact?.id || result?.id || result?.data?.id;
    if (!contactId) {
      console.error("Unexpected API response format:", result);
      throw new Error("No contact ID received. Check console for details.");
    }

    router.push("/meeting-schedule");
  } catch (err) {
    console.error("Submission failed:", err);
    alert(`Error: ${err?.message || "Submission failed"}`);
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <>
      <form
        id="credit-assesment"
        onSubmit={handleSubmit}
        className="mx-auto max-w-2xl space-y-3 rounded-xl bg-white p-4 shadow-lg"
        noValidate
      >
        {/* Name */}
        <div className="grid gap-3 grid-cols-2">
          <TextInput
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            Icon={User}
            error={formErrors.firstName}
            className="text-blue-900"
          />
          <TextInput
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            Icon={User}
            error={formErrors.lastName}
            className="text-blue-900"
          />
        </div>

        {/* Contact */}
        <div className="grid grid-cols-2 gap-3 ">
          <TextInput
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="04XX XXX XXX"
            Icon={Phone}
            error={formErrors.phone}
            inputMode="tel"
            className="text-blue-900"
          />
          <TextInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            Icon={Mail}
            error={formErrors.email}
            inputMode="email"
            className="text-blue-900"
          />
        </div>

        {/* State + Employment (Yes/No) */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <SelectInput
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
            options={AUSTRALIAN_STATES}
            Icon={MapPin}
            error={formErrors.state}
            placeholder="Select your state"
          />

          <SelectInput
            label="Are you employed at the moment?"
            name="isEmployed"
            value={formData.isEmployed}
            onChange={handleChange}
            options={["Yes", "No"]}
            Icon={BriefcaseBusiness}
            error={formErrors.isEmployed}
            placeholder="Select an option"
          />
        </div>

        {/* Description */}
        <TextAreaInput
          label="Message"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Add any details you'd like us to know…"
          Icon={ClipboardList}
          className="text-blue-900"
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-1 w-full rounded-lg bg-blue px-5 py-3 text-sm font-medium uppercase tracking-wider text-white shadow-md transition-all hover:from-blue-700 hover:to-blue-900 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Processing..." : "Apply Now"}
        </button>
      </form>
    </>
  );
}
