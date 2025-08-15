"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import MainLayout from "../MainLayout";
import PremiumTestimonialCarousel from "@/components/homepage/TestmonialHero";

const CreditQuiz = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

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

  const questions = [
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

  useEffect(() => {
    setContactInfo((prev) => ({
      ...prev,
      utm_source: searchParams.get("utm_source") || "",
      utm_medium: searchParams.get("utm_medium") || "",
      utm_campaign: searchParams.get("utm_campaign") || "",
    }));
  }, [searchParams]);

  const handleAnswerChange = (answer) => {
    const currentKey = questions[currentStep].key;
    setAnswers((prev) => ({ ...prev, [currentKey]: answer }));
  };

  const handleNext = () => {
    if (answers[questions[currentStep].key]) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
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
    if (image) {
      formData.append("image", image);
    }

    try {
      const res = await fetch("/api/ghl/quiz-upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert("Submission error: " + errorData.error);
        setIsSubmitting(false);
        return;
      }

      await res.json();
      router.push("/booking-confirmation");
    } catch (err) {
      console.error("Submit failed:", err);
      alert("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  const progress = ((currentStep + 1) / (questions.length + 1)) * 100;
  const showImageUpload = currentStep === 4 && answers.has_credit_report === "Yes";

  return (
    <MainLayout>
      <div className="max-w-xl mx-auto mt-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-center text-blue-800">
            Credit Assessment Quiz
          </h1>
          <p className="text-center text-blue-500 mt-2">
            Answer a few quick questions to get started
          </p>
          <div className="mt-4">
            <div className="flex justify-between text-sm font-medium text-blue-700">
              <span>Step {currentStep + 1} of {questions.length + 1}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-blue-100 rounded-full h-2 mt-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {currentStep < questions.length ? (
          <div>
            <h2 className="text-lg font-semibold mb-4">
              {questions[currentStep].question}
            </h2>

            <div className="space-y-3">
              {questions[currentStep].options.map((option, index) => {
                const isSelected = answers[questions[currentStep].key] === option;
                return (
                  <label
                    key={index}
                    className={`flex items-center p-3 border-2 rounded-xl cursor-pointer transition-all ${
                      isSelected
                        ? "bg-blue-50 border-blue-600"
                        : "border-blue-100 hover:border-blue-400"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${currentStep}`}
                      value={option}
                      checked={isSelected}
                      onChange={() => handleAnswerChange(option)}
                      className="sr-only"
                    />
                    <span
                      className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center border-2 ${
                        isSelected ? "bg-blue-600 border-blue-600" : "border-blue-300"
                      }`}
                    >
                      {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                    </span>
                    <span className="text-gray-800 font-medium">{option}</span>
                  </label>
                );
              })}
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
                  className="w-full p-2 border border-blue-200 rounded-lg"
                />
                {image && <p className="text-sm text-green-600 mt-2">Uploaded: {image.name}</p>}
              </div>
            )}

            <div className="flex justify-between mt-8">
              {currentStep > 0 ? (
                <button
                  onClick={handleBack}
                  className="bg-gray-100 px-5 py-2 rounded-xl text-gray-700 hover:bg-gray-200"
                >
                  Back
                </button>
              ) : <span></span>}

              <button
                onClick={handleNext}
                disabled={!answers[questions[currentStep].key]}
                className={`px-6 py-2 rounded-xl font-semibold ${
                  answers[questions[currentStep].key]
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Continue
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-lg font-semibold mb-4">Your Contact Information</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                name="fullName"
                required
                value={contactInfo.fullName}
                onChange={handleContactChange}
                className="w-full p-2 border border-blue-200 rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                value={contactInfo.phone}
                onChange={handleContactChange}
                className="w-full p-2 border border-blue-200 rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                required
                value={contactInfo.email}
                onChange={handleContactChange}
                className="w-full p-2 border border-blue-200 rounded-xl"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-all flex justify-center items-center"
            >
              {isSubmitting ? "Processing..." : "Get My Free Credit Assessment"}
            </button>
          </form>
        )}
      </div>

      <PremiumTestimonialCarousel />
    </MainLayout>
  );
};

export default CreditQuiz;
