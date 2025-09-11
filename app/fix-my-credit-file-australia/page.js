// File: app/fix-my-credit-file-australia/page.jsx
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

export default function FixMyCreditFileAustraliaPage() {
  const faqData = [
    {
      question: "How quickly can you fix my credit file?",
      answer:
        "Most credit files are fixed in 2–8 weeks. Simple cases (1–2 defaults) often resolve in 2–4 weeks. Complex cases may take 6–8 weeks.",
    },
    {
      question: "Can you fix my credit file if it's really bad?",
      answer:
        "Yes — we’ve successfully fixed files with 10+ defaults, judgments, and even bankruptcy annotations. 98% success rate on cases we accept.",
    },
    {
      question: "Will fixing my credit file hurt my score?",
      answer:
        "No — it only improves your score. Each removal typically boosts scores 50–200 points.",
    },
    {
      question: "What if you can't fix my credit file?",
      answer:
        "You only pay success fees if items are removed. The $330 admin fee covers professional analysis and strategy.",
    },
    {
      question: "Can I fix my credit file while bankrupt?",
      answer:
        "Current bankruptcy limits options, but we can fix pre-bankruptcy issues and prepare for post-discharge restoration.",
    },
    {
      question: "How do I know if my credit file needs fixing?",
      answer:
        "Defaults, late payments, enquiries, or judgments likely mean you need repair. Finance rejections, high rates, or rental refusals are also red flags.",
    },
  ];

  const structuredData = generateMinimalStructuredData({
    pathname: "/fix-my-credit-file-australia",
    title: "Fix My Credit File Australia | Get Your Financial Life Back Today",
    description:
      "98% success rate credit file repair in Australia. Defaults removed, late payments fixed, credit restored. Call 0489 265 737.",
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

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-12 lg:py-20">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Fix My Credit File Australia <span className="block mt-2 text-blue">Get Your Financial Life Back Today</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            🚀 Australia's #1 Credit File Repair Specialists | 98% Success Rate | Award-Winning Results
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link href="/free-credit-assessment" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue-700 transition">Start Free Assessment</Link>
            <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition">Call 0489 265 737</a>
          </div>
        </div>
      </section>

      <ReviewsWidget />
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/fix-my-credit-file-australia" />
      </div>

      {/* Why Fix */}
      <Section title="Why Your Credit File Needs Fixing (The Brutal Reality)">
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Card title="💔 What Bad Credit Does" bullets={["Loan rejections","High‑rate finance","Rental failures","Job rejections","Family stress"]} />
          <Card title="🔍 Common Problems" bullets={["Defaults","Late payments","Excessive enquiries","Court judgments"]} />
        </div>
      </Section>

      {/* Process */}
      <Section title="How We Fix Your Credit File: The Proven Process">
        <motion.ol variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4 text-slate-700">
          <li><strong>Step 1:</strong> Credit file analysis across Equifax, Experian, illion. Identify and strategise removals.</li>
          <li><strong>Step 2:</strong> Legal challenges using Privacy Act & consumer laws. Professional authority creditors can’t ignore.</li>
          <li><strong>Step 3:</strong> Aggressive follow‑up, enforcement, OAIC escalation if needed. Verified removals + score lift.</li>
        </motion.ol>
      </Section>

      {/* DIY vs Pro */}
      <Section title="DIY vs Professional: Why Most People Can't Fix Their Own Credit File">
        <p className="text-slate-700">DIY success rate: 12% vs professional: 98%. Don’t waste years — use experts with authority and legal weight.</p>
      </Section>

      {/* Results */}
      <Section title="What Happens After We Fix Your Credit File">
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <Card title="🎯 Credit Score" bullets={["+200–400 points","650–850 range","2–4 weeks post removal"]} />
          <Card title="💰 Finance Approvals" bullets={["Home loans","Car finance","Credit cards","Business finance"]} />
          <Card title="🏡 Real‑Life Wins" bullets={["From renters to homeowners","Business growth","Financial freedom"]} />
        </div>
      </Section>

      {/* Testimonials */}
      <Section title="Real Australians Who Fixed Their Credit Files">
        <Testimonial name="Sarah — Melbourne Teacher">3 defaults gone in 6 weeks. Score +280. Approved for dream home at 3.1%.</Testimonial>
        <Testimonial name="Mark — Brisbane Tradesman">$12,400 defaults removed in 8 weeks. Got ute + equipment finance.</Testimonial>
        <Testimonial name="Lisa — Perth Nurse">4 defaults gone in 5 weeks. Score jumped 440. Approved for car + card.</Testimonial>
        <Testimonial name="David — Sydney Business Owner">Defaults removed in 7 weeks. $400k equipment finance approved. New business thriving.</Testimonial>
      </Section>

      {/* Pricing */}
      <Section title="The Investment to Fix Your Credit File">
        <ul className="list-disc pl-5 text-slate-700 space-y-2">
          <li>$330 admin fee for full analysis & strategy</li>
          <li>Success fees $200–800 per item removed</li>
          <li>No Win No Fee — pay only on results</li>
          <li>Payment plans available</li>
        </ul>
      </Section>

      {/* FAQs */}
      <Section title="Fix My Credit File: Frequently Asked Questions">
        {faqData.map((f, i) => (
          <motion.details key={i} variants={fadeIn} className="group rounded-xl border border-blue-100 bg-white p-4 shadow-sm mt-3">
            <summary className="cursor-pointer font-semibold text-blue flex items-center justify-between">
              <span>{f.question}</span>
              <svg className="h-5 w-5 transform group-open:rotate-180 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </summary>
            <p className="mt-2 text-sm text-slate-700 pl-2 border-l-2 border-blue-200">{f.answer}</p>
          </motion.details>
        ))}
      </Section>

      <RelatedBlock currentSlug="/fix-my-credit-file-australia" heading="Related services & guides" />

      <Section title="Ready to Fix Your Credit File? Start Today">
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/free-credit-assessment" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue-700 transition">Free Credit File Assessment</Link>
          <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition">Call 0489 265 737</a>
        </div>
        <p className="mt-4 text-slate-700">Don't wait — every day your file stays broken costs you opportunities and money.</p>
      </Section>

      {/* Trust bar */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl bg-gradient-to-r from-blue to-blue p-6 text-white shadow-lg">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">Award‑winning specialists</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">No Win No Fee Guarantee</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">ASIC Licensed ACL 532003</p></div>
          </div>
        </motion.div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/fix-my-credit-file-australia" />
      </div>

      <Footer />
    </main>
  );
}

function Section({ title, children }) {
  return (
    <motion.section initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true, margin: "-100px" }} className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold text-blue sm:text-3xl">{title}</h2>
      <div className="mt-4 text-base text-slate-800">{children}</div>
    </motion.section>
  );
}

function Card({ title, bullets }) {
  return (
    <motion.div variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-blue">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <svg className="h-5 w-5 shrink-0 text-orange-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function Testimonial({ name, children }) {
  return (
    <motion.figure variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm mb-4">
      <div className="flex text-orange-500 mb-2">{[...Array(5)].map((_, i) => (<svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div>
      <blockquote className="text-slate-700">{children}</blockquote>
      <figcaption className="mt-3 text-sm font-semibold text-blue">{name}</figcaption>
    </motion.figure>
  );
}
