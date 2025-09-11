// File: app/fix-my-credit-right-now/page.jsx
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

export default function FixMyCreditRightNowPage() {
  const faqData = [
    {
      question: "Can you really fix my credit NOW?",
      answer:
        "Yes — we offer same‑day assessment for urgent cases. Simple corrections can be resolved in days; complex removals typically take 1–4 weeks.",
    },
    {
      question: "How fast can you fix my credit in an emergency?",
      answer:
        "For genuine emergencies (settlements, equipment finance, auctions), we prioritise processing. Many urgent cases see results within 1–2 weeks.",
    },
    {
      question: "What if I need my credit fixed before a loan application?",
      answer:
        "That's exactly what our urgent service is for. We coordinate with your broker/lender and provide confirmations aligned to your timeline.",
    },
    {
      question: "How much does urgent credit repair cost?",
      answer:
        "Same as standard pricing — $330 admin + success fees only when items are removed. No extra urgent fees.",
    },
    {
      question: "Can you coordinate with my broker or lender?",
      answer:
        "Absolutely. We frequently work directly with brokers/lenders so your approval timeline stays on track.",
    },
    {
      question: "Do you guarantee results for urgent cases?",
      answer:
        "We take urgent cases we believe we can win. Our 98% success rate on accepted cases reflects rigorous screening and execution.",
    },
  ];

  const structuredData = generateMinimalStructuredData({
    pathname: "/fix-my-credit-right-now",
    title: "Fix My Credit RIGHT NOW! | Urgent Credit Repair Australia (Same‑Day)",
    description:
      "URGENT CREDIT REPAIR: Same‑day assessment. Australia’s fastest specialists for time‑critical cases — typical results in 1–4 weeks. Call 0489 265 737.",
    isService: true,
    serviceType: "Credit repair service",
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
              <p className="mb-3 inline-block rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow">Urgent Credit Repair • Same‑Day Assessment</p>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Fix My Credit RIGHT NOW! <span className="block mt-2 text-blue">Call 0489 265 737</span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Tired of waiting? Need results <strong>TODAY</strong>? Australia’s fastest credit repair specialists fix urgent cases in <strong>1–4 weeks</strong>. Don’t let bad credit ruin your opportunities any longer.
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  <ul className="text-base text-gray-700 list-disc pl-5">
                    <li>🏠 Property settlement deadline</li>
                    <li>🚗 Equipment finance urgent</li>
                    <li>💼 Business loan time‑critical</li>
                  </ul>
                  <ul className="text-base text-gray-700 list-disc pl-5">
                    <li>⏰ Auction finance needed</li>
                    <li>📈 Rate rise protection</li>
                    <li>🎯 Investment opportunity</li>
                  </ul>
                </div>
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
                  🚨 Fix My Credit Now
                </Link>

                <a
                  href="tel:+61489265737"
                  aria-label="Call Australian Credit Solutions on 0489 265 737"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-blue px-6 py-3 text-base font-semibold text-blue transition hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Call 0489 265 737
                </a>

                {/* Decorative arrows */}
                <div className="pointer-events-none hidden lg:block" aria-hidden="true">
                  <Image src={ArrowIcon} alt="" width={220} height={70} loading="lazy" className="select-none" />
                </div>
                <div className="pointer-events-none lg:hidden flex justify-center" aria-hidden="true">
                  <Image src={ArrowIconM} alt="" width={200} height={120} loading="lazy" className="select-none" />
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-1/3 relative">
              <FooterForm
                heading="Same‑Day Credit Assessment"
                subheading="Priority Processing"
                paragraph="Emergency cases assessed today. We mobilise legal, compliance and disputes teams within hours. No extra urgent fees."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-sm text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>Same‑day assessment</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>Priority processing</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>No extra urgent fees</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/fix-my-credit-right-now" />
      </div>

      {/* Urgent Response Times */}
      <Section title="⏰ Urgent Response Times">
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <StatCard label="SAME DAY" value="Assessment & Strategy" />
          <StatCard label="1–2 WEEKS" value="Most Urgent Cases" />
          <StatCard label="98% SUCCESS" value="When We Take Cases" />
        </div>
        <p className="mt-4 text-slate-700"><strong>Don’t wait — every day costs money.</strong></p>
      </Section>

      {/* This Month's Urgent Wins */}
      <Section title="Urgent Cases Resolved This Month">
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          <KpiCard label="Property Settlements Saved" value="127" />
          <KpiCard label="Equipment Finance Approved" value="84" />
          <KpiCard label="Rate Rises Avoided" value="203" />
          <KpiCard label="Opportunities Saved" value="156" />
        </div>
      </Section>

      {/* Cost of Waiting */}
      <Section title="Your Credit Emergency is COSTING YOU MONEY Every Single Day">
        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h4 className="font-semibold text-blue">🚨 Real Risks of Waiting</h4>
            <ul className="space-y-2 list-disc pl-5">
              <li>Higher rates locked in permanently</li>
              <li>Properties sold to other buyers</li>
              <li>Business opportunities gone forever</li>
              <li>Equipment finance at penalty rates</li>
              <li>Investment chances missed</li>
            </ul>
            <h4 className="font-semibold text-blue">✅ What Acting NOW Gets You</h4>
            <ul className="space-y-2 list-disc pl-5">
              <li>Same‑day assessment and action plan</li>
              <li>Priority processing for urgent cases</li>
              <li>Results in 1–4 weeks typically</li>
              <li>Opportunities saved and secured</li>
              <li>Financial stress eliminated</li>
            </ul>
          </div>
          <div className="space-y-4">
            <Testimonial name="Property Settlement Stress">
              "Home loan rejected 3 days before settlement. Deposit at risk, legal fees mounting — wish I'd called sooner."
            </Testimonial>
            <Testimonial name="Business Opportunity Lost">
              "Dream business slipped away because of one default. Someone else snapped it up for cash." 
            </Testimonial>
            <Testimonial name="Rate Rise Disaster">
              "While I tried DIY, rates jumped. Now paying thousands extra every month."
            </Testimonial>
          </div>
        </div>
      </Section>

      {/* How We Fix Fast */}
      <Section title="How We Fix Your Credit FAST">
        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4 text-slate-700"
        >
          {[
            {
              title: "⚡ HOUR 1: Emergency Assessment",
              description:
                "Same‑day deep dive into your credit file; identify blockers and build an urgent action plan.",
            },
            {
              title: "🎯 DAY 1–2: Rapid‑Fire Challenges",
              description:
                "Lawyer‑drafted challenges submitted immediately with urgent processing — no waiting around.",
            },
            {
              title: "🔥 WEEK 1–2: Pressure Campaign",
              description:
                "Daily follow‑ups, escalations, and legal pressure. Providers respond fast when the stakes are clear.",
            },
            {
              title: "🎉 WEEK 2–4: Results Delivered",
              description:
                "Clean file, opportunities saved, stress gone — back in control of your future.",
            },
          ].map((step, i) => (
            <motion.li key={i} variants={fadeIn} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold">{i + 1}</div>
              <div>
                <strong>{step.title}</strong> {step.description}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </Section>

      {/* Priority System */}
      <Section title="🚨 Urgent Case Priority System">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-3">
          <Card title="🔴 CODE RED (24–48 hours)" bullets={["Property settlements","Business emergencies","Auction finance"]} />
          <Card title="🟡 URGENT (1–2 weeks)" bullets={["Equipment finance","Investment opportunities","Rate protection"]} />
          <Card title="🟢 PRIORITY (2–4 weeks)" bullets={["Home loans","Business expansion","Wealth building"]} />
        </motion.div>
      </Section>

      {/* Case Studies */}
      <Section title="Urgent Cases We've SAVED This Month">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Testimonial name="Rachel — Mortgage Broker Sydney">
            <strong>Emergency:</strong> Settlement in 5 days · <strong>Result:</strong> Default removed in 3 days · <strong>Outcome:</strong> $50k deposit saved.
          </Testimonial>
          <Testimonial name="Steve — Earthmoving Contractor">
            <strong>Emergency:</strong> Auction in 10 days · <strong>Result:</strong> Defaults removed in 5 days · <strong>Outcome:</strong> $200k equipment + ~$30k/mo revenue.
          </Testimonial>
          <Testimonial name="Maria & Tony — Investors">
            <strong>Emergency:</strong> Rate rise deadline · <strong>Result:</strong> Removals in 12 days · <strong>Outcome:</strong> ~$1,800/mo saved.
          </Testimonial>
        </motion.div>
      </Section>

      {/* Hotline */}
      <Section title="🚨 Emergency Credit Repair Hotline">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-3 text-slate-700">
            <h3 className="font-semibold text-blue">📞 Call Right Now</h3>
            <p className="text-lg font-semibold">0489 265 737</p>
            <p>Speak directly to our urgent response team. Every minute counts.</p>
            <h4 className="font-semibold text-blue mt-4">💬 Urgent Callback</h4>
            <p>Within 2 hours — request immediate callback for urgent cases.</p>
            <h4 className="font-semibold text-blue mt-4">⚡ Same‑Day Action</h4>
            <p>Emergency cases assessed within hours — strategy delivered today.</p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-blue">Get Urgent Help Now</h3>
            <p className="mt-3 text-slate-700">Start a same‑day assessment and jump the queue with priority processing.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/free-credit-assessment" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors">🚨 Fix My Credit Now</Link>
              <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors">Call 0489 265 737</a>
            </div>
            <div className="mt-4 text-sm text-slate-600">
              <p>Australian Credit Solutions Pty Ltd | ASIC ACL 532003</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Urgent Credit Repair Questions">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 space-y-4">
          {faqData.map((f, index) => (
            <motion.details key={`faq-${index}`} variants={fadeIn} className="group rounded-xl border border-blue-100 bg-white p-4 shadow-sm transition-all hover:shadow-md">
              <summary className="cursor-pointer select-none font-semibold text-blue group-open:text-blue flex items-center justify-between">
                <span>{f.question}</span>
                <svg className="h-5 w-5 transform group-open:rotate-180 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-3 text-sm text-slate-700 pl-2 border-l-2 border-blue-200 ml-1">{f.answer}</p>
            </motion.details>
          ))}
        </motion.div>
      </Section>

      <RelatedBlock currentSlug="/fix-my-credit-right-now" heading="Related services & guides" />

      {/* Next Steps CTA */}
      <Section title="STOP WAITING. START WINNING. 🇦🇺">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">⏰ Time is running out</h3>
            <p className="text-slate-700">Interest rates changing • Properties selling fast • Opportunities closing.</p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Same‑Day Assessment</li>
              <li>Emergency Processing</li>
              <li>No Extra Urgent Fees</li>
              <li>98% Success Rate</li>
              <li>ASIC Licensed</li>
            </ul>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-blue">Fix My Credit Now — Call 0489 265 737</h3>
            <p className="mt-3 text-slate-700">Don’t let broken credit destroy another opportunity.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/free-credit-assessment" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors">Start Now</Link>
              <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors">Call 0489 265 737</a>
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
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">Same‑Day Assessment • Priority Processing</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">No Win No Fee — Success‑based pricing</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">Licensed & regulated — ASIC ACL 532003</p></div>
          </div>
        </motion.div>
      </section>

      {/* Related Services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/fix-my-credit-right-now" />
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
      <h2 className="text-2xl font-bold tracking-tight text-blue sm:text-3xl">{title}</h2>
      <div className="mt-4 text-base leading-relaxed text-slate-800">{children}</div>
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
            <svg className="h-5 w-5 shrink-0 text-orange-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function StatCard({ label, value }) {
  return (
    <motion.div
      variants={fadeIn}
      className="rounded-xl border border-blue-100 bg-white p-6 text-center shadow-sm"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-1 text-lg font-bold text-blue">{value}</p>
    </motion.div>
  );
}

function KpiCard({ label, value }) {
  return (
    <motion.div
      variants={fadeIn}
      className="rounded-xl border border-blue-100 bg-white p-6 text-center shadow-sm"
    >
      <p className="text-3xl font-extrabold text-blue">{value}</p>
      <p className="mt-1 text-sm font-medium text-slate-600">{label}</p>
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
      <figcaption className="mt-3 text-sm font-semibold text-blue">{name}</figcaption>
    </motion.figure>
  );
}
