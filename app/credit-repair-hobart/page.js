// app/page.js
"use client";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CompanyCarousel from "../../components/homepage/CompanySection";
import HeroSection from "../../components/homepage/HeroSection";
import TestimonialSection from "../../components/homepage/ScrollTestimonials";
import VideoServicesSection from "../../components/homepage/VideoServicesSection";
import HowWorks from "../../components/HowWork";
import Link from "next/link";
import { generateMinimalStructuredData } from "../../utils/generateMinimalStructuredData";

// ✅ SEO Metadata for Hobart Credit Repair

export default function Home() {
  // Generate structured data for this service page
  const structuredData = generateMinimalStructuredData({
    pathname: "/credit-repair-hobart",
    title: "Hobart Credit Repair Experts | Australian Credit Solutions",
    description: "Professional credit repair services in Hobart. Remove defaults, correct credit reports, and improve your credit score with Hobart's trusted credit repair experts.",
    isService: true,
    serviceType: "Credit Repair Services Hobart"
  });
  return (
    <main className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <Header />
      <HeroSection />
      <VideoServicesSection />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Question 1 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#0668a5] mb-4">
              In Hobart, what is a good credit score?
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Your credit score is calculated differently by different credit
                scoring agencies. If your credit report reveals scores out of
                1,200, a score of 853 or higher is considered exceptional, while
                a score of 661 or higher is deemed decent. If your credit report
                shows scores on a scale of 1,000, anything above 690 is
                considered exceptional, and anything above 540 is considered
                good.
              </p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#0668a5] mb-4">
              What do I need to do to fix my credit fast in Hobart?
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="bg-[#0668a5] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h3 className="font-semibold">
                      Take a look and get a copy of your credit report
                    </h3>
                    <p>
                      Annualcreditreport.com is an excellent resource. Examine
                      it for mistakes to file a challenge or dispute with the
                      reporting agencies:
                    </p>
                    <ul className="pl-5 mt-2 space-y-1 list-disc">
                      <li>Equifax</li>
                      <li>Experian</li>
                      <li>TransUnion</li>
                    </ul>
                    <p className="mt-2">
                      If you spot any, it&apos;s a relatively simple process to
                      dispute those errors and have them removed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-[#0668a5] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h3 className="font-semibold">
                      Keep an eye on things and make modifications as needed.
                    </h3>
                    <p>
                      A history of late payments might hurt your credit score,
                      which can affect how much you pay for loans and how often
                      you&apos;re approved. When things go wrong, instead of giving
                      up, keep an eye on things and make appropriate changes as
                      needed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-[#0668a5] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h3 className="font-semibold">
                      Always make on-time payments to your creditors.
                    </h3>
                    <p>
                      This entails paying them on a regular basis, such as once
                      a month or once a quarter. If you follow this rule and pay
                      on time, you will not be charged any late fees; it is
                      significantly less expensive than having the debt
                      collector impose double interest rates due to missed
                      deadlines!
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-[#0668a5] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    4
                  </span>
                  <div>
                    <h3 className="font-semibold">
                      Stop utilizing more than 30% of your available credit at
                      one time.
                    </h3>
                    <p>
                      A high utilization ratio is one of the most damaging
                      factors to your credit score. What is the ratio of
                      utilization? It has to do with the amount of money you
                      owe. versus the amount of credit you have access to. So,
                      if you have a total debt of $10,000 on all of your credit
                      cards and you&apos;ve used up $3000 of your maximum credit
                      limit (equal to 30%), you&apos;re at 60%. That is to say, an
                      increase in income from $300 to $600 per month will not
                      affect or prevent late payments IF and ONLY IF they do not
                      exceed this ceiling of 60%.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-[#0668a5] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    5
                  </span>
                  <div>
                    <h3 className="font-semibold">
                      Do not apply for new credit lines.
                    </h3>
                    <p>
                      Applying for new credit lines is a no-no if you want to
                      repair a credit score in Hobart. The initial investigation
                      into your credit history may harm any previous credit
                      score you may have had, and may even impair your overall
                      rating. If anything, only use the ones for which you have
                      been approved sparingly and make sure to pay them on time.
                      Paying your debts on time will keep your credit score from
                      falling too low, making it easier to repair your credit in
                      the future.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-[#0668a5] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    6
                  </span>
                  <div>
                    <h3 className="font-semibold">
                      Keep your old credit cards active.
                    </h3>
                    <p>
                      If you&apos;re still keeping up with your old cards, keeping
                      them active is a smart idea. It&apos;s also the most effective
                      approach to keep your credit score in good standing. Long
                      credit history can help you establish credit, which
                      accounts for 15% of your credit score. Many people don&apos;t
                      realize they don&apos;t have a credit score because they don&apos;t
                      understand what it signifies or how to keep it active.
                    </p>
                    <p className="mt-2">
                      However, there are a couple of cautions. After a set
                      period of inactivity, your card issuer may close it, and
                      if it has an annual fee, it may be worth closing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Go-to Service */}
          <div className="bg-blue-50 border border-gray-300 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-[#0668a5] mb-4">
              Go-to credit fixing service in Hobart
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Many companies are claiming to be the best, but we guarantee it.
                We know what you need and want from your credit fix in Hobart in
                order for your credit score to go up while retaining all of its
                great features like affordability or fast approval timeframes.
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
                #1 in Hobart
              </div>
            </div>

            <p className="text-gray-700 text-lg mb-6">
              Australian Credit Solutions is the premier credit repair service
              in Hobart because we deliver exceptional results. Our team
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
