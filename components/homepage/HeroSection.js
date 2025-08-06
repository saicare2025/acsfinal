"use client";

import { motion } from "framer-motion";
import heroImage from "@/app/assets/hero.png";
import CreditAssessmentForm from "./HeroForm";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative lg:py-10 bg-gradient-to-br from-blue-100 to-blue-200 text-white">
      <div className="max-w-7xl mx-auto lg:px-4 flex flex-col-reverse lg:flex-row items-center lg:gap-8">
        {/* Right Side - Form (50%) on desktop, above image on mobile */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="w-full max-w-xl bg-white/10 backdrop-blur-lg p-3 sm:p-8 rounded-2xl border border-white/20 shadow-2xl ring-1 ring-blue-900/40"
          >
            {/* Title and subtitle hidden on mobile */}
            <div className=" lg:mb-6">
              <h1 className="text-2xl hidden md:block sm:text-3xl md:text-4xl font-extrabold leading-tight text-blue-900 drop-shadow-xl mb-3">
                Are you struggling to get your loans approved?
              </h1>
              <h2 className="text-xl mb-2 md:text-2xl font-bold text-gray-700">
                Free Credit Assessment
              </h2>
            </div>
            {/* Form always visible */}
            <CreditAssessmentForm />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full"
          >
            <Image
              src={heroImage}
              alt="Financial consultation"
              width={800}
              height={580}
              priority
              className="w-full h-[320px] sm:h-[420px] md:h-[480px] lg:h-[580px] object-cover rounded-2xl shadow-2xl border-4 border-white/20"
            />

            {/* Approval Badge */}
            <motion.div
              className="absolute -bottom-0 left-0 sm:-left-6 bg-blue/90 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg text-xs sm:text-base"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="font-bold">98% Approval Rate</p>
            </motion.div>
            {/* Client Trust Badge */}
            <motion.div
              className="absolute lg:-top-6 right-3 sm:-right-6 bg-white text-blue-900 px-3 py-2 sm:px-4 sm:py-2 rounded-lg shadow-lg font-bold text-xs sm:text-base"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Trusted by 1,000+ Clients
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
