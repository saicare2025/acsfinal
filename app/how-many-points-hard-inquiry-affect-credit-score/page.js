// File: app/hard-inquiry-credit-score-australia/page.jsx
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

export default function HardInquiryCreditScorePage() {
  const faqData = [
    {
      question: "How many points does a hard inquiry drop my score?",
      answer:
        "Typically ~2–5 points for a single inquiry. The real risk is multiple inquiries within 6–12 months, especially if you already have late payments or defaults.",
    },
    {
      question: "How long do inquiries stay on my report?",
      answer:
        "Two years visibility on your credit report. Their scoring impact reduces after ~12 months and drops off completely after 24 months.",
    },
    {
      question: "Do home‑loan ‘rate shopping’ inquiries count as one?",
      answer:
        "Often grouped within a 14–45 day window for similar loan types (home/car). This leniency is weaker if you already have adverse listings.",
    },
    {
      question: "Can legitimate hard inquiries be removed?",
      answer:
        "No. Only unauthorised/incorrect inquiries can be removed. We focus on bigger wins first (defaults, late payment listings).",
    },
    {
      question: "Will checking my own score hurt my rating?",
      answer:
        "No. Self‑checks are soft inquiries and don’t affect your score. Monthly self‑monitoring is recommended.",
    },
    {
      question: "I was rejected. Should I keep applying elsewhere?",
      answer:
        "Stop immediately. Find the reason for rejection, fix underlying issues, and give 6–12 months before re‑applying with a stronger profile.",
    },
  ];

  const structuredData = generateMinimalStructuredData({
    pathname: "/hard-inquiry-credit-score-australia",
    title:
      "How Many Points Does a Hard Inquiry Affect Your Credit Score? | Australia",
    description:
      "Hard inquiries typically drop your score 2–5 points, but patterns matter more. Learn impact windows, rate‑shopping rules, traps to avoid, and how to fix bigger credit issues first.",
    isService: false,
    serviceType: "Educational Guide",
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-8 lg:py-24">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <p className="text-sm text-slate-600">Last updated: September 2025 · Australian Credit Solutions</p>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                How Many Points Does a Hard Inquiry Affect Your Credit Score?
                <span className="block mt-2 text-blue">Australia — What Really Matters</span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  A single hard inquiry typically drops your score by <strong>~2–5 points</strong> — but the real danger is the pattern of inquiries when you already have negatives. Here’s the practical guide for Australians.
                </p>
                <p className="text-base text-gray-600">
                  If you’re getting rejected, stop applying and fix the underlying issues first. We’ll show you how inquiries fit into the bigger picture — and how to recover fast.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-8 relative flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center" role="group" aria-label="Primary actions">
                <Link href="#inquiry-form" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  ✅ Free Credit Assessment (No Hard Check)
                </Link>
                <a href="tel:+61489265737" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-blue px-6 py-3 text-base font-semibold text-blue transition hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  📞 Call 0489 265 737
                </a>
                {/* Decorative arrows */}
                <div className="pointer-events-none hidden lg:block" aria-hidden="true">
                  <Image src={ArrowIcon} alt="" width={220} height={70} loading="lazy" />
                </div>
                <div className="pointer-events-none lg:hidden flex justify-center" aria-hidden="true">
                  <Image src={ArrowIconM} alt="" width={200} height={120} loading="lazy" />
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-1/3 relative" id="inquiry-form">
              <FooterForm
                heading="Free Credit Check — No Hard Inquiry"
                subheading="Confidential & Score‑Safe"
                paragraph="We review Equifax/Experian/illion, spot inquiry patterns, and prioritise bigger score wins like default removals."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-sm text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>No hard check required</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>Focus on high‑impact removals</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>ASIC ACL 532003</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/hard-inquiry-credit-score-australia" />
      </div>

      {/* What is a hard inquiry */}
      <Section title="What Exactly Is a Hard Inquiry?">
        <p className="text-slate-700">A lender pulls your full credit report to make a lending decision. Unlike soft checks, hard inquiries remain on your file for 2 years.</p>
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-2">
          <Card title="Typical Triggers in Australia" bullets={["Home loan applications","Car/personal loans","Credit cards","Business loans","Some phone plans & rentals"]} />
          <Card title="Key Facts" bullets={["~2–5 point drop each","2 years visible; ~12 months strongest impact","Multiple inquiries compound risk","Soft checks don’t affect your score"]} />
        </motion.div>
      </Section>

      {/* Impact by profile */}
      <Section title="The Real Impact — Beyond ‘2–5 Points’">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">Good Credit (750+)</h3>
            <p className="mt-2 text-slate-700">Impact: minimal (2–3 pts). Recovery: ~3–6 months. Lending impact: negligible.</p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">Fair Credit (650–749)</h3>
            <p className="mt-2 text-slate-700">Impact: moderate (3–5 pts). Recovery: ~6–12 months. Could bump you into a higher‑risk bracket.</p>
          </div>
          
        </div>
      </Section>

      {/* Multiple inquiry trap */}
      <Section title="The Multiple Inquiry Trap">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <p className="text-slate-700">Repeated applications within weeks can trigger a compounding score drop and signal desperation to lenders.</p>
            <ul className="list-disc pl-5 text-slate-700 space-y-1 mt-2">
              <li>6 inquiries can cost 25+ points</li>
              <li>Rejection → more applications → worse score</li>
              <li>Fix issues first, apply later with confidence</li>
            </ul>
          </div>
          <Testimonial name="Sarah — Brisbane">
            "Rejected for a car loan, then applied to 6 lenders in two weeks. Score fell from 640 to 615. I stopped applying, fixed the issues, and got approved months later."
          </Testimonial>
        </div>
      </Section>

      {/* Duration */}
      <Section title="How Long Do Hard Inquiries Stay on Your File?">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="0–12 Months" bullets={["Full impact on score","Lenders see recent activity clearly"]} />
          <Card title="12–24 Months" bullets={["Reduced impact (~half)","Still visible to lenders"]} />
          <Card title="," bullets={["Falls off after 24 months","No longer visible on report"]} />
        </div>
      </Section>

      {/* Rate shopping window */}
      <Section title="When Multiple Inquiries Don’t Count (Much)">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">Rate‑Shopping Window</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
              <li>Home loans: ~14–45 days grouped</li>
              <li>Car loans: ~14–45 days grouped</li>
              <li>Personal loans: little to no grouping</li>
              <li>Leniency weakest if adverse listings already exist</li>
            </ul>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">Minimise Damage</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
              <li>Check your score first (soft checks)</li>
              <li>Use pre‑qualification tools</li>
              <li>Apply only when approval is likely</li>
              <li>Space applications 6+ months apart</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Bigger problems than inquiries */}
      <Section title="Bigger Than Inquiries: What Hurts More">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-2">
          <Card title="Major Score Killers" bullets={["Defaults (–50 to –150; 5 years)","Late payments (–10 to –50)","High utilisation (–50+)","Court judgments (–100+)"]} />
          <Testimonial name="Mark — Melbourne Tradesman">
            "I had 12 inquiries and thought waiting 2 years would fix it. ACS removed two defaults, set payment plans, and coached me to stop applying. Score jumped 580 → 720 and I got car finance at 8.9%."
          </Testimonial>
        </motion.div>
      </Section>

      {/* What to do */}
      <Section title="Your Next Steps">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">This Week</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
              <li>Stop applying for credit</li>
              <li>Get free reports from Equifax/Experian/illion</li>
              <li>List negatives (defaults, late payments, inquiries)</li>
              <li>Book a free ACS assessment</li>
            </ul>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">Next 3 Months</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
              <li>Challenge removable items</li>
              <li>Negotiate affordable payment plans</li>
              <li>Automate payments to avoid lates</li>
              <li>Monitor score monthly</li>
            </ul>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">6–24 Months</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
              <li>Remove remaining defaults</li>
              <li>Build positive history</li>
              <li>Reduce utilisation</li>
              <li>Time major applications for success</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Frequently Asked Questions — Hard Inquiries">
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

      <RelatedBlock currentSlug="/hard-inquiry-credit-score-australia" heading="Related services & guides" />

      {/* Final CTA */}
      <Section title="Ready to Fix What’s Really Hurting Your Score?">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <p>Hard inquiries are just one piece of the puzzle. Defaults, late payments and utilisation usually cost you far more points — and money. Get a plan that fixes the root causes.</p>
            <ul className="space-y-2">
              {["Free assessment of your entire credit file","Identify removable items & fastest wins","Clear action plan with timelines","No hard check; transparent pricing"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="h-5 w-5 shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-blue">Take the First Step</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#inquiry-form" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors">💻 Free Credit Assessment</Link>
              <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors">📞 Call 0489 265 737</a>
            </div>
            <div className="mt-4 text-sm text-slate-600">Email: <a href="mailto:help@australiancreditsolutions.com.au" className="underline text-blue-600">help@australiancreditsolutions.com.au</a></div>
          </motion.div>
        </div>
      </Section>

      {/* Footer trust bar */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl bg-gradient-to-r from-blue to-blue p-6 text-white shadow-lg">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">Award‑winning specialists (2022, 2023, 2024)</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">No Win No Fee — Success‑based pricing</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">Licensed & regulated — ASIC ACL 532003</p></div>
          </div>
        </motion.div>
      </section>

      {/* Related Services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/hard-inquiry-credit-score-australia" />
      </div>

      <Footer />
    </main>
  );
}

function Section({ title, children }) {
  return (
    <motion.section initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true, margin: "-100px" }} className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold tracking-tight text-blue sm:text-3xl">{title}</h2>
      <div className="mt-4 text-base leading-relaxed text-slate-800">{children}</div>
    </motion.section>
  );
}

function Card({ title, bullets = [] }) {
  return (
    <motion.div variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
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

function Testimonial({ name, children }) {
  return (
    <motion.figure variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md mb-4">
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
