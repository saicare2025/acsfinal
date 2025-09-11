// File: app/hardship-credit-repair/page.jsx
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

export default function HardshipCreditRepairPage() {
  const faqData = [
    {
      question: "I'm embarrassed about my situation. Will you judge me?",
      answer:
        "Never. Our team includes people who've experienced hardship personally. Every conversation is confidential and judgment‑free.",
    },
    {
      question: "Can I afford credit repair while on Centrelink payments?",
      answer:
        "Yes. We offer flexible payment plans starting from $25/week. Plans can be adjusted if your situation changes.",
    },
    {
      question: "Will fixing my credit help me get a job?",
      answer:
        "Often yes. Many employers run credit checks for financial, retail, government or management roles. Clean credit removes this barrier.",
    },
    {
      question: "Can COVID‑related defaults be removed?",
      answer:
        "Many pandemic‑era listings can be challenged due to hardship process failures. We assess each case individually.",
    },
    {
      question: "What if I can't afford any plan right now?",
      answer:
        "Speak with us anyway. We have community support options and may provide pro bono assistance or referrals to charities.",
    },
    {
      question: "When should I apply for new credit after hardship?",
      answer:
        "With clean credit you can often apply once income stabilises. Lenders typically prefer 3–6 months of stable employment for major loans.",
    },
  ];

  const structuredData = generateMinimalStructuredData({
    pathname: "/hardship-credit-repair",
    title:
      "Fix Credit After Job Loss or Hardship Australia | Compassionate Credit Repair",
    description:
      "Judgment‑free credit repair for job loss, illness, divorce, business failure and COVID impacts. Flexible payment plans, legal strategies and real recovery stories.",
    isService: true,
    serviceType: "Hardship Credit Repair",
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
                Fix Credit After Job Loss or Hardship — Australia
                <span className="block mt-2 text-blue">Everyone Deserves a Second Chance</span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  💙 Compassionate credit repair for tough times. Payment plans available. Judgment‑free support. We've been there too.
                </p>
                <p className="text-base text-gray-600">
                  Job loss, illness, divorce, business failure or COVID impacts can push anyone into financial hardship. Your past hardship doesn't define your future potential. We've helped thousands rebuild their credit — and their lives — after devastating setbacks.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-8 relative flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center" role="group" aria-label="Primary actions">
                <Link href="/free-credit-assessment" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  🤝 Get Free Assessment
                </Link>
                <a href="tel:+61489265737" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-blue px-6 py-3 text-base font-semibold text-blue transition hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  📞 Call 0489 265 737
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
            <div className="w-full lg:w-1/3 relative" id="hardship-form">
              <FooterForm
                heading="Free Hardship Assessment"
                subheading="Compassionate & Confidential"
                paragraph="We review Equifax/Experian/Illion, identify hardship‑related listings and map a removal strategy aligned to your budget."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-sm text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>Payment plans available</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>Success‑based fees on removals</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>ASIC ACL 532003</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/hardship-credit-repair" />
      </div>

      {/* Recovery Stories */}
      <Section title="Real Australians Share Their Recovery Stories">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Testimonial name="Michelle — Single Mum After Divorce (Brisbane)">
            "My ex left me with $12,000 in defaults I didn’t even know about. ACS offered a plan I could afford — $55/month — and removed everything in 8 weeks. Now I’m pre‑approved for a home loan. My kids will finally have their own rooms."
          </Testimonial>
          <Testimonial name="David — Retrenched Mining Worker (Perth)">
            "Lost my FIFO job when the mine closed. Defaults everywhere. ACS understood retrenchment and removed 4 defaults for $890 total with slow payments. Back working, credit clean, life on track."
          </Testimonial>
          <Testimonial name="Sarah — COVID Small Business Owner (Melbourne)">
            "COVID destroyed my café. ACS didn’t judge — they cleaned my credit in 6 weeks. New café is thriving now."
          </Testimonial>
          <Testimonial name="Robert — Illness Recovery (Adelaide)">
            "Cancer treatment meant 18 months off work. ACS spread payments over 6 months and removed defaults from my treatment period. Clean credit helped me rebuild."
          </Testimonial>
        </motion.div>
      </Section>

      {/* Common Hardship Situations */}
      <Section title="You're Not Alone: Common Hardship Situations We Help With">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <Card title="📉 Job Loss & Unemployment" bullets={["Retrenchment/Redundancy","Illness/Injury","Economic downturns","COVID impacts"]} />
          <Card title="💔 Family Breakdown" bullets={["Divorce/Separation","Domestic violence & financial abuse","Death of partner","Family crisis & caring responsibilities"]} />
          <Card title="🏥 Health & Medical Hardship" bullets={["Serious illness","Accidents & injuries","Mental health impacts","Medical expenses & ongoing care"]} />
          <Card title="🏢 Business Failure" bullets={["COVID closures","Economic factors","Natural disasters","Partnership disputes"]} />
        </motion.div>
      </Section>

      {/* Why Hardship Destroys Credit */}
      <Section title="Why Financial Hardship Destroys Credit (And Why That's Not Fair)">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="font-semibold text-blue">The Hardship Cycle</h3>
            <ol className="list-decimal pl-5 text-slate-700 space-y-1 mt-2">
              <li>Crisis hits → job loss, illness, divorce, business failure</li>
              <li>Income drops → obligations can’t be met</li>
              <li>Bills pile up → utilities, phones, loans</li>
              <li>Defaults listed → after 60+ days</li>
              <li>Credit destroyed → finance blocked</li>
              <li>Stuck in poverty → limited opportunity</li>
            </ol>
            <p className="mt-3 text-slate-700">One bad year can impact 5–7 years. Hardship provisions exist — but are often ignored. Credit repair after hardship isn’t just financial; it’s about justice and second chances.</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue">The System Punishes Hardship</h3>
            <ul className="list-disc pl-5 text-slate-700 space-y-1 mt-2">
              <li>Hardship rarely considered in listings</li>
              <li>Employers and landlords may discriminate</li>
              <li>Poverty cycle is perpetuated without access to credit</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* How We Help */}
      <Section title="How We Help Australians Fix Credit After Hardship">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-3">
          <Card title="🤝 Compassionate Approach" bullets={["No judgment","We recognise hardship isn't a character flaw","Patient and respectful support","We’ve been there too"]} />
          <Card title="💰 Flexible Payment Options" bullets={["Plans over 3–12 months","Hardship pricing","Success‑based fees","No interest; work to your budget"]} />
          <Card title="⚖️ Legal Strategies for Hardship" bullets={["Hardship provision breaches","Procedural failures","Consumer protection violations","Unconscionable conduct"]} />
        </motion.div>
      </Section>

      {/* Specific Hardship Situations */}
      <Section title="Specific Hardship Situations: How We Help">
        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h4 className="font-semibold text-blue">🚨 Job Loss & Unemployment Recovery</h4>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li className="font-medium">Common damage:</li>
              <li>Phone & utility defaults, credit card and personal loan defaults, car repossessions</li>
              <li className="font-medium mt-2">Our strategy:</li>
              <li>Challenge unemployment‑period listings; use hardship provisions; remove employment barriers</li>
              <li className="font-medium mt-2">Payment support:</li>
              <li>Plans aligned to Centrelink; defer success fees until re‑employed; priority processing</li>
            </ul>

            <h4 className="font-semibold text-blue mt-6">💔 Divorce & Separation Recovery</h4>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li className="font-medium">Common damage:</li>
              <li>Joint debt defaults, legal fee defaults, mortgage stress, hidden debts, financial abuse impacts</li>
              <li className="font-medium mt-2">Our strategy:</li>
              <li>Challenge joint debt listings you didn’t create; use family‑law context; domestic violence sensitivity; priority housing support</li>
            </ul>

            <h4 className="font-semibold text-blue mt-6">🏥 Illness & Medical Hardship</h4>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li className="font-medium">Common damage:</li>
              <li>Medical bill defaults, income loss listings, carer‑related late payments</li>
              <li className="font-medium mt-2">Our strategy:</li>
              <li>Medical hardship provisions; challenge listings during treatment; disability protections; flexible timelines</li>
            </ul>

            <h4 className="font-semibold text-blue mt-6">📈 Business Failure Recovery</h4>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li className="font-medium">Common damage:</li>
              <li>Business defaults affecting personal credit, director guarantees, commercial lease & equipment finance defaults</li>
              <li className="font-medium mt-2">Our strategy:</li>
              <li>Separate business from personal liability; use commercial law protections; clean personal credit for a fresh start</li>
            </ul>
          </div>
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-blue">Payment Plans & Hardship Support</h3>
            <p className="mt-3 text-slate-700">We never let money be a barrier to help.</p>
            <ul className="mt-3 text-slate-700 space-y-2">
              <li><strong>Option 1 — Standard Plan:</strong> $55/month over 6 months; success fees deferred; no interest; pauses allowed during hardship.</li>
              <li><strong>Option 2 — Hardship Reduced Rate:</strong> 25% discount with documentation; terms up to 12 months; reduced success fees.</li>
              <li><strong>Option 3 — Results‑First Plan:</strong> $0 upfront for qualified cases; fees payable only after successful removals.</li>
            </ul>
            <p className="mt-3 text-sm text-slate-600">Qualifying docs: Centrelink statements, medical certificates, termination letters, family‑law docs, business closure evidence.</p>
          </motion.div>
        </div>
      </Section>

      {/* Psychology of Recovery */}
      <Section title="The Psychology of Financial Recovery: You're Stronger Than You Think">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="font-semibold text-blue">Overcoming Hardship Shame</h3>
            <p className="mt-2 text-slate-700">Shame, guilt, fear and hopelessness are common — but surviving hardship shows strength. Seeking help is courageous and the first step to stability.</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue">Rebuilding Financial Confidence</h3>
            <ol className="list-decimal pl-5 text-slate-700 space-y-1 mt-2">
              <li>First default removed — proof recovery is possible</li>
              <li>Score improvement — tangible progress</li>
              <li>First finance approval — return to mainstream</li>
              <li>Stable housing — foundation for rebuilding</li>
              <li>Employment success — clean credit helps</li>
              <li>Future planning — long‑term goals become realistic</li>
            </ol>
          </div>
        </div>
      </Section>

      {/* Life After Repair */}
      <Section title="Life After Credit Repair: Real Recovery Stories">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Testimonial name="Mark — From Unemployment to Home Ownership (Melbourne)">
            "Company collapsed; 14 months unemployed; defaults everywhere. ACS removed 3 defaults for $780 ($130/month). New job in logistics, home loan approved, bought in Frankston. Redundancy led to homeownership."
          </Testimonial>
          <Testimonial name="Lisa — From Divorce Devastation to New Beginning (Perth)">
            "$8,500 in joint debt defaults. ACS offered a 6‑month plan; removed everything in 10 weeks. Refinanced at a lower rate and kept the family home — kids didn’t change schools."
          </Testimonial>
          <Testimonial name="Tony — From Medical Crisis to Business Success (Brisbane)">
            "Heart attack at 45; 8 months off work. ACS removed defaults gradually as I could afford payments. Clean credit helped me launch a consulting business employing three people."
          </Testimonial>
          <Testimonial name="Sarah — From COVID Closure to Café Empire (Adelaide)">
            "COVID closed my café. ACS worked within my budget and removed all defaults in 12 weeks. Now operating two locations."
          </Testimonial>
        </motion.div>
      </Section>

      {/* Practical Steps */}
      <Section title="Practical Steps: Starting Your Recovery Today">
        <div className="mt-2 grid gap-6 lg:grid-cols-3">
          <motion.div variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">Step 1: Stop the Hardship Spiral</h3>
            <ul className="list-disc pl-5 text-slate-700 mt-2 space-y-1">
              <li>Contact creditors about hardship before defaults occur</li>
              <li>Document hardship (medical certificates, termination letters)</li>
              <li>Apply for government support; seek free financial counselling</li>
              <li>Prioritise essentials: housing, utilities, transport</li>
            </ul>
          </motion.div>
          <motion.div variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">Step 2: Assess Credit Damage</h3>
            <ul className="list-disc pl-5 text-slate-700 mt-2 space-y-1">
              <li>Get Equifax, Experian and illion reports</li>
              <li>Identify defaults/late payments, note dates and context</li>
              <li>Gather evidence from your hardship period</li>
              <li>List how it affects housing, employment and finance</li>
            </ul>
          </motion.div>
          <motion.div variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">Step 3: Professional Recovery Strategy</h3>
            <ul className="list-disc pl-5 text-slate-700 mt-2 space-y-1">
              <li>Leverage legal expertise to challenge listings</li>
              <li>Use consumer protections during crisis periods</li>
              <li>Address creditor breaches of hardship provisions</li>
              <li>Choose a payment plan that respects your situation</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Frequently Asked Questions: Hardship Credit Repair">
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

      <RelatedBlock currentSlug="/hardship-credit-repair" heading="Related services & guides" />

      {/* Next Steps */}
      <Section title="Ready to Start Your Recovery? Every Journey Begins with One Step">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <p>To every Australian facing hardship: you are not defined by your credit score or the circumstances that brought you here. You are defined by your resilience and your courage to seek help. Your comeback story is waiting to be written.</p>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-800">Choose an option:</h4>
              <ul className="space-y-2">
                {[
                  "Free Hardship Assessment — honest advice, confidential",
                  "Speak with our compassionate team — judgment‑free conversation",
                  "Request hardship payment plan information — flexible options",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="h-5 w-5 shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-blue">Take the First Step Today</h3>
            <p className="mt-3 text-slate-700">Your future self is counting on you.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#hardship-form" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors">📲 Start Your Recovery — Free Assessment</Link>
              <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors">☎️ Call for Hope: 0489 265 737</a>
            </div>
            <div className="mt-4 text-sm text-slate-600">
              <p>Email: <a href="mailto:help@australiancreditsolutions.com.au" className="underline text-blue-600">help@australiancreditsolutions.com.au</a></p>
            </div>
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
        <RelatedServices pathname="/hardship-credit-repair" />
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
