// app/page.js
"use client";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CompanyCarousel from "../../components/homepage/CompanySection";
import HeroSection from "../../components/homepage/HeroSection4";
import TestimonialSection from "../../components/homepage/ScrollTestimonials";
import VideoServicesSection from "../../components/homepage/VideoServicesSection";
import HowWorks from "../../components/HowWork";
import Link from "next/link";

// ✅ SEO Metadata for Sydney Credit Repair

export default function Home() {
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
              What Is Credit Repair?
            </h2>
            <div className="w-24 h-1 bg-[#0668a5] mb-6"></div>
          </div>

          {/* Credit Repair Definition */}
          <div className="mb-8 space-y-4 text-gray-700">
            <p>
              A credit score (&apos;credit rating&apos;) is a number that influences
              whether or not a person can get a loan, an apartment, insurance,
              phone service - regardless of who they are and what their income
              might be. Essentially it&apos;s based on your statistical probability
              of meeting your debt obligations in the past by making on-time
              payments and not defaulting on loans. In other words, it&apos;s an
              expression of how risky it is to lend to you, given our knowledge
              of you over the years.
            </p>
            <p>
              Credit Repair is a process by which you can correct any errors on
              your credit report, also known as a &apos;credit file.&apos; It is designed
              to remove negative items such as late payments and debt from a
              credit report. The reasoning is that consumers with clean bills of
              credit need a more favorable interest rate when they buy things.
            </p>
            <p>
              One way of increasing your credit score may be through one or more
              types of credit fixes in Sydney, which rely on the fact that not
              all debt-related reports are accurate.
            </p>
          </div>

          {/* Credit Score Formula */}
          <div className="mb-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#0668a5] mb-4">
              What Is The Formula For Calculating A Credit Score?
            </h3>
            <p className="mb-4">
              Five criteria are used in calculating a person&apos;s credit score:
            </p>
            <ul className="space-y-3 list-disc pl-5">
              <li>Payment history (35%)</li>
              <li>Amounts owed (30%)</li>
              <li>Length of credit history (15%)</li>
              <li>Types of credit (10%)</li>
              <li>Credit mix (10%)</li>
            </ul>
            <p className="mt-4">
              Generally speaking, someone with no reported negative information
              on their account will have an excellent and strong score, while an
              account holder with various profound derogatory items appearing on
              their file will have a more damaging and weak score.
            </p>
          </div>

          {/* Why Fix Credit */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#0668a5] mb-4">
              Why Would I Need To Fix A Credit Score In Sydney?
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Common reasons for someone to need credit repair are identity
                theft when accounts were opened when you were not aware, when
                old mistakes (e.g., late payments) show up on your report
                inappropriately (and may still be somewhat correctable), or in
                some cases if &apos;the other person&apos; pays off an old delinquent
                account that belongs to you.
              </p>
              <p>
                If you&apos;re looking to get a loan, lease a vehicle, rent an
                apartment or even apply for credit cards, having good credit is
                almost a necessity. In other words, your credit rating is
                something that can definitely affect many aspects of your life.
              </p>
              <p>
                You may also need to fix a credit score in Sydney when you have
                been blacklisted by a company that won&apos;t let you extend a line
                of credit when your filled-out applications are denied by banks
                and brokers with &apos;poor credit&apos; in the reason field, or even when
                websites refuse to process your card for payments.
              </p>
              <p>
                If that&apos;s not enough, high-interest rates also usually ensue if
                you have bad credit. This is why most people with bad credit say
                they would do anything they could to fix it! Nobody wants the
                feeling of being rejected from something or having their work go
                unseen - but unfortunately, rejection can happen so easily with
                bad credit health.
              </p>
            </div>
          </div>

          {/* Who Can Help */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#0668a5] mb-4">
              Who Can Help Me With My Credit Report Problems?
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Credit repair lawyers can help you fix your bad credit by
                removing or suppressing negative information and income
                defaults, helping you dispute inaccurate information with the
                three main credit bureaus, and create a new credit history. Plus
                they all offer money-back guarantees--if they don&apos;t help, ask
                for your money back.
              </p>
            </div>
          </div>

          {/* Trusted Name Section */}
          <div className="mb-8 bg-gradient-to-r from-[#0668a5] to-[#0aa6e8] text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              A Trusted Name in the Industry
            </h3>
            <div className="space-y-4">
              <p>
                When personal credit has been damaged, Australian Credit
                Solutions are the best credit fixing agency in Sydney. A trusted
                name with years of expertise, our team can help you get your
                credit rating to be established again without spending too much
                time or money.
              </p>
              <p>
                Australian Credit Solutions specialize in helping those with a
                bad credit rating to clean up their record so they can access
                products as vital as a home loan or car loans again - without
                having to repeatedly apply for those products from different
                lenders. We have been able to assist many people over the years
                with this difficult situation. So today, we want you to take
                advantage of that same opportunity that is available!
              </p>
              <p className="font-semibold">
                So if you&apos;re looking for a quick way out of your bad credit
                position then just pick up your phone, call us now at{" "}
                <a href="tel:0489265737" className="underline">
                  0489 265 737
                </a>
                .
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#0668a5] mb-4">
              What Are The Benefits Of Getting Your Credit Repaired?
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                The benefits of improving your credit are that the reports will
                be accurate again. Once we repair your credit score fast in
                Sydney, your credit report will be more accessible to all three
                credit bureaus. If you&apos;re looking for a loan, establish a line
                of credit, or do anything else that involves borrowing money,
                having an accurate report on hand will make the procedure
                simpler than before.
              </p>
              <p>
                Additionally, there are other great advantages such as getting
                better interest rates for these types of loans or even renting
                off real estate property where financial services would
                necessitate demonstrating good faith and trustworthiness by
                submitting copies of records which can only be obtained through
                an accurate report from all three different agencies.
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
                #1 in Sydney
              </div>
            </div>

            <p className="text-gray-700 text-lg mb-6">
              Australian Credit Solutions is the premier credit repair service
              in Sydney because we deliver exceptional results. Our team
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
