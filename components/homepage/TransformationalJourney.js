"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import home1 from "@/app/assets/h1.webp";
import home2 from "@/app/assets/h2.webp";

const CreditScoreTransformation = () => {
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCard = (index) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const successStories = [
    {
      id: 1,
      image: home1,
      alt: "Client celebrating credit approval",
      title: "Client celebrating credit approval",
      beforeScore: 420,
      afterScore: 996,
     
      shortDescription: "Major bank default removed quickly",
      fullDescription: [
        "Facing mortgage rejection due to a bank default, our client was at a financial crossroads.",
        "Our team initiated immediate action, successfully negotiating the default's removal",
        "The 576-point credit score increase transformed their borrowing capacity.",
        "Specializing in defaults with all national banks, paid or unpaid."
      ],
      result: "Mortgage approved within 3 weeks"
    },
    {
      id: 2,
      image: home2,
      alt: "Client holding approval documents",
      title: "Client holding approval documents",
      beforeScore: 380,
      afterScore: 803,
     
      shortDescription: "Multiple credit file errors corrected",
      fullDescription: [
        "Persistent loan rejections due to multiple credit file inaccuracies.",
        "we identified and disputed 3 reporting errors.",
        "423-point improvement led to immediate loan qualification.",
        "Corrected bureau oversights that had persisted for years."
      ],
      result: "Car loan secured at prime rate"
    }
  ];

  // Calculate percentage for score meter
  const calculateScorePercentage = (score) => {
    return Math.min(100, Math.max(0, (score / 1200) * 100));
  };

  return (
    <section id="results" className="lg:py-16 py-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Client{" "}
            <span className="bg-blue bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-lg text-blue-700 max-w-3xl mx-auto">
            See actual results we&apos;ve achieved for our clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-md overflow-hidden border border-blue-100 hover:shadow-lg transition-all"
            >
              {/* Image with Score Meter */}
              <div className="relative h-[400px] lg:h-[450px] w-full">
                <Image
                  src={story.image}
                  alt={story.alt}
                  title={story.title}
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex justify-between items-end text-white">
                    <div>
                      <span className="text-base font-light">CREDIT SCORE INCREASE</span>
                      <h3 className="text-2xl font-bold">{story.afterScore - story.beforeScore} Points</h3>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* Credit Score Meter */}
              <div className="p-6 border-b border-blue-100">
                <div className="flex justify-between mb-2">
                  <span className="text-base text-blue-700">Before: {story.beforeScore}</span>
                  <span className="text-base text-blue-700">After: {story.afterScore}</span>
                </div>
                <div className="relative h-3 bg-blue-100 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-400 via-yellow-400 to-green-500"
                    style={{ width: `${calculateScorePercentage(1200)}%` }}
                  />
                  <div 
                    className="absolute top-0 left-0 h-full bg-blue-300"
                    style={{ 
                      width: `${calculateScorePercentage(story.beforeScore)}%`,
                      background: `linear-gradient(to right, #93c5fd, ${story.beforeScore > 600 ? '#f59e0b' : '#93c5fd'})`
                    }}
                  />
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-green-600"
                    style={{ 
                      width: `${calculateScorePercentage(story.afterScore)}%`,
                      opacity: 0.8
                    }}
                  />
                </div>
                <div className="flex justify-between mt-1 text-xs text-blue-700">
                  <span>300</span>
                  <span>600</span>
                  <span>900</span>
                  <span>1200</span>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6">
                <p className="text-blue-800 font-medium mb-4">
                  {story.shortDescription}
                </p>

                {expandedCards.includes(index) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3 mb-4"
                  >
                    {story.fullDescription.map((paragraph, i) => (
                      <p key={i} className="text-blue-700">
                        {paragraph}
                      </p>
                    ))}
                    <div className="bg-blue-100 p-3 rounded-lg border border-blue-200">
                      <p className="text-blue-800 font-medium">
                        Final Outcome: {story.result}
                      </p>
                    </div>
                  </motion.div>
                )}

                <button
                  onClick={() => toggleCard(index)}
                  className="flex items-center text-blue font-medium hover:text-blue-800 transition-colors"
                >
                  {expandedCards.includes(index) ? (
                    <>
                      <span>Show Less</span>
                      <ChevronUp className="ml-2 w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>Read Full Story</span>
                      <ChevronDown className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreditScoreTransformation;