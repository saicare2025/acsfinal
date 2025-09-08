// File: app/default-removal-services/page.jsx
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

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function DefaultRemovalServicesPage() {
  // FAQ data for structured data
  const faqData = [
    {
      question: "How much does default removal cost?",
      answer: "Our fees vary by complexity, but we&apos;re transparent upfront. No Win No Fee policy applies (admin fee $330 regardless of outcome). Most clients find the interest savings from better rates pay for our service within months."
    },
    {
      question: "Can you guarantee removal?",
      answer: "We only take cases where we&apos;re confident of success. Our three-year award streak speaks for itself - we don&apos;t win awards for failing clients."
    },
    {
      question: "How long do defaults stay on credit files?",
      answer: "Defaults remain for 5 years from the date listed - unless removed through our process. That&apos;s potentially 5 years of higher interest rates and limited finance options."
    },
    {
      question: "What if I&apos;ve already paid the default?",
      answer: "Paying a default doesn&apos;t remove it - it just changes the status to &apos;paid.&apos; The black mark remains for the full 5 years. We can often remove paid defaults just as easily as unpaid ones."
    },
    {
      question: "Do I need to live in a specific state?",
      answer: "No, we help Australians nationwide. Credit reporting is federally regulated, so location doesn&apos;t matter."
    }
  ];

  // Generate structured data for this service page
  const structuredData = generateMinimalStructuredData({
    pathname: "/default-removal-services",
    title: "Default Removal Services Australia | Get Defaults Wiped Fast",
    description: "Remove That Default & Get Your Financial Life Back On Track. Stuck with a default killing your chances of getting approved for a home loan, car finance, or credit card? Award-winning specialists with 98% success rate.",
    isService: true,
    serviceType: "Default Removal Services"
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-8 lg:py-24">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=")`
        }}></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Default Removal Services Australia
                <span className="block mt-2 text-blue">
                  Get Defaults Wiped Fast
                </span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Stuck with a default killing your chances of getting approved for a home loan, car finance, 
                  or even a decent credit card? That black mark on your credit file feels like a financial death sentence - 
                  but it doesn&apos;t have to be permanent.{" "}
                  <strong className="font-semibold text-blue">
                    98% success rate
                  </strong>{" "}
                  when we take your case.
                </p>

                <p className="text-base text-gray-600">
                  At Australian Credit Solutions, we&apos;ve been removing unfair defaults for Australians since day one. 
                  We&apos;re not just another credit repair company - we&apos;re the award-winning specialists who&apos;ve earned recognition
                  three years running (2022, 2023, 2024) for getting results when others can&apos;t.
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
                  Remove My Default Now
                </Link>

                <a
                  href="tel:+61489265737"
                  aria-label="Call Default Hotline on 0489 265 737"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-blue px-6 py-3 text-base font-semibold text-blue transition hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Call Default Hotline: 0489 265 737
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
              <FooterForm
                heading="Get My Free Default Assessment"
                subheading="Lightning-Fast Results"
                paragraph="Find out if your default can be removed – free assessment with same-day response guaranteed."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-sm text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>
                  98% success rate
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>
                  No Win No Fee
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
      <ReviewsWidget/>

      {/* Breadcrumb Navigation */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/default-removal-services-australia" />
      </div>

      {/* Why Defaults Are Financial Killers */}
      <Section title="Why Defaults Are Financial Killers">
        <p className="text-slate-700">
          A default on your credit file isn&apos;t just a number - it&apos;s a roadblock that forces you into the arms of dodgy
          high-interest lenders charging double-digit rates. Our{' '}
          <Link href="/remove-defaults-from-your-credit-file" className="text-blue-600 hover:text-blue-800 font-medium">
            default removal process
          </Link>{' '}
          can eliminate these roadblocks. Here&apos;s what that default is really costing you:
        </p>
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {[
            {
              h: "Home Loans",
              p: "Mainstream lenders won&apos;t touch you. You&apos;re stuck with specialist lenders charging 2-4% higher rates. On a $500,000 mortgage, that&apos;s an extra $10,000-$20,000 per year in interest.",
            },
            {
              h: "Car Finance",
              p: "Instead of 6-8% rates, you&apos;re looking at 15-20% with second-tier lenders. That $30,000 car just became a $45,000 car.",
            },
            {
              h: "Credit Cards",
              p: "Forget about rewards cards or low-rate options. You&apos;re stuck with high-fee, high-interest cards - if you can get approved at all.",
            },
            {
              h: "Even Rental Applications",
              p: "Many property managers now run credit checks. That default could cost you your dream rental.",
            },
          ].map((item) => (
            <motion.li
              key={item.h}
              variants={fadeIn}
              className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="font-semibold text-blue">{item.h}</h3>
              <p className="mt-2 text-sm text-slate-700">{item.p}</p>
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      {/* Our 3-Step Default Removal Process */}
      <Section title="Our 3-Step Default Removal Process">
        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4 text-slate-700"
        >
          {[
            {
              title: "Rapid Assessment (Same Day)",
              description:
                "We pull your premium credit report and identify every default, analyzing which ones have the best removal chances. Unlike other companies that take days to assess your file, we&apos;ll give you answers within hours.",
            },
            {
              title: "Aggressive Investigation (1-2 Weeks)",
              description:
                "Our team digs deep into the default listing, requesting all documentation from the credit provider. We&apos;re looking for any procedural errors, missed notifications, failure to offer hardship assistance, or other breaches that make the default invalid.",
            },
            {
              title: "Expert Negotiation (1-3 Weeks)",
              description:
                "When we find errors (and we usually do), our specialists negotiate directly with the credit provider to have the default removed permanently. No partial solutions, no &apos;paid&apos; status - complete removal.",
            },
          ].map((step, index) => (
            <motion.li key={index} variants={fadeIn} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold">
                {index + 1}
              </div>
              <div>
                <strong>{step.title}:</strong> {step.description}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </Section>

      {/* Why We Beat The Competition */}
      <Section title="Why Australian Credit Solutions Beats The Competition">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {[
            "Award-winning track record: Three consecutive years of industry recognition (2022-2024). We don&apos;t just talk about results - we&apos;re officially recognized for delivering them.",
            "Lightning-fast results: While competitors promise &apos;4-8 weeks maybe,&apos; we&apos;ve got same-day success stories. When your financial future can&apos;t wait, speed matters.",
            "100% transparent pricing: No hidden fees, no surprise charges. Our No Win No Fee policy means you only pay when we succeed (admin fee of $330 applies regardless).",
            "Fully licensed & regulated: ASIC Australian Credit License 532003. You&apos;re dealing with legitimate professionals, not cowboys.",
            "Over 1000 success stories: Real Australians, real results. Check our reviews - we&apos;re rated as Australia&apos;s top credit repair service by Product Review.",
          ].map((t) => (
            <motion.li
              key={t}
              variants={fadeIn}
              className="flex items-start gap-2 rounded-xl bg-blue-50 p-4 text-sm text-slate-700"
            >
              <svg
                className="h-5 w-5 shrink-0 text-blue mt-0.5"
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
              {t}
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      {/* Types Of Defaults We Remove */}
      <Section title="Types Of Defaults We Remove Daily">
        <p className="text-slate-700">
          We&apos;ve successfully removed defaults from every major Australian lender and service provider:
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Major Banks"
            bullets={[
              "Commonwealth Bank, Westpac, ANZ, NAB",
              "Regional banks like Bendigo, Bank of Queensland",
              "Credit unions and building societies",
            ]}
          />
          <Card
            title="Finance Companies"
            bullets={[
              "Car finance companies",
              "Personal loan providers", 
              "Buy-now-pay-later services gone wrong",
            ]}
          />
          <Card
            title="Utilities & Services"
            bullets={[
              "Phone and internet providers (Telstra, Optus, Vodafone)",
              "Energy companies (Origin, AGL, Energy Australia)",
              "Subscription services and gyms",
            ]}
          />
          <Card
            title="Collection Agencies"
            bullets={[
              "Credit Corp, Collection House, Pioneer Credit",
              "Debt purchasers who&apos;ve bought your old debt",
              "Size doesn&apos;t matter - we&apos;ve removed $100 to $100,000 defaults",
            ]}
          />
        </motion.div>
      </Section>

      {/* What Makes A Default Removable */}
      <Section title="What Makes A Default Removable?">
        <p className="text-slate-700">
          Not every default can be removed - but you&apos;d be surprised how many can be. We look for:
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Procedural Errors"
            bullets={[
              "Failure to send proper default notices",
              "Incorrect addresses or contact details",
              "Missing hardship assistance offers",
              "Breaches of responsible lending laws",
            ]}
          />
          <Card
            title="Documentation Issues"
            bullets={[
              "Missing signed agreements",
              "Incorrect account information",
              "Disputed charges or fees",
              "Identity theft or fraud",
            ]}
          />
          <Card
            title="Timing Problems"
            bullets={[
              "Premature default listings",
              "Statute-barred debts",
              "Defaults listed during hardship arrangements",
            ]}
          />
          <Card
            title="Legal Grounds"
            bullets={[
              "Even if the debt was legitimate, procedural errors by the lender can make the default invalid and removable",
              "Compliance failures with credit reporting laws",
              "Breach of consumer protection regulations",
            ]}
          />
        </motion.div>
      </Section>

      {/* Success Stories */}
      <Section title="Success Stories: Real Defaults, Real Removals">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Testimonial name="Sarah - $8,500 Credit Card Default">
            &quot;I thought my dream of home ownership was over. Australian Credit Solutions removed my Westpac default in 3 weeks. I&apos;m now pre-approved for a $650,000 mortgage with a major bank at prime rates.&quot;
          </Testimonial>
          <Testimonial name="Mike - $2,200 Car Loan Default">
            &quot;That default was costing me fortune in high-interest finance. After removal, I refinanced my existing loans and saved $400 per month. Best investment I ever made.&quot;
          </Testimonial>
          <Testimonial name="Lisa - Multiple Telco Defaults">
            &quot;Three phone defaults from when I was going through divorce. Thought I was stuck forever. Australian Credit Solutions cleared all three in 6 weeks. Finally got approved for that business loan.&quot;
          </Testimonial>
          <Testimonial name="Jordan - Major Bank Default">
            &quot;Came to ACS desperate - a major bank default was blocking my mortgage application. They started work at 8am and had the default removed before 10am the same day. I got my mortgage approved that week.&quot;
          </Testimonial>
        </motion.div>
      </Section>

      {/* Service Options */}
      <Section title="Your Default Removal Options">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-3"
        >
          <PriceCard
            name="Express Service"
            timeline="1-3 weeks typically"
            perfectFor="Urgent Finance Applications"
            includes={[
              "Same-day assessment",
              "Priority handling",
              "Direct CEO involvement for complex cases",
            ]}
            featured
          />
          <PriceCard
            name="Standard Service"
            timeline="2-6 weeks typically"
            perfectFor="General Credit Improvement"
            includes={[
              "Full assessment within 48 hours",
              "Comprehensive investigation",
              "Regular updates throughout process",
            ]}
          />
          <PriceCard
            name="Multiple Default Package"
            timeline="Varies by complexity"
            perfectFor="Serious Credit Issues"
            includes={[
              "Bulk assessment of entire credit file",
              "Coordinated removal strategy",
              "Maximum negotiation leverage",
            ]}
          />
        </motion.div>
        <div className="mt-6 rounded-xl border border-dashed border-blue-300 bg-blue-50 p-4 text-sm text-slate-600">
          <strong>
            No Win No Fee Promise:
          </strong>{" "}
          Admin fee $330 applies regardless of outcome. Success fee only charged when defaults are removed.
          Most clients find the interest savings from better rates pay for our service within months.
        </div>
      </Section>

      {/* Lightning-Fast Approach */}
      <Section title="Our Lightning-Fast Approach">
        <p className="text-slate-700">
          While other companies promise results in &quot;4-8 weeks,&quot; we&apos;ve built our reputation on express service. Here&apos;s proof:
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-blue">Jordan&apos;s Same-Day Success</h3>
            <p className="mt-2 text-sm text-slate-700">
              Came to us desperate - a major bank default was blocking his mortgage application. 
              We started work at 8am and had the default removed before 10am the same day. 
              Jordan got his mortgage approved that week.
            </p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-blue">James&apos;s 48-Hour Result</h3>
            <p className="mt-2 text-sm text-slate-700">
              A &quot;small&quot; $300 default was keeping him from decent car finance. 
              We had it wiped in 48 hours flat. He saved thousands on interest rates.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* FAQs */}
      <Section title="Frequently Asked Questions">
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

      {/* Getting Started */}
      <Section title="How To Get Started (It Takes 5 Minutes)">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">Three Easy Options</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold text-sm">
                  1
                </span>
                <div>
                  <strong>Get Your Free Assessment Now:</strong> Fill out our quick form and we&apos;ll call you within 2 hours to discuss your specific default situation. No obligation, no pressure.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold text-sm">
                  2
                </span>
                <div>
                  <strong>Call Our Default Hotline:</strong> 0489 265 737 - Speak directly to a default removal specialist. We&apos;re here 9am-5pm AEST, Monday to Friday.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold text-sm">
                  3
                </span>
                <div>
                  <strong>Already Have Your Credit Report?</strong> Email it to us and we&apos;ll prioritize your assessment. Most responses within 1 business day.
                </div>
              </div>
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
              What Happens Next?
            </h3>
            <ol className="mt-3 space-y-2 text-slate-700 text-sm">
              <li>1. <strong>Free Assessment Call:</strong> We review your defaults and give you honest feedback on removal chances</li>
              <li>2. <strong>Strategy Discussion:</strong> If we can help, we&apos;ll explain our approach and timeline</li>
              <li>3. <strong>Agreement & Action:</strong> You decide to proceed, we get to work immediately</li>
              <li>4. <strong>Regular Updates:</strong> Weekly progress reports so you&apos;re never left wondering</li>
              <li>5. <strong>Success Celebration:</strong> Default removed, your credit file is clean, your financial future is restored</li>
            </ol>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/free-credit-assessment"
                className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors"
              >
                Start My Free Assessment
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
                98% success rate when we take cases
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-sm font-medium">
                No Win No Fee — $330 admin fee
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
        <RelatedServices pathname="/default-removal-services-australia" />
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

function PriceCard({
  name,
  timeline,
  perfectFor,
  includes,
  featured = false,
}) {
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
