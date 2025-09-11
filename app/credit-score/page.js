// app/page.js
"use client";

import ReviewsWidget from "@/components/homepage/Testmonials";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedServices from "@/components/RelatedServices";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomePage from "../../components/homepage";
import CompanyCarousel from "../../components/homepage/CompanySection";
import HeroSection from "../../components/homepage/HeroSection3";
import HelpSection from "../../components/homepage/HowCan";
import TestimonialSection from "../../components/homepage/ScrollTestimonials";
import VideoServicesSection from "../../components/homepage/VideoServicesSection";
import HowWorks from "../../components/HowWork";
import Link from "next/link";

import RelatedBlock from "@/app/_seo/RelatedBlock";

export default function Home() {
  return (
    <main className="flex max-w-7xl mx-auto min-h-screen flex-col">
      <Header />
      <HeroSection />

      {/* Breadcrumb Navigation */}

      <section className=" py-12 px-4 sm:px-6 lg:px-8">
        <ReviewsWidget />
        <div className="mx-auto max-w-6xl px-4">
          <Breadcrumb pathname="/credit-score" />
        </div>
        <div className="max-w-7xl mx-auto">
          {/* What is a Credit Score */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-blue mb-4">
              What is a Credit Score?
            </h2>
            <p className="text-gray-700 mb-4">
              A credit score is a numerical representation of your
              creditworthiness. Lenders use it{" "}
              <Link
                href="/repair-your-credit-score-australia"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Repair Your Credit Score Australia
              </Link>{" "}
              to assess your risk level when you apply for loans, credit cards,
              or other financial products.
            </p>
            <p className="text-gray-700">
              The higher your credit score, the better your chances of getting
              <Link
                href="/how-to-fix-my-credit-score-australia"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                How To Fix My Credit Score Australia
              </Link>{" "}
              approved for credit with favourable terms.
            </p>
          </div>

          {/* Why is Your Credit Score Important */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-blue mb-4">
              Why is Your Credit Score Important?
            </h2>
            <p className="text-gray-700 mb-6">
              Your credit score affects{" "}
              <Link
                href="/what-is-a-good-credit-score-australia"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                What Is A Good Credit Score Australia
              </Link>{" "}
              various aspects of your financial life:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-blue mb-2">
                  Loan Approvals
                </h3>
                <p className="text-gray-700">
                  Lenders review your credit score to determine your loan
                  <Link
                    href="/blog-details/what-damages-credit-score"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    What Damages Credit Score
                  </Link>{" "}
                  eligibility.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-blue mb-2">
                  Interest Rates
                </h3>
                <p className="text-gray-700">
                  A higher credit score often results in lower interest rates.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-blue mb-2">
                  Credit Limits
                </h3>
                <p className="text-gray-700">
                  Your score can influence the amount of credit lenders are
                  willing to offer you.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-blue mb-2">
                  Employment Opportunities
                </h3>
                <p className="text-gray-700">
                  Some employers check credit scores during the hiring process.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-blue mb-2">
                  Rental Applications
                </h3>
                <p className="text-gray-700">
                  Landlords often check credit scores to decide on rental
                  applications.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-blue mb-2">
                  Insurance Premiums
                </h3>
                <p className="text-gray-700">
                  Insurers may use your credit score to determine your premiums.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-blue mb-12">
            Understanding Your Credit Profile
          </h1>

          {/* Factors Influencing Credit Score */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-blue mb-6 pb-2 border-b-2 border-blue-200">
              Factors Influencing Your Credit Score
            </h2>
            <p className="text-gray-600 mb-8">
              Several factors impact your credit score, each contributing
              differently to your overall credit health:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Payment History",
                  desc: "Your record of paying bills on time is the most significant factor.",
                  icon: "📅",
                },
                {
                  title: "Credit Utilization",
                  desc: "The ratio of your current debt to your credit limit.",
                  icon: "🧮",
                },
                {
                  title: "Length of Credit History",
                  desc: "Longer credit histories can boost your score.",
                  icon: "⏳",
                },
                {
                  title: "Credit Mix",
                  desc: "A diverse range of credit accounts can positively impact your score.",
                  icon: "🔄",
                },
                {
                  title: "New Credit Inquiries",
                  desc: "Frequent applications for new credit can lower your score temporarily.",
                  icon: "🔍",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-blue mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Two-column layout for Checking Score and Understanding Reports */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* How to Check Your Credit Score */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
              <h2 className="text-2xl font-bold text-blue mb-6 pb-2 border-b-2 border-blue-200">
                How to Check Your Credit Score
              </h2>
              <p className="text-gray-600 mb-6">
                Checking your credit score regularly is essential for
                maintaining your financial health:
              </p>

              <ul className="space-y-4">
                {[
                  "Credit Reporting Agencies - These agencies provide detailed credit reports and scores.",
                  "Financial Institutions - Some banks and credit card companies offer free credit score checks.",
                  "Online Services - Various platforms provide free or paid credit score tracking services.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 mt-1 mr-3 text-blue-500">
                      •
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Understanding Credit Reports */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
              <h2 className="text-2xl font-bold text-blue mb-6 pb-2 border-b-2 border-blue-200">
                Understanding Credit Reports
              </h2>
              <p className="text-gray-600 mb-6">
                Your credit report contains detailed information used to
                calculate your credit score:
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Personal Information",
                    desc: "Name, address, social security number, and date of birth.",
                  },
                  {
                    title: "Credit Accounts",
                    desc: "Details about your credit cards, loans, and mortgages.",
                  },
                  {
                    title: "Public Records",
                    desc: "Information about bankruptcies, foreclosures, and other legal matters.",
                  },
                  {
                    title: "Credit Inquiries",
                    desc: "A list of entities that have requested your credit report.",
                  },
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-300 pl-4">
                    <h3 className="text-lg font-semibold text-blue">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue mb-4">
              Improving Your Credit Score
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Improving your credit score takes time and effort, but it is
              achievable with the right strategies:
            </p>
          </div>

          {/* Improvement Strategies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Strategy 1 */}
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue mb-2">
                  Pay Bills on Time
                </h3>
                <p className="text-gray-700">
                  Timely payments positively impact your credit score.
                </p>
              </div>
            </div>

            {/* Strategy 2 */}
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue mb-2">
                  Reduce Debt
                </h3>
                <p className="text-gray-700">
                  Lowering your debt levels can significantly boost your score.
                </p>
              </div>
            </div>

            {/* Strategy 3 */}
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 12H6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue mb-2">
                  Avoid New Credit Inquiries
                </h3>
                <p className="text-gray-700">
                  Multiple credit inquiries can lower your score temporarily.
                </p>
              </div>
            </div>

            {/* Strategy 4 */}
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue mb-2">
                  Dispute Errors
                </h3>
                <p className="text-gray-700">
                  Regularly check your credit report for errors and dispute any
                  inaccuracies.
                </p>
              </div>
            </div>

            {/* Strategy 5 */}
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue mb-2">
                  Maintain a Low Credit Utilization Ratio
                </h3>
                <p className="text-gray-700">
                  Keep your credit card balances low relative to your credit
                  limits.
                </p>
              </div>
            </div>

            {/* Strategy 6 */}
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue mb-2">
                  Diversify Your Credit Mix
                </h3>
                <p className="text-gray-700">
                  Various credit types can positively influence your score.
                </p>
              </div>
            </div>

            {/* Strategy 7 */}
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue mb-2">
                  Keep Old Accounts Open
                </h3>
                <p className="text-gray-700">
                  Length of credit history contributes to your score, so avoid
                  closing old accounts.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <button className="bg-blue hover:bg-blue text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-300">
              Get Your Credit Report Now
            </button>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Credit Score Myths
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              There are many misconceptions about credit scores. Let&apos;s
              debunk some common myths:
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Myth 1: Checking your credit score will lower it.
                  </h3>
                  <p className="text-gray-600">
                    <span className="font-medium text-green-600">Fact:</span>{" "}
                    Checking your credit score is considered a soft inquiry and
                    does not affect your score.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Myth 2: Closing old accounts will improve your credit score.
                  </h3>
                  <p className="text-gray-600">
                    <span className="font-medium text-green-600">Fact:</span>{" "}
                    Closing old accounts can shorten your credit history and
                    potentially lower your score.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Myth 3: You only have one credit score.
                  </h3>
                  <p className="text-gray-600">
                    <span className="font-medium text-green-600">Fact:</span>{" "}
                    You have multiple credit scores based on different scoring
                    models used by various lenders and credit bureaus.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Myth 4: Paying off a debt removes it from your credit
                    report.
                  </h3>
                  <p className="text-gray-600">
                    <span className="font-medium text-green-600">Fact:</span>{" "}
                    Paying off a debt does not remove it from your credit
                    report; it will remain a positive mark.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 italic">
              Knowledge is power when it comes to building and maintaining good
              credit.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue mb-4">
              Tips for Maintaining a Healthy Credit Score
            </h2>
            <p className="text-lg text-gray-600">
              Maintaining a healthy credit score requires ongoing effort and
              vigilance. Here are some tips to help you stay on track:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tip 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue mb-2">
                Monitor Your Credit Regularly
              </h3>
              <p className="text-gray-600">
                Check your credit reports and scores regularly to detect errors
                or signs of fraud.
              </p>
            </div>

            {/* Tip 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue mb-2">
                Use Credit Wisely
              </h3>
              <p className="text-gray-600">
                Avoid maxing out your credit cards and aim to keep your credit
                utilisation ratio below 30%.
              </p>
            </div>

            {/* Tip 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue mb-2">
                Plan for Major Purchases
              </h3>
              <p className="text-gray-600">
                If you&apos;re planning a major purchase, such as a home or car,
                check your credit score and work on improving it if necessary.
              </p>
            </div>

            {/* Tip 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue mb-2">
                Avoid Over-Extending Yourself
              </h3>
              <p className="text-gray-600">
                Only take on credit you can manage and repay.
              </p>
            </div>

            {/* Tip 5 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue mb-2">
                Educate Yourself
              </h3>
              <p className="text-gray-600">
                Stay informed about credit scoring models and how different
                financial activities impact your score.
              </p>
            </div>

            {/* CTA Card */}
            <div className="bg-blue p-6 rounded-xl shadow-md flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-white mb-3">
                Need Help With Your Credit?
              </h3>
              <p className="text-blue-100 mb-4">
                Our financial experts can help you create a personalized plan to
                improve and maintain your credit score.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions About Credit Scores
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about credit scores and how they
              work.
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-xl font-semibold text-blue group-hover:text-blue transition-colors">
                  What is a good credit score?
                </h3>
                <svg
                  className="w-6 h-6 text-gray-500 group-hover:text-gray-700 transition-transform group-focus:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="mt-4">
                <p className="text-gray-600">
                  A good credit score typically falls between 670 and 739,
                  although the exact range can vary depending on the scoring
                  model.
                </p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-xl font-semibold text-blue group-hover:text-blue transition-colors">
                  How long does it take to improve a credit score?
                </h3>
                <svg
                  className="w-6 h-6 text-gray-500 group-hover:text-gray-700 transition-transform group-focus:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="mt-4">
                <p className="text-gray-600">
                  The time it takes to improve your credit score depends on
                  various factors, including the severity of your credit issues
                  and the actions you take to address them. Significant
                  improvements can take several months to a few years.
                </p>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-xl font-semibold text-blue group-hover:text-blue transition-colors">
                  Can I improve my credit score quickly?
                </h3>
                <svg
                  className="w-6 h-6 text-gray-500 group-hover:text-gray-700 transition-transform group-focus:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="mt-4">
                <p className="text-gray-600">
                  While there are no quick fixes, you can take steps to see
                  gradual improvements, such as paying down debt and ensuring
                  timely payments.
                </p>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-xl font-semibold text-blue group-hover:text-blue transition-colors">
                  Do utility payments affect my credit score?
                </h3>
                <svg
                  className="w-6 h-6 text-gray-500 group-hover:text-gray-700 transition-transform group-focus:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="mt-4">
                <p className="text-gray-600">
                  Utility payments typically do not impact your credit score
                  unless reported to credit bureaus, usually in delinquency
                  cases.
                </p>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-xl font-semibold text-blue group-hover:text-blue transition-colors">
                  How does a credit inquiry affect my score?
                </h3>
                <svg
                  className="w-6 h-6 text-gray-500 group-hover:text-gray-700 transition-transform group-focus:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="mt-4">
                <p className="text-gray-600">
                  A hard inquiry, such as when you apply for new credit, can
                  temporarily lower your score by a few points. Soft inquiries,
                  such as checking your score, do not affect your score.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VideoServicesSection />
      <HelpSection />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Role of Credit Scores in Different Life Stages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your credit score plays different but equally important roles
              throughout your financial journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Young Adults */}
            <div className="bg-blue-50 p-6 rounded-xl border-t-4 border-blue-400 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue font-bold rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  18-25
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Young Adults and Credit Scores
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Young adults often have limited credit history, making it
                essential to start building credit early.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Opening a student credit card and making small purchases
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Becoming an authorised user on a parent&apos;s credit card
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Taking out a small personal loan and repaying it on time
                  </span>
                </li>
              </ul>
            </div>

            {/* Homeownership */}
            <div className="bg-green-50 p-6 rounded-xl border-t-4 border-green-400 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 text-green-800 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  26-60
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Credit Scores and Homeownership
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                A good credit score is vital for homeownership as it affects
                your mortgage options and interest rates.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Check your credit score before applying for a mortgage
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Pay down debt to improve your credit utilisation ratio
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Avoid major credit purchases during the home-buying process
                  </span>
                </li>
              </ul>
            </div>

            {/* Retirement */}
            <div className="bg-purple-50 p-6 rounded-xl border-t-4 border-purple-400 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 text-purple-800 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  60+
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Credit Scores in Retirement
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Retirees may think credit scores are no longer critical, but
                they still play important roles.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Maintain a healthy score for favorable loan terms
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Monitor credit reports to protect against identity theft
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Use credit responsibly to avoid retirement debt
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Impact of Debt on Your Credit Score
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Debt management is a critical aspect of maintaining and improving
              your credit score.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Types of Debt */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-blue mb-4">
                  How Different Debts Affect Your Score
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Credit Card Debt",
                      content:
                        "High balances can increase your credit utilisation ratio. Aim to keep balances below 30% of limits.",
                      icon: "💳",
                    },
                    {
                      title: "Student Loans",
                      content:
                        "Timely payments help your score; defaults severely damage it.",
                      icon: "🎓",
                    },
                    {
                      title: "Mortgage Loans",
                      content:
                        "Timely payments improve credit; late payments hurt significantly.",
                      icon: "🏠",
                    },
                    {
                      title: "Auto Loans",
                      content:
                        "Regular payments build credit; missed payments harm it.",
                      icon: "🚗",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-xl mr-3">{item.icon}</span>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {item.title}
                        </h4>
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Debt Payoff Strategies */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-blue mb-4">
                  Strategies for Paying Off Debt
                </h3>
                <div className="space-y-4">
                  {[
                    "Debt Snowball Method: Pay smallest debts first for motivation",
                    "Debt Avalanche Method: Target high-interest debts first to save money",
                    "Balance Transfers: Move high-interest balances to lower-rate cards",
                    "Debt Consolidation: Combine debts into one lower-interest loan",
                    "Negotiating with Creditors: Request lower rates or better terms",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Credit Scoring Models */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-blue mb-4">
                  Credit Scoring Models
                </h3>
                <div className="space-y-3">
                  {[
                    "FICO Score (300-850): Most widely used across industries",
                    "Vantage Score (300-850): Alternative scoring model",
                    "Industry-Specific Scores: Tailored for auto, credit cards, etc.",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-100 text-blue text-xs font-bold px-2 py-1 rounded mr-3">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Insurance Impact */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-blue mb-4">
                  Credit Scores & Insurance Premiums
                </h3>
                <p className="text-gray-600 mb-4">
                  Higher scores can lower your insurance costs:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Maintain good credit to qualify for better rates
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Compare quotes as insurers use scores differently
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Monitor reports for errors that could affect rates
                    </span>
                  </li>
                </ul>
              </div>

              {/* Identity Theft */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-blue mb-4">
                  Protecting Against Identity Theft
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">
                      Prevention:
                    </h4>
                    <ul className="space-y-2 text-base">
                      <li className="flex items-start">
                        <svg
                          className="w-4 h-4 text-blue-500 mr-1.5 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Monitor credit reports</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-4 h-4 text-blue-500 mr-1.5 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Use strong passwords</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-4 h-4 text-blue-500 mr-1.5 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Beware of phishing scams</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-4 h-4 text-blue-500 mr-1.5 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Secure personal documents</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">
                      If Victimized:
                    </h4>
                    <ul className="space-y-2 text-base">
                      <li className="flex items-start">
                        <svg
                          className="w-4 h-4 text-red-500 mr-1.5 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Report to credit bureaus</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-4 h-4 text-red-500 mr-1.5 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>File police report</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-4 h-4 text-red-500 mr-1.5 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Dispute fraudulent charges</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-4 h-4 text-red-500 mr-1.5 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Monitor credit closely</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Building/Rebuilding Credit */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-blue mb-4">
                  Building/Rebuilding Credit
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">
                      From Scratch:
                    </h4>
                    <ul className="space-y-2 text-base">
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue text-xs font-bold px-1.5 py-0.5 rounded mr-2">
                          1
                        </div>
                        <span>Secured credit card</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue text-xs font-bold px-1.5 py-0.5 rounded mr-2">
                          2
                        </div>
                        <span>Become authorized user</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue text-xs font-bold px-1.5 py-0.5 rounded mr-2">
                          3
                        </div>
                        <span>Credit-builder loan</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue text-xs font-bold px-1.5 py-0.5 rounded mr-2">
                          4
                        </div>
                        <span>Pay all bills on time</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">
                      After Hardship:
                    </h4>
                    <ul className="space-y-2 text-base">
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 text-xs font-bold px-1.5 py-0.5 rounded mr-2">
                          1
                        </div>
                        <span>Create a budget</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 text-xs font-bold px-1.5 py-0.5 rounded mr-2">
                          2
                        </div>
                        <span>Automatic payments</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 text-xs font-bold px-1.5 py-0.5 rounded mr-2">
                          3
                        </div>
                        <span>Start with secured credit</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 text-xs font-bold px-1.5 py-0.5 rounded mr-2">
                          4
                        </div>
                        <span>Monitor progress</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits & CTA */}
          <div className="mt-12 bg-blue rounded-xl p-8 text-white">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                The Benefits of a High Credit Score
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {[
                  "Lower interest rates",
                  "Higher credit limits",
                  "Better insurance rates",
                  "More housing options",
                  "Employment opportunities",
                  "Financial flexibility",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-blue-200 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-3">
                  Expert Advice from Australian Credit Solutions
                </h4>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  {[
                    "Credit Score Analysis",
                    "Personalised Action Plans",
                    "Ongoing Support",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-blue px-4 py-2 rounded-full text-base"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              {/* Resources Section */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 mb-8">
                <h3 className="text-2xl font-semibold text-blue mb-6 pb-2 border-b-2 border-blue-200">
                  Additional Resources
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Financial Literacy Programs",
                      description:
                        "Participate in programs about managing your credit and finances.",
                      icon: "📚",
                    },
                    {
                      title: "Credit Counseling Services",
                      description:
                        "Seek help for personalised advice and strategies.",
                      icon: "💬",
                    },
                    {
                      title: "Online Tools & Apps",
                      description:
                        "Track your score, budget, and manage finances digitally.",
                      icon: "📱",
                    },
                  ].map((resource, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-2xl mr-4 text-blue-500">
                        {resource.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-1">
                          {resource.title}
                        </h4>
                        <p className="text-gray-600">{resource.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Section */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <h3 className="text-2xl font-semibold text-blue mb-6 pb-2 border-b-2 border-blue-200">
                  Leveraging Technology
                </h3>
                <div className="space-y-4">
                  {[
                    "Credit Monitoring Services: Get alerts for score changes and fraud",
                    "Financial Apps (Mint, YNAB): Track spending and budgets",
                    "Automated Payments: Never miss due dates automatically",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-100 text-blue text-xs font-bold px-2 py-1 rounded-full mr-3 mt-1">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Future Trends */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 mb-8">
                <h3 className="text-2xl font-semibold text-blue mb-6 pb-2 border-b-2 border-blue-200">
                  Future of Credit Scoring
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Alternative Data",
                      content:
                        "Utility payments and rental history may soon factor into scores",
                    },
                    {
                      title: "AI & Machine Learning",
                      content:
                        "Advanced algorithms for more accurate risk assessment",
                    },
                    {
                      title: "Greater Transparency",
                      content:
                        "Clearer explanations of scoring factors and calculations",
                    },
                  ].map((trend, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-blue-300 pl-4"
                    >
                      <h4 className="text-lg font-medium text-gray-800 mb-1">
                        {trend.title}
                      </h4>
                      <p className="text-gray-600">{trend.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Psychology Section */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <h3 className="text-2xl font-semibold text-blue mb-6 pb-2 border-b-2 border-blue-200">
                  The Psychology of Credit
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue mb-2">
                      Credit Score Anxiety
                    </h4>
                    <p className="text-gray-700">
                      Education reduces anxiety - learn how scores work to feel
                      empowered.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-2">
                      Financial Stress Impact
                    </h4>
                    <p className="text-gray-700">
                      Good credit habits reduce stress and improve overall
                      wellbeing.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">
                      Staying Motivated
                    </h4>
                    <p className="text-gray-700">
                      Set small goals and celebrate progress to maintain
                      momentum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Community Support for Credit Score Improvement
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Building a support network can be beneficial as you work to
              improve your credit score
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Support Network */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold text-blue mb-6 pb-2 border-b-2 border-blue-200">
                Build Your Support Network
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Join Financial Forums",
                    description:
                      "Online communities provide valuable advice and support from others",
                    icon: "💻",
                  },
                  {
                    title: "Seek Professional Guidance",
                    description:
                      "Financial advisors offer personalised strategies",
                    icon: "👔",
                  },
                  {
                    title: "Family and Friends",
                    description:
                      "Share goals with trusted people for encouragement",
                    icon: "👨‍👩‍👧‍👦",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-2xl mr-4">{item.icon}</span>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Government Resources */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold text-blue mb-6 pb-2 border-b-2 border-blue-200">
                Government & Non-Profit Resources
              </h3>
              <ul className="space-y-4">
                {[
                  "Australian Government&apos;s MoneySmart - Free tools and calculators",
                  "National Debt Helpline - Free confidential debt advice",
                  "Community Financial Counselling - Low-cost financial counselling",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Financial Planning */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-blue-100 mb-16">
            <h3 className="text-2xl font-semibold text-blue mb-6 text-center">
              Credit Score and Financial Planning
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Short-Term Goals",
                  items: [
                    "Qualify for better loans",
                    "Reduce interest rates",
                    "Improve credit utilization",
                  ],
                },
                {
                  title: "Long-Term Goals",
                  items: [
                    "Financial stability",
                    "Maintain credit access",
                    "Build wealth",
                  ],
                },
                {
                  title: "Retirement Planning",
                  items: [
                    "Financial flexibility",
                    "Manage expenses",
                    "Access credit if needed",
                  ],
                },
              ].map((item, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue mb-3">{item.title}</h4>
                  <ul className="space-y-2">
                    {item.items.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-blue-100 text-blue text-xs font-bold px-2 py-0.5 rounded-full mr-2">
                          ✓
                        </div>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Pitfalls */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Education */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold text-blue mb-6 pb-2 border-b-2 border-blue-200">
                Education Resources
              </h3>
              <div className="space-y-4">
                {[
                  "Online courses on personal finance",
                  "Local workshops and webinars",
                  "Books and financial blogs",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 text-blue text-xs font-bold px-2 py-1 rounded mr-3">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pitfalls */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold text-blue mb-6 pb-2 border-b-2 border-blue-200">
                Avoid Common Pitfalls
              </h3>
              <ul className="space-y-3">
                {[
                  "Late payments - Set up automatic payments",
                  "High credit utilization - Keep balances low",
                  "Ignoring reports - Check credit regularly",
                  "Too many applications - Space out credit requests",
                  "Old debts - Pay off collections accounts",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Financial Independence */}
          <div className="bg-blue text-white p-8 rounded-xl mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Credit Scores and Financial Independence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Emergency Funds",
                  description: "Good credit provides a safety net",
                },
                {
                  title: "Investment Opportunities",
                  description:
                    "Better financing for real estate and other investments",
                },
                {
                  title: "Financial Security",
                  description: "Peace of mind through good credit management",
                },
              ].map((item, index) => (
                <div key={index} className="bg-blue p-4 rounded-lg">
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-blue-100">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lifestyle Tips */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-blue-100 mb-16">
            <h3 className="text-2xl font-semibold text-blue mb-6 text-center">
              Building a Credit-Friendly Lifestyle
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Live within your means - Budget and save",
                "Prioritise debt repayment - Reduce utilization",
                "Practice good habits - Regular financial reviews",
              ].map((item, index) => (
                <div key={index} className="border-l-4 border-blue-400 pl-4">
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <RelatedBlock
        currentSlug="/credit-score"
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
                #1 in Perth
              </div>
            </div>

            <p className="text-gray-700 text-lg mb-6">
              Australian Credit Solutions is the premier credit repair service
              in Perth because we deliver exceptional results. Our team
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

      {/* Related Services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/credit-score" />
      </div>

      <RelatedBlock
        currentSlug="/credit-score"
        heading="Related services & guides"
      />
      <Footer />
    </main>
  );
}
