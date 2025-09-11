// File: app/professional-credit-repair-services-australia/page.jsx
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

export default function ProfessionalCreditRepairPage() {
  const structuredData = generateMinimalStructuredData({
    pathname: "/professional-credit-repair-services-australia",
    title:
      "Professional Credit Repair Services Australia | Don’t Trust Amateurs",
    description:
      "Your credit file controls your financial future. Choose ASIC‑licensed, lawyer‑led professionals — not cowboys, not amateurs, not DIY disasters.",
    isService: true,
    serviceType: "Professional Credit Repair Services",
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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Professional Credit Repair Services Australia
                <span className="block mt-2 text-blue">Don’t Trust Amateurs</span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Your credit file controls your financial future. When it’s damaged, you need professional credit repair services — not cowboys, not amateurs, not DIY disasters.
                </p>
                <p className="text-base text-gray-600">
                  Choose ASIC‑licensed, lawyer‑led specialists who deliver results with accountability, compliance and care.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-8 relative flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center" role="group" aria-label="Primary actions">
                <Link href="#pro-form" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Get a Professional Assessment</Link>
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
            <div className="w-full lg:w-1/3 relative" id="pro-form">
              <FooterForm
                heading="Professional Credit Assessment"
                subheading="Lawyer‑Led · ASIC‑Licensed"
                paragraph="Comprehensive review across all three bureaus with a written opinion on removal probability and a realistic timeline."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-sm text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>ASIC ACL 532003</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>Lawyer‑drafted disputes</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>No Win No Fee</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/professional-credit-repair-services-australia" />
      </div>

      {/* What makes services professional */}
      <Section title="What Makes Credit Repair Services Professional?">
        <p className="text-slate-700">Not everyone calling themselves a “credit repair expert” is actually professional. Here’s what separates the pros from the pretenders.</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card
            title="Proper Qualifications & Licensing"
            bullets={[
              "ASIC Australian Credit License (legally required)",
              "Qualified legal professionals on staff",
              "Professional indemnity insurance for your protection",
              "Industry certifications and ongoing training",
              "Compliance audits and regulatory oversight",
            ]}
          />
          <Card
            title="Amateur Red Flags"
            bullets={[
              "No licensing (operating illegally)",
              "No qualified staff or insurance",
              "Overseas call centres, no oversight",
              "Upfront fees and false guarantees",
              "No accountability when things go wrong",
            ]}
          />
        </div>

        {/* Comparison */}
        <div className="mt-6 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-blue">Professional Services</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>ASIC licensed (ACL required)</li>
                <li>Lawyer‑drafted disputes</li>
                <li>Australian‑based team</li>
                <li>Industry awards & recognition</li>
                <li>Realistic timelines</li>
                <li>No Win No Fee protection</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue">Cowboy Operations</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>No license (illegal)</li>
                <li>Generic templates</li>
                <li>Overseas call centres</li>
                <li>No credentials</li>
                <li>False promises</li>
                <li>Upfront fees, no guarantee</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Meet ACS */}
      <Section title="Meet Australia’s Most Professional Credit Repair Service">
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Professional Credentials"
            bullets={[
              "ASIC Licensed: ACL 532003 (verify yourself)",
              "Industry awards 2022 • 2023 • 2024",
              "Lawyer‑drafted disputes on every file",
              "98% success rate when we accept cases",
              "4.9/5 from 855+ verified reviews",
            ]}
          />
          <Card
            title="Our Principal Lawyer"
            bullets={[
              "Elisa Rothschild — Principal Lawyer & Director",
              "Monash Law graduate, ASIC license holder",
              "Built ACS to replace amateur promises with professional accountability",
            ]}
          />
        </div>
      </Section>

      {/* Process */}
      <Section title="Professional Process vs Amateur Approach">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card
            title="Our Professional Methodology"
            bullets={[
              "Stage 1 — Assessment: comprehensive analysis, legal review, written recommendations",
              "Stage 2 — Legal Action: lawyer‑drafted disputes citing specific legislation, professional negotiation, escalation protocols",
              "Stage 3 — Follow‑Up: compliance monitoring, bureau verification, documented outcomes and support",
            ]}
          />
          <Card
            title="What Amateurs Do Instead"
            bullets={[
              "Generic templates copied online",
              "No legal basis, aggressive tactics that backfire",
              "No follow‑up, no accountability, disappear when it’s hard",
            ]}
          />
        </div>
      </Section>

      {/* Why pros succeed */}
      <Section title="Why Professionals Succeed Where Amateurs Fail">
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Credit Law Expertise"
            bullets={[
              "Privacy Act 1988 & Credit Reporting Code",
              "National Credit Code and ASIC guidelines",
              "Lender compliance obligations"
            ]}
          />
          <Card
            title="Professional Relationships"
            bullets={[
              "Bureau compliance departments",
              "Lender legal teams",
              "Regulatory bodies & associations",
            ]}
          />
          <Card
            title="Professional Tools"
            bullets={[
              "Legal precedent databases",
              "Compliance software & document systems",
              "Continuing legal education",
            ]}
          />
        </div>
      </Section>

      {/* Testimonials */}
      <Section title="Professional Results Speak for Themselves">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Testimonial name="Michael R — Sydney">
            “Tried two ‘budget’ services — wasted 8 months and $3,000. ACS removed my defaults in 4 weeks. You get what you pay for.”
          </Testimonial>
          <Testimonial name="Rebecca T — Melbourne (Solicitor)">
            “As a lawyer, I value professional standards. ACS handled my matter with the diligence I expect from my own practice.”
          </Testimonial>
          <Testimonial name="David & Sandra L — Brisbane">
            “Night‑and‑day difference from the cowboys. Professional communication, professional results, professional service.”
          </Testimonial>
        </motion.div>
      </Section>

      {/* Advantage */}
      <Section title="The Professional Advantage: What You Actually Get">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card
            title="Professional Documentation"
            bullets={[
              "Written assessment with legal basis for each dispute",
              "Formal engagement letter & clear fees",
              "Regular progress reports & completion documents",
              "Professional recommendations for long‑term credit health",
            ]}
          />
          <Card
            title="Professional Protection"
            bullets={[
              "Professional indemnity insurance",
              "ASIC oversight & compliance",
              "Ethical obligations & complaints pathways",
              "Real legal recourse if standards aren’t met",
            ]}
          />
          <Card
            title="Professional Outcomes"
            bullets={[
              "Higher success rates (98% for accepted cases)",
              "Faster resolution through methods that work",
              "Better lender relationships, longer‑term solutions",
            ]}
          />
        </div>
      </Section>

      {/* Fees */}
      <Section title="Professional Fees vs Amateur Pricing">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card
            title="Our Professional Fee Structure"
            bullets={[
              "Admin fee $330 — covers professional assessment",
              "Success fee only when items are removed",
              "No hidden costs — everything disclosed upfront",
              "Money‑back guarantee if we can’t help",
            ]}
          />
          <Card
            title="Amateur Pricing Tricks"
            bullets={[
              "Bait pricing, then thousands in hidden fees",
              "Upfront demands with no guarantees",
              "Subscription traps that never end",
              "No refunds; your money disappears",
            ]}
          />
        </div>
      </Section>

      {/* Checklist */}
      <Section title="Professional Standards Checklist">
        <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-slate-700">
            {[
              "ASIC license number (verify independently)",
              "Professional qualifications of staff",
              "Professional indemnity insurance certificate",
              "Awards or industry recognition",
              "Association memberships & compliance certs",
              "Written service agreement with clear terms",
              "References from previous clients",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <svg className="h-5 w-5 shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* CTA */}
      <Section title="Ready for Professional Credit Repair?">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-3 text-slate-700">
            <p>Stop gambling with amateurs. Speak to qualified professionals and get a written plan.</p>
            <ul className="space-y-2">
              {["📞 Call 0489 265 737 — speak to qualified professionals","✉️ Email help@australiancreditsolutions.com.au — request a written assessment","💻 Start your secure online evaluation — fast, confidential, professional"].map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <svg className="h-5 w-5 shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-blue">What to Expect from Professionals</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Honest assessment of your situation</li>
              <li>Professional recommendations based on experience</li>
              <li>Clear explanation of the professional process</li>
              <li>Written quote with no hidden surprises</li>
              <li>Realistic timeline and accountable delivery</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#pro-form" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors">Start Professional Assessment</Link>
              <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors">Call 0489 265 737</a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Frequently Asked Questions About Professional Services">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 space-y-4">
          {[
            { q: "Why do professional services cost more?", a: "Professional qualifications, insurance, licensing and compliance aren’t free — you’re paying for expertise that gets results, not cheap templates that fail." },
            { q: "How do I verify your credentials?", a: "Search ‘Australian Credit Solutions’ on ASIC Connect to verify ACL 532003, check awards independently and read reviews." },
            { q: "What makes your disputes lawyer‑drafted?", a: "Every dispute is reviewed by legal professionals and cites specific legislation and regulatory requirements." },
            { q: "Do professionals guarantee results?", a: "Real professionals only take cases they’re confident about. Our 98% success rate reflects professional case selection and method." },
            { q: "I tried amateurs — can you fix the damage?", a: "We regularly salvage situations ruined by cowboys. Professional processes and relationships often turn it around." },
            { q: "How long do professional services take?", a: "Typically 2–8 weeks. We won’t make impossible 30‑day promises because they’re not real." },
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

      <RelatedBlock currentSlug="/professional-credit-repair-services-australia" heading="Related services & guides" />

      {/* Trust bar */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl bg-gradient-to-r from-blue to-blue p-6 text-white shadow-lg">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">ASIC‑Licensed — ACL 532003</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">Award‑Winning 2022 • 2023 • 2024</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">No Win No Fee · 98% when accepted</p></div>
          </div>
        </motion.div>
      </section>

      {/* Related services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/professional-credit-repair-services-australia" />
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