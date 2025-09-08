// File: app/credit-repair-first-home-buyers/page.jsx
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { motion } from "framer-motion";
import FooterFormWithSuspense from "@/components/FooterFormWithSuspense";
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

export default function FirstHomeBuyerCreditRepairPage() {
  // FAQ data for structured data
  const faqData = [
    {
      question: "How long does first home buyer credit repair take?",
      answer:
        "First home buyer credit repair typically takes 4-12 weeks depending on complexity. Simple issues like single defaults may resolve in 4-6 weeks, while complex cases with multiple problems can take 8-16 weeks. We work within your house hunting timeline where possible.",
    },
    {
      question: "Will credit repair guarantee my home loan approval?",
      answer:
        "Credit repair improves your chances dramatically but doesn&apos;t guarantee approval – your income, employment, and deposit matter too. However, clean credit opens access to government schemes and better rates that make approval much more likely.",
    },
    {
      question: "Can I get a home loan with defaults on my credit file?",
      answer:
        "Some non-bank lenders might approve you with defaults, but you&apos;ll pay premium rates and miss out on government assistance. Much better to remove disputable defaults first for access to better loans and grants.",
    },
    {
      question: "What credit score do I need for first home buyer programs?",
      answer:
        "Generally 650+ for most government schemes, 600+ for low deposit loans, 700+ for the best rates. Every 50 points improvement opens up significantly better options.",
    },
    {
      question: "Should I wait to save a bigger deposit or fix credit first?",
      answer:
        "Usually fix credit first. Clean credit with 5% deposit (government scheme) is often better than bad credit with 20% deposit. You save years and access government assistance.",
    },
  ];

  // Generate structured data for this service page
  const structuredData = generateMinimalStructuredData({
    pathname: "/credit-repair-first-home-buyers",
    title:
      "Credit Repair for First Home Buyers Australia | Get Your Dream Home Despite Bad Credit",
    description:
      "Don&apos;t let bad credit kill your first home dreams. We help first home buyers fix credit fast for government grants and home loans. Remove defaults, improve credit score, get mortgage-ready. 98% success rate, No Win No Fee.",
    isService: true,
    serviceType: "First Home Buyer Credit Repair",
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
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=")`,
          }}
        ></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Credit Repair for First Home Buyers Australia
                <span className="block mt-2 text-blue">
                  Get Your Dream Home Despite Bad Credit
                </span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Don&apos;t let bad credit kill your first home dreams. We help
                  first home buyers fix credit fast for government grants and
                  home loans. Remove defaults, improve credit score, get
                  mortgage-ready.{" "}
                  <strong className="font-semibold text-blue">
                    98% success rate
                  </strong>
                  ,{" "}
                  <strong className="font-semibold text-blue">
                    No Win No Fee
                  </strong>
                  .
                </p>

                <p className="text-base text-gray-600">
                  Your first home shouldn&apos;t be impossible because of old
                  credit mistakes. We specialise in credit repair for first home
                  buyers - getting you ready for First Home Owner Grants, low
                  deposit loans, and better interest rates. Turn your house
                  dreams into reality.
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
                  Fix My Credit for First Home Now
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
              <FooterFormWithSuspense
                heading="Get My Free First Home Buyer Credit Assessment"
                subheading="Fast & Confidential"
                paragraph="Find out if your credit can be fixed for first home ownership – free, fast, and confidential."
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
      <ReviewsWidget />
      {/* Opening Section */}
      <Section title="Don't let bad credit kill your first home dreams">
        <p>
          Right, let&apos;s be real here – being a first home buyer in Australia
          is tough enough without bad credit making it bloody impossible.
        </p>
        <p className="mt-4">
          House prices are mental, deposits seem impossible to save, and then
          you discover your credit file is stuffed from some mistake you made
          years ago when you were young and stupid.
        </p>
        <p className="mt-4">
          Maybe it&apos;s a default from a phone bill you forgot about at uni.
          Maybe it&apos;s late payment marks from when you were casual and money
          was tight. Or maybe it&apos;s credit enquiries from when you were
          desperately trying to get approved for anything and didn&apos;t know
          how much it was hurting your score.
        </p>
        <p className="mt-4">
          <strong>
            Here&apos;s what really gets us fired up: most first home buyers
            don&apos;t even know their credit is holding them back until
            it&apos;s too late.
          </strong>{" "}
          You&apos;ve saved the deposit, sorted your paperwork, found the
          perfect place, then WHAM – mortgage rejection because of something
          stupid from your past.
        </p>
        <p className="mt-4">
          Australian Credit Solutions specialises in credit repair for first
          home buyers across Australia. Three years of industry awards, 98%
          success rate when we take cases, and we work specifically with first
          time buyers to make home ownership achievable.
        </p>
      </Section>

      {/* Impact Section */}
      <Section title="Why Bad Credit Is Destroying First Home Buyer Dreams">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-2 grid gap-4 sm:grid-cols-2"
        >
          {[
            {
              h: "Government Grant Eligibility Gets Killed",
              p: "First Home Owner Grants and schemes like HomeBuilder often require good credit for the associated loans. Bad credit can disqualify you from grants worth $10,000-45,000+ depending on your state.",
            },
            {
              h: "Low Deposit Loan Access Disappears",
              p: "Programs like the First Home Loan Deposit Scheme (5% deposit) require good credit. Bad credit forces you into 20% deposit territory – that&apos;s an extra $50,000-80,000 you need upfront.",
            },
            {
              h: "Lenders Mortgage Insurance Goes Through the Roof",
              p: "LMI premiums increase dramatically with poor credit. Instead of paying $8,000-15,000, you might cop $20,000-30,000+ in insurance costs.",
            },
            {
              h: "Interest Rates Become Brutal for Young Buyers",
              p: "First home buyers often get the best rates to help them into the market. Bad credit kills this advantage. On a $500,000 first home loan, that&apos;s $162,500 extra over 30 years.",
            },
            {
              h: "Shared Ownership Schemes Become Impossible",
              p: "Government shared equity schemes require excellent credit. Bad credit locks you out of programs designed specifically to help first home buyers.",
            },
            {
              h: "Your Timeline Gets Completely Destroyed",
              p: "While you&apos;re waiting for credit to improve naturally (5 years), house prices keep rising. A $500,000 house today could be $650,000+ in 5 years while you&apos;re waiting.",
            },
            {
              h: "Competition with Clean Credit Buyers",
              p: "In hot markets, sellers and agents prefer buyers with pre-approval. Bad credit means no pre-approval, which means missing out on properties to buyers with clean credit.",
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

      {/* What We Fix */}
      <Section title="What Credit Issues We Fix for First Home Buyers">
        <p className="text-slate-700">
          <strong>Important Note:</strong> We can only dispute incorrect,
          unfair, or improperly applied credit listings. We help first home
          buyers challenge credit problems where there are genuine grounds under
          Australian credit law.
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="University and Student Life Credit Disasters"
            bullets={[
              "Phone bill defaults from uni accommodation address changes",
              "Gym membership defaults when you moved cities for work",
              "Credit card defaults from casual work income fluctuations",
              "Utility bills in share houses where housemates didn&apos;t pay their share",
            ]}
          />
          <Card
            title="Early Career Credit Problems"
            bullets={[
              "Late payment marks during probation periods with irregular pay",
              "Defaults during job transitions or unemployment periods",
              "Buy-now-pay-later defaults that seemed harmless at the time",
              "Casual work affecting payment consistency",
            ]}
          />
          <Card
            title="Rental and Share House Credit Issues"
            bullets={[
              "Utility defaults from share house disasters",
              "Internet and phone bills left by previous housemates",
              "Bond and rental issues affecting credit applications",
              "Address changes not updated causing billing problems",
            ]}
          />
          <Card
            title="Credit Card and Personal Finance Mistakes"
            bullets={[
              "Maxed out credit cards from inexperience",
              "Personal loan defaults from overcommitting when young",
              "Store credit defaults from retail shopping mistakes",
              "Payday loan disasters from desperate situations",
            ]}
          />
          <Card
            title="Identity and Administrative Errors"
            bullets={[
              "Identity mix-ups with family members (common surnames, similar names)",
              "Student address changes creating billing confusion",
              "Parents or family using details without permission",
              "Administrative errors when moving between states for work/study",
            ]}
          />
          <Card
            title="Credit Enquiry Disasters"
            bullets={[
              "Multiple loan applications when they don&apos;t understand enquiry impact",
              "Car finance applications creating too many enquiries",
              "Credit card applications for rewards without understanding consequences",
              "Broker applications hitting multiple lenders simultaneously",
            ]}
          />
        </motion.div>
      </Section>

      {/* Process */}
      <Section title="Our Proven Process: First Home Buyer Credit Repair">
        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4 text-slate-700"
        >
          {[
            {
              title: "First Home Buyer Credit Assessment",
              description:
                "We understand first home buyer timelines and government scheme requirements. Our assessment focuses specifically on what&apos;s stopping your access to first home buyer programs and competitive rates.",
            },
            {
              title: "Government Scheme Eligibility Analysis",
              description:
                "We analyze your credit against requirements for First Home Owner Grants in your state, First Home Loan Deposit Scheme eligibility, shared equity program requirements, and low deposit loan criteria from major banks.",
            },
            {
              title: "First Home Buyer Dispute Strategy",
              description:
                "We prioritize credit issues that&apos;ll have the biggest impact on your first home purchase: defaults that disqualify you from government schemes, payment history issues affecting low deposit loan access, and credit enquiries making you look desperate to lenders.",
            },
            {
              title: "Timeline-Focused Dispute Process",
              description:
                "First home buyers often have target purchase timelines. We work within your timeframe whether you&apos;re buying in 3 months or 12 months.",
            },
            {
              title: "Mortgage-Ready Documentation",
              description:
                "Once your credit improves, we provide documentation for mortgage brokers and banks showing the improvements and your readiness for first home buyer programs.",
            },
            {
              title: "Ongoing First Home Buyer Support",
              description:
                "We monitor your credit during your house hunting process and provide guidance on protecting your improved credit while applying for loans.",
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
      <Section title="Success Stories: Real First Home Buyers Who Made It Happen">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Testimonial name="Jake and Emma from Western Sydney – Young Teachers">
            &quot;Had been saving for 4 years but kept getting knocked back for
            home loans because of Jake&apos;s $1,200 default from a gym
            membership he&apos;d cancelled properly. Every bank said no to the
            First Home Loan Deposit Scheme because of the default. ACS removed
            the default in 6 weeks by proving the gym never sent proper
            cancellation confirmations. Got approved for 5% deposit loan the
            next month, accessed $25,000 First Home Owner Grant, bought a lovely
            3-bedroom place in Penrith. Now our mortgage payments are less than
            rent would&apos;ve been.&quot;
          </Testimonial>
          <Testimonial name="Sam from Melbourne – IT Graduate">
            &quot;Fresh out of uni, had a phone bill default for $380 from when
            I moved out of student accommodation and Telstra kept billing the
            old address. Couldn&apos;t get approved anywhere despite having a
            good job and deposit saved. ACS proved the billing address was wrong
            after I&apos;d properly updated my details. Default removed in 5
            weeks, credit score jumped 89 points. Got approved for low deposit
            loan, kept the $20,000 government grant, bought a unit in Brunswick.
            It&apos;s already worth $50,000 more than I paid.&quot;
          </Testimonial>
          <Testimonial name="Chloe from Brisbane – Nurse Saving Solo">
            &quot;Single first home buyer trying to get into the market on a
            nurse&apos;s salary. Had 4 late payment marks on my credit card from
            when I was working casual shifts and direct debits kept bouncing on
            weird pay cycles. Banks wouldn&apos;t touch me for low deposit
            loans. ACS proved the late payments were due to my employer&apos;s
            irregular pay schedule, not financial irresponsibility. Got all 4
            marks removed, score improved by 67 points. Approved for First Home
            Loan Deposit Scheme with 5% deposit, bought a townhouse in
            Logan.&quot;
          </Testimonial>
          <Testimonial name="Tom and Sarah from Adelaide – Young Tradies">
            &quot;Both apprentices when we first applied, had credit enquiries
            from multiple car loan attempts when we needed work vehicles. Looked
            desperate to lenders even though we both had secure jobs. ACS
            removed 8 unauthorised enquiries from dodgy car dealers who&apos;d
            run credit without proper permission. Credit scores improved enough
            to access first home buyer rates. Got approved for shared equity
            scheme, government put in 25%, we put in 15%, bought a great place
            in Elizabeth. Building equity instead of paying someone else&apos;s
            mortgage.&quot;
          </Testimonial>
        </motion.div>
      </Section>

      {/* Why Choose Us */}
      <Section title="Why Choose Us for First Home Buyer Credit Repair">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {[
            "We understand first home buyer challenges – young Aussies face unique credit challenges from uni mistakes, early career struggles, and share house disasters.",
            "We know government scheme requirements – First Home Owner Grants, deposit schemes, shared equity programs all have different credit requirements. We know exactly what credit profile you need for each program.",
            "98% success rate when we take cases – we only take cases where we can genuinely help first home buyers achieve their property dreams.",
            "No Win, No Fee for first home buyers – young people are often stretched financially saving deposits. If we don&apos;t successfully improve your credit for home buying, you don&apos;t pay success fees.",
            "Fast results for time-sensitive markets – property markets move fast and first home buyers often compete against investors. We prioritize first home buyer cases to get you mortgage-ready quickly.",
            "Licensed under ASIC ACL 532003 – when you&apos;re making the biggest purchase of your life, you need professionals who are accountable and experienced.",
            "Australia-wide first home buyer support – government schemes and lending criteria are similar nationwide. We help first time buyers from Perth to Cairns access the same opportunities.",
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
      <Section title="Our First Home Buyer Credit Repair Service Options">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2"
        >
          <PriceCard
            name="Express First Home Buyer Service"
            timeline="4-8 weeks typically"
            perfectFor="Active house hunting, pre-approval needed soon, government scheme applications"
            includes={[
              "Priority processing",
              "Government scheme eligibility focus",
              "Regular updates",
            ]}
          />
          <PriceCard
            name="Complete First Home Credit Overhaul"
            timeline="8-12 weeks typically"
            perfectFor="Major credit issues, planning to buy in 6-12 months, comprehensive cleanup needed"
            includes={[
              "Full credit reconstruction",
              "Score optimization",
              "Ongoing monitoring",
            ]}
            featured
          />
          <PriceCard
            name="Government Scheme Preparation"
            timeline="6-10 weeks typically"
            perfectFor="Qualifying for specific government programs, shared equity schemes, grant applications"
            includes={[
              "Scheme-specific credit requirements",
              "Eligibility optimization",
              "Application support",
            ]}
          />
          <PriceCard
            name="Student Debt Credit Recovery"
            timeline="6-12 weeks typically"
            perfectFor="Recent graduates, student accommodation issues, early career credit problems"
            includes={[
              "University-era dispute focus",
              "Young professional credit building",
              "Career-focused approach",
            ]}
          />
        </motion.div>
        <div className="mt-6 rounded-xl border border-dashed border-blue-300 bg-blue-50 p-4 text-sm text-slate-600">
          <strong>All services include our No Win No Fee guarantee:</strong> If
          we don&apos;t successfully improve your credit for first home buying,
          you don&apos;t pay success fees. Pricing is customised based on your
          specific situation and first home buyer goals.
        </div>
      </Section>

      {/* Government Grants */}
      <Section title="First Home Owner Grant Eligibility and Credit Requirements">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="First Home Owner Grant Requirements by State"
            bullets={[
              "NSW: $10,000 grant requires loan approval (credit affects this)",
              "VIC: $20,000 grant for regional areas (credit affects loan eligibility)",
              "QLD: $15,000 grant requires home loan approval",
              "WA: $10,000 grant tied to loan approval requirements",
              "SA: $15,000 grant requires satisfactory credit assessment",
              "TAS: $20,000 grant with credit assessment requirements",
            ]}
          />
          <Card
            title="First Home Loan Deposit Scheme (5% deposit)"
            bullets={[
              "Federal government scheme allowing 5% deposits instead of 20%",
              "Good credit history with minimal defaults required",
              "Consistent payment history essential",
              "Credit score typically 650+ for approval",
              "No recent credit issues or bankruptcies",
            ]}
          />
          <Card
            title="Shared Equity Schemes"
            bullets={[
              "Government buys share of your home",
              "Clean credit history with no major defaults required",
              "Demonstrated ability to service reduced loan amount",
              "Credit score requirements vary by state (usually 600-650+)",
            ]}
          />
          <Card
            title="Low Deposit Home Loans for First Home Buyers"
            bullets={[
              "Excellent Credit (700+ score): 5% deposit with government schemes",
              "Good Credit (650-699 score): 10-15% deposit typically required",
              "Fair Credit (600-649 score): 15-20% deposit often required",
              "Poor Credit (below 600 score): 20%+ deposit almost always required",
            ]}
          />
        </motion.div>
        <div className="mt-6 rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-blue">
            The Brutal Reality
          </h3>
          <p className="mt-3 text-slate-700">
            Bad credit doesn&apos;t just affect loan approval – it can cost you
            $10,000-45,000+ in government assistance you&apos;re entitled to as
            a first home buyer.
          </p>
          <p className="mt-3 text-slate-700">
            On a $500,000 first home: 5% deposit = $25,000 needed upfront vs 20%
            deposit = $100,000 needed upfront. For most young Aussies, that
            extra $75,000 is the difference between buying now and waiting 5-7
            more years.
          </p>
        </div>
      </Section>

      {/* Credit Mistakes */}
      <Section title="Credit Mistakes That Kill First Home Buyer Dreams">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-2 space-y-4 text-slate-700"
        >
          <h3 className="font-semibold text-blue">
            University Era Disasters That Haunt You
          </h3>
          {[
            "The classic phone bill default: Moving out of student accommodation but Telstra/Optus keeps billing the old address. You don&apos;t receive final bills, default gets applied, ruins your credit for 5 years.",
            "Share house utility nightmares: Joint utility accounts where one housemate stops paying their share. Everyone on the account cops the default, even if you paid your portion properly.",
            "Gym membership cancellation gone wrong: Tried to cancel when you graduated/moved cities, but gym claims you didn&apos;t follow proper procedures. Default appears months later when you&apos;re applying for your first home loan.",
            "Buy-now-pay-later disasters: Afterpay, Zip Pay, Klarna seemed harmless for small purchases. Missed payments or forgotten accounts create credit problems that affect mortgage applications.",
            "Early career credit card mistakes: Got your first credit card at 18, maxed it out, struggled to pay it back on casual wages. Late payment marks follow you into your home buying years.",
            "The timing trap: These mistakes happen at 18-23 when you&apos;re learning about money. They affect you most at 25-30 when you&apos;re trying to buy your first home. Perfect timing to destroy your property dreams.",
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
                  d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {text}
            </motion.p>
          ))}
        </motion.div>
      </Section>

      {/* FAQs */}
      <Section title="Common Questions About First Home Buyer Credit Repair">
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

      {/* Cost of Waiting */}
      <Section title="The Real Cost of Waiting vs Professional Credit Repair">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">
              What Delaying Your First Home Purchase Actually Costs
            </h3>
            {[
              "House price growth while you wait: Australian house prices typically grow 5-8% annually. A $500,000 house today becomes $634,000 in 3 years, $734,000+ in 5 years. Total extra cost of waiting: $134,000-234,000.",
              "Lost government assistance: First Home Owner Grants ($10,000-45,000), First Home Loan Deposit Scheme access, shared equity program benefits. These programs may change or become more restrictive.",
              "Rental money down the drain: Average Australian rent $450-600+ per week. 3 years extra renting costs $70,200-93,600. 5 years costs $117,000-156,000. This money builds someone else&apos;s wealth, not yours.",
              "Compound interest on opportunity cost: Money spent on rent could be building equity. $500/week rent × 52 weeks × 5 years = $130,000 that could grow to $200,000+ over time invested in property.",
              "Interest rate risk: Rates change over time. Low rates today might not be available later. Every 1% rate increase costs $5,000 annually on a $500,000 loan.",
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
              Don&apos;t Let Bad Credit Kill Your First Home Dreams
            </h3>
            <p className="mt-3 text-slate-700">
              Every month you delay fixing your credit is another month of
              missing out on your own home while house prices keep climbing.
            </p>
            <p className="mt-3 text-slate-700">
              You&apos;re competing against investors with unlimited budgets and
              other first home buyers with clean credit. Professional credit
              repair can get you into the market years earlier, saving hundreds
              of thousands in house price growth.
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
      <Section title="Getting Started: Your Free First Home Buyer Credit Assessment">
        <ol className="mt-4 space-y-3 text-slate-700">
          {[
            "First home buyer consultation (20 minutes) — call 0489 265 737 to discuss your first home dreams, timeline, and credit concerns.",
            "Complete first home buyer credit analysis — we analyze your credit file specifically against first home buyer program requirements, government scheme eligibility, and timeline constraints.",
            "Government scheme eligibility review — we explain which government programs you currently qualify for vs what you could access with improved credit, including dollar value of benefits.",
            "First home buyer strategy development — we create a plan targeting credit issues that&apos;ll have maximum impact on your first home purchase options and costs.",
            "Timeline-focused credit repair — we work within your house hunting timeline, whether that&apos;s 3 months or 12 months, to get you mortgage-ready as quickly as possible.",
            "First home success support — once your credit improves, we provide ongoing guidance during your house hunting and loan application process.",
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
