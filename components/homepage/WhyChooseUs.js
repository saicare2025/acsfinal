import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Trophy, 
  Star, 
  BadgeCheck,
  ChevronDown,
  ChevronUp 
} from 'lucide-react';

const WhyChooseUs = () => {
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCard = (index) => {
    if (expandedCards.includes(index)) {
      setExpandedCards(expandedCards.filter(i => i !== index));
    } else {
      setExpandedCards([...expandedCards, index]);
    }
  };

  const reasons = [
  {
    icon: <BadgeCheck className="w-8 h-8 text-blue" />,
    title: "No Win, No Fee Guarantee",
    shortDesc: "Pay only for real results—admin fee excluded",
    fullDesc: "We stand by our promise: if we can’t achieve a win for you, your fees are refunded—excluding a one-off $330 admin fee. Our 'no win, no fee' approach puts your interests first, reflecting our commitment to genuine outcomes and risk-free service.",
    bgColor: "bg-blue-50"
  },
  {
    icon: <Trophy className="w-8 h-8 text-amber-500" />,
    title: "Multi-Award Winning Team",
    shortDesc: "Australia’s #1 credit solutions (2022–2024)",
    fullDesc: "Proudly recognised as the top performer in our field for three consecutive years, our awards are a testament to our excellence, expertise, and reliable results. We continually set industry benchmarks for service, quality, and performance.",
    bgColor: "bg-amber-50"
  },
  {
    icon: <Star className="w-8 h-8 text-purple-600" />,
    title: "Trusted by 1,000+ Clients",
    shortDesc: "Top-rated on Product Review",
    fullDesc: "With over 1,000 positive testimonials and consecutive recognition by Product Review, our reputation is built on transparent, reliable, and high-quality credit repair. Our clients trust us for real results and personalised service, year after year.",
    bgColor: "bg-purple-50"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    title: "Fully Licensed & Accredited",
    shortDesc: "ASIC licensed (ACL #532003)",
    fullDesc: "We are fully licensed under the Australian Securities and Investments Commission (ASIC) with ACL #532003. This official accreditation means you can have complete confidence in our compliance, professionalism, and integrity.",
    bgColor: "bg-green-50"
  }
];

  return (
    <section id='whychooseus' className="lg:py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4 lg:mb-16"
        >
           <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
         Why Choose  <span className="text-blue">Australian Credit Solutions?</span>
        </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are the compelling reasons why Australian Credit Solutions stands out as your preferred choice in the credit management market:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${reason.bgColor} rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all`}
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white rounded-full shadow-sm">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {reason.shortDesc}
                </p>
                
                {expandedCards.includes(index) && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-gray-600 mb-4"
                  >
                    {reason.fullDesc}
                  </motion.p>
                )}

                <button
                  onClick={() => toggleCard(index)}
                  className="flex items-center justify-center w-full text-blue font-medium mt-2"
                >
                  {expandedCards.includes(index) ? (
                    <>
                      <span>Read Less</span>
                      <ChevronUp className="ml-1 w-5 h-5" />
                    </>
                  ) : (
                    <>
                      <span>Read More</span>
                      <ChevronDown className="ml-1 w-5 h-5" />
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

export default WhyChooseUs;