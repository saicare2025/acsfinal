"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (index) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How long does credit repair take in Australia?",
      answer: "Credit repair timelines vary depending on the complexity of your case. Most disputes are resolved within 30-60 days, but some may take up to 90 days. We work efficiently to get results as quickly as possible while ensuring accuracy."
    },
    {
      question: "Can you remove defaults and hard inquiries?",
      answer: "Yes, we can help remove inaccurate defaults and unauthorized hard inquiries from your credit file. We dispute these listings with the credit bureaus and creditors, following Australian credit reporting laws to ensure proper removal."
    },
    {
      question: "What proof do you need to dispute a listing?",
      answer: "We need documentation that supports your dispute, such as bank statements, correspondence with creditors, payment records, or other relevant evidence. Our team will guide you on what specific documents are needed for your case."
    }
  ];

  return (
    <section id="faqs" className="lg:py-16 py-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently{" "}
            <span className="bg-blue bg-clip-text text-transparent">
              Asked Questions
            </span>
          </h2>
          <p className="text-lg text-blue-700 max-w-3xl mx-auto">
            Get answers to common questions about our credit repair services
          </p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => {
            const isExpanded = expandedItems.includes(index);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-blue-50/50 transition-colors rounded-2xl"
                  aria-expanded={isExpanded}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-blue-900 pr-4">
                    {faq.question}
                  </h3>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    id={`faq-answer-${index}`}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-blue-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;