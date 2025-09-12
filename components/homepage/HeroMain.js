"use client";

import { motion } from "framer-motion";
import heroImage from "../../app/assets/hero.png";
import Image from "next/image";
import {
  ShieldCheckIcon,
  LockClosedIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import HeroForm from "./HeroForm";

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
              <h1 className="text-3xl text-center lg:text-start md:text-4xl font-bold leading-tight mb-4 text-gray-700">
                 Credit Repair Australia<span className="text-blue"> : Quick Solutions to Fix Bad Credit</span> with Australian Credit Solutions
              </h1>

           

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <HeroForm />
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
                fetchPriority="high"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 40vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
                    <p className="text-gray-600 text-base">
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
                      No Win, No Fee
                      <sup className="text-[10px] align-super ml-0.5">*</sup>
                    </h4>
                    {/* Removed the admin fee line as requested */}
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <LockClosedIcon className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      100% Confidential &amp; Secure
                    </h4>
                    <p className="text-gray-600 text-base">
                      Your data is protected with bank-level security
                    </p>
                  </div>
                </li>
              </ul>

              {/* Tiny T&C note under features too (optional; remove if you only want it once) */}
              <p className="mt-3 text-[11px] text-gray-500">
                *Terms &amp; conditions apply.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
