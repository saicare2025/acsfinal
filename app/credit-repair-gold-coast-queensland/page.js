// File: app/credit-repair-gold-coast-queensland/page.jsx
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

export default function CreditRepairGoldCoastPage() {
  // FAQ data for structured data
  const faqData = [
    {
      question: "How quickly can credit repair improve my Gold Coast home loan chances?",
      answer: "Most Gold Coast clients see significant improvements in 6-12 weeks. We've had beachfront apartment approvals within 3 weeks of completing credit repair."
    },
    {
      question: "What's the difference between Gold Coast property rates with good vs bad credit?",
      answer: "Clean credit can get 2.9-3.2% home loans. Bad credit often means 7-9% or outright rejection. On a $780,000 Gold Coast median property, that's $1,960+ extra monthly."
    },
    {
      question: "Can you help with Gold Coast business finance after credit repair?",
      answer: "Absolutely. We've helped Gold Coast restaurant owners, tourism operators, and marine businesses secure equipment finance and working capital after credit repair."
    },
    {
      question: "Do you guarantee results for Gold Coast credit repair?",
      answer: "We have a 98% success rate when we accept cases. Our No Win No Fee policy means you only pay success fees when we achieve results."
    },
    {
      question: "How much does Gold Coast credit repair cost?",
      answer: "$330 admin fee upfront, then success fees only when we remove items. No ongoing monthly charges. The average client saves far more in reduced interest rates."
    }
  ];

  // Generate structured data for this service page
  const structuredData = generateMinimalStructuredData({
    pathname: "/credit-repair-gold-coast-queensland",
    title: "Credit Repair Gold Coast Queensland | Beach Lifestyle Finance | Australian Credit Solutions",
    description: "Unlock your Gold Coast dream lifestyle with 98% success rate credit repair. Remove defaults, improve scores, access beachside property finance. No Win No Fee. Call 0489 265 737.",
    isService: true,
    serviceType: "Credit Repair Gold Coast Queensland"
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
                UNLOCK YOUR GOLD COAST DREAM LIFESTYLE
                <span className="block mt-2 text-blue">
                  98% SUCCESS RATE GUARANTEED WHEN WE TAKE YOUR CASE
                </span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong className="font-semibold text-red-600">STOP</strong> letting defaults destroy your beachside paradise dreams. The Gold Coast&apos;s booming property market isn&apos;t waiting. While you&apos;re getting rejected for beachfront apartments, others are securing their slice of coastal heaven at record-low rates.
                </p>

               

                <p className="text-base text-gray-700">
                  <strong className="font-semibold text-green-600">BUT HERE&apos;S YOUR GOLD COAST TRANSFORMATION:</strong> ✅ Beachside home loan approved in weeks, not years ✅ Interest rates PLUMMET by 3-6% instantly ✅ Investment property doors swing open ✅ Premium car finance for your coastal cruiser ✅ Business loans for your Gold Coast venture
                </p>

                <p className="text-base text-blue font-semibold">
                  📞 Gold Coast Credit Emergency Line: 0489 265 737
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
                  UNLOCK MY GOLD COAST DREAM
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
                heading="Get My Free Gold Coast Credit Assessment"
                subheading="Fast & Confidential"
                paragraph="Find out how we can unlock your Gold Coast lifestyle – free, fast, and confidential."
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
      <ReviewsWidget/>

      {/* Opening Section */}
      <Section title="The Gold Coast Credit Crisis (Your Ticket to Paradise)">
        <p>
          Gold Coast median house price: $780,000 and climbing like a high-rise.
        </p>
        <p className="mt-4">
          With perfect credit (750+ score): 2.9% home loan = $3,260/month
          <br />
          With bad credit (below 650): 7.2% home loan = $5,220/month
          <br />
          <strong className="text-red-600">THE DIFFERENCE: $1,960 MORE every single month = $705,600 extra over 30 years</strong>
        </p>
        <p className="mt-4">
          That&apos;s not just money. That&apos;s your beachside retirement. Your kids&apos; coastal childhood. Your financial paradise.
        </p>
        <p className="mt-4">
          <strong>Why Gold Coast Residents Are Racing to Fix Their Credit:</strong>
        </p>
        <p className="mt-2">
          🏖️ <strong>GOLD COAST LIFESTYLE PREMIUM</strong> Beach access 365 days a year. World-class entertainment precincts. No winter misery. Clean credit unlocks the coastal lifestyle millions dream about.
        </p>
        <p className="mt-2">
          🚧 <strong>INFRASTRUCTURE BOOM BONANZA</strong> Light Rail expansion. New hospital. Entertainment precinct upgrades. Property values exploding - but only accessible with clean credit.
        </p>
        <p className="mt-2">
          🌊 <strong>TOURISM & BUSINESS GOLDMINE</strong> 6 million annual visitors. Booming hospitality sector. Endless business opportunities. Bad credit = locked out of the action.
        </p>
      </Section>

      {/* Impact Section */}
      <Section title="How Bad Credit Is Absolutely Destroying Your Gold Coast Dreams">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-2 grid gap-4 sm:grid-cols-2"
        >
          {[
            {
              h: "Beachfront Properties Become Impossible",
              p: "Perfect credit gets you 2.9% on that $850,000 Broadbeach apartment. Bad credit? You're looking at 7-9% or outright rejection.",
            },
            {
              h: "Gold Coast Investment Dreams Crushed",
              p: "Tourism boom creating massive opportunities. Bad credit locks you out while others build coastal property empires.",
            },
            {
              h: "Premium Car Finance for Coastal Cruising - Gone",
              p: "That BMW or Mercedes for weekend coastal drives? Bad credit means 15-25% rates or financing rejection.",
            },
            {
              h: "Marine Finance Becomes Impossible",
              p: "Boats, jet skis, yachts for Gold Coast water lifestyle? Clean credit gets 5-7%. Bad credit gets rejection or 18% rates.",
            },
            {
              h: "Tourism Business Finance Blocked",
              p: "Restaurant fit-outs, tour operator equipment, hospitality expansion - all require clean credit in competitive markets.",
            },
            {
              h: "Coastal Rental Applications Rejected",
              p: "Competition for beachside rentals is fierce. Landlords can afford to be picky - bad credit puts you at the back of the queue.",
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
      <Section title="Gold Coast Credit Problems We Demolish">
        <p className="text-slate-700">
          From Surfers Paradise to Currumbin, we&apos;ve removed defaults that beachside dreams are made of.
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Default Removal - Every Coastal Suburb"
            bullets={[
              "Broadbeach resident: $5,200 Vodafone default OBLITERATED → $850,000 beachfront apartment approved",
              "Burleigh Heads family: Multiple utility defaults WIPED → Dream home 200m from beach secured",
              "Southport professional: Credit card default ELIMINATED → Investment property approved same day",
              "Currumbin retiree: $4,800 medical default GONE → Downsizer loan at premium beachside rates",
            ]}
          />
          <Card
            title="Late Payment Obliteration - Queensland Coastal Banks"
            bullets={[
              "Westpac (Pacific Fair, Robina, Southport branches)",
              "Commonwealth Bank (Surfers Paradise headquarters)",
              "ANZ (every beachside branch conquered)",
              "Heritage Bank (local Gold Coast institution)",
            ]}
          />
          <Card
            title="Credit Enquiry Annihilation"
            bullets={[
              "Luxury car dealerships from Southport to Burleigh",
              "Marine finance for boats and jet skis",
              "Investment property applications across the Coast",
              "Business finance for tourism ventures",
            ]}
          />
          <Card
            title="Gold Coast Specialist Removals"
            bullets={[
              "Tourism business seasonal finance enquiries",
              "Marine industry equipment defaults",
              "Entertainment industry late payments",
              "Coastal property investment enquiries",
            ]}
          />
        </motion.div>
      </Section>

      {/* Process */}
      <Section title="Our Proven Gold Coast Success Formula">
        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4 text-slate-700"
        >
          {[
            {
              title: "INSTANT COASTAL CREDIT DIAGNOSIS (60 Seconds)",
              description:
                "We'll identify every removable barrier between you and your Gold Coast lifestyle. Our coastal specialists analyze defaults from Queensland companies, late payments from beachside banks, marine finance enquiries, and tourism business credit issues.",
            },
            {
              title: "SURGICAL STRIKE REMOVAL PROCESS",
              description:
                "Custom-crafted attacks designed for Gold Coast financial freedom. Coast-focused destruction strategy with Queensland regulatory mastery, coastal lender relationships spanning decades, and tourism industry expertise.",
            },
            {
              title: "CREDIT SCORE EXPLOSION",
              description:
                "Watch your score rocket toward beachside approval. Gold Coast client transformations: Average improvement 190-340 points in 6-12 weeks. Fastest beachside approval: Default removed in 6 days. Biggest coastal win: Score jumped 368 points in 9 weeks.",
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
      <Section title="Gold Coast Success Stories That'll Blow Your Mind">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Testimonial name="THE BROADBEACH BEACHFRONT MIRACLE - Marcus & Kelly T.">
            &quot;$5,200 Vodafone default blocking $850,000 beachfront apartment at Broadbeach luxury high-rise with ocean views. ACS obliterated the default in 19 days using compliance hammer. Apartment approved at 3.1% saving $89,000 over loan term. We&apos;re living 50 meters from the beach with million-dollar morning coffee views.&quot;
          </Testimonial>
          <Testimonial name="THE BURLEIGH HEADS FAMILY PARADISE - Sarah & Jake M. (3 young kids)">
            &quot;Multiple utility defaults from business closure blocking our dream family home walking distance to Burleigh beach. ACS completed credit file reconstruction in 4 weeks. Home loan approved at 2.9% and our children are now playing on the beach daily, growing up in paradise. Priceless.&quot;
          </Testimonial>
          <Testimonial name="THE SOUTHPORT INVESTMENT EMPIRE - Lisa K. (Property maven)">
            &quot;Credit card default blocking beachside investment expansion and my goal to build Gold Coast rental portfolio. ACS eliminated the default using data accuracy destruction. $1.4M investment property approved SAME DAY. One default was costing me millions in coastal real estate. ACS unlocked my empire.&quot;
          </Testimonial>
        </motion.div>
      </Section>

      {/* Why Choose Us */}
      <Section title="Why Gold Coast Chooses Australian Credit Solutions">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {[
            "🏆 AWARD-WINNING COASTAL EXCELLENCE (3 CONSECUTIVE YEARS) - Industry Excellence Awards 2022, 2023, 2024. Only credit repair company to achieve this feat.",
            "📊 UNMATCHED BEACHSIDE SUCCESS RATE - 98% success rate when we accept coastal cases. We only take winnable battles.",
            "💼 QUEENSLAND COASTAL EXPERTISE - Deep understanding of Gold Coast's tourism business finance, coastal property investment, marine finance, and entertainment industry lending.",
            "🚀 LIGHTNING-FAST COASTAL RESULTS - Gold Coast priority processing with same-day assessment for urgent beachside purchases.",
            "🌊 GOLD COAST LIFESTYLE SPECIALISTS - We understand what coastal living means and fight to unlock your paradise.",
            "⚡ NO WIN NO FEE COASTAL GUARANTEE - You only pay when we unlock your beach lifestyle. $330 admin fee, success fees only when dreams come true.",
            "🎯 COMPLETE TRANSPARENCY - No false beach dreams, proven coastal results with 2,400+ Gold Coast success stories.",
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
      <Section title="Gold Coast Credit Repair Service Packages">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <PriceCard
            name="Gold Coast Express Paradise"
            timeline="2-6 weeks typically"
            perfectFor="Urgent beachside purchases, settlement deadlines"
            includes={[
              "Emergency Gold Coast processing",
              "Same-day coastal assessment",
              "Priority beachside approval pathway",
            ]}
          />
          <PriceCard
            name="Complete Coastal Transformation"
            timeline="6-12 weeks typically"
            perfectFor="Full credit makeover for Gold Coast lifestyle"
            includes={[
              "All removable defaults eliminated",
              "Late payments obliterated",
              "Credit enquiries annihilated",
              "Score optimization for beachside rates",
            ]}
            featured
          />
          <PriceCard
            name="Gold Coast Business Liberation"
            timeline="4-10 weeks typically"
            perfectFor="Tourism, hospitality, marine industry operators"
            includes={[
              "Business credit file cleanup",
              "Equipment finance preparation",
              "Seasonal business credit optimization",
            ]}
          />
        </motion.div>
        <div className="mt-6 rounded-xl border border-dashed border-blue-300 bg-blue-50 p-4 text-sm text-slate-600">
          <strong>
            🌊 GOLD COAST EXCLUSIVE COASTAL OFFER 🌊
          </strong>{" "}
          Call in the next 24 hours for FREE 60-second beachside credit analysis, same-day coastal assessment, and direct access to award-winning specialists.
          <br />
          <em>All services include our No Win No Fee guarantee.</em>
        </div>
      </Section>

      {/* Outcomes */}
      <Section title="What Happens After Your Gold Coast Credit Transformation">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {[
            "🏖️ Beachside home loan approved at premium rates (2.9-3.2% vs 7-9%)",
            "🏠 Investment property doors swing open across Gold Coast suburbs",
            "🚗 Premium car finance for coastal cruising lifestyle",
            "⛵ Marine finance available for boats, jet skis, and water toys",
            "🏢 Business loans for Gold Coast tourism and hospitality ventures",
            "📈 Credit score improvements of 190-340 points in weeks",
            "💰 Interest rate savings of $1,960+ monthly on typical Gold Coast property",
            "🌅 Peace of mind knowing your coastal paradise is within reach",
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
      <Section title="Understanding Gold Coast Property Finance: Your Credit Rights">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-2 space-y-4 text-slate-700"
        >
          {[
            "Gold Coast property market is competitive - clean credit gives you the edge over other buyers.",
            "Tourism industry seasonal income requires specialist lenders who understand Gold Coast business cycles.",
            "Marine finance has unique requirements - clean credit opens doors to specialist boat and yacht lenders.",
            "Entertainment precinct developments offer opportunities - but require clean credit for investment approval.",
            "Infrastructure boom creating property value increases - position yourself with clean credit before prices rise further.",
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
      <Section title="Gold Coast Credit Repair Questions">
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

      {/* Cost of keeping bad credit */}
      <Section title="The Massive Cost of Missing Your Gold Coast Paradise">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">
              Every Day Costs You Money and Dreams
            </h3>
            {[
              "Gold Coast property appreciation: Missing $158+ daily in equity gains while prices climb",
              "Interest rate difference: Paying $1,960+ extra monthly with bad credit vs clean credit",
              "Investment opportunities: Tourism boom creating wealth - but only for those with finance access",
              "Lifestyle cost: Watching others enjoy beachside paradise while you're locked out",
              "Business opportunities: 6 million tourists annually - bad credit blocks your piece of the action",
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
              Your Two Choices
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
                Stay landlocked while Gold Coast property prices climb beyond reach
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
                Claim your beachside life with expert credit repair
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/free-credit-assessment"
                className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors"
              >
                UNLOCK MY PARADISE
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
      <Section title="Ready to Unlock Your Gold Coast Paradise?">
        <div className="mt-4 space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-blue mb-4">THE PARADISE CLOCK IS TICKING</h3>
            <p className="text-slate-700">
              Every day you delay costs you $158 in extra interest payments and beachside property appreciation you could be capturing. Paradise lifestyle that could be yours right now.
            </p>
          </div>
          
          <ol className="space-y-3 text-slate-700">
            {[
              "🌊 FREE 60-second beachside credit analysis - call 0489 265 737",
              "📊 Same-day coastal assessment (Gold Coast priority processing)",
              "🎯 Custom strategy for your beachside dreams",
              "⚡ Emergency processing for urgent coastal purchases",
              "🏆 Award-winning specialists unlock your paradise",
            ].map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold text-sm">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          
          <div className="text-center bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
            <p className="text-blue font-semibold mb-4">
              🌊 GOLD COAST EXCLUSIVE COASTAL OFFER 🌊
            </p>
            <p className="text-sm text-slate-700 mb-6">
              When you call in the next 24 hours, you unlock: ✅ FREE 60-second beachside credit analysis ✅ Same-day coastal assessment ✅ No obligation paradise consultation ✅ Emergency processing for urgent beachside purchases ✅ Direct access to award-winning coastal specialists
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="tel:+61489265737"
                className="rounded-lg bg-blue px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                CALL NOW: 0489 265 737
              </a>
              <Link
                href="/free-credit-assessment"
                className="rounded-lg border-2 border-blue px-6 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors"
              >
                UNLOCK MY PARADISE
              </Link>
            </div>
          </div>
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
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold">About Australian Credit Solutions - Gold Coast</h3>
            <p className="text-sm mt-2">
              We&apos;ve been unlocking Gold Coast dreams since 2018. Living on the Gold Coast isn&apos;t just about location - it&apos;s about lifestyle, freedom, and waking up in paradise every single day.
            </p>
          </div>
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
          <div className="text-center mt-4 text-sm">
            <p>📞 Gold Coast Direct: 0489 265 737 | 📧 help@australiancreditsolutions.com.au</p>
            <p>🌐 australiancreditsolutions.com.au/goldcoast | ⭐ 4.9/5 stars from 855+ paradise transformations</p>
            <p className="mt-2 font-semibold">Stop letting bad credit keep you from your Gold Coast paradise. The beaches are calling, opportunities are everywhere, and your coastal lifestyle is just one phone call away. 🌊🏄‍♂️⚡</p>
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
