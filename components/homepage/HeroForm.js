"use client"
import { useState } from "react";
import { User, Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import ScheduleModal from "../ScheduleModal";
import { useRouter } from "next/navigation";


const AUSTRALIAN_STATES = ["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"];

const TextInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  Icon,
  error,
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
        className={`w-full rounded-lg border py-2.5 pl-10 pr-4 text-sm transition-all duration-200 ${
          error
            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
            : "border-blue-100 focus:border-blue-500 focus:ring-blue-500"
        }`}
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
}) => (
  <div className="space-y-1">
    <label className="block text-xs font-semibold uppercase tracking-wider text-blue-900">
      {label}
    </label>
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-700" />
      )}
      <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-700" />
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full appearance-none rounded-lg border py-2.5 pl-10 pr-8 text-sm ${
          error
            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
            : "border-blue-100 focus:border-blue-500 focus:ring-blue-500"
        } ${!value ? "text-blue-400" : "text-blue-900"}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      >
        <option value="" disabled hidden>
          Select your state
        </option>
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

export default function CreditAssessmentForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    state: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = "Required field";
    if (!formData.lastName.trim()) errors.lastName = "Required field";
    if (!formData.phone.trim()) errors.phone = "Required field";
    if (!formData.email.trim()) {
      errors.email = "Required field";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.state) errors.state = "Please select a state";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowScheduleModal(true);
    }, 600);
  };

  const handleScheduleSubmit = (scheduleData) => {
    // Here you would typically send data to your backend
    console.log("Form submission:", { ...formData, ...scheduleData });
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      state: "",
    });
    router.push("/booking-confirmation");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-lg space-y-4 rounded-xl bg-white p-6 shadow-xl"
        noValidate
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <TextInput
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            Icon={User}
            error={formErrors.firstName}
          />
          <TextInput
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            Icon={User}
            error={formErrors.lastName}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <TextInput
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="04XX XXX XXX"
            Icon={Phone}
            error={formErrors.phone}
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
          />
        </div>

        <SelectInput
          label="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          options={AUSTRALIAN_STATES}
          Icon={MapPin}
          error={formErrors.state}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-sm font-medium uppercase tracking-wider text-white shadow-md transition-all hover:from-blue-600 hover:to-blue-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Processing..." : "Get Free Assessment"}
        </button>
      </form>

      {showScheduleModal && (
        <ScheduleModal
          onClose={() => setShowScheduleModal(false)}
          onSubmit={handleScheduleSubmit}
        />
      )}
    </>
  );
}
