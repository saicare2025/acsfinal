// File: app/fix-my-credit-rating/page.jsx
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

export default function FixMyCreditRatingPage() {
  const faqData = [
    {
      question: "How quickly can you fix my credit rating?",
      answer:
        "It depends on your starting point and goals. Most clients see early improvement within 4–8 weeks and significant gains within 4–6 months.",
    },
    {
      question: "What rating do I need for a home loan?",
      answer:
        "Generally 600+ for many lenders, 650+ for competitive rates and 700+ for premium offers. We'll help you plan toward your target.",
    },
    {
      question: "Does checking my own score hurt my rating?",
      answer:
        "No. Checking your own report/score is a soft enquiry and doesn’t impact your rating. We recommend monthly monitoring.",
    },
    {
      question: "Can you guarantee improvement?",
      answer:
        "We only take cases when we’re confident of improvement. Our 96% success rate reflects careful case selection and proven methods.",
    },
    {
      question: "How much can my rating improve?",
      answer:
        "Average improvement is 180+ points, with some clients achieving 300+ depending on removals and optimisation.",
    },
    {
      question: "Is it worth fixing if my rating is really low?",
      answer:
        "Yes. The worse the starting point, the larger the savings from improvement. A 300‑point lift can save tens of thousands in interest.",
    },
  ];

  const structuredData = generateMinimalStructuredData({
    pathname: "/fix-my-credit-rating",
    title:
      "Fix My Credit Rating Australia | Stop Getting Rejected | Credit Rating Improvement",
    description:
      "End the rejections. Remove anchors, optimise utilisation, build positives and monitor for lasting results. Award‑winning specialists with payment‑smart plans.",
    isService: true,
    serviceType: "Credit Rating Improvement",
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
                Fix My Credit Rating — Australia
                <span className="block mt-2 text-blue">Stop Getting Rejected</span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  "Computer says no" getting old? Sick of being treated like a financial leper? It’s time to fix your credit rating and start getting approved like a normal human being.
                </p>
                <p className="text-base text-gray-600">
                  Home loans, car finance, credit cards, personal and business loans — approval depends on a number between 0–1200. We help you move that number up and unlock real options.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-8 relative flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center" role="group" aria-label="Primary actions">
                <Link href="#rating-form" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  🚀 Start My Rating Fix — Free Assessment
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
            <div className="w-full lg:w-1/3 relative" id="rating-form">
              <FooterForm
                heading="Free Credit Rating Assessment"
                subheading="Score‑Focused Strategy"
                paragraph="We analyse your Equifax/Experian/Illion score drivers, identify anchors and map a plan to lift your rating fast."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-sm text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>Holistic: remove negatives & build positives</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>Average client lift: 180+ points</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>ASIC ACL 532003</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/fix-my-credit-rating" />
      </div>

      {/* Brutal Truth */}
      <Section title="The Brutal Truth About Your Credit Rating">
        <p className="text-slate-700">If you’re googling “fix my credit rating”, you’re probably hearing this on repeat:</p>
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-2">
          <Card title="Common Rejections" bullets={["Home loan: rating doesn’t meet criteria","Car finance: 24% interest offers","Credit card: application declined","Personal loan: told to ask family","Business finance: personal rating blocks approval"]} />
          <Card title="Reality Check" bullets={["A 0–1200 number dictates approval","We help you move up the scale","Replace ‘no’ with competing offers","Save thousands via better rates"]} />
        </motion.div>
      </Section>

      {/* Credit Rating Scale */}
      <Section title="Your Credit Rating: The Silent Life Controller">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="font-semibold text-blue">Credit Rating Scale (Typical)</h3>
            <ul className="mt-2 space-y-2 text-slate-700">
              <li><strong>Excellent (800–1200):</strong> Red carpet, best rates, quick approvals</li>
              <li><strong>Very Good (700–799):</strong> Most loans approved at competitive rates</li>
              <li><strong>Good (625–699):</strong> Options available at average rates</li>
              <li><strong>Average (550–624):</strong> Limited options, higher rates</li>
              <li><strong>Below Average (0–549):</strong> Frequent rejections</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-blue">What Fixing Your Rating Really Means</h3>
            <ul className="mt-2 space-y-2 text-slate-700">
              <li>✅ Dignity and respect from lenders</li>
              <li>✅ Choice and negotiating power</li>
              <li>✅ Thousands saved annually</li>
              <li>✅ Access to investment and business opportunities</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Killers & Fix Phases */}
      <Section title="Why Your Rating Is Down (And How We Lift It)">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-2">
          <Card title="Credit Rating Killers" bullets={["Payment history: late/missed/defaults","Utilisation: maxed‑out cards","History length: closing old accounts","Credit mix: all cards, no loans","New enquiries: too many apps too fast"]} />
          <Card title="The Fix — Three Phases" bullets={["Phase 1 (Weeks 1–8): remove anchors — defaults, late listings, enquiries, admin errors","Phase 2 (Months 2–6): optimise utilisation, payment timing, account mix","Phase 3 (Months 6–12): diversify mix, maintain score, prep for major apps"]} />
        </motion.div>
      </Section>

      {/* Real Results */}
      <Section title="Real Aussies, Real Credit Rating Fixes">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Testimonial name="Darren — From 480 to 780 (QLD Electrician)">
            "Divorce wrecked my rating. Couldn’t finance a ute. ACS got me to 780 in 8 months. Now I run 3 trucks and am expanding across Queensland."
          </Testimonial>
          <Testimonial name="Lisa & James — From Rental Hell to Home Owners (Sydney)">
            "Rating was 520 from old defaults. After ACS lifted us to 720, we were approved for $850k in Parramatta. Kids finally have their own rooms."
          </Testimonial>
          <Testimonial name="Maria — From Dreams to Reality (Melbourne)">
            "Banks laughed at my café plan at 450. With ACS I reached 740. Now I own two cafés and I’m hiring."
          </Testimonial>
        </motion.div>
      </Section>

      {/* Why Us */}
      <Section title="Meet Australia’s Credit Rating Fix Specialists">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-3">
          <Card title="Why We’re Different" bullets={["Holistic: remove negatives + build positives","Score‑focused: every action targets rating","Results‑driven: avg +180 points","Aussie system experts","Support continues beyond the fix"]} />
          <Card title="Track Record" bullets={["Avg increase: 180 points","Fastest: +350 in 12 weeks","96% see improvement","4–8 months for big gains","Best: 290 → 850 in 14 months"]} />
          <Card title="What Makes Our Fix Work" bullets={["Diagnostic → Removal → Building → Monitoring","We optimise utilisation & payment timing","We improve credit mix & maintain results","We focus on the number that matters"]} />
        </motion.div>
      </Section>

      {/* Method */}
      <Section title="Our Proven Rating Improvement Method">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">Diagnostic & Removal</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
              <li>Complete file forensics; score driver breakdown</li>
              <li>Professional disputes; creditor negotiations</li>
              <li>Technical challenges & admin corrections</li>
            </ul>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">Building & Monitoring</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
              <li>Strategic positive credit establishment</li>
              <li>Payment timing & utilisation optimisation</li>
              <li>Mix improvement, monthly tracking, application prep</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Hidden Cost */}
      <Section title="The Hidden Cost of a Bad Credit Rating">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h4 className="font-semibold text-blue">Home Loan (\$500k)</h4>
            <p className="text-slate-700 mt-2"><strong>Excellent 3.5%:</strong> ~$2,280/mo<br/><strong>Poor 7.5%:</strong> ~$3,496/mo<br/>Difference: ~$1,216/mo · ~$437,760 over 30 years</p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h4 className="font-semibold text-blue">Car Finance (\$40k)</h4>
            <p className="text-slate-700 mt-2"><strong>Good 5%:</strong> ~$754/mo<br/><strong>Bad 18%:</strong> ~$1,012/mo<br/>Difference: ~$258/mo · ~$15,480 over 5 years</p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h4 className="font-semibold text-blue">Credit Card (\$10k)</h4>
            <p className="text-slate-700 mt-2">12% vs 25% APR → ~$1,300 more interest per year at high‑rate cards.</p>
          </div>
        </div>
      </Section>

      {/* DIY vs Pro */}
      <Section title="Why Most DIY Fixes Fail (and Professional Fixes Work)">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="font-semibold text-blue">Common DIY Mistakes</h3>
            <ul className="list-disc pl-5 text-slate-700 space-y-1 mt-2">
              <li>Applying everywhere → enquiry pile‑up</li>
              <li>Closing old accounts → worse utilisation & shorter history</li>
              <li>Paying everything to $0 → sub‑optimal (1–10% is ideal)</li>
              <li>Ignoring credit mix diversity</li>
              <li>No timeline around major applications</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-blue">Why Pros Win</h3>
            <ul className="list-disc pl-5 text-slate-700 space-y-1 mt-2">
              <li>Strategic timing for maximum score impact</li>
              <li>Technical knowledge of scoring algorithms & law</li>
              <li>Relationships with bureaus and creditors</li>
              <li>Monthly monitoring & ongoing optimisation</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Pricing & Guarantee */}
      <Section title="Your Credit Rating Fix Investment">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-blue">Transparent Pricing</h3>
            <ul className="mt-3 space-y-1 text-slate-700">
              <li>Admin fee: $330 (assessment & setup)</li>
              <li>Success fees: only when rating improves</li>
              <li>Monitoring: included for 12 months</li>
              <li>Typical investment: $1,200–$2,400</li>
            </ul>
            <p className="mt-3 text-slate-700">Conservative annual savings often exceed $11,000 via better rates — ROI 450%+ in year one.</p>
          </div>
          <div className="rounded-2xl border border-green-200 bg-green-50 p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-green-700">Our Guarantee</h3>
            <ul className="mt-3 space-y-1 text-slate-700">
              <li>No improvement → no success fees</li>
              <li>Money‑back if we can’t help</li>
              <li>12 months monitoring included</li>
              <li>Support continues until target achieved</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Next Steps */}
      <Section title="Ready to Fix Your Credit Rating?">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <p>Stop living like a financial outcast. Start getting approved like you deserve. Take control back from a system designed to keep you trapped.</p>
            <ul className="space-y-2">
              {["Free assessment of your current rating","Target score discussion based on goals","Custom strategy with realistic timeline","Transparent pricing — no hidden fees","Your decision — no pressure"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="h-5 w-5 shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-blue">Your Credit Rating Fix Starts Here</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#rating-form" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors">💻 60‑sec Online Assessment</Link>
              <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors">📞 Call 0489 265 737</a>
            </div>
            <div className="mt-4 text-sm text-slate-600">Email: <a href="mailto:help@australiancreditsolutions.com.au" className="underline text-blue-600">help@australiancreditsolutions.com.au</a></div>
          </motion.div>
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Frequently Asked Questions: Credit Rating Fixes">
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

      <RelatedBlock currentSlug="/fix-my-credit-rating" heading="Related services & guides" />

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
        <RelatedServices pathname="/fix-my-credit-rating" />
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