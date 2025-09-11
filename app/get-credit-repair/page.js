// File: app/get-credit-repair/page.jsx
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

export default function GetCreditRepairPage() {
  const structuredData = generateMinimalStructuredData({
    pathname: "/get-credit-repair",
    title: "Get Credit Repair That Actually Works | Australian Credit Solutions",
    description:
      "No Win No Fee, 98% success when we accept your case. ASIC‑licensed, lawyer‑led credit repair that gets Aussies approved again.",
    isService: true,
    serviceType: "Credit Repair",
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-8 lg:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Get Credit Repair That Actually Works 🇦🇺
                <span className="block mt-2 text-blue">Fair dinkum specialists — results, not excuses</span>
              </h1>
              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Tired of being knocked back for loans? We’ve helped 855+ Aussies get their financial lives back on track — with No Win No Fee, 98% success when we accept your case, and full ASIC licensing.
                </p>
                <ul className="flex flex-wrap gap-3 text-sm text-slate-700">
                  {["✅ No Win No Fee","✅ 98% Success Rate","✅ ASIC Licensed"].map((t) => (
                    <li key={t} className="rounded-full bg-white/70 px-3 py-1 border border-blue-100">{t}</li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="mt-8 relative flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center" role="group" aria-label="Primary actions">
                <Link href="#apply" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Start Free Credit Review</Link>
                <a href="tel:+61489265737" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-blue px-6 py-3 text-base font-semibold text-blue transition hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Call 0489 265 737</a>
                <div className="pointer-events-none hidden lg:block" aria-hidden="true">
                  <Image src={ArrowIcon} alt="" width={220} height={70} loading="lazy" />
                </div>
                <div className="pointer-events-none lg:hidden flex justify-center" aria-hidden="true">
                  <Image src={ArrowIconM} alt="" width={200} height={120} loading="lazy" />
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-1/3 relative" id="apply">
              <FooterForm
                heading="Free Credit File Review"
                subheading="60‑second pre‑check"
                paragraph="Tell us what’s blocking approvals — defaults, late payments, enquiries — and we’ll map your fastest path to clean credit."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-sm text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>ASIC ACL 532003</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>Lawyer‑led disputes</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>No Win No Fee</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/get-credit-repair" />
      </div>

      {/* Get Started Today */}
      <Section title="Get Started Today 🇦🇺">
        <p className="text-slate-700">Free credit file review in under 60 seconds. What’s your main concern?</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Defaults stopping me getting loans",
            "Late payments hurting my score",
            "Too many credit enquiries",
            "Can’t get a home loan",
            "Car finance rejections",
            "Credit score too low",
          ].map((i) => (
            <BadgeCard key={i} text={i} />
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-600">⭐⭐⭐⭐⭐ Trusted by 855+ Aussie families</p>
      </Section>

      {/* Trust Indicators */}
      <Section title="Trust Indicators">
        <p className="text-slate-700">Trusted by thousands of Australians to get their credit back on track.</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard number="98%" label="Success Rate" />
          <StatCard number="855+" label="Happy Families" />
          <StatCard number="3" label="Award Years" />
          <StatCard number="ASIC" label="Licensed" />
        </div>
      </Section>

      {/* Pain points */}
      <Section title="Sick of Being Knocked Back for Everything?">
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="“Sorry, Application Declined”"
            bullets={[
              "Home loans, car finance, even phone plans",
              "Rejections with no real explanation",
              "We identify the true blockers",
            ]}
          />
          <Card
            title="Paying Through the Nose"
            bullets={[
              "15%+ car loans, 25% credit cards",
              "Bad‑credit mortgages that drain cashflow",
              "Clean credit = fair rates",
            ]}
          />
          <Card
            title="Dreams on Hold"
            bullets={[
              "Family home, reliable car, business loan",
              "Old defaults keep stopping approvals",
              "We clear the path to ‘yes’",
            ]}
          />
        </div>
      </Section>

      {/* Little‑known facts */}
      <Section title="Here’s What Most People Don’t Know…">
        <p className="text-slate-700">
          A massive chunk of credit files have fixable errors — defaults listed incorrectly, late payments that shouldn’t be there, old items that should’ve been removed. We find them. We fix them.
        </p>
      </Section>

      {/* How it works */}
      <Section title="How to Get Credit Repair That Works">
        <motion.ol variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-2 space-y-4 text-slate-700">
          {[
            { t: "Step 1: We Find What’s Broken", d: "Lawyers review your file across Equifax, Experian and illion — checking not just what’s listed, but whether it’s lawful." },
            { t: "Step 2: We Challenge the Crap", d: "We use proper legal processes (not Google templates) to force verification or removal. Providers must prove it — or lose it." },
            { t: "Step 3: You Get Results", d: "Clean file, better score, approvals unlocked. No more second‑class treatment from banks." },
          ].map((s, i) => (
            <motion.li key={s.t} variants={fadeIn} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold">{i + 1}</div>
              <div>
                <strong>{s.t}</strong> — {s.d}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </Section>

      {/* Why us */}
      <Section title="Why Aussies Choose Us">
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="No‑BS Approach"
            bullets={[
              "If we can’t help, we say so — free",
              "No false promises or pressure",
              "We only take cases we’re confident to win",
            ]}
          />
          <Card
            title="Proper Legal Team"
            bullets={[
              "Lawyer‑led, ASIC‑licensed",
              "No call‑centre cowboys",
              "Real compliance, real accountability",
            ]}
          />
          <Card
            title="No Win No Fee"
            bullets={[
              "Admin $330, then success‑based",
              "We get paid when results land",
              "Fair dinkum guarantee",
            ]}
          />
          <Card
            title="Aussie Owned & Operated"
            bullets={[
              "We know Aussie credit law",
              "Local team, local reviews",
              "4.9/5 from 855+ clients",
            ]}
          />
        </div>
      </Section>

      {/* Results */}
      <Section title="Real Aussies, Real Results">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Testimonial name="Dave — Tradie from Campbelltown">
            “Bloody hell, these legends fixed a 2019 phone default in 4 weeks. New Ranger at 5.9% instead of the 18% I was quoted.”
          </Testimonial>
          <Testimonial name="Michelle — Nurse from Brisbane">
            “Three defaults from when I was sick were blocking everything. ACS removed them all in 6 weeks. We’re homeowners now.”
          </Testimonial>
          <Testimonial name="Jake & Sarah — Perth">
            “Old uni debts and late payments meant no bank would touch us. ACS cleaned everything. Now we own our home and an investment property.”
          </Testimonial>
        </motion.div>
      </Section>

      {/* How to start */}
      <Section title="How to Get Started (It’s Easy as)">
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="1) Call or Apply Online"
            bullets={[
              "Call 0489 265 737 or use the form",
              "Takes two minutes to kick off",
            ]}
          />
          <Card
            title="2) Free Credit Review"
            bullets={[
              "We show you exactly what we can fix",
              "No cost, no obligation",
            ]}
          />
          <Card
            title="3) We Do the Work"
            bullets={[
              "Lawyer‑led challenges, proper processes",
              "You get on with life while we fight",
            ]}
          />
          <Card
            title="4) Get Approved"
            bullets={[
              "Clean file → better rates → approvals",
              "Financial freedom unlocked",
            ]}
          />
        </div>
      </Section>

      {/* Objection */}
      <Section title="“But What If You Can’t Help Me?”">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
          <p className="text-slate-700"><strong>Fair question.</strong> If we can’t help, we’ll tell you straight up during the free review. We only take cases we’re confident to win — that’s why our accepted‑case success rate is 98%.</p>
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Common Questions About Getting Credit Repair">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 space-y-4">
          {[
            { q: "How do I get credit repair help in Australia?", a: "Call 0489 265 737 or apply online. We review your file, explain what we can fix and only proceed if we’re confident. No upfront success fees — just results." },
            { q: "What can you actually fix on my credit file?", a: "Defaults, late payment listings, incorrect enquiries, wrong personal info, paid debts still showing and Privacy Act breaches. Our lawyers find issues others miss." },
            { q: "How long does it take to get results?", a: "Most clients see results in 2–8 weeks. Simple corrections can be days; complex defaults are usually 6–8 weeks. You’ll get clear updates throughout." },
            { q: "Is getting credit repair worth the cost?", a: "Most clients save thousands within months via lower rates and approvals. Admin $330 + success fee is typically recovered quickly — plus you regain financial freedom." },
            { q: "Can I get help if banks already knocked me back?", a: "Yes. Refusals are often tied to fixable issues. We clean the file, then you try again with far better odds." },
          ].map((f, i) => (
            <motion.details key={i} variants={fadeIn} className="group rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
              <summary className="cursor-pointer select-none font-semibold text-blue group-open:text-blue flex items-center justify-between">
                <span>{f.q}</span>
                <svg className="h-5 w-5 transform group-open:rotate-180 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
              </summary>
              <p className="mt-3 text-sm text-slate-700 pl-2 border-l-2 border-blue-200 ml-1">{f.a}</p>
            </motion.details>
          ))}
        </motion.div>
      </Section>

      <RelatedBlock currentSlug="/get-credit-repair" heading="Related services & guides" />

      {/* Final CTA band */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl bg-gradient-to-r from-blue to-blue p-6 text-white shadow-lg">
          <div className="grid gap-4 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold">Ready to Get Your Credit Sorted? 🇦🇺</h3>
              <p className="mt-2 text-white/90">Stop being knocked back. Stop paying through the nose. Get credit repair that actually works — from Australia’s most trusted specialists.</p>
              <ul className="mt-3 text-sm text-white/90 space-y-1">
                <li>✅ No Win No Fee</li>
                <li>✅ 98% Success Rate</li>
                <li>✅ ASIC Licensed #532003</li>
                <li>✅ Award Winner 3 Years</li>
                <li>✅ Free Credit Review</li>
              </ul>
            </div>
            <div className="flex items-center gap-3 lg:justify-end">
              <Link href="#apply" className="rounded-lg bg-white px-5 py-3 font-semibold text-blue hover:bg-blue-50 transition-colors">Start Free Review</Link>
              <a href="tel:+61489265737" className="rounded-lg border-2 border-white px-5 py-3 font-semibold text-white hover:bg-white hover:text-blue transition-colors">Call 0489 265 737</a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Related services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/get-credit-repair" />
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

function StatCard({ number, label }) {
  return (
    <motion.div variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-6 text-center shadow-sm">
      <div className="text-3xl font-extrabold text-blue">{number}</div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </motion.div>
  );
}

function BadgeCard({ text }) {
  return (
    <motion.div variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <svg className="h-5 w-5 shrink-0 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-sm text-slate-700">{text}</span>
      </div>
    </motion.div>
  );
}
