"use client";

import { motion } from "framer-motion";
import heroImage from "../../app/assets/hero3.webp";
import CreditAssessmentForm from "./HeroForm";
import Image from "next/image";
import {
  CheckBadgeIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  CurrencyDollarIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-8 flex flex-col-reverse lg:flex-row items-center relative z-10 gap-8">
          {/* Left Side - Content (60% on desktop) */}
          <div className="w-full lg:w-3/5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-8"
            >
              <h3 className="text-3xl text-center lg:text-start sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-gray-700">
                Get Your <span className="text-blue">Free Credit</span> Assessment Today
              </h3>
              <h4 className="text-xl sm:text-2xl text-center lg:text-start font-semibold text-blue/90 mb-4">
                No Win, No Fee - Terms Apply*
              </h4>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <CreditAssessmentForm />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Image and Features (40% on desktop) */}
          <div className="w-full lg:w-2/5 flex flex-col">
            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden"
            >
              <Image
                src={heroImage}
                alt="Financial consultation"
                width={600}
                height={600}
                className="w-full max-h-[400px] object-contain"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 40vw"
                quality={85}
              />
            </motion.div>

            {/* Features Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100"
            >
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CurrencyDollarIcon className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Free Credit Report Review
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Comprehensive analysis at no cost
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <ShieldCheckIcon className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      No Win, No Fee * Terms Apply
                    </h4>
                    <p className="text-gray-600 text-sm">
                      A one-off $330 admin fee applies regardless of outcome.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <LockClosedIcon className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      100% Confidential & Secure
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Your data is protected with bank-level security
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Information Section */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-gray-600 text-sm md:text-base">
            *. A one-off $330 administration fee applies regardless of the result. In the past year, more than 98% of our disputes have achieved a successful resolution.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
