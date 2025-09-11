// File: app/does-late-rent-payment-affect-credit-score-australia/page.jsx
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

export default function LateRentAffectCreditScorePage() {
  // FAQ data
  const faqData = [
    {
      question: "Can paying rent on time improve my credit score?",
      answer:
        "Not directly in Australia. Regular rent payments don't appear on credit files or help build credit scores. Only missed payments can hurt you.",
    },
    {
      question: "How much rent needs to be owing before it affects my credit?",
      answer:
        "Generally $150 or more can be listed as a default on your credit file. Even small amounts can cause major credit score damage.",
    },
    {
      question: "Will breaking my lease affect my credit score?",
      answer:
        "Only if you don't pay the break lease fees and they get listed as defaults. Paying the fees prevents credit damage.",
    },
    {
      question: "Can my landlord report late rent immediately?",
      answer:
        "No. Proper procedures must be followed, including notices and reasonable time to pay, before any credit file listing.",
    },
    {
      question: "What if my rent was late due to COVID hardship?",
      answer:
        "COVID hardship may provide grounds for default removal if proper procedures weren't followed or circumstances warrant sympathetic consideration.",
    },
    {
      question: "Can bond disputes appear on my credit file?",
      answer:
        "Yes, if disputed amounts exceed $150 and remain unpaid after proper procedures. Bond disputes are a common source of unexpected defaults.",
    },
    {
      question: "How long do rental defaults stay on credit files?",
      answer:
        "Five years from the date first listed, unless successfully removed through dispute or legal challenge.",
    },
    {
      question: "Can I remove rental defaults myself?",
      answer:
        "It's possible for simple cases, but rental defaults often involve complex legal and procedural issues best handled professionally.",
    },
    {
      question: "Will rental defaults stop me getting another rental?",
      answer:
        "Many applications include credit checks. Defaults can make approval difficult and may require larger bonds or additional conditions.",
    },
    {
      question: "What's the difference between rental defaults and court judgments?",
      answer:
        "Judgments are more serious, harder to remove, and have greater credit score impact than simple default listings.",
    },
  ];

  // Structured data (this is a guide, not a service landing)
  const structuredData = generateMinimalStructuredData({
    pathname: "/does-late-rent-payment-affect-credit-score-australia",
    title: "Does Late Rent Payment Affect Credit Score in Australia?",
    description:
      "Short answer: It depends. Late rent payments don't automatically show on your credit file, but they can appear as defaults, collections, or judgments and seriously damage your score. Learn how it happens and how to fix it.",
    isService: false,
    serviceType: undefined,
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
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Does Late Rent Payment Affect Credit Score in Australia?
                <span className="block mt-2 text-blue">Short answer: It depends.</span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Late rent doesn't automatically appear on your credit file — but it <strong>can</strong> end up there through defaults, collections, or court judgments and seriously damage your score. Here's what to watch for and how to protect yourself.
                </p>

                <p className="text-base text-gray-600">
                  Paying rent on time for years won't build your score (most landlords don't report positive rental history), but missed payments can trigger listings that stay for <strong>5 years</strong>. If you've been affected, we can help remove improper listings and restore your credit.
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
                  Free Rental Credit Assessment
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
                heading="Worried About a Rental Default?"
                subheading="Fast, discreet help"
                paragraph="We assess Equifax/Experian/Illion, identify rental-related listings, and map a removal strategy."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-sm text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>No Win No Fee</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>94% rental‑item success since 2018</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>ASIC ACL 532003</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/does-late-rent-payment-affect-credit-score-australia" />
      </div>

      {/* The Truth About Rent & Credit Scores */}
      <Section title="The Truth About Rent and Credit Scores">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="🏠 How Rental Payments Normally Work"
            bullets={[
              "Paid‑on‑time rent usually doesn't appear on your credit file",
              "Doesn't help build your credit score",
              "Most landlords don't report positive rental history",
            ]}
          />
          <Card
            title="⚠️ When Late Rent DOES Affect Your Credit Score"
            bullets={[
              "Rental defaults (>$150) — stays for 5 years",
              "Court judgments — more serious, bigger score drops",
              "Debt collection listings — often include added fees",
              "Bond disputes — cleaning/repair claims becoming defaults",
            ]}
          />
        </motion.div>
      </Section>

      {/* Real‑Life Examples */}
      <Section title="Real‑Life Rental Credit Damage Examples">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Testimonial name="Sarah M — Sydney ($847 Rental Default)">
            "Moved out, thought everything was fine. Six months later I found an $847 default for 'unpaid rent' — actually a bond dispute over carpet cleaning. Credit score dropped 180 points and I couldn't get a home loan."
          </Testimonial>
          <Testimonial name="Michael R — Melbourne (Tribunal Judgment)">
            "Broke lease early for a job transfer. Landlord took me to tribunal for $3,200 lost rent. Judgment hit my file and destroyed my score — I couldn't secure a new rental and ended up in expensive short‑term accommodation."
          </Testimonial>
          <Testimonial name="David & Lisa T — Brisbane (Collection Agency)">
            "Late during COVID lockdowns; thought it was sorted with the agent. Two years later, a $2,100 collection default appeared. Home loan rejected — dreams crushed."
          </Testimonial>
        </motion.div>
      </Section>

      {/* How Late Rent Becomes Credit Damage */}
      <Section title="How Late Rent Becomes Credit File Damage">
        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4 text-slate-700"
        >
          {[
            {
              title: "WEEK 1–2: Late Rent Notice",
              description:
                "Agent sends late notice with 7–14 days to pay. No credit impact yet — best chance to resolve.",
            },
            {
              title: "WEEK 3–4: Formal Demand",
              description:
                "Notice to remedy breach issued. Last chance before credit damage — many tenants underestimate this stage.",
            },
            {
              title: "WEEK 5–8: Default Listing",
              description:
                "If unpaid, the debt can be listed with Equifax/Experian/Illion. Immediate score damage. Five‑year visibility begins.",
            },
            {
              title: "MONTH 2–3: Collection Action",
              description:
                "Debt may be sold to collectors; extra fees added; repeated contact; threat of legal action.",
            },
            {
              title: "MONTH 3–6: Legal Action",
              description:
                "Tribunal/court proceedings can lead to a judgment — more serious than a default and harder to remove.",
            },
          ].map((step, i) => (
            <motion.li key={i} variants={fadeIn} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold">{i + 1}</div>
              <div>
                <strong>{step.title}:</strong> {step.description}
              </div>
            </motion.li>
          ))}
        </motion.ol>

        <h3 className="mt-8 font-semibold text-blue">🎯 Common Rental Credit Traps</h3>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-6 md:grid-cols-2"
        >
          <Card title="Bond Disputes (Very Common)" bullets={["Cleaning fees", "Damage assessments", "Garden maintenance", "Carpet replacement charges"]} />
          <Card title="Break Lease Penalties" bullets={["Early termination fees", "Lost rent until re‑tenanted", "Advertising & letting fees", "Property prep costs"]} />
          <Card title="Utility Account Transfers" bullets={["Electricity/gas/water not transferred", "Final bills to old address", "First sign is a credit check", "Unpaid amounts become defaults"]} />
          <Card title="Property Management Errors" bullets={["Payments not processed", "System errors", "Wrong account details", "Admin failures"]} />
        </motion.div>
      </Section>

      {/* Protecting Your Credit */}
      <Section title="Protecting Your Credit Score from Rental Issues">
        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          <div className="space-y-3">
            <h4 className="font-semibold text-blue">Prevention Strategies</h4>
            <ul className="space-y-2 text-slate-700">
              {[
                "Before renting: references, know lease terms, document entry condition",
                "During tenancy: pay on time (automate), communicate early, keep receipts",
                "When moving out: proper notice, professional clean, exit photos/videos, bond confirmation",
                "After moving: transfer utilities, follow up bond, check credit file 3–6 months later",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="h-5 w-5 shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-blue mt-6">Early Intervention (If You're Going to Be Late)</h4>
            <ol className="list-decimal pl-5 text-slate-700 space-y-2">
              <li>Contact the agent immediately and explain circumstances.</li>
              <li>Propose a written payment plan and keep records.</li>
              <li>Seek mediation through tenant services if needed.</li>
              <li>Follow through completely to maintain trust.</li>
            </ol>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-blue">If Damage Already Happened — Immediate Steps</h4>
            <ol className="list-decimal pl-5 text-slate-700 space-y-2">
              <li><strong>Day 1:</strong> Get Equifax, Experian, Illion reports; gather documents.</li>
              <li><strong>Days 2–7:</strong> Check procedures, dates, notices; spot technical errors.</li>
              <li><strong>Days 7–14:</strong> Get professional assessment; set removal strategy and timeline.</li>
            </ol>

            <h4 className="font-semibold text-blue mt-6">Legal Grounds for Removal</h4>
            <ul className="list-disc pl-5 text-slate-700 space-y-2">
              <li>Procedural failures (wrong notices/timeframes, missing dispute steps)</li>
              <li>Amount disputes (miscalculation, unauthorized charges, bond not offset)</li>
              <li>Technical violations (listed before authority, missing verification/docs)</li>
              <li>Unfair practices (excessive fees, listing disputed amounts, refusing reasonable offers)</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Professional Help & Results */}
      <Section title="Professional Help for Rental Credit Damage">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-2">
          <Card title="When DIY Can Work" bullets={["Simple clerical error", "Clear procedural failure you can prove", "Recent listing with good documentation", "Single item on otherwise clean file"]} />
          <Card title="When to Get Professional Help" bullets={["Multiple defaults or complex disputes", "Court judgments involved", "Property management company disputes", "Major applications blocked by score"]} />
        </motion.div>
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-green-800">Our Rental Default Removal Success</h3>
          <ul className="mt-2 text-green-700 list-disc pl-5 space-y-1">
            <li>2,847 rental defaults removed since 2018</li>
            <li>94% success rate for rental‑related items</li>
            <li>Average removal time: 4–8 weeks</li>
            <li>Largest rental default removed: $8,400</li>
            <li>Most complex case: 7 rental defaults across 3 states</li>
          </ul>
        </div>

        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6">
          <Testimonial name="Jennifer K — Perth">
            "$2,100 bond dispute default removed in 5 weeks. Score jumped 165 points. Home loan approved next month. Worth every cent."
          </Testimonial>
          <Testimonial name="Mark & Susan L — Adelaide">
            "Collector listed $3,400 default after a property manager error. ACS used technical legal arguments — credit restored, investment property purchased."
          </Testimonial>
          <Testimonial name="David M — Melbourne">
            "Tribunal judgment for $4,800 break lease fee felt permanent. ACS found procedural errors and got it removed — life‑changing."
          </Testimonial>
        </motion.div>
      </Section>

      {/* Preventing Future Issues */}
      <Section title="Preventing Future Rental Credit Issues">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-2">
          <Card title="📋 Rental Payment Best Practices" bullets={["Automate rent and pay a few days early","Keep 6 months of payment records","Use traceable methods (no cash)","Have a buffer for processing delays"]} />
          <Card title="🗣️ Communication Excellence" bullets={["Respond to agents promptly","Put agreements in writing via email","Keep copies of all notices & correspondence","Maintain professional relationships"]} />
          <Card title="🧾 Documentation Habits" bullets={["Photo/video at entry & exit","Keep receipts for repairs/improvements","Document maintenance requests","Save payment confirmations & statements"]} />
          <Card title="🚪 Exit Strategy Planning" bullets={["Give proper notice per lease","Professional clean before inspection","Fix damage beyond fair wear & tear","Attend final inspection where possible"]} />
        </motion.div>

        <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-lg font-semibold text-blue">🔍 Ongoing Credit Monitoring</h3>
          <div className="grid gap-4 md:grid-cols-2 mt-2">
            <div>
              <h4 className="font-semibold text-slate-800">Monthly Checks</h4>
              <ul className="list-disc pl-5 text-slate-700">
                <li>Watch for new rental‑related listings</li>
                <li>Check for utility defaults from previous addresses</li>
                <li>Verify bond returns processed correctly</li>
                <li>Catch issues early before they escalate</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800">Quarterly Reviews</h4>
              <ul className="list-disc pl-5 text-slate-700">
                <li>Comprehensive file analysis & score tracking</li>
                <li>Dispute follow‑ups on any active matters</li>
                <li>Credit health optimisation plan</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Frequently Asked Questions — Rent & Credit Scores">
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

      <RelatedBlock
        currentSlug="/does-late-rent-payment-affect-credit-score-australia"
        heading="Related services & guides"
      />

      {/* Next Steps */}
      <Section title="Take Action on Rental Credit Issues">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">Don't let rental problems ruin your credit.</h3>
            <p>We help remove rental defaults and judgments, repair credit damage, and prevent future issues.</p>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-800">What We Can Do for You</h4>
              <ul className="space-y-2">
                {[
                  "Free analysis of rental‑related credit damage",
                  "Removal strategy for defaults and judgments",
                  "Legal challenge of improper listings",
                  "Score repair to overcome rental credit damage",
                  "Prevention advice for future rental situations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="h-5 w-5 shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
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
            <h3 className="text-lg font-semibold text-blue">Get Professional Help Today</h3>
            <p className="mt-3 text-slate-700">Free consultation about rental credit issues. Confidential and judgement‑free.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/free-credit-assessment" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors">Start My Rental Credit Assessment</Link>
              <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors">Call 0489 265 737</a>
            </div>
            <div className="mt-4 text-sm text-slate-600">
              <p>Email: <a href="mailto:help@australiancreditsolutions.com.au" className="underline text-blue-600">help@australiancreditsolutions.com.au</a></p>
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
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">Award‑winning specialists (2022, 2023, 2024)</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">No Win No Fee — Success‑based pricing</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">Licensed & regulated — ASIC ACL 532003</p></div>
          </div>
        </motion.div>
      </section>

      {/* Related Services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/does-late-rent-payment-affect-credit-score-australia" />
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

function PriceCard({ name, timeline, perfectFor, includes, featured = false }) {
  return (
    <motion.div
      variants={fadeIn}
      className={`relative rounded-xl border p-6 h-full flex flex-col ${
        featured ? "border-blue-300 bg-gradient-to-b from-blue-50 to-white shadow-lg" : "border-blue-100 bg-white shadow-sm"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-6 inline-block rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white shadow">Most Popular</span>
      )}
      <h3 className="text-lg font-semibold text-blue">{name}</h3>
      <p className="mt-1 text-sm text-slate-600">Timeline: {timeline}</p>
      <p className="mt-1 text-sm text-slate-600">Perfect for: {perfectFor}</p>
      <ul className="mt-3 space-y-2 text-sm text-slate-700 flex-grow">
        {includes.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <svg className="h-5 w-5 shrink-0 text-blue-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {i}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Link href="/free-credit-assessment" className="w-full rounded-lg bg-blue px-4 py-2 font-semibold text-white hover:bg-blue transition-colors text-sm text-center block">Start Now</Link>
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
      <figcaption className="mt-3 text-sm font-semibold text-blue">{name}</figcaption>
    </motion.figure>
  );
}