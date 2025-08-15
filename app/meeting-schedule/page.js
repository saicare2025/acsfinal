"use client";

import { useState } from "react";
import { Calendar, Clock, User } from "lucide-react";
import logo from "../../app/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import MainLayout from "../MainLayout";
import { useRouter } from "next/navigation";

export default function MeetingScheduled() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    notes: "",
    consent: false,
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
  });

  const availableTimes = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCalendarSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const appointmentTime = `${selectedDate} ${selectedTime}`;

    const data = new FormData();
    data.append("fullName", fullName);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    data.append("notes", formData.notes);
    data.append("appointmentTime", appointmentTime);
    data.append("utm_source", formData.utm_source);
    data.append("utm_medium", formData.utm_medium);
    data.append("utm_campaign", formData.utm_campaign);

    try {
      const res = await fetch("/api/ghl/calendar-upload", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert("Submission failed: " + errorData.error);
        return;
      }

      await res.json();
      router.push("/booking-confirmation");
    } catch (err) {
      console.error("Submit failed:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-blue-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-6 flex items-center justify-between">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${step >= 1 ? "bg-blue text-white" : "bg-blue-100 text-blue"}`}>1</div>
            <div className={`flex-1 h-1 ${step >= 2 ? "bg-blue" : "bg-blue-100"}`}></div>
            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${step === 2 ? "bg-blue text-white" : "bg-blue-100 text-blue"}`}>2</div>
          </div>

          {/* Form */}
          <form onSubmit={handleCalendarSubmit} className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="text-center border-b border-blue-100 py-6 px-6">
              <Link href="/">
                <Image src={logo} alt="Logo" width={200} height={60} priority />
              </Link>
              <h2 className="text-xl font-bold text-blue-900 mt-2">Schedule Your Assessment</h2>
            </div>

            {step === 1 ? (
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left - Info */}
                <div className="border-r border-blue-100 p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Credit Repair Assessment</h3>
                  <p className="text-sm text-blue-700 mb-2">15 Minute Meeting</p>
                  <p className="text-sm text-blue-500">Mon, Aug 11, 2025</p>

                  <div className="mt-6 p-4 rounded-md bg-blue-50">
                    <h4 className="text-sm font-medium text-blue-800 mb-1">Preparation Note</h4>
                    <p className="text-sm text-blue-700">
                      We&apos;ll conduct a Free Credit Assessment during our meeting. Please email your credit file to <span className="font-semibold">help@australiancreditlawyers.com.au</span> or we&apos;ll organize one during the call.
                    </p>
                  </div>
                </div>

                {/* Right - Calendar */}
                <div className="p-6">
                  <label className="block text-sm font-medium text-blue-700 mb-2">Select Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full border border-blue-300 rounded-md p-2 mb-4"
                    required
                  />

                  {selectedDate && (
                    <>
                      <label className="block text-sm font-medium text-blue-700 mb-2">Select Time</label>
                      <div className="grid grid-cols-2 gap-3">
                        {availableTimes.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 rounded-md text-sm font-medium ${selectedTime === time ? "bg-blue text-white" : "bg-blue-100 text-blue-800"}`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="border border-blue-300 p-2 rounded-md"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="border border-blue-300 p-2 rounded-md"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone *"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border border-blue-300 p-2 rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border border-blue-300 p-2 rounded-md"
                />
                <textarea
                  name="notes"
                  rows="3"
                  placeholder="Additional Information"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="border border-blue-300 p-2 rounded-md col-span-full"
                />
                <div className="col-span-full flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-1"
                    required
                  />
                  <label className="text-sm text-blue-700">
                    I confirm that I want to receive content from this company using any contact information I provide.
                  </label>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="border-t border-blue-100 p-4 bg-blue-50 flex justify-between">
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-blue-700 text-sm font-medium hover:underline"
                >
                  ← Back
                </button>
              )}
              <button
                type={step === 1 ? "button" : "submit"}
                disabled={isSubmitting || (step === 1 && (!selectedDate || !selectedTime))}
                onClick={step === 1 ? () => setStep(2) : undefined}
                className="ml-auto bg-blue text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-blue-700"
              >
                {step === 1 ? "Continue" : isSubmitting ? "Submitting..." : "Confirm Booking"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
