// File: app/repair-your-credit-score-australia/page.jsx
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

export default function RepairYourCreditScorePage() {
  // FAQ data for structured data
  const faqData = [
    {
      question: "Can any credit score be repaired?",
      answer:
        "Yes, we&apos;ve never encountered a score too damaged to improve. Our lowest starting score was 180 (bankruptcy + multiple defaults) - we repaired it to 820.",
    },
    {
      question: "How long does credit score repair take?",
      answer:
        "Depends on damage severity. Minor damage: 2-6 months. Major damage: 6-12 months. Severe damage: 8-18 months. We provide realistic timelines upfront.",
    },
    {
      question: "Will repair damage my credit score further?",
      answer:
        "No. Professional repair only improves scores. We protect against new damage during the repair process.",
    },
    {
      question: "Can you repair scores after bankruptcy?",
      answer:
        "Absolutely. Bankruptcy shows responsible resolution of debts. We&apos;ve repaired hundreds of post-bankruptcy scores to excellent levels.",
    },
    {
      question: "What if some items can&apos;t be removed?",
      answer:
        "We focus on overall score improvement. Even if some items stay, strategic repair of other factors usually achieves target scores.",
    },
    {
      question: "How much will my score improve?",
      answer:
        "Average improvement is 180+ points. Actual improvement depends on starting damage and target goals. We provide estimates during assessment.",
    },
    {
      question: "Is credit repair legal?",
      answer:
        "Completely legal. We use rights under Privacy Act 1988 and consumer credit laws. All repair methods are ethical and compliant.",
    },
    {
      question: "Can I repair my own credit score?",
      answer:
        "Possible but difficult. DIY repair has 15% success rate vs our 98% professional success rate. Most DIY attempts make scores worse.",
    },
    {
      question: "What happens after my score is repaired?",
      answer:
        "We provide ongoing monitoring and protection services. Plus education on maintaining your repaired score long-term.",
    },
    {
      question: "Do you guarantee score improvement?",
      answer:
        "Yes. No improvement = no success fees. We only accept cases where we&apos;re confident of significant repair success.",
    },
  ];

  // Generate structured data for this service page
  const structuredData = generateMinimalStructuredData({
    pathname: "/repair-your-credit-score-australia",
    title:
      "Repair Your Credit Score Australia | From Damaged to Excellent",
    description:
      "Repair your damaged credit score with Australia&apos;s specialists. From broken credit to excellent scores. 98% success rate, proven repair methods. Transform your financial future.",
    isService: true,
    serviceType: "Credit Score Repair",
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
                Repair Your Credit Score Australia
                <span className="block mt-2 text-blue">
                  From Broken to Brilliant
                </span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Your credit score is damaged, not dead. What seems permanently broken can be <Link href="/credit-score" className="text-blue-600 hover:text-blue-800 underline">Credit Score</Link> professionally repaired. We&apos;ve restored over 15,000 damaged credit scores to excellent condition. Time to repair yours.
                </p>

                <p className="text-base text-gray-600">
                  At Australian Credit Solutions, we&apos;ve helped thousands of Australians transform their damaged credit scores into excellent ratings. Our proven{" "}
                  <strong className="font-semibold text-blue">
                    No Win No Fee
                  </strong>{" "}
                  approach means you won&apos;t pay success fees unless we actually improve your credit score significantly.
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
                      <RelatedBlock currentSlug="/repair-your-credit-score-australia" heading="Related services & guides" />
        <FooterForm
                heading="Get My Free Credit Score Assessment"
                subheading="Damage Analysis & Repair Plan"
                paragraph="Quick credit check: Is your damaged credit score blocking you from loans, rentals, or opportunities? We can repair it."
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
        <Breadcrumb pathname="/repair-your-credit-score-australia" />
      </div>

      {/* Is Your Credit Score Beyond Repair? */}
      <Section title="Is Your Credit Score Beyond Repair?">
        <p className="text-slate-700">
          If you&apos;re thinking &quot;my credit score is too <Link href="/blog-details/credit-repair-in-australia-can-help-you-buy-a-home-or-car" className="text-blue-600 hover:text-blue-800 underline">Credit Repair In Australia Can Help You Buy A Home Or Car</Link> damaged to fix,&quot; you&apos;re not alone. Most Australians believe these myths:
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Common Credit Score Myths"
            bullets={[
              "❌ &quot;My score is too low to repair&quot; (We&apos;ve repaired scores as low as 180)",
              "❌ &quot;The damage is too old to fix&quot; (Age often makes items easier to remove)",
              "❌ &quot;I have too many problems&quot; (Multiple issues = multiple repair opportunities)",
              "❌ &quot;It&apos;s faster to wait 5 years&quot; (Professional repair is faster and more certain)",
              "❌ &quot;Bankruptcy means permanent damage&quot; (We repair post-bankruptcy scores regularly)",
            ]}
          />
          <Card
            title="The Truth About Credit Score Repair"
            bullets={[
              "Almost every damaged credit score can be repaired with the right expertise",
              "Professional repair is faster than waiting for items to age off",
              "Multiple problems create multiple opportunities for improvement",
              "Even bankruptcy doesn&apos;t mean permanent damage",
              "The right strategy can transform any damaged score",
            ]}
          />
        </motion.div>
        <p className="mt-6 text-slate-700 font-semibold">
          The truth: Almost every damaged credit <Link href="/our-services" className="text-blue-600 hover:text-blue-800 underline">Our Services</Link> score can be repaired with the right expertise.
        </p>
      </Section>

      {/* The Anatomy of Credit Score Damage */}
      <Section title="The Anatomy of Credit Score Damage">
        <p className="text-slate-700">
          🔍 Diagnosing <Link href="/blog-details/credit-report-check-how-to-find-out-if-someone-accessed-it" className="text-blue-600 hover:text-blue-800 underline">Credit Report Check How To Find Out If Someone Accessed It</Link> Your Damaged Credit Score
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="SEVERE DAMAGE (0-400 Range)"
            bullets={[
              "Multiple defaults and court judgments",
              "Recent bankruptcy or debt agreements",
              "Extensive payment history problems",
              "High credit utilisation across all accounts",
              "Repair Complexity: High - Timeframe: 8-18 months",
            ]}
          />
          <Card
            title="MAJOR DAMAGE (400-550 Range)"
            bullets={[
              "Several defaults and late payments",
              "High credit card utilisation",
              "Multiple credit enquiries",
              "Some account closures due to non-payment",
              "Repair Complexity: Moderate - Timeframe: 6-12 months",
            ]}
          />
          <Card
            title="MODERATE DAMAGE (550-650 Range)"
            bullets={[
              "1-3 defaults or persistent late payments",
              "Poor credit utilisation management",
              "Recent credit enquiry clusters",
              "Short credit history or recent problems",
              "Repair Complexity: Standard - Timeframe: 3-8 months",
            ]}
          />
          <Card
            title="MINOR DAMAGE (650-700 Range)"
            bullets={[
              "Isolated late payments or single default",
              "Suboptimal credit utilisation",
              "Recent enquiry impact",
              "Account management issues",
              "Repair Complexity: Low - Timeframe: 2-6 months",
            ]}
          />
        </motion.div>
        <p className="mt-6 text-slate-700 font-semibold">
          No matter how damaged your score, repair is possible.
        </p>
      </Section>

      {/* Our Credit Score Repair Workshop */}
      <Section title="Our Credit Score Repair Workshop">
        <p className="text-slate-700">
          🔧 The Professional Repair Process
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="PHASE 1: DAMAGE ASSESSMENT (Week 1)"
            bullets={[
              "✓ Pull credit files from all 3 bureaus (Equifax, Experian, Illion)",
              "✓ Identify every item damaging your score",
              "✓ Calculate impact of each negative item",
              "✓ Prioritise repairs for maximum score improvement",
              "✓ Create custom repair timeline and strategy",
            ]}
          />
          <Card
            title="PHASE 2: DAMAGE REMOVAL (Weeks 2-12)"
            bullets={[
              "✓ Challenge defaults using legal technicalities",
              "✓ Dispute late payments for procedural failures",
              "✓ Remove excessive credit enquiries",
              "✓ Clear court judgments and administrative errors",
              "✓ Negotiate payment for deletion arrangements",
            ]}
          />
          <Card
            title="PHASE 3: FOUNDATION REPAIR (Months 2-6)"
            bullets={[
              "✓ Optimise credit utilisation across all accounts",
              "✓ Establish positive payment patterns",
              "✓ Repair credit mix and account diversity",
              "✓ Extend credit history length strategically",
              "✓ Build creditworthy behavioral patterns",
            ]}
          />
          <Card
            title="PHASE 4: SCORE ACCELERATION (Months 4-8)"
            bullets={[
              "✓ Fine-tune credit utilisation for maximum impact",
              "✓ Strategic account openings and closures",
              "✓ Payment timing optimisation",
              "✓ Credit limit increase negotiations",
              "✓ Long-term score protection systems",
            ]}
          />
          <Card
            title="PHASE 5: EXCELLENCE MAINTENANCE (Ongoing)"
            bullets={[
              "✓ Monthly monitoring and optimisation",
              "✓ Protection from new damage",
              "✓ Continued score growth strategies",
              "✓ Preparation for major finance applications",
              "✓ Long-term credit health preservation",
            ]}
          />
        </motion.div>
      </Section>

      {/* Real Credit Score Repair Success Stories */}
      <Section title="Real Credit Score Repair Success Stories">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Testimonial name="🏆 The Bankruptcy Recovery: 180 → 820 (640 Point Repair)">
            &quot;Bankruptcy left my score at 180. Thought my financial life was over forever. ACS repaired it to 820 over 16 months. Now I own investment properties and building wealth again. They literally saved my future.&quot;
            – Michael R, Perth (Post-Bankruptcy Recovery)
          </Testimonial>
          <Testimonial name="👩‍👧‍👦 The Single Mum&apos;s Miracle: 390 → 740 (350 Point Repair)">
            &quot;Divorce defaults destroyed my score to 390. Couldn&apos;t even get approved for rental properties. ACS repaired it to 740 in 11 months. Now I own my own home and my kids have stability.&quot;
            – Sarah T, Adelaide (Divorce Recovery)
          </Testimonial>
          <Testimonial name="🔧 The Tradie&apos;s Transformation: 420 → 780 (360 Point Repair)">
            &quot;Business failure left multiple defaults, score at 420. Couldn&apos;t get equipment finance anywhere. ACS repaired everything in 13 months. Score hit 780, business booming again.&quot;
            – David L, Melbourne (Business Recovery)
          </Testimonial>
          <Testimonial name="💼 The Professional&apos;s Comeback: 310 → 750 (440 Point Repair)">
            &quot;Medical issues led to financial disaster, score crashed to 310. Career opportunities blocked by bad credit checks. ACS repaired it to 750 in 14 months. Got promoted with $60K salary increase.&quot;
            – Jennifer K, Brisbane (Medical Recovery)
          </Testimonial>
        </motion.div>
      </Section>

      {/* Why Professional Repair Works When DIY Fails */}
      <Section title="Why Professional Repair Works When DIY Fails">
        <p className="text-slate-700">
          ❌ Why DIY Credit Repair Usually Fails
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Lack of Technical Knowledge"
            bullets={[
              "Don&apos;t understand complex credit scoring algorithms",
              "Miss legal opportunities for item removal",
              "Use wrong dispute strategies that backfire",
              "Focus on wrong items for maximum impact",
            ]}
          />
          <Card
            title="Emotional Interference"
            bullets={[
              "Too emotionally attached to defend obvious wrongs",
              "Get angry instead of strategic with creditors",
              "Give up too quickly when initial disputes fail",
              "Make desperate moves that worsen scores",
            ]}
          />
          <Card
            title="No Industry Relationships"
            bullets={[
              "Credit bureaus ignore consumer letters",
              "Don&apos;t know which arguments work with specific creditors",
              "No leverage for negotiations and settlements",
              "Limited escalation options when disputes fail",
            ]}
          />
          <Card
            title="Timing and Strategy Errors"
            bullets={[
              "Apply for new credit during repair (worsening scores)",
              "Close accounts that should stay open",
              "Pay off balances in ways that hurt scores",
              "Miss optimal timing for maximum improvements",
            ]}
          />
        </motion.div>
        <p className="mt-6 text-slate-700 font-semibold">
          ✅ Why Professional Repair Succeeds
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Technical Expertise"
            bullets={[
              "✓ Deep understanding of credit scoring algorithms",
              "✓ Knowledge of legal grounds for item removal",
              "✓ Proven dispute strategies that work",
              "✓ Focus on highest-impact repairs first",
            ]}
          />
          <Card
            title="Emotional Detachment"
            bullets={[
              "✓ Objective analysis without personal emotions",
              "✓ Strategic approach to creditor negotiations",
              "✓ Persistence when initial attempts fail",
              "✓ Professional communication that gets results",
            ]}
          />
          <Card
            title="Industry Relationships"
            bullets={[
              "✓ Direct channels to credit bureau compliance teams",
              "✓ Established creditor relationships and procedures",
              "✓ Leverage through professional reputation",
              "✓ Advanced escalation options and regulatory pressure",
            ]}
          />
          <Card
            title="Strategic Coordination"
            bullets={[
              "✓ Optimal timing for all repair activities",
              "✓ Coordination of multiple strategies simultaneously",
              "✓ Protection from new damage during repair",
              "✓ Maximised score improvement through precise actions",
            ]}
          />
        </motion.div>
      </Section>

      {/* The Science of Credit Score Repair */}
      <Section title="The Science of Credit Score Repair">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card
            title="🔍 Understanding Credit Score DNA"
            bullets={[
              "Your credit score isn&apos;t random - it&apos;s calculated using precise algorithms we understand",
            ]}
          />
          <Card
            title="Payment History (35% of Score)"
            bullets={[
              "Damage: Late payments, defaults, judgments",
              "Repair Strategy: Remove negatives + establish positive patterns",
              "Impact: Each negative removal can add 20-80 points",
              "Timeline: Immediate improvement when items removed",
            ]}
          />
          <Card
            title="Credit Utilisation (30% of Score)"
            bullets={[
              "Damage: High balances relative to credit limits",
              "Repair Strategy: Strategic balance management and limit increases",
              "Impact: Optimisation can add 50-150 points",
              "Timeline: Improvement within 1-2 months",
            ]}
          />
          <Card
            title="Credit History Length (15% of Score)"
            bullets={[
              "Damage: Short history or recently closed old accounts",
              "Repair Strategy: Protect old accounts, strategic new account timing",
              "Impact: Preservation prevents 30-100 point drops",
              "Timeline: Benefits compound over months/years",
            ]}
          />
          <Card
            title="New Credit Enquiries (10% of Score)"
            bullets={[
              "Damage: Multiple recent credit applications",
              "Repair Strategy: Remove excessive enquiries, control new applications",
              "Impact: Each enquiry removal adds 5-20 points",
              "Timeline: Immediate improvement when removed",
            ]}
          />
          <Card
            title="Credit Mix (10% of Score)"
            bullets={[
              "Damage: Poor diversity or all high-risk credit types",
              "Repair Strategy: Strategic diversification with quality credit types",
              "Impact: Optimisation can add 20-60 points",
              "Timeline: 3-6 months for full impact",
            ]}
          />
        </motion.div>
        <p className="mt-6 text-slate-700 font-semibold">
          🎯 Repair Prioritisation Matrix
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="HIGH IMPACT + QUICK WINS"
            bullets={[
              "1. Default removals (50-150 points each)",
              "2. Credit utilisation optimisation (50-100 points)",
              "3. Late payment disputes (20-60 points each)",
            ]}
          />
          <Card
            title="MEDIUM IMPACT + MEDIUM TIMEFRAME"
            bullets={[
              "4. Credit enquiry removals (10-50 points total)",
              "5. Account closure reversals (20-80 points)",
              "6. Credit mix improvements (20-60 points)",
            ]}
          />
          <Card
            title="LOWER IMPACT + LONG-TERM"
            bullets={[
              "7. Credit history length protection (prevents future drops)",
              "8. Positive account establishment (gradual building)",
              "9. Payment pattern optimisation (ongoing improvement)",
            ]}
          />
        </motion.div>
        <p className="mt-6 text-slate-700 font-semibold">
          We repair in order of maximum impact for fastest results.
        </p>
      </Section>

      {/* Repair Investment and Guaranteed Returns */}
      <Section title="Repair Investment and Guaranteed Returns">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2"
        >
          <PriceCard
            name="BASIC REPAIR PACKAGE (Scores 600-700)"
            timeline="Remove 1-3 negative items"
            perfectFor="Credit utilisation optimisation, 6 months monitoring"
            includes={[
              "Target: 50-100 point improvement",
              "Investment: $1,650",
            ]}
            featured
          />
          <PriceCard
            name="COMPLETE REPAIR PACKAGE (Scores 400-600)"
            timeline="Remove unlimited negative items"
            perfectFor="Full credit profile optimisation, strategic positive building"
            includes={[
              "12 months management",
              "Target: 150-250 point improvement",
              "Investment: $2,950",
            ]}
          />
          <PriceCard
            name="TOTAL RECONSTRUCTION PACKAGE (Scores 0-400)"
            timeline="Complete credit file reconstruction"
            perfectFor="Unlimited negative removals, advanced score engineering"
            includes={[
              "18 months VIP service",
              "Target: 300-500 point improvement",
              "Investment: $4,950",
            ]}
          />
        </motion.div>
        <div className="mt-6 rounded-xl border border-dashed border-blue-300 bg-blue-50 p-4 text-sm text-slate-600">
          <strong>All packages include No Improvement, No Success Fee guarantee.</strong>
        </div>
        <p className="mt-6 text-slate-700 font-semibold">
          💰 Repair ROI Calculator
        </p>
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-green-800">
            Example: Repairing 450 Score to 750 Score
          </h3>
          <div className="mt-4 space-y-3 text-green-700">
            <p><strong>Home Loan Savings (5-year impact)</strong></p>
            <p>Bad credit rate (8.5%) vs Good credit rate (3.5%)</p>
            <p>On $500K loan: $118,800 savings</p>
            <p><strong>Car Finance Savings (5-year impact)</strong></p>
            <p>Bad credit rate (20%) vs Good credit rate (6%)</p>
            <p>On $40K loan: $16,800 savings</p>
            <p><strong>Credit Card Savings (5-year impact)</strong></p>
            <p>Bad credit rate (25%) vs Good credit rate (12%)</p>
            <p>On $15K balance: $9,750 savings</p>
            <p><strong>Investment Opportunities (Lifetime impact)</strong></p>
            <p>Access to business loans, investment properties</p>
            <p>Wealth building potential: Unlimited</p>
            <p className="font-bold text-lg">Total Guaranteed 5-Year Savings: $145,350+</p>
            <p className="font-semibold">Even our most expensive repair package delivers 30x ROI.</p>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Frequently Asked Questions About Credit Score Repair">
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
      <Section title="Ready to Repair Your Damaged Credit Score?">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">
              Stop living with a broken credit score. Professional repair can restore your financial future.
            </h3>
            <p>Start Your Credit Score Repair Today</p>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-800">
                What Happens Next:
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
                  Free analysis of your credit score damage
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
                  Repair strategy customised for your situation
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
                  Timeline estimate for achieving target scores
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
                  Investment discussion with guaranteed outcomes
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
              Don&apos;t Accept a Damaged Credit Score
            </h3>
            <p className="mt-3 text-slate-700">
              Your credit score damage isn&apos;t permanent - it&apos;s repairable.
            </p>
            <p className="mt-3 text-slate-700">
              Damaged credit = damaged opportunities = damaged future
            </p>
            <p className="mt-3 text-slate-700">
              Repaired credit = restored opportunities = rebuilt future
            </p>
            <p className="mt-3 text-slate-700 font-semibold">
              Every day you delay repair costs you opportunities and money.
            </p>
            <p className="mt-3 text-slate-700 font-semibold">
              The question isn&apos;t whether your score can be repaired - it&apos;s how quickly you want it fixed.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/free-credit-assessment"
                className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors"
              >
                Start My Assessment
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
        <RelatedServices pathname="/repair-your-credit-score-australia" />
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
