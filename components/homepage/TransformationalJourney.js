import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import home1 from "@/app/assets/h1.png";
import home2 from "@/app/assets/h2.png";

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
      beforeScore: 420,
      afterScore: 996,
      duration: "2 weeks",
      shortDescription: "Major bank default removed quickly",
      fullDescription: [
        "Facing mortgage rejection due to a bank default, our client was at a financial crossroads.",
        "Our team initiated immediate action, successfully negotiating the default's removal by 10am the same morning.",
        "The 576-point credit score increase transformed their borrowing capacity.",
        "Specializing in defaults with all national banks, paid or unpaid."
      ],
      result: "Mortgage approved within 3 weeks"
    },
    {
      id: 2,
      image: home2,
      alt: "Client holding approval documents",
      beforeScore: 380,
      afterScore: 803,
      duration: "14 days",
      shortDescription: "Multiple credit file errors corrected",
      fullDescription: [
        "Persistent loan rejections due to multiple credit file inaccuracies.",
        "Within 14 days, we identified and disputed 3 reporting errors.",
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
    <section className="pt-12 lg:pt-0 lg:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Real <span className="text-blue">Credit Score</span> Transformations
          </h2>
          <p className="text-lg text-blue max-w-2xl mx-auto">
            See actual results we&apos;ve achieved for our clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-100 hover:shadow-lg transition-all"
            >
              {/* Image with Score Meter */}
              <div className="relative h-96 w-full">
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex justify-between items-end text-white">
                    <div>
                      <span className="text-sm font-light">CREDIT SCORE INCREASE</span>
                      <h3 className="text-2xl font-bold">{story.afterScore - story.beforeScore} Points</h3>
                    </div>
                    <span className="text-sm">Resolved in {story.duration}</span>
                  </div>
                </div>
              </div>

              {/* Credit Score Meter */}
              <div className="p-6 border-b border-blue-50">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-500">Before: {story.beforeScore}</span>
                  <span className="text-sm text-gray-500">After: {story.afterScore}</span>
                </div>
                <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-400 via-yellow-400 to-green-500"
                    style={{ width: `${calculateScorePercentage(1200)}%` }}
                  />
                  <div 
                    className="absolute top-0 left-0 h-full bg-gray-300"
                    style={{ 
                      width: `${calculateScorePercentage(story.beforeScore)}%`,
                      background: `linear-gradient(to right, #ef4444, ${story.beforeScore > 600 ? '#f59e0b' : '#ef4444'})`
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
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>300</span>
                  <span>600</span>
                  <span>900</span>
                  <span>1200</span>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6">
                <p className="text-gray-700 font-medium mb-4">
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
                      <p key={i} className="text-gray-600">
                        {paragraph}
                      </p>
                    ))}
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                      <p className="text-blue-700 font-medium">
                        Final Outcome: {story.result}
                      </p>
                    </div>
                  </motion.div>
                )}

                <button
                  onClick={() => toggleCard(index)}
                  className="flex items-center text-blue font-medium hover:text-blue-700 transition-colors"
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