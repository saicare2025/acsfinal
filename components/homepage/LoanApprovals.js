"use client";

import React from "react";
import { motion } from "framer-motion";
import { HomeIcon, CarIcon, CreditCardIcon } from "lucide-react";
import Link from "next/link";

const LoanApprovals = () => {
  const loanTypes = [
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: "Home Loan Approval",
      description: "Improve your credit score to secure better home loan rates and terms. Our credit repair services help you qualify for prime lending rates.",
      href: "/credit-repair-home-loan-approval",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: <CarIcon className="w-8 h-8" />,
      title: "Car Loan Approval",
      description: "Get approved for car loans with competitive interest rates. We help remove negative listings that may be preventing loan approval.",
      href: "/credit-repair-australia",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <CreditCardIcon className="w-8 h-8" />,
      title: "Personal Loan Approval",
      description: "Secure personal loans for various purposes. Our credit repair services help improve your creditworthiness for better loan terms.",
      href: "/credit-repair-credit-card-applications",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <section id="loan-approvals" className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Credit Repair for Loan Approvals
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Improve your credit score to secure better loan rates and approval chances for various types of loans
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {loanTypes.map((loan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${loan.bgColor} ${loan.borderColor} rounded-xl p-6 border hover:shadow-lg transition-all duration-300`}
            >
              <div className={`${loan.color} mb-4`}>
                {loan.icon}
              </div>
              <h3 className={`text-xl font-bold ${loan.color} mb-3`}>
                {loan.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {loan.description}
              </p>
              <Link
                href={loan.href}
                className={`inline-flex items-center ${loan.color} font-medium hover:underline hover:underline-offset-4 transition-colors`}
              >
                Learn more
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanApprovals;
