// File: app/pay-for-credit-repair-help/page.jsx
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

export default function PayForCreditRepairHelpPage() {
  const faqData = [
    {
      question: "Is it actually worth paying for credit repair help?",
      answer:
        "For most Australians with defaults, judgments, or serious late payments, yes. Professional success rates (~98% when cases are accepted) plus faster timelines (2–8 weeks) usually outweigh the cost within months.",
    },
    {
      question: "What should I pay—and what should I avoid?",
      answer:
        "Fair pricing: ~$330 admin + success fees only when items are removed. Avoid $3k–$5k upfront, subscriptions with no outcomes, or illegal 100% money‑back promises.",
    },
    {
      question: "Can I try DIY first?",
      answer:
        "DIY can work for simple errors and utilization tweaks. For defaults/serious negatives, DIY success rates are ~12% and often take 6–18 months; pro help is typically far faster and safer.",
    },
    {
      question: "What if nothing is removed?",
      answer:
        "With a genuine No Win No Fee model, you only pay the small admin fee. Success fees apply only when items are actually removed.",
    },
    {
      question: "Are overseas services okay?",
      answer:
        "No. Australian credit law requires local expertise and ASIC licensing to protect you.",
    },
  ];

  const structuredData = generateMinimalStructuredData({
    pathname: "/pay-for-credit-repair-help",
    title:
      "Pay for Credit Repair Help Australia | Is Professional Help Worth It?",
    description:
      "Complete Australian guide to whether you should pay for credit repair. Costs, red flags, ROI math, and ASIC‑licensed protection.",
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
              <p className="mb-3 inline-block rounded-full bg-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow">
                Costs • ROI • ASIC‑Licensed Protection
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Pay for Credit Repair Help in Australia?
                <span className="block mt-2 text-blue">Is Professional Help Worth It?</span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Wondering whether you should pay for credit repair help? You&apos;re smart to ask. Australia has both legitimate professionals and dodgy operators. This guide breaks down what to pay, what to avoid, and how the maths stacks up.
                </p>
                <ul className="grid gap-3 sm:grid-cols-2 text-base text-gray-700 list-disc pl-5">
                  <li>💰 Complete cost breakdown &amp; fair pricing</li>
                  <li>🛑 Red flags to avoid (and why)</li>
                  <li>📈 ROI math: when it pays for itself</li>
                  <li>🛡️ ASIC‑licensed protection checklist</li>
                </ul>
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
                  💸 Get Free Cost Analysis
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
                heading="Free Cost &amp; ROI Assessment"
                subheading="Transparent Pricing"
                paragraph="We&apos;ll tell you exactly what you should (and shouldn&apos;t) pay—and whether pro help will pay for itself in your case."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-sm text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>No Win No Fee available</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>ASIC‑licensed protection</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>Written pricing before start</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/pay-for-credit-repair-help" />
      </div>

      {/* Should You Pay? */}
      <Section title="Should You Pay for Credit Repair Help? The Honest Answer">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-3 text-slate-700">
            <p>
              If you&apos;ve got defaults, late payments, or excess enquiries blocking approvals, paying for professional help is usually the smartest move.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>✅ Time savings: months/years faster than DIY</li>
              <li>✅ Legal expertise &amp; creditor escalation</li>
              <li>✅ Success rates that actually change outcomes</li>
              <li>✅ ASIC licensing &amp; consumer protection</li>
              <li>✅ Real financial ROI via better rates</li>
            </ul>
          </div>
          <div className="space-y-4">
            <Testimonial name="Sarah &amp; Michael — Sydney First Home Buyers">
              “We tried DIY 8 months—nowhere. Paid professionals (~$895 total). Two defaults gone in 6 weeks. Approved at 3.1%. Best money we ever spent.”
            </Testimonial>
            <Testimonial name="James — Melbourne Business Owner">
              “DIY for a year made it worse. Paid ~$1,180. Three defaults removed in 5 weeks. $400k equipment finance unlocked—tripled revenue.”
            </Testimonial>
          </div>
        </div>
      </Section>

      {/* Transparent Pricing */}
      <Section title="What Should You Pay in Australia?">
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="✅ Fair Pricing"
            bullets={[
              "$330 admin (upfront)",
              "Success fees only when items are removed",
              "Typical total: $500–$1,200",
              "Timeline: 2–8 weeks",
            ]}
          />
          <Card
            title="🚫 Avoid"
            bullets={[
              "$3,000–$5,000 upfront",
              "Monthly subscriptions with no outcomes",
              "\"Lifetime\" packages for thousands",
              "Illegal 100% money‑back guarantees",
            ]}
          />
          <Card
            title="🛡️ Protection"
            bullets={[
              "ASIC Australian Credit Licence",
              "Pro indemnity insurance",
              "Written scope &amp; pricing before start",
              "Local Australian team",
            ]}
          />
        </div>
      </Section>

      {/* Value & ROI */}
      <Section title="Paying for Help: The Real Value">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h4 className="font-semibold text-blue">What you&apos;re paying for</h4>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Legal expertise &amp; compliant challenge strategy</li>
              <li>40+ hours of pro casework &amp; daily follow‑ups</li>
              <li>Creditor authority &amp; compliance escalation</li>
              <li>Consumer protection via ASIC licensing</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-blue">Cost of NOT paying</h4>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Missed property &amp; business opportunities</li>
              <li>Years on high interest rates</li>
              <li>Stress, delays, and rejected applications</li>
              <li>DIY errors that make removals harder</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <KpiCard label="Typical Total Cost" value="$500–$1,200" />
          <KpiCard label="Time to Results" value="2–8 Weeks" />
          <KpiCard label="Avg. 5‑Year Savings" value="$20k–$100k+" />
        </div>
      </Section>

      {/* How to Pay Safely */}
      <Section title="How to Pay Safely (Checklist)">
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="✅ Verify Before You Pay"
            bullets={[
              "ASIC ACL number",
              "Pro indemnity insurance",
              "Qualified legal team",
              "Local Australian business",
            ]}
          />
          <Card
            title="🚫 Walk Away If…"
            bullets={[
              "Large upfront demanded",
              "Promises to remove accurate info",
              "Guaranteed 100% success",
              "Can’t explain their legal process",
            ]}
          />
        </div>
      </Section>

      {/* ROI Example */}
      <Section title="Real‑World ROI Example">
        <p className="text-slate-700">
          Sarah (Sydney): 2 defaults blocking $800k loan. Paid $330 admin + $400 per default ($1,130 total). Defaults removed in 6 weeks. Approved at ~3.2% instead of 8.9%. ~${"{"}30,600{"}"} annual savings; ~$153k over 5 years.
        </p>
      </Section>

      {/* Alternatives & When Not to Pay */}
      <Section title="Alternatives &amp; When You Shouldn’t Pay">
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Alternatives"
            bullets={[
              "DIY for simple errors/utilization",
              "Free legal aid (limited availability)",
              "Credit counselling (budgeting, not removals)",
            ]}
          />
          <Card
            title="Not Worth It If"
            bullets={[
              "Only accurate, recent info you can’t lawfully challenge",
              "Active bankruptcy (wait until discharge)",
              "Very small loan needs",
              "No finance needs for 2+ years",
            ]}
          />
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Paying for Credit Repair — FAQs">
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

      <RelatedBlock currentSlug="/pay-for-credit-repair-help" heading="Related services &amp; guides" />

      {/* Next Steps CTA */}
      <Section title="Ready to Make the Smart Investment?">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">Why pay now?</h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Transparent pricing &amp; No Win No Fee options</li>
              <li>Faster approvals and better rates</li>
              <li>Protection under Australian regulation</li>
            </ul>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-blue">Get Your Free Cost Analysis</h3>
            <p className="mt-3 text-slate-700">Find out exactly what you should pay and your projected ROI.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/free-credit-assessment" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors">💰 Get Free Cost Analysis</Link>
              <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors">Call 0489 265 737</a>
            </div>
            <div className="mt-4 text-sm text-slate-600">
              <p>Australian Credit Solutions Pty Ltd | ASIC ACL 532003</p>
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
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">Fair, transparent pricing</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">No Win No Fee options</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">ASIC‑licensed &amp; insured</p></div>
          </div>
        </motion.div>
      </section>

      {/* Related Services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/pay-for-credit-repair-help" />
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
