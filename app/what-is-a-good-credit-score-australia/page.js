// File: app/what-is-a-good-credit-score-australia/page.jsx
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

export default function WhatIsAGoodCreditScorePage() {
  // FAQ data for structured data
  const faqData = [
    {
      question: "What credit score do I need to buy a house in Australia?",
      answer:
        "Most Australian lenders want to see a credit score of at least 600 for home loan approval, but 700+ gives you access to the best rates. With a score below 600, you&apos;ll likely need specialist lenders and may face higher interest rates and deposit requirements.",
    },
    {
      question: "How often should I check my credit score?",
      answer:
        "Check your credit score monthly if possible, but at minimum every 3 months. You&apos;re entitled to one free credit report annually from each bureau, but many online services offer free monthly score updates. Regular monitoring helps you catch errors or fraud early.",
    },
    {
      question: "Can paying bills late really affect my credit score?",
      answer:
        "Yes, absolutely. Bills over $150 that are 60+ days overdue can be listed as defaults, which severely damage your score for 5 years. Even smaller late payments on credit cards and loans are recorded and negatively impact your score.",
    },
    {
      question: "How long do defaults stay on my credit file in Australia?",
      answer:
        "Defaults remain on your Australian credit file for 5 years from the date they were listed, not from when the debt was paid. However, professional credit repair can sometimes get defaults removed earlier if there were errors in the listing process.",
    },
    {
      question: "Does income affect my credit score in Australia?",
      answer:
        "No, your income doesn&apos;t directly affect your credit score calculation. However, lenders do consider your income when deciding whether to approve loans, as they need to assess your ability to repay the debt.",
    },
    {
      question: "Can I improve my credit score quickly?",
      answer:
        "Some improvements can happen quickly (1-3 months) like fixing errors or paying down high credit card balances. However, building a strong credit score generally takes 12-24 months of consistent positive behavior. Be wary of any service promising overnight score improvements.",
    },
    {
      question: "What&apos;s the difference between credit scores from different bureaus?",
      answer:
        "Different credit bureaus use slightly different scoring models and may have different information about you. Your score can vary by 50-100 points between bureaus. Lenders typically use one primary bureau, so it&apos;s worth knowing which one your preferred lenders check.",
    },
    {
      question: "Should I close credit cards I don&apos;t use?",
      answer:
        "Generally no, unless the card has an annual fee you want to avoid. Closing cards reduces your available credit and can hurt your utilization ratio. It also shortens your average account age. Keep old cards open with small occasional purchases to maintain them.",
    },
    {
      question: "Can my credit score go down for no reason?",
      answer:
        "Credit scores fluctuate naturally due to reporting timing, utilization changes, and account aging. A drop of 10-20 points without any major changes is normal. However, significant drops usually indicate new negative information or increased credit utilization.",
    },
    {
      question: "What happens to my credit score if I move overseas?",
      answer:
        "Your Australian credit history doesn&apos;t transfer to other countries, and their credit history doesn&apos;t transfer here. When you return to Australia, your old credit file will still exist, but the scoring models may weight recent activity more heavily than older information.",
    },
  ];

  // Generate structured data for this service page
  const structuredData = generateMinimalStructuredData({
    pathname: "/what-is-a-good-credit-score-australia",
    title:
      "What is a Good Credit Score in Australia? | 2024 Complete Guide",
    description:
      "What&apos;s considered a good credit score in Australia? Complete 2024 guide to Australian credit scores: ranges, what&apos;s good/bad, how to check free, improvement tips. Expert advice from award-winning specialists.",
    isService: true,
    serviceType: "Credit Score Education",
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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-8 lg:py-24">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                What is a Good Credit Score in Australia?
                <span className="block mt-2 text-blue">
                  Complete 2024 Guide
                </span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Your credit score is like your financial report card – it&apos;s a three-digit number that tells lenders how reliable you are with money. But <Link href="/credit-score" className="text-blue-600 hover:text-blue-800 underline">Credit Score</Link> what actually counts as &quot;good&quot; in Australia? And more importantly, what does your score mean for getting approved for home loans, car finance, and other credit?
                </p>

                <p className="text-base text-gray-600">
                  Let&apos;s break it all down in plain English, so you know exactly where you stand and how to improve your financial position. At Australian Credit Solutions, we&apos;ve helped thousands of Australians understand and improve their credit scores with our{" "}
                  <strong className="font-semibold text-blue">
                    expert guidance
                  </strong>{" "}
                  and proven strategies.
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
                  Get My Free Credit Assessment
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
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-1/3 relative">
                      <RelatedBlock currentSlug="/what-is-a-good-credit-score-australia" heading="Related services & guides" />
        <FooterForm
                heading="Get My Free Credit Score Check"
                subheading="Know Where You Stand"
                paragraph="Quick credit check: What&apos;s your current credit score? Get your free report and understand what it means for your financial future."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-sm text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>
                  No Win No Fee
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>
                  Payment plans available
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>
                  Licensed ASIC ACL 532003
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ReviewsWidget />

      {/* Breadcrumb Navigation */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/what-is-a-good-credit-score-australia" />
      </div>

      {/* Quick Answer: What's Considered a Good Credit Score in Australia? */}
      <Section title="Quick Answer: What's Considered a Good Credit Score in Australia?">
        <p className="text-slate-700">
          <Link href="/blog-details/debt-consolidation-vs-credit-repair-what-s-the-difference" className="text-blue-600 hover:text-blue-800 underline">Debt Consolidation Vs Credit Repair What S The Difference</Link> The Short Version:
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Excellent: 800-1,000+"
            bullets={[
              "Top 20% of Australians",
              "Get approved for premium credit cards with rewards",
              "Qualify for the lowest interest rates available",
              "Access to exclusive financial products",
              "Minimal documentation required for loans",
            ]}
          />
          <Card
            title="Very Good: 700-799"
            bullets={[
              "Above average",
              "Easy approval for most loans and credit cards",
              "Competitive interest rates",
              "Good negotiating power with lenders",
              "Fast approval processes",
            ]}
          />
          <Card
            title="Good: 625-699"
            bullets={[
              "Average range",
              "Approved for most standard credit products",
              "Standard interest rates (not the best, not the worst)",
              "May need to shop around for better deals",
              "Some premium products might be out of reach",
            ]}
          />
          <Card
            title="Fair: 550-624"
            bullets={[
              "Below average",
              "Limited credit options available",
              "Higher interest rates and fees",
              "May need guarantors or security",
              "Specialist lenders might be required",
            ]}
          />
          <Card
            title="Poor: 0-549"
            bullets={[
              "Needs immediate attention",
              "Very limited credit options",
              "High interest rates (often 15-25%+)",
              "Significant deposits or security required",
              "Focus should be on credit repair first",
            ]}
          />
        </motion.div>
        <p className="mt-6 text-slate-700 font-semibold">
          The Reality: Anything above 625 is generally considered &quot;good&quot; by most <Link href="/our-services" className="text-blue-600 hover:text-blue-800 underline">Our Services</Link> Australian lenders, but the higher your score, the better rates and terms you&apos;ll get.
        </p>
      </Section>

      {/* Australian Credit Score Ranges Explained */}
      <Section title="Australian Credit Score Ranges Explained">
        <p className="text-slate-700">
          The Complete <Link href="/blog-details/does-consolidating-debt-hurt-credit-score-in-australia" className="text-blue-600 hover:text-blue-800 underline">Does Consolidating Debt Hurt Credit Score In Australia</Link> Breakdown by Credit Bureau
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Equifax (Most Common in Australia)"
            bullets={[
              "Excellent: 853-1,200",
              "Very Good: 735-852",
              "Good: 661-734",
              "Average: 460-660",
              "Below Average: 0-459",
            ]}
          />
          <Card
            title="Experian"
            bullets={[
              "Excellent: 800-1,000",
              "Very Good: 700-799",
              "Good: 625-699",
              "Fair: 550-624",
              "Poor: 0-549",
            ]}
          />
          <Card
            title="Illion (formerly Dun & Bradstreet)"
            bullets={[
              "Excellent: 800-1,000",
              "Very Good: 700-799",
              "Good: 500-699",
              "Room for Improvement: 300-499",
              "Low: 0-299",
            ]}
          />
        </motion.div>
      </Section>

      {/* What Affects Your Credit Score in Australia */}
      <Section title="What Affects Your Credit Score in Australia">
        <p className="text-slate-700">
          Positive Factors (What Helps Your Score)
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Payment History (35% of your score)"
            bullets={[
              "Making all payments on time, every time",
              "Paying more than minimum amounts",
              "Consistent payment patterns over years",
              "No missed or late payments",
            ]}
          />
          <Card
            title="Credit Utilization (30% of your score)"
            bullets={[
              "Using less than 30% of available credit limits",
              "Ideally keeping utilization below 10%",
              "Having credit available but not using it all",
              "Multiple credit types managed well",
            ]}
          />
          <Card
            title="Length of Credit History (15% of your score)"
            bullets={[
              "Older accounts show stability",
              "Average age of all accounts matters",
              "Keeping old accounts open (even if unused)",
              "Long-term banking relationships",
            ]}
          />
          <Card
            title="Credit Mix (10% of your score)"
            bullets={[
              "Different types of credit (cards, loans, mortgage)",
              "Showing you can manage various credit types",
              "Not just relying on one form of credit",
            ]}
          />
          <Card
            title="New Credit Enquiries (10% of your score)"
            bullets={[
              "Minimal credit applications in recent months",
              "Spacing out loan applications appropriately",
              "Only applying for credit you actually need",
            ]}
          />
        </motion.div>
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-green-800">
            Real Example:
          </h3>
          <p className="mt-2 text-green-700">
            Sarah from Brisbane was on JobSeeker with three defaults totalling
            $2,400. Within 8 weeks, we had all three removed. She&apos;s now
            working part-time and got approved for a $15,000 car loan at 9.9%
            interest instead of the 24% she was being offered before.
          </p>
        </div>
      </Section>

      {/* How to Check Your Credit Score for Free in Australia */}
      <Section title="How to Check Your Credit Score for Free in Australia">
        <p className="text-slate-700">
          Get Your Free Annual Credit Report
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="By Law, You're Entitled To:"
            bullets={[
              "One free credit report per year from each bureau",
              "Additional free reports if you've been declined credit",
              "Free access to basic credit score information",
              "Right to dispute incorrect information",
            ]}
          />
          <Card
            title="Where to Get Your Free Credit Report"
            bullets={[
              "Equifax Australia: equifax.com.au, Phone: 138 332",
              "Experian Australia: experian.com.au, Phone: 1300 783 684",
              "Illion: checkyourcredit.com.au, Phone: 1300 734 806",
              "Most comprehensive reporting in Australia",
            ]}
          />
          <Card
            title="Quick Online Credit Score Checks"
            bullets={[
              "Credit Savvy (by Credit Simple): Completely free credit score updates",
              "GetCreditScore: Free Equifax credit score, Updated every 3 months",
              "Uses Experian data, Monthly score tracking",
              "Basic credit monitoring alerts, Educational resources included",
            ]}
          />
        </motion.div>
      </Section>

      {/* What Different Credit Scores Mean for Loan Approval */}
      <Section title="What Different Credit Scores Mean for Loan Approval">
        <p className="text-slate-700">
          Home Loan Approval Rates by Credit Score
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Excellent (800+)"
            bullets={[
              "Approval Rate: 95%+",
              "Interest Rates: 3.5-4.5% (best available)",
              "Deposit Required: 5-10%",
              "Documentation: Minimal",
              "Lender Choice: All major banks plus premium lenders",
            ]}
          />
          <Card
            title="Very Good (700-799)"
            bullets={[
              "Approval Rate: 85-95%",
              "Interest Rates: 4.0-5.5%",
              "Deposit Required: 10-15%",
              "Documentation: Standard",
              "Lender Choice: All major banks",
            ]}
          />
          <Card
            title="Good (625-699)"
            bullets={[
              "Approval Rate: 70-85%",
              "Interest Rates: 5.0-6.5%",
              "Documentation: Standard to comprehensive",
              "Deposit Required: 15-20%",
              "Lender Choice: Most banks, some restrictions",
            ]}
          />
          <Card
            title="Fair (550-624)"
            bullets={[
              "Approval Rate: 40-70%",
              "Interest Rates: 6.5-8.5%",
              "Deposit Required: 20-30%",
              "Documentation: Comprehensive",
              "Lender Choice: Specialist lenders mainly",
            ]}
          />
          <Card
            title="Poor (Below 550)"
            bullets={[
              "Approval Rate: 10-40%",
              "Interest Rates: 8.5-15%+",
              "Deposit Required: 30-50%",
              "Documentation: Extensive",
              "Lender Choice: Bad credit specialists only",
            ]}
          />
        </motion.div>
      </Section>

      {/* How to Improve Your Credit Score in Australia */}
      <Section title="How to Improve Your Credit Score in Australia">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card
            title="Quick Wins (30-90 Days)"
            bullets={[
              "Check for Errors: Get your free credit reports from all bureaus",
              "Pay Down Credit Card Debt: Focus on getting utilization below 30%",
              "Set Up Automatic Payments: Never miss another payment deadline",
              "Dispute any incorrect information immediately",
            ]}
          />
          <Card
            title="Medium-Term Improvements (3-12 Months)"
            bullets={[
              "Build Positive Payment History: Make all payments on time, every month",
              "Optimize Credit Utilization: Keep total utilization below 10% ideally",
              "Diversify Your Credit Mix: Add different types of credit gradually",
              "Pay more than minimum amounts when possible",
            ]}
          />
          <Card
            title="Long-Term Score Building (1-2+ Years)"
            bullets={[
              "Maintain Consistent Habits: Never miss payments for any reason",
              "Address Negative Items: Work on removing defaults professionally",
              "Build Strong Banking Relationships: Use the same bank for multiple products",
              "Keep credit utilization consistently low",
            ]}
          />
        </motion.div>
      </Section>

      {/* Common Credit Score Myths Debunked */}
      <Section title="Common Credit Score Myths Debunked">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2"
        >
          <Card
            title="Myth 1: &quot;Checking Your Credit Score Hurts It&quot;"
            bullets={[
              "The Truth: Checking your own credit score is called a &quot;soft enquiry&quot; and doesn&apos;t affect your score at all. You should check it regularly to monitor for errors or fraud.",
            ]}
          />
          <Card
            title="Myth 2: &quot;You Need to Carry a Credit Card Balance to Build Credit&quot;"
            bullets={[
              "The Truth: Paying your credit card balance in full every month actually helps your score more than carrying a balance. Interest payments don&apos;t improve your creditworthiness.",
            ]}
          />
          <Card
            title="Myth 3: &quot;Closing Old Credit Cards Helps Your Score&quot;"
            bullets={[
              "The Truth: Closing old cards can actually hurt your score by reducing your available credit and shortening your credit history. Keep old cards open with small occasional purchases.",
            ]}
          />
          <Card
            title="Myth 4: &quot;Debit Cards Help Build Credit&quot;"
            bullets={[
              "The Truth: Debit card usage doesn&apos;t appear on credit reports because you&apos;re spending your own money, not borrowed money. Only credit products affect your score.",
            ]}
          />
          <Card
            title="Myth 5: &quot;Bad Credit Follows You Forever&quot;"
            bullets={[
              "The Truth: Most negative information falls off your credit report after 5 years in Australia. Even bankruptcy only lasts 5 years after discharge.",
            ]}
          />
          <Card
            title="Myth 6: &quot;Income Affects Your Credit Score&quot;"
            bullets={[
              "The Truth: Your income isn&apos;t part of your credit score calculation. However, it does affect loan approval because lenders assess your ability to repay.",
            ]}
          />
        </motion.div>
        <div className="mt-6 rounded-xl border border-dashed border-blue-300 bg-blue-50 p-4 text-sm text-slate-600">
          <strong>Remember:</strong> Your credit score isn&apos;t permanent. With the right knowledge and consistent effort, you can improve your score and unlock better financial opportunities.
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Frequently Asked Questions About Credit Scores in Australia">
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
              <p className="mt-3 text-sm text-slate-700 pl-2 border-l-2 border-blue-200 ml-1">
                {f.answer}
              </p>
            </motion.details>
          ))}
        </motion.div>
      </Section>

      {/* Next Steps */}
      <Section title="Your Credit Score Action Plan: Getting Started Today">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">
              Understanding your credit score is the first step toward financial freedom.
            </h3>
            <p>Whether you&apos;re starting with poor credit or looking to optimize an already good score, the key is consistent positive action over time.</p>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-800">
                Step 1: Know Your Current Score (Today)
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 shrink-0 text-green-500 mt-0.5"
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
                  Get Your Free Reports: Check Equifax, Experian, and Illion
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 shrink-0 text-green-500 mt-0.5"
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
                  Look for errors, defaults, or unknown accounts
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 shrink-0 text-green-500 mt-0.5"
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
                  Note your current score range
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 shrink-0 text-green-500 mt-0.5"
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
                  Identify biggest improvement opportunities
                </li>
              </ul>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-blue">
              Ready to take control of your credit score?
            </h3>
            <p className="mt-3 text-slate-700">
              Start with a free credit check today.
            </p>
            <p className="mt-3 text-slate-700">
              If you&apos;re dealing with defaults, late payments, or other credit challenges that seem overwhelming, remember that professional help is available.
            </p>
            <p className="mt-3 text-slate-700">
              Australia&apos;s award-winning credit repair specialists can often achieve in weeks what takes individuals months or years to accomplish on their own.
            </p>
            <p className="mt-3 text-slate-700 font-semibold">
              Need help improving your credit score?
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/free-credit-assessment"
                className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors"
              >
                Get My Free Credit Check
              </Link>
              <a
                href="tel:+61489265737"
                className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors"
              >
                Call 0489 265 737
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

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
              <p className="text-sm font-medium">
                Award-winning specialists (2022, 2023, 2024)
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-sm font-medium">
                No Win No Fee — Payment plans available
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-sm font-medium">
                Licensed & regulated — ASIC ACL 532003
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Related Services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/what-is-a-good-credit-score-australia" />
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
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
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
      <p className="mt-1 text-sm text-slate-600">Timeline: {timeline}</p>
      <p className="mt-1 text-sm text-slate-600">Perfect for: {perfectFor}</p>
      <ul className="mt-3 space-y-2 text-sm text-slate-700 flex-grow">
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
      <div className="mt-4">
        <Link
          href="/free-credit-assessment"
          className="w-full rounded-lg bg-blue px-4 py-2 font-semibold text-white hover:bg-blue transition-colors text-sm text-center block"
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
      <figcaption className="mt-3 text-sm font-semibold text-blue">
        {name}
      </figcaption>
    </motion.figure>
  );
}
