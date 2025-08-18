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
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Removing Incorrect Defaults",
      description: "We'll help fix any false defaults affecting your score.",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Disputing Invalid Inquiries",
      description:
        "Any unwarranted credit inquiries? We'll challenge them for you.",
    },
    {
      icon: <Gavel className="w-6 h-6" />,
      title: "Court Judgments",
      description:
        "Assistance with addressing and resolving any court judgments.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Worst Repayment History Disputes",
      description:
        "We'll help dispute and correct repayment history inaccuracies.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Detailed Credit Report Analysis",
      description:
        "Comprehensive breakdown to understand and improve your score.",
    },
    {
      icon: <Fingerprint className="w-6 h-6" />,
      title: "Fixing Identity Theft Issues",
      description: "We'll resolve identity theft issues affecting your credit.",
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Are You Facing{" "}
            <span className="text-blue">Credit Score Issues</span>?
          </h2>
          <p className="text-xl text-blue font-medium mb-6">
            Fix your Credit with the #1 Credit Repair Solution
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              At Australian Credit Solutions, we help you take control of your
              financial reputation through expert credit profile management.
            </p>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-center text-gray-800 mb-8"
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
                className="bg-gradient-to-br from-white to-blue-100 rounded-xl shadow-sm overflow-hidden border border-blue-100 hover:shadow-md transition-all hover:border-blue-200 group"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-blue-100/50 rounded-lg text-blue group-hover:bg-blue/10 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 pl-12 mb-4">
                    {service.description}
                  </p>
                  <button className="flex items-center text-blue font-medium pl-12 group-hover:text-blue-700 transition-colors">
                    Learn more <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
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
            <button className="px-8 py-3 bg-blue hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors">
              Get Your Free Credit Assessment
            </button>
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default CreditRepairSection;
