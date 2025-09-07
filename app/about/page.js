"use client";

import { motion } from "framer-motion";
import MainLayout from "../MainLayout";

const aboutPageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.australiancreditsolutions.com.au#org",
      "name": "Australian Credit Solutions",
      "url": "https://www.australiancreditsolutions.com.au",
      "logo": "https://www.australiancreditsolutions.com.au/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+61-489-265-737",
        "email": "help@australiancreditsolutions.com.au",
        "contactType": "customer service",
        "areaServed": "AU",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "805/220 Collins Street",
        "addressLocality": "Melbourne",
        "addressRegion": "VIC",
        "postalCode": "3000",
        "addressCountry": "AU"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:30"
      },
      "sameAs": [
        "https://www.productreview.com.au/listings/australian-credit-solutions",
        "https://www.google.com/maps/place/805%2F220+Collins+St,+Melbourne+VIC+3000"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.australiancreditsolutions.com.au#elisa",
      "name": "Elisa Rothschild",
      "jobTitle": "Principal Lawyer & Director",
      "alumniOf": "Monash University",
      "worksFor": {
        "@id": "https://www.australiancreditsolutions.com.au#org"
      },
      "knowsAbout": [
        "Credit Repair",
        "Credit Law",
        "Family Law", 
        "Debt Negotiation",
        "Consumer Finance"
      ],
      "sameAs": "https://www.linkedin.com/in/elisa-rothschild"
    },
    {
      "@type": "AboutPage",
      "@id": "https://www.australiancreditsolutions.com.au/about#aboutpage",
      "url": "https://www.australiancreditsolutions.com.au/about",
      "name": "About Australian Credit Solutions",
      "description": "Learn more about Australian Credit Solutions — a team dedicated to helping Australians rebuild their financial future through proven credit repair and debt recovery services.",
      "mainEntity": {
        "@id": "https://www.australiancreditsolutions.com.au#org"
      },
      "reviewedBy": {
        "@id": "https://www.australiancreditsolutions.com.au#elisa"
      },
      "isPartOf": {
        "@id": "https://www.australiancreditsolutions.com.au#website"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.australiancreditsolutions.com.au#website",
      "url": "https://www.australiancreditsolutions.com.au",
      "name": "Australian Credit Solutions",
      "publisher": {
        "@id": "https://www.australiancreditsolutions.com.au#org"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.australiancreditsolutions.com.au/about#breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.australiancreditsolutions.com.au"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://www.australiancreditsolutions.com.au/about"
        }
      ]
    }
  ]
};

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <MainLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageStructuredData)
        }}
      />
      <div className="bg-gradient-to-r from-blue-100 to-orange-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Hero Section */}
          <motion.header 
            variants={itemVariants}
            className="mb-16 text-center"
          >
            <motion.div
              variants={fadeIn}
              className="inline-block mb-6"
            >
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full mx-auto" />
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent mb-4"
            >
              About Australian Credit Solutions
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-800 max-w-3xl mx-auto"
            >
              Your trusted partner in credit repair and financial recovery across Australia.
            </motion.p>
          </motion.header>

          {/* Content Sections */}
          <div className="space-y-20">
            {/* Who We Are */}
            <motion.section 
              variants={itemVariants}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <motion.h2 
                  className="text-3xl font-bold text-gray-800 mb-6"
                  whileInView={{ x: 0, opacity: 1 }}
                  initial={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-blue-600">Who</span> We Are
                </motion.h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Australian Credit Solutions is a leading credit repair company dedicated to 
                    helping Australians rebuild their financial future. With expertise in credit 
                    law and consumer finance, we provide comprehensive solutions to improve credit 
                    scores and unlock financial opportunities.
                  </p>
                  <p>
                    Led by Principal Lawyer & Director Elisa Rothschild, our team combines legal 
                    expertise with practical experience to deliver results for our clients across 
                    Australia.
                  </p>
                </div>
              </div>
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border-l-4 border-orange-600 shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Leadership</h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-800">Elisa Rothschild</p>
                    <p className="text-sm">Principal Lawyer & Director</p>
                    <p className="text-sm">Monash University Graduate</p>
                  </div>
                  <p className="text-sm">
                    Specializing in Credit Law, Family Law, Debt Negotiation, and Consumer Finance
                  </p>
                </div>
              </motion.div>
            </motion.section>

            {/* Services */}
            <motion.section 
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <motion.h2 
                className="text-3xl font-bold text-center text-gray-800 mb-12"
                whileInView={{ scale: 1.05 }}
                initial={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                Our <span className="text-orange-600">Services</span>
              </motion.h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Credit Repair",
                    desc: "Remove defaults, correct errors, and improve your credit score"
                  },
                  {
                    title: "Credit Enquiry Removal",
                    desc: "Challenge and remove unauthorized credit inquiries"
                  },
                  {
                    title: "Court Judgment Removal",
                    desc: "Professional assistance with court judgment matters"
                  },
                  {
                    title: "Debt Negotiation",
                    desc: "Expert negotiation with creditors and collection agencies"
                  },
                  {
                    title: "Credit Report Analysis",
                    desc: "Comprehensive review and analysis of your credit profile"
                  },
                  {
                    title: "Financial Consultation",
                    desc: "Personalized advice for your financial recovery"
                  }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl hover:bg-blue-50 transition-colors border border-gray-200"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-orange-600 text-2xl mb-3">{index + 1}.</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Mission */}
            <motion.section 
              variants={itemVariants}
              className="text-center"
            >
              <motion.div
                className="bg-gradient-to-r from-blue-600 to-orange-600 p-0.5 rounded-full inline-block mb-8"
                whileInView={{ scaleX: [0, 1.2, 1] }}
                initial={{ scaleX: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-r from-blue-100 to-orange-100 px-8 py-4 rounded-full">
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">
                    Our Mission
                  </h2>
                </div>
              </motion.div>
              
              <motion.p
                className="text-xl text-gray-700 max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                To empower Australians to take control of their financial future by providing 
                expert credit repair services, debt solutions, and financial guidance with 
                transparency, integrity, and proven results.
              </motion.p>
            </motion.section>

            {/* Contact */}
            <motion.section 
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Contact <span className="text-blue-600">Us</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl border border-gray-200"
                >
                  <div className="text-orange-600 text-3xl mb-4">✉️</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                  <a 
                    href="mailto:help@australiancreditsolutions.com.au" 
                    className="text-gray-600 hover:text-orange-600 transition-colors"
                  >
                    help@australiancreditsolutions.com.au
                  </a>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl border border-gray-200"
                >
                  <div className="text-orange-600 text-3xl mb-4">📞</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                  <a 
                    href="tel:+61489265737" 
                    className="text-gray-600 hover:text-orange-600 transition-colors"
                  >
                    +61 489 265 737
                  </a>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl border border-gray-200"
                >
                  <div className="text-orange-600 text-3xl mb-4">🏢</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Office</h3>
                  <p className="text-gray-600">
                    805/220 Collins Street<br />
                    Melbourne VIC 3000
                  </p>
                </motion.div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;