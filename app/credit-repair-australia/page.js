// File: app/credit-repair-australia/page.jsx
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

export default function CreditRepairAustraliaPage() {
  // FAQ data for structured data
  const faqData = [
    {
      question: "Is credit repair legal in Australia?",
      answer:
        "Yes, absolutely. The Privacy Act 1988 gives you the right to dispute incorrect information on your credit file. Professional credit repair services help you exercise these rights effectively.",
    },
    {
      question: "Can you guarantee my listings will be removed?",
      answer:
        "We only accept cases where we're confident of success based on our assessment. While we can't provide 100% guarantees (no legitimate company can), our 98% success rate when we take cases speaks to our selective approach and expertise.",
    },
    {
      question: "How is this different from DIY credit repair?",
      answer:
        "Knowledge and experience. We understand the specific legal requirements, procedural steps, and documentation needed for successful disputes. We also have established relationships and communication channels with credit providers and bureaus.",
    },
    {
      question: "What if I've already tried disputing myself?",
      answer:
        "Previous failed disputes don't prevent us from succeeding. Often, DIY attempts fail due to procedural errors, insufficient documentation, or generic template letters. Our professional approach addresses these shortcomings.",
    },
    {
      question: "Will this hurt my credit score?",
      answer:
        "No. Legitimate disputes cannot negatively impact your credit score. If anything, successful removal of negative listings will improve your score significantly.",
    },
  ];

  // Generate structured data for this service page
  const structuredData = generateMinimalStructuredData({
    pathname: "/credit-repair-australia",
    title:
      "Fix Your Credit Score Fast with Australia's Award-Winning Credit Repair Specialists",
    description:
      "Get defaults removed, late payments wiped, and your credit file cleaned up. 98% success rate when we take your case. No Win No Fee policy with licensed professionals.",
    isService: true,
    serviceType: "Credit Repair Australia",
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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Fix Your Credit Score Fast with Australia&apos;s Award-Winning
                <span className="block mt-2 text-blue">
                  Credit Repair Specialists
                </span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Get defaults removed, late payments wiped, and your credit
                  file cleaned up.{" "}
                  <strong className="font-semibold text-blue">
                    98% success rate
                  </strong>{" "}
                  when we take your case.{" "}
                  <strong className="font-semibold text-blue">
                    No Win No Fee
                  </strong>{" "}
                  policy with licensed professionals.
                </p>

                <p className="text-base text-gray-600">
                  Don&apos;t let bad credit control your life. Whether
                  you&apos;ve been knocked back for a home loan, car finance, or
                  even a phone contract, we can help. Australian Credit
                  Solutions has helped thousands of Australians remove unfair
                  credit listings and get their financial lives back on track. If you need immediate assistance, our{' '}
                  <Link href="/fix-my-credit-now" className="text-blue-600 hover:text-blue-800 font-medium">
                    urgent credit repair service
                  </Link>{' '}
                  can fast-track your case.
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
                  Get My Free Credit Assessment Now
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
        <FooterForm
                heading="Get My Free Credit Assessment"
                subheading="Award-Winning Specialists"
                paragraph="Find out if your credit file can be fixed – free assessment with Australia's top-rated credit repair experts."
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
        <Breadcrumb pathname="/credit-repair-australia" />
      </div>

      {/* Opening Section */}
      <Section title="Your credit score shouldn't define your future">
        <p>
          Yet right now, it might feel like every financial door is slamming
          <a href="/get-credit-repair" className="text-blue-600 hover:text-blue-800 underline">Get Credit Repair</a> shut. Home loan rejected. Car finance declined. Even mobile phone
          applications getting knocked back.
        </p>
        <p className="mt-4">
          We get it. Bad credit feels like carrying a financial death sentence –
  <a href="/repair-your-credit-score-australia" className="text-blue-600 hover:text-blue-800 underline">Repair Your Credit Score Australia</a>         but it doesn&apos;t have to stay that way.
        </p>
        <p className="mt-4">
          Australian Credit Solutions specialises in removing unfair, incorrect,
          and outdated listings from Australian credit files. We&apos;re not
          another generic credit repair company making empty promises.
  <a href="/equifax-default-removal-australia" className="text-blue-600 hover:text-blue-800 underline">Equifax Default Removal Australia</a>         We&apos;re award-winning specialists with a 98% success rate when we
          accept cases, backed by three consecutive years of industry
          recognition.
        </p>
        <p className="mt-4">
          <strong>
            The difference? We only take cases where we&apos;re genuinely
            confident of success.
          </strong>{" "}
          If we can&apos;t help you win, we&apos;ll tell you upfront – no wasted
          time, no false hope.
        </p>
      </Section>

      {/* The Real Cost of Bad Credit */}
      <Section title="The Real Cost of Bad Credit in Australia">
        <p className="text-slate-700">
          Before we dive into how we fix credit files, let&apos;s talk about
  <a href="/credit-enquiry-removal" className="text-blue-600 hover:text-blue-800 underline">Credit Enquiry Removal</a>         what bad credit is actually costing you:
        </p>
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {[
            {
              h: "Home Loans",
              p: "Interest rates 2-4% higher than standard rates. On a $500,000 loan, that's an extra $250,000+ over 30 years.",
            },
            {
              h: "Car Finance",
              p: "Premium rates or outright rejection, forcing you into expensive dealer finance or cash purchases.",
            },
            {
              h: "Credit Cards",
              p: "Stuck with high-fee, low-limit cards instead of premium rewards cards.",
            },
            {
              h: "Phone Contracts",
              p: "Rejected for post-paid plans, forced into expensive prepaid options.",
            },
            {
              h: "Rental Applications",
              p: "Many landlords now run credit checks. Bad credit = rental rejection.",
            },
            {
              h: "Employment",
              p: "Some employers check credit reports for financial roles. Bad credit can cost you job opportunities.",
            },
            {
              h: "Business Finance",
              p: "Forget about competitive business loans or equipment finance with poor personal credit.",
            },
            {
              h: "Insurance",
              p: "Some insurers use credit scores for risk assessment, affecting your premiums.",
            },
          ].map((item) => (
            <motion.li
              key={item.h}
              variants={fadeIn}
              className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="font-semibold text-blue">{item.h}</h3>
              <p className="mt-2 text-base text-slate-700">{item.p}</p>
            </motion.li>
          ))}
        </motion.ul>
        <p className="mt-6 text-slate-700">
          Every day you wait to fix your credit file, these costs compound. The
          good news? Most negative listings can be removed much faster than
          waiting for them to naturally expire.
        </p>
      </Section>

      {/* Why Most Australians Don't Fix Their Credit */}
      <Section title="Why Most Australians Don't Fix Their Credit">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4 text-slate-700"
        >
          {[
            {
              myth: "It's too complicated",
              reality:
                "The credit reporting system in Australia involves multiple credit reporting bodies, complex privacy laws, and strict procedural requirements. Most people don't know where to start.",
            },
            {
              myth: "It takes too long",
              reality:
                "While negative listings stay on your file for 5-7 years if left alone, professional removal can happen in weeks or months when done correctly.",
            },
            {
              myth: "I don't know what's on my file",
              reality:
                "Many Australians have never seen their credit report. They're making financial decisions blind to what lenders actually see.",
            },
            {
              myth: "I've tried disputing before and failed",
              reality:
                "DIY disputes often fail because they lack the legal knowledge and procedural expertise required for success.",
            },
            {
              myth: "I think I have to wait it out",
              reality:
                "This is the biggest myth. You don't have to accept unfair listings just because they're there.",
            },
            {
              myth: "I'm worried about making it worse",
              reality:
                "Professional credit repair, when done correctly, cannot make your situation worse. Amateur attempts sometimes can.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="font-semibold text-red-600">
                &quot;{item.myth}&quot;
              </h3>
              <p className="mt-2 text-base text-slate-700">
                <strong className="text-green-600">Reality:</strong>{" "}
                {item.reality}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Our Proven Credit Repair Process */}
      <Section title="Our Proven Credit Repair Process">
        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4 text-slate-700"
        >
          {[
            {
              title: "Complete Credit File Analysis",
              description:
                "We obtain reports from all three major credit reporting bodies – Equifax, Experian, and Illion (formerly Dun & Bradstreet). Most DIY attempts fail because they only check one bureau. Our analysis identifies incorrect personal information, defaults that shouldn't be listed, late payment markings applied incorrectly, duplicate listings across bureaus, credit enquiries that violate privacy laws, and court judgments listed incorrectly.",
            },
            {
              title: "Legal Assessment & Strategy Development",
              description:
                "Not every listing can be removed – but many more can be challenged than most people realise. We assess each entry against Privacy Act 1988 requirements, credit reporting code compliance, procedural fairness standards, limitation periods, documentation requirements, and industry-specific regulations.",
            },
            {
              title: "Professional Dispute Process",
              description:
                "This is where amateur attempts usually fail. Credit providers and bureaus receive thousands of disputes monthly. Generic template letters get ignored. Our approach includes legally structured dispute letters citing specific breaches, comprehensive supporting documentation, follow-up procedures when responses are delayed, and escalation protocols for non-compliance.",
            },
            {
              title: "Monitoring & Results",
              description:
                "We track all disputes through to completion and monitor your file for updates. Once listings are removed, we ensure they don't reappear (which sometimes happens).",
            },
          ].map((step, index) => (
            <motion.li key={index} variants={fadeIn} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold">
                {index + 1}
              </div>
              <div>
                <strong>{step.title}:</strong> {step.description}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </Section>

      {/* What We Can Remove */}
      <Section title="What We Can Remove From Your Credit File">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Defaults"
            bullets={[
              "These are the big killers - $150+ unpaid debts that creditors report as defaults",
              "Many are applied incorrectly or without proper notice",
              "Can be removed when procedural errors are found",
            ]}
          />
          <Card
            title="Late Payment Markings"
            bullets={[
              "Monthly payment history showing missed payments",
              "Often applied when payments were made on time but processed late",
              "Repayment History Information (RHI) going back 24 months",
            ]}
          />
          <Card
            title="Credit Enquiries"
            bullets={[
              "Every time someone checks your credit, it gets recorded",
              "Too many enquiries hurt your score",
              "Some are made without proper consent and can be removed",
            ]}
          />
          <Card
            title="Court Judgments"
            bullets={[
              "Money judgments that appear on credit files",
              "Sometimes listed incorrectly or after they should have been removed",
              "Can be challenged when procedural errors exist",
            ]}
          />
          <Card
            title="Personal Information Errors"
            bullets={[
              "Wrong addresses, names, or dates of birth",
              "Can cause identity confusion and credit mix-ups",
              "Must be corrected to ensure accurate reporting",
            ]}
          />
          <Card
            title="Duplicate & Outdated Listings"
            bullets={[
              "The same debt appearing multiple times across different bureaus",
              "Listings that should have automatically fallen off your file",
              "System errors that keep old information active",
            ]}
          />
        </motion.div>
      </Section>

      {/* Success Stories */}
      <Section title="Success Stories: Real Australians We've Helped">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Testimonial name="Sarah's Story – Sydney Marketing Manager">
            &quot;I applied for a home loan and got rejected due to an $800
            default from a gym membership I&apos;d cancelled properly. The gym
            claimed I owed money for months I wasn&apos;t even a member. ACS removed
            it in 3 weeks, and I got loan approval the next month. The interest
            rate difference saved me $180,000 over the life of my loan.&quot;
          </Testimonial>
          <Testimonial name="Mark's Story – Brisbane Tradie">
            &quot;Had 6 defaults totalling $4,200 from a business that went
            under during COVID. Couldn&apos;t get equipment finance, couldn&apos;t even
            get a credit card. ACS got all 6 removed within 2 months. Now I&apos;ve
            got a $50,000 equipment finance facility and my business is booming
            again.&quot;
          </Testimonial>
          <Testimonial name="Lisa's Story – Melbourne Teacher">
            &quot;Messy divorce left me with defaults I didn&apos;t even know
            existed. My ex had forged signatures on utility accounts. ACS helped
            me prove the fraud and got everything wiped. Went from a 300 credit
            score to 750 in 4 months.&quot;
          </Testimonial>
          <Testimonial name="David's Story – Perth IT Professional">
            &quot;Telco default for $350 that I&apos;d actually paid – they just
            applied it to the wrong account. Spent 8 months trying to fix it
            myself with no luck. ACS sorted it in 2 weeks with documentation I
            didn&apos;t even know I needed.&quot;
          </Testimonial>
        </motion.div>
      </Section>

      <RelatedBlock currentSlug="/credit-repair-australia" heading="Related services & guides" />

      {/* Why Choose Us */}
      <Section title="Why Choose Australian Credit Solutions">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {[
            "98% success rate when we take cases – we don't take every case that comes through our door. We assess each situation carefully and only proceed when we're confident of success.",
            "No Win No Fee policy – you pay our administration fee upfront ($330), but if we don't successfully remove the listings we've targeted, you don't pay our success fees.",
            "Three years of industry awards (2022, 2023, and 2024) – this recognition comes from actual results, not marketing claims.",
            "Licensed professionals – we operate under ASIC Australian Credit License 532003. This means we're regulated, insured, and accountable for our services.",
            "Australia-wide service – credit reporting is federally regulated under the Privacy Act 1988, so your location doesn't matter. We help clients from Perth to Cairns.",
            "Transparent process – no hidden fees, no ongoing monthly charges, no lock-in contracts. You know exactly what you're paying and what we're aiming to achieve.",
            "Direct communication – you'll work directly with our credit specialists, not offshore call centres or automated systems.",
          ].map((t) => (
            <motion.li
              key={t}
              variants={fadeIn}
              className="flex items-start gap-2 rounded-xl bg-blue-50 p-4 text-base text-slate-700"
            >
              <svg
                className="h-5 w-5 shrink-0 text-blue mt-0.5"
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
              {t}
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      {/* Service Options */}
      <Section title="Our Service Options">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2"
        >
          <PriceCard
            name="Urgent Service – Home Loan Emergency"
            timeline="1-3 weeks typically"
            perfectFor="Pre-approval deadlines, settlement emergencies"
            includes={[
              "Same-day assessment",
              "Priority handling",
              "Daily progress updates",
            ]}
          />
          <PriceCard
            name="Express Service – Fast Track Results"
            timeline="2-4 weeks typically"
            perfectFor="Car finance applications, urgent credit needs"
            includes={[
              "Priority case handling",
              "Weekly progress reports",
              "Expedited processing",
            ]}
            featured
          />
          <PriceCard
            name="Standard Service – Comprehensive Approach"
            timeline="4-8 weeks typically"
            perfectFor="Complete file cleanup, multiple issues"
            includes={[
              "Full investigation",
              "Detailed reporting",
              "Thorough documentation",
            ]}
          />
          <PriceCard
            name="Multiple Listing Package – Full File Cleanup"
            timeline="6-12 weeks typically"
            perfectFor="Complex cases, multiple defaults, comprehensive repair"
            includes={[
              "Coordinated strategy",
              "Bulk processing efficiencies",
              "Comprehensive monitoring",
            ]}
          />
        </motion.div>
        <div className="mt-6 rounded-xl border border-dashed border-blue-300 bg-blue-50 p-4 text-base text-slate-600">
          <strong>
            Remember: All services include our No Win No Fee guarantee:
          </strong>{" "}
          If we don&apos;t remove the targeted listings, you don&apos;t pay success fees.
        </div>
      </Section>

      {/* What Happens After */}
      <Section title="What Happens After Your Listings Are Removed">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {[
            "Immediate score improvement – your credit score typically improves within 30-60 days of listings being removed.",
            "Better finance approval odds – home loan applications that were previously declined often get approved after credit file cleanup.",
            "Access to premium credit products – rewards credit cards, high-limit facilities, and premium banking products become available.",
            "Lower interest rates – clean credit files qualify for standard market rates, potentially saving tens of thousands of dollars.",
            "Employment opportunities – some employers check credit reports for financial roles. A clean file removes this potential barrier.",
            "Rental applications – landlords increasingly run credit checks. Clean credit files improve your chances of securing quality rentals.",
            "Business finance access – personal credit affects business lending decisions. Clean personal credit opens doors to business finance.",
          ].map((t) => (
            <motion.li
              key={t}
              variants={fadeIn}
              className="rounded-xl border border-blue-100 bg-white p-4 text-base text-slate-700 shadow-sm transition-all hover:shadow-md"
            >
              {t}
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      {/* FAQs */}
      <Section title="Common Questions About Credit Repair">
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

      {/* Getting Started */}
      <Section title="Getting Started: Your Free Credit Assessment">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">
              Ready to get your financial life back on track?
            </h3>
            <p>Here&apos;s how the process works:</p>
            <ol className="space-y-3">
              {[
                "Free phone consultation (10-15 minutes) – call 0489 265 737 for a no-obligation chat about your situation.",
                "Comprehensive credit file analysis – if we proceed, we obtain your complete credit reports from all three bureaus.",
                "Strategy presentation – we present our findings, explain what we can remove, and provide timeline estimates.",
                "Professional dispute process – once you're ready to move forward, we handle everything while keeping you informed.",
                "Results & ongoing support – we monitor your file until all targeted listings are removed.",
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold text-base">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-blue">
              Don&apos;t Let Bad Credit Control Your Future
            </h3>
            <p className="mt-3 text-slate-700">
              Every day you wait to address your credit issues is another day of
              paying premium interest rates, facing finance rejections, and
              missing opportunities.
            </p>
            <p className="mt-3 text-slate-700">
              You have two choices: wait 5-7 years for negative listings to
              naturally expire while paying the financial penalty every single
              day, or invest in professional removal and potentially fix the
              problem in weeks or months.
            </p>
            <p className="mt-3 text-slate-700 font-semibold">
              Which option makes more financial sense?
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

      {/* Related Services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/credit-repair-australia" />
      </div>

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
                No Win No Fee — Three year award winners
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
