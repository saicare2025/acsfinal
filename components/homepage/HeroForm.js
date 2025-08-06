import { User, Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";

const states = ["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"];

// Reusable text input
function TextInput({ label, name, type = "text", value, onChange, placeholder, Icon }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-semibold text-blue-900 mb-1 uppercase tracking-wider"
      >
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-700" />
        )}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required
          className="w-full text-sm pl-10 pr-4 py-2.5 bg-white border border-blue-100 rounded-lg focus:ring-2 focus:ring-blueus:border-blueblueue-900 placeholder-blue-400 transition-all duration-200"
          placeholder={placeholder}
          autoComplete="off"
        />
      </div>
    </div>
  );
}

// Reusable select input
function SelectInput({ label, name, value, onChange, options, Icon }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-semibold text-blue-900 mb-1 uppercase tracking-wider"
      >
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-700" />
        )}
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-700 pointer-events-none" />
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required
          className="w-full text-sm pl-10 pr-8 py-2.5 bg-white border border-blue-100 rounded-lg focus:ring-2 focus:ring-blueus:border-blueblueue-900 appearance-none placeholder-blue-400 transition-all duration-200"
        >
          <option value="" disabled className="text-blue-400">
            Select your state
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="text-blue-900">
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default function CreditAssessmentForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    state: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-2 lg:space-y-4 bg-white p-4 sm:p-6 rounded-xl shadow-xl max-w-lg mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextInput
          label="First Name *"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="John"
          Icon={User}
        />
        <TextInput
          label="Last Name *"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Doe"
          Icon={User}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextInput
          label="Phone *"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="04XX XXX XXX"
          Icon={Phone}
          type="tel"
        />
        <TextInput
          label="Email *"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          Icon={Mail}
          type="email"
        />
      </div>
      <SelectInput
        label="State *"
        name="state"
        value={formData.state}
        onChange={handleChange}
        options={states}
        Icon={MapPin}
      />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-blue text-white py-3 px-6 rounded-lg font-medium text-sm uppercase tracking-wider hover:shadow-lg transition-all duration-200 shadow-md hover:from-blue-800 hover:via-blue-900 hover:to-blue-950 mt-2"
      >
        Get Free Assessment
      </button>
    </form>
  );
}
