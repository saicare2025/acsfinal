// File: app/court-judgment-removal/page.jsx
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

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function CourtJudgmentRemovalPage() {
  // FAQ data for structured data
  const faqData = [
    {
      question: "Can all court judgments be removed from credit files?",
      answer: "No, only judgments with legal grounds for challenge can be removed or set aside. Valid judgments obtained through proper procedures stay on your file for 5 years."
    },
    {
      question: "What's the difference between removing and setting aside a judgment?",
      answer: "Setting aside means getting the court to cancel the original judgment (usually requiring a new hearing). Removal means correcting credit file reporting errors or satisfied judgments."
    },
    {
      question: "How much does it cost to set aside a court judgment?",
      answer: "Court filing fees vary by state but are usually $100–$300. Solicitor fees for complex applications can be $2,000–$5,000+. Our service includes solicitor assistance where required at no extra cost."
    },
    {
      question: "Will setting aside a judgment remove it from my credit file?",
      answer: "Yes, if a judgment is successfully set aside, it must be removed from your credit file. We ensure all credit bureaus update their records."
    },
    {
      question: "Can I set aside a judgment if I actually owed the money?",
      answer: "Possibly, if there were procedural problems with how the judgment was obtained. Even valid debts can result in invalid judgments if proper legal processes weren't followed."
    }
  ];

  // Generate structured data for this service page
  const structuredData = generateMinimalStructuredData({
    pathname: "/court-judgment-removal",
    title: "Court Judgment Removal | Australian Credit Solutions",
    description: "Expert assistance with court judgment removal and resolution to improve your credit profile. Professional legal support for setting aside or removing court judgments from your credit file.",
    isService: true,
    serviceType: "Court Judgment Removal"
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

      {/* Opening Section */}
      <Section title="Court judgments are the nuclear option of credit destruction">
        <p>
          Right, let&apos;s get one thing straight – a court judgment on your
          credit file is absolutely devastating. We&apos;re not talking about a
          little late payment mark here. Court judgments are the nuclear option
          of credit destruction. They basically tell every lender &quot;this
          person had to be taken to court to get their money back.&quot;
        </p>
        <p className="mt-4">
          But here&apos;s what gets us really fired up: heaps of court judgments
          on credit files shouldn&apos;t actually be there. Maybe you never got
          proper notice of the court hearing. Maybe the debt was already paid
          but the judgment never got removed. Maybe the judgment was for the
          wrong amount, or against the wrong person entirely. Or maybe it was a
          default judgment that can be set aside because you had a genuine
          defence.
        </p>
        <p className="mt-4">
          Australian Credit Solutions specialises in court judgment removal
          across Australia. We&apos;re award-winning specialists with a 98%
          success rate when we take cases. The difference? We only take court
          judgment cases where we genuinely reckon there are grounds for removal
          or setting aside. If your judgment is rock-solid and properly
          obtained, we&apos;ll tell you straight up. But if there are procedural
          problems, errors, or legal grounds to challenge it—we know exactly how
          to get court judgments removed from credit reports.
        </p>
      </Section>

      {/* Impact Section */}
      <Section title="How Court Judgments Are Absolutely Annihilating Your Credit">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-2 grid gap-4 sm:grid-cols-2"
        >
          {[
            {
              h: "Your Credit Score Gets Completely Destroyed",
              p: "A single court judgment can drop your credit score by 150–300 points. We&apos;ve seen people go from excellent credit to barely qualifying for a basic credit card overnight.",
            },
            {
              h: "Every Lender Sees You as Toxic",
              p: "Court judgments are visible to every lender, landlord, and employer who checks your credit. They see that you had to be taken to court to pay a debt.",
            },
            {
              h: "Automatic Rejections Become the Norm",
              p: "Most lenders automatically reject applications with a court judgment on file—regardless of income or assets.",
            },
            {
              h: "Interest Rates Become Obscene",
              p: "The few lenders who will touch you with a judgment charge premium rates—often 15–25% even for secured loans.",
            },
            {
              h: "It Follows You for 5 Years",
              p: "Judgments stay on your credit file for 5 years from the date they&apos;re entered, locking you out of decent finance.",
            },
            {
              h: "Employment and Rental Applications Get Knocked Back",
              p: "Many employers and landlords check for court judgments. Having one can cost you jobs and rentals, especially in competitive markets.",
            },
            {
              h: "Business Finance Becomes Impossible",
              p: "Personal court judgments affect business lending. If you&apos;re a business owner or tradie, a judgment can kill your finance options.",
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
      <Section title="What Court Judgments We Can Actually Remove or Set Aside">
        <p className="text-slate-700">
          <strong>Important Legal Note:</strong> We can&apos;t remove valid
          court judgments that were properly obtained through correct legal
          procedures. But loads of judgments on credit files have problems that
          create grounds for removal or setting aside.
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Default Judgments That Can Be Set Aside"
            bullets={[
              "You never received proper notice of the court hearing",
              "Court papers were sent to old addresses after you&apos;d moved",
              "You were overseas or in hospital when the hearing occurred",
              "You had a genuine defence but couldn&apos;t present it",
            ]}
          />
          <Card
            title="Procedurally Defective Judgments"
            bullets={[
              "Incorrect court jurisdiction for the case",
              "Insufficient notice periods before court hearings",
              "Failure to serve court documents properly",
              "Missing mandatory steps in debt recovery process",
            ]}
          />
          <Card
            title="Incorrect Judgment Information"
            bullets={[
              "Wrong person named in the judgment",
              "Incorrect judgment amounts recorded",
              "Already paid debts that weren&apos;t updated",
              "Judgments for disputed or invalid debts",
            ]}
          />
          <Card
            title="Satisfied Judgments Not Updated"
            bullets={[
              "Debts paid in full but judgment not marked satisfied",
              "Settlement agreements not reflected in court records",
              "Payment arrangements completed but not updated",
              "Partial payments not properly recorded",
            ]}
          />
          <Card
            title="Statute of Limitations Issues"
            bullets={[
              "Debts older than ~6 years (most states) pursued illegally",
              "Acknowledgment of debt issues affecting limitation periods",
              "Proper limitation defences that weren&apos;t raised",
            ]}
          />
          <Card
            title="Judgments Based on Incorrect/Disputed Debts"
            bullets={[
              "Identity theft cases where you weren&apos;t responsible",
              "Debts already paid to original creditors",
              "Disputed amounts pursued without resolution",
              "Incorrect charges or fees added to original debts",
            ]}
          />
        </motion.div>
      </Section>

      {/* Process */}
      <Section title="Our Proven Court Judgment Removal Process">
        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4 text-slate-700"
        >
          {[
            {
              title: "Complete Judgment Analysis",
              description:
                "We obtain your court judgment details from all relevant courts and credit bureaus (Equifax, Experian, Illion) to get the full picture.",
            },
            {
              title: "Legal Grounds Assessment",
              description:
                "We check for procedural defects, service issues, statute of limitations defences, factual errors, and satisfaction/payment problems.",
            },
            {
              title: "Evidence Gathering & Documentation",
              description:
                "We help compile address changes, payment records, dispute documentation, and any supporting evidence.",
            },
            {
              title: "Court Application or Credit Bureau Challenge",
              description:
                "Depending on grounds, we prepare court applications to set aside the judgment, raise credit bureau challenges, negotiate with creditors, and coordinate with solicitors.",
            },
            {
              title: "Credit File Cleanup & Monitoring",
              description:
                "We ensure all bureaus update records, monitor for reappearance, and guide you on rebuilding your credit profile.",
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
      <Section title="Success Stories: Real Aussies Who Beat Court Judgments">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Testimonial name="Steve from Wollongong – Tradie Who Never Got Notice">
            &quot;Had a court judgment for $8,500 from a supplier dispute... ACS
            proved I was never properly served and got the judgment set aside.
            Took 8 weeks and saved my business.&quot;
          </Testimonial>
          <Testimonial name="Maria from Adelaide – Mum Hit by Identity Theft">
            &quot;Identity theft led to a $12,000 judgment... ACS worked with
            their solicitor to get it set aside. Credit score jumped from 350 to
            710. Home loan approved.&quot;
          </Testimonial>
          <Testimonial name="Rob from Darwin – Small Business Owner">
            &quot;$15,000 judgment during COVID despite having paid... ACS got
            it marked satisfied and removed. Business approvals started
            again.&quot;
          </Testimonial>
          <Testimonial name="Lisa from Hobart – Teacher Who Moved Interstate">
            &quot;Judgment from a telco sent to my old address... ACS proved
            defective service and got it set aside. Credit back to normal.&quot;
          </Testimonial>
        </motion.div>
      </Section>

      {/* Why Choose Us */}
      <Section title="Why Choose Us for Court Judgment Removal">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {[
            "We actually understand court judgment law – proper legal work, not just &apos;credit repair&apos;.",
            "98% success rate when we take cases – we&apos;re selective and honest.",
            "No Win, No Fee protection – $330 admin fee, success fees only if we win.",
            "Three years of industry awards (2022–2024) for results others can&apos;t deliver.",
            "Licensed and regulated (ASIC ACL 532003) with professional indemnity insurance.",
            "National coverage across all Australian courts and tribunals.",
            "We don&apos;t give up – we use layered strategies until we find the path that works.",
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
      <Section title="Our Court Judgment Removal Service Options">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <PriceCard
            name="Emergency Judgment Removal"
            timeline="3–6 weeks typically"
            perfectFor="Urgent finance applications, settlement deadlines"
            includes={[
              "Expedited court applications",
              "Priority processing",
              "Daily updates",
            ]}
        
          />
          <PriceCard
            name="Standard Judgment Challenge"
            timeline="6–12 weeks typically"
            perfectFor="Complex cases, multiple grounds for challenge"
            includes={[
              "Full legal assessment",
              "Evidence compilation",
              "Court applications if required",
            ]}
           
            featured
          />
          <PriceCard
            name="Post-Payment Judgment Cleanup"
            timeline="4–8 weeks typically"
            perfectFor="Paid judgments not showing as satisfied"
            includes={[
              "Creditor negotiation",
              "Court record updates",
              "Credit bureau corrections",
            ]}
            
          />
        </motion.div>
        <div className="mt-6 rounded-xl border border-dashed border-blue-300 bg-blue-50 p-4 text-sm text-slate-600">
          <strong>
            Multiple Judgment Package – Complete Court Record Cleanup:
          </strong>{" "}
          8–16 weeks typically. Custom quote based on number of judgments.
          <br />
          <em>All services include our No Win No Fee guarantee.</em>
        </div>
      </Section>

      {/* Outcomes */}
      <Section title="What Happens After Your Court Judgment Gets Removed">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {[
            "Credit score improvements of 150–300 points in 60–90 days are common.",
            "Lender doors re-open: home loans, car finance, business loans.",
            "Interest rates return to normal market levels.",
            "Employment and rental application outcomes improve.",
            "Business finance becomes available again.",
            "Peace of mind and confidence with future credit applications.",
            "Guidance to protect against future judgment issues.",
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
      <Section title="Understanding Court Judgments: Your Legal Rights">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-2 space-y-4 text-slate-700"
        >
          {[
            "Default judgments are common: around 80% occur because defendants didn&apos;t appear—often due to lack of proper notice.",
            "Service of process is strict: defective service can justify setting aside a judgment.",
            "Time limits exist but exceptions apply for lack of service, fraud/misrepresentation, or new evidence.",
            "You still have rights after judgment: payment arrangements, marking satisfied judgments as paid, and challenging incorrect amounts.",
            "Get professional help: court procedures are technical; expertise avoids fatal errors.",
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
      <Section title="Common Questions About Court Judgment Removal">
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
                <span>{f.q}</span>
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
                {f.a}
              </p>
            </motion.details>
          ))}
        </motion.div>
      </Section>

      {/* Cost of keeping a judgment */}
      <Section title="The Massive Cost of Keeping a Court Judgment">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">
              Financial Impact Is Devastating
            </h3>
            {[
              "Home loans: Best rates ~6.2% vs non-bank 9–15% with judgments; can cost $200k+ extra interest over 30 years.",
              "Car finance: Clean credit ~5.9% vs 18–25% with judgments; a $40k car can exceed $80k over time.",
              "Credit cards: From premium cards to maybe a $1k secured card at ~25% interest.",
              "Business finance: Personal judgments kill equipment and commercial lending.",
              "Employment & rentals: Banking, government, and competitive rental markets often reject applicants with judgments.",
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
                Accept the judgment and wait 5 years while finances suffer.
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
                Fight it with legal expertise to remove or set it aside.
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
      <Section title="Getting Started: Your Free Court Judgment Assessment">
        <ol className="mt-4 space-y-3 text-slate-700">
          {[
            "Confidential phone discussion (20 minutes) — call 0489 265 737.",
            "Complete judgment investigation — full court records and credit file details.",
            "Legal grounds assessment & strategy — court, bureau, or creditor route.",
            "Professional challenge process — we handle legal/admin work and keep you informed.",
            "Credit file cleanup & future protection — ensure bureaus update and advise on prevention.",
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

      {/* ===== Internal Linking Blocks ===== */}
      {/* <Section title="Recommended Services & Resources">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-base font-semibold text-blue">Primary Service Links</h3>
            <nav className="mt-2 space-y-2 text-sm">
              <Link href="/credit-repair-australia" className="underline">Credit Repair Australia</Link><br />
              <Link href="/default-removal" className="underline">Default Removal Services</Link><br />
              <Link href="/late-payment-removal" className="underline">Late Payment Removal</Link><br />
              <Link href="/credit-enquiry-removal" className="underline">Credit Enquiry Removal</Link><br />
              <Link href="/rhi-removal" className="underline">RHI Removal</Link><br />
              <Link href="/credit-file-cleanup" className="underline">Credit File Clean-Up</Link>
            </nav>
          </div>
          <div>
            <h3 className="text-base font-semibold text-blue">Court Judgment Specific Links</h3>
            <nav className="mt-2 space-y-2 text-sm">
              <Link href="/set-aside-court-judgment-credit-report" className="underline">Set Aside Court Judgment Credit Report</Link><br />
              <Link href="/remove-incorrect-court-judgment-credit-report" className="underline">Remove Incorrect Court Judgment</Link><br />
              <Link href="/court-judgment-dispute-australia" className="underline">Court Judgment Dispute Australia</Link><br />
              <Link href="/remove-judgment-after-paying-debt-credit-file" className="underline">Remove Judgment After Paying Debt</Link><br />
              <Link href="/expunge-court-judgment-credit-report" className="underline">Expunge Court Judgment Credit Report</Link>
            </nav>
          </div>
          <div>
            <h3 className="text-base font-semibold text-blue">Location-Based Links</h3>
            <nav className="mt-2 space-y-2 text-sm">
              <Link href="/credit-repair-sydney" className="underline">Court Judgment Removal Sydney</Link><br />
              <Link href="/credit-repair-melbourne" className="underline">Court Judgment Removal Melbourne</Link><br />
              <Link href="/credit-repair-brisbane" className="underline">Court Judgment Removal Brisbane</Link><br />
              <Link href="/credit-repair-perth" className="underline">Court Judgment Removal Perth</Link><br />
              <Link href="/credit-repair-adelaide" className="underline">Court Judgment Removal Adelaide</Link>
            </nav>
          </div>
        </div>
      </Section> */}

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

const faqData = [
  {
    q: "Can all court judgments be removed from credit files?",
    a: "No, only judgments with legal grounds for challenge can be removed or set aside. Valid judgments obtained through proper procedures will stay on your file for 5 years.",
  },
  {
    q: "What&apos;s the difference between removing and setting aside a judgment?",
    a: "Setting aside cancels the original judgment via a new court application/hearing. Removal usually means getting it off your credit file when reporting is wrong or marked satisfied.",
  },
  {
    q: "How much does it cost to set aside a court judgment?",
    a: "Court filing fees vary by state (about $100–$300). Solicitors can be $2,000–$5,000+ for complex applications. Our service includes solicitor assistance where required at no extra cost.",
  },
  {
    q: "Will setting aside a judgment remove it from my credit file?",
    a: "Yes. Once a judgment is set aside, all credit reporting bodies must remove it. We follow through to ensure updates occur.",
  },
  {
    q: "Can I set aside a judgment if I actually owed the money?",
    a: "Possibly, if there were procedural problems with how the judgment was obtained — for example, defective service or jurisdictional errors.",
  },
  {
    q: "What if I&apos;ve already paid the debt but the judgment is still showing?",
    a: "Satisfied judgments should be marked &apos;satisfied&apos;. If not, we can get the court records and credit files corrected.",
  },
  {
    q: "How long does court judgment removal take?",
    a: "Credit bureau challenges can take 4–8 weeks. Court applications to set aside judgments can take 8–16 weeks depending on court backlogs.",
  },
  {
    q: "What evidence do I need to challenge a court judgment?",
    a: "Common evidence includes proof of address changes, payment records, correspondence with creditors, and documentation of procedural failures or genuine defences.",
  },
];
