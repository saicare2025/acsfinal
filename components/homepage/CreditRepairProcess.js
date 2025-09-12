"use client";

import React, { useState, useMemo } from "react";

export default function CreditRepairProcess({ phoneNumber = "0489 265 737" }) {
  const [expandedId, setExpandedId] = useState(null);

  const steps = useMemo(
    () => [
      {
        id: 1,
        title: "Generate Your Premium Credit Report",
        description:
          "The first step is generating a premium credit report—the same type lenders review before approving a loan.",
        details:
          "If you already have a premium report, share it with us. If not, we can generate one for $29.99. We'll guide you over the phone step by step and review the report together. You'll receive a copy once it's generated.",
      },
      {
        id: 2,
        title: "Identify & Dispute Negative Listings",
        description:
          "We perform a detailed assessment of your report, analyzing each item thoroughly. Normally $299, now offered as a no-obligation, risk-free assessment for a limited time.",
        details:
          "We'll go through each point with you on a call so you fully understand every aspect of your report.",
      },
      {
        id: 3,
        title: "Remove Inaccuracies from Your Credit File",
        description:
          "We'll advise if we can take your case, estimate timelines, and discuss payment terms.",
        details:
          "We only proceed if we're confident, under our No Win No Fee policy (T&Cs apply), so you're in safe hands throughout.",
      },
    ],
    []
  );

  const toggleExpand = (id) => setExpandedId((prev) => (prev === id ? null : id));

  const telHref = `tel:${phoneNumber.replace(/\s+/g, "")}`;

  return (
    <section id="our-process" className="lg:py-12 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-start mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Proven Credit Repair Process
          </h2>
          <p className="text-lg text-gray-600">
            A simple, transparent process to help improve your credit score
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const isOpen = expandedId === step.id;
            const detailsId = `step-details-${step.id}`;
            return (
              <div
                key={step.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#0668a5]"
              >
                <div className="p-2 bg-[#0668a5]">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto">
                    <span className="text-[#0668a5] font-bold text-xl">{step.id}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>

                  <div
                    id={detailsId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                    aria-hidden={!isOpen}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-4">
                        <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">{step.details}</p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleExpand(step.id)}
                    className="mt-4 text-[#0668a5] font-semibold inline-flex items-center hover:underline focus:outline-none focus:ring-2 focus:ring-[#0668a5] focus:ring-offset-2 rounded"
                    aria-expanded={isOpen}
                    aria-controls={detailsId}
                  >
                    {isOpen ? "Read Less" : "Read More"}
                    <svg
                      className={`ml-2 w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center bg-[#0668a5] text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Improve Your Credit Score</h3>
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            To begin your credit repair journey, you can chat with us live, schedule a call, or call us at{" "}
            <a href={telHref} className="font-bold hover:underline ml-1">
              {phoneNumber}
            </a>
            .
          </p>
          <a
            href={telHref}
            className="inline-block bg-white text-[#0668a5] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
