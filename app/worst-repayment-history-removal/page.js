"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import FooterForm from "@/components/FooterForm";
import Footer from "@/components/Footer";
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

// Arrow components (simplified as divs)
const ArrowIcon = () => (
  <div className="w-48 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue text-sm font-medium">
    Desktop Arrow →
  </div>
);

const ArrowIconM = () => (
  <div className="w-32 h-20 bg-blue-100 rounded-lg flex items-center justify-center text-blue text-sm font-medium">
    Mobile Arrow ↓
  </div>
);

export default function RHIRemovalPage() {
  // FAQ data
  const faqData = [
    {
      question: "Can you remove all bad repayment history?",
      answer:
        "No, we can only dispute and remove incorrect, unfair, or non-compliant entries. If you genuinely paid late and it was recorded correctly with proper notice, it'll stay on your file. But heaps of RHI entries are wrong – those are the ones we can fix.",
    },
    {
      question: "How do I know if my repayment history is incorrect?",
      answer:
        "Compare your bank statements with your credit report. If payments show as late but your statements prove you paid on time, that's incorrect RHI we can challenge.",
    },
    {
      question:
        "Will removing incorrect RHI improve my credit score immediately?",
      answer:
        "Score improvements typically show within 30-60 days. How much depends on how many incorrect entries we remove and what else is on your file.",
    },
    {
      question: "What's the difference between RHI and payment defaults?",
      answer:
        "RHI shows your monthly payment pattern for 24 months. Defaults are separate listings for debts over $150 that are 60+ days overdue. They're different things that affect your credit differently.",
    },
    {
      question: "Can I dispute repayment history myself?",
      answer:
        "You can try, but RHI disputes are technically complex. Credit providers get thousands of dispute letters monthly, and most DIY attempts get rejected for procedural reasons.",
    },
    {
      question: "How long does repayment history stay on my file?",
      answer:
        "RHI shows a rolling 24-month window. As new months get added, old months drop off. But incorrect entries need to be actively disputed – they won't just fix themselves.",
    },
    {
      question: "Will disputing RHI hurt my credit score?",
      answer:
        "No. Legitimate disputes of incorrect information cannot negatively impact your credit score. Successful removal will improve your score.",
    },
    {
      question: "What if different bureaus show different repayment history?",
      answer:
        "That's actually common and often indicates errors. We challenge inconsistencies across Equifax, Experian, and Illion to ensure your RHI is accurate and consistent.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Repayment History Removal Australia",
    description:
      "Professional RHI removal services to fix incorrect repayment history information on credit files.",
    provider: {
      "@type": "Organization",
      name: "Australian Credit Solutions",
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-8 lg:py-24">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=")`
        }}></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Repayment History Removal Australia
                <span className="block mt-2 text-blue">
                  Fix Your RHI Fast
                </span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Got incorrect repayment history information destroying your
                  credit? We remove unfair RHI marks from your credit file.{" "}
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
                  Repayment History Information (RHI) shows 24 months of payment
                  patterns that can make or break your credit score. When it&apos;s
      <Link href="/get-credit-repair" className="text-blue-600 hover:text-blue-800 underline">Get Credit Repair</Link>             wrong or unfair, we know exactly how to get it removed under
                  the Privacy Act 1988.
                </p>
              </div>

              {/* CTAs */}
              <div
                className="mt-8 relative flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
                role="group"
                aria-label="Primary actions"
              >
                <a
                  href="#"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Remove My Repayment History Now
                </a>

                <a
                  href="tel:+61489265737"
                  aria-label="Call Australian Credit Solutions on 0489 265 737"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-blue px-6 py-3 text-base font-semibold text-blue transition hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Call 0489 265 737
                </a>

                {/* Decorative arrow */}
                <div
                  className="pointer-events-none hidden lg:block"
                  aria-hidden="true"
                >
                  <ArrowIcon />
                </div>
                <div
                  className="pointer-events-none lg:hidden flex justify-center"
                  aria-hidden="true"
                >
                  <ArrowIconM />
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-1/3 relative">
        <FooterForm />
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
      <ReviewsWidget/>

      {/* Breadcrumb Navigation */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/worst-repayment-history-removal" />
      </div>

      {/* Opening Section */}
      <Section title="Look, let's be straight about this – Repayment History Information (RHI) on your credit file can be an absolute killer">
        <p>
          Most Aussies don&apos;t even know what RHI is until it&apos;s too late. It&apos;s
          basically a detailed month-by-month record of your payment behaviour
    <Link href="/blog-details/struggling-with-a-low-credit-score-here-s-how-to-fix-your-credit-score-and-move-forward" className="text-blue-600 hover:text-blue-800 underline">Struggling With A Low Credit Score Here S How To Fix Your Credit Score And Move Forward</Link>       going back 24 months. Every late payment, every missed payment, every
          &quot;current&quot; status – it&apos;s all there for lenders to see.
        </p>
        <p className="mt-4">
          But here&apos;s what really gets us fired up: heaps of repayment history
          information is just plain wrong. We&apos;re talking about payments marked
          late when you paid on time, system glitches that <Link href="/blog-details/equifax-default-removal-how-to-remove-defaults-from-your-credit-report" className="text-blue-600 hover:text-blue-800 underline">Equifax Default Removal How To Remove Defaults From Your Credit Report</Link> created false marks,
          payments during hardship arrangements that got recorded incorrectly,
          or repayment history mistakes across Equifax, Experian, and Illion
          that nobody bothered to fix.
        </p>
        <p className="mt-4">
          The good news? Under Australian law, we can dispute and remove
          incorrect or unfair repayment history entries. We help Australians
 <Link href="/blog-details/does-making-minimum-payments-hurt-your-credit-score" className="text-blue-600 hover:text-blue-800 underline">Does Making Minimum Payments Hurt Your Credit Score</Link>          clean up their repayment history under the Privacy Act 1988 and Credit
          Reporting Code.
        </p>
        <p className="mt-4">
          <strong>Important note:</strong> Accurate late payments cannot be
          removed, but errors and misreporting can often be corrected – and
          that&apos;s where we come in.
        </p>
        <p className="mt-4">
          Australian Credit Solutions specialises in repayment history removal
          across Australia. Three years of industry awards, 98% success rate
          when we take cases, and we only work on cases where we genuinely think
          we can win.
        </p>
        <p className="mt-4">
          If your repayment history is stuffed but accurate, we&apos;ll tell you
          straight. If it&apos;s stuffed and incorrect, we&apos;ll fix it.
        </p>
      </Section>

      {/* Impact Section */}
      <Section title="How Bad Repayment History Is Absolutely Smashing Your Credit">
        <p>
          Let&apos;s talk about what incorrect repayment history entries are actually
          costing you:
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
              h: "RHI Is the Number One Thing Lenders Look At",
              p: "Forget your credit score for a minute – lenders look directly at your repayment history information. Even one or two late payment marks in the last 12 months can trigger automatic rejections.",
            },
            {
              h: "Your Credit Score Gets Hammered",
              p: 'Poor repayment history can drop your credit score by 100-200 points. We\'ve seen people go from "excellent" to "poor" credit just from incorrect RHI entries.',
            },
            {
              h: "Automated Systems Reject You Instantly",
              p: "Most lenders use computer systems that scan your repayment history before a human even looks at your application. Recent late payment history = instant rejection, regardless of your income or assets.",
            },
            {
              h: "Interest Rates Become Brutal",
              p: "Even if you do get approved somewhere, bad repayment history means premium interest rates. We're talking 3-5% higher than standard rates – that's massive money over the life of a loan.",
            },
            {
              h: "It Creates a Nightmare Cycle",
              p: "Bad repayment history → loan rejections → desperate applications → more credit enquiries → even worse credit profile → more rejections. It's like quicksand.",
            },
            {
              h: "The 24-Month Window Never Closes",
              p: "New payment data gets added monthly, so if you've got incorrect entries, they keep affecting your credit for the full 24 months unless we get them removed.",
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
      <Section title="What Repayment History Information We Can Actually Remove">
        <p className="text-slate-700">
          <strong>Important Legal Note:</strong> We can only dispute and remove
          incorrect, unfair, or non-compliant repayment history entries.
          Accurate late payments that were properly applied cannot be removed –
          but you&apos;d be surprised how many RHI entries shouldn&apos;t actually be
          there.
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="System Processing Disasters"
            bullets={[
              "Payments made before due dates but processed after",
              "Direct debit failures due to bank system outages",
              "BPAY payments made on time but batch-processed late",
              "Online payment system crashes during payment processing",
            ]}
          />
          <Card
            title="Data Entry and Processing Errors"
            bullets={[
              "Payments applied to wrong account numbers",
              "Manual processing errors by credit provider staff",
              "System upgrades that corrupted payment history data",
              "Incorrect payment amounts recorded in the system",
            ]}
          />
          <Card
            title="Hardship Arrangement Violations"
            bullets={[
              "Payment arrangements not reflected in repayment history",
              "Reduced payments marked as late during hardship periods",
              "COVID-19 payment deferrals incorrectly recorded",
              "Temporary hardship arrangements not honoured in reporting",
            ]}
          />
          <Card
            title="Notice and Communication Failures"
            bullets={[
              "No adequate notice before marking payments late",
              "Grace periods not honoured in repayment history",
              "Disputed payments marked late before resolution",
              "Communication sent to outdated contact details",
            ]}
          />
          <Card
            title="Account Administration Stuff-Ups"
            bullets={[
              "Account closure dates recorded incorrectly",
              "Final payment processing errors",
              "Refunds and credits not reflected in payment history",
              "Account number changes causing payment misallocation",
            ]}
          />
          <Card
            title="Cross-Bureau Inconsistencies"
            bullets={[
              "Equifax showing different data to Experian and Illion",
              "Some bureaus missing positive payment history",
              "Incorrect dates across different reporting bodies",
              "Duplicate or conflicting repayment information",
            ]}
          />
        </motion.div>
      </Section>

      {/* Process */}
      <Section title="Our Proven RHI Removal Process">
        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4 text-slate-700"
        >
          {[
            {
              title: "Complete Repayment History Analysis",
              description:
                "We pull your credit reports from all three major bureaus – Equifax, Experian, and Illion. RHI can vary between bureaus, so we need to see the full picture.",
            },
            {
              title: "Payment Documentation Review",
              description:
                "We help you gather evidence to support challenges: bank statements, direct debit records, correspondence, hardship documentation, and system outage evidence.",
            },
            {
              title: "Legal Assessment Under Privacy Act",
              description:
                "We assess each incorrect entry against Australian credit reporting laws: Privacy Act 1988 requirements, Credit Reporting Code compliance, and consumer rights.",
            },
            {
              title: "Professional Dispute Process",
              description:
                "Generic letters don't work for RHI disputes. Our approach includes detailed challenge letters, comprehensive evidence packages, and systematic follow-up.",
            },
            {
              title: "Ongoing Monitoring and Protection",
              description:
                "RHI gets updated monthly, so we monitor your file to ensure successfully challenged entries don't reappear and new accurate data gets recorded properly.",
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
      <Section title="Success Stories: Real Aussies Who Fixed Their Repayment History">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Testimonial name="Karen from Newcastle – Teacher Screwed by System Upgrade">
            &quot;My bank did a massive system upgrade and somehow my 18 months of
            perfect direct debit payments got recorded as late in their new
            system. Every single month showed late payment history even though I
            never missed a payment. Couldn&apos;t get a car loan, couldn&apos;t refinance
            my mortgage. Spent 6 months arguing with the bank – they kept saying
            &apos;computer says no.&apos; ACS came in with legal letters and got the whole
            18 months of incorrect repayment history removed in 5 weeks. Credit
            score jumped 156 points. Got my mortgage refinance approved and
            saved $400 per month.&quot;
          </Testimonial>
          <Testimonial name="Brett from Cairns – Tradie Hit by COVID Hardship">
            &quot;During COVID lockdowns, my equipment finance company agreed to
            reduced payments for 6 months while work was slow. Signed all the
            paperwork, everything was official. But their system kept marking my
            payments as late because I wasn&apos;t paying the full amount. Ruined my
            repayment history even though I was following their own hardship
            arrangement. ACS used the hardship paperwork to prove every single
            late mark was wrong. Got 6 months of incorrect RHI removed. Finally
            got the business loan I needed to expand when work picked up.&quot;
          </Testimonial>
          <Testimonial name="Sandra from Hobart – Mum Who Moved House">
            &quot;Updated my address with my credit card company when we moved house,
            but their payments kept going to the old address somehow. Three
            months of &apos;missed payments&apos; because their system was posting
            statements to the wrong address and I had no idea payments weren&apos;t
            going through. By the time I found out, I had 3 months of terrible
            repayment history. ACS proved the address change was their stuff-up,
            not mine. Got all 3 months corrected and my credit score back to
            where it should be.&quot;
          </Testimonial>
          <Testimonial name="Jim from Gold Coast – Small Business Owner">
            &quot;Had a personal loan that I always paid early – usually 3-4 days
            before the due date. Bank upgraded their payment system and suddenly
            all my early payments were showing as late in the new system. Made
            no sense but they wouldn&apos;t fix it. 12 months of perfect payments
            showing as late payment history. ACS got bank statements proving
            every payment was early, challenged the lot, got the entire 12
            months corrected. Saved my business credit applications.&quot;
          </Testimonial>
        </motion.div>
      </Section>

      <RelatedBlock currentSlug="/worst-repayment-history-removal" heading="Related services & guides" />

      {/* Why Choose Us */}
      <Section title="Why Choose Us for Repayment History Removal">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {[
            "We Actually Understand RHI Laws – Repayment history disputes are complex. We know exactly which arguments work and which ones get ignored by credit providers.",
            "98% Success Rate When We Take Cases – We're picky about which RHI cases we accept. If we don't think we can prove the entries are incorrect, we'll tell you upfront.",
            "No Win, No Fee Confidence – You pay our $330 admin fee up front, but if we don't successfully remove your targeted repayment history entries, you don't pay success fees.",
            "Three Years of Industry Recognition – 2022, 2023, and 2024 Industry Excellence Awards for delivering real results. We're not the biggest spenders on marketing – we're the best at getting outcomes.",
            "Licensed and Regulated (ASIC ACL 532003) – We operate under proper Australian Securities and Investments Commission licensing. That means we're accountable, insured, and regulated.",
            "Australia-Wide Service – Credit reporting is federal law, so whether you're in Broome or Ballarat, we can help you with identical service levels.",
            "Direct Expert Communication – When you call, you'll talk to the actual credit specialist handling your case. No offshore call centres, no script readers.",
            "We Specialise in Complex Cases – RHI disputes often involve technical system issues and detailed payment analysis. We've got the expertise to handle complex cases that other companies can't manage.",
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

      {/* Service Options */}
      <Section title="Our RHI Removal Service Options">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          <PriceCard
            name="Express RHI Cleanup"
            timeline="2-4 weeks typically"
            perfectFor="Home loan pre-approvals, urgent business finance"
            includes={[
              "Priority processing",
              "Daily progress updates",
              "Expedited evidence gathering",
            ]}
           
          />
          <PriceCard
            name="Comprehensive RHI Review"
            timeline="4-8 weeks typically"
            perfectFor="Multiple incorrect entries, complex payment history issues"
            includes={[
              "Complete 24-month analysis",
              "Detailed evidence compilation",
              "Weekly reporting",
            ]}
           
            featured
          />
          <PriceCard
            name="Full Repayment History Overhaul"
            timeline="6-10 weeks typically"
            perfectFor="Extensive incorrect entries, multiple credit products affected"
            includes={[
              "Complete repayment history reconstruction",
              "Cross-bureau coordination",
            ]}
           
          />
          <PriceCard
            name="RHI Protection Service"
            timeline="Immediate setup + 12 months monitoring"
            perfectFor="Business owners, property investors, frequent credit users"
            includes={[
              "Monthly RHI monitoring",
              "Immediate dispute assistance",
              "Early warning alerts",
            ]}
         
          />
        </motion.div>
        <div className="mt-6 rounded-xl border border-dashed border-blue-300 bg-blue-50 p-4 text-sm text-slate-600">
          <strong>Remember:</strong> All services include our No Win No Fee
          guarantee – if we don&apos;t remove the targeted incorrect repayment
          history entries, you don&apos;t pay success fees.
        </div>
      </Section>

      {/* Outcomes */}
      <Section title="What Happens After Your Repayment History Gets Fixed">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {[
            "Your Credit Score Recovers Fast – Credit scores typically improve within 30-60 days of incorrect RHI removal. We've seen score increases of 100-200 points when extensive incorrect entries are removed.",
            "Loan Approvals Start Coming Through – Home loan applications that were getting automatic rejections often get approved once repayment history is corrected. Car finance becomes available at standard rates.",
            "Interest Rates Drop to Normal Levels – Clean repayment history qualifies you for standard market rates instead of the penalty pricing applied to people with poor payment history.",
            "Automated Systems Stop Rejecting You – Lender computer systems that were automatically declining your applications start approving them once your RHI shows proper payment patterns.",
            "Business Finance Becomes Accessible – Personal repayment history affects business lending decisions. Clean personal RHI improves access to business loans, equipment finance, and commercial facilities.",
            "Credit Cards Offer Decent Terms Again – Premium credit products with rewards programs become available. Higher limits get approved. Balance transfer offers at reasonable rates become accessible.",
            "Peace of Mind Returns – No more explaining payment issues to lenders. No more worrying about automatic rejections. You can apply for credit with confidence.",
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

      {/* Legal Rights */}
      <Section title="Understanding Your Rights: RHI Under Australian Law">
        <h3 className="text-lg font-semibold text-blue mt-4">
          What Credit Providers Must Do
        </h3>
        <p className="mt-2 text-slate-700">
          Under the Privacy Act 1988 and Credit Reporting Code, credit providers
          have strict obligations for repayment history reporting:
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4 text-slate-700"
        >
          {[
            "Accuracy Requirements: All repayment history information must be factually correct and up-to-date, based on actual payment behaviour, not system errors, consistently reported across all bureaus, and corrected when errors are identified.",
            "Proper Recording Standards: Payment history must reflect actual payment dates, not processing dates; agreed payment arrangements and hardship provisions; grace periods that are part of the credit contract; and final payments and account closures accurately.",
            "Consumer Rights for RHI Disputes: You have the right to challenge any incorrect repayment history entries, receive proper investigation of your disputes, have errors corrected across all reporting bureaus, and receive compensation if errors caused financial loss.",
            "Why Professional Help Is Essential: Credit providers have teams of lawyers and compliance specialists. You need professional representation to ensure your rights are properly exercised and your disputes are taken seriously.",
          ].map((text, index) => (
            <motion.p
              key={index}
              variants={fadeIn}
              className="flex items-start gap-2"
            >
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
              {text}
            </motion.p>
          ))}
        </motion.div>
      </Section>

      {/* FAQs */}
      <Section title="Common Questions About RHI Removal">
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

      {/* Cost of keeping incorrect RHI */}
      <Section title="The Real Cost of Keeping Incorrect Repayment History">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">
              Home Loan Impact Is Massive
            </h3>
            <p>Let&apos;s talk real numbers on what incorrect RHI is costing you:</p>
            {[
              "Clean repayment history: Access to best rates (around 6.2% variable)",
              "Recent late payment marks: Premium rates (7.5%+ variable)",
              "Multiple incorrect entries: Often declined completely",
              "On a $500,000 home loan, that rate difference costs $162,500 over 30 years. That's not small change.",
              "Car Finance Becomes Expensive: Good payment history gets bank rates from 5.9%, poor RHI means dealer finance from 12.9%+. $40,000 car loan over 5 years? That difference is $6,800 extra in interest.",
              "Credit Cards Become Basic and Costly: Clean RHI gets you platinum rewards cards with $25,000+ limits and 55-day interest-free. Poor repayment history means basic cards only, $2,000-5,000 limits, higher fees.",
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
              Your Two Clear Options
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Wait 24 months for incorrect entries to naturally cycle off
                while paying the financial penalty every single day
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
                Let us dispute and remove the incorrect entries professionally
                in weeks
              </li>
            </ul>
            <p className="mt-4 text-sm font-semibold">
              Which option makes more financial sense?
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Start My Assessment
              </a>
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

      {/* Getting Started */}
      <Section title="Getting Started: Your Free RHI Assessment">
        <ol className="mt-4 space-y-3 text-slate-700">
          {[
            "Quick Phone Chat (15 minutes) – Call 0489 265 737 for a no-obligation discussion about your repayment history. We'll explain what RHI is and whether yours looks like it has problems.",
            "Complete RHI Analysis – If we proceed, we'll obtain your reports from all three bureaus and conduct a detailed month-by-month analysis of your entire 24-month repayment history.",
            "Evidence Gathering and Strategy – We'll help you gather payment evidence and work out which RHI entries can be successfully challenged under Australian law.",
            "Professional Dispute Process – We handle all the complex legal paperwork and follow-up while keeping you informed of progress throughout the process.",
            "Results Monitoring and Protection – Once incorrect entries are removed, we'll monitor your file and provide guidance on maintaining accurate RHI going forward.",
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
          <a
            href="#"
            className="rounded-lg bg-blue px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Book My Free Assessment
          </a>
          <a
            href="tel:+61489265737"
            className="rounded-lg border-2 border-blue px-6 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors"
          >
            Call 0489 265 737
          </a>
        </div>
        <div className="mt-6 rounded-xl bg-blue-50 p-4 text-center">
          <p className="text-sm text-slate-600">
            Ring us on 0489 265 737 right now for a free chat about your
            repayment history and what we can do to fix it.
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Or complete our quick RHI assessment – takes 90 seconds and we&apos;ll
            contact you within 24 hours with your options.
          </p>
          <p className="mt-4 text-sm font-semibold text-blue">
            We&apos;re Australian Credit Solutions: three consecutive years of
            industry awards, licensed under ASIC ACL 532003, helping Aussies fix
            their credit since 2019.
          </p>
          <p className="mt-2 text-sm font-semibold text-blue">
            Your repayment history is fixable when it&apos;s wrong. Let&apos;s get it
            sorted today.
          </p>
        </div>
      </Section>

      {/* Footer trust bar */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-blue to-blue-700 p-6 text-white shadow-lg"
        >
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-sm font-medium">
                98% success rate when we take cases
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-sm font-medium">
                No Win No Fee – $330 admin fee
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-sm font-medium">
                Licensed & regulated – ASIC ACL 532003
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Related Services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/worst-repayment-history-removal" />
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
        <span className="absolute -top-3 left-6 inline-block rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white shadow">
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
      <div className="mt-4 flex flex-col gap-2">
        
        <a
          href="#"
          className="rounded-lg bg-blue px-4 py-2 font-semibold text-white hover:bg-blue-700 transition-colors text-sm text-center"
        >
          Start Now
        </a>
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
