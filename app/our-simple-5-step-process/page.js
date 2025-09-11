// File: app/5-step-credit-repair-process/page.jsx
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { motion } from "framer-motion";
import FooterForm from "@/components/FooterForm";
import ReviewsWidget from "@/components/homepage/Testmonials";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedServices from "@/components/RelatedServices";
import RelatedBlock from "@/app/_seo/RelatedBlock";
import { generateMinimalStructuredData } from "../../utils/generateMinimalStructuredData";

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const staggerChildren = { visible: { transition: { staggerChildren: 0.08 } } };

export default function FiveStepProcessPage() {
  const structuredData = generateMinimalStructuredData({
    pathname: "/5-step-credit-repair-process",
    title: "Our Simple 5‑Step Process: From Bad Credit to Financial Freedom",
    description:
      "Lawyer‑led, judgment‑free credit repair in five steps: listen, assess your credit file, honest evaluation, legal action, and loan referral. No Win No Fee.",
    isService: false,
  });

  const faqData = [
    {
      q: "How long does the whole process take?",
      a: "Simple cases: 2–6 weeks. Complex cases: 6–12 weeks. Urgent cases can be prioritised. We'll set realistic expectations during your assessment.",
    },
    {
      q: "What if you can’t remove everything?",
      a: "You only pay success fees for items we remove. The $330 admin fee covers setup and correspondence. Partial success still often unlocks finance approvals.",
    },
    {
      q: "Can I get updates during the process?",
      a: "Yes. Expect weekly email updates, phone calls for key events, direct access to your case manager, and copies of all correspondence.",
    },
    {
      q: "What happens if credit providers don’t respond?",
      a: "We escalate: deadline enforcement, senior management follow‑ups, OAIC complaints, and legal options if required.",
    },
    {
      q: "Do you guarantee specific results?",
      a: "We guarantee honesty and a No Win No Fee approach on accepted items. 98% success rate for cases we accept. Admin fee is non‑refundable.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-10 lg:py-20">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
            <div className="lg:col-span-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                Our Simple 5‑Step Process: From Bad Credit to Financial Freedom
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                <strong>Life happens. We get it.</strong> That’s why our process starts with understanding, not judgment.
                We’ve helped thousands of Australians get their financial lives back on track.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/free-credit-assessment" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue-700 transition">Start My Free Assessment</Link>
                <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition">Call 0489 265 737</a>
              </div>
            </div>

            {/* Right column: use FooterForm only (no custom form) */}
            <div className="lg:col-span-1">
              <FooterForm
                heading="Free, Judgment‑Free Chat"
                subheading="Takes under 60 seconds"
                paragraph="Tell us your story. We’ll check your file and outline what’s possible — with No Win No Fee on accepted items."
              />
              <ul className="mt-4 text-sm text-gray-600 space-y-1">
                <li>✅ No Win No Fee</li>
                <li>✅ 98% success on accepted cases</li>
                <li>✅ ASIC Licensed (ACL 532003)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/5-step-credit-repair-process" />
      </div>

      {/* Step 1 */}
      <Section title="Step 1: Get to Know You (Without the Judgment)">
        <p className="text-slate-700 italic">“Tell us your story — we’re here to listen, not lecture.”</p>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Card title="We simply want to understand" bullets={["What’s on your credit file right now","Your finance goals","How bad credit is affecting life","Whether we can genuinely help"]} />
          <Card title="Confidential & Free" bullets={["No sales pressure","No shame or blame","Realistic, kind guidance","Honest next steps"]} />
        </div>
        <p className="mt-4 text-slate-700">📞 Ready to talk? <a className="text-blue underline" href="tel:+61489265737">Call 0489 265 737</a> — no pressure, just honest advice.</p>
      </Section>

      {/* Step 2 */}
      <Section title="Step 2: Free Credit File Assessment">
        <p className="text-slate-700 italic">“We’ll show you exactly what lenders see — and what can be fixed.”</p>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Card title="Surprises We Often Find" bullets={["Forgotten defaults","Old late payments","Incorrect personal details","Unclosed or duplicate accounts","Unfamiliar enquiries"]} />
          <Card title="What Our Assessment Covers" bullets={["Every negative item","Removal probability","Realistic timelines","Transparent costs","Approval impact analysis"]} />
        </div>
        <div className="mt-4 rounded-2xl border border-blue-100 bg-white p-4 text-sm text-slate-700">
          <p><strong>Two ways to get your report:</strong> Premium report via us (same‑day, bureau fee may apply) or free basic report direct from Equifax (5–10 business days). Our analysis is <strong>always free</strong>.</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/free-credit-assessment" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue-700 transition">Get My Free Assessment</Link>
          <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition">Call 0489 265 737</a>
        </div>
      </Section>

      {/* Step 3 */}
      <Section title="Step 3: Honest Evaluation (We Only Take Cases We Can Win)">
        <div className="grid gap-6 md:grid-cols-3">
          <StepCard badge="✅" title="We Can Definitely Help" text="We explain what’s possible, timelines, and transparent pricing. Start immediately if you choose." />
          <StepCard badge="⚠️" title="We Might Be Able to Help" text="We’ll outline risks and odds based on similar wins — you decide." />
          <StepCard badge="❌" title="We Can’t Help" text="We’ll explain why and suggest alternatives. You won’t be charged success fees." />
        </div>
        <p className="mt-4 text-slate-700">We only succeed when you succeed. That’s why our accepted‑case success rate is <strong>98%</strong>.</p>
      </Section>

      {/* Step 4 */}
      <Section title="Step 4: We Get to Work (While Keeping You Informed)">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Week 1: Case Preparation" bullets={["Principal Lawyer review","Specific legal grounds identified","Custom letters (no templates)","Initial provider contact"]} />
          <Card title="Week 2–6: Active Disputes" bullets={["Professional correspondence","Legal pressure where needed","Weekly updates","Fast doc handling"]} />
          <Card title="Week 6–12: Follow‑Up & Compliance" bullets={["Escalations to OAIC","Deadline enforcement","Multiple challenge rounds","Updated reports to verify"]} />
        </div>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Card title="What You Can Expect" bullets={["Regular updates","Direct access to your team","Lawyer‑led approach","Clear reporting"]} />
          <Card title="No Win, No Fee" bullets={["$330 admin fee (setup & correspondence)","Success fees only on removals","No subscriptions","No hidden costs"]} />
        </div>
      </Section>

      {/* Step 5 */}
      <Section title="Step 5: Loan Referral (Getting You Back on Track)">
        <p className="text-slate-700 italic">“Clean credit is just the beginning — let’s get you approved.”</p>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Card title="Our Exclusive Loan Partner: Oxcel Finance" bullets={["Bad‑credit recovery specialists","No score damage from apps","Priority for ACS clients","Competitive rates"]} />
          <Card title="Finance We Help With" bullets={["🏠 Home & investment loans","🚗 Car & equipment finance","💼 Business loans","💳 Personal loans & consolidation"]} />
        </div>
        <p className="mt-4 text-slate-700">Pre‑qualified applications, streamlined approvals, and ongoing support — without harming your newly improved credit score.</p>
      </Section>

      {/* Success Stories */}
      <Section title="Real Success Stories: The Process in Action">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-6 md:grid-cols-3">
          <Testimonial name="Sarah & Mike — Brisbane" outcome="Default removed in 5 weeks · Home loan at 3.1%">
            “Rejected for a home loan due to a $3,200 default from 2019. Assessment showed it was listed incorrectly. We took the case with 90% confidence — approved via Oxcel.”
          </Testimonial>
          <Testimonial name="James — Adelaide" outcome="$250k equipment finance approved">
            “Late payments were killing business growth. We found procedural errors and removed them in 8 weeks. Business doubled within 6 months.”
          </Testimonial>
          <Testimonial name="Emma — Perth" outcome="All defaults removed in 6 weeks · Car finance approved">
            “Single mum with $4,800 in defaults. Multiple legal errors found and removed. Oxcel helped with a fair‑rate car loan and emergency credit.”
          </Testimonial>
        </motion.div>
      </Section>

      {/* FAQs */}
      <Section title="Frequently Asked Questions About Our Process">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
          {faqData.map((f, i) => (
            <motion.details key={i} variants={fadeIn} className="group rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
              <summary className="cursor-pointer select-none font-semibold text-blue flex items-center justify-between">
                <span>{f.q}</span>
                <svg className="h-5 w-5 transform group-open:rotate-180 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </summary>
              <p className="mt-3 text-sm text-slate-700 pl-2 border-l-2 border-blue-200 ml-1">{f.a}</p>
            </motion.details>
          ))}
        </motion.div>
      </Section>

      <RelatedBlock currentSlug="/5-step-credit-repair-process" heading="Related services & guides" />

      {/* Final CTA */}
      <Section title="Ready to Start Your Journey to Financial Freedom?">
        <p className="text-slate-700">The process is simple. The results are life‑changing. Thousands of Australians have gone from rejection to approval using this 5‑step process.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/free-credit-assessment" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue-700 transition">Start Free Assessment</Link>
          <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition">Call 0489 265 737</a>
          <a href="mailto:help@australiancreditsolutions.com.au" className="rounded-lg border-2 border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50 transition">Email help@australiancreditsolutions.com.au</a>
        </div>
        <ul className="mt-4 text-sm text-gray-600 space-y-1">
          <li>🏆 Award‑Winning (2022–2024)</li>
          <li>⚖️ Lawyer‑Led Approach</li>
          <li>✅ No Win No Fee on accepted items</li>
          <li>🇦🇺 ASIC Licensed (ACL 532003)</li>
          <li>⭐ 4.9/5 from 855+ verified reviews</li>
        </ul>
      </Section>

      {/* Trust bar */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl bg-gradient-to-r from-blue to-blue p-6 text-white shadow-lg">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">No Win No Fee — Transparent Pricing</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">Lawyer‑Led, Ethics‑First</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">ASIC Licensed & Regulated</p></div>
          </div>
        </motion.div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/5-step-credit-repair-process" />
      </div>

      <Footer />
    </main>
  );
}

function Section({ title, children }) {
  return (
    <motion.section initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true, margin: "-100px" }} className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold text-blue sm:text-3xl">{title}</h2>
      <div className="mt-4 text-base leading-relaxed text-slate-800">{children}</div>
    </motion.section>
  );
}

function Card({ title, bullets = [] }) {
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

function StepCard({ badge, title, text }) {
  return (
    <motion.div variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue text-white font-bold">{badge}</div>
      <h3 className="mt-2 text-lg font-semibold text-blue">{title}</h3>
      <p className="mt-2 text-sm text-slate-700">{text}</p>
    </motion.div>
  );
}

function Testimonial({ name, outcome, children }) {
  return (
    <motion.figure variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
      <div className="text-5xl leading-none text-orange-500">“</div>
      <blockquote className="mt-2 text-slate-700">{children}</blockquote>
      <figcaption className="mt-3 text-sm font-semibold text-blue">{name}</figcaption>
      {outcome && <p className="mt-2 text-sm text-green-700 font-medium">{outcome}</p>}
    </motion.figure>
  );
}
