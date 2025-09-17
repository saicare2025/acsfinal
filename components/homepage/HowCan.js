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
      link: "/default-removal-services-australia",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Challenging Unauthorized Inquiries",
      fullDesc:
        "We identify enquiries you didn't authorise and submit formal dispute requests to have them corrected.",
      link: "/credit-enquiry-removal",
    },
    {
      icon: <Gavel className="w-6 h-6" />,
      title: "Court Judgment Reviews",
      fullDesc:
        "We verify whether judgments are reported accurately and, if found incorrect or outdated, request updates through official channels.",
      link: "/court-judgment-removal",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Repayment History Disputes",
      fullDesc:
        "We examine your records for errors and work to have inaccuracies corrected.",
      link: "/worst-repayment-history-removal",
    },
    {
      icon: <FileSearch className="w-6 h-6" />,
      title: "Detailed Credit Report Analysis",
      fullDesc:
        "We thoroughly assess every aspect of your credit file to identify opportunities for profile improvement.",
      link: "/best-credit-cleanup-company-australia",
    },
    {
      icon: <Fingerprint className="w-6 h-6" />,
      title: "Addressing Identity Theft Impacts",
      fullDesc:
        "We guide you through the process of disputing fraudulent accounts, correcting inaccurate listings, and implementing preventative measures.",
      link: "/credit-repair-after-identity-theft-australia",
    },
  ];

  return (
    <section
      id="howcanhelp"
      className="lg:py-16 py-8 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How we{" "}
            <span className="bg-blue bg-clip-text text-transparent">
              can help you
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
                className="bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 overflow-hidden"
                style={{
                  minHeight: isExpanded ? "320px" : "220px",
                  height: isExpanded ? "auto" : "220px",
                }}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="p-3 mb-4 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 shadow-xs border border-blue-200">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-blue-900">
                      {service.link ? (
                        <Link
                          href={service.link}
                          className="hover:text-blue-700 transition-colors"
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
                        <p className="text-blue-700 text-base text-center">
                          {service.fullDesc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-auto pt-4 border-t border-blue-100 flex justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCard(index);
                      }}
                      className="text-base font-medium text-blue-600 hover:text-blue-800 flex items-center transition-colors"
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
    </section>
  );
};

export default HelpSection;