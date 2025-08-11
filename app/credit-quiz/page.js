"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Progress from "@/components/Progress";
import MainLayout from "../MainLayout";
import PremiumTestimonialCarousel from "@/components/homepage/Testmonial";

const CreditQuiz = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [contactInfo, setContactInfo] = useState({
    fullName: "",
    phone: "",
  });

  const questions = [
    {
      question: "How many credit cards are in your name right now?",
      options: ["0", "1", "2", "3", "4+"],
    },
    {
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
      question: "Do you have a recent copy of your credit report?",
      options: ["Yes", "No"],
    },
  ];

  const handleAnswer = (answer) => {
    setAnswers((prev) => ({
      ...prev,
      [currentStep]: answer,
    }));

    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ answers, contactInfo });
    router.push("/meeting-schedule");
  };

  const progressValue = ((currentStep + 1) / (questions.length + 1)) * 100;

  return (
    <MainLayout>
      <div className="pt-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header with Gradient */}
          <div className="bg-gradient-to-r from-blue to-blue-800 p-6 text-center">
            <h1 className="text-2xl font-bold text-white">
              Credit Assessment Quiz
            </h1>
            <p className="text-blue-100 mt-2">
              Answer a few questions to get personalized credit repair
              recommendations
            </p>
          </div>

          <div className="p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-3">
                <span className="text-sm font-semibold text-blue-700">
                  Step {Math.min(currentStep + 1, questions.length)} of{" "}
                  {questions.length + 1}
                </span>
                <span className="text-sm font-semibold text-blue-700">
                  {Math.round(progressValue)}% Complete
                </span>
              </div>
              <div className="relative pt-1">
                <div className="overflow-hidden h-3 mb-4 text-xs flex rounded-full bg-blue-100">
                  <div
                    style={{ width: `${progressValue}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-blue"
                  ></div>
                </div>
              </div>
            </div>

            {currentStep < questions.length ? (
              <div className="quiz-step">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold mr-4">
                    {currentStep + 1}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {questions[currentStep].question}
                  </h2>
                </div>
                <div className="space-y-4">
                  {questions[currentStep].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      className="w-full text-left p-5 border-2 border-blue-100 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 flex items-center"
                    >
                      <span className="w-5 h-5 rounded-full border-2 border-blue-300 mr-4 flex-shrink-0"></span>
                      <span className="text-gray-700 font-medium">
                        {option}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold mr-4">
                    {questions.length + 1}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Your Contact Information
                  </h2>
                </div>
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={contactInfo.fullName}
                      onChange={handleContactChange}
                      className="w-full p-4 border-2 border-blue-100 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={contactInfo.phone}
                      onChange={handleContactChange}
                      className="w-full p-4 border-2 border-blue-100 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg mt-6"
                  >
                    Get My Free Credit Assessment
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-4">
                    By submitting, you agree to our{" "}
                    <a href="#" className="text-blue hover:underline">
                      Terms
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue hover:underline">
                      Privacy Policy
                    </a>
                    . We&apos;ll contact you to schedule your consultation.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
        <div className=" border-t border-blue-100 pt-6">
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8">
            {/* Security Badge */}
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="ml-3 text-sm font-medium text-gray-700">
                Your information is securely encrypted
              </span>
            </div>

            {/* Credit Score Badge */}
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="ml-3 text-sm font-medium text-gray-700">
                No impact to your credit score
              </span>
            </div>
          </div>

          {/* Additional Trust Indicators (optional) */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div className="flex items-center text-sm text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1.5 h-4 w-4 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Australian Credit Law Compliant
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1.5 h-4 w-4 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              100% Confidential Assessment
            </div>
          </div>
        </div>
      </div>
      <PremiumTestimonialCarousel />
    </MainLayout>
  );
};

export default CreditQuiz;
