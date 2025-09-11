"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ScheduleModal({ onClose, onSubmit }) {
  const [selectedTime, setSelectedTime] = useState("");
  const [currentStep, setCurrentStep] = useState("form");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedTime) return;
    onSubmit({ timeSlot: selectedTime });
    setCurrentStep("confirmation");
  };

  useEffect(() => {
    if (currentStep === "confirmation") {
      const timer = setTimeout(() => {
        onClose();
        router.push("/booking-confirmation"); // Navigate after closing modal
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, onClose, router]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-xl bg-white shadow-xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b p-4">
          <h3 className="text-lg font-semibold text-blue-900">
            {currentStep === "form" ? "Schedule Your Call" : "Booking Confirmed"}
          </h3>
          <button
            onClick={onClose}
            className="p-2 text-blue-700 hover:text-blue-900"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Content */}
        {currentStep === "form" ? (
          <form onSubmit={handleSubmit} className="space-y-4 p-4">
            <label className="block text-base font-medium text-blue-900">
              Select Time Slot
              <input
                type="datetime-local"
                className="mt-1 w-full rounded-lg border border-blue-200 p-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
              />
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 rounded-lg border border-blue-200 p-2 text-blue-700 hover:bg-blue-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-1/2 rounded-lg bg-blue-600 p-2 font-medium text-white hover:bg-blue-700 disabled:opacity-60"
                disabled={!selectedTime}
              >
                Confirm
              </button>
            </div>
          </form>
        ) : (
          <div className="p-6 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="text-base font-semibold text-blue-900">Thank You!</h4>
            <p className="mt-1 text-base text-blue-800">
              Your assessment has been successfully scheduled.
            </p>
            <button
              onClick={() => {
                onClose();
                router.push("/booking-confirmation");
              }}
              className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-base font-medium text-white hover:bg-blue-700"
            >
              View Confirmation
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
