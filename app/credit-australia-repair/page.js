// File: app/credit-australia-repair/page.jsx
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

export default function CreditAustraliaRepairPage() {
  // FAQ data for structured data
  const faqData = [
    {
      question: "How long does credit repair take in Australia?",
      answer:
        "Depends on your situation, mate. Simple cases with one or two defaults usually take 4-6 weeks. More complex cases with multiple items or identity theft might take 8-12 weeks. We give you realistic timelines upfront - no BS 30-day miracle promises like some cowboys make.",
    },
    {
      question: "Can you guarantee my defaults will be removed?",
      answer:
        "We&apos;re straight shooters here. We only take cases where we&apos;re genuinely confident of success, which is why we have a 98% success rate. If we don&apos;t think we can help you, we&apos;ll tell you upfront and won&apos;t take your money. When we do take your case, history says you&apos;re getting results.",
    },
    {
      question: "How much does credit repair cost in Australia?",
      answer:
        "Our pricing is transparent: small admin fee upfront, then success fees only when we remove items. Most Aussies find our service pays for itself in the first month through lower interest rates. We offer payment plans because everyone deserves a financial fresh start, regardless of current circumstances.",
    },
    {
      question: "Will credit repair hurt my credit score?",
      answer:
        "Not at all. Legitimate credit repair can only improve your score by removing negative items. We don&apos;t use dodgy tactics that could backfire. Everything we do is legal, ethical, and designed to permanently improve your credit profile.",
    },
    {
      question: "Can you remove late payments and enquiries, or just defaults?",
      answer:
        "We can remove all types of negative credit information: defaults, late payments, credit enquiries, and even some court judgments. Each case is different, but our lawyers know how to tackle every type of credit problem that&apos;s dragging down your score.",
    },
    {
      question: "Do I need to live in a major city to use your service?",
      answer:
        "Nah mate, we help Aussies everywhere - from Sydney harbour to the red dirt of WA. Everything&apos;s done remotely through phone, email, and secure online systems. Regional clients get the same priority service as city folks. Distance doesn&apos;t matter when you need your credit fixed.",
    },
    {
      question: "What&apos;s the difference between you and cheap online credit repair?",
      answer:
        "Massive difference. We&apos;re ASIC licensed with qualified lawyers on staff, three consecutive industry awards, and a 98% success rate. Cheap online services are usually unlicensed cowboys with template letters that don&apos;t work. You get what you pay for - and with credit, quality matters.",
    },
    {
      question: "Can you help if I&apos;m currently bankrupt or in a Part IX agreement?",
      answer:
        "We can definitely help with credit repair after bankruptcy discharge or completion of Part IX agreements. These processes often leave ongoing credit damage that prevents you from rebuilding. Once your formal arrangements are complete, we can clean up your file and get you back on track.",
    },
    {
      question: "Will my bank or lender know I&apos;m using credit repair services?",
      answer:
        "Credit repair is completely legal and legitimate. Banks don&apos;t get notified that you&apos;re using professional services. All communications go through us as your representatives. Many of our clients go on to get approved with the same banks that previously rejected them.",
    },
    {
      question: "How do I know you&apos;re not a scam like some other credit repair companies?",
      answer:
        "Fair question - there are definitely dodgy operators out there. Here&apos;s what sets us apart: ASIC license ACL 532003 (check it yourself), three consecutive industry awards, 855+ verified reviews on ProductReview.com.au, qualified lawyers on staff, and transparent pricing with No Win No Fee guarantee. Cowboys can&apos;t fake this kind of track record.",
    },
  ];

  // Generate structured data for this service page
  const structuredData = generateMinimalStructuredData({
    pathname: "/credit-australia-repair",
    title:
      "Credit Australia Repair | #1 Award Winners | Fix Bad Credit Fast",
    description:
      "Australia&apos;s #1 credit repair specialists. Remove defaults, fix bad credit, improve credit scores fast. 3-year award winners, 98% success rate, No Win No Fee. Licensed professionals helping Aussies nationwide.",
    isService: true,
    serviceType: "Credit Repair Australia",
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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Credit Australia Repair
                <span className="block mt-2 text-blue">
                  #1 Award Winners Fixing Aussie Credit
                </span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  G&apos;day mate! Sick of being knocked back for loans because of dodgy credit? You&apos;ve found Australia&apos;s #1 credit repair specialists. <a href="/get-credit-repair" className="text-blue-600 hover:text-blue-800 underline">Get Credit Repair</a> We&apos;re not some fly-by-night outfit – we&apos;re the award-winning legends who&apos;ve helped over 10,000 Aussies get their financial lives back on track.
                </p>

                <p className="text-base text-gray-600">
                  Here&apos;s the deal: Bad credit is costing you a fortune every single day. While you&apos;re getting slugged with shocking interest rates and loan rejections, we&apos;re removing defaults and fixing credit files faster than you can say &quot;she&apos;ll be right.&quot; At Australian Credit Solutions, we&apos;re the{" "}
                  <strong className="font-semibold text-blue">
                    award-winning specialists
                  </strong>{" "}
                  with a 98% success rate when we take your case.
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
                  Get My Free Credit Assessment
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
                      <RelatedBlock currentSlug="/credit-australia-repair" heading="Related services & guides" />
        <FooterForm
                heading="Get My Free Credit Check"
                subheading="Award-Winning Service"
                paragraph="Complete analysis of your credit file, identification of all removable items, realistic timeline for your situation, transparent pricing with no surprises."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-sm text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>
                  No Win No Fee
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>
                  Payment plans available
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
      <ReviewsWidget />

      {/* Breadcrumb Navigation */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/credit-australia-repair" />
      </div>

      {/* Why Aussies Choose Us Over Everyone Else */}
      <Section title="Why Aussies Choose Us Over Everyone Else">
        <p className="text-slate-700">
          Here&apos;s what <a href="/repair-your-credit-score-australia" className="text-blue-600 hover:text-blue-800 underline">Repair Your Credit Score Australia</a> separates us from the rest:
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="🏆 3-Year Award Winner (2022, 2023, 2024)"
            bullets={[
              "Only credit repair company in Australia to win Industry Excellence Awards three years running",
              "Not luck – pure skill",
            ]}
          />
          <Card
            title="🎯 98% Success Rate"
            bullets={[
              "When we take your case, you&apos;re getting results",
              "We don&apos;t muck around with cases we can&apos;t win",
            ]}
          />
          <Card
            title="⚖️ ASIC Licensed (ACL 532003)"
            bullets={[
              "Fully licensed, regulated, and accountable",
              "Half the cowboys out there aren&apos;t even licensed – massive red flag, mate",
            ]}
          />
          <Card
            title="💰 No Win No Fee"
            bullets={[
              "You only pay when we remove stuff from your credit file",
              "Fair dinkum guarantee",
            ]}
          />
        </motion.div>
        <p className="mt-6 text-slate-700 font-semibold">
          Fair dinkum <a href="/equifax-default-removal-australia" className="text-blue-600 hover:text-blue-800 underline">Equifax Default Removal Australia</a> credit repair that actually works.
        </p>
      </Section>

      {/* Our Centrelink-Friendly Approach */}
      <Section title="Our Centrelink-Friendly Approach: No Win No Fee That Actually Works">
        <p className="text-slate-700">
          Here&apos;s what makes us different from other credit repair companies
   <a href="/credit-enquiry-removal" className="text-blue-600 hover:text-blue-800 underline">Credit Enquiry Removal</a>        when it comes to helping Centrelink recipients:
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Affordable Admin Fee Structure"
            bullets={[
              "Just $330 admin fee – paid upfront (we offer payment plans)",
              "No success fees if you&apos;re on Centrelink payments",
              "No hidden costs – what you see is what you pay",
              "Payment plan available – spread the $330 over several weeks if needed",
            ]}
          />
          <Card
            title="We Actually Understand Your Situation"
            bullets={[
              "Job loss or illness created temporary financial hardship",
              "Family breakdown affected your income and expenses",
              "Business closure wasn't your fault but affected your credit",
              "Economic circumstances beyond your control",
            ]}
          />
          <Card
            title="Realistic Timeline Expectations"
            bullets={[
              "Week 1-2: Full credit file analysis and case assessment",
              "Week 3-6: Formal disputes lodged with credit providers",
              "Week 6-12: Follow-up and escalation where needed",
              "Week 12+: Final negotiations and removals",
            ]}
          />
          <Card
            title="Empathetic Support"
            bullets={[
              "Our team knows being on Centrelink doesn't make you a 'bad risk'",
              "No judgment consultation process",
              "Understanding of financial hardship circumstances",
              "Focus on your future financial independence",
            ]}
          />
        </motion.div>
      </Section>

      {/* What We Can Remove */}
      <Section title="What We Can Remove from Your Credit File">
        <p className="text-slate-700">
          Being on Centrelink doesn&apos;t limit what we can challenge. We
          regularly remove:
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Defaults ($150+ unpaid debts listed on your file)"
            bullets={[
              "Utility defaults: Gas, electricity, water bills from tough times",
              "Telco defaults: Mobile phone bills, internet accounts",
              "Credit card defaults: From when income dropped suddenly",
              "Personal loan defaults: Small loans that went bad during hardship",
              "Buy now, pay later defaults: Afterpay, Zip Pay, humm accounts",
            ]}
          />
          <Card
            title="Late Payment Records"
            bullets={[
              "Credit card late payments: When minimum payments became impossible",
              "Loan repayment delays: Car loans, personal loans affected by income loss",
              "Mortgage late payments: Home loan stress before Centrelink",
            ]}
          />
          <Card
            title="Credit Enquiries (Applications that got rejected)"
            bullets={[
              "Multiple loan applications: When you were desperately seeking finance",
              "Credit card applications: Rejected applications still show up",
              "Phone plan enquiries: Even unsuccessful phone applications count",
            ]}
          />
          <Card
            title="Court Judgments & Writs"
            bullets={[
              "Small debt court actions: Usually under $10,000",
              "Unpaid fines: That escalated while you were struggling financially",
              "Commercial disputes: From business or employment situations",
            ]}
          />
        </motion.div>
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-green-800">
            Real Example:
          </h3>
          <p className="mt-2 text-green-700">
            Sarah from Brisbane was on JobSeeker with three defaults totalling
            $2,400. Within 8 weeks, we had all three removed. She&apos;s now
            working part-time and got approved for a $15,000 car loan at 9.9%
            interest instead of the 24% she was being offered before.
          </p>
        </div>
      </Section>

      {/* The Process */}
      <Section title="The Process: Simple, Stress-Free, Designed for Your Situation">
        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4 text-slate-700"
        >
          {[
            {
              title: "Free Assessment (No Obligation)",
              description:
                "Get your free credit report – we'll walk you through ordering it. Phone consultation to explain your situation without judgment. Case evaluation with honest assessment of what we can achieve. Clear pricing with upfront costs, no surprises.",
            },
            {
              title: "Affordable Setup",
              description:
                "$330 admin fee with payment plan available if needed. Paperwork handled – we do all the complex legal stuff. Authority forms signed once, we handle everything else. Regular updates via SMS and email.",
            },
            {
              title: "We Fight for Removals",
              description:
                "Professional disputes with formal legal challenges to credit providers. Negotiation expertise – we know what arguments work. Persistent follow-up as credit providers often ignore first requests. Escalation process – we don&apos;t give up after one attempt.",
            },
            {
              title: "Your Fresh Start",
              description:
                "Clean credit file with defaults and late payments removed. Better borrowing power – approved for loans you need. Lower interest rates – good credit equals cheaper finance. Rental approval – landlords see clean credit history.",
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

      {/* Why Bad Credit Costs More */}
      <Section title="Why Bad Credit Costs You More (And Why Fixing It Saves Money)">
        <p className="text-slate-700">
          When you&apos;re on Centrelink, every dollar counts. Here&apos;s how
          bad credit is costing you money right now:
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Higher Costs for Basic Services"
            bullets={[
              "Rental bonds: Bad credit can mean 6-8 weeks bond instead of 4 weeks",
              "Utility deposits: Energy companies charge $200-500 deposits upfront",
              "Phone plan bonds: $500-1000 deposits for basic mobile plans",
              "Insurance premiums: Some insurers charge more for bad credit",
            ]}
          />
          <Card
            title="Limited Finance Options"
            bullets={[
              "Payday loans: 400%+ interest rates because banks won&apos;t lend to you",
              "Rent-to-buy: Paying double the retail price for furniture and appliances",
              "No emergency options: Can't get approved for even small personal loans",
            ]}
          />
          <Card
            title="Opportunity Costs"
            bullets={[
              "Employment: Some employers check credit for financial roles",
              "Housing: Missing out on better rental properties",
              "Transport: Stuck with unreliable cars because finance is unavailable",
            ]}
          />
          <Card
            title="The Real Math"
            bullets={[
              "Clean up your credit now, and within 6 months you could save thousands",
              "Reduced deposits, bonds, and access to normal-rate finance",
              "Our $330 fee pays for itself quickly",
              "Better financial options when returning to work",
            ]}
          />
        </motion.div>
      </Section>

      {/* Success Stories */}
      <Section title="Success Stories: Real Centrelink Recipients We've Helped">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Testimonial name="Maria's Story – Single Mum, JobSeeker">
            &quot;I was on JobSeeker after my partner left. Had defaults from
            when I couldn&apos;t pay the bills during the separation.
            Couldn&apos;t get approved for rental properties – estate agents
            would take one look at my credit report and move on to the next
            applicant. ACS removed two defaults and a judgment. Within 3 months
            I was approved for a rental in a better school zone for my kids. The
            relief was incredible. Result: 2 defaults and 1 judgment removed,
            approved for rental property, now working part-time.&quot;
          </Testimonial>
          <Testimonial name="David's Story – Disability Support Pension">
            &quot;After my accident, I went on DSP and my bills piled up. Credit
            cards went into default, car loan too. Felt like my life was over at
            45. ACS was honest about what they could do and what they
            couldn&apos;t. They got the credit card default removed, and I
            qualified for a disability car loan. Having transport back changed
            everything. Result: 1 major default removed, qualified for
            specialized vehicle finance.&quot;
          </Testimonial>
          <Testimonial name="Jenny's Story – Age Pension">
            &quot;Retired but had a default from an old Telstra bill. Sounds
            small but it was blocking me from getting a seniors&apos; credit
            card for online shopping. The grandkids were teaching me to use the
            internet but I couldn&apos;t buy anything! ACS sorted it out quickly
            and now I&apos;m shopping online like a pro. Result: Telco default
            removed, approved for senior citizens&apos; credit card.&quot;
          </Testimonial>
        </motion.div>
      </Section>

      {/* Service Options */}
      <Section title="Our Centrelink-Friendly Service Options">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2"
        >
          <PriceCard
            name="Standard Centrelink Service"
            timeline="6-12 weeks typically"
            perfectFor="Most Centrelink recipients with 1-3 credit issues"
            includes={[
              "Payment plan available for admin fee",
              "No success fees for Centrelink recipients",
              "Regular progress updates",
              "Empathetic support throughout",
            ]}
            featured
          />
          <PriceCard
            name="Complex Case Support"
            timeline="8-16 weeks typically"
            perfectFor="Multiple defaults, court judgments, complex situations"
            includes={[
              "Comprehensive case management",
              "Multiple dispute coordination",
              "Ongoing monitoring and support",
              "Transition planning for return to work",
            ]}
          />
          <PriceCard
            name="Emergency Rental Support"
            timeline="4-8 weeks typically"
            perfectFor="Urgent rental applications, housing needs"
            includes={[
              "Priority processing for housing urgency",
              "Focus on rental-blocking defaults",
              "Fast-track communication",
              "Housing application support",
            ]}
          />
          <PriceCard
            name="Return-to-Work Preparation"
            timeline="6-10 weeks typically"
            perfectFor="Preparing for employment transition, rebuilding credit"
            includes={[
              "Employment-focused credit improvement",
              "Transport finance preparation",
              "Credit building guidance",
              "Long-term financial planning",
            ]}
          />
        </motion.div>
        <div className="mt-6 rounded-xl border border-dashed border-blue-300 bg-blue-50 p-4 text-sm text-slate-600">
          <strong>Special Centrelink Policy:</strong> $330 admin fee (payment
          plans available). No success fees for Centrelink recipients. No hidden
          costs. We understand your situation and work within your means.
        </div>
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

      {/* Next Steps */}
      <Section title="Next Steps: Get Your Free Credit Assessment">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">
              Being on Centrelink is temporary – but bad credit can follow you
              long after you&apos;re back on your feet
            </h3>
            <p>Let&apos;s fix it now while you have time to focus on it.</p>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-800">
                Your Free Assessment Includes:
              </h4>
              <ul className="space-y-2">
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
                  Credit report review – we&apos;ll help you understand
                  what&apos;s actually on your file
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
                  Removal assessment – honest evaluation of what we can achieve
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
                  Action plan – clear strategy for improving your credit
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
                  Cost breakdown – transparent pricing with payment plan options
                </li>
              </ul>
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
              Don&apos;t Let Bad Credit Define Your Future
            </h3>
            <p className="mt-3 text-slate-700">
              Your current circumstances don&apos;t define your future
              potential. We&apos;ve helped hundreds of Centrelink recipients
              clean up their credit and move forward with confidence.
            </p>
            <p className="mt-3 text-slate-700">
              Whether you&apos;re planning to return to work, start a small
              business, or just want normal access to basic financial services –
              it all starts with fixing your credit file.
            </p>
            <p className="mt-3 text-slate-700 font-semibold">
              The cost of doing nothing is higher than the cost of fixing it.
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
                Award-winning specialists (2022, 2023, 2024)
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-sm font-medium">
                No Win No Fee — Payment plans available
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
        <RelatedServices pathname="/credit-repair-for-centrelink-recipients-australia" />
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
