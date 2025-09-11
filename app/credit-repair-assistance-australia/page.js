// File: app/credit-repair-assistance-australia/page.jsx
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

export default function CreditRepairAssistancePage() {
  const faqData = [
    {
      question: "What does your credit repair assistance include?",
      answer:
        "End‑to‑end support: full credit analysis across Equifax/Experian/illion, legal‑grade challenges, creditor negotiations, ongoing case management, and verified removals with future guidance."
    },
    {
      question: "How long will assistance take?",
      answer:
        "Simple cases 2–4 weeks; complex matters 4–8 weeks. Emergency pathways are available when deadlines apply."
    },
    {
      question: "Do you help Australia‑wide?",
      answer:
        "Yes. Credit reporting is national. We assist clients successfully in every state and territory."
    },
    {
      question: "What are the fees?",
      answer:
        "$330 admin to commence. Success fees apply only when items are removed. Transparent pricing; payment plans available."
    },
    {
      question: "Can you handle complex situations (business defaults, court items)?",
      answer:
        "Absolutely. Our lawyer‑led team specialises in complex files: business/commercial defaults, judgments, bankruptcy‑related items, and multi‑creditor cases."
    }
  ];

  const structuredData = generateMinimalStructuredData({
    pathname: "/credit-repair-assistance-australia",
    title: "Credit Repair Assistance Australia | Expert Help When You Need It Most",
    description:
      "Professional, lawyer‑led credit repair assistance. Award‑winning specialists, 98% success on accepted cases. We analyse, challenge, and clean your file—fast.",
    isService: true,
    serviceType: "Credit Repair Assistance"
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-8 lg:py-12">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Credit Repair Assistance Australia
                <span className="block mt-2 text-blue">Expert Help When You Need It Most</span>
              </h1>
              <p className="mt-6 text-lg text-gray-700 max-w-2xl">
                🤝 Professional assistance from award‑winning specialists. Real help that delivers results when credit problems feel overwhelming. We analyse, challenge and clean your file—fast.
              </p>

              {/* CTAs */}
              <div className="mt-8 relative flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center" role="group" aria-label="Primary actions">
                <Link href="/free-credit-assessment" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Get Free Assistance Consultation
                </Link>
                <a href="tel:+61489265737" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-blue px-6 py-3 text-base font-semibold text-blue transition hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Call 0489 265 737
                </a>
                <div className="pointer-events-none hidden lg:block" aria-hidden="true">
                  <Image src={ArrowIcon} alt="" width={220} height={70} loading="lazy" className="select-none" />
                </div>
                <div className="pointer-events-none lg:hidden flex justify-center" aria-hidden="true">
                  <Image src={ArrowIconM} alt="" width={200} height={120} loading="lazy" className="select-none" />
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-1/3">
              <FooterForm
                heading="Need Expert Assistance?"
                subheading="We’re here to help"
                paragraph="Upload your report securely. We’ll map a clear plan and start professional challenges within days."
              />
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/credit-repair-assistance-australia" />
      </div>

      {/* Social proof – Stories */}
      <Section title="Real Australians Share How Our Assistance Changed Their Lives">
        <Testimonial name="Michelle – Sydney Working Mum">
          "Divorce left my credit a mess. ACS explained everything and removed my defaults in 6 weeks. They genuinely cared."
        </Testimonial>
        <Testimonial name="James – Melbourne Small Business Owner">
          "Business issues wrecked my personal file. Their assistance fixed everything in 8 weeks. Finance access is back—business thriving."
        </Testimonial>
        <Testimonial name="Sarah – Brisbane Single Professional">
          "COVID late payments blocked my home loan. ACS removed them in 5 weeks. Loan approved—support was superb."
        </Testimonial>
        <Testimonial name="David – Perth Tradie">
          "Retrenchment caused multiple defaults. ACS cleared them in 7 weeks and taught me how to protect my credit. Life‑changing."
        </Testimonial>
      </Section>

      {/* Package overview */}
      <Section title="What Professional Credit Repair Assistance Actually Includes">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Phase 1: Assessment & Strategy" bullets={[
            "Reports from Equifax, Experian, illion",
            "Compliance review: Privacy Act & CRC",
            "Removal probability & impact ranking",
            "Plain‑English briefing + regular updates"
          ]} />
          <Card title="Phase 2: Professional Challenges" bullets={[
            "Legal‑grade letters citing specific breaches",
            "Compliance‑team engagement & escalation",
            "Daily monitoring + deadline enforcement",
            "Multi‑angle approach for complex items"
          ]} />
          <Card title="Phase 3: Results & Ongoing Support" bullets={[
            "Bureau‑wide removal verification",
            "Score tracking & report snapshots",
            "Documentation pack for your records",
            "Future monitoring & finance prep"
          ]} />
        </div>
      </Section>

      {/* >>> Related block placed mid‑page as requested <<< */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedBlock currentSlug="/credit-repair-assistance-australia" heading="Related services & guides" />
      </div>

      {/* Why we get results */}
      <Section title="Why Our Assistance Gets Results Others Can't">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Award‑Winning & Regulated" bullets={[
            "3× Industry Excellence Awards (2022–2024)",
            "98% success on accepted cases",
            "4.9/5 from 855+ reviews",
            "ASIC Licensed – ACL 532003"
          ]} />
          <Card title="Personalised, Lawyer‑Led" bullets={[
            "Principal Lawyer Elisa Rothschild",
            "Dedicated case manager",
            "Custom strategy for your file",
            "Flexible, compassionate support"
          ]} />
        </div>
      </Section>

      {/* Assistance types */}
      <Section title="Types of Assistance We Provide">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Consultation & Assessment" bullets={[
            "Free initial consult & options",
            "Full tri‑bureau analysis",
            "Legal compliance review",
            "Written strategy roadmap"
          ]} />
          <Card title="Legal Challenge Assistance" bullets={[
            "Targeted consumer‑law arguments",
            "Evidence compilation & timelines",
            "Negotiation with compliance teams",
            "Escalation & settlement where suitable"
          ]} />
          <Card title="Ongoing Support Assistance" bullets={[
            "Daily case monitoring & updates",
            "Results verification across bureaus",
            "Documentation & prevention guidance",
            "Future application preparation"
          ]} />
        </div>
      </Section>

      {/* Situational tracks */}
      <Section title="Credit Repair Assistance for Different Situations">
        <div className="grid gap-6 md:grid-cols-3">
          <PriceCard
            name="Emergency Assistance"
            timeline="2–4 weeks typically"
            perfectFor="Property settlements, employment checks, rental deadlines, urgent finance"
            includes={["Same‑day assessment","Priority handling & escalations","Daily updates","Direct specialist access"]}
            featured
          />
          <PriceCard
            name="Business Credit Assistance"
            timeline="4–8 weeks typically"
            perfectFor="Director guarantees, commercial leases, business closure cleanups"
            includes={["Commercial law understanding","Separate business/personal impacts","Provider relationships","Minimise personal file damage"]}
          />
          <PriceCard
            name="Hardship Assistance"
            timeline="Flexible"
            perfectFor="Job loss, medical events, divorce, family crises"
            includes={["Payment plans available","Gentle timelines","Hardship provision expertise","Recovery planning"]}
          />
        </div>
      </Section>

      {/* Value / ROI */}
      <Section title="The Value of Professional Assistance">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Transparent Investment" bullets={["$330 admin to begin","Success fees only on removals","Payment plans available","No hidden costs"]} />
          <Card title="Real‑World Returns" bullets={["Lower interest rates","Mortgage access","Employment & rental approvals","Mainstream finance restored"]} />
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Testimonial name="Sarah’s ROI – Melbourne">
            Assistance $890 total → score 320→780, $620k loan at 3.2%. ~$28,460 annual savings; 5‑year benefit ~$142k.
          </Testimonial>
          <Testimonial name="Mark’s ROI – Brisbane">
            Assistance $1,180 total → $300k equipment finance approved; +$12k/month capacity; 1‑year profit impact ~$144k.
          </Testimonial>
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Frequently Asked Questions: Credit Repair Assistance">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" className="mt-4 space-y-4">
          {faqData.map((f, index) => (
            <motion.details key={`faq-${index}`} variants={fadeIn} className="group rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
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
      <Section title="Get Professional Credit Repair Assistance Today">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">Free Assistance Consultation</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Initial assessment and success probability</li>
              <li>Clear process, timeline and transparent pricing</li>
              <li>Personal case manager assigned</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/free-credit-assessment" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue">Start My Assistance</Link>
              <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white">Call 0489 265 737</a>
              <a href="mailto:help@australiancreditsolutions.com.au" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white">Email the Team</a>
            </div>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg">
            <p>Australian Credit Solutions Pty Ltd • ASIC ACL 532003</p>
            <p className="mt-1">Award‑winning, lawyer‑led assistance • 98% success on accepted cases</p>
          </div>
        </div>
      </Section>

      {/* Trust bar */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} className="rounded-2xl bg-gradient-to-r from-blue to-blue p-6 text-white shadow-lg">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-base font-medium">3× Industry Excellence Awards (2022–2024)</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-base font-medium">Lawyer‑Led • No Win No Fee</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-base font-medium">Licensed & regulated — ASIC ACL 532003</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Related services can still appear near the end if desired */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/credit-repair-assistance-australia" />
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
      <ul className="mt-3 space-y-2 text-base text-slate-700">
        {bullets.map((b, i) => (
          <li key={`${title}-${i}`} className="flex items-start gap-2">
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
      <div className="mt-4">
        <Link href="/free-credit-assessment" className="w-full rounded-lg bg-blue px-4 py-2 font-semibold text-white hover:bg-blue transition-colors text-base text-center block">
          Start Now
        </Link>
      </div>
    </motion.div>
  );
}

function Testimonial({ name, children }) {
  return (
    <motion.figure variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md mb-4">
      <blockquote className="text-slate-700">{children}</blockquote>
      <figcaption className="mt-3 text-base font-semibold text-blue">{name}</figcaption>
    </motion.figure>
  );
}
