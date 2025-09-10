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

export default function ProfessionalCreditRepairServicesPage() {
  // FAQ data for structured data
  const faqData = [
    {
      question: "Why do professional services cost more?",
      answer:
        "Professional qualifications, insurance, licensing, and ongoing compliance aren&apos;t free. You&apos;re paying for expertise that gets results, not cheap templates that fail.",
    },
    {
      question: "How do I verify your professional credentials?",
      answer:
        "Search &quot;Australian Credit Solutions&quot; on ASIC Connect to verify our license ACL 532003. Check our awards independently. Read our professional reviews.",
    },
    {
      question: "What makes your disputes &quot;lawyer-drafted&quot;?",
      answer:
        "Our principal director is a qualified lawyer. Every dispute letter is reviewed by legal professionals and cites specific legislation and regulatory requirements.",
    },
    {
      question: "Do professionals guarantee results?",
      answer:
        "Real professionals only take cases where they&apos;re confident of success. Our 98% success rate reflects professional judgment in case selection.",
    },
    {
      question: "What if I&apos;ve already tried amateur services?",
      answer:
        "We regularly fix damage caused by amateur operators. Professional services can often salvage situations ruined by cowboys.",
    },
    {
      question: "How long do professional services take?",
      answer:
        "Professional processes take 2-8 weeks typically. We don&apos;t make amateur promises like &quot;everything removed in 30 days&quot; because that&apos;s impossible.",
    },
  ];

  // Generate structured data for this service page
  const structuredData = generateMinimalStructuredData({
    pathname: "/professional-credit-repair-services-australia",
    title:
      "Professional Credit Repair Services Australia | Licensed Specialists",
    description:
      "Professional credit repair services Australia. ASIC licensed specialists, lawyer-drafted disputes, 98% success rate. Don&apos;t trust amateurs with your financial future.",
    isService: true,
    serviceType: "Professional Credit Repair",
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
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
                Professional Credit Repair Services Australia
                <span className="block mt-2 text-blue">
                  Don&apos;t Trust Amateurs
                </span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Your credit file controls your financial future. When it&apos;s damaged, you <Link href="/get-credit-repair" className="text-blue-600 hover:text-blue-800 underline">Get Credit Repair</Link> need professional credit repair services – not cowboys, not amateurs, not DIY disasters.
                </p>

                <p className="text-base text-gray-600">
                  At Australian Credit Solutions, we&apos;re the only professional credit repair service in Australia to win industry excellence awards three consecutive years (2022, 2023, 2024). Our{" "}
                  <strong className="font-semibold text-blue">
                    ASIC licensed
                  </strong>{" "}
                  team provides lawyer-drafted disputes with a 98% success rate when we accept cases.
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
                  Get My Free Credit Assessment
                </Link>

                <a
                  href="tel:+61489265737"
                  aria-label="Call Australian Credit Solutions on 0489 265 737"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-blue px-6 py-3 text-base font-semibold text-blue transition hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Call 0489 265 737
                </a>

                {/* Decorative arrow (desktop/tablet only) */}
                <div
                  className="pointer-events-none hidden lg:block"
                  aria-hidden="true"
                >
                  <Image
                    src={ArrowIcon}
                    alt=""
                    width={220}
                    height={70}
                    loading="lazy"
                    className="select-none"
                    priority={false}
                  />
                </div>
                <div
                  className="pointer-events-none lg:hidden flex justify-center"
                  aria-hidden="true"
                >
                  <Image
                    src={ArrowIconM}
                    alt=""
                    width={200}
                    height={120}
                    loading="lazy"
                    className="select-none"
                    priority={false}
                  />
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-1/3 relative">
                      <RelatedBlock currentSlug="/professional-credit-repair-services-australia" heading="Related services & guides" />
        <FooterForm
                heading="Get My Free Professional Assessment"
                subheading="Licensed & Qualified"
                paragraph="Professional consultation: Don&apos;t trust amateurs with your financial future. Get a qualified assessment from ASIC licensed specialists."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-sm text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>
                  No Win No Fee
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>
                  Payment plans available
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>
                  Licensed ASIC ACL 532003
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ReviewsWidget />

      {/* Breadcrumb Navigation */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/professional-credit-repair-services-australia" />
      </div>

      {/* What Makes Credit Repair Services "Professional"? */}
      <Section title="What Makes Credit Repair Services &quot;Professional&quot;?">
        <p className="text-slate-700">
          Not everyone calling themselves a &quot;credit repair expert&quot; <Link href="/blog-details/how-can-i-increase-my-credit-score" className="text-blue-600 hover:text-blue-800 underline">How Can I Increase My Credit Score</Link> is actually professional. Here&apos;s what separates the pros from the pretenders:
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Professional Services Have:"
            bullets={[
              "✅ ASIC Australian Credit License (legally required)",
              "✅ Qualified legal professionals on staff",
              "✅ Professional indemnity insurance for your protection",
              "✅ Industry certifications and ongoing training",
              "✅ Compliance audits and regulatory oversight",
            ]}
          />
          <Card
            title="Amateur Services Have:"
            bullets={[
              "❌ No licensing (operating illegally)",
              "❌ No qualified staff",
              "❌ No insurance",
              "❌ No oversight",
              "❌ No accountability",
            ]}
          />
        </motion.div>
        <p className="mt-6 text-slate-700 font-semibold">
          Bottom line: Your <Link href="/default-removal-services-australia" className="text-blue-600 hover:text-blue-800 underline">Default Removal Services Australia</Link> financial future deserves professional handling.
        </p>
      </Section>

      {/* Meet Australia's Most Professional Credit Repair Service */}
      <Section title="Meet Australia's Most Professional Credit Repair Service">
        <p className="text-slate-700">
          Australian Credit Solutions – the only professional credit repair service <Link href="/blog-details/credit-repair-melbourne-getting-the-road-to-better-credit" className="text-blue-600 hover:text-blue-800 underline">Credit Repair Melbourne Getting The Road To Better Credit</Link> in Australia to win industry excellence awards three consecutive years (2022, 2023, 2024).
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="🏆 Professional Credentials"
            bullets={[
              "ASIC Licensed: ACL 532003 (verify this yourself)",
              "Industry Awards: 3 consecutive years",
              "Legal Team: Qualified lawyers draft every dispute",
              "Success Rate: 98% when we accept cases",
              "Reviews: 4.9/5 stars from 855+ verified clients",
            ]}
          />
          <Card
            title="⚖️ Meet Our Professional Team"
            bullets={[
              "Elisa Rothschild – Principal Lawyer & Director",
              "Monash University Law Graduate, ASIC License Holder",
              "&quot;Too many Australians get ripped off by amateur credit repair operations. We built this firm to provide genuine professional services with real qualifications, real results, and real accountability.&quot;",
            ]}
          />
        </motion.div>
      </Section>

      {/* Professional Process vs. Amateur Approach */}
      <Section title="Professional Process vs. Amateur Approach">
        <p className="text-slate-700">
          🔧 Our Professional Methodology
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="STAGE 1: Professional Assessment"
            bullets={[
              "Comprehensive credit file analysis by qualified staff",
              "Legal review of each disputed item",
              "Professional opinion on removal probability",
              "Written assessment with recommendations",
            ]}
          />
          <Card
            title="STAGE 2: Professional Legal Action"
            bullets={[
              "Lawyer-drafted dispute letters citing specific legislation",
              "Technical legal arguments credit providers can&apos;t ignore",
              "Professional negotiation with lender legal departments",
              "Escalation protocols when initial disputes fail",
            ]}
          />
          <Card
            title="STAGE 3: Professional Follow-Up"
            bullets={[
              "Compliance monitoring and enforcement",
              "Professional documentation of all outcomes",
              "Credit bureau verification and confirmation",
              "Ongoing support until matter resolution",
            ]}
          />
          <Card
            title="❌ What Amateurs Do Instead"
            bullets={[
              "❌ Generic templates copied from the internet",
              "❌ No legal basis for their arguments",
              "❌ Aggressive tactics that backfire",
              "❌ No follow-up or accountability",
              "❌ Disappear when things get difficult",
            ]}
          />
        </motion.div>
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-green-800">
            Real Example:
          </h3>
          <p className="mt-2 text-green-700">
            Sarah from Brisbane was on JobSeeker with three defaults totalling
            $2,400. Within 8 weeks, we had all three removed. She&apos;s now
            working part-time and got approved for a $15,000 car loan at 9.9%
            interest instead of the 24% she was being offered before.
          </p>
        </div>
      </Section>

      {/* Why Professionals Succeed Where Amateurs Fail */}
      <Section title="Why Professionals Succeed Where Amateurs Fail">
        <p className="text-slate-700">
          🔍 Understanding Credit Law
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Professional credit repair requires deep knowledge of:"
            bullets={[
              "Privacy Act 1988 (Commonwealth)",
              "National Credit Code regulations",
              "ASIC regulatory guidelines",
              "Credit reporting standards",
              "Lender compliance obligations",
            ]}
          />
          <Card
            title="🤝 Professional Relationships"
            bullets={[
              "Our professional team maintains relationships with:",
              "Credit bureau compliance departments",
              "Lender legal teams",
              "Industry regulatory bodies",
              "Professional associations",
            ]}
          />
          <Card
            title="🛠️ Professional Tools & Resources"
            bullets={[
              "Legal precedent databases",
              "Regulatory compliance software",
              "Professional document templates",
              "Industry intelligence networks",
              "Continuing education programs",
            ]}
          />
        </motion.div>
        <p className="mt-6 text-slate-700 font-semibold">
          Amateurs don&apos;t understand these laws. Professionals live them.
        </p>
        <p className="mt-3 text-slate-700 font-semibold">
          When you&apos;re known as professionals, doors open that stay closed for amateurs.
        </p>
        <p className="mt-3 text-slate-700 font-semibold">
          Amateurs use Google. Professionals use professional tools.
        </p>
      </Section>

      {/* Professional Results Speak for Themselves */}
      <Section title="Professional Results Speak for Themselves">
        <p className="text-slate-700">
          Real testimonials from clients who chose professional services:
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Testimonial name="Michael R, Sydney">
            &quot;Tried 2 &apos;budget&apos; services first – wasted 8 months and $3,000. ACS professionals removed my defaults in 4 weeks. You get what you pay for in this game.&quot;
          </Testimonial>
          <Testimonial name="Rebecca T, Melbourne (Legal Professional)">
            &quot;As a solicitor myself, I appreciate professional standards. ACS handled my credit repair with the same attention to detail I&apos;d expect from my own legal practice.&quot;
          </Testimonial>
          <Testimonial name="David & Sandra L, Brisbane">
            &quot;Night and day difference between ACS and the cowboys I tried first. Professional communication, professional results, professional service throughout.&quot;
          </Testimonial>
        </motion.div>
      </Section>

      {/* The Professional Advantage: What You Actually Get */}
      <Section title="The Professional Advantage: What You Actually Get">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card
            title="📋 Professional Documentation"
            bullets={[
              "✓ Written assessment with legal basis for each dispute",
              "✓ Formal engagement letter outlining services and fees",
              "✓ Regular progress reports with professional updates",
              "✓ Completion certificates documenting all outcomes",
              "✓ Professional recommendations for ongoing credit health",
            ]}
          />
          <Card
            title="🛡️ Professional Protection"
            bullets={[
              "✓ Professional indemnity insurance ($5M coverage)",
              "✓ ASIC regulatory oversight and compliance",
              "✓ Professional standards and ethical obligations",
              "✓ Formal complaints process through industry bodies",
              "✓ Legal recourse if professional standards aren&apos;t met",
            ]}
          />
          <Card
            title="🎯 Professional Outcomes"
            bullets={[
              "✓ Higher success rates (98% vs industry average 45%)",
              "✓ Faster resolution (professionals know what works)",
              "✓ Better relationships with credit providers",
              "✓ Long-term solutions not quick fixes",
              "✓ Professional reputation you can trust",
            ]}
          />
        </motion.div>
      </Section>

      {/* Professional Fees vs. Amateur Pricing */}
      <Section title="Professional Fees vs. Amateur Pricing">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2"
        >
          <Card
            title="💰 How Professional Services Price"
            bullets={[
              "Our Professional Fee Structure:",
              "Admin Fee: $330 (covers professional assessment)",
              "Success Fee: Only when items are professionally removed",
              "No Hidden Costs: Everything disclosed upfront",
              "Professional Guarantee: Money back if we can&apos;t help",
            ]}
          />
          <Card
            title="❌ How Amateurs Price (The Tricks)"
            bullets={[
              "❌ Bait pricing ($99 &quot;assessments&quot; then thousands in hidden fees)",
              "❌ Upfront demands (thousands paid, no guarantee)",
              "❌ Subscription traps (monthly fees forever)",
              "❌ No refund policies (your money disappears)",
            ]}
          />
        </motion.div>
        <div className="mt-6 rounded-xl border border-dashed border-blue-300 bg-blue-50 p-4 text-sm text-slate-600">
          <strong>Professional services cost more upfront but save money long-term.</strong>
        </div>
        <p className="mt-6 text-slate-700 font-semibold">
          Professional Standards Checklist
        </p>
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-green-800">
            Before engaging any credit repair service, demand proof of professional standards:
          </h3>
          <div className="mt-4 space-y-3 text-green-700">
            <p>□ ASIC License Number (verify independently)</p>
            <p>□ Professional qualifications of staff</p>
            <p>□ Professional indemnity insurance certificate</p>
            <p>□ Industry awards or recognition</p>
            <p>□ Professional association memberships</p>
            <p>□ Written service agreement with clear terms</p>
            <p>□ Professional references from previous clients</p>
            <p>□ Regulatory compliance certifications</p>
            <p className="font-bold text-lg">If they can&apos;t provide these, they&apos;re not professional.</p>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Frequently Asked Questions About Professional Services">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4"
        >
          {faqData.map((f, index) => (
            <motion.details
              key={`faq-${index}`}
              variants={fadeIn}
              className="group rounded-xl border border-blue-100 bg-white p-4 shadow-sm transition-all hover:shadow-md"
            >
              <summary className="cursor-pointer select-none font-semibold text-blue group-open:text-blue flex items-center justify-between">
                <span>{f.question}</span>
                <svg
                  className="h-5 w-5 transform group-open:rotate-180 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-sm text-slate-700 pl-2 border-l-2 border-blue-200 ml-1">
                {f.answer}
              </p>
            </motion.details>
          ))}
        </motion.div>
      </Section>

      {/* Next Steps */}
      <Section title="Ready for Professional Credit Repair?">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">
              Stop gambling with amateurs. Choose professional credit repair services that actually work.
            </h3>
            <p>Professional Consultation (Free)</p>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-800">
                What to Expect from Professionals:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 shrink-0 text-green-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Honest assessment of your situation
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 shrink-0 text-green-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Professional recommendations based on experience
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 shrink-0 text-green-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Clear explanation of the professional process
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 shrink-0 text-green-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Written quote with no hidden surprises
                </li>
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
            <h3 className="text-lg font-semibold text-blue">
              Don&apos;t Trust Amateurs with Your Financial Future
            </h3>
            <p className="mt-3 text-slate-700">
              Professional credit repair services aren&apos;t just better – they&apos;re the only choice that makes sense. When your credit controls your ability to:
            </p>
            <p className="mt-3 text-slate-700">
              Buy a home, Start a business, Get competitive finance, Build wealth
            </p>
            <p className="mt-3 text-slate-700">
              ...you need professionals handling the repair.
            </p>
            <p className="mt-3 text-slate-700 font-semibold">
              Call 0489 265 737 for professional credit repair services.
            </p>
            <p className="mt-3 text-slate-700 font-semibold">
              Professional consultations available Monday-Friday 9:00AM-6:00PM AEST.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/free-credit-assessment"
                className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors"
              >
                Get Professional Assessment
              </Link>
              <a
                href="tel:+61489265737"
                className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors"
              >
                Call 0489 265 737
              </a>
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
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-sm font-medium">
                Award-winning specialists (2022, 2023, 2024)
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-sm font-medium">
                No Win No Fee — Payment plans available
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-sm font-medium">
                Licensed & regulated — ASIC ACL 532003
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Related Services */}
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
      <h2 className="text-2xl font-bold tracking-tight text-blue sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 text-base leading-relaxed text-slate-800">
        {children}
      </div>
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
      <p className="mt-1 text-sm text-slate-600">Timeline: {timeline}</p>
      <p className="mt-1 text-sm text-slate-600">Perfect for: {perfectFor}</p>
      <ul className="mt-3 space-y-2 text-sm text-slate-700 flex-grow">
        {includes.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <svg
              className="h-5 w-5 shrink-0 text-blue-500 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {i}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Link
          href="/free-credit-assessment"
          className="w-full rounded-lg bg-blue px-4 py-2 font-semibold text-white hover:bg-blue transition-colors text-sm text-center block"
        >
          Start Now
        </Link>
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
      <figcaption className="mt-3 text-sm font-semibold text-blue">
        {name}
      </figcaption>
    </motion.figure>
  );
}
