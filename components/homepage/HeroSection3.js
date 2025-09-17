"use client";

import { motion } from "framer-motion";
import heroImage from "../../app/assets/hero.png";
import arrowImage from "../../app/assets/arrow1.png";

import Image from "next/image";
import {
  ShieldCheckIcon,
  LockClosedIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import HeroForm from "./HeroForm";

export default function HeroSection() {
  return (
    <section className=" bg-gradient-to-br from-white to-blue-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-8 flex gap-4 lg:gap-20 flex-col lg:flex-row lg:justify-between items-center relative z-10">
        {/* Left — Content + Form */}
        

        {/* Right — Image with floating feature pills */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative h-[420px] sm:h-[480px] lg:h-[520px] flex items-center justify-end"
          >
            {/* Radial gradient bubble */}
            <div
              className="absolute inset-0 mx-auto my-auto h-[90%] w-[90%] rounded-full"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 45%, rgba(147,197,253,0.55) 0%, rgba(199,230,255,0.45) 45%, rgba(255,255,255,0.95) 100%)",
                filter: "drop-shadow(0 10px 30px rgba(59,130,246,0.15))",
              }}
            />

            {/* Orbit rings */}
            <svg
              className="pointer-events-none absolute inset-0 m-auto h-[88%] w-[88%]"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle cx="50" cy="50" r="39" stroke="rgba(255,255,255,0.9)" strokeWidth="0.6" />
              <circle cx="50" cy="50" r="30" stroke="rgba(255,255,255,0.7)" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="22" stroke="rgba(255,255,255,0.5)" strokeWidth="0.4" />
            </svg>

            {/* Hero image */}
            <Image
              src={heroImage}
              alt="Creative lawyer"
              title="Creative Lawyer"
              width={820}
              height={820}
              className="relative z-10 h-[82%] w-auto object-cover drop-shadow-xl"
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />

            {/* Floating feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            >
              {/* Top-right */}
              <motion.div
                initial={{ y: -6 }}
                animate={{ y: [-6, 2, -6] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -right-2 top-0 lg:top-4 z-20"
              >
                <div className="flex items-center gap-2 bg-white rounded-full shadow-lg ring-1 ring-black/5 px-3 py-2">
                  <span className="h-7 w-7 grid place-items-center rounded-full bg-emerald-200 text-emerald-900">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-gray-800">Free Credit Report Review</span>
                </div>
              </motion.div>

              {/* Middle-right */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 5.6, ease: "easeInOut", delay: 0.2 }}
                className="hidden lg:block absolute -left-10  top-1/2 -translate-y-1/2 z-20"
              >
                <div className="flex items-center gap-2 bg-white rounded-full shadow-lg ring-1 ring-black/5 px-3 py-2">
                  <span className="h-7 w-7 grid place-items-center rounded-full bg-emerald-200 text-emerald-900">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m12 12 3-7-7 3-3 7 7-3Z" />
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-gray-800">No Win, No Fee*</span>
                </div>
              </motion.div>

              {/* Bottom-right */}
              <motion.div
                initial={{ y: 6 }}
                animate={{ y: [6, -2, 6] }}
                transition={{ repeat: Infinity, duration: 6.2, ease: "easeInOut", delay: 0.4 }}
                className="absolute -left-2 lg:left-60 -bottom-2 z-20"
              >
                <div className="flex items-center gap-2 bg-white rounded-full shadow-lg ring-1 ring-black/5 px-3 py-2">
                  <span className="h-7 w-7 grid place-items-center rounded-full bg-emerald-200 text-emerald-900">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                      <path d="M2 10a10 10 0 1 1 20 0c0 3.5-1.8 5.4-3.2 6.6-.7.6-1.1 1.3-1.2 2.4H6.4c-.1-1.1-.5-1.8-1.2-2.4C3.8 15.4 2 13.5 2 10Z" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-gray-800">100% Confidential &amp; Secure</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Subtle float particles */}
          <div className="pointer-events-none absolute inset-0 -z-0">
            <span className="absolute top-8 left-10 h-1.5 w-1.5 rounded-full bg-white/80" />
            <span className="absolute top-20 left-24 h-1 w-1 rounded-full bg-white/80" />
            <span className="absolute top-36 right-20 h-1 w-1 rounded-full bg-white/80" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-end items-center"
          >
            <h1 className="text-3xl max-w-md md:text-4xl font-bold leading-tight text-gray-800 my-4 text-center">
              Credit Repair Australia – <span className="text-blue">Fix Defaults &amp; Improve Your Score Fast</span> 
            </h1>

            <h2
              id="free-credit-check"
              className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 lg:text-left text-center"
            >
              Free Credit Check &amp; Fast Assessment
            </h2>

            {/* Keep your existing form component */}
            
            <HeroForm />
            
          </motion.div>

          {/* Arrow (same position), now animated */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block absolute top-40 left-[600px]"
          >
            <motion.div
              // gentle float + micro-tilt + pulse for attention
              animate={{
                y: [0, -8, 0],
                rotate: [-8, -12, -8],
                scale: [1, 1.04, 1],
                filter: [
                  "drop-shadow(0 6px 12px rgba(37,99,235,0.15))",
                  "drop-shadow(0 10px 16px rgba(37,99,235,0.28))",
                  "drop-shadow(0 6px 12px rgba(37,99,235,0.15))",
                ],
              }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <Image
                src={arrowImage}
                alt="Arrow pointing to form"
                title="Arrow pointing to form"
                width={150}
                height={150}
                className="object-cover select-none"
                priority
              />

              {/* pulsing glow near tip (adjust offsets if your PNG tip differs) */}
              <motion.span
                className="pointer-events-none absolute right-[14px] top-[46px] h-3 w-3 rounded-full bg-blue-500"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(59,130,246,0.6)",
                    "0 0 0 12px rgba(59,130,246,0)",
                  ],
                }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut", repeatDelay: 0.2 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
