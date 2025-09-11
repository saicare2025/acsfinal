// app/page.js
"use client";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CompanyCarousel from "../../components/homepage/CompanySection";
import HeroSection from "../../components/homepage/HeroSection3";
import TestimonialSection from "../../components/homepage/ScrollTestimonials";
import VideoServicesSection from "../../components/homepage/VideoServicesSection";
import HowWorks from "../../components/HowWork";
import Link from "next/link";
import { generateMinimalStructuredData } from "../../utils/generateMinimalStructuredData";
import ReviewsWidget from "@/components/homepage/Testmonials";

import RelatedBlock from "@/app/_seo/RelatedBlock";

// ✅ SEO Metadata for Canberra Credit Repair

export default function Home() {
  // Generate structured data for this service page
  const structuredData = generateMinimalStructuredData({
    pathname: "/credit-repair-canberra",
    title: "Canberra Credit Repair Experts | Australian Credit Solutions",
    description:
      "Professional credit repair services in Canberra. Remove defaults, correct credit reports, and improve your credit score with Canberra's trusted credit repair experts.",
    isService: true,
    serviceType: "Credit Repair Services Canberra",
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
      <section className="py-8 bg-white">
        <ReviewsWidget />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section 1: What Is A Credit Score */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#0668a5] mb-4">
              What Is A Credit Score?
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                A credit score (&apos;credit rating&apos;) is a number that
                influences whether or not a person can get a loan, an apartment,
                insurance, phone service - regardless of who they are and what
                their income might be. Essentially it&apos;s based on your
                statistical probability
                <Link
                  href="/get-credit-repair"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Get Credit Repair
                </Link>{" "}
                of meeting your debt obligations in the past by making on-time
                payments and not defaulting on loans. In other words, it&apos;s
                an expression of how risky it is to lend to you, given our
                knowledge of you over the years.
              </p>
              <p>
                A credit score is necessary is because it allows people and
                businesses to use their own funds for investment so that they
                can create more wealth in the future. And when used responsibly,
                credit can be an excellent tool for building one&apos;s
                <Link
                  href="/what-is-a-good-credit-score-australia"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  What Is A Good Credit Score Australia
                </Link>{" "}
                creditworthiness; our society relies on it also because people
                need to borrow money to do things such as buy homes or
                businesses, start new projects, pay off debts; however, just
                like any other tool, if abused, it can do severe damage!
              </p>
            </div>
          </div>

          {/* Section 2: Why You Deserve Good Credit */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#0668a5] mb-4">
              Why Do You Deserve A Good Credit Score?
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                You deserve a good credit score because it tells creditors you
                are a high-risk borrower instead of the other way around. Once
                you fix your credit score in Canberra and get a legitimate,
                clean credit history, you will have more negotiating leverage in
                <Link
                  href="/blog-details/credit-file-defaults-can-an-unreceived-bill-appear-on-your-report"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Credit File Defaults Can An Unreceived Bill Appear On Your
                  Report
                </Link>{" "}
                loan agreements and lower interest rates on loans or better
                offers from airlines and landlords. And if you continue to keep
                good standing by paying your bills on time and managing your
                debt effectively, then securing favorable terms on future
                purchases becomes significantly easier.
              </p>
            </div>
          </div>

          {/* Section 3: Our Service */}
          <div className=" bg-blue-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-[#0668a5] mb-4">
              What Should I Know About Your Service to Fix My Credit Rating in
              Canberra?
            </h2>
            <div className="space-y-4 text-gray-700 mb-6">
              <p>
                What you need to know about our service is that it&apos;s a law
                firm with a team of credit lawyers who specialize in Australian
                debts
                <Link
                  href="/credit-enquiry-removal"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Credit Enquiry Removal
                </Link>{" "}
                and bankruptcy. We understand the intimations of financial
                difficulties, and we work diligently to protect what you hold
                dear by upholding your legal rights.
              </p>
              <p>
                Australian Credit Solutions is a legal service that provides
                expert advice to clients in all parts of Australia, including
                credit score repair in Canberra.
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
        currentSlug="/credit-repair-canberra"
        heading="Related services & guides"
      />

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
                #1 in Canberra
              </div>
            </div>

            <p className="text-gray-700 text-lg mb-6">
              Australian Credit Solutions is the premier credit repair service
              in Canberra because we deliver exceptional results. Our team
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
