// File: app/credit-repair-for-credit-card-applications-australia/page.jsx
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { motion } from "framer-motion";
import FooterForm from "@/components/FooterForm";
import ArrowIcon from "../assets/arrow.png";
import ArrowIconM from "../assets/arrowm.png";
import { generateMinimalStructuredData } from "../../utils/generateMinimalStructuredData";

import Image from "next/image";
import ReviewsWidget from "@/components/homepage/Testmonials";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedServices from "@/components/RelatedServices";

import RelatedBlock from "@/app/_seo/RelatedBlock";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function CreditRepairCreditCardApplicationsPage() {
  // FAQ data for structured data
  const faqData = [
    {
      question: "How long before I can apply for credit cards again?",
      answer:
        "Most removals happen within 6-12 weeks. You'll see your credit score improve within 30 days of removals. We typically recommend waiting until removals are complete before new credit card applications to avoid further rejections.",
    },
    {
      question: "Which credit cards should I apply for after credit repair?",
      answer:
        "This depends on your cleaned-up credit profile, income, and goals. We provide specific recommendations based on your situation. Generally, start with one premium card you really want rather than applying for multiple cards at once.",
    },
    {
      question: "Will removing defaults guarantee credit card approval?",
      answer:
        "While we can't guarantee approvals (that's up to the banks), removing the items causing automatic rejections dramatically improves your chances. Our clients typically go from consistent rejections to approvals for cards they actually want.",
    },
    {
      question:
        "How much does credit repair cost vs the value of better credit cards?",
      answer:
        "Our admin fee is $330. A premium travel rewards card can easily provide $1,000-3,000 annual value in points, benefits, and lower interest rates. The investment pays for itself quickly.",
    },
    {
      question: "What if I've been rejected for credit cards recently?",
      answer:
        "Recent rejections actually make credit repair more important. Each rejection creates another enquiry on your file, making future applications harder. Better to fix the underlying problems now than keep getting rejected.",
    },
    {
      question: "Can you help with business credit card applications too?",
      answer:
        "Absolutely. Business credit cards often have stricter credit file requirements. Cleaning up your personal credit file directly improves your chances of business credit card approval.",
    },
  ];

  // Generate structured data for this service page
  const structuredData = generateMinimalStructuredData({
    pathname: "/credit-repair-for-credit-card-applications-australia",
    title:
      "Credit Repair for Credit Card Applications Australia | Get Approved Again",
    description:
      "Sick of getting knocked back for credit cards? Your credit file is probably the culprit. Let's fix it so you can get approved for the cards you actually want. We've helped thousands of Australians clean up their credit files and go from constant rejections to getting approved for premium credit cards.",
    isService: true,
    serviceType: "Credit Repair for Credit Card Applications",
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-8 lg:py-12">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=")`,
          }}
        ></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Credit Repair for Credit Card Applications Australia
                <span className="block mt-2 text-blue">Get Approved Again</span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Sick of getting knocked back for credit cards? Your credit
                  file is probably the culprit. Let&apos;s fix it so
                  <Link
                    href="/get-credit-repair"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Get Credit Repair
                  </Link>{" "}
                  you can get approved for the cards you actually want.
                </p>

                <p className="text-base text-gray-600">
                  Getting rejected for credit cards is frustrating as hell –
                  especially when you know you can afford the repayments. The
                  problem isn&apos;t your income{" "}
                  <Link
                    href="/blog-details/credit-repair-strategies-for-a-quick-boost-to-your-score"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Credit Repair Strategies For A Quick Boost To Your Score
                  </Link>{" "}
                  or your ability to pay. It&apos;s those black marks on your
                  credit file that are automatically saying &quot;no&quot;
                  before a human even looks at your application.
                </p>

                <p className="text-base text-gray-600">
                  At Australian Credit Solutions, we&apos;ve helped thousands of
                  Australians clean up their credit files and go from constant
                  rejections to{" "}
                  <Link
                    href="/blog-details/credit-file-defaults-can-an-unreceived-bill-appear-on-your-report"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Credit File Defaults Can An Unreceived Bill Appear On Your
                    Report
                  </Link>{" "}
                  getting approved for premium credit cards. Our proven process
                  removes defaults, late payments, and dodgy enquiries that are
                  killing your credit card applications.
                </p>
              </div>

              <div className="mt-4 p-4 bg-orange-50 border-l-4 border-orange-400 rounded">
                <p className="text-base font-medium text-orange-800">
                  <strong>Quick Reality Check:</strong> Have you been knocked
                  back for credit cards in the last 6 months? Every rejection
                  makes it harder to get approved next time. Let&apos;s break
                  that cycle.
                </p>
              </div>

              {/* CTAs */}

              <div
                className="mt-8 relative flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
                role="group"
                aria-label="Primary actions"
              >
                <Link
                  href="/free-credit-assessment"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Get My Credit Card Assessment
                </Link>

                <a
                  href="tel:+61489265737"
                  aria-label="Call Australian Credit Solutions on 0489 265 737"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-blue px-6 py-3 text-base font-semibold text-blue transition hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Call 0489 265 737
                </a>

                {/* Decorative arrow (desktop/tablet only) */}
                <div
                  className="pointer-events-none hidden lg:block"
                  aria-hidden="true"
                >
                  <Image
                    src={ArrowIcon}
                    alt=""
                    width={220}
                    height={70}
                    loading="lazy"
                    className="select-none"
                    priority={false}
                  />
                </div>
                <div
                  className="pointer-events-none lg:hidden flex justify-center"
                  aria-hidden="true"
                >
                  <Image
                    src={ArrowIconM}
                    alt=""
                    width={200}
                    height={120}
                    loading="lazy"
                    className="select-none"
                    priority={false}
                  />
                </div>
              </div>

              {/* Trust badges */}
            </div>

            {/* Right Form with Arrow */}
            <div className="w-full lg:w-1/3 relative">
              {/* Form Container */}

              <FooterForm
                heading="Get My Free Credit Card"
                subheading="Fast & Confidential"
                paragraph="Find out why you're getting rejected for credit cards – free, fast, and confidential."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-base text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>
                  98% success rate
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>
                  No Win No Fee
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>
                  Licensed & insured (ASIC ACL 532003)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile arrow indicator (shown only on mobile) */}
      </section>
      <ReviewsWidget />

      {/* Breadcrumb Navigation */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/credit-repair-for-credit-card-applications-australia" />
      </div>

      {/* Opening Section */}
      <Section title="Why Credit Card Applications Keep Getting Rejected">
        <p className="text-slate-700 mb-6">
          Here&apos;s the truth most banks won&apos;t tell you – credit card
          approvals are largely automated. A computer scans{" "}
          <Link
            href="/emergency-credit-repair"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Emergency Credit Repair
          </Link>{" "}
          your credit file in seconds, and if it sees certain red flags,
          you&apos;re automatically rejected before any human assessment
          happens.
        </p>

        <h3 className="text-xl font-semibold text-blue mb-6">
          What&apos;s Actually Killing Your Credit Card Applications
        </h3>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded">
              <h4 className="font-semibold text-red-800 mb-2">
                Defaults (The Big Killer)
              </h4>
              <p className="text-base text-red-700">
                Even one default can torpedo your credit card applications.
                Banks see a default and immediately think &quot;high risk&quot;
                – doesn&apos;t matter if it was a $200 phone bill from three
                years ago when you were between jobs.
              </p>
            </div>

            <div className="border-l-4 border-orange-400 bg-orange-50 p-4 rounded">
              <h4 className="font-semibold text-orange-800 mb-2">
                Late Payment Records
              </h4>
              <p className="text-base text-orange-700">
                Multiple late payments on credit cards, loans, or even your
                mortgage create a pattern that screams &quot;unreliable
                borrower&quot; to credit card companies. They&apos;d rather
                approve someone with perfect payment history.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 rounded">
              <h4 className="font-semibold text-yellow-800 mb-2">
                Too Many Credit Enquiries
              </h4>
              <p className="text-base text-yellow-700">
                Every time you apply for a credit card and get rejected, it
                leaves an enquiry on your credit file. Too many enquiries in 12
                months makes you look &quot;credit hungry&quot; – a red flag for
                new applications.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-purple-400 bg-purple-50 p-4 rounded">
              <h4 className="font-semibold text-purple-800 mb-2">
                Old Court Judgments
              </h4>
              <p className="text-base text-purple-700">
                That unpaid parking fine that went to court? Still showing up
                and blocking premium credit card approvals years later.
              </p>
            </div>

            <div className="border-l-4 border-gray-400 bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-800 mb-2">
                Incorrect Information
              </h4>
              <p className="text-base text-gray-700">
                Wrong addresses, employment details, or financial information
                can trigger automatic rejections even when you should be
                approved.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 bg-blue-50 p-4 rounded">
              <h4 className="font-semibold text-blue-800 mb-2">
                The Domino Effect of Credit Card Rejections
              </h4>
              <p className="text-base text-blue-700 mb-2">
                Once you get knocked back for one credit card, it becomes harder
                to get approved for others:
              </p>
              <ul className="text-xs text-blue-700 space-y-1">
                <li>• Each rejection creates another enquiry on your file</li>
                <li>
                  • Banks can see your previous rejections and become more
                  cautious
                </li>
                <li>
                  • Your confidence drops and you start applying for
                  lower-quality cards
                </li>
                <li>
                  • You settle for high-fee, high-interest cards instead of the
                  rewards cards you deserve
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
          <p className="text-lg font-semibold text-blue text-center">
            Here&apos;s what most people don&apos;t realize: You might be one
            default removal away from going from automatic rejections to
            automatic approvals.
          </p>
        </div>
      </Section>

      {/* Impact Section */}
      <Section title="How We Help You Get Approved for Better Credit Cards">
        <p className="text-slate-700 mb-6">
          We don&apos;t just clean up your credit file – we specifically focus
          on the items that are blocking your credit card applications. Our
          approach is strategic, targeting the exact problems that make banks
          say no.
        </p>

        <h3 className="text-xl font-semibold text-blue mb-6">
          Our Credit Card Application Success Strategy
        </h3>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="font-semibold text-blue mb-3">
                Step 1: Credit Card Application Analysis
              </h4>
              <p className="text-base text-slate-700">
                We look at your recent credit card rejections and identify
                exactly why you&apos;re being knocked back. Different banks have
                different criteria – what gets you rejected at CommBank might be
                fine at ANZ.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h4 className="font-semibold text-green-700 mb-3">
                Step 2: Strategic Credit File Cleanup
              </h4>
              <p className="text-base text-slate-700 mb-3">
                We target the specific items hurting your credit card
                applications:
              </p>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>• Remove defaults that are automatic deal-breakers</li>
                <li>• Clear late payment patterns that show payment stress</li>
                <li>• Challenge incorrect information causing confusion</li>
                <li>• Remove excessive enquiries from failed applications</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-orange-50 rounded-xl p-6">
              <h4 className="font-semibold text-orange-700 mb-3">
                Step 3: Credit Card Application Timing
              </h4>
              <p className="text-base text-slate-700">
                We advise when to apply and which cards to target based on your
                cleaned-up credit file. No point applying for a premium rewards
                card if your credit score isn&apos;t quite there yet.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <h4 className="font-semibold text-purple-700 mb-3">
                Step 4: Application Strategy
              </h4>
              <p className="text-base text-slate-700">
                We help you understand which credit cards you&apos;re most
                likely to get approved for based on your improved credit
                profile, so you&apos;re not wasting applications on cards you
                won&apos;t qualify for.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
          <p className="text-center text-green-800 font-medium">
            <strong>Real Success Story:</strong> Michael from Melbourne was
            getting knocked back for every credit card – even basic ones. Had
            two defaults and multiple late payments from when his business
            struggled. We removed both defaults and the late payment pattern.
            Three months later, he was approved for a Qantas Platinum card with
            a $25,000 limit and 100,000 bonus points.
          </p>
        </div>
      </Section>

      {/* What We Remove */}
      <Section title="What We Remove That's Blocking Credit Card Approvals">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <Card
              title="Defaults That Auto-Reject Applications"
              bullets={[
                "Telco defaults: Old mobile phone bills, internet accounts",
                "Utility defaults: Electricity, gas, water from previous addresses",
                "Credit card defaults: From cards you couldn't keep up with",
                "Buy now, pay later defaults: Afterpay, Zip, humm that went bad",
                "Personal loan defaults: Small loans that damaged your credit",
              ]}
            />

            <Card
              title="Late Payment Records (The Silent Killer)"
              bullets={[
                "Credit card late payments: Shows you struggle with credit management",
                "Loan late payments: Car loans, personal loans paid late",
                "Mortgage late payments: Even one can hurt premium card applications",
              ]}
            />

            <Card
              title="Excessive Credit Enquiries"
              bullets={[
                "Multiple credit card applications: Too many in 12 months looks desperate",
                "Loan enquiries: Car loans, personal loans affect credit card approvals",
                "Phone plan enquiries: Even unsuccessful mobile applications count",
              ]}
            />
          </div>

          <div className="space-y-6">
            <Card
              title="Court Judgments and Writs"
              bullets={[
                "Unpaid fines: Parking, council rates, toll road fines",
                "Small debt actions: Under $10,000 court actions",
                "Commercial disputes: From business or employment issues",
              ]}
            />

            <Card
              title="Incorrect Information"
              bullets={[
                "Wrong personal details: Address, employment, income information",
                "Mixed credit files: Someone else's information on your file",
                "Outdated information: Old addresses, closed accounts still showing",
              ]}
            />

            <Card
              title="Identity Theft Issues"
              bullets={[
                "Fraudulent credit applications: Cards applied for in your name",
                "Unauthorised enquiries: Credit checks you never authorised",
                "Fake defaults: Debts that aren't yours showing on your file",
              ]}
            />
          </div>
        </div>
      </Section>
      <RelatedBlock
        currentSlug="/credit-repair-for-credit-card-applications-australia"
        heading="Related services & guides"
      />

      {/* Process */}
      <Section title="The Hidden Cost of Bad Credit Card Options">
        <p className="text-slate-700 mb-6">
          When you can&apos;t get approved for good credit cards, you end up
          stuck with expensive, low-feature alternatives that cost you thousands
          per year.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-blue mb-4">
              What Bad Credit Costs You in Credit Card Options
            </h3>

            <div className="space-y-4">
              <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded">
                <h4 className="font-semibold text-red-800 mb-2">
                  High Interest Rates
                </h4>
                <ul className="text-base text-red-700 space-y-1">
                  <li>• Secured credit cards: Often 19-24% interest rates</li>
                  <li>
                    • Bad credit cards: Higher rates than premium cards (18-22%
                    vs 12-16%)
                  </li>
                  <li>
                    • No introductory offers: Miss out on 0% balance transfer
                    periods
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-400 bg-orange-50 p-4 rounded">
                <h4 className="font-semibold text-orange-800 mb-2">
                  Poor Rewards Programs
                </h4>
                <ul className="text-base text-orange-700 space-y-1">
                  <li>
                    • No points earning: Basic cards earn zero reward points
                  </li>
                  <li>
                    • No travel benefits: Miss out on airport lounge access,
                    travel insurance
                  </li>
                  <li>
                    • No sign-up bonuses: Premium cards offer 50,000-100,000+
                    bonus points
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 rounded">
                <h4 className="font-semibold text-yellow-800 mb-2">
                  High Fees Structure
                </h4>
                <ul className="text-base text-yellow-700 space-y-1">
                  <li>
                    • Annual fees: Bad credit cards often charge $99-199 with
                    poor benefits
                  </li>
                  <li>
                    • Cash advance fees: Higher fees and immediate interest
                    charges
                  </li>
                  <li>
                    • Foreign transaction fees: 3%+ on overseas purchases vs 0%
                    on premium cards
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue mb-4">
              The Premium Credit Card Benefits You&apos;re Missing
            </h3>

            <div className="space-y-4">
              <div className="border-l-4 border-green-400 bg-green-50 p-4 rounded">
                <h4 className="font-semibold text-green-800 mb-2">
                  Travel Rewards and Benefits
                </h4>
                <ul className="text-base text-green-700 space-y-1">
                  <li>
                    • Frequent flyer points: Earn 1-2 points per dollar on
                    everyday spending
                  </li>
                  <li>
                    • Airport lounge access: Qantas, Virgin, international
                    lounges included
                  </li>
                  <li>
                    • Travel insurance: Comprehensive cover for overseas trips
                  </li>
                  <li>
                    • Concierge services: 24/7 assistance for bookings and
                    emergencies
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-400 bg-blue-50 p-4 rounded">
                <h4 className="font-semibold text-blue-800 mb-2">
                  Financial Benefits
                </h4>
                <ul className="text-base text-blue-700 space-y-1">
                  <li>
                    • 0% balance transfers: Move debt from high-interest cards
                  </li>
                  <li>
                    • No foreign transaction fees: Save 3%+ on overseas spending
                  </li>
                  <li>
                    • Purchase protection: Insurance on items bought with the
                    card
                  </li>
                  <li>
                    • Extended warranties: Additional coverage on electronics
                    and appliances
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-400 bg-purple-50 p-4 rounded">
                <h4 className="font-semibold text-purple-800 mb-2">
                  Lifestyle Perks
                </h4>
                <ul className="text-base text-purple-700 space-y-1">
                  <li>• Dining credits: $200-400 annual restaurant credits</li>
                  <li>
                    • Shopping benefits: Access to exclusive sales and events
                  </li>
                  <li>
                    • Entertainment perks: Ticket pre-sales, exclusive
                    experiences
                  </li>
                  <li>• Status benefits: Hotel and car rental elite status</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
          <p className="text-center text-green-800 font-medium">
            <strong>The Real Math:</strong> A premium travel rewards card with
            good credit can earn you $1,000-3,000 per year in points and
            benefits. Bad credit cards cost you this opportunity every single
            year.
          </p>
        </div>
      </Section>

      {/* Success Stories */}
      <Section title="Success Stories: From Rejections to Premium Card Approvals">
        <motion.div className="grid gap-8 lg:grid-cols-3">
          <motion.div
            variants={fadeIn}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200"
          >
            <h3 className="text-lg font-semibold text-blue mb-4">
              Sarah&apos;s Story – Teacher, Brisbane
            </h3>
            <div className="space-y-3 text-base text-slate-700">
              <p>
                <strong>Before:</strong> Rejected for 4 different credit cards
                in 6 months. Had one default from a Telstra bill and several
                late payments during divorce proceedings.
              </p>
              <p>
                <strong>Our Process:</strong> Removed the default and late
                payment records. Took 8 weeks to clean up her credit file
                completely.
              </p>
              <p>
                <strong>Result:</strong> Approved for Qantas Premier Platinum
                card ($20,000 limit) with 100,000 bonus points. Now earning
                30,000+ Qantas points per year on everyday spending.
              </p>
              <div className="mt-4 p-3 bg-white rounded-lg">
                <p className="text-xs font-medium italic text-blue-800">
                  &quot;I went from getting knocked back for basic credit cards
                  to being approved for the exact card I wanted – with a massive
                  sign-up bonus. The points have already paid for two domestic
                  flights.&quot;
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200"
          >
            <h3 className="text-lg font-semibold text-green-700 mb-4">
              James&apos;s Story – Small Business Owner, Perth
            </h3>
            <div className="space-y-3 text-base text-slate-700">
              <p>
                <strong>Before:</strong> Multiple credit card rejections due to
                defaults from when his cafe struggled during COVID.
                Couldn&apos;t get business or personal credit cards.
              </p>
              <p>
                <strong>Our Process:</strong> Successfully removed two defaults
                and a court judgment. Also corrected employment information that
                was showing incorrectly.
              </p>
              <p>
                <strong>Result:</strong> Approved for American Express Business
                Gold ($35,000 limit) and personally for Westpac Altitude Black.
                Combined earning over 80,000 reward points annually.
              </p>
              <div className="mt-4 p-3 bg-white rounded-lg">
                <p className="text-xs font-medium italic text-green-800">
                  &quot;Now I&apos;ve got proper business credit cards for
                  expenses and cash flow, plus personal cards that actually earn
                  decent rewards. Should have done this years ago.&quot;
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200"
          >
            <h3 className="text-lg font-semibold text-orange-700 mb-4">
              Emma&apos;s Story – Nurse, Adelaide
            </h3>
            <div className="space-y-3 text-base text-slate-700">
              <p>
                <strong>Before:</strong> Stuck with a basic credit card charging
                $150 annual fee with no rewards. Previous applications rejected
                due to late payment history.
              </p>
              <p>
                <strong>Our Process:</strong> Removed pattern of late payments
                from credit cards and personal loan. Improved credit score by
                180 points.
              </p>
              <p>
                <strong>Result:</strong> Approved for Virgin Australia High
                Flyer card with $15,000 limit. Bonus points paid for a family
                holiday to Bali.
              </p>
              <div className="mt-4 p-3 bg-white rounded-lg">
                <p className="text-xs font-medium italic text-orange-800">
                  &quot;I was paying annual fees for basically nothing. Now
                  I&apos;ve got a card that actually gives me something back –
                  the bonus points alone were worth $1,200 in flights.&quot;
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Why Choose Us */}
      <Section title="Great Ocean Road Tourism Finance Solutions">
        <p className="text-slate-700 mb-6">
          The Great Ocean Road generates $1.3 billion annually. Bad credit
          shouldn&apos;t stop you from joining this success.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-blue mb-4">
              Why Tourism Finance Gets Rejected
            </h3>
            <div className="space-y-3 text-base text-slate-700">
              <div className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>
                  <strong>Seasonal income patterns:</strong> Peak summer/holiday
                  periods
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>
                  <strong>Complex business models:</strong> Accommodation,
                  tours, hospitality combinations
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>
                  <strong>Equipment intensive:</strong> Boats, buses, kitchen
                  equipment, accommodation fit-outs
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>
                  <strong>Credit sensitivity:</strong> Tourism lenders
                  particularly strict about defaults
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue mb-4">
              Great Ocean Road Business Success Stories
            </h3>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-base text-slate-700">
                  <strong>Apollo Bay Accommodation Success:</strong>{" "}
                  &quot;Wanted to expand our B&B but a $4,500 default was
                  blocking all finance applications. ACS removed it in 6 weeks.
                  Now we&apos;ve got 4 more rooms and bookings are solid through
                  2025.&quot; – David & Linda K.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-base text-slate-700">
                  <strong>Port Campbell Tour Business Victory:</strong> &quot;My
                  helicopter tour business needed finance for a second aircraft,
                  but late payments from COVID were killing applications. ACS
                  cleaned my file in 7 weeks. Now I&apos;ve got two choppers and
                  the Great Ocean Road views are paying off big time!&quot; –
                  Marcus T.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-base text-slate-700">
                  <strong>Port Fairy Restaurant Expansion:</strong>{" "}
                  &quot;Heritage restaurant needed kitchen upgrade but credit
                  issues blocked equipment finance. ACS removed multiple entries
                  in 8 weeks. New kitchen installed, reviews are amazing,
                  profits up 40%.&quot; – Giuseppe & Maria C.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Service Options / Pricing */}
      <Section title="Why Western Victoria Trusts ACS">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-blue mb-4">
              Award-Winning Coastal Service
            </h3>
            <div className="space-y-3 text-base text-slate-700">
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">✓</span>
                <span>Industry Excellence Awards 2022, 2023, 2024</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">✓</span>
                <span>
                  Only credit repair company to win 3 consecutive years
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">✓</span>
                <span>
                  Recognised for innovation, results, and client satisfaction
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">✓</span>
                <span>
                  Endorsed by tourism and agricultural professionals across
                  western Victoria
                </span>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-blue mb-4 mt-6">
              Western Victoria Expertise
            </h3>
            <p className="text-base text-slate-700 mb-3">
              Deep understanding of western Victoria&apos;s economic landscape:
            </p>
            <div className="space-y-2 text-base text-slate-700">
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">•</span>
                <span>
                  Tourism and hospitality seasonal finance requirements
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">•</span>
                <span>Agricultural and livestock lending patterns</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">•</span>
                <span>Coastal property investment strategies</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">•</span>
                <span>Regional manufacturing and processing finance</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue mb-4">
              No Win No Fee Promise
            </h3>
            <p className="text-base text-slate-700 mb-3">
              We only get paid when you get results:
            </p>
            <div className="space-y-2 text-base text-slate-700 mb-6">
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>
                  One-off admin fee: $330 (applies regardless of outcome)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>No ongoing monthly charges</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>No hidden costs or surprise bills</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Success fee only charged when defaults are removed</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-blue mb-4">
              Western Victoria Client Reviews
            </h3>
            <div className="space-y-3">
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="flex text-orange-500 text-xs mb-1">★★★★★</div>
                <p className="text-xs text-slate-700">
                  <strong>
                    &quot;Perfect for coastal lifestyle dreams&quot;
                  </strong>{" "}
                  &quot;Moving from Melbourne to Lorne seemed impossible with
                  bad credit. ACS removed two defaults in 7 weeks. Now
                  we&apos;re living 200m from the beach and mortgage is less
                  than our old Melbourne rent!&quot; – Amanda & Chris, Lorne
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-3">
                <div className="flex text-orange-500 text-xs mb-1">★★★★★</div>
                <p className="text-xs text-slate-700">
                  <strong>
                    &quot;They get tourism business challenges&quot;
                  </strong>{" "}
                  &quot;As a Great Ocean Road accommodation provider, my income
                  is seasonal and complex. ACS understood this perfectly and
                  fixed my credit file in 6 weeks. Equipment finance approved,
                  business expanding.&quot; – Rebecca S., Apollo Bay
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-3">
                <div className="flex text-orange-500 text-xs mb-1">★★★★★</div>
                <p className="text-xs text-slate-700">
                  <strong>
                    &quot;Outstanding service for regional clients&quot;
                  </strong>{" "}
                  &quot;I was worried about getting good service in Warrnambool.
                  ACS proved me wrong – professional, fast, and got results.
                  Three defaults removed, business loan approved.&quot; – Peter
                  M., Warrnambool
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Outcomes */}
      <Section title="Western Victoria Service Areas & Local Expertise">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-blue mb-3">
                Greater Geelong & Bellarine Peninsula
              </h3>
              <p className="text-base text-slate-600 mb-2">
                Victoria&apos;s second-largest city and gateway to coastal
                lifestyle
              </p>
              <p className="text-base font-medium mb-2">
                Geelong | Torquay | Anglesea | Drysdale | Portarlington |
                Queenscliff | Ocean Grove
              </p>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-base font-medium text-blue mb-2">
                  Geelong region expertise:
                </p>
                <ul className="text-xs space-y-1">
                  <li>• Waterfront property investments</li>
                  <li>• Manufacturing transition opportunities</li>
                  <li>• University and healthcare sector lending</li>
                  <li>• Marine industry and port-related businesses</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue mb-3">
                Surf Coast & Great Ocean Road
              </h3>
              <p className="text-base text-slate-600 mb-2">
                Australia&apos;s most iconic coastal tourism destination
              </p>
              <p className="text-base font-medium mb-2">
                Torquay | Anglesea | Lorne | Apollo Bay | Port Campbell |
                Warrnambool
              </p>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-base font-medium text-blue mb-2">
                  Coastal specialisation:
                </p>
                <ul className="text-xs space-y-1">
                  <li>• Tourism accommodation and hospitality</li>
                  <li>• Marine equipment and boat finance</li>
                  <li>• Coastal property and holiday rentals</li>
                  <li>• Surf industry and retail businesses</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-blue mb-3">
                Western Districts & Agricultural Region
              </h3>
              <p className="text-base text-slate-600 mb-2">
                Victoria&apos;s premier agricultural and livestock region
              </p>
              <p className="text-base font-medium mb-2">
                Hamilton | Horsham | Ararat | Stawell | Colac | Camperdown
              </p>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-base font-medium text-blue mb-2">
                  Agricultural focus:
                </p>
                <ul className="text-xs space-y-1">
                  <li>• Livestock and wool industry finance</li>
                  <li>• Agricultural equipment and machinery</li>
                  <li>• Rural property and farm investments</li>
                  <li>• Processing and value-adding facilities</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue mb-3">
                Portland & South West Coast
              </h3>
              <p className="text-base text-slate-600 mb-2">
                Industrial port and pristine coastal communities
              </p>
              <p className="text-base font-medium mb-2">
                Portland | Port Fairy | Nelson | Casterton | Heywood
              </p>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-base font-medium text-blue mb-2">
                  South west expertise:
                </p>
                <ul className="text-xs space-y-1">
                  <li>• Industrial and port-related businesses</li>
                  <li>• Fishing and aquaculture industry</li>
                  <li>• Coastal tourism and accommodation</li>
                  <li>• Agricultural processing and logistics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Legal Rights / Education */}
      <Section title="Get Started Today - Western Victoria Credit Repair">
        <div className="mb-8">
          <p className="text-slate-700 mb-4">
            Don&apos;t let bad credit hold you back from western Victoria&apos;s
            opportunities. Every month you wait:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3 text-base text-slate-700">
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span>Coastal property prices continue rising rapidly</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span>Tourism season opportunities pass you by</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span>Interest rates may increase, costing thousands more</span>
              </div>
            </div>
            <div className="space-y-3 text-base text-slate-700">
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span>
                  Other buyers with better credit get the properties you want
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span>Business expansion plans remain on hold</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-blue mb-4">
            Take Action Now - Free Assessment for Western Victoria
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-lg font-semibold text-blue mb-2">
                📞 Call Western Victoria Direct: 0489 265 737
              </p>
              <div className="space-y-2 text-base text-slate-700">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    Same-day assessment for Geelong, Warrnambool, Great Ocean
                    Road residents
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    Priority handling for urgent tourism and agricultural
                    finance
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>No obligation, completely confidential</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Award-winning specialists with 98% success rate</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/free-credit-assessment"
                className="w-full rounded-lg bg-blue px-6 py-3 font-semibold text-white text-center hover:bg-blue-700 transition-colors"
              >
                Start My Free Credit Assessment
              </Link>
              <a
                href="tel:+61489265737"
                className="w-full rounded-lg border-2 border-blue px-6 py-3 font-semibold text-blue text-center hover:bg-blue hover:text-white transition-colors"
              >
                Call Now: 0489 265 737
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Common Questions About Credit Enquiry Removal">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4"
        >
          {faqData.map((f, index) => (
            <motion.details
              key={`faq-${index}`}
              variants={fadeIn}
              className="group rounded-xl border border-blue-100 bg-white p-4 shadow-sm transition-all hover:shadow-md"
            >
              <summary className="cursor-pointer select-none font-semibold text-blue group-open:text-blue flex items-center justify-between">
                <span>{f.question}</span>
                <svg
                  className="h-5 w-5 transform group-open:rotate-180 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-base text-slate-700 pl-2 border-l-2 border-blue-200 ml-1">
                {f.answer}
              </p>
            </motion.details>
          ))}
        </motion.div>
      </Section>

      {/* Cost of keeping enquiries */}
      <Section title="About Australian Credit Solutions - Western Victoria">
        <div className="mb-6">
          <p className="text-slate-700 mb-4">
            Proudly helping western Victorian residents achieve financial
            freedom since 2018.
          </p>
          <p className="text-slate-700 mb-6">
            We understand that western Victoria offers unique lifestyle and
            business opportunities – from the booming Geelong economy to Great
            Ocean Road tourism, from Surf Coast property investments to western
            districts agricultural prosperity. Bad credit shouldn&apos;t prevent
            you from capitalizing on these opportunities.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-blue mb-4">
              Our Western Victoria Commitment:
            </h3>
            <div className="space-y-3 text-base text-slate-700">
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">✓</span>
                <span>Same premium service from Geelong to Portland</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">✓</span>
                <span>
                  Understanding of tourism, agriculture, and coastal finance
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">✓</span>
                <span>No travel required – everything handled remotely</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">✓</span>
                <span>
                  Fast-track service for urgent seasonal business needs
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">✓</span>
                <span>Licensed, professional, and award-winning team</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue mb-4">
              Contact Our Western Victoria Team Today:
            </h3>
            <div className="space-y-3 text-base text-slate-700">
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">📞</span>
                <span>
                  <strong>Phone:</strong> 0489 265 737
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">✉️</span>
                <span>
                  <strong>Email:</strong> help@australiancreditsolutions.com.au
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">🌐</span>
                <span>
                  <strong>Web:</strong>{" "}
                  australiancreditsolutions.com.au/geelong-warrnambool
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">⭐</span>
                <span>
                  <strong>Reviews:</strong> 4.9/5 stars from 855+ satisfied
                  clients
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-base font-medium text-blue mb-2">
                ASIC Licensed ACL 532003 | Industry Excellence Awards 2022,
                2023, 2024
              </p>
              <p className="text-xs text-slate-700">
                Don&apos;t let bad credit stop you from living the western
                Victoria lifestyle you deserve. From Geelong&apos;s waterfront
                opportunities to Great Ocean Road tourism success, we&apos;re
                here to help you achieve your financial goals.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Getting Started CTA - This section is now integrated above */}

      {/* Footer trust bar */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-blue to-blue p-6 text-white shadow-lg"
        >
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-base font-medium">
                98% success rate when we take cases
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-base font-medium">
                No Win No Fee — $330 admin fee
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-base font-medium">
                Licensed & regulated — ASIC ACL 532003
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Related Services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/credit-repair-for-credit-card-applications-australia" />
      </div>

      <Footer />
    </main>
  );
}

function Section({ title, children }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeIn}
      viewport={{ once: true, margin: "-100px" }}
      className="mx-auto max-w-6xl px-4 py-12"
    >
      <h2 className="text-2xl font-bold tracking-tight text-blue sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 text-base leading-relaxed text-slate-800">
        {children}
      </div>
    </motion.section>
  );
}

function Card({ title, bullets = [] }) {
  return (
    <motion.div
      variants={fadeIn}
      className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-blue">{title}</h3>
      <ul className="mt-3 space-y-2 text-base text-slate-700">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <svg
              className="h-5 w-5 shrink-0 text-orange-500 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function PriceCard({ name, timeline, perfectFor, includes, featured = false }) {
  return (
    <motion.div
      variants={fadeIn}
      className={`relative rounded-xl border p-6 h-full flex flex-col ${
        featured
          ? "border-blue-300 bg-gradient-to-b from-blue-50 to-white shadow-lg"
          : "border-blue-100 bg-white shadow-sm"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-6 inline-block rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white shadow">
          Most Popular
        </span>
      )}
      <h3 className="text-lg font-semibold text-blue">{name}</h3>
      <p className="mt-1 text-base text-slate-600">Timeline: {timeline}</p>
      <p className="mt-1 text-base text-slate-600">Perfect for: {perfectFor}</p>
      <ul className="mt-3 space-y-2 text-base text-slate-700 flex-grow">
        {includes.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <svg
              className="h-5 w-5 shrink-0 text-blue-500 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {i}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-end justify-between">
        <Link
          href="/free-credit-assessment"
          className="rounded-lg bg-blue px-4 py-2 font-semibold text-white hover:bg-blue transition-colors text-base"
        >
          Start Now
        </Link>
      </div>
    </motion.div>
  );
}

function Testimonial({ name, children }) {
  return (
    <motion.figure
      variants={fadeIn}
      className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md mb-4"
    >
      <div className="flex text-orange-500 mb-2">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-slate-700">{children}</blockquote>
      <figcaption className="mt-3 text-base font-semibold text-blue">
        {name}
      </figcaption>
    </motion.figure>
  );
}
