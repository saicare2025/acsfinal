"use client";

import { motion } from "framer-motion";

export default function TestimonialShowcase() {
  return (
    <section className="lg:py-16 py-8 bg-gradient-to-b from-white to-blue-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-start gap-12">
        {/* Left Content Section (2/3 width) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-2/3"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Clients.{" "}
            <span className="bg-blue bg-clip-text text-transparent">
              Real Results.
            </span>
          </h2>
          <p className="text-lg text-blue leading-relaxed max-w-3xl mb-6">
            At Australian Credit Solutions, we don't just talk about credit repair —
            we deliver life-changing outcomes. Our clients share their stories of
            stress-free approvals, financial freedom, and restored peace of mind.
          </p>

          <ul className="space-y-4 text-blue-800 mb-8">
            <li className="flex items-start">
              <span className="text-blue font-bold mr-2">✓</span>
              Improved credit scores in record time
            </li>
            <li className="flex items-start">
              <span className="text-blue font-bold mr-2">✓</span>
              Removal of defaults, judgments, and black marks
            </li>
            <li className="flex items-start">
              <span className="text-blue font-bold mr-2">✓</span>
              Happy clients achieving home loans and car finance
            </li>
          </ul>

          <div>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
            >
              Start Your Journey
            </a>
          </div>
        </motion.div>

        {/* Video Testimonial Section (1/3 width) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/3"
        >
          <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-lg overflow-hidden border border-blue-100 sticky top-8">
            <div className="relative bg-black">
              {/* Professional video styling */}
              <video
                className="w-full h-auto rounded-t-2xl"
                src="/video.mp4"
                controls
                playsInline
                preload="metadata"
              />
              {/* Optional overlay tag */}
              <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-semibold px-2 py-1 rounded-md shadow">
                Client Story
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-900">
                Client Video Testimonial
              </h3>
              <p className="mt-2 text-blue">
                Watch how our team helped clients improve their credit profile
                and achieve financial peace of mind.
              </p>
              {/* Star rating for credibility */}
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0l2.95 5.955 6.562.955-4.756 4.635 1.122 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="mt-2 text-sm text-blue">— Flavio G.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}