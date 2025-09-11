// File: app/best-credit-cleanup-company-australia/page.jsx
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

export default function BestCreditCleanupCompanyAustraliaPage() {
  // FAQs
  const faqData = [
    {
      question: "How do I know you're really the best credit cleanup company in Australia?",
      answer:
        "Check our credentials: 3 consecutive industry excellence awards, 98% success rate, 4.9/5 from 855+ verified reviews, ASIC ACL 532003, and lawyer-led leadership by Principal Lawyer Elisa Rothschild."
    },
    {
      question: "What makes you better than other credit cleanup companies?",
      answer:
        "We use qualified legal professionals and case-specific strategies. Results: 98% success vs ~30% industry average, timelines in 2–8 weeks vs 6–18 months, award-winning recognition, and transparent No Win No Fee pricing."
    },
    {
      question: "Why pay more for the best credit cleanup company?",
      answer:
        "Quality saves money. Clients commonly save tens of thousands via better finance rates. The investment typically pays for itself within days or weeks."
    },
    {
      question: "Can you guarantee results?",
      answer:
        "No one can guarantee outcomes (and claiming 100% would be unlawful). But our process, team, and strategy are best-in-class. On accepted cases we achieve 98% success."
    },
    {
      question: "What if my case isn't suitable?",
      answer:
        "We only take cases we believe we can win. If not suitable, we explain why and suggest alternatives. With No Win No Fee, you don't pay success fees unless items are removed."
    },
    {
      question: "How long have you been #1?",
      answer:
        "We have been recognized with consecutive industry excellence awards since 2022, with thousands of Australians helped and industry-leading client satisfaction."
    }
  ];

  // Structured data
  const structuredData = generateMinimalStructuredData({
    pathname: "/best-credit-cleanup-company-australia",
    title:
      "Best Credit Cleanup Company Australia | Fair Dinkum Results, No BS Service",
    description:
      "Australia's #1 rated credit cleanup company. 98% success rate, award-winning, lawyer-led strategies, No Win No Fee, fast 2–8 week timelines.",
    isService: true,
    serviceType: "Credit Cleanup"
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
                Best Credit Cleanup Company Australia
                <span className="block mt-2 text-blue">Fair Dinkum Results, No BS Service</span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  🏆 Australia's #1 rated credit cleanup company. 98% success rate. 3-year award streak. The real deal.
                </p>
                <p className="text-base text-gray-600">
                  Sick of dodgy operators and empty promises? We're Australia's award-winning #1 credit cleanup company with a proven track record. No templates. No fluff. Just real results from real professionals.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-8 relative flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center" role="group" aria-label="Primary actions">
                <Link href="/free-credit-assessment" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Get My Free Cleanup Assessment
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
                heading="Start with the Best"
                subheading="Award-Winning Specialists"
                paragraph="2-minute intake. Lawyer-led team reviews and responds. Transparent, no-BS pricing."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-base text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>98% Success Rate</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>3-Year Award Streak</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>ASIC Licensed ACL 532003</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/best-credit-cleanup-company-australia" />
      </div>

      {/* Awards */}
      <Section title="The Awards Don't Lie">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="2024 Industry Excellence" bullets={["Outstanding Client Results"]} />
          <Card title="2023 Industry Excellence" bullets={["Innovation in Credit Cleanup"]} />
          <Card title="2022 Industry Excellence" bullets={["Consumer Advocacy Excellence"]} />
        </div>
        <p className="mt-4 text-slate-700">Recognised as Australia's best credit cleanup company three years running.</p>
      </Section>

      {/* Numbers that matter */}
      <Section title="The Numbers That Matter">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="98% Success Rate" bullets={["On accepted cases"]} />
          <Card title="4.9/5 from 855+ Reviews" bullets={["Verified client feedback"]} />
          <Card title="3,247 Defaults Removed" bullets={["Since 2022"]} />
          <Card title="$52.3M Finance Unlocked" bullets={["For clients after cleanup"]} />
          <Card title="2–8 Week Timeline" bullets={["Fastest professional cleanup"]} />
          <Card title="ASIC Licensed" bullets={["ACL 532003"]} />
        </div>
      </Section>

      {/* Legal expertise */}
      <Section title="Real Legal Expertise">
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="What Sets Us Apart"
            bullets={[
              "Principal Lawyer: Elisa Rothschild (Monash)",
              "Qualified legal team – consumer law specialists",
              "Privacy Act 1988 & Credit Reporting Code strategy",
              "Professional authority respected by creditors",
              "Advanced techniques others don't know"
            ]}
          />
          <Card
            title="Why Lawyers, Not Templates"
            bullets={["Case-specific legal analysis", "Formal escalation pathways (OAIC, compliance)", "Permanent removal verification"]}
          />
        </div>
      </Section>

      {/* Testimonials */}
      <Section title="Real Aussies Share Why We're the Best">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Testimonial name="Michelle & Tony — Sydney Homeowners">
            "Tried three companies. Others took our money and did nothing. ACS cleaned $8,400 in defaults in 6 weeks. 3.1% mortgage approved. There's a reason they're the best."
          </Testimonial>
          <Testimonial name="James — Melbourne Property Investor">
            "Wasted 18 months with amateurs. ACS cleaned my credit in 4 weeks. Now I own investment properties in Springwood and Forest Lake. Real deal."
          </Testimonial>
          <Testimonial name="Sarah — Brisbane Business Owner">
            "Complex situation handled perfectly in 7 weeks. Equipment finance approved, staff doubled, profits up. Don't mess with second-rate operators."
          </Testimonial>
          <Testimonial name="David — Perth Mining Worker">
            "FIFO income confused others. ACS understood immediately and cleaned everything in 5 weeks. New ute financed and an investment property underway."
          </Testimonial>
        </motion.div>
      </Section>

      {/* Process */}
      <Section title="What the Best Credit Cleanup Company Actually Does">
        <motion.ol variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 space-y-4 text-slate-700">
          {[{
            title: "Phase 1: Forensic Credit Analysis (Days 1–3)",
            description: "Audit across Equifax, Experian, illion; legal compliance checks; procedural breach identification; verification failure analysis; strategic plan & realistic timeline."
          },{
            title: "Phase 2: Strategic Legal Cleanup (Weeks 1–4)",
            description: "Precision legal challenges citing specific breaches; consumer law applications; professional authority with compliance departments; strategic timing; multiple angles; escalation if needed."
          },{
            title: "Phase 3: Aggressive Cleanup Enforcement (Weeks 2–8)",
            description: "Daily monitoring; persistent follow-ups; compliance escalation; OAIC complaints prepared; deadline enforcement; permanent removal verification."
          }].map((step, i) => (
            <motion.li key={i} variants={fadeIn} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold">{i + 1}</div>
              <div><strong>{step.title}:</strong> {step.description}</div>
            </motion.li>
          ))}
        </motion.ol>
      </Section>

      {/* Comparison */}
      <Section title="Best Credit Cleanup Company vs The Competition">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Australian Credit Solutions (Best)" bullets={["98% success", "2–8 weeks", "Lawyer-led team", "Case-specific strategy", "ASIC licensed", "3× awards", "4.9/5 reviews", "No Win No Fee"]} />
          <Card title="Average Companies" bullets={["30–50% success", "6–18 months", "Customer service reps", "Template letters", "Often unlicensed", "Mixed reviews", "Hidden fees"]} />
          <Card title="Dodgy Operators (Avoid)" bullets={["5–15% success if any", "Take money & vanish", "No qualifications", "Spam letters / illegal tactics", "Fake awards/reviews", "Massive upfronts"]} />
        </div>
      </Section>

      {/* Spot the best */}
      <Section title="How to Spot Australia's Best Credit Cleanup Company">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Must-Have Credentials" bullets={["ASIC licence with ACL number shown (verify)", "Qualified legal team with practising lawyers", "Transparent, verifiable success rates", "Professional indemnity insurance", "Real industry recognition"]} />
          <Card title="Red Flags" bullets={["'ASIC registration' claims without ACL", "Won't show qualifications", "100% success promises", "No insurance details", "Fake awards/testimonials"]} />
        </div>
      </Section>

      {/* Success formula */}
      <Section title="The Best Credit Cleanup Company's Client Success Formula">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Strategic Case Selection" bullets={["Honest assessment", "Legal analysis", "Education & expectations", "Prioritise easy wins", "98% confidence before start"]} />
          <Card title="Professional Legal Strategy" bullets={["Tailored to each case", "Multiple legal angles", "Cited breaches", "Leverage deadlines", "Plan escalation"]} />
          <Card title="Relentless Execution" bullets={["Daily management", "Persistent follow-up", "Compliance relationships", "Multiple rounds until removal", "Permanent verification"]} />
        </div>
      </Section>

      {/* Investment & ROI */}
      <Section title="Investment in the Best Credit Cleanup Company">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Premium Service, Premium Value" bullets={["$330 admin fee", "Success fees only on removal", "No hidden costs", "Payment plans available"]} />
          <Card title="ROI Examples" bullets={["Sarah (Melbourne): $890 fees → $580k loan at 3.1%; ~$26,880/yr saved", "Mark (Brisbane): $1,180 fees → $250k equipment finance; ~$96,000/yr profit increase"]} />
        </div>
      </Section>

      {/* Why choose */}
      <Section title="Why Choose Australia's Best Credit Cleanup Company?">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Award-Winning Excellence" bullets={["3× Excellence Awards", "Highest rated", "Innovation leader", "Industry benchmark"]} />
          <Card title="Proven Track Record" bullets={["3,000+ Australians helped", "$52.3M unlocked", "855+ verified reviews", "98% success rate"]} />
          <Card title="Legal Expertise That Delivers" bullets={["Principal Lawyer leadership", "Consumer law specialists", "Respected by creditors", "Advanced legal techniques"]} />
          <Card title="Professional Protection" bullets={["ASIC ACL 532003", "Regulatory oversight", "Professional indemnity insurance", "Client safeguards"]} />
        </div>
      </Section>

      <RelatedBlock currentSlug="/best-credit-cleanup-company-australia" heading="Related services & guides" />

      {/* FAQs */}
      <Section title="Frequently Asked Questions: Best Credit Cleanup Company">
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
      <Section title="Your Financial Transformation Starts with the Best">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">Don't settle for second-best when your future is at stake.</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>98% success rate</li>
              <li>2–8 week timeline</li>
              <li>Lawyer-led legal expertise</li>
              <li>No Win No Fee with transparent pricing</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/free-credit-assessment" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors">Start with the Best</Link>
              <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors">Call 0489 265 737</a>
              <a href="mailto:help@australiancreditsolutions.com.au" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors">Email the Award Winners</a>
            </div>
          </div>
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg">
            <p className="text-slate-700">Australian Credit Solutions Pty Ltd | ASIC Australian Credit Licence ACL 532003</p>
            <p className="mt-2 text-slate-700">Australia's best credit cleanup company | Award-winning | Professional | Industry-leading results</p>
            <p className="mt-2 text-slate-700">
              ⭐⭐⭐⭐⭐ 4.9/5 from 855+ verified reviews
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Trust bar */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl bg-gradient-to-r from-blue to-blue p-6 text-white shadow-lg">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-base font-medium">Award-winning specialists</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-base font-medium">No Win No Fee — Transparent pricing</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-base font-medium">ASIC Licensed — ACL 532003</p></div>
          </div>
        </motion.div>
      </section>

      {/* Related Services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/best-credit-cleanup-company-australia" />
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
