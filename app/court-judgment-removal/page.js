// File: app/court-judgment-removal-australia/page.jsx
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function CourtJudgmentRemovalAustraliaPage() {
  // FAQs
  const faqData = [
    {
      question: "Can all court judgments be removed from credit files?",
      answer:
        "No. Only judgments with legal grounds for challenge can be removed or set aside. Valid judgments obtained properly usually stay for 5 years. Many judgments, however, have issues we can challenge."
    },
    {
      question: "What is the difference between removing and setting aside a judgment?",
      answer:
        "Setting aside cancels the original court judgment via the court (often with a new hearing). Removal means getting it off your credit file without court involvement (e.g., reporting errors or satisfied judgments)."
    },
    {
      question: "How much does it cost to set aside a court judgment?",
      answer:
        "Court filing fees vary by state (typically $100–$300). Solicitor work can be $2,000–$5,000+. Our service includes solicitor assistance where required at no extra cost beyond our quoted fees."
    },
    {
      question: "Will setting aside a judgment remove it from my credit file?",
      answer:
        "Yes. When a judgment is successfully set aside, it must be removed from your credit file. We also ensure Equifax, Experian, and Illion update their records."
    },
    {
      question: "Can I set aside a judgment if I owed the money?",
      answer:
        "Possibly. If there were procedural problems with how the judgment was obtained (e.g., defective service), you may have grounds even where the debt existed."
    },
    {
      question: "I paid the debt but the judgment still shows—can you fix that?",
      answer:
        "Yes. We can have court records updated to satisfied and ensure all bureaus reflect the correct status, or remove where appropriate."
    },
    {
      question: "How long does court judgment removal take?",
      answer:
        "Credit bureau challenges usually take 4–8 weeks. Court applications to set aside judgments can take 8–16 weeks depending on the court."
    },
    {
      question: "What evidence helps a challenge?",
      answer:
        "Proof of address changes, payment records, correspondence, evidence of defective service, medical/travel documentation, and any material supporting a genuine defence."
    }
  ];

  // Structured data
  const structuredData = generateMinimalStructuredData({
    pathname: "/court-judgment-removal-australia",
    title: "Court Judgment Removal Australia | Delete Judgment from Credit Report Fast",
    description:
      "Got a court judgment destroying your credit file? We remove incorrect judgments and set aside unfair court judgments. 98% success rate on accepted cases. Licensed specialists. No Win No Fee.",
    isService: true,
    serviceType: "Court Judgment Removal"
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-8 lg:py-12">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Court Judgment Removal Australia
                <span className="block mt-2 text-blue">Delete Judgment from Credit Report Fast</span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Got a court judgment destroying your credit file? We remove incorrect judgments and set aside unfair court judgments. 98% success rate when we take your case. Licensed specialists, No Win No Fee.
                </p>
                <p className="text-base text-gray-600">
                  A court judgment on your credit report can feel like a financial death sentence. Many can be removed or set aside—especially if they&apos;re incorrect, unfair, or didn&apos;t follow proper legal procedures.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-8 relative flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center" role="group" aria-label="Primary actions">
                <Link href="/free-credit-assessment" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Remove My Court Judgment Now
                </Link>
                <a href="tel:+61489265737" aria-label="Call Australian Credit Solutions on 0489 265 737" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-blue px-6 py-3 text-base font-semibold text-blue transition hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
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
                heading="Free Judgment Assessment"
                subheading="Lawyer-Led Review"
                paragraph="Tell us about your court judgment. We&apos;ll assess legal grounds fast and map a path to removal or setting aside."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-base text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>98% Success Rate (accepted cases)</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>No Win No Fee</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>ASIC Licensed ACL 532003</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/court-judgment-removal-australia" />
      </div>

      {/* Opening: Why it matters */}
      <Section title="Court Judgments Are Devastating—But Often Fixable">
        <p className="text-slate-700">
          Court judgments are the nuclear option of credit destruction—telling lenders you had to be taken to court. Yet many shouldn&apos;t be on files at all: no proper notice, wrong amounts, wrong person, paid but not updated, or default judgments that can be set aside.
        </p>
        <p className="mt-3 text-slate-700">
          We specialise in court judgment removal across Australia. We only take cases with genuine grounds. If your judgment is rock-solid, we&apos;ll say so. If there are errors or procedural faults, we know how to challenge them.
        </p>
      </Section>

      {/* Damage list */}
      <Section title="How Court Judgments Annihilate Your Credit">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Immediate Impacts" bullets={["Score drops 150–300 points","Lenders and landlords see a severe risk flag","Automatic policy rejections","Predatory interest rates (15–25%) if approved"]} />
          <Card title="Longer-Term Consequences" bullets={["Stays on file for 5 years","Employment & rental knockbacks","Business finance becomes impossible","Lost opportunities compound over time"]} />
        </div>
      </Section>

      {/* What we can remove */}
      <Section title="What Judgments We Can Remove or Set Aside">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Default Judgments (No Appearance)" bullets={["No proper notice of hearing","Served to an old address","Overseas/hospital at time of hearing","Genuine defence not presented"]} />
          <Card title="Procedurally Defective" bullets={["Wrong jurisdiction","Insufficient notice periods","Improper service of documents","Mandatory steps missed"]} />
          <Card title="Incorrect Judgment Information" bullets={["Wrong person named","Incorrect amount recorded","Debt already paid","Disputed/invalid debt pursued"]} />
          <Card title="Satisfied Not Updated / Limitation Issues" bullets={["Paid judgments not marked satisfied","Settlements not recorded","Limitation period expired (state-specific)","Acknowledgment/limitation pitfalls"]} />
        </div>
      </Section>

      {/* Process */}
      <Section title="Our Proven Court Judgment Removal Process">
        <motion.ol variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 space-y-4 text-slate-700">
          {[{
            title: "Step 1: Complete Judgment Analysis",
            description: "Obtain court details and bureau records (Equifax, Experian, Illion). Review service, timelines, documentation, and cross-bureau consistency."
          },{
            title: "Step 2: Legal Grounds Assessment",
            description: "Identify procedural defects, service issues, limitation defences, factual errors, or satisfaction problems."
          },{
            title: "Step 3: Evidence Gathering & Documentation",
            description: "Collect address change proofs, payment records, dispute documents, medical/travel records—whatever supports the challenge."
          },{
            title: "Step 4: Court Application or Bureau Challenge",
            description: "Prepare set-aside applications, lodge bureau challenges, negotiate with creditors, and brief solicitors where needed."
          },{
            title: "Step 5: Cleanup & Monitoring",
            description: "Ensure all bureaus update, monitor for reappearance, document removal, and guide credit rebuilding."
          }].map((step, i) => (
            <motion.li key={i} variants={fadeIn} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold">{i + 1}</div>
              <div><strong>{step.title}:</strong> {step.description}</div>
            </motion.li>
          ))}
        </motion.ol>
      </Section>

      {/* Success stories */}
      <Section title="Success Stories: Aussies Who Beat Court Judgments">
        <Testimonial name="Steve — Wollongong (Tradie)">
          "Judgment for $8,500. I had moved and never got papers. ACS proved defective service and got it set aside in 8 weeks. Equipment finance approved—business saved."
        </Testimonial>
        <Testimonial name="Maria — Adelaide (Identity Theft)">
          "$12,000 credit card judgment from identity theft. ACS worked with their solicitor to set it aside. Credit score jumped from 350 to 710. Home loan finally approved."
        </Testimonial>
        <Testimonial name="Rob — Darwin (Small Business)">
          "$15,000 judgment despite having paid the creditor before liquidation. ACS got the judgment marked satisfied and removed from my file. Business credit approvals returned."
        </Testimonial>
        <Testimonial name="Lisa — Hobart (Teacher)">
          "Judgment from telco served to my old address despite updating details. ACS showed defective service and had it set aside. Credit back to normal."
        </Testimonial>
      </Section>

      {/* Why choose us */}
      <Section title="Why Choose Us for Court Judgment Removal">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Legal Expertise that Matters" bullets={["Proper judgment law knowledge","Understand service/timelines/limits","98% success when we accept","We say no if grounds aren&apos;t there"]} />
          <Card title="Protected & Regulated" bullets={["No Win No Fee","Three years of industry awards (2022–2024)","ASIC licensed (ACL 532003)","National solicitor network for complex cases"]} />
          <Card title="Australia-Wide & Persistent" bullets={["All courts and tribunals","Multi-approach strategy","We keep pushing until resolved"]} />
        </div>
      </Section>

      {/* Service options / Pricing */}
      <Section title="Our Court Judgment Removal Service Options">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <PriceCard name="Emergency Judgment Removal" timeline="3–6 weeks" perfectFor="Urgent finance or settlement deadlines" includes={["Expedited court applications","Priority processing","Daily updates","Includes $330 admin fee"]} price="$1,650" featured />
          <PriceCard name="Standard Judgment Challenge" timeline="6–12 weeks" perfectFor="Complex cases, multiple grounds" includes={["Full legal assessment","Evidence compilation","Court applications if required","Includes $330 admin fee"]} price="$1,100" />
          <PriceCard name="Post-Payment Judgment Cleanup" timeline="4–8 weeks" perfectFor="Paid judgments not marked satisfied" includes={["Creditor negotiation","Court record updates","Bureau corrections","Includes $330 admin fee"]} price="$880" />
          <PriceCard name="Multiple Judgment Package" timeline="8–16 weeks" perfectFor="Multiple judgments, complex history" includes={["Coordinated strategy","Bulk applications","Custom plan","Quote based on count"]} price="Custom" />
        </div>
        <div className="mt-6 rounded-xl border border-dashed border-blue-300 bg-blue-50 p-4 text-base text-slate-600">
          <strong>No Win No Fee:</strong> You don&apos;t pay success fees unless we successfully remove or set aside your court judgment.
        </div>
      </Section>

      {/* After removal */}
      <Section title="What Happens After Your Court Judgment Gets Removed">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Immediate Benefits" bullets={["Score rebounds 150–300 points","Lenders reopen doors","Market-rate interest resumes","Employment/rental prospects improve"]} />
          <Card title="Business & Future Protection" bullets={["Business finance available again","Equipment/commercial credit returns","We provide prevention guidance","Apply with confidence"]} />
        </div>
      </Section>

      {/* Legal rights */}
      <Section title="Understanding Court Judgments: Your Legal Rights">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="How Judgments Work" bullets={["~80% are default judgments","Strict service requirements","Time limits to challenge (with exceptions)","Rights even after judgment"]} />
          <Card title="Why Professional Help Matters" bullets={["Courts are technical","Self-representation risks errors","We navigate the process effectively"]} />
        </div>
      </Section>

      <RelatedBlock currentSlug="/court-judgment-removal-australia" heading="Related services & guides" />

      {/* FAQs */}
      <Section title="Common Questions About Court Judgment Removal">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 space-y-4">
          {faqData.map((f, index) => (
            <motion.details key={`faq-${index}`} variants={fadeIn} className="group rounded-xl border border-blue-100 bg-white p-4 shadow-sm transition-all hover:shadow-md">
              <summary className="cursor-pointer select-none font-semibold text-blue group-open:text-blue flex items-center justify-between">
                <span>{f.question}</span>
                <svg className="h-5 w-5 transform group-open:rotate-180 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-3 text-base text-slate-700 pl-2 border-l-2 border-blue-200 ml-1">{f.answer}</p>
            </motion.details>
          ))}
        </motion.div>
      </Section>

      {/* Final CTA */}
      <Section title="Don&apos;t Let a Court Judgment Control Your Future">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">You have two options: wait 5 years—or fight it properly with legal expertise.</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Confidential phone assessment in ~20 minutes</li>
              <li>Full judgment investigation and legal grounds review</li>
              <li>Professional challenge process and monitoring</li>
              <li>98% success rate on accepted cases</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/free-credit-assessment" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors">Start Your Judgment Assessment</Link>
              <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors">Call 0489 265 737</a>
              <a href="mailto:help@australiancreditsolutions.com.au" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors">Email Our Legal Team</a>
            </div>
            <p className="text-base text-slate-600">We respond to urgent judgment assessments within 4 hours.</p>
          </div>
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg">
            <p className="text-slate-700">Australian Credit Solutions Pty Ltd | ASIC Australian Credit Licence ACL 532003</p>
            <p className="mt-2 text-slate-700">Three consecutive Industry Excellence Awards (2022–2024). Helping Australians fight unfair court judgments since 2019.</p>
          </motion.div>
        </div>
      </Section>

      {/* Trust bar */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl bg-gradient-to-r from-blue to-blue p-6 text-white shadow-lg">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-base font-medium">Lawyer-led strategies</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-base font-medium">No Win No Fee</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-base font-medium">ASIC Licensed — ACL 532003</p></div>
          </div>
        </motion.div>
      </section>

      {/* Related Services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/court-judgment-removal-australia" />
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
      <ul className="mt-3 space-y-2 text-base text-slate-700">
        {bullets.map((b, i) => (
          <li key={`${i}-${b}`} className="flex items-start gap-2">
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

function PriceCard({ name, timeline, perfectFor, includes, price, featured = false }) {
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
            <svg className="h-5 w-5 shrink-0 text-blue-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {i}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-base font-semibold text-slate-800">{price}</span>
        <Link href="/free-credit-assessment" className="rounded-lg bg-blue px-4 py-2 font-semibold text-white hover:bg-blue transition-colors text-base text-center block">
          Start Now
        </Link>
      </div>
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
      <figcaption className="mt-3 text-base font-semibold text-blue">{name}</figcaption>
    </motion.figure>
  );
}
