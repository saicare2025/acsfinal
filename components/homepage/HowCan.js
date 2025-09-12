"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ShieldCheck,
  Search,
  Gavel,
  Clock,
  FileSearch,
  Fingerprint,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";

const HelpSection = () => {
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCard = (index) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const services = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Disputing Potentially Incorrect Default Listings",
      fullDesc:
        "We review each default, gather supporting evidence, and formally submit disputes to credit reporting agencies when information appears inaccurate.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      link: "/default-removal-services-australia",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Challenging Unauthorized Inquiries",
      fullDesc:
        "We identify enquiries you didn't authorise and submit formal dispute requests to have them corrected.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      link: "/credit-enquiry-removal",
    },
    {
      icon: <Gavel className="w-6 h-6" />,
      title: "Court Judgment Reviews",
      fullDesc:
        "We verify whether judgments are reported accurately and, if found incorrect or outdated, request updates through official channels.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      link: "/court-judgment-removal",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Repayment History Disputes",
      fullDesc:
        "We examine your records for errors and work to have inaccuracies corrected.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      link: "/worst-repayment-history-removal",
    },
    {
      icon: <FileSearch className="w-6 h-6" />,
      title: "Detailed Credit Report Analysis",
      fullDesc:
        "We thoroughly assess every aspect of your credit file to identify opportunities for profile improvement.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      link: "/credit-score",
    },
    {
      icon: <Fingerprint className="w-6 h-6" />,
      title: "Addressing Identity Theft Impacts",
      fullDesc:
        "We guide you through the process of disputing fraudulent accounts, correcting inaccurate listings, and implementing preventative measures.",
      color: "text-red-600",
      bgColor: "bg-red-50",
      link: "/credit-repair-australia",
    },
  ];

  return (
    <section
      id="howcanhelp"
      className="py-16 bg-gradient-to-br from-white to-blue-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        {/* Services Section */}
        <div className="w-full lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-start mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How we{" "}
              <span className="bg-blue bg-clip-text text-transparent">
                can help you
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              We apply our expertise to help you understand and manage your
              credit profile.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const isExpanded = expandedCards.includes(index);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${service.bgColor} rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 overflow-hidden`}
                  style={{
                    minHeight: isExpanded ? "320px" : "220px",
                    height: isExpanded ? "auto" : "220px",
                  }}
                >
                  <div className="py-4 px-2 h-full flex flex-col">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div
                        className={`p-3 mb-3 rounded-lg ${service.color} bg-white shadow-xs border border-gray-100`}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {service.link ? (
                          <Link
                            href={service.link}
                            className="hover:text-blue-600 transition-colors"
                          >
                            {service.title}
                          </Link>
                        ) : (
                          service.title
                        )}
                      </h3>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-600 text-base text-center">
                            {service.fullDesc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="mt-auto pt-4 border-t border-gray-200/50 flex justify-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCard(index);
                        }}
                        className={`text-base font-medium ${service.color} flex items-center hover:underline`}
                      >
                        {isExpanded ? (
                          <>
                            <span>Read less</span>
                            <ChevronUp className="ml-1 w-4 h-4" />
                          </>
                        ) : (
                          <>
                            <span>Read more</span>
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

        {/* Video Testimonial Section (1/3 width) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/3 mt-12 lg:mt-36"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-8">
            <div className="relative bg-black">
              {/* Professional video styling */}
              <video
                className="w-full h-auto rounded-t-xl"
                src="/video.mp4"
                controls
                playsInline
                preload="metadata"
                
              />
              {/* Optional overlay tag */}
              <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow">
                Client Story
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Client Video Testimonial
              </h3>
              <p className="mt-2 text-gray-600">
                Watch how our team helped clients improve their credit profile
                and achieve financial peace of mind.
              </p>
              {/* Star rating or client info for extra credibility */}
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0l2.95 5.955 6.562.955-4.756 4.635 1.122 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="mt-2 text-sm text-gray-500">— Flavio G.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HelpSection;
