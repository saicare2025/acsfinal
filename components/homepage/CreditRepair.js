"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Search,
  Gavel,
  Clock,
  FileText,
  Fingerprint,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const CreditRepairSection = () => {
  const services = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Late Payment Removal",
      description:
        "We'll help dispute and correct late payment history inaccuracies.",
      href: "/does-late-rent-payment-affect-credit-score-australia",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Credit Inquiry Removal",
      description:
        "Any unwarranted credit inquiries? We'll challenge them for you.",
      href: "/credit-enquiry-removal",
    },
    {
      icon: <Gavel className="w-6 h-6" />,
      title: "Court Judgment Removal",
      description:
        "Assistance with addressing and resolving any court judgments.",
      href: "/court-judgment-removal",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Repayment History Disputes",
      description:
        "We'll help dispute and correct repayment history inaccuracies.",
      href: "/worst-repayment-history-removal",
    },
    {
      icon: <Fingerprint className="w-6 h-6" />,
      title: "Fixing Identity Theft Issues",
      description: "We'll resolve identity theft issues affecting your credit.",
      href: "/credit-repair-australia",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Detailed Credit Report Analysis",
      description:
        "Comprehensive breakdown to understand and improve your score.",
      href: "/credit-enquiry-removal-australia",
    },
  ];

  return (
    <section id="credit-repair-services" className="lg:py-16 py-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Credit Repair{" "}
            <span className="bg-blue bg-clip-text text-transparent">
              Services in Australia
            </span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              At Australian Credit Solutions, we help you take control of your
              financial reputation through expert credit profile management.
            </p>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-center text-blue-900 mb-8"
          >
            How We Can Help You?
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-sm overflow-hidden border border-blue-100 hover:shadow-md transition-all hover:border-blue-200 group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 border border-blue-200 group-hover:from-blue-200 group-hover:to-blue-300 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-blue-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-blue-700 pl-14 mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="flex items-center text-blue font-medium pl-14 group-hover:text-blue-800 transition-colors"
                  >
                    Learn more <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <Link href="/free-credit-assessment">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-blue to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg shadow-md transition-all">
              Get Your Free Credit Assessment
            </button>
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default CreditRepairSection;