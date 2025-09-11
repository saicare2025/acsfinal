// File: app/credit-repair-car-finance/page.jsx
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

export default function CreditRepairCarFinancePage() {
  const structuredData = generateMinimalStructuredData({
    pathname: "/credit-repair-for-car-finance",
    title: "Credit Repair for Car Finance | Australian Credit Solutions",
    description:
      "Improve your credit score for car finance approval. Professional credit repair services to help you secure vehicle financing with better terms.",
    isService: true,
    serviceType: "Credit Repair for Car Finance",
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
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=")`
        }}></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Credit Repair for Car Finance Australia | Fix Bad Credit for Car
                Loan Fast
                <span className="block mt-2 text-blue">
                  Need a car but got knocked back for finance? We fix bad credit
                  for car loan approval.
                </span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Don't get stuck with dodgy dealer finance at ~25% interest.
                  Our credit repair specialists for car finance help Aussies
                  dispute incorrect or unfair credit listings so you can get
                  approved for standard rates instead of getting ripped off.{" "}
                  <strong className="font-semibold text-blue">
                    98% success rate
                  </strong>{" "}
                  when we take your case.{" "}
                  <strong className="font-semibold text-blue">
                    No Win No Fee
                  </strong>
                  .
                </p>
                <p className="text-base text-gray-600">
                  We remove defaults, fix payment history errors, and clean
                  credit <a href="/get-credit-repair" className="text-blue-600 hover:text-blue-800 underline">Get Credit Repair</a> files across Equifax, Experian and Illion so you can
                  shop with confidence.
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
                  Fix My Credit for Car Loan Now
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
                heading="Get My Free Car Finance Assessment"
                subheading="Fast & Confidential"
                paragraph="Find out what we can fix for your car finance approval – free, fast, and confidential."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-base text-gray-600 sm:flex-row sm:flex-wrap">
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
                  Licensed & insured (ASIC ACL 532003)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ReviewsWidget/>

      {/* Breadcrumb Navigation */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/credit-repair-for-car-finance" />
      </div>

      {/* Opening Section */}
      <Section title="Car finance knock-backs? Let's fix the credit stopping your approval">
        <p>
          Right mate, let's talk straight – getting your car finance knocked
          back because of bad credit is a bloody nightmare. You need wheels –
   <a href="/blog-details/credit-repair-strategies-for-a-quick-boost-to-your-score" className="text-blue-600 hover:text-blue-800 underline">Credit Repair Strategies For A Quick Boost To Your Score</a>        for work, family, and life. But every time you apply for decent car
          finance, you get the dreaded “computer says no”.
        </p>
        <p className="mt-4">
          Here's what most Aussies don't know: heaps of the credit problems that
          kill car finance applications can actually be fixed. We're talking
        <a href="/blog-details/credit-file-defaults-can-an-unreceived-bill-appear-on-your-report" className="text-blue-600 hover:text-blue-800 underline">Credit File Defaults Can An Unreceived Bill Appear On Your Report</a>   defaults applied without proper notice, system stuff-ups creating late
          marks, dodgy dealer enquiries, and payment histories that are just
          plain wrong.
        </p>
        <p className="mt-4">
          Australian Credit Solutions specialises in credit repair for car
          finance approvals across Australia. Three years of industry awards and
         <a href="/credit-enquiry-removal-australia" className="text-blue-600 hover:text-blue-800 underline">Credit Enquiry Removal Australia</a>  a 98% success rate when we take cases. We only work on files where we
          genuinely reckon we can help you get that car loan sorted – fast.
        </p>
      </Section>

      {/* Impact Section */}
      <Section title="How bad credit is absolutely screwing your car finance">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-2 grid gap-4 sm:grid-cols-2"
        >
          {[
            {
              h: "You get stuck with dealer finance horror stories",
              p: "Can't get bank or credit union finance? You're at the mercy of dealers who 'get you approved' at eye-watering rates.",
            },
            {
              h: "Your interest rates are obscene",
              p: "Good credit (700+): ~5.9% bank rates. Fair (600–699): ~8.9% credit unions. Bad (500–599): 15–25% dealer finance. Really bad: 30%+ if they'll touch you at all.",
            },
            {
              h: "$30k over 5 years: real cost difference",
              p: "Good credit ~$566/month vs bad credit ~$890/month – ~$19,440 extra over the loan.",
            },
            {
              h: "Your car choices get limited",
              p: "Older, higher‑km cars, more breakdowns, and bigger repair bills.",
            },
            {
              h: "Deposits go through the roof",
              p: "Good credit ~$2,000 down. Bad credit? Often 20–30% ($8k–$12k on a $40k car).",
            },
            {
              h: "Zero negotiating power & add‑on rip‑offs",
              p: "When you're desperate for finance, you pay inflated prices and get loaded with extras and junk insurance.",
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
      </Section>

      {/* What We Fix */}
      <Section title="What credit issues we fix for car finance approval">
        <p className="text-slate-700">
          <strong>Important:</strong> We can't remove accurate credit
          information, but we help Aussies dispute <em>incorrect</em> or{" "}
          <em>unfair</em> listings to improve their chances of standard‑rate
          approvals.
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Default removal for car finance"
            bullets={[
              "Defaults applied without proper default notices",
              "Already‑paid defaults not marked satisfied",
              "Disputed debts incorrectly defaulted",
              "Identity theft defaults",
              "Technical defaults that breach credit law",
            ]}
          />
          <Card
            title="Late payment history cleanup"
            bullets={[
              "Bank processing delays causing false lates",
              "System errors and data mismatches",
              "Hardship periods not reflected correctly",
              "Cross‑bureau inconsistencies",
            ]}
          />
          <Card
            title="Credit enquiry removal"
            bullets={[
              "Unauthorised checks from car dealers",
              "Duplicate enquiries for one application",
              "Old enquiries that breached privacy rules",
              "Enquiries that should have been removed",
            ]}
          />
          <Card
            title="Repayment History Information (RHI) correction"
            bullets={[
              "Processing errors affecting payment records",
              "Hardship not shown in RHI",
              "Data entry mistakes creating false late marks",
              "Missing positive payment data",
            ]}
          />
          <Card
            title="Court judgment disputes"
            bullets={[
              "Judgments without proper service",
              "Satisfied judgments not updated",
              "Wrong person/amount details",
              "Default judgments that can be set aside",
            ]}
          />
        </motion.div>
      </Section>

      {/* Process */}
      <Section title="Our proven process: get a car loan with bad credit (fast)">
        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4 text-slate-700"
        >
          {[
            {
              title: "Same‑day car finance credit assessment",
              description:
                "We pinpoint what's blocking your approval and how quickly we can fix it.",
            },
            {
              title: "Car finance lender analysis",
              description:
                "We map bank vs credit‑union vs dealer requirements and what to fix for each.",
            },
            {
              title: "Quick‑fix priority strategy",
              description:
                "We target the biggest‑impact issues first to move you up into better rate categories.",
            },
            {
              title: "Express dispute process",
              description:
                "We fast‑track disputes and follow up aggressively while you shop for cars.",
            },
            {
              title: "Car‑finance‑ready documentation",
              description:
                "We provide proof of improvements for dealers, brokers, or lenders.",
            },
            {
              title: "Ongoing support during purchase",
              description:
                "We monitor your file to ensure nothing derails approval at signing time.",
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
      <Section title="Success stories: Aussies who got better car finance after credit repair">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Testimonial name="Mick from Campbelltown – Sparkie who needed a work ute">
            "My old ute died and I needed wheels for work ASAP. Had a $1,800
            default from when my business went bust during COVID – dealers
            offered 22% on a 2015 Hilux. ACS got the default removed in 4 weeks
            (no proper notices). Approved at NAB for 6.9% and bought a 2020
            Ranger. Saved about $15,000."
          </Testimonial>
          <Testimonial name="Sarah from Townsville – Single mum teacher">
            "Needed a reliable car for work and kids. Five late marks after the
            bank stuffed up direct debits. Dealers pushed 18% on old cars. ACS
            proved system errors and removed all 5 marks. Credit union approved
            at 7.9% for a 2019 Corolla."
          </Testimonial>
          <Testimonial name="Dave from Mackay – FIFO worker">
            "Had 12 enquiries from trying everywhere after my 4WD was written
            off. ACS removed 9 as unauthorised dealer checks; score jumped 87
            points. Approved for a new Colorado at standard bank rates."
          </Testimonial>
          <Testimonial name="Lisa from Geelong – Nurse on shifts">
            "Old phone bill default for $340 from years ago. ACS found the
            payment and proved misapplied funds. Default removed; approved
            through my credit union for the car I actually wanted."
          </Testimonial>
        </motion.div>
      </Section>

      <RelatedBlock currentSlug="/credit-repair-for-car-finance" heading="Related services & guides" />

      {/* Why Choose Us */}
      <Section title="Why choose us for car‑finance credit repair">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {[
            "We understand car‑finance lender requirements – not generic credit repair.",
            "98% success rate when we take cases – we’re selective and honest.",
            "No Win, No Fee – $330 admin fee; success fees only if we win.",
            "Fast turnaround for people who need wheels – express processing.",
            "Licensed and regulated (ASIC ACL 532003) with professional indemnity insurance.",
            "We work directly with brokers/lenders to smooth approvals.",
            "Australia‑wide support for dealer and private purchases.",
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

      {/* Service Options / Pricing */}
      <Section title="Our car‑finance credit repair service options">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <PriceCard
            name="Emergency Car Finance Service"
            timeline="1–3 weeks typically"
            perfectFor="Broken down cars, work emergencies, family transport crises"
            includes={[
              "Same‑day assessment",
              "Daily updates",
              "Priority processing",
            ]}
          />
          <PriceCard
            name="Express Car Finance Cleanup"
            timeline="3–5 weeks typically"
            perfectFor="Actively car shopping; pre‑approval needed soon"
            includes={[
              "Fast‑track processing",
              "Weekly updates",
              "Finance‑ready documentation",
            ]}
            featured
          />
          <PriceCard
            name="Complete Car Credit Overhaul"
            timeline="6–10 weeks typically"
            perfectFor="Major credit issues; planning to buy in 2–3 months"
            includes={[
              "Comprehensive cleanup",
              "Score optimisation",
              "Ongoing support",
            ]}
          />
        </motion.div>
        <div className="mt-6 rounded-xl border border-dashed border-blue-300 bg-blue-50 p-4 text-base text-slate-600">
          <strong>Tradie Transport Package – Work Vehicle Finance:</strong> 4–6
          weeks typically. Business & personal credit analysis with
          asset‑finance options. <em>Custom quote based on needs.</em>
          <br />
          <em>All services include our No Win No Fee guarantee.</em>
        </div>
      </Section>

      {/* Guidance / Education */}
      <Section title="How to fix credit to buy a car: what actually matters to lenders">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-2 space-y-4 text-slate-700"
        >
          {[
            "Recent payment history (last 6–12 months) carries the most weight for car finance.",
            "Debt‑to‑income ratio: keep monthly commitments manageable before applying.",
            "Employment stability helps – 6+ months steady work is a plus (casual/contractors can still qualify with clean credit).",
            "Existing car‑finance history paid well is gold.",
            "High credit‑card utilisation hurts approvals – pay balances down if possible.",
            "If you've got defaults/judgments/poor history, dispute the incorrect stuff first – generic tips won't overcome major black marks.",
          ].map((text, i) => (
            <motion.p
              key={i}
              variants={fadeIn}
              className="flex items-start gap-2"
            >
              <svg
                className="h-5 w-5 shrink-0 text-orange mt-0.5"
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
              {text}
            </motion.p>
          ))}
        </motion.div>
      </Section>

      {/* Quick Credit Repair Timing */}
      <Section title="Quick credit repair for car‑loan approval: realistic timeframes">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {[
            "1–2 weeks (emergency): clear obvious reporting errors and simple payment mistakes.",
            "3–4 weeks (express): multiple straightforward issues; default removal with proper grounds; enquiry cleanup.",
            "5–8 weeks (comprehensive): complex cases, judgments, cross‑bureau coordination.",
            "8–12 weeks (major overhaul): multiple defaults & judgments; business credit impacting personal credit.",
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
      <Section title="Common questions about car‑finance credit repair">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4"
        >
          {faqData.map((f) => (
            <motion.details
              key={f.q}
              variants={fadeIn}
              className="group rounded-xl border border-blue-100 bg-white p-4 shadow-sm transition-all hover:shadow-md"
            >
              <summary className="cursor-pointer select-none font-semibold text-blue group-open:text-blue flex items-center justify-between">
                <span>{f.q}</span>
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
                {f.a}
              </p>
            </motion.details>
          ))}
        </motion.div>
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

      {/* JSON-LD */}

      {/* Related Services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/credit-repair-for-car-finance" />
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

const faqData = [
  {
    q: "How long does credit repair take for car finance?",
    a: "Emergency cases with simple problems can be sorted in 1–3 weeks. Complex cases usually take 6–10 weeks. We'll give you honest timeframes during assessment.",
  },
  {
    q: "Will fixing my credit guarantee car finance approval?",
    a: "We can't guarantee approval – income and employment matter too. But clean credit dramatically improves options and rates compared to dealer finance.",
  },
  {
    q: "Should I buy a car before or after credit repair?",
    a: "Usually after, unless your current car is completely dead. Getting stuck with ~25% dealer finance costs way more than waiting a few weeks for credit repair.",
  },
  {
    q: "What credit score do I need for decent car finance?",
    a: "Roughly 600+ for credit‑union rates, 650+ for bank rates, and 700+ for the best deals. Even moving from 520 to 650 can save thousands.",
  },
  {
    q: "Can I get car finance with defaults on my file?",
    a: "Yes, but the rates and car options are usually terrible. It's better to dispute removable defaults first, then apply with a cleaner file.",
  },
  {
    q: "How much money can credit repair save me on a car loan?",
    a: "It depends on loan size and score improvement, but $5,000–$15,000 over a typical car loan is common – plus access to better vehicles.",
  },
  {
    q: "What if I need a car right now and can't wait?",
    a: "Ask about our Emergency Car Finance Service (1–3 weeks) and short‑term transport options while we fast‑track disputes.",
  },
  {
    q: "What should I focus on to fix credit quickly for a car?",
    a: "High‑impact disputes first: default/judgment removal and major payment history errors; then enquiry cleanup and utilisation improvements.",
  },
];
