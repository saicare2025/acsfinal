"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const VideoServicesSection = () => {
  const services = [
    {
      title: "Free Credit Assessment",
      description:
        "Get a comprehensive evaluation of your credit health at no cost to identify improvement opportunities.",
    },
    {
      title: "Defaults Removal",
      description:
        "We specialize in removing late payment records that negatively impact your loan approval chances.",
    },
    {
      title: "Court Judgments Resolution",
      description:
        "Address high-risk legal markers on your credit file that scare away potential lenders.",
    },
    {
      title: "Invalid Credit Inquiries",
      description:
        "Clean up unauthorized or incorrect credit checks that shouldn't affect your score.",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-white to-blue-100">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-6 items-stretch"
        >
          {/* Video Section - Left Side */}
          <div className="w-full lg:w-1/3 flex items-center">
            <div className="relative w-full rounded-lg shadow-md overflow-hidden border-2 border-white">
              <iframe
                src="https://www.youtube.com/embed/O9S7mqxxP1Y"
                className="w-full h-64 lg:h-[500px]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Credit Repair Services Explained"
              />
              <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" />
            </div>
          </div>

          {/* Services Section - Right Side */}
          <div className="w-full lg:w-2/3 lg:pl-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-full flex flex-col"
            >
              <div className="mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Struggling with{" "}
                  <span className="text-blue">Loan Approvals</span>?
                </h2>
                <p className="text-base text-gray-600 mt-2">
                  If credit repair feels overwhelming, our tailored services
                  simplify the process:
                </p>
              </div>

              <div className="space-y-3 flex-1">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex gap-3 bg-white p-3 rounded-md shadow-xs border border-gray-100 hover:shadow-sm transition-all"
                  >
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-blue mt-0.5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Link href="/meeting-schedule">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2.5 bg-blue hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition-colors mt-4"
                >
                  Get Your Free Assessment
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoServicesSection;
