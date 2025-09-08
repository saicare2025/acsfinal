// File: app/credit-enquiry-removal/page.jsx
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

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function CreditEnquiryRemovalPage() {
  // FAQ data for structured data
  const faqData = [
    {
      question: "How many enquiries are too many?",
      answer: "There&apos;s no magic number, but generally more than 2-3 enquiries in 3 months starts impacting your score. More than 5-6 enquiries in 12 months seriously damages your credit profile."
    },
    {
      question: "Will removing enquiries improve my credit score immediately?",
      answer: "Score improvements typically show within 30-60 days of enquiry removal. The exact improvement depends on how many enquiries we remove and your overall credit profile."
    },
    {
      question: "Can I remove enquiries myself?",
      answer: "You can try, but success rates are low. Credit providers and bureaus receive thousands of DIY dispute letters monthly. Most get rejected due to procedural errors or insufficient evidence."
    },
    {
      question: "What if the enquiry was legitimate but hurt my score?",
      answer: "Legitimate enquiries made with proper consent usually can&apos;t be removed. However, we often find that enquiries people think were legitimate actually had procedural flaws that make them removable."
    },
    {
      question: "How long do enquiries stay on my file naturally?",
      answer: "Credit enquiries remain visible for 5 years in Australia. However, their impact on your score diminishes over time, with the heaviest impact in the first 12 months."
    }
  ];

  // Generate structured data for this service page
  const structuredData = generateMinimalStructuredData({
    pathname: "/credit-enquiry-removal",
    title: "Remove Credit Enquiries Fast | Australia&apos;s Leading Credit Enquiry Removal Specialists",
    description: "Too many credit enquiries killing your credit score? Get unauthorised enquiries removed professionally. 98% success rate when we take your case. Licensed specialists, No Win No Fee policy.",
    isService: true,
    serviceType: "Credit Enquiry Removal"
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
                Remove Credit Enquiries Fast
                <span className="block mt-2 text-blue">
                  Australia&apos;s Leading Enquiry Removal Specialists
                </span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Too many credit enquiries killing your score? We remove
                  unauthorised, duplicate and incorrect enquiries
                  professionally.{" "}
                  <strong className="font-semibold text-blue">
                    98% success rate
                  </strong>{" "}
                  when we take your case. Licensed specialists,{" "}
                  <strong className="font-semibold text-blue">
                    No Win No Fee
                  </strong>{" "}
                  policy.
                </p>

                <p className="text-base text-gray-600">
                  Multiple enquiries can slash your score by 100+ points and
                  block approvals. Our award-winning team removes bad enquiries
                  across Equifax, Experian and Illion — often within weeks, not
                  years.
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
                  Remove My Credit Enquiries Now
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

              {/* Trust badges */}
              
            </div>

            {/* Right Form with Arrow */}
            <div className="w-full lg:w-1/3 relative">
              {/* Form Container */}

              <FooterForm
                heading="Get My Free Enquiry Assessment"
                subheading="Fast & Confidential"
                paragraph="Find out if your credit enquiries can be removed – free, fast, and confidential."
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
                  Licensed & insured (ASIC ACL 532003)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile arrow indicator (shown only on mobile) */}
      </section>
        <ReviewsWidget/>

      {/* Opening Section */}
      <Section title="Your credit enquiries are quietly destroying your financial future">
        <p>
          Every time someone checks your credit – whether you applied or not – it gets recorded on your
          file. Too many enquiries signal &quot;credit hungry&quot; behaviour to lenders, making them instantly reject your
          applications.
        </p>
        <p className="mt-4">
          But here&apos;s what most Australians don&apos;t know: many credit enquiries shouldn&apos;t be on your file at all.
          Unauthorised enquiries. Duplicate enquiries. Enquiries made without proper consent. Enquiries that
          violate privacy laws. These can all be removed – and removing them can boost your credit score
          dramatically.
        </p>
        <p className="mt-4">
          Australian Credit Solutions specialises in credit enquiry removal across Australia. We&apos;re not another
          generic credit repair company making empty promises. We&apos;re award-winning specialists with a 98%
          success rate when we accept cases, backed by three consecutive years of industry recognition.
        </p>
        <p className="mt-4">
          The difference? We only take cases where we&apos;re genuinely confident of success. If we can&apos;t help you win,
          we&apos;ll tell you upfront.
        </p>
      </Section>

      {/* Impact Section */}
      <Section title="How Credit Enquiries Destroy Your Credit Score">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-2 grid gap-4 sm:grid-cols-2"
        >
          {[
            {
              h: "Immediate Score Impact",
              p: "Each hard enquiry can drop your credit score by 5-15 points. Multiple enquiries in a short period create a compounding negative effect that can slash your score by 50-100+ points.",
            },
            {
              h: "Lender Red Flags",
              p: "Lenders see multiple enquiries as desperation. Even if your income and assets are strong, too many enquiries trigger automatic rejection systems before a human even reviews your application.",
            },
            {
              h: "The Enquiry Death Spiral",
              p: "Rejection leads to more applications. More applications create more enquiries. More enquiries guarantee more rejections. It becomes a vicious cycle that&apos;s almost impossible to break.",
            },
            {
              h: "Different Types Hit Differently",
              p: "Credit card enquiries usually hit hardest on your score. Personal loan enquiries have moderate impact. Home loan enquiries have lower individual impact but multiple enquiries still hurt.",
            },
            {
              h: "Time Doesn&apos;t Heal All Wounds",
              p: "While enquiries technically &apos;fall off&apos; after 5 years, their damage compounds over time. Five years of restricted credit access costs you far more than professional removal.",
            },
            {
              h: "Automatic Rejection Systems",
              p: "Many lenders use computer systems that instantly reject applications with too many enquiries, regardless of your income, assets, or credit history.",
            },
            {
              h: "Premium Interest Rate Penalties",
              p: "Even when you do get approved, excessive enquiries often mean higher interest rates and worse terms as lenders see you as higher risk.",
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

      {/* What We Remove */}
      <Section title="What Enquiries Can Be Removed From Your File">
        <p className="text-slate-700">
          <strong>Important Note:</strong> We can only challenge enquiries that violate Australian privacy law or credit reporting requirements. 
          Legitimate enquiries made with proper consent typically cannot be removed.
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Unauthorised Enquiries"
            bullets={[
              "Employers checking credit without permission",
              "Identity theft enquiries from fraudulent applications",
              "Marketing enquiries from companies you never applied to",
              "Ex-partners applying for credit using your details",
            ]}
          />
          <Card
            title="Duplicate Enquiries"
            bullets={[
              "Single home loan application appearing 3-4 times",
              "Broker applications duplicated across multiple lenders",
              "System errors creating identical enquiries with different dates",
              "Refinancing enquiries that duplicate existing records",
            ]}
          />
          <Card
            title="Procedurally Incorrect Enquiries"
            bullets={[
              "No proper consent documentation",
              "Enquiries made after application withdrawal",
              "Checks performed by unlicensed credit providers",
              "Enquiries that exceed authorised scope",
            ]}
          />
          <Card
            title="Privacy Act Violations"
            bullets={[
              "Checks made without legitimate business need",
              "Enquiries retained beyond legal timeframes",
              "Cross-referencing without proper authorisation",
              "Sharing enquiry data without consent",
            ]}
          />
          <Card
            title="Incorrect Information Enquiries"
            bullets={[
              "Wrong dates of birth creating identity confusion",
              "Incorrect addresses linking you to others&apos; credit",
              "Name variations causing mixed files",
              "Outdated information still being referenced",
            ]}
          />
          <Card
            title="Post-Settlement Enquiries"
            bullets={[
              "Mortgage enquiries after property settlement",
              "Credit card enquiries after account cancellation",
              "Personal loan enquiries after full repayment",
              "Ongoing monitoring after relationship ended",
            ]}
          />
        </motion.div>
      </Section>

      {/* Process */}
      <Section title="Our Professional Credit Enquiry Removal Process">
        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4 text-slate-700"
        >
          {[
            {
              title: "Complete Enquiry Audit",
              description:
                "We obtain your credit files from all three major reporting bodies – Equifax, Experian, and Illion. Our comprehensive audit identifies all enquiries across all bureaus, duplicates, suspicious patterns, and procedural violations.",
            },
            {
              title: "Legal Assessment & Removal Strategy",
              description:
                "We assess each enquiry against Privacy Act 1988 consent requirements, credit reporting code compliance, and industry-specific authorisation procedures to determine removal grounds.",
            },
            {
              title: "Professional Challenge Process",
              description:
                "Using legally structured challenge letters citing specific breaches, comprehensive supporting evidence, and direct engagement with credit providers when required.",
            },
            {
              title: "Monitoring & Score Recovery",
              description:
                "Enquiry removal often happens in batches as different parties respond. We monitor your file continuously and track score improvements as enquiries disappear.",
            },
            {
              title: "Prevention Strategy",
              description:
                "Once your enquiries are cleaned up, we provide guidance on protecting your file from future unauthorised enquiries and managing legitimate applications to minimise score impact.",
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

      {/* Success Stories */}
      <Section title="Success Stories: Real Results From Enquiry Removal">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Testimonial name="James&apos;s Story – Melbourne IT Manager">
            &quot;Had 23 credit enquiries from a broker who shopped my home loan application everywhere without telling me. Every lender rejected me because of the enquiry overload. ACS removed 19 of the 23 enquiries in 5 weeks. My credit score jumped 127 points and I got home loan approval the following month at 0.3% below the standard rate.&quot;
          </Testimonial>
          <Testimonial name="Rebecca&apos;s Story – Brisbane Marketing Executive">
            &quot;Identity theft left me with 8 unauthorised enquiries from credit cards and personal loans I never applied for. Police report wasn&apos;t enough to get them removed myself. ACS provided the legal framework and got all 8 enquiries wiped in 3 weeks. Credit score went from 420 to 720.&quot;
          </Testimonial>
          <Testimonial name="Michael&apos;s Story – Perth Tradie">
            &quot;Applied for equipment finance and the lender ran my credit 4 times &apos;by mistake.&apos; Other lenders saw the multiple enquiries and assumed I was desperate. Couldn&apos;t get financing anywhere. ACS removed the duplicate enquiries in 10 days and I had equipment approval within the week.&quot;
          </Testimonial>
          <Testimonial name="Sarah&apos;s Story – Sydney Teacher">
            &quot;Car dealership ran my credit for &apos;quotes&apos; on 6 different finance products without explaining each was a separate enquiry. Killed my credit score overnight. ACS challenged the unauthorised enquiries and got 5 of 6 removed. Score improved by 89 points in one month.&quot;
          </Testimonial>
        </motion.div>
      </Section>

      {/* Why Choose Us */}
      <Section title="Why Choose Australian Credit Solutions for Enquiry Removal">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {[
            "Enquiry removal specialists – while other companies treat enquiry removal as a side service, it&apos;s one of our core specialities.",
            "98% success rate when we take cases – we carefully assess each situation and only proceed when we&apos;re confident of success.",
            "No Win No Fee protection – you pay our administration fee ($330) upfront, but if we don&apos;t successfully remove the targeted enquiries, you don&apos;t pay success fees.",
            "Three consecutive industry awards (2022, 2023, and 2024) for outstanding results and client satisfaction from proven results, not marketing hype.",
            "Licensed under ASIC ACL 532003 – we operate under strict licensing, meaning we&apos;re regulated, insured, and accountable for our services.",
            "Australia-wide service – credit reporting is federally regulated, so we help clients from Darwin to Hobart with identical service levels.",
            "Direct expert communication – you&apos;ll work directly with our credit specialists who understand your case, not offshore call centres.",
            "Fast turnaround times – many enquiry challenges resolve faster because the evidence is often clear-cut.",
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

      {/* Service Options / Pricing */}
      <Section title="Our Credit Enquiry Removal Service Options">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2"
        >
          <PriceCard
            name="Express Enquiry Removal"
            timeline="1-2 weeks typically"
            perfectFor="Home loan pre-approvals, urgent finance needs"
            includes={[
              "Same-day assessment",
              "Priority processing",
              "Daily updates",
            ]}

           
          />
          <PriceCard
            name="Standard Enquiry Removal"
            timeline="3-4 weeks typically"
            perfectFor="Multiple enquiries, complex cases"
            includes={[
              "Full audit",
              "Detailed challenge strategy",
              "Weekly reports",
            ]}
           
            featured
          />
          <PriceCard
            name="Bulk Enquiry Package"
            timeline="4-6 weeks typically"
            perfectFor="10+ enquiries, broker damage, identity theft aftermath"
            includes={[
              "Coordinated removal strategy",
              "Bulk processing efficiencies",
              "Comprehensive monitoring",
            ]}
         
          />
          <PriceCard
            name="Enquiry Prevention Package"
            timeline="Immediate setup + 12 months monitoring"
            perfectFor="High-value clients, business owners, frequent applicants"
            includes={[
              "Credit monitoring",
              "Enquiry alerts",
              "Removal insurance",
            ]}
         
          />
        </motion.div>
        <div className="mt-6 rounded-xl border border-dashed border-blue-300 bg-blue-50 p-4 text-sm text-slate-600">
          <strong>
            Remember: All services include our No Win No Fee guarantee:
          </strong>{" "}
          If we don&apos;t remove the targeted enquiries, you don&apos;t pay success fees.
        </div>
      </Section>

      {/* Outcomes */}
      <Section title="What Happens After Enquiry Removal">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {[
            "Immediate credit score boost – scores typically improve within 30-60 days of enquiry removal.",
            "Automatic approval systems work again – many lenders use automated systems that instantly reject applications with too many enquiries.",
            "Better interest rates – clean enquiry history signals responsible credit behaviour, often qualifying you for standard rates.",
            "Successful finance applications – home loans, car finance, credit cards, and personal loans become accessible again.",
            "Broker relationships restored – mortgage brokers can work with you again instead of declining to submit applications.",
            "Credit card rewards access – premium rewards credit cards have strict enquiry limits that clean history opens up.",
            "Business finance opportunities – personal credit enquiries affect business lending decisions, so clean history improves access.",
          ].map((t) => (
            <motion.li
              key={t}
              variants={fadeIn}
              className="rounded-xl border border-blue-100 bg-white p-4 text-sm text-slate-700 shadow-sm transition-all hover:shadow-md"
            >
              {t}
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      {/* Legal Rights / Education */}
      <Section title="Understanding Your Rights: Privacy Act & Credit Enquiries">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-2 space-y-4 text-slate-700"
        >
          {[
            "Consent requirements: Credit providers must have your clear, informed consent before accessing your credit file. This consent must be given voluntarily, specific to the actual credit product, and properly documented.",
            "Right to challenge incorrect information: You have the absolute right to dispute any enquiry on your credit file that you believe is incorrect, unauthorised, or improperly recorded.",
            "Timeframes for response: Credit reporting bodies must respond to your enquiry disputes within 30 days (or 7 days if you&apos;re seeking credit within 60 days).",
            "Right to compensation: If unauthorised enquiries have caused you financial loss (loan rejections, higher interest rates), you may be entitled to compensation.",
            "Complaint escalation: If credit providers or bureaus don&apos;t respond appropriately, you can escalate to the Australian Financial Complaints Authority (AFCA) at no cost.",
            "Why professional help matters: These rights are powerful but complex to exercise. Credit providers have teams of lawyers. You need professional representation to level the playing field.",
          ].map((text, index) => (
            <motion.p
              key={index}
              variants={fadeIn}
              className="flex items-start gap-2"
            >
              <svg
                className="h-5 w-5 shrink-0 text-orange mt-0.5"
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
              {text}
            </motion.p>
          ))}
        </motion.div>
      </Section>

      {/* FAQs */}
      <Section title="Common Questions About Credit Enquiry Removal">
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

      {/* Cost of keeping enquiries */}
      <Section title="The Hidden Cost of Keeping Bad Enquiries">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">
              Quantifying the Financial Impact
            </h3>
            {[
              "Home loan impact: Score 750+ gets best rates (~6.2%), while score <500 often gets declined or forced into non-bank lending (8%+ rates). On a $500,000 home loan, this difference is $162,500 over 30 years.",
              "Credit card access: Clean enquiry history means platinum rewards cards with 55-day interest-free periods and $25,000+ limits. Excessive enquiries means basic cards only with $2,000-5,000 limits.",
              "Car finance rates: Good enquiry profile gets bank rates from 5.9%, poor profile gets dealer finance from 12.9%+. On a $40,000 car loan over 5 years, this costs $6,800 extra in interest.",
              "Employment opportunities: Some employers check credit reports for financial roles. Excessive enquiries can cost you job opportunities in banking, finance, and senior management.",
              "Business finance access: Personal credit enquiries affect business lending. Clean personal enquiry history is often required for business loans, equipment finance, and commercial mortgages.",
              "Rental applications: Many landlords now check credit reports. Excessive enquiries can result in rental rejection, especially in competitive markets like Sydney and Melbourne.",
            ].map((text, index) => (
              <p key={index} className="flex items-start gap-2">
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
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                {text}
              </p>
            ))}
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-blue">
              Why Act Now Instead of Waiting
            </h3>
            <ul className="mt-3 space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 shrink-0 text-red-500 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Time compounds the damage: Every month you delay is another month of credit score suppression and automatic loan rejections.
              </li>
              <li className="flex items-start gap-2">
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
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                The enquiry removal window: Evidence needed for removal can disappear over time – documentation gets destroyed, staff leave companies.
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
                The sooner we act, the higher our success rate and the faster your score recovery.
              </li>
            </ul>
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

      {/* Getting Started CTA */}
      <Section title="Getting Started: Your Free Enquiry Assessment">
        <ol className="mt-4 space-y-3 text-slate-700">
          {[
            "Free phone consultation (10 minutes) — call 0489 265 737 to discuss your enquiry situation and identify obvious removal opportunities.",
            "Complete credit file review — we obtain your reports from all three credit bureaus and conduct a detailed enquiry audit.",
            "Removal strategy presentation — we present our findings, explain which enquiries can be removed, and provide timeline estimates.",
            "Professional challenge process — once you&apos;re ready to proceed, we handle all enquiry challenges while providing regular progress updates.",
            "Results delivery & score monitoring — we monitor your file until all targeted enquiries are removed and provide guidance on protection.",
          ].map((step, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold text-sm">
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/free-credit-assessment"
            className="rounded-lg bg-blue px-6 py-3 font-semibold text-white hover:bg-blue transition-colors"
          >
            Book My Free Assessment
          </Link>
          <a
            href="tel:+61489265737"
            className="rounded-lg border-2 border-blue px-6 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors"
          >
            Call 0489 265 737
          </a>
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
      <div className="mt-4 flex items-end justify-between">
       
        <Link
          href="/free-credit-assessment"
          className="rounded-lg bg-blue px-4 py-2 font-semibold text-white hover:bg-blue transition-colors text-sm"
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