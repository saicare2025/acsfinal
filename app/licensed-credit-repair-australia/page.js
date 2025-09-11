// File: app/licensed-credit-repair-australia/page.jsx
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

export default function LicensedCreditRepairAustraliaPage() {
  const faqData = [
    {
      question: "Why is ASIC licensing crucial for credit repair?",
      answer:
        "ASIC licensing enforces professional standards, legal compliance and consumer protection. Licensed operators maintain qualified staff, indemnity insurance and regulatory oversight; unlicensed outfits do not.",
    },
    {
      question: "How long does licensed credit repair take?",
      answer:
        "Simple matters (1–2 items) often resolve in 2–6 weeks; complex files (multiple items) typically 6–12 weeks. Emergency cases receive priority handling where possible.",
    },
    {
      question: "Can you guarantee results?",
      answer:
        "We accept cases when we’re confident in success using lawful strategies. Our 98% success rate for accepted matters reflects that selectivity.",
    },
    {
      question: "Will licensed credit repair hurt my score?",
      answer:
        "No. We challenge items on legal compliance grounds; successful removals typically add 50–200 points depending on your file.",
    },
    {
      question: "Is your service available nationwide?",
      answer:
        "Yes. Our ASIC licence covers all Australian states and territories; credit reporting is governed federally under the Privacy Act 1988.",
    },
  ];

  const structuredData = generateMinimalStructuredData({
    pathname: "/licensed-credit-repair-australia",
    title:
      "Licensed Credit Repair Australia | ASIC Regulated Specialists | 98% Success Rate",
    description:
      "Award‑winning, ASIC‑licensed credit repair. Legal compliance challenges that remove defaults, late payments, enquiries and more. No Win No Fee, insured and regulated.",
    isService: true,
    serviceType: "Licensed Credit Repair",
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
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
                Licensed Credit Repair Australia
                <span className="block mt-2 text-blue">ASIC Regulated Specialists · 98% Success Rate</span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Licensed credit repair in Australia has moved from the wild west to a regulated profession. Choose an ASIC‑licensed partner and you’re protected by legal compliance, professional standards and financial safeguards.
                </p>
                <p className="text-base text-gray-600">
                  Your financial future deserves more than amateur hour. ASIC licensing means qualified legal teams, indemnity insurance, regulatory oversight and proven methodologies that achieve outcomes others can’t.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-8 relative flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center" role="group" aria-label="Primary actions">
                <Link href="#licensed-form" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  🚀 Free Licensed Assessment
                </Link>
                <a href="tel:+61489265737" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-blue px-6 py-3 text-base font-semibold text-blue transition hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  📞 Call 0489 265 737
                </a>
                {/* Decorative arrows */}
                <div className="pointer-events-none hidden lg:block" aria-hidden="true">
                  <Image src={ArrowIcon} alt="" width={220} height={70} loading="lazy" />
                </div>
                <div className="pointer-events-none lg:hidden flex justify-center" aria-hidden="true">
                  <Image src={ArrowIconM} alt="" width={200} height={120} loading="lazy" />
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-1/3 relative" id="licensed-form">
              <FooterForm
                heading="Licensed Credit Repair Assessment"
                subheading="ASIC‑Compliant · Judgment‑Free"
                paragraph="We perform a forensic, law‑driven review of Equifax/Experian/illion and map compliant strategies for removals."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-sm text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>98% success rate when we accept cases</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>ASIC ACL 532003 · Indemnity insured</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>3‑year industry excellence streak</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/licensed-credit-repair-australia" />
      </div>

      {/* Results & Social Proof */}
      <Section title="Real Australians. Regulated Results.">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Testimonial name="Sarah — Melbourne">
            “I thought my $6,800 default meant I’d never own a home. ACS’s licensed team removed it in 5 weeks using legal strategies I never knew existed. Now I’m a homeowner in Melbourne’s inner east with a 3.2% mortgage!”
          </Testimonial>
          <Testimonial name="David — Brisbane">
            “Three defaults from my divorce were killing business finance. ACS’s ASIC‑licensed specialists wiped them all in 6 weeks. We just secured $480k equipment finance at premium rates.”
          </Testimonial>
          <Testimonial name="Mark — Perth">
            “As a FIFO worker on $140k, banks kept rejecting me. ACS’s licensed team removed late payments in 4 weeks. I now own investment properties in Perth and Adelaide.”
          </Testimonial>
        </motion.div>
      </Section>

      {/* Pain */}
      <Section title="The Brutal Truth About Bad Credit">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-2">
          <Card title="Daily Penalties" bullets={["Home‑loan rejections (even at 20% deposit)","Car finance at 15–18% instead of 3–5%","Credit card declines","Business finance blocked","Personal loan rates through the roof","Rental applications rejected","Employment checks causing setbacks"]} />
          <Card title="What Most Don’t Know" bullets={["Negatives don’t always stay 5–7 years","Consumer law creates compliant challenge pathways","Licensed teams exploit legal protections ethically","Unlicensed operators lack training and oversight"]} />
        </motion.div>
      </Section>

      {/* Why Licensed Wins */}
      <Section title="Why Licensed Credit Repair Wins Where Others Can’t">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">Award‑Winning</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
              <li>2024 Industry Excellence — Outstanding Client Results</li>
              <li>2023 Industry Excellence — Innovation in Credit Repair</li>
              <li>2022 Industry Excellence — Consumer Advocacy</li>
            </ul>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">Numbers That Matter</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
              <li>98% success rate (accepted cases)</li>
              <li>4.9/5 from 855+ verified reviews</li>
              <li>$28.4m finance approvals unlocked</li>
              <li>2,847 defaults removed since 2022</li>
            </ul>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">Licensed & Regulated</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
              <li>ASIC Australian Credit Licence — ACL 532003</li>
              <li>Qualified legal team (consumer law)</li>
              <li>Compliance‑first, ethical methods</li>
              <li>Professional indemnity insurance</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Unlicensed vs Licensed */}
      <Section title="Unlicensed Promises vs Licensed Protection">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Unlicensed Red Flags" bullets={["“100% guarantee” claims","“Remove anything” promises","Large upfront fees, no outcomes","Amateur legal tactics","No insurance or oversight"]} />
          <Card title="Your Licensed Safeguards" bullets={["Legal‑compliance expertise","Professional standards regulated by ASIC","Qualified legal team, not call‑centre scripts","Indemnity insurance — funds protected","Transparent No Win No Fee pricing"]} />
        </div>
      </Section>

      {/* Process */}
      <Section title="Our ASIC‑Compliant Process">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">Step 1 — Analysis (Day 1–3)</h3>
            <p className="mt-2 text-slate-700">Full retrieval of Equifax, Experian and illion files, then forensic legal review for: Privacy Act breaches, Credit Reporting Code violations, incorrect procedures, missing notices, verification failures.</p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">Step 2 — Legal Challenges (Week 1–4)</h3>
            <p className="mt-2 text-slate-700">Precision submissions under Privacy Act, Credit Reporting Code, ACL, OAIC guidance and related frameworks to target each listing’s weakest legal points.</p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">Step 3 — Enforcement (Week 2–8)</h3>
            <p className="mt-2 text-slate-700">Daily monitoring, escalation to compliance teams, OAIC complaints where required, enforcement of statutory timeframes and closure on removals.</p>
          </div>
        </div>
      </Section>

      {/* What we remove */}
      <Section title="What We Can Lawfully Remove">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-2">
          <Card title="Defaults ($150–$50,000+)" bullets={["Telco and utilities","Council and water","Rental bonds & PM fees","BNPL services","Cards & personal loans","Medical, legal and professional"]} />
          <Card title="Other Impacts" bullets={["Late‑payment histories","Hard enquiries (where unauthorised/incorrect)","Court judgments (lawful challenges)","Bankruptcy annotations & Part IX reviews"]} />
        </motion.div>
      </Section>

      {/* Success stories */}
      <Section title="Licensed Results That Change Lives">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Testimonial name="Michelle & James — Sydney">
            “Two $1,200 uni‑era defaults blocked every bank. ACS’s licensed team removed both in 7 weeks. We settled in Parramatta at 3.1% — the kids finally have a backyard.”
          </Testimonial>
          <Testimonial name="Tony — Perth">
            “Three downturn‑era defaults stopped equipment finance. ACS used consumer‑law provisions to clear them in 5 weeks. We added $300k machinery and hired eight staff.”
          </Testimonial>
          <Testimonial name="Rebecca — Melbourne">
            “Post‑divorce I had $4,500 in unknown defaults and constant rental knock‑backs. Privacy‑Act challenges cleared everything in 6 weeks. I’m pre‑approved for $650k and secured a great rental.”
          </Testimonial>
          <Testimonial name="Michael — Brisbane">
            “COVID late‑pays blocked investment finance. Licensed compliance challenges cleaned my file in 4 weeks. I’ve now bought two Olympic‑corridor properties with pre‑approvals.”
          </Testimonial>
        </motion.div>
      </Section>

      {/* Pricing */}
      <Section title="No Win, No Fee — ASIC‑Compliant Pricing">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-blue">What You Pay</h3>
            <ul className="mt-3 space-y-1 text-slate-700">
              <li>$330 administration fee (upfront)</li>
              <li>Success fee only when items are removed</li>
              <li>Free credit report review (value $65)</li>
              <li>Free score monitoring for 12 months (value $29/mo)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-green-200 bg-green-50 p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-green-700">What You Get — Even If Nothing Is Removed</h3>
            <ul className="mt-3 space-y-1 text-slate-700">
              <li>Complete 3‑bureau legal analysis</li>
              <li>Written report of improvement opportunities</li>
              <li>Score optimisation recommendations</li>
              <li>Ongoing support, alerts and education</li>
              <li>Licensed protection and indemnity cover</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* DIY vs Licensed */}
      <Section title="DIY Fails vs Licensed Results">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Why DIY Fails" bullets={["No grasp of the legal framework","No professional authority with providers","Insufficient training across Privacy Act / CRC / ACL / OAIC","Missed statutory timeframes kill cases"]} />
          <Card title="Why Licensed Works" bullets={["We invoke the right laws the right way","We speak to compliance teams, not queues","We escalate and enforce deadlines","Average client saves 18–24 months vs DIY"]} />
        </div>
      </Section>

      {/* Next steps */}
      <Section title="Ready for Licensed Credit Repair?">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <p>Every day you wait, interest costs compound and opportunities shrink. Get the regulated, insured pathway to a clean file and better finance.</p>
            <ul className="space-y-2">
              {["Free 60‑second licensed assessment","Speak to our ASIC‑licensed team","Upload files for a 24‑hour legal review"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="h-5 w-5 shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-blue">Take the First Step</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#licensed-form" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors">📲 Free Licensed Assessment</Link>
              <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors">☎️ Call 0489 265 737</a>
            </div>
            <div className="mt-4 text-sm text-slate-600">Email: <a href="mailto:help@australiancreditsolutions.com.au" className="underline text-blue-600">help@australiancreditsolutions.com.au</a></div>
          </motion.div>
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Frequently Asked Questions — Licensed Credit Repair">
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

      <RelatedBlock currentSlug="/licensed-credit-repair-australia" heading="Related services & guides" />

      {/* Footer trust bar */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl bg-gradient-to-r from-blue to-blue p-6 text-white shadow-lg">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">Award‑winning specialists (2022, 2023, 2024)</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">No Win No Fee — Licensed & insured</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">ASIC ACL 532003 — Regulated</p></div>
          </div>
        </motion.div>
      </section>

      {/* Related Services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/licensed-credit-repair-australia" />
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