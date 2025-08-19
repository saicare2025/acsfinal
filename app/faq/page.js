// app/page.js
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainLayout from "../MainLayout";
import Head from "next/head";

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is credit restoration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Credit restoration is the process of reviewing your credit report, identifying unfair, inaccurate, or outdated negative entries, and working to have them corrected or removed. This may include defaults, judgments, late payments, or duplicate listings that could be holding back your credit score.",
        },
      },
      {
        "@type": "Question",
        name: "How does credit restoration work in Australia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your credit report is maintained by Equifax, Experian, and Illion. Our team audits your file, then deals directly with creditors and reporting agencies to fix errors and challenge listings that don’t comply with the Privacy Act 1988 or the Credit Reporting Code of Conduct.",
        },
      },
      {
        "@type": "Question",
        name: "Can every negative listing be removed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not always. If a listing is accurate, valid, and still within its reporting period, it may have to stay. However, many listings are recorded incorrectly or in breach of reporting guidelines—those can often be removed or corrected. We also negotiate directly with creditors where possible.",
        },
      },
      {
        "@type": "Question",
        name: "How long does credit restoration take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Timeframes depend on your situation. Simple corrections often take 2–4 weeks, default matters 6–12 weeks, and complex files with judgments 3–6 months. We provide a clear expectation during your free assessment.",
        },
      },
      {
        "@type": "Question",
        name: "Is credit restoration legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We use your rights under Australian law to dispute incorrect or unfair listings. Our work is fully compliant and regulated under our Australian Credit Licence (ACL 532003).",
        },
      },
      {
        "@type": "Question",
        name: "How long do defaults stay on a credit report?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Defaults usually remain for 5 years from the date of listing. If paid, the default will still show as paid until it expires.",
        },
      },
      {
        "@type": "Question",
        name: "What about court judgments, bankruptcies, or serious credit infringements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Judgments generally remain for 5 years if paid or 7 years if unpaid. Bankruptcies remain for 5 years from the start date or 2 years after discharge (whichever is later). Serious credit infringements can remain for up to 7 years.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get a copy of my credit report?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You’re entitled to a free credit report every 12 months from each agency (Equifax, Experian, Illion). We help you obtain and review your report as part of our service.",
        },
      },
      {
        "@type": "Question",
        name: "Can late payments be removed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If the record is wrong or recorded unfairly, yes. Even if accurate, we may negotiate with creditors to remove or correct it depending on circumstances.",
        },
      },
      {
        "@type": "Question",
        name: "Will credit restoration improve my credit score?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Removing incorrect or unfair listings typically improves your score and makes it easier to access credit on better terms.",
        },
      },
      {
        "@type": "Question",
        name: "What services do you provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We specialise in credit restoration (removing or correcting defaults, judgments, and unfair listings), credit report reviews and personalised guidance, debt negotiation and settlement support, and long-term strategies for rebuilding your credit health.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pricing depends on complexity. We offer a free assessment, fixed transparent fees (no hidden costs), and flexible payment plans.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer a guarantee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. If we can’t achieve any improvements on your credit file after our process, you’ll receive a refund in line with our service agreement.",
        },
      },
      {
        "@type": "Question",
        name: "Do I have to pay upfront?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We offer flexible instalment plans so you can get started without financial pressure.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get started?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Contact us via phone, email, or our online form. With your consent we access your credit file, provide a free analysis, and if you’re happy, begin credit restoration right away.",
        },
      },
      {
        "@type": "Question",
        name: "Who can benefit from credit restoration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "People declined for loans, impacted by defaults or judgments, affected by identity theft or incorrect listings, or struggling with a low score due to unfair reporting.",
        },
      },
      {
        "@type": "Question",
        name: "Can credit restoration help me buy a home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. By removing harmful listings and improving your credit score, we improve your chances of mortgage approval at competitive rates.",
        },
      },
      {
        "@type": "Question",
        name: "Does credit restoration clear my debts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We don’t erase debts, but we can often negotiate settlements while removing unfair listings so your file reflects your situation accurately and fairly.",
        },
      },
      {
        "@type": "Question",
        name: "Should I apply for new credit during the process?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend waiting. Each application creates a hard inquiry that can reduce your credit score.",
        },
      },
      {
        "@type": "Question",
        name: "Why choose Australian Credit Solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are licensed and regulated (Australian Credit Licence 532003), have a strong track record, offer transparent fixed fees, and deliver personalised service for every client.",
        },
      },
      {
        "@type": "Question",
        name: "Is my information secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We comply with the Privacy Act 1988 and use secure, encrypted systems. Your information is never shared with third parties without your consent.",
        },
      },
      {
        "@type": "Question",
        name: "What if my issue can’t be fixed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If a listing is accurate and legally compliant, it must remain until it expires. We’ll still guide you with strategies to rebuild your score.",
        },
      },
      {
        "@type": "Question",
        name: "Are you licensed to provide credit restoration services in Australia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Australian Credit Solutions holds Australian Credit Licence (ACL) Number 532003, issued by ASIC. We are legally authorised to provide credit restoration services, operate under strict compliance obligations, and are accountable to AFCA for external dispute resolution.",
        },
      },
      {
        "@type": "Question",
        name: "Can I restore my credit myself?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, but the process can be complex and time-consuming. Most clients come to us because we know how to deal with creditors and agencies efficiently, improving the chances of success.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer debt consolidation loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, we don’t provide loans. Once your credit is restored, we can connect you with trusted brokers and lenders who may assist.",
        },
      },
      {
        "@type": "Question",
        name: "How do I contact you?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Phone: [Insert Number] · Email: [Insert Email] · Website: [Insert Contact Page]. We’re available Monday to Friday, 9:00 AM – 6:00 PM (AEST).",
        },
      },
    ],
  };

  const faqData = [
    {
      category: "About Credit Restoration",
      icon: "🔧",
      questions: [
        {
          q: "What is credit restoration?",
          a: "Credit restoration is the process of reviewing your credit report, identifying unfair, inaccurate, or outdated negative entries, and working to have them corrected or removed. This may include defaults, judgments, late payments, or duplicate listings that could be holding back your credit score.",
        },
        {
          q: "How does credit restoration work in Australia?",
          a: "In Australia, your credit report is maintained by agencies like Equifax, Experian, and Illion. Our team carefully audits your file, then deals directly with creditors and reporting agencies to fix errors and challenge listings that don’t comply with the Privacy Act 1988 or Credit Reporting Code of Conduct.",
        },
        {
          q: "Can every negative listing be removed?",
          a: "Not always. If a listing is accurate, valid, and still within its reporting period, it may have to stay. However, many listings are recorded incorrectly, unfairly, or in breach of reporting guidelines — and those can often be removed or corrected. We also negotiate directly with creditors where possible to find fair solutions.",
        },
        {
          q: "How long does credit restoration take?",
          a: "Timeframes vary depending on your situation: Simple corrections: 2–4 weeks, Defaults: 6–12 weeks, Judgments or complex cases: 3–6 months. We’ll always give you a clear expectation during your free assessment.",
        },
        {
          q: "Is credit restoration legal?",
          a: "Yes — absolutely. We use your rights under Australian law to dispute incorrect or unfair listings. Our work is fully compliant and regulated under our Australian Credit Licence (ACL 532003).",
        },
      ],
    },
    {
      category: "About Credit Reports",
      icon: "📊",
      questions: [
        {
          q: "How long do defaults stay on a credit report?",
          a: "Defaults usually remain for 5 years from the date of listing. If you’ve paid it, the default will still show, but marked as 'paid' until it naturally expires.",
        },
        {
          q: "What about court judgments, bankruptcies, or serious credit infringements?",
          a: "Judgments: 5 years if paid, 7 years if unpaid. Bankruptcy: 5 years from the start date, or 2 years after discharge (whichever is later). Serious credit infringements: Up to 7 years.",
        },
        {
          q: "Can I get a copy of my credit report?",
          a: "Yes. You’re entitled to a free credit report every 12 months from each agency (Equifax, Experian, Illion). As part of our service, we’ll help you obtain and review your report so nothing is missed.",
        },
        {
          q: "Can late payments be removed?",
          a: "If the record is wrong or recorded unfairly, yes. Even if it’s accurate, sometimes we can negotiate with creditors to have it removed as part of a settlement.",
        },
        {
          q: "Will credit restoration improve my credit score?",
          a: "Yes. Removing incorrect or unfair listings nearly always improves your score. A stronger credit profile gives you better access to loans, mortgages, and financial opportunities.",
        },
      ],
    },
    {
      category: "About Our Services",
      icon: "🤝",
      questions: [
        {
          q: "What services do you provide?",
          a: "We specialise in: Credit restoration (removing or correcting defaults, judgments, and unfair listings), Credit report reviews and personalised guidance, Debt negotiation and settlement support, Long-term strategies for rebuilding your credit health.",
        },
        {
          q: "How much does it cost?",
          a: "The cost depends on the complexity of your case. We provide: A free assessment up front, Fixed, transparent pricing (no hidden fees), Flexible payment plans, so you don’t have to pay everything at once.",
        },
        {
          q: "Do you offer a guarantee?",
          a: "Yes. If we can’t achieve any improvements on your credit file after our process, you’ll receive a refund in line with our service agreement. We believe in results, not empty promises.",
        },
        {
          q: "Do I have to pay upfront?",
          a: "No. We offer flexible instalment plans so you can get started without financial pressure.",
        },
        {
          q: "How do I get started?",
          a: "It’s simple: Contact us via phone, email, or our online form. We’ll request your consent to access your credit file. Our specialists provide a free, no-obligation analysis. If you’re happy, we begin the credit restoration process right away.",
        },
      ],
    },
    {
      category: "Eligibility & Impact",
      icon: "📈",
      questions: [
        {
          q: "Who can benefit from credit restoration?",
          a: "Credit restoration helps if you’ve been: Declined for a home loan, car loan, or credit card; Impacted by defaults or judgments; Affected by identity theft or incorrect listings; Struggling with a low credit score due to unfair reporting.",
        },
        {
          q: "Can credit restoration help me buy a home?",
          a: "Yes. Many of our clients come to us after being rejected for a mortgage. By removing harmful listings and improving your credit score, we improve your chances of loan approval at competitive rates.",
        },
        {
          q: "Does credit restoration clear my debts?",
          a: "No. We don’t erase debts, but we can often negotiate settlements with creditors while also removing unfair listings. Our focus is ensuring your credit file reflects your situation accurately and fairly.",
        },
        {
          q: "Should I apply for new credit during the process?",
          a: "We recommend waiting. Each application creates an inquiry on your file, which can reduce your credit score. It’s best to finish your credit restoration first.",
        },
      ],
    },
    {
      category: "Trust & Compliance",
      icon: "✅",
      questions: [
        {
          q: "Why choose Australian Credit Solutions?",
          a: "Licensed & regulated – we hold Australian Credit Licence 532003. Proven experience – years of successful outcomes across Australia. Transparent & ethical – fixed fees, no hidden costs, no false promises. Personalised service – we understand every credit file is unique.",
        },
        {
          q: "Is my information secure?",
          a: "Yes. We comply with the Privacy Act 1988 and use secure, encrypted systems. Your information is never shared with third parties without your consent.",
        },
        {
          q: "What if my issue can’t be fixed?",
          a: "If a listing is 100% accurate and legally compliant, it has to stay until it expires. In that case, we’ll guide you with strategies to rebuild your score and prepare for the future.",
        },
        {
          q: "Are you licensed to provide credit restoration services in Australia?",
          a: "Yes. Australian Credit Solutions is fully licensed and holds Australian Credit Licence (ACL) Number 532003, issued by the Australian Securities and Investments Commission (ASIC). This means we: Are legally authorised to provide credit restoration services nationwide; Must meet strict compliance obligations set by ASIC; Are accountable to the Australian Financial Complaints Authority (AFCA), giving you an extra layer of protection if you ever need external dispute resolution.",
        },
      ],
    },
    {
      category: "Other Common Questions",
      icon: "💬",
      questions: [
        {
          q: "Can I restore my credit myself?",
          a: "Yes, you can try — but the process can be complex, time-consuming, and frustrating. Most people come to us because we know exactly how to deal with creditors and credit agencies, saving months of effort and increasing the chances of success.",
        },
        {
          q: "Do you offer debt consolidation loans?",
          a: "No, we don’t provide loans. However, once your credit is restored, we can connect you with trusted brokers and lenders who may be able to assist.",
        },
        {
          q: "How do I contact you?",
          a: "\ud83d\udcde Phone: 0489 265 737 \n\ud83d\udce7 Email: help@australiancreditsolutions.com.au \n\ud83c\udf10 Website: https://www.australiancreditsolutions.com.au.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-slate-800 pb-16">
      <MainLayout>
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqSchema),
            }}
          />
        </Head>
        {/* Header */}
        <motion.header
          className="bg-gradient-to-r from-blue to-blue-500 text-white py-12 px-4 text-center shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              At Australian Credit Solutions, we know that credit issues can be
              stressful, confusing, and overwhelming. Here are answers to the
              most common questions about our services.
            </p>
          </div>
        </motion.header>

        <main className="max-w-4xl mx-auto px-4 py-8">
          {faqData.map((category, categoryIndex) => (
            <motion.section
              key={categoryIndex}
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-blue mb-6 flex items-center">
                <span className="mr-3 text-2xl">{category.icon}</span>
                {category.category}
              </h2>

              <div className="space-y-4">
                {category.questions.map((item, index) => {
                  const faqIndex = `${categoryIndex}-${index}`;
                  const isActive = activeIndex === faqIndex;

                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                    >
                      <motion.button
                        className={`w-full px-5 py-4 text-left flex justify-between items-center font-medium ${
                          isActive
                            ? "bg-blue-50 text-blue"
                            : "bg-white text-slate-800"
                        }`}
                        onClick={() => toggleFAQ(faqIndex)}
                        whileHover={{ backgroundColor: "#e0f2ff" }}
                        whileTap={{ scale: 0.99 }}
                      >
                        {item.q}
                        <motion.span
                          animate={{ rotate: isActive ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-4 text-blue-500"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </motion.span>
                      </motion.button>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 py-4 bg-blue-50 border-t border-blue-100">
                              <p className="text-slate-700">{item.a}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.section>
          ))}
        </main>
      </MainLayout>
    </div>
  );
}
