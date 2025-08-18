// components/VideoServicesSection.js
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const LiteYouTube = dynamic(() => import("./LiteYouTube"), { ssr: false });

const services = [
  { title: "Free Credit Assessment", description: "Get a comprehensive evaluation of your credit health at no cost to identify improvement opportunities." },
  { title: "Defaults Removal", description: "We specialize in removing late payment records that negatively impact your loan approval chances." },
  { title: "Court Judgments Resolution", description: "Address high-risk legal markers on your credit file that scare away potential lenders." },
  { title: "Invalid Credit Inquiries", description: "Clean up unauthorized or incorrect credit checks that shouldn't affect your score." },
];

export default function VideoServicesSection() {
  return (
    <section className="py-12 bg-gradient-to-br from-white to-blue-100">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Animate just the row once */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-6 items-stretch"
        >
          {/* Video */}
          <div className="w-full lg:w-1/3 flex items-center">
            <LiteYouTube id="O9S7mqxxP1Y" title="Credit Repair Services Explained" className="w-full" />
          </div>

          {/* Services */}
          <div className="w-full lg:w-2/3 lg:pl-4">
            <div className="h-full flex flex-col">
              <div className="mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Struggling with <span className="text-blue">Loan Approvals</span>?
                </h2>
                <p className="text-base text-gray-600 mt-2">
                  If credit repair feels overwhelming, our tailored services simplify the process:
                </p>
              </div>

              <ul className="space-y-3 flex-1">
                {services.map((s) => (
                  <li key={s.title} className="flex gap-3 bg-white p-3 rounded-md shadow-xs border border-gray-100 hover:shadow-sm transition-all">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-blue mt-0.5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{s.title}</h3>
                      <p className="text-sm text-gray-600">{s.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link href="/free-credit-assessment">
                <button className="px-6 py-2.5 bg-blue hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition-colors mt-4">
                  Get Your Free Assessment
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
