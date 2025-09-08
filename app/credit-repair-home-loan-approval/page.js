// File: app/credit-repair-home-loan-approval/page.jsx
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { useMemo } from "react";
import { motion } from "framer-motion";
import FooterForm from "@/components/FooterForm";
import ArrowIcon from "../assets/arrow.png";
import ArrowIconM from "../assets/arrowm.png";
import Image from "next/image";
import { generateMinimalStructuredData } from "../../utils/generateMinimalStructuredData";
import ReviewsWidget from "@/components/homepage/Testmonials";


// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function CreditRepairHomeLoanApprovalPage() {
  const structuredData = generateMinimalStructuredData({
    pathname: "/credit-repair-home-loan-approval",
    title: "Credit Repair for Home Loan Approval | Australian Credit Solutions",
    description:
      "Credit repair services for home loan approval. Improve your credit score to secure mortgage approval with better terms and interest rates.",
    isService: true,
    serviceType: "Credit Repair for Home Loan Approval",
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
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=")`
        }}></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Credit Repair for Home Loan Approval Australia
                <span className="block mt-2 text-blue">
                  Fix Bad Credit for Mortgage Fast
                </span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Don&amp;apos;t let bad credit kill your home ownership dreams.
                  Our credit repair specialists for home loans know exactly what
                  mortgage lenders look for. We clean up your credit file fast
                  so you can get approved for the home loan you deserve.
                </p>
                <p className="text-base text-gray-600">
                  Been knocked back for a home loan because of bad credit? We
                  fix credit issues before home loan applications. Remove
                  defaults, clean credit file, improve credit score for mortgage
                  approval.{" "}
                  <strong className="font-semibold text-blue">
                    98% success rate
                  </strong>
                  ,{" "}
                  <strong className="font-semibold text-blue">
                    No Win No Fee
                  </strong>
                  .
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
                  Fix My Credit for Home Loan Now
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

            {/* Right Form with Arrow */}
            <div className="w-full lg:w-1/3 relative">
              <FooterForm />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-sm text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>98%
                  success rate
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>No
                  Win No Fee
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>
                  Licensed &amp; insured (ASIC ACL 532003)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ReviewsWidget/>

      {/* Opening Section */}
      <Section title="Why your credit is blocking home loan approval">
        <p>
          Right, let&amp;apos;s cut to the chase \u2014 getting knocked back for
          a home loan because of bad credit is absolutely gut-wrenching.
          You&amp;apos;ve found the perfect house, you&amp;apos;ve got the
          deposit saved, you&amp;apos;re earning good money \u2014 but your
          credit file is letting you down.
        </p>
        <p className="mt-4">
          Here&amp;apos;s the thing that\u2019ll probably surprise you: most
          credit problems that kill home loan applications can actually be
          fixed. We\u2019re talking about defaults applied incorrectly, late
          payment marks from bank processing stuff-ups, credit enquiries that
          shouldn\u2019t be there, and repayment history that doesn\u2019t
          reflect what actually happened.
        </p>
        <p className="mt-4">
          Australian Credit Solutions specialises in credit repair for home loan
          approval across Australia. We\u2019re not some generic \u201ccredit
          repair\u201d mob. We\u2019re specialists who understand exactly what
          mortgage lenders look for and how to get your credit file
          home-loan-ready.
        </p>
        <p className="mt-4">
          Three years of industry awards, 98% success rate when we take cases,
          and we only work on cases where we genuinely think we can help you get
          that mortgage approval. The difference? We focus on quick credit
          repair for mortgage applications so you can get back to house hunting.
        </p>
      </Section>

      {/* Impact Section */}
      <Section title="How bad credit sabotages mortgage applications">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-2 grid gap-4 sm:grid-cols-2"
        >
          {[
            {
              h: "Automatic computer rejections",
              p: "Most banks auto-scan your credit file before a human even looks. One default, too many enquiries, or poor repayment history? The computer says \u201cno\u201d.",
            },
            {
              h: "Your credit score determines everything",
              p: "750+ best rates (~6.2% variable); 650\u2013749 standard (~6.5%); 500\u2013649 premium (7.5%+ if you\u2019re lucky); under 500: usually declined.",
            },
            {
              h: "Lenders see higher risk",
              p: "Old issues haunt applications even if finances improved.",
            },
            {
              h: "Deposit requirements balloon",
              p: "Good credit may pass with 5% deposit; bad credit can need 20%+ if approved at all.",
            },
            {
              h: "LMI gets expensive",
              p: "Poor credit can push LMI premiums up by many thousands.",
            },
            {
              h: "Loan options shrink",
              p: "Bad credit often means second-tier lenders with premium rates.",
            },
          ].map((item) => (
            <motion.li
              key={item.h}
              variants={fadeIn}
              className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="font-semibold text-blue">{item.h}</h3>
              <p className="mt-2 text-sm text-slate-700">{item.p}</p>
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      {/* What We Fix */}
      <Section title="What we fix before you apply for a home loan">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Default removal for mortgage approval"
            bullets={[
              "Defaults applied without proper notice",
              "Already paid defaults not updated",
              "Disputed amounts that became defaults",
              "Defaults from identity theft or fraud",
              "Technical defaults that shouldn\u2019t exist",
            ]}
          />
          <Card
            title="Late payment history cleanup"
            bullets={[
              "Payments marked late due to processing delays",
              "System errors creating false payment marks",
              "Late marks during agreed hardship arrangements",
              "Incorrect payment history across all bureaus",
            ]}
          />
          <Card
            title="Credit enquiry removal"
            bullets={[
              "Unauthorised credit checks",
              "Duplicate enquiries from the same application",
              "Enquiries that violated privacy laws",
              "Old enquiries that should have dropped off",
            ]}
          />
          <Card
            title="Repayment History Information (RHI) correction"
            bullets={[
              "System processing errors in payment recording",
              "Hardship arrangements not reflected properly",
              "Cross-bureau inconsistencies in payment data",
              "Data entry errors affecting payment history",
            ]}
          />
          <Card
            title="Court judgment removal"
            bullets={[
              "Judgments obtained without proper service",
              "Already satisfied judgments not updated",
              "Incorrect judgment amounts or details",
              "Judgments that can be set aside",
            ]}
          />
        </motion.div>
      </Section>

      {/* Process */}
      <Section title="Our proven process: credit file cleanup for mortgage approval">
        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4 text-slate-700"
        >
          {[
            {
              title: "Urgent home loan credit assessment (same day)",
              description:
                "We identify exactly what\u2019s blocking your approval and how quickly we can fix it.",
            },
            {
              title: "Mortgage lender standards analysis",
              description:
                "We align fixes to your target lenders and loan amount.",
            },
            {
              title: "Priority credit repair strategy",
              description:
                "We target the issues with the biggest impact on approval odds.",
            },
            {
              title: "Accelerated dispute process",
              description:
                "We expedite disputes and follow up aggressively for faster results.",
            },
            {
              title: "Pre-approval ready confirmation",
              description:
                "We provide documentation proving improvements for your broker or bank.",
            },
            {
              title: "Ongoing support during application",
              description:
                "We monitor your credit file during the mortgage process.",
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

      {/* Success Stories */}
      <Section title="Success stories: Aussies who got their home loans after credit repair">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Testimonial name="Sarah &amp; Mike from Brisbane \u2014 First home buyers">
            &quot;Had a $2,800 default from a gym membership I&amp;apos;d
            cancelled properly 3 years ago... got pre-approval declined
            everywhere. ACS removed the default in 3 weeks. Pre-approval the
            next week at 6.1% variable with 5% deposit. Settled 2 months later.
            Best $660 we ever spent.&quot;
          </Testimonial>
          <Testimonial name="David from Perth \u2014 Upgrading family home">
            &quot;Eight late payment marks from a direct debit mess during a
            bank merger. Every broker said impossible. ACS proved all 8 were
            system errors. Score jumped from 580 to 740. Approved for $850k at
            standard rates before baby #3 arrived.&quot;
          </Testimonial>
          <Testimonial name="Jenny from Adelaide \u2014 Single mum teacher">
            &quot;Had 15 credit enquiries from trying everywhere. ACS removed 12
            as unauthorised/duplicates. Score improved by 95 points. Approved
            for a lovely 3-bedroom with a teacher scheme.&quot;
          </Testimonial>
          <Testimonial name="Tom &amp; Lisa from Sydney \u2014 Refinancing nightmare">
            &quot;Six months of incorrect late marks after bank system upgrade.
            ACS got all corrected. Refinanced, saved $380/month, and got
            renovation funds.&quot;
          </Testimonial>
        </motion.div>
      </Section>

      {/* Why Choose Us */}
      <Section title="Why choose us for home loan credit repair">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {[
            "We understand home loan requirements and liaise with brokers and banks.",
            "98% success rate when we take cases \u2014 we\u2019re selective and honest.",
            "No Win, No Fee protection \u2014 $330 admin fee, success fees only if we win.",
            "Express service for house hunters \u2014 timing matters in a hot market.",
            "Licensed and regulated (ASIC ACL 532003) with professional indemnity insurance.",
            "National coverage across Australia with cross-bureau expertise.",
          ].map((t) => (
            <motion.li
              key={t}
              variants={fadeIn}
              className="flex items-start gap-2 rounded-xl bg-blue-50 p-4 text-sm text-slate-700"
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

      {/* Service Options / Pricing */}
      <Section title="Home loan credit repair service options">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <PriceCard
            name="Emergency Pre-Approval Service"
            timeline="1\u20133 weeks typically"
            perfectFor="Signed contracts, auction deadlines, urgent settlements"
            includes={[
              "Same-day assessment",
              "Daily updates",
              "Direct lender communication",
            ]}
           
          />
          <PriceCard
            name="Express Home Loan Credit Cleanup"
            timeline="3\u20136 weeks typically"
            perfectFor="Active house hunting, pre-approval needed soon"
            includes={[
              "Priority processing",
              "Weekly updates",
              "Mortgage-ready documentation",
            ]}
           
            featured
          />
          <PriceCard
            name="Complete Credit Overhaul"
            timeline="6\u201312 weeks typically"
            perfectFor="Major credit issues, planning to buy in 3\u20136 months"
            includes={[
              "Comprehensive cleanup",
              "Score optimisation",
              "Ongoing support",
            ]}
           
          />
        </motion.div>
        <div className="mt-6 rounded-xl border border-dashed border-blue-300 bg-blue-50 p-4 text-sm text-slate-600">
          <strong>First Home Buyer Package \u2014 Getting Started:</strong>{" "}
          4\u20138 weeks typically. Includes credit education, monitoring, and
          grant guidance. <em>Custom quote.</em>
          <br />
          <em>All services include our No Win No Fee guarantee.</em>
        </div>
      </Section>

      {/* Timing / Strategy */}
      <Section title="Strategic timing: when to start credit repair for home buying">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {[
            "12+ months: ideal for full overhaul and score recovery.",
            "6\u201312 months: fix major issues (defaults, judgments) with time to optimise.",
            "3\u20136 months: express focus on application-killing issues.",
            "1\u20133 months: crisis mode \u2014 we target only the critical blockers.",
          ].map((t) => (
            <motion.li
              key={t}
              variants={fadeIn}
              className="rounded-xl border border-blue-100 bg-white p-4 text-sm text-slate-700 shadow-sm transition-all hover:shadow-md"
            >
              {t}
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      {/* Getting Started CTA */}
      <Section title="Getting started: your free home loan credit assessment">
        <ol className="mt-4 space-y-3 text-slate-700">
          {[
            "Urgent phone consultation (15 minutes) \u2014 call 0489 265 737.",
            "Complete credit file analysis for home loans across all three bureaus.",
            "Home loan lender strategy session tailored to your goals.",
            "Priority credit repair plan focused on biggest approval impact.",
            "Accelerated dispute process with regular progress updates.",
            "Mortgage-ready documentation for your broker or bank.",
          ].map((step, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold text-sm">
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/free-credit-assessment"
            className="rounded-lg bg-blue px-6 py-3 font-semibold text-white hover:bg-blue transition-colors"
          >
            Book My Free Assessment
          </Link>
          <a
            href="tel:+61489265737"
            className="rounded-lg border-2 border-blue px-6 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors"
          >
            Call 0489 265 737
          </a>
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
                98% success rate when we take cases
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-sm font-medium">
                No Win No Fee \u2014 $330 admin fee
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-sm font-medium">
                Licensed &amp; regulated \u2014 ASIC ACL 532003
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

function PriceCard({
  name,
  timeline,
  perfectFor,
  includes,

  featured = false,
}) {
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
      <div className="mt-4 flex items-end justify-between">
       
        <Link
          href="/free-credit-assessment"
          className="rounded-lg bg-blue px-4 py-2 font-semibold text-white hover:bg-blue transition-colors text-sm"
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
