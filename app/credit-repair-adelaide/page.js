// app/page.js
"use client";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CompanyCarousel from "../../components/homepage/CompanySection";
import HeroSection from "../../components/homepage/HeroSection2";

import VideoServicesSection from "../../components/homepage/VideoServicesSection";
import HowWorks from "../../components/HowWork";
import Link from "next/link";
import { generateMinimalStructuredData } from "../../utils/generateMinimalStructuredData";
import ReviewsWidget from "@/components/homepage/Testmonials";

import RelatedBlock from "@/app/_seo/RelatedBlock";

// ✅ SEO Metadata for Adelaide Credit Repair

export default function Home() {
  // Generate structured data for this service page
  const structuredData = generateMinimalStructuredData({
    pathname: "/credit-repair-adelaide",
    title: "Adelaide Credit Repair Experts | Australian Credit Solutions",
    description:
      "Professional credit repair services in Adelaide. Remove defaults, correct credit reports, and improve your credit score with Adelaide's trusted credit repair experts.",
    isService: true,
    serviceType: "Credit Repair Services Adelaide",
  });
  return (
    <main className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Header />
      <HeroSection />
      <VideoServicesSection />
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white text-gray-800">
        <ReviewsWidget />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-start mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              In Adelaide,{" "}
              <span className="bg-blue bg-clip-text text-transparent">
                what is a good credit report?
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              We apply our expertise to help you understand and manage your
              <a
                href="/get-credit-repair"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Get Credit Repair
              </a>{" "}
              credit profile.
            </p>
          </div>

          <div className="grid grid-cols-1 bg-gradient-to-br from-white to-blue-100 p-4 rounded-2xl md:grid-cols-2 gap-6 lg:gap-12">
            {/* Column 1 */}
            <div>
              <h3 className="text-xl font-semibold text-[#0668a5] mb-4">
                Understanding Your Credit Score
              </h3>
              <p className="mb-4">
                A credit score influences whether you can get approved for a
                loan, a rental,{" "}
                <a
                  href="/what-is-a-good-credit-score-australia"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  What Is A Good Credit Score Australia
                </a>{" "}
                or even a phone plan. It’s calculated based on your repayment
                history, defaults, and overall debt behavior.
              </p>
              <p className="mb-4">
                In Adelaide, a score of <strong>853+</strong> (out of 1,200) or{" "}
                <strong>690+</strong> (out of 1,000) is considered exceptional.
                A decent score starts at 661 or 540 respectively.
              </p>
              <p className="mb-4">
                Lenders and landlords use your score to gauge your financial
                <a
                  href="/remove-defaults-from-your-credit-file"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Remove Defaults From Your Credit File
                </a>{" "}
                reliability and risk.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-xl font-semibold text-[#0668a5] mb-4">
                Why It Matters
              </h3>
              <p className="mb-4">
                A good credit score can unlock lower interest rates, better
                insurance premiums, and easier loan approvals. It shows
                <a
                  href="/credit-enquiry-removal"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Credit Enquiry Removal
                </a>{" "}
                you&apos;re financially trustworthy, which matters whether
                you&apos;re applying for a mortgage or renting an apartment.
              </p>
              <p className="mb-4">
                Experts recommend aiming for a score between{" "}
                <strong>750–850</strong> before applying for big purchases like
                homes or vehicles.
              </p>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-xl font-semibold text-[#0668a5] mb-4">
                Can You Improve Your Score?
              </h3>
              <p className="mb-4">
                Yes — anyone can improve their credit score with time and the
                right help. If your score is below average, a professional
                credit fix in Adelaide can help you work your way back up.
              </p>
              <p className="mb-4">
                Regular repayments, reduced debt, and resolving errors on your
                report can make a significant difference.
              </p>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="text-xl font-semibold text-[#0668a5] mb-4">
                Why Choose Professionals?
              </h3>
              <p className="mb-4">
                Credit repair companies specialize in resolving debt-related
                challenges, filing disputes, and offering guidance that empowers
                you long-term. They work with creditors and legal experts to
                protect your rights and improve your profile.
              </p>
              <p className="mb-4">
                With the right support, you can fix your credit faster and with
                less stress — opening doors to better financial opportunities.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-[#0668a5] text-white p-10 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              Fix Your Credit Rating with Adelaide’s Trusted Experts
            </h3>
            <p className="mb-6 max-w-3xl mx-auto">
              At <strong>Australian Credit Solutions</strong>, we understand how
              credit history works and tailor our strategies to your unique
              situation. Our Adelaide team helps you restore your credit and
              regain financial confidence.
            </p>
            <a
              href="tel:0489265737"
              className="inline-block bg-white text-[#0668a5] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              Call Now for Free Advice: 0489 265 737
            </a>
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
            <Link href="/credit-enquiry-removal-australia">
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
            </Link>

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

      <RelatedBlock
        currentSlug="/credit-repair-adelaide"
        heading="Related services & guides"
      />

  
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
                #1 in Adelaide
              </div>
            </div>

            <p className="text-gray-700 text-lg mb-6">
              Australian Credit Solutions is the premier credit repair service
              in Adelaide because we deliver exceptional results. Our team
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
