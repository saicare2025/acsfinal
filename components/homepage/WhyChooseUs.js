"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck, Trophy, Star, BadgeCheck, ChevronDown, ChevronUp,
} from "lucide-react";

const WhyChooseUs = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard((prev) => (prev === index ? null : index));
  };

  const reasons = [
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "Licensed Credit Experts",
      shortDesc: "Certified professionals with deep expertise in Australian credit law",
      fullDesc: "Our team consists of licensed credit experts with extensive experience in Australian credit law. We understand the complexities of the credit reporting system and have the legal knowledge to effectively dispute inaccuracies on your credit file.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Proven Results – 98% Success Rate",
      shortDesc: "Exceptional track record of successful credit repair outcomes",
      fullDesc: "With a 98% success rate, we've helped thousands of Australians improve their credit scores. Our proven methodology and legal expertise ensure the best possible outcomes for our clients' credit repair needs.",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-100",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Affordable, Transparent Process",
      shortDesc: "Clear pricing with no hidden fees or surprises",
      fullDesc: "We believe in transparent, affordable credit repair services. Our pricing is clear and upfront, with no hidden fees. We offer flexible payment options and stand behind our work with our no win, no fee guarantee.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Verified with AFCA & ASIC Australia",
      shortDesc: "Registered with AFCA and ASIC",
      fullDesc: "We are officially registered with the Australian Financial Complaints Authority (AFCA) and the Australian Securities and Investments Commission (ASIC). These verifications ensure we meet strict Australian regulatory standards, giving you confidence in our trustworthiness, professionalism, and compliance.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-100",
    },
  ];

  return (
    <section id="whychooseus" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-start mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Australian Credit Solutions?
          </h2>
          <p className="text-lg text-gray-600">
           Discover what makes us the preferred choice for credit assistance in Australia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const isOpen = expandedCard === index;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`${reason.bgColor} ${reason.borderColor} rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border overflow-hidden`}
                style={{
                  minHeight: isOpen ? 'auto' : '280px',
                  height: isOpen ? 'auto' : '280px'
                }}
                onClick={() => toggleCard(index)}
                role="button"
                tabIndex={0}
              >
                <div className="p-4 cursor-pointer flex flex-col h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-3 mb-4 rounded-full ${reason.color} bg-white shadow-xs border ${reason.borderColor}`}>
                      {reason.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-600 mb-4 leading-snug">{reason.shortDesc}</p>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-gray-200">
                          <p className="text-gray-600 text-center leading-relaxed">{reason.fullDesc}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-auto pt-4 flex justify-center">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCard(index);
                      }}
                      className={`flex items-center ${reason.color} font-bold text-base hover:underline`}
                    >
                      {isOpen ? (
                        <>
                          <span>Show less</span>
                          <ChevronUp className="ml-1 w-4 h-4" />
                        </>
                      ) : (
                        <>
                          <span>Learn more</span>
                          <ChevronDown className="ml-1 w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;