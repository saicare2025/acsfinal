// File: app/equifax-default-removal-australia/page.jsx
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

export default function EquifaxDefaultRemovalPage() {
  // FAQ data
  const faqData = [
    {
      question: "How long do defaults stay on Equifax?",
      answer:
        "Defaults remain on your Equifax file for 5 years from the date first listed unless successfully removed.",
    },
    {
      question: "Can you remove paid defaults from Equifax?",
      answer:
        "Yes. Paying a default doesn't remove it — it only changes the status to 'paid'. We can often remove paid defaults too.",
    },
    {
      question: "Will removing Equifax defaults improve my credit score?",
      answer:
        "Usually, yes. Equifax defaults can reduce scores by 100–300 points; removing them often triggers immediate score recovery.",
    },
    {
      question: "How quickly can you remove Equifax defaults?",
      answer:
        "Most cases are resolved within 3–7 weeks. Urgent cases may be prioritised and completed faster.",
    },
    {
      question: "What if Equifax rejects the dispute?",
      answer:
        "We escalate with advanced legal arguments, regulatory complaints (OAIC), direct creditor negotiations, and alternative strategies.",
    },
    {
      question: "Do you guarantee Equifax default removal?",
      answer:
        "We accept cases we're confident in. Our track record reflects careful case selection and a 98% success rate when we accept cases.",
    },
  ];

  const structuredData = generateMinimalStructuredData({
    pathname: "/equifax-default-removal-australia",
    title: "Equifax Default Removal Australia | Wipe Your Slate Clean",
    description:
      "Got defaults on your Equifax credit file destroying your finance applications? Our specialists have removed over 12,000 defaults with a 98% success rate.",
    isService: true,
    serviceType: "Credit repair service",
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
                Equifax Default Removal Australia
                <span className="block mt-2 text-blue">Wipe Your Slate Clean</span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Got defaults on your Equifax credit file destroying your finance applications? Our Equifax specialists have removed over <strong>12,000</strong> defaults with a <strong>98% success rate</strong>. Time to get your life back.
                </p>
                <ul className="text-base text-gray-700 list-disc pl-5">
                  <li>Home loans: "We can see defaults on your Equifax file"</li>
                  <li>Car finance: "Equifax shows payment defaults — application declined"</li>
                  <li>Credit cards: "Your Equifax credit history doesn't meet our criteria"</li>
                  <li>Personal loans: "Multiple Equifax defaults — too risky"</li>
                  <li>Business finance: "Personal defaults affect business applications"</li>
                </ul>
                <p className="text-base text-gray-600">
                  Brutal truth: <strong>one</strong> Equifax default can destroy your financial life for <strong>5 years</strong> — unless you remove it.
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
                  Start My Equifax Assessment
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
                heading="Equifax Default Removal Experts"
                subheading="Fast, discreet help"
                paragraph="We analyse your Equifax file, identify defaults, and map a removal strategy with lawyer‑drafted disputes."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-sm text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>98% success on accepted cases</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>12,247 defaults removed since 2018</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>ASIC ACL 532003</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/equifax-default-removal-australia" />
      </div>

      {/* Understanding Your Equifax Default */}
      <Section title="Understanding Your Equifax Default">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="📊 What Equifax Defaults Look Like"
            bullets={[
              "Creditor, amount, date listed, status, and comments",
              "Stay visible for 5 years from listing date",
              "Can drop scores by 200+ points and trigger automatic rejections",
            ]}
          />
          <Card
            title="🎯 Why Equifax Defaults Hit Harder"
            bullets={[
              "Equifax is Australia's largest bureau",
              "Used by major banks, finance companies, card providers, and business lenders",
              "If it's on Equifax, almost every lender will see it",
            ]}
          />
        </motion.div>

        <div className="mt-6 rounded-xl border border-blue-100 bg-white p-6">
          <h3 className="text-lg font-semibold text-blue">Default Listing Example</h3>
          <div className="mt-3 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
            <ul className="space-y-1">
              <li><strong>Creditor:</strong> Telstra Corporation Ltd</li>
              <li><strong>Amount:</strong> $847</li>
              <li><strong>Date Listed:</strong> 15/03/2019</li>
              <li><strong>Status:</strong> Unpaid Default</li>
            </ul>
            <p className="md:pl-6"><strong>Comment:</strong> "Payment default — account closed"</p>
          </div>
        </div>
      </Section>

      {/* Our Equifax Default Removal Expertise */}
      <Section title="Our Equifax Default Removal Expertise">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-2">
          <Card title="🏆 Australia's Equifax Specialists" bullets={[
            "12,247 defaults removed since 2018",
            "98% success rate on accepted cases",
            "Average removal time: 3–7 weeks",
            "Largest default removed: $47,000",
            "Fastest removal: 8 days",
          ]} />
          <Card title="⚖️ Why Our Approach Works" bullets={[
            "Equifax‑specific dispute processes and timelines",
            "Direct relationships with Equifax compliance",
            "Knowledge of Equifax listing criteria and system limitations",
            "Lawyer‑drafted disputes and Privacy Act compliance",
            "Regulatory pressure via ASIC and OAIC when required",
          ]} />
        </motion.div>
      </Section>

      {/* Common Equifax Defaults We Remove */}
      <Section title="Common Equifax Defaults We Remove">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-2">
          <Card title="💸 Telecommunication Defaults" bullets={[
            "Telstra, Optus, Vodafone, TPG",
            "Plan cancellations, disputed charges, unreturned devices",
            "Success rate ~97% (frequent technical errors)",
          ]} />
          <Card title="💡 Utility Defaults" bullets={[
            "Electricity, gas, water, council rates",
            "Transfer issues, meter errors, notification failures",
            "Success rate ~95% (procedural flaws)",
          ]} />
          <Card title="💳 Credit Card & BNPL Defaults" bullets={[
            "CBA, ANZ, Westpac, NAB; store cards; Afterpay/Zip",
            "Personal loan defaults",
            "Success rate ~92% (complex legal arguments)",
          ]} />
          <Card title="🏠 Property‑Related Defaults" bullets={[
            "Rental bond, real estate commission, property management fees, strata levies",
            "Often involve contract interpretation issues",
            "Success rate ~89%",
          ]} />
        </motion.div>
      </Section>

      {/* Process */}
      <Section title="Our Equifax Default Removal Process">
        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4 text-slate-700"
        >
          {[
            {
              title: "PHASE 1: Equifax File Analysis (Days 1–2)",
              description:
                "Request/obtain your Equifax file, analyse each default, identify technical errors, research creditor obligations, and build a custom strategy.",
            },
            {
              title: "PHASE 2: Strategic Dispute Preparation (Days 3–5)",
              description:
                "Lawyer‑drafted disputes for each default: Privacy Act challenges, procedural and calculation disputes, and full evidence packages.",
            },
            {
              title: "PHASE 3: Equifax Dispute Processing (Weeks 1–4)",
              description:
                "Equifax investigates within ~30 days; we monitor weekly, follow up, submit additional evidence, and escalate if needed.",
            },
            {
              title: "PHASE 4: Resolution & Verification (Weeks 4–6)",
              description:
                "On success: default removed, report updated, confirmation provided; if not, we escalate (OAIC, creditor negotiation, alternative strategies).",
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
      </Section>

      {/* Real Results */}
      <Section title="Real Equifax Default Removals">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Testimonial name="Michael R — Sydney Business Owner ($23,000 Telstra)">
            "Had a $23,000 Telstra default on Equifax from a business account dispute. Three other companies failed to remove it. ACS removed it in 4 weeks using legal arguments the others didn't know. Home loan approved the next month."
          </Testimonial>
          <Testimonial name="Sarah T — Melbourne (Multiple Utilities)">
            "Divorce left me with 6 utility defaults on my Equifax file totalling $4,200. Couldn't get rental applications approved. ACS removed all 6 defaults in 6 weeks. Now I own my place instead of renting."
          </Testimonial>
          <Testimonial name="David L — Brisbane Tradie (Credit Card)">
            "$8,400 NAB credit card default on Equifax killed my car finance applications. ACS removed it in 5 weeks. Driving a new ute and business is booming."
          </Testimonial>
          <Testimonial name="Jennifer K — Perth (Store Card)">
            "Harvey Norman default of $2,100 on Equifax for furniture I returned. They wouldn't listen to me. ACS lawyers got it removed in 3 weeks. Credit score jumped 180 points immediately."
          </Testimonial>
        </motion.div>
      </Section>

      {/* Why Often Removable */}
      <Section title="Why Equifax Defaults Are Often Removable">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-6 md:grid-cols-2"
        >
          <Card title="🔍 Common Equifax Default Errors" bullets={[
            "Procedural failures (wrong address, insufficient time, missing dispute steps)",
            "Amount discrepancies (incorrect calculations, unauthorised fees, missed payments)",
            "Technical violations (listed before authority, internal process failures)",
            "Documentation issues (missing records, lost paperwork, inadequate proof)",
          ]} />
          <Card title="⚖️ Legal Grounds for Removal" bullets={[
            "Privacy Act 1988 — accuracy, correction rights, prescribed procedures",
            "National Credit Code — notices, timing, dispute resolution",
            "ASIC guidance — reporting standards and investigation duties",
          ]} />
        </motion.div>
      </Section>

      {/* Pricing */}
      <Section title="Equifax Default Removal Investment">
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <PriceCard
            name="Single Equifax Default"
            timeline="3–7 weeks typical"
            perfectFor="One listing blocking finance"
            includes={[
              "Assessment $330",
              "Success fee $990 if removed",
              "Total $1,320 on success",
              "No removal → no success fee",
            ]}
            featured
          />
          <PriceCard
            name="Two Equifax Defaults"
            timeline="3–7 weeks typical"
            perfectFor="Two listings across lenders"
            includes={[
              "Assessment $330",
              "1st success fee $990",
              "2nd success fee $841.50 (15% off)",
              "Total $2,161.50 if both removed",
            ]}
          />
          <PriceCard
            name="Three+ Equifax Defaults"
            timeline="4–8 weeks typical"
            perfectFor="Multiple listings and complex disputes"
            includes={[
              "Assessment $330",
              "First success fee $990",
              "Additional defaults $841.50 each",
              "Significant multi‑default savings",
            ]}
          />
        </div>

        <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-lg font-semibold text-blue">📊 Return on Investment</h3>
          <div className="grid gap-4 md:grid-cols-2 mt-2 text-slate-700">
            <div>
              <h4 className="font-semibold">Home Loan Example ($500k)</h4>
              <ul className="list-disc pl-5">
                <li>Bad credit rate 7.5% ≈ $3,496/mo</li>
                <li>Good credit rate 3.5% ≈ $2,245/mo</li>
                <li><strong>Monthly saving: ≈ $1,251</strong></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Car Finance Example ($40k)</h4>
              <ul className="list-disc pl-5">
                <li>Bad credit rate 18% ≈ $1,012/mo</li>
                <li>Good credit rate 5% ≈ $754/mo</li>
                <li><strong>Monthly saving: ≈ $258</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section title="Why Choose Our Equifax Specialists">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-2">
          <Card title="🏆 Equifax‑Specific Advantages" bullets={[
            "Established channels with Equifax compliance",
            "Deep knowledge of internal processes and timelines",
            "Experience with escalation procedures and system limits",
          ]} />
          <Card title="⚙️ Technical Equifax Expertise" bullets={[
            "Dispute format and submission requirements",
            "Investigation procedures and standards",
            "Data correction and deletion processes",
            "Reporting timelines and update cycles",
          ]} />
          <Card title="⚖️ Legal Advantage" bullets={[
            "Lawyer‑drafted disputes taken seriously",
            "Technical arguments Equifax must investigate",
            "Regulatory compliance enforcement",
          ]} />
          <Card title="✅ Our Equifax Guarantee" bullets={[
            "No removal, no success fees (assessment covers investigation)",
            "Money‑back guarantee if we can't help at all",
            "Weekly updates and direct escalation if needed",
          ]} />
        </motion.div>
      </Section>

      {/* Getting Started */}
      <Section title="Getting Started with Equifax Default Removal">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">📋 Information We Need</h3>
            <ul className="space-y-2 list-disc pl-5">
              {[
                "Your current Equifax credit file (we can obtain if needed)",
                "Details of each default you want removed",
                "Correspondence with original creditors",
                "Payment history and account information",
                "Circumstances around each default",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h4 className="font-semibold text-blue">Supporting Documentation (if available)</h4>
            <ul className="space-y-2 list-disc pl-5">
              {[
                "Default notices and communications",
                "Account statements and payment records",
                "Dispute correspondence and responses",
                "Relevant contracts and agreements",
                "Evidence of payments or settlements",
              ].map((item) => (
                <li key={item}>{item}</li>
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
            <h3 className="text-lg font-semibold text-blue">🚀 Free Equifax Assessment Process</h3>
            <ol className="list-decimal pl-5 mt-3 space-y-2">
              <li><strong>Step 1: Contact Us</strong> — Call 0489 265 737, email <a href="mailto:help@australiancreditsolutions.com.au" className="underline text-blue-600">help@australiancreditsolutions.com.au</a>, or complete our online assessment form.</li>
              <li><strong>Step 2: File Review</strong> — We obtain/review your Equifax file, analyse each default, and assess removal probability.</li>
              <li><strong>Step 3: Strategy Discussion</strong> — We explain opportunities, timelines, and transparent pricing. Your decision — no pressure.</li>
            </ol>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/free-credit-assessment" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors">Start Your Equifax Removal</Link>
              <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors">Call 0489 265 737</a>
            </div>
            <div className="mt-4 text-sm text-slate-600">
              <p>Email: <a href="mailto:help@australiancreditsolutions.com.au" className="underline text-blue-600">help@australiancreditsolutions.com.au</a></p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Frequently Asked Questions — Equifax Defaults">
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
        currentSlug="/equifax-default-removal-australia"
        heading="Related services & guides"
      />

      {/* Next Steps */}
      <Section title="Ready to Remove Your Equifax Defaults?">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">Don't let Equifax defaults control your financial future.</h3>
            <p>Get them removed by Australia's specialists — fast, discreet, and compliant.</p>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-800">What Happens Next</h4>
              <ul className="space-y-2">
                {[
                  "Free analysis of your Equifax defaults",
                  "Honest assessment of removal chances",
                  "Custom strategy and clear timeline",
                  "Transparent pricing — no surprises",
                  "Your choice to proceed — no obligations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="h-5 w-5 shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <h4 className="font-semibold text-slate-800 mt-4">Don't Wait</h4>
              <p>Defaults can get harder to remove over time — act while options are strongest.</p>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-blue">Start Your Equifax Default Removal Today</h3>
            <p className="mt-3 text-slate-700">Free consultation with Equifax specialists. Confidential and judgement‑free.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/free-credit-assessment" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors">Start Now</Link>
              <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors">Call 0489 265 737</a>
            </div>
            <div className="mt-4 text-sm text-slate-600">
              <p>Australian Credit Solutions Pty Ltd | ASIC ACL 532003</p>
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
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">98% success on accepted Equifax cases</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">No Win No Fee — Success‑based pricing</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">Licensed & regulated — ASIC ACL 532003</p></div>
          </div>
        </motion.div>
      </section>

      {/* Related Services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/equifax-default-removal-australia" />
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
