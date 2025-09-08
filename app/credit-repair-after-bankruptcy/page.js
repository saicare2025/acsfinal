// File: app/credit-repair-after-bankruptcy/page.jsx
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

export default function PostBankruptcyCreditRepairPage() {
  // FAQ data for structured data
  const faqData = [
    {
      question: "How long after bankruptcy discharge can I apply for credit?",
      answer: "You can apply immediately after discharge, but options are very limited initially. Focus first on correcting any errors in your credit file, then start with secured products. Most mainstream lenders require 12-24 months post-discharge minimum."
    },
    {
      question: "Will removing errors from my credit file improve my score significantly?",
      answer: "Yes, correcting incorrect post-bankruptcy information can improve scores by 100-200+ points. When your score is very low, each correction has maximum impact."
    },
    {
      question: "Can I get a home loan after bankruptcy?",
      answer: "Usually not for 2-4 years minimum, and then only with specialist lenders at higher rates. Clean up your credit file first, then rebuild with smaller products before attempting major loans."
    },
    {
      question: "What&apos;s the difference between bankruptcy and debt agreement credit impact?",
      answer: "Both show on your credit file for 5 years and have similar score impacts. The choice should be based on your financial situation and legal advice, not just credit considerations."
    },
    {
      question: "Should I tell lenders about my bankruptcy when applying?",
      answer: "Yes, they&apos;ll see it on your credit file anyway. Being upfront and explaining your situation honestly often works better than trying to hide it."
    }
  ];

  // Generate structured data for this service page
  const structuredData = generateMinimalStructuredData({
    pathname: "/credit-repair-after-bankruptcy",
    title: "Credit Repair After Bankruptcy or Debt Agreement Australia | Rebuild Your Financial Future",
    description: "Bankruptcy or debt agreement finished? Don&apos;t wait years to rebuild your credit. We help Australians fix credit issues after bankruptcy discharge, remove incorrect listings, improve credit score fast. 98% success rate, No Win No Fee.",
    isService: true,
    serviceType: "Post-Bankruptcy Credit Repair"
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
                Credit Repair After Bankruptcy or Debt Agreement Australia
                <span className="block mt-2 text-blue">
                  Rebuild Your Financial Future
                </span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Bankruptcy or debt agreement finished? Don&apos;t wait years to rebuild your credit. We help
                  Australians fix credit issues after bankruptcy discharge, remove incorrect listings,
                  improve credit score fast.{" "}
                  <strong className="font-semibold text-blue">
                    98% success rate
                  </strong>{" "}
                  when we take cases, {" "}
                  <strong className="font-semibold text-blue">
                    No Win No Fee
                  </strong>{" "}
                  policy.
                </p>

                <p className="text-base text-gray-600">
                  Your bankruptcy or debt agreement gave you a fresh start legally - now get your
                  credit file to match. We specialise in post-bankruptcy credit repair, helping you dispute incorrect listings,
                  remove outdated information, and rebuild credit faster than waiting it out.
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
                  Fix My Credit After Bankruptcy Now
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

            {/* Right Form with Arrow */}
            <div className="w-full lg:w-1/3 relative">
              <FooterForm
                heading="Get My Free Post-Bankruptcy Assessment"
                subheading="Fast & Confidential"
                paragraph="Find out if your credit file can be fixed after bankruptcy – free, fast, and confidential."
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
      </section>

      {/* Opening Section */}
      <Section title="Don&apos;t let administrative errors rob you of your legal fresh start">
        <p>
          Right, let&apos;s be straight up about this – getting through bankruptcy or a debt agreement takes guts,
          but rebuilding your credit afterwards feels like an uphill battle.
        </p>
        <p className="mt-4">
          You&apos;ve done the hard yards. You&apos;ve been through the legal process, dealt with trustees, paid what you
          could, and got your discharge. The law says you deserve a fresh start, but your credit file is still a bloody
          mess.
        </p>
        <p className="mt-4">
          Maybe there are old debts still showing that should have been cleared by your bankruptcy. Maybe
          creditors haven&apos;t updated their records properly. Maybe there are defaults and judgments from before
          your bankruptcy that should be marked differently now.
        </p>
        <p className="mt-4">
          <strong>Here&apos;s what most Aussies don&apos;t know: heaps of post-bankruptcy credit problems can actually be
          fixed much faster than waiting it out.</strong> We&apos;re talking about debts that should have been discharged but are still showing as active, creditors who
          haven&apos;t updated their records after your bankruptcy, incorrect dates that extend how long things stay on
          your file, and general administrative stuff-ups that are keeping your credit stuffed longer than legally
          required.
        </p>
        <p className="mt-4">
          Australian Credit Solutions specialises in credit repair after bankruptcy and debt agreements across
          Australia. Three years of industry awards, 98% success rate when we take cases, and we only work on post-
          bankruptcy cases where there are genuine legal grounds to challenge incorrect credit information.
        </p>
      </Section>
      <ReviewsWidget />

      {/* Impact Section */}
      <Section title="How Bankruptcy and Debt Agreements Affect Your Credit">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-2 grid gap-4 sm:grid-cols-2"
        >
          {[
            {
              h: "Bankruptcy Shows on Your File for 5 Years",
              p: "From your discharge date, bankruptcy information stays visible for 5 years. This includes the bankruptcy notation itself and details about when it started and finished.",
            },
            {
              h: "Debt Agreements Stay for 5 Years Too",
              p: "Part IX debt agreements also appear on your credit file for 5 years from when the agreement is completed or terminated.",
            },
            {
              h: "Related Debts Should Be Marked Correctly",
              p: "Debts included in your bankruptcy should show as &apos;discharged in bankruptcy&apos; not as active defaults or court judgments. Many creditors mess this up.",
            },
            {
              h: "New Defaults Shouldn&apos;t Appear Post-Discharge",
              p: "Once you&apos;re discharged, creditors can&apos;t add new defaults for debts that were included in your bankruptcy. If they do, that&apos;s a reporting error.",
            },
            {
              h: "Your Credit Score Takes a Massive Hit",
              p: "Bankruptcy typically drops your credit score to the 200-400 range. Debt agreements have similar impacts. Recovery is slow without intervention.",
            },
            {
              h: "Employment and Rental Applications Get Harder",
              p: "Many employers and landlords check for bankruptcy history. This can affect job opportunities and rental applications even after discharge.",
            },
            {
              h: "Rebuilding Credit Feels Impossible",
              p: "Most lenders won&apos;t touch you for years after bankruptcy. The few who will charge obscene interest rates and offer terrible terms.",
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

      {/* What We Can Fix */}
      <Section title="What We Can Fix After Bankruptcy or Debt Agreement">
        <p className="text-slate-700">
          <strong>Important Note:</strong> We can only dispute incorrect, outdated, or improperly reported information. 
          We help Australians challenge credit problems where there are genuine grounds under Australian credit and bankruptcy law.
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Incorrect Debt Status After Discharge"
            bullets={[
              "Debts still showing as active that should show &apos;discharged in bankruptcy&apos;",
              "Defaults appearing for debts that were included in your bankruptcy",
              "Court judgments not updated to reflect bankruptcy discharge",
              "Collection activities continuing on discharged debts",
            ]}
          />
          <Card
            title="Administrative Errors in Bankruptcy Reporting"
            bullets={[
              "Wrong bankruptcy start or end dates extending the 5-year period",
              "Duplicate bankruptcy entries across different credit bureaus",
              "Incorrect trustee information or case details",
              "Missing discharge information that should clear related debts",
            ]}
          />
          <Card
            title="New Defaults Applied Incorrectly Post-Discharge"
            bullets={[
              "Fresh defaults on debts that were discharged in bankruptcy",
              "New court judgments for discharged debts",
              "Collection listings appearing after bankruptcy completion",
              "Payment demands for debts covered by bankruptcy",
            ]}
          />
          <Card
            title="Debt Agreement Administrative Problems"
            bullets={[
              "Creditors not recognizing completed debt agreements",
              "New defaults on debts covered by the agreement",
              "Incorrect completion dates extending the reporting period",
              "Missing updates showing successful completion",
            ]}
          />
          <Card
            title="Non-Bankruptcy Debts Incorrectly Affected"
            bullets={[
              "Secured debts incorrectly marked as discharged",
              "Debts incurred after discharge date affected by bankruptcy notation",
              "Joint debts where only one party went bankrupt",
              "Debts not included in bankruptcy statement of affairs",
            ]}
          />
          <Card
            title="Credit Reporting Procedural Errors"
            bullets={[
              "Information staying on file beyond the 5-year legal limit",
              "Bankruptcy information appearing on wrong person&apos;s file",
              "Cross-bureau inconsistencies in bankruptcy reporting",
              "Missing discharge documentation causing ongoing issues",
            ]}
          />
        </motion.div>
      </Section>

      {/* Process */}
      <Section title="Our Proven Process: Rebuild Credit After Bankruptcy">
        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4 text-slate-700"
        >
          {[
            {
              title: "Post-Bankruptcy Credit File Analysis",
              description:
                "We obtain your credit reports from all three bureaus and review them against your bankruptcy or debt agreement documentation to identify what should and shouldn&apos;t be showing.",
            },
            {
              title: "Bankruptcy Law Compliance Review",
              description:
                "We check that all information is being reported according to Australian bankruptcy and credit reporting laws, including correct dates, status updates, and discharge implications.",
            },
            {
              title: "Creditor Record Verification",
              description:
                "We identify creditors who haven&apos;t properly updated their records after your discharge and determine what corrections need to be made.",
            },
            {
              title: "Strategic Dispute Process",
              description:
                "We challenge incorrect information using bankruptcy discharge papers, trustee documentation, and credit law requirements to get errors corrected.",
            },
            {
              title: "Credit File Cleanup and Monitoring",
              description:
                "Once incorrect information is removed or corrected, we monitor your file to ensure changes stick and provide guidance on rebuilding credit properly.",
            },
            {
              title: "Post-Bankruptcy Credit Building Strategy",
              description:
                "We provide advice on safely rebuilding your credit profile without falling back into financial difficulty.",
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
      <Section title="Success Stories: Real Aussies Who Rebuilt After Bankruptcy">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Testimonial name="Robert from Mackay – Carpenter Who Lost Everything in GFC">
            &quot;Went bankrupt in 2018 when construction work dried up during a local downturn. Got discharged properly in 2019, but 3 years later I was still getting knocked back for basic credit because half my old creditors never updated their systems. Had $18,000 worth of debts still showing as active defaults even though they were discharged in my bankruptcy. ACS used my discharge papers to prove the debts were legally cleared. Got 7 defaults removed in 8 weeks, credit score jumped from 280 to 520. Finally got approved for a secured credit card to start rebuilding properly.&quot;
          </Testimonial>
          <Testimonial name="Jenny from Perth – Mum Who Came Back From Debt Agreement">
            &quot;Did a debt agreement in 2019 after my marriage breakdown left me with debts I couldn&apos;t handle alone. Completed it successfully in 2022, but creditors kept adding new defaults on the same debts even after the agreement was finished. Couldn&apos;t get approved for anything – not even a mobile phone contract. ACS proved the debt agreement covered all those debts and the new defaults were illegal. Got 5 incorrect defaults removed, score improved by 140 points. Got approved for rental, phone plan, and even a small personal loan. Feel human again.&quot;
          </Testimonial>
          <Testimonial name="Mike from Adelaide – Tradie Starting Over">
            &quot;Bankruptcy from a failed business partnership in 2020, discharged in 2021. Should have been clear to start rebuilding, but my business partner&apos;s creditors kept chasing me for debts that were in my bankruptcy. New defaults kept appearing on debts I thought were finished. ACS used the court records to prove which debts were included in my bankruptcy statement of affairs. Stopped the illegal defaults, got 4 incorrect ones removed. Score went from 310 to 580. Got equipment finance to restart my business properly.&quot;
          </Testimonial>
          <Testimonial name="Lisa from Brisbane – Nurse Who Overcame Medical Bankruptcy">
            &quot;Had to go bankrupt in 2019 due to massive medical bills from cancer treatment. Discharged in 2020, but hospital billing departments kept sending me to collections for bills that were covered by the bankruptcy. Three different collection agencies put defaults on my file for the same medical debts. ACS used my discharge papers and hospital records to prove all those debts were legally cleared. Got 6 collection defaults removed in 6 weeks. Credit score improved enough to get a car loan for reliable transport to work.&quot;
          </Testimonial>
        </motion.div>
      </Section>

      {/* Why Choose Us */}
      <Section title="Why Choose Us for Post-Bankruptcy Credit Repair">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {[
            "We understand bankruptcy and credit law – most credit repair companies don&apos;t understand how bankruptcy affects credit reporting.",
            "98% success rate when we take cases – we only take post-bankruptcy cases where there are genuine legal grounds to challenge incorrect information.",
            "No Win, No Fee after bankruptcy – you&apos;ve already been through financial difficulty. Our admin fee covers assessment costs, but if we don&apos;t successfully correct your targeted incorrect listings, you don&apos;t pay success fees.",
            "Sensitive handling of bankruptcy situations – we understand bankruptcy is often caused by circumstances beyond your control.",
            "Licensed under ASIC ACL 532003 – we&apos;re properly licensed and regulated. When you&apos;re rebuilding your financial life, you need professionals who are accountable and experienced.",
            "Australia-wide bankruptcy credit support – bankruptcy is federal law, so we help people rebuilding after bankruptcy across all Australian states and territories.",
            "Fast results when you need fresh credit – we understand you want to rebuild your financial life quickly. Our process focuses on getting the biggest improvements in the shortest time.",
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
      <Section title="Our Post-Bankruptcy Credit Repair Service Options">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2"
        >
          <PriceCard
            name="Express Bankruptcy Credit Cleanup"
            timeline="6-10 weeks typically"
            perfectFor="Urgent finance needs, rental applications, employment requirements"
            includes={[
              "Priority processing",
              "Discharge documentation review",
              "Rapid corrections",
            ]}
          />
          <PriceCard
            name="Complete Post-Discharge Credit Overhaul"
            timeline="8-16 weeks typically"
            perfectFor="Complex cases, multiple creditor issues, extensive incorrect listings"
            includes={[
              "Full bankruptcy compliance review",
              "Comprehensive creditor communication",
              "Ongoing monitoring",
            ]}
            featured
          />
          <PriceCard
            name="Debt Agreement Credit Correction"
            timeline="6-12 weeks typically"
            perfectFor="Recently completed debt agreements, creditor non-compliance issues"
            includes={[
              "Agreement documentation review",
              "Creditor update enforcement",
              "Status corrections",
            ]}
          />
          <PriceCard
            name="Long-Term Bankruptcy Recovery"
            timeline="12+ weeks with ongoing monitoring"
            perfectFor="Complex business bankruptcy, ongoing creditor issues, employment-sensitive cases"
            includes={[
              "Comprehensive rebuild strategy",
              "Ongoing dispute management",
              "Credit building guidance",
            ]}
          />
        </motion.div>
        <div className="mt-6 rounded-xl border border-dashed border-blue-300 bg-blue-50 p-4 text-sm text-slate-600">
          <strong>
            All services include our No Win No Fee guarantee:
          </strong>{" "}
          If we don&apos;t successfully correct your targeted incorrect post-bankruptcy listings, you don&apos;t pay success fees. 
          Pricing is customised based on your specific bankruptcy or debt agreement situation.
          <br />
          <em>Custom quotes provided after bankruptcy file review.</em>
        </div>
      </Section>

      {/* Recovery Timeline */}
      <Section title="How Long Does Credit Recovery Take After Bankruptcy?">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Immediate Post-Discharge (0-6 months)"
            bullets={[
              "Credit score typically 200-400 range",
              "Most mainstream lenders won&apos;t consider applications",
              "Focus should be on correcting credit file errors",
              "Secured credit cards may be only option",
            ]}
          />
          <Card
            title="Short-Term Recovery (6-18 months)"
            bullets={[
              "Professional dispute resolution can improve score to 400-550 range",
              "Some specialist lenders become accessible",
              "Secured credit products help rebuild payment history",
              "Employment and rental prospects improve",
            ]}
          />
          <Card
            title="Medium-Term Rebuilding (18 months-3 years)"
            bullets={[
              "Consistent payments and time create gradual improvement",
              "Credit score may reach 500-650 range",
              "More credit options become available at higher rates",
              "Can access some mainstream products with conditions",
            ]}
          />
          <Card
            title="Long-Term Recovery (3-5 years)"
            bullets={[
              "Bankruptcy still visible but impact diminishes",
              "Credit score may reach 600-700+ range with good management",
              "Most products become accessible at near-normal rates",
              "Can compete for better terms",
            ]}
          />
        </motion.div>
        <div className="mt-6 rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-blue">The Professional Advantage</h3>
          <p className="mt-3 text-slate-700">
            Without professional help, many people stay in the 200-400 score range for years because incorrect information never gets fixed. 
            Professional dispute resolution can accelerate recovery by 12-24 months.
          </p>
        </div>
      </Section>

      {/* Understanding Rights */}
      <Section title="Understanding Your Rights After Bankruptcy Discharge">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-2 space-y-4 text-slate-700"
        >
          {[
            "Included debts must be marked correctly: Any debt that was included in your bankruptcy should be marked as &apos;discharged in bankruptcy&apos; not as an active default or judgment.",
            "No new defaults on old debts: Creditors cannot add new defaults for debts that were included in your bankruptcy after your discharge date.",
            "Bankruptcy information timing: Bankruptcy information should only stay on your file for 5 years from discharge, not from when you first went bankrupt.",
            "Creditor collection must stop: Creditors cannot pursue collection activities (including credit reporting) for debts discharged in bankruptcy.",
            "Your right to dispute errors: You have the right to challenge any credit information that doesn&apos;t comply with bankruptcy and credit reporting laws.",
            "Why professional help matters: Creditors often don&apos;t update their systems properly after bankruptcy. You need someone who understands both bankruptcy law and credit reporting requirements to enforce your rights effectively.",
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

      {/* Common Myths */}
      <Section title="Common Myths About Credit After Bankruptcy">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4"
        >
          {[
            {
              myth: "I Have to Wait 7 Years to Get Credit Again",
              reality: "Bankruptcy information stays for 5 years in Australia, not 7. Even during those 5 years, you can rebuild credit with the right approach and corrected information."
            },
            {
              myth: "All My Debts Are Gone So My Credit File Should Be Clean",
              reality: "Bankruptcy discharges debts legally but doesn&apos;t automatically clean your credit file. Creditors must be told to update their records, and many don&apos;t do it properly."
            },
            {
              myth: "I Can&apos;t Do Anything to Improve My Credit Until Bankruptcy Falls Off",
              reality: "Correcting errors and building new positive payment history can significantly improve your credit score during the 5-year period."
            },
            {
              myth: "Debt Agreements Are Better for Your Credit Than Bankruptcy",
              reality: "Both show on your credit file for 5 years. The choice should be based on your financial situation, not just credit impact."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="font-semibold text-red-600">Myth: &quot;{item.myth}&quot;</h3>
              <p className="mt-2 text-sm text-slate-700">
                <strong className="text-green-600">Reality:</strong> {item.reality}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* FAQs */}
      <Section title="Common Questions About Credit Repair After Bankruptcy">
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

      {/* Cost of keeping errors */}
      <Section title="The Real Cost of Not Fixing Post-Bankruptcy Credit Issues">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">
              What Incorrect Credit Information Actually Costs You Long-Term
            </h3>
            {[
              "Extended recovery timeline: Without professional help, credit recovery after bankruptcy typically takes 4-5 years. Correcting errors can reduce this to 2-3 years.",
              "Employment impact: Many jobs check credit history, especially in banking, government, and senior management roles. Poor credit can cost you career opportunities worth tens of thousands in lost income.",
              "Housing and rental costs: Bad credit after bankruptcy affects housing through higher rental deposits, difficulty accessing rental properties, and higher interest rates on eventual home loans.",
              "Business and investment opportunities: Clean credit opens doors to business finance, investment property loans, equipment finance, and partnership opportunities.",
              "Interest rate penalties: Premium rates mean credit cards at 25%+ instead of 12-15%, personal loans at 20%+ instead of 8-12%, and home loans at 8%+ instead of 6%.",
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
              Your Financial Fresh Start Doesn&apos;t Have to Wait Years
            </h3>
            <p className="mt-3 text-slate-700">
              You&apos;ve already been through the hardest part by going through bankruptcy or completing a debt agreement.
              You faced your financial problems head-on instead of hiding from them. The law says you deserve a fresh start.
            </p>
            <p className="mt-3 text-slate-700">
              Don&apos;t let administrative errors and creditor laziness rob you of that fresh start.
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

      {/* Getting Started CTA */}
      <Section title="Getting Started: Your Free Post-Bankruptcy Credit Assessment">
        <ol className="mt-4 space-y-3 text-slate-700">
          {[
            "Confidential bankruptcy consultation (25 minutes) — call 0489 265 737 for a confidential discussion about your bankruptcy or debt agreement and current credit situation.",
            "Complete post-bankruptcy credit analysis — we review your credit file against your bankruptcy discharge papers or debt agreement completion documents.",
            "Bankruptcy law compliance review — we check that all information complies with Australian bankruptcy and credit reporting laws, identifying errors and omissions.",
            "Creditor communication strategy — we develop a plan to contact creditors who haven&apos;t properly updated their records and credit bureaus with incorrect information.",
            "Professional error correction process — we handle all disputes and corrections while you focus on rebuilding your financial life.",
            "Credit building guidance and support — once errors are corrected, we provide guidance on safely rebuilding your credit without falling back into financial difficulty.",
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
                No Win No Fee — Custom pricing
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
