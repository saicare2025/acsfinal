"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import PremiumTestimonialCarousel from "@/components/homepage/Testmonials";

const QUESTIONS = [
  {
    key: "credit_card_count",
    question: "How many credit cards are in your name right now?",
    options: ["0", "1", "2", "3", "4+"],
  },
  {
    key: "credit_concern_reason",
    question: "What made you think your credit score might need improvement?",
    options: [
      "I was declined for finance",
      "A credit check showed problems",
      "My bank or broker told me",
      "I'm just curious, not sure",
      "Other reasons not listed here",
    ],
  },
  {
    key: "credit_goal",
    question: "What's your main reason for wanting a better credit score?",
    options: [
      "Home Loan",
      "Car Loan",
      "Personal Loan",
      "Planning for the Future",
      "Just want a better score",
    ],
  },
  {
    key: "employment_status",
    question: "What's your current work situation?",
    options: [
      "Full Time",
      "Part Time",
      "Casual",
      "Unemployed",
      "On Centrelink / Pension",
    ],
  },
  {
    key: "has_credit_report",
    question: "Do you have a recent copy of your credit report?",
    options: ["Yes", "No"],
  },
];

export default function CreditQuiz() {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    fullName: "",
    phone: "",
    email: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
  });

  const isQuestionStep = currentStep < QUESTIONS.length;
  const totalStepsIncludingForm = QUESTIONS.length + 1;
  const progress = Math.round(
    ((currentStep + 1) / totalStepsIncludingForm) * 100
  );

  const currentQuestion = useMemo(
    () => (isQuestionStep ? QUESTIONS[currentStep] : null),
    [isQuestionStep, currentStep]
  );

  // Populate UTM fields from URL
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const get = (k) => params.get(k) || "";
    setContactInfo((prev) => ({
      ...prev,
      utm_source: get("utm_source"),
      utm_medium: get("utm_medium"),
      utm_campaign: get("utm_campaign"),
    }));
  }, []);

  const goNext = () =>
    setCurrentStep((prev) => Math.min(prev + 1, totalStepsIncludingForm - 1));

  const handleSelect = (option) => {
    if (!currentQuestion) return;
    const { key } = currentQuestion;
    setAnswers((prev) => ({ ...prev, [key]: option }));

    // If user says they have a report, pause for upload on this step
    if (key === "has_credit_report" && option === "Yes") return;

    // brief delay for visual feedback
    setTimeout(goNext, 200);
  };

  const handleKeySelect = (e) => {
    const target = e.currentTarget;
    const value = target.getAttribute("data-value");
    if (!value) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSelect(value);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
    if (file) setTimeout(goNext, 200);
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("fullName", contactInfo.fullName);
    formData.append("phone", contactInfo.phone);
    formData.append("email", contactInfo.email);
    formData.append("utm_source", contactInfo.utm_source);
    formData.append("utm_medium", contactInfo.utm_medium);
    formData.append("utm_campaign", contactInfo.utm_campaign);
    formData.append("answers", JSON.stringify(answers));
    if (image) formData.append("image", image);

    try {
      const res = await fetch("/api/ghl/quiz-upload", {
        method: "POST",
        body: formData,
      });

      let payload;
      try {
        payload = await res.clone().json();
      } catch {
        payload = { error: await res.text() };
      }

      if (!res.ok || payload?.ok === false) {
        alert(
          "Submission error: " +
            (payload?.error || `Request failed (${res.status})`) +
            (payload?.details
              ? `\nDetails: ${
                  typeof payload.details === "string"
                    ? payload.details
                    : JSON.stringify(payload.details)
                }`
              : "")
        );
        return;
      }

      router.push("/booking-confirmation");
    } catch (err) {
      console.error("Submit failed:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const showImageUpload =
    isQuestionStep &&
    currentQuestion?.key === "has_credit_report" &&
    answers.has_credit_report === "Yes" &&
    !image;

  return (
    <>
      <div className="max-w-xl mx-auto mt-8 bg-white p-8 rounded-xl shadow-lg">
        {/* Header / Progress */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-center text-blue-900 leading-snug">
            Check If You Qualify To{" "}
            <span className="text-blue">Improve Your Credit Score</span>
          </h1>

          <div className="mt-4">
            <div className="flex justify-between text-sm font-medium text-blue-700">
              <span>
                Step {currentStep + 1} of {totalStepsIncludingForm}
              </span>
              <span>{progress}% Complete</span>
            </div>
            <div className="w-full bg-blue-100 rounded-full h-2 mt-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Steps */}
        {isQuestionStep ? (
          <div>
            <h2 className="text-lg font-semibold mb-4 text-center">
              {currentQuestion?.question}
            </h2>

            {/* Centered grid of blue selectable tiles */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md w-full">
                {currentQuestion?.options.map((option) => {
                  const isSelected = answers[currentQuestion.key] === option;
                  return (
                    <div
                      key={option}
                      role="button"
                      tabIndex={0}
                      data-value={option}
                      onClick={() => handleSelect(option)}
                      onKeyDown={handleKeySelect}
                      aria-pressed={isSelected}
                      className={`p-4 rounded-xl text-center font-medium cursor-pointer transition-all outline-none
                ${
                  isSelected
                    ? "bg-blue text-white shadow-md ring-2 ring-blue-600"
                    : "bg-blue-100 text-blue-800 hover:bg-blue-200 focus:ring-2 focus:ring-blue-400"
                }`}
                    >
                      {option}
                    </div>
                  );
                })}
              </div>
            </div>

            {showImageUpload && (
              <div className="mt-6">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Upload your credit report (optional)
                </label>
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={handleImageChange}
                  className="w-full p-2 rounded-lg bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <p className="text-xs text-gray-500 mt-2 text-center">
                  After you choose a file, we’ll move to the next step
                  automatically.
                </p>
              </div>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-lg font-semibold mb-4">
              Your Contact Information
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={contactInfo.fullName}
                onChange={handleContactChange}
                className="w-full p-3 rounded-xl bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={contactInfo.phone}
                onChange={handleContactChange}
                className="w-full p-3 rounded-xl bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={contactInfo.email}
                onChange={handleContactChange}
                className="w-full p-3 rounded-xl bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue text-white py-4 rounded-xl hover:bg-blue-700 transition-all flex justify-center items-center disabled:opacity-60"
            >
              {isSubmitting ? "Processing..." : "Get My Free Credit Assessment"}
            </button>
          </form>
        )}
      </div>

      <PremiumTestimonialCarousel />
    </>
  );
}
