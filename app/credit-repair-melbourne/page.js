// app/page.js
"use client";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CompanyCarousel from "../../components/homepage/CompanySection";
import HeroSection from "../../components/homepage/HeroSection2";
import TestimonialSection from "../../components/homepage/ScrollTestimonials";
import VideoServicesSection from "../../components/homepage/VideoServicesSection";
import HowWorks from "../../components/HowWork";
import Link from "next/link";
import { useFAQStructuredData } from "../../hooks/useStructuredData";
import { useEffect } from "react";

// ✅ SEO Metadata for Melbourne Credit Repair
export const metadata = {
  title: "Melbourne Credit Repair Experts | Australian Credit Solutions",
  description:
    "Improve your credit score with Melbourne's leading credit repair specialists. Australian Credit Solutions removes defaults, corrects credit report errors, and helps you secure better financial opportunities.",
  keywords: [
    "Melbourne credit repair",
    "credit repair services Melbourne",
    "fix credit score Melbourne",
    "remove credit defaults Melbourne",
    "Australian Credit Solutions"
  ],
  openGraph: {
    title: "Melbourne Credit Repair Experts | Australian Credit Solutions",
    description:
      "Trusted Melbourne credit repair services to remove defaults, fix errors, and improve your credit score fast.",
    url: "https://www.australiancreditsolutions.com.au/credit-repair-melbourne",
    siteName: "Australian Credit Solutions",
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "https://www.australiancreditsolutions.com.au/og-image.png",
        width: 1200,
        height: 630,
        alt: "Melbourne Credit Repair Experts"
      }
    ]
  },
  alternates: {
    canonical: "https://www.australiancreditsolutions.com.au/credit-repair-melbourne"
  }
};

export default function Home() {
  // FAQ data for structured data (common credit repair questions)
  const faqData = [
    {
      question: "How does credit repair work in Melbourne?",
      answer: "Credit repair in Melbourne involves reviewing your credit report, identifying errors or unfair listings, and working with credit bureaus and creditors to have them corrected or removed. Australian Credit Solutions uses legal expertise to challenge inaccurate information on your credit file."
    },
    {
      question: "How long does credit repair take in Melbourne?",
      answer: "Credit repair timeframes vary depending on the complexity of your case. Simple corrections can take 2-4 weeks, while more complex cases involving defaults or judgments may take 6-12 weeks. We provide clear expectations during your free assessment."
    },
    {
      question: "Can you remove defaults from my credit file in Melbourne?",
      answer: "We can help remove defaults that were incorrectly recorded, unfairly applied, or don't comply with credit reporting guidelines. Valid defaults that were properly applied may need to remain for their statutory period."
    },
    {
      question: "Is credit repair legal in Melbourne?",
      answer: "Yes, credit repair is completely legal in Melbourne and across Australia. We use your rights under Australian law to dispute incorrect or unfair listings. Our work is fully compliant and regulated under our Australian Credit Licence (ACL 532003)."
    },
    {
      question: "How much does credit repair cost in Melbourne?",
      answer: "Our fees are transparent and fixed based on your specific situation. We offer a free assessment, no upfront fees, and flexible payment plans. Contact us for a personalized quote based on your credit repair needs."
    }
  ];

  // Use structured data hook for FAQ
  useFAQStructuredData(faqData);

  // Trigger structured data update for service page detection
  useEffect(() => {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('structuredDataUpdate'));
    }, 100);
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <VideoServicesSection />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Main Heading */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#0668a5] mb-4">
              What Are The Steps Necessary To Repair A Credit Score Fast In
              Melbourne?
            </h2>
            <div className="w-24 h-1 bg-[#0668a5] mb-6"></div>
          </div>

          {/* Introduction */}
          <div className="mb-8 space-y-4 text-gray-700">
            <p>
              Theoretically, the higher the credit rating you have, the better
              it is to be. However, there&apos;s more to your credit rating than just
              a number-and this can be difficult for some people to understand.
            </p>
            <p>
              Your credit rating is a number that measures how reliable you are
              when it comes repayment or not being late on repayments in
              comparison with other people who take out similar type of loans
              and financial products. This score will then determine what
              interest rate they charge you when borrowing money from them.
            </p>
            <p>
              To fix bad credit in Melbourne, you should first understand what&apos;s
              in your credit file. After all, if you don&apos;t know what&apos;s impacting
              your credit rating, there&apos;s no way for you to identify the
              problems and work toward a solution.
            </p>
          </div>

          {/* Credit Score Factors */}
          <div className="mb-8 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#0668a5] mb-4">
              There are three important factors that make up a person&apos;s score:
            </h3>
            <ul className="space-y-3 list-disc pl-5">
              <li>payment history,</li>
              <li>debt-to-credit ratio,</li>
              <li>length of credit history.</li>
            </ul>
            <p className="mt-4">
              These three things constitute up to 95% of your rating! If these
              areas are less than ideal where they should be good, it might take
              some time and patience to repair them.
            </p>
          </div>

          {/* Repair Steps */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#0668a5] mb-4">
              The next step in repairing bad credit:
            </h3>
            <p className="mb-4">
              The next step in repairing bad credit is paying down your balance
              on current accounts that have become delinquent with payments over
              90 days late thus putting them into collections status - most
              notably this includes automobile loans, mortgage, bank lines of
              credits and store accounts that carry high balances.
            </p>
            <p>
              If you have unpaid debts, then you may be interested in knowing
              that there are options that can help. One option is to pay off the
              debts through your earnings. This option often takes a long time
              and may not work for people who don&apos;t earn enough money. Another
              step is for you to file bankruptcy, which will discharge some or
              all of your debt but has serious consequences such as being unable
              to file for certain types of credit for 10 years afterward.
            </p>
          </div>

          {/* More Options */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-[#0668a5] mb-4">
              More options for late payments or unpaid debts:
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="bg-[#0668a5] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  1
                </span>
                <p>
                  If you have late payments on your credit card, make sure that
                  they are all revolving balances so as to avoid having the card
                  canceled if you can&apos;t keep up with it.
                </p>
              </div>
              <div className="flex items-start">
                <span className="bg-[#0668a5] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  2
                </span>
                <p>
                  Try not to use your credit cards too often or charge much more
                  than what you can afford in order to limit unpaid debt.
                </p>
              </div>
              <div className="flex items-start">
                <span className="bg-[#0668a5] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  3
                </span>
                <p>
                  Pay cash for everything if possible because this will help
                  minimize debt and prevent paying an unnecessary interest rate
                  or carrying a balance that may be higher than necessary
                  because of high introductory rates or promotional offers.
                </p>
              </div>
              <div className="flex items-start">
                <span className="bg-[#0668a5] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  4
                </span>
                <p>
                  Remain aware of the contracts you sign and understand their
                  risks before agreeing to open defaults lines of credit with
                  banks or other companies.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Solution */}
          <div className="mb-12 bg-gradient-to-r from-[#0668a5] to-[#0aa6e8] text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              Another solution to fix bad credit in Melbourne
            </h3>
            <div className="space-y-4">
              <p>
                Another solution to fix bad credit in Melbourne is to find a
                reputable company that has state-of-the-art technology and an
                established track record. They will conduct the necessary
                research to find out what errors are on your report and fix any
                errors found. After the evidence of these errors is delivered to
                each one of the credit bureaus, you can expect them all to
                remove or amend their inaccurate information.
              </p>
              <p>
                They have been named the best firm for a complete credit fix in
                Melbourne, with 12+ years of experience handling financial
                compensation cases from those who have been injured or
                negatively affected by a defective product or its use. They are
                experts at consumer credit repair and will help you take back
                control over your finances without breaking the bank. If you&apos;re
                looking for a free consultation, call them today on{" "}
                <a href="tel:1300178773" className="font-bold underline">
                  1300 178 773
                </a>
                ! You&apos;ll never regret giving yourself.
              </p>
            </div>
          </div>

          {/* Why Number 1 */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#0668a5] mb-4">
              Why Number 1?
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Number one in Melbourne and number one in Credit Repair
                Australia. We have years of experience, we never charge upfront
                fees and we provide specialist legal help on a wide range of
                credit-related topics including credit cards, loans, stores
                accounts, and more. Our professional team will work with you to
                find the best solution for your personal situation.
              </p>
              <p>
                Australian Credit Lawyer provides an array of debt law services
                that help both creditors and debtors negotiate with credit
                cards, banks, mortgage companies, tax agencies and utility
                providers to alleviate their debt problems. With the increasing
                complexity of government legislation causing more upheaval in
                people&apos;s finances than ever before, the agents from the ACL
                credit fix company in Melbourne advise their clients on how best
                to approach the complex task of becoming financially stable
                again.
              </p>
              <p>
                We also provide quick and easy solutions to clients who need
                them. They offer service packages according to the individual
                needs of the client at an affordable price while their team of
                professionals keeps a close watch on all of Australia&apos;s main
                credit providers and data rates in order to ensure potential
                problems.
              </p>
            </div>
          </div>
        </div>
      </section>
      <HowWorks />
      <section className="py-16 bg-gradient-to-b from-white to-blue-50 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-start mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How we{" "}
              <span className="bg-blue bg-clip-text text-transparent">
                can help you
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              We apply our expertise to help you understand and manage your
              credit profile.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Removing Incorrect Defaults */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-[#0668a5] mb-3">
                Removing Incorrect Defaults
              </h3>
              <p className="text-gray-700">
                Our credit specialists can help remove defaults that were
                incorrectly recorded on your credit file. These entries can be
                challenged legally when not properly applied or verified.
              </p>
            </div>

            {/* Disputing Invalid Inquiries */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-[#0668a5] mb-3">
                Disputing Invalid Inquiries
              </h3>
              <p className="text-gray-700">
                Finance inquiries can be confusing and damaging if left
                unresolved. Our legal team provides expert advice and support to
                help dispute inaccurate or unauthorized credit inquiries.
              </p>
            </div>

            {/* Court Judgements */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-[#0668a5] mb-3">
                Court Judgements
              </h3>
              <p className="text-gray-700">
                If you’ve received a court judgment, our credit lawyers can
                assist in managing the outcome to avoid unnecessary fines,
                penalties, or potential foreclosure.
              </p>
            </div>

            {/* Worst Repayment History Disputes */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-[#0668a5] mb-3">
                Repayment History Disputes
              </h3>
              <p className="text-gray-700">
                We evaluate your repayment history for incorrect or harmful
                entries and work to resolve disputes—helping you build a strong
                foundation for future financial success.
              </p>
            </div>

            {/* Debt Negotiation */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-[#0668a5] mb-3">
                Debt Negotiation
              </h3>
              <p className="text-gray-700">
                Our team negotiates directly with creditors to reduce or
                restructure your debt. We aim to free you from financial stress
                and represent your interests in all negotiations.
              </p>
            </div>

            {/* Fixing Identity Theft */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-[#0668a5] mb-3">
                Fixing Identity Theft on Your Credit File
              </h3>
              <p className="text-gray-700">
                If your identity has been compromised, we’ll help you repair the
                damage and prevent future misuse. Regain control of your
                personal information and restore your credit profile.
              </p>
            </div>
          </div>

          {/* CTA */}
        </div>
      </section>
      <TestimonialSection />
      <CompanyCarousel />
      <section className="relative py-20 bg-gradient-to-b from-[#0668a5] to-[#0aa6e8] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Australian Credit Solutions?
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-[#0668a5] text-white text-xl font-bold py-2 px-6 rounded-full inline-block">
                #1 in Melbourne
              </div>
            </div>

            <p className="text-gray-700 text-lg mb-6">
              Australian Credit Solutions is the premier credit repair service
              in Melbourne because we deliver exceptional results. Our team
              specializes in removing judgments, bankruptcies, bad debts,
              defaults, and other negative listings to help you qualify for
              loans and financial services again.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-[#0668a5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-700">
                  Years of expertise handling all types of credit cases
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-[#0668a5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-700">
                  Nationwide service - we help clients across Australia
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-[#0668a5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-700">
                  Proven track record of successful credit repairs
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-[#0668a5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-700">
                  Outstanding customer service as our top priority
                </p>
              </div>
            </div>

            <p className="text-gray-700 hidden lg:block text-lg font-medium mb-8">
              Above all else, your satisfaction means everything to us! You
              won&apos;t regret choosing Australian Credit Solutions for fast,
              effective results that get you back on track financially.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* Call Button 1 */}
              <a
                href="tel:0489265737"
                className="bg-white border-2 border-[#0668a5] text-[#0668a5] hover:bg-blue-50 font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="text-center">
                  <div className="font-bold">0489 265 737</div>
                  <div className="text-xs">Credit Repair Helpline</div>
                </div>
              </a>

              {/* Call Button 2 */}
              <a
                href="tel:0489265737"
                className="bg-white border-2 border-[#0668a5] text-[#0668a5] hover:bg-blue-50 font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="text-center">
                  <div className="font-bold">0489 265 737</div>
                  <div className="text-xs">Direct Support</div>
                </div>
              </a>

              {/* Consultation Button */}
              <Link
                href="/meeting-schedule"
                className="bg-[#0668a5] hover:bg-[#05578a] text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
