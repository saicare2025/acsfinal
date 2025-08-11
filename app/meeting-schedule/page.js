"use client";

import { useState } from "react";
import { Calendar, Clock, User, Mail, Phone, Info } from "lucide-react";
import logo from "../../app/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import MainLayout from "../MainLayout";
import { useRouter } from "next/navigation";

export default function MeetingScheduled() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    notes: "",
    consent: false,
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const router = useRouter();

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime("");
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? e.target.checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (step === 1) {
      // Step 1: require date and time before moving on
      if (selectedDate && selectedTime) {
        setStep(2);
      }
    } else {
      // Step 2: show thank you popup
      setShowThankYou(true);

      // Log or send the booking data
      console.log({
        ...formData,
        date: selectedDate,
        time: selectedTime,
      });

      // Redirect after 2 seconds
      setTimeout(() => {
        router.push("/booking-confirmation");
      }, 2000);
    }
  };

  // Sample available times
  const availableTimes = [
    "09:00 AM",
    "10:30 AM",
    "01:00 PM",
    "02:30 PM",
    "04:00 PM",
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {showThankYou && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm">
                <h2 className="text-lg font-semibold text-blue-900">
                  Thank You!
                </h2>
                <p className="mt-2 text-blue-700 text-sm">
                  Your booking has been confirmed. Redirecting...
                </p>
              </div>
            </div>
          )}
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  step >= 1
                    ? "bg-blue text-white"
                    : "bg-blue-200 text-blue"
                }`}
              >
                1
              </div>
              <div
                className={`h-1 flex-1 ${
                  step >= 2 ? "bg-blue" : "bg-blue-200"
                }`}
              ></div>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  step === 2
                    ? "bg-blue text-white"
                    : "bg-blue-200 text-blue"
                }`}
              >
                2
              </div>
            </div>
            <div className="mt-2 flex justify-between text-sm font-medium text-blue">
              <span>Select Time</span>
              <span>Your Details</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            {/* Header with Logo */}
            <div className="border-b border-blue-200 bg-white p-6 text-center">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Go to homepage"
              >
                <Image
                  src={logo}
                  alt="Company Logo"
                  width={200}
                  height={60}
                  priority
                />
              </Link>
              <h1 className="mt-4 text-2xl font-bold text-blue-900">
                Schedule Your Assessment
              </h1>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Left Side - Meeting Info */}
                  <div className="border-r border-blue-200 p-6 md:p-8">
                    <h2 className="text-xl font-semibold text-blue-900">
                      Credit Repair Assessment
                    </h2>
                    <div className="mt-4 space-y-4 text-blue-700">
                      <div className="flex items-start">
                        <div className="mr-3 mt-0.5 flex-shrink-0">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue">
                            <Clock className="h-5 w-5" />
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">15 Minute Meeting</p>
                          <p className="text-sm text-blue-500">
                            Mon, Aug 11, 2025
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 rounded-lg bg-blue-50 p-4">
                        <h3 className="text-sm font-medium text-blue-800">
                          Preparation Note
                        </h3>
                        <p className="mt-1 text-sm text-blue-700">
                          We&apos;ll conduct a Free Credit Assessment during our
                          meeting. Please email your credit file to
                          <span className="font-semibold">
                            {" "}
                            help@australiancreditlawyers.com.au
                          </span>{" "}
                          or we&apos;ll organize one during the call.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Calendar */}
                  <div className="p-6 md:p-8">
                    <h2 className="flex items-center text-xl font-semibold text-blue-900">
                      <Calendar className="mr-2 h-5 w-5 text-blue" />
                      Select Date & Time
                    </h2>

                    <div className="mt-6">
                      <label className="block text-sm font-medium text-blue-700">
                        Choose Date
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => handleDateSelect(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-blue-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {selectedDate && (
                      <div className="mt-6">
                        <label className="block text-sm font-medium text-blue-700">
                          Available Times
                        </label>
                        <div className="mt-2 grid grid-cols-2 gap-2">
                          {availableTimes.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => handleTimeSelect(time)}
                              className={`rounded-md py-2 px-3 text-sm font-medium ${
                                selectedTime === time
                                  ? "bg-blue text-white"
                                  : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="p-6 md:p-8">
                  <h2 className="flex items-center text-xl font-semibold text-blue-900">
                    <User className="mr-2 h-5 w-5 text-blue" />
                    Enter Your Details
                  </h2>

                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-blue-700"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-blue-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-blue-700"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-blue-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-blue-700"
                      >
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-blue-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-blue-700"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-blue-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="notes"
                      className="block text-sm font-medium text-blue-700"
                    >
                      Additional Information
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border border-blue-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Is there anything you'd like us to know before your appointment?"
                    />
                  </div>

                  <div className="mt-4 flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        className="h-4 w-4 rounded border-blue-300 text-blue focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="consent"
                        className="font-medium text-blue-700"
                      >
                        I confirm that I want to receive content from this
                        company using any contact information I provide.
                      </label>
                    </div>
                  </div>
                </div>
              )}

              <div className="border-t border-blue-200 bg-blue-50 px-6 py-4 sm:px-8">
                <div className="flex justify-between">
                  {step === 2 && (
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="rounded-md border border-blue-300 bg-white py-2 px-4 text-sm font-medium text-blue-700 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    className={`ml-auto rounded-md border border-transparent bg-blue py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      step === 1 ? "w-full" : ""
                    }`}
                  >
                    {step === 1 ? "Continue to Details" : "Confirm Booking"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
