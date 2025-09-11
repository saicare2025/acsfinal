// File: app/credit-repair-for-credit-card-applications-australia/page.jsx
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

export default function CreditCardApplicationsPage() {
  const faqData = [
    {
      question: "How long before I can apply for credit cards again?",
      answer:
        "Most removals complete within 6–12 weeks. Scores usually move within 30 days of removals. We’ll advise the best timing so you don’t create new enquiries before your file is ready.",
    },
    {
      question: "Which credit cards should I apply for after credit repair?",
      answer:
        "It depends on your cleaned-up profile, income, and goals. We recommend specific cards you’re most likely to be approved for, and we plan the right sequencing.",
    },
    {
      question: "Will removing defaults guarantee approval?",
      answer:
        "No one can guarantee approvals—that’s the bank’s call. But removing automatic deal-breakers (defaults, late patterns, bad enquiries) dramatically improves approval odds.",
    },
    {
      question: "How much does credit repair cost vs the benefit?",
      answer:
        "Our admin fee is $330, with No Win No Fee on success fees. Premium cards can return $1,000–$3,000+ yearly through points, perks, and better rates. The math usually favours fixing the file first.",
    },
    {
      question: "Can you help with business credit card applications?",
      answer:
        "Yes. Cleaning your personal credit directly improves business card approval chances. We also advise on card choice and application strategy for owners and ABN holders.",
    },
  ];

  const structuredData = generateMinimalStructuredData({
    pathname: "/credit-repair-for-credit-card-applications-australia",
    title:
      "Credit Repair for Credit Card Applications Australia | Get Approved Again",
    description:
      "Keep getting knocked back for credit cards? We remove defaults, late payments and bad enquiries so you can get approved for the cards you actually want. No Win No Fee.",
    isService: true,
    serviceType: "Credit Card Application Credit Repair",
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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-8 lg:py-12">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Credit Repair for Credit Card Applications Australia
                <span className="block mt-2 text-blue">Get Approved Again</span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Sick of getting knocked back for credit cards? Your credit file
                  is probably the culprit. Let&apos;s fix it so you can get
                  approved for the cards you actually want. Automated systems
                  reject applications the second they see red flags—defaults,
                  late payments, or too many enquiries. We remove the roadblocks
                  so banks start saying yes.
                </p>
                <p className="text-base text-gray-600">
                  At Australian Credit Solutions, we&apos;ve helped thousands of
                  Australians go from constant rejections to premium approvals.
                  Our legal, strategic process removes defaults, late patterns,
                  and dodgy enquiries that are quietly killing your applications.
                  Knocked back in the last 6 months? Every rejection adds
                  another enquiry. Let&apos;s break that cycle now.
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
                 Free Card-Approval Assessment
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

            {/* Right form */}
            <div className="w-full lg:w-1/3 relative">
              <FooterForm
                heading="Get Card-Ready Fast"
                subheading="Targeted Credit Cleanup"
                paragraph="We identify and remove the exact items blocking your credit card approvals. Quick assessment, precise plan."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-base text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>
                  No Win No Fee
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>
                  Lawyer-led strategy
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>
                  ASIC ACL 532003
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/credit-repair-for-credit-card-applications-australia" />
      </div>

      {/* Why apps get rejected */}
      <Section title="Why Credit Card Applications Keep Getting Rejected">
        <p className="text-slate-700">
          Most approvals are automated. A system scans your credit file in
          seconds—if it sees certain red flags, you&apos;re auto-rejected before
          a human ever looks at it. Here&apos;s what usually triggers the &quot;no&quot;:
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="What’s Killing Your Applications"
            bullets={[
              "Defaults (even small, old telco or utility items)",
              "Late payment patterns across cards/loans/mortgage",
              "Too many enquiries in 12 months (looks ‘credit hungry’)",
              "Old court judgments and writs still visible",
              "Incorrect personal/employment data causing flags",
            ]}
          />
          <Card
            title="The Domino Effect of Rejections"
            bullets={[
              "Each rejection adds another enquiry to your file",
              "Banks see the pattern and become more cautious",
              "Confidence drops—you apply for worse cards",
              "You end up with high-fee, low-feature products",
            ]}
          />
        </motion.div>
        <p className="mt-6 text-slate-700 font-semibold">
          You might be one default removal away from moving from automatic
          rejections to automatic approvals.
        </p>
      </Section>

      {/* How we help */}
      <Section title="How We Help You Get Approved for Better Credit Cards">
        <p className="text-slate-700">
          We don&apos;t just clean your file—we target the exact items that block
          credit card approvals, then plan timing and sequencing so you apply
          when you&apos;re most likely to be approved.
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Our Success Strategy"
            bullets={[
              "Analyse recent rejections and bank-specific criteria",
              "Remove defaults and late patterns that auto-reject",
              "Reduce excessive enquiries and fix incorrect data",
              "Advise timing and specific cards to target next",
            ]}
          />
          <Card
            title="What We Commonly Remove"
            bullets={[
              "Telco/utility/BNPL and card defaults",
              "Late payment histories that signal stress",
              "Excessive card/loan/phone enquiries",
              "Small court matters and legacy writs",
            ]}
          />
        </motion.div>
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-green-800">Real Result:</h3>
          <p className="mt-2 text-green-700">
            Michael from Melbourne went from universal rejections to a Qantas
            Platinum approval with a $25,000 limit after we removed two
            defaults and a late-payment pattern over 8 weeks.
          </p>
        </div>
      </Section>

      {/* Hidden costs */}
      <Section title="The Hidden Cost of Bad Credit Card Options">
        <p className="text-slate-700">
          Stuck with basic or secured cards? You&apos;re likely paying more and
          missing out on serious value every year.
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="What Bad Credit Costs You"
            bullets={[
              "19–24% interest vs 12–16% on better cards",
              "No 0% balance-transfer offers or promos",
              "High annual fees for poor benefits",
              "Low limits that wreck utilisation ratios",
            ]}
          />
          <Card
            title="Premium Card Perks You’re Missing"
            bullets={[
              "50k–100k+ signup bonuses and points earn",
              "Travel insurance, lounge access, concierge",
              "No foreign fees, purchase protection, warranties",
              "$1k–$3k+/yr in potential net value",
            ]}
          />
        </motion.div>
      </Section>

      {/* Process */}
      <Section title="Our Credit Card Application Success Process">
        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4 text-slate-700"
        >
          {[
            {
              title: "Phase 1 — Analysis & Assessment (Week 1)",
              description:
                "Review rejections, pull all bureaus, identify red flags, map to bank criteria, and plan a targeted removal strategy.",
            },
            {
              title: "Phase 2 — Strategic Credit Repair (Weeks 2–8)",
              description:
                "Prioritise defaults and late patterns, reduce excessive enquiries, correct data. We enforce timelines and verify deletions.",
            },
            {
              title: "Phase 3 — Application Strategy (Weeks 6–12)",
              description:
                "Advise exact timing, recommend specific cards, and plan sequencing to avoid unnecessary enquiries.",
            },
            {
              title: "Phase 4 — Post-Approval Optimisation (Ongoing)",
              description:
                "Limit-increase strategy, add complementary cards, maintain a clean file, and maximise rewards value.",
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

      {/* Related in the middle */}
      <RelatedBlock
        currentSlug="/credit-repair-for-credit-card-applications-australia"
        heading="Related services & guides"
      />

      {/* Card types */}
      <Section title="Credit Card Types We Help You Qualify For">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Premium Travel Rewards"
            bullets={[
              "Qantas Premier Platinum, Virgin High Flyer, Amex Platinum",
              "Typical: 750+ score, clean history, $75k+ income",
              "Benefits: big bonuses, lounges, insurance, concierge",
            ]}
          />
          <Card
            title="Cashback & Everyday Rewards"
            bullets={[
              "CommBank Ultimate, Westpac Altitude Black, ANZ Rewards Black",
              "Typical: 700+ score, minimal issues",
              "Benefits: high earn rates, partner perks, statement credits",
            ]}
          />
          <Card
            title="Balance Transfer Specialists"
            bullets={[
              "Virgin, Citi, BankWest BT cards",
              "0% for 12–26 months, low fees",
              "Great for consolidating at minimal interest",
            ]}
          />
          <Card
            title="Business Credit Cards"
            bullets={[
              "Amex Business, ANZ Business Black, CommBank Business Awards",
              "ABN + business income + clean personal file",
              "Benefits: higher limits, expense tools, business points",
            ]}
          />
        </motion.div>
      </Section>

      {/* Success stories */}
      <Section title="Success Stories: From Rejections to Premium Approvals">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Testimonial name="Sarah — Teacher, Brisbane">
            &quot;Rejected four times in six months during a divorce period. ACS
            removed a Telstra default and late payments. Eight weeks later I was
            approved for Qantas Premier Platinum with a $20k limit and 100k bonus
            points.&quot;
          </Testimonial>
          <Testimonial name="James — Small Business Owner, Perth">
            &quot;Defaults from COVID nearly killed my approvals. ACS removed two
            defaults and a court judgment, corrected employment info, and I was
            approved for Amex Business Gold and Westpac Altitude Black.&quot;
          </Testimonial>
          <Testimonial name="Emma — Nurse, Adelaide">
            &quot;Paying $150 a year for a basic card with no rewards. After ACS
            cleaned late histories and lifted my score by 180 points, I got Virgin
            High Flyer and flew my family to Bali with bonus points.&quot;
          </Testimonial>
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
              <p className="mt-3 text-base text-slate-700 pl-2 border-l-2 border-blue-200 ml-1">
                {f.answer}
              </p>
            </motion.details>
          ))}
        </motion.div>
      </Section>

      {/* Next steps */}
      <Section title="Ready to Get Approved for Better Credit Cards?">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">
              Stop collecting rejection letters. Start collecting signup bonuses.
            </h3>
            <p>
              Your credit file problems are fixable—and the value in better
              cards adds up fast. We analyse your rejections, clean the file, and
              guide you to the right cards at the right time.
            </p>
            <ul className="space-y-2">
              {[
                "Recent rejection analysis and exact cause breakdown",
                "Credit file review across all bureaus",
                "Card matching and application sequencing",
                "Cost–benefit estimate for premium card options",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
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
                  {item}
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
            <h3 className="text-lg font-semibold text-blue">
              Get Your Free Card-Approval Assessment
            </h3>
            <p className="mt-3 text-slate-700">
              We&apos;ll show you what&apos;s blocking approvals and how to fix
              it—fast. Most clients see turnarounds in 6–12 weeks.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/free-credit-assessment"
                className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors"
              >
                Start My Assessment
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

      {/* Trust bar */}
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
              <p className="text-base font-medium">3× Industry Excellence Awards</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-base font-medium">No Win No Fee — Transparent Pricing</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-base font-medium">ASIC Licensed — ACL 532003</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Related Services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/credit-repair-for-credit-card-applications-australia" />
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
      <ul className="mt-3 space-y-2 text-base text-slate-700">
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
      <figcaption className="mt-3 text-base font-semibold text-blue">{name}</figcaption>
    </motion.figure>
  );
}
