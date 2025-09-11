// File: app/credit-repair-after-divorce/page.jsx
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

export default function DivorceCreditRepairPage() {
  // FAQ data for structured data
  const faqData = [
    {
      question: "Can I remove my ex&apos;s debts from my credit file?",
      answer:
        "Only if there are genuine grounds – like unauthorised use of your details, billing errors, or debts that became their legal responsibility post-separation. Valid joint debts you were legitimately liable for can&apos;t be removed just because of divorce.",
    },
    {
      question: "What if my ex won&apos;t cooperate with account closures?",
      answer:
        "You can close accounts unilaterally in most cases, but you may remain liable for existing balances. Document your closure requests and pay your agreed share to protect your credit.",
    },
    {
      question: "How long does divorce credit repair take?",
      answer:
        "Depends on complexity and evidence available. Simple cases with clear documentation can resolve in 4-6 weeks. Complex cases with multiple disputes may take 8-12 weeks.",
    },
    {
      question:
        "What if Family Court ordered my ex to pay but they defaulted anyway?",
      answer:
        "Court orders help prove who should be responsible, but credit bureaus don&apos;t automatically honor them. We use court orders as evidence in disputes, but it still requires a formal challenge process.",
    },
    {
      question: "Can domestic violence be grounds for credit repair?",
      answer:
        "Yes, if the abuse included financial control, identity theft, or unauthorised use of your credit. Police reports, AVO documents, and other evidence can support disputes of fraudulent credit activity.",
    },
  ];

  // Generate structured data for this service page
  const structuredData = generateMinimalStructuredData({
    pathname: "/credit-repair-after-divorce",
    title:
      "Credit Repair After Divorce or Separation Australia | Fix Credit Ruined by Ex-Partner",
    description:
      "Divorce or separation ruined your credit? We help Australians dispute unfair listings caused by relationship breakdown. Remove defaults from ex-partner bills, fix joint account issues, repair credit score after separation. 98% success rate, No Win No Fee.",
    isService: true,
    serviceType: "Divorce Credit Repair",
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
                Credit Repair After Divorce or Separation Australia
                <span className="block mt-2 text-blue">
                  Fix Credit Ruined by Ex-Partner
                </span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Divorce or separation ruined your credit? We help Australians
                  dispute unfair listings caused by relationship breakdown.
                  Remove defaults from ex-partner bills, fix joint account
                  issues, repair credit score after separation.{" "}
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
                  Don&apos;t let a messy breakup destroy your financial future.
                  When relationships end badly, credit files often get trashed.
                  We <Link href="/get-credit-repair" className="text-blue-600 hover:text-blue-800 underline">Get Credit Repair</Link> specialise in credit repair after divorce - helping you
                  dispute incorrect defaults, unauthorised debts, and joint
                  account disasters your ex left behind.
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
                  Fix My Credit After Divorce Now
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
        <FooterForm
                heading="Get My Free Divorce Credit Assessment"
                subheading="Confidential & Sensitive"
                paragraph="Find out if unfair credit listings from your relationship breakdown can be disputed – free, fast, and completely confidential."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-base text-gray-600 sm:flex-row sm:flex-wrap">
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

      {/* Breadcrumb Navigation */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/credit-repair-after-divorce-or-separation" />
      </div>

      {/* Opening Section */}
      <Section title="Don't let unfair credit listings keep your ex controlling your financial life">
        <p>
          Right, let&apos;s be brutally honest here – divorce and separation can
          <Link href="/what-is-a-good-credit-score-australia" className="text-blue-600 hover:text-blue-800 underline">What Is A Good Credit Score Australia</Link> absolutely destroy your credit file, and it&apos;s happening to more
          Aussies than ever.
        </p>
        <p className="mt-4">
          The stats don&apos;t lie: nearly 1 in 2 Australian marriages end in
          divorce, and unfortunately, many of those don&apos;t end <Link href="/blog-details/credit-file-defaults-can-an-unreceived-bill-appear-on-your-report" className="text-blue-600 hover:text-blue-800 underline">Credit File Defaults Can An Unreceived Bill Appear On Your Report</Link> on good
          terms. When relationships go toxic, your credit often becomes
          collateral damage.
        </p>
        <p className="mt-4">
          Maybe your ex stopped paying their half of joint bills out of spite.
          Maybe they forged your signature on accounts you never knew existed.
  <Link href="/credit-repair-melbourne" className="text-blue-600 hover:text-blue-800 underline">Credit Repair Melbourne</Link>         Maybe they left you with defaults on utilities, phone bills, or credit
          cards that were supposed to be their responsibility.
        </p>
        <p className="mt-4">
          <strong>
            Here&apos;s what most people don&apos;t realise: loads of credit
            problems from divorce and separation can actually be disputed and
            removed.
          </strong>{" "}
          We&apos;re talking about defaults wrongly applied to your name, bills
          from joint accounts your ex was supposed to handle, unauthorised debts
          you never agreed to, or listings applied after separation dates.
        </p>
        <p className="mt-4">
          Australian Credit Solutions specialises in credit repair after divorce
          or separation across Australia. Three years of industry awards, 98%
          success rate when we take cases, and we only work on cases where there
          are genuine grounds to dispute unfair credit listings.
        </p>
      </Section>

      {/* Impact Section */}
      <Section title="How Divorce and Separation Destroy Your Credit">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-2 grid gap-4 sm:grid-cols-2"
        >
          {[
            {
              h: "Joint Accounts Become Credit Nightmares",
              p: "When you had joint utilities, phone accounts, credit cards or loans, these don&apos;t just disappear when the relationship ends. If your ex stops paying their share, you both cop the credit damage.",
            },
            {
              h: "Spite and Revenge Credit Sabotage",
              p: "Some exes deliberately sabotage credit out of anger. They stop paying bills they agreed to handle, max out joint credit cards, or even apply for credit in your name without permission.",
            },
            {
              h: "Forgotten Bills During the Chaos",
              p: "Separation is stressful and chaotic. Bills get forgotten, mail goes to the wrong address, payments slip through the cracks. Suddenly you&apos;ve got defaults on accounts you thought your ex was handling.",
            },
            {
              h: "Legal Separation vs Credit Bureau Reality",
              p: "Family Court might say your ex is responsible for certain debts, but credit bureaus don&apos;t care about court orders. If your name was on the account, you&apos;re still liable in their eyes.",
            },
            {
              h: "Post-Separation Debt Confusion",
              p: "Sometimes debts get applied to the wrong person after separation. Utility companies, telcos, and other providers mess up their records and suddenly you&apos;re getting defaults for bills at your ex&apos;s new address.",
            },
            {
              h: "Identity Fraud by Ex-Partners",
              p: "It&apos;s more common than you&apos;d think – exes using personal information to apply for credit, sign up for services, or access existing accounts without permission.",
            },
            {
              h: "Financial Control and Abuse",
              p: "In controlling relationships, credit sabotage is often used as a weapon to maintain power and prevent the other person from achieving financial independence.",
            },
          ].map((item) => (
            <motion.li
              key={item.h}
              variants={fadeIn}
              className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="font-semibold text-blue">{item.h}</h3>
              <p className="mt-2 text-base text-slate-700">{item.p}</p>
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      {/* What We Can Dispute */}
      <Section title="What Credit Issues We Can Dispute After Divorce">
        <p className="text-slate-700">
          <strong>Important Note:</strong> We can only dispute incorrect,
          unfair, or fraudulent listings. We help Australians challenge credit
          problems where there are genuine legal grounds, not just because
          divorce made things difficult.
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Defaults from Joint Accounts After Divorce"
            bullets={[
              "Utility bills your ex agreed to handle but didn&apos;t pay",
              "Phone or internet accounts in joint names but used by one party",
              "Credit cards where spending occurred after separation",
              "Loan defaults where court orders specified responsibility",
            ]}
          />
          <Card
            title="Unauthorised Debts and Forged Signatures"
            bullets={[
              "Credit applications made using your information",
              "Service connections at addresses you never lived at",
              "Account modifications made without your knowledge",
              "Joint applications where your signature was forged",
            ]}
          />
          <Card
            title="Post-Separation Billing Errors"
            bullets={[
              "Bills for services at your ex&apos;s new address appearing on your file",
              "Account defaults for periods when you weren&apos;t responsible",
              "Utility connections made after you&apos;d moved out",
              "Services in your name at properties you&apos;d left",
            ]}
          />
          <Card
            title="Joint Account Mismanagement"
            bullets={[
              "Accounts that should have been closed during separation",
              "Ongoing charges after account closure requests",
              "Debt collection on accounts you thought were settled",
              "Missing final payment credits creating false balances",
            ]}
          />
          <Card
            title="Fraudulent Activity During Relationship Breakdown"
            bullets={[
              "Revenge spending on joint accounts",
              "Deliberate non-payment of agreed responsibilities",
              "Using personal information for unauthorised applications",
              "Accessing accounts after relationship ended",
            ]}
          />
          <Card
            title="Court Order Violations Affecting Credit"
            bullets={[
              "Debts assigned to ex-partner in court still showing on your file",
              "Property settlement debts applied to wrong person",
              "Spousal support issues affecting joint account status",
              "Legal separation dates not recognised by credit providers",
            ]}
          />
        </motion.div>
      </Section>

      {/* Process */}
      <Section title="Our Proven Process: Fix Credit After Divorce Australia">
        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4 text-slate-700"
        >
          {[
            {
              title: "Relationship Timeline Analysis",
              description:
                "We map out the relationship timeline, separation date, and any legal agreements to understand which debts should and shouldn&apos;t be your responsibility.",
            },
            {
              title: "Complete Credit File Investigation",
              description:
                "We obtain reports from all three bureaus and identify every listing that could be related to the relationship breakdown or shouldn&apos;t be in your name.",
            },
            {
              title: "Evidence Gathering for Disputes",
              description:
                "We help you gather supporting documentation: separation agreements, court orders, proof of address changes, communication records about debt responsibilities, and evidence of fraud or unauthorised activity.",
            },
            {
              title: "Strategic Dispute Process",
              description:
                "We challenge listings where there are genuine grounds: defaults applied to wrong person post-separation, unauthorised debts from identity misuse, joint account issues not handled according to agreements.",
            },
            {
              title: "Credit File Cleanup and Protection",
              description:
                "Once incorrect listings are removed, we help protect your file from future issues and provide guidance on rebuilding your independent credit profile.",
            },
            {
              title: "Fresh Start Financial Planning",
              description:
                "We provide advice on establishing new credit independently and protecting your financial future from ex-partner interference.",
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
      <Section title="Success Stories: Real Aussies Who Rebuilt After Relationship Breakdown">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Testimonial name="Michelle from Penrith – Teacher Escaping Financial Abuse">
            &quot;My ex was financially controlling and when I finally left him,
            I discovered he&apos;d been putting bills in my name that I never
            knew about. Had $4,200 in defaults from utility accounts at his new
            place, phone bills I&apos;d never used, even a credit card I
            didn&apos;t know existed. ACS gathered all the evidence – bank
            statements showing I never lived at those addresses, separation
            agreement showing he took responsibility for utilities, proof the
            credit card applications had forged signatures. Got all defaults
            removed in 8 weeks. Credit score went from 340 to 680. Finally got
            approved for a car loan and could get my life back together.&quot;
          </Testimonial>
          <Testimonial name="Dave from Cairns – Dad Fighting for His Kids">
            &quot;Messy divorce, ex-wife kept the house but stopped paying the
            joint utilities out of spite. Got defaults on electricity, gas,
            water, and phone bills she was supposed to handle according to our
            property settlement. Couldn&apos;t get home loan approval to buy a
            new place near the kids. ACS used the Family Court orders to prove
            the utilities were her responsibility after the settlement date.
            Removed all 6 defaults, got home loan approved, now I&apos;ve got a
            place 5 minutes from my kids&apos; school instead of an hour
            away.&quot;
          </Testimonial>
          <Testimonial name="Sarah from Adelaide – Nurse Rebuilding After Abuse">
            &quot;Left an abusive relationship and discovered my ex had been
            using my details to sign up for services all over town. Had defaults
            appearing for addresses I&apos;d never lived at, internet and phone
            services I&apos;d never used, even gym memberships in my name. ACS
            helped me prove identity fraud with address records, bank
            statements, and police reports from the domestic violence case. Got
            9 defaults removed as fraudulent. Took 3 months but got my credit
            back and my independence.&quot;
          </Testimonial>
          <Testimonial name="Mark from Geelong – Tradie Starting Over">
            &quot;Ex-partner left me with defaults on our joint phone plan,
            joint credit card, and utilities. She&apos;d agreed to pay certain
            bills in our separation agreement but just ignored them. When I
            tried to get finance for a work ute, got knocked back everywhere
            because of her defaults. ACS used our separation agreement and bank
            records to prove I was paying my agreed share but she wasn&apos;t
            paying hers. Got 4 out of 5 defaults removed, credit score improved
            by 120 points, got ute finance approved at decent rates.&quot;
          </Testimonial>
        </motion.div>
      </Section>

      <RelatedBlock currentSlug="/credit-repair-after-divorce-or-separation" heading="Related services & guides" />

      {/* Why Choose Us */}
      <Section title="Why Choose Us for Credit Repair After Divorce">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {[
            "We understand relationship breakdown credit issues – divorce credit problems are complex and emotionally charged. We&apos;ve seen every type of post-separation credit disaster.",
            "98% success rate when we take cases – we only take cases where there are genuine grounds to dispute credit listings. We won&apos;t waste your time on hopeless disputes.",
            "No Win, No Fee for divorce cases – you&apos;re probably already stressed about legal bills and settlement costs. If we don&apos;t successfully remove targeted listings, you don&apos;t pay success fees.",
            "Sensitive handling of personal situations – we understand divorce credit repair involves personal and sensitive information. All consultations are confidential.",
            "Licensed under ASIC ACL 532003 – we&apos;re properly licensed and regulated. When you&apos;re rebuilding your life after relationship breakdown, you need accountable professionals.",
            "Australia-wide divorce credit support – family law and credit law are federal, so we help people rebuilding after divorce across all states and territories.",
            "Fast results when you need a fresh start – we understand you want to move forward with your life quickly. Our process resolves divorce credit issues as fast as possible.",
          ].map((t) => (
            <motion.li
              key={t}
              variants={fadeIn}
              className="flex items-start gap-2 rounded-xl bg-blue-50 p-4 text-base text-slate-700"
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
      <Section title="Our Divorce Credit Repair Service Options">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2"
        >
          <PriceCard
            name="Emergency Divorce Credit Cleanup"
            timeline="2-4 weeks typically"
            perfectFor="Urgent finance needs, new housing applications, immediate credit access"
            includes={[
              "Same-day assessment",
              "Priority processing",
              "Daily updates",
              "Rapid evidence gathering",
            ]}
          />
          <PriceCard
            name="Complete Relationship Breakdown Recovery"
            timeline="6-10 weeks typically"
            perfectFor="Complex cases, multiple joint accounts, extensive credit damage"
            includes={[
              "Full relationship timeline analysis",
              "Comprehensive disputes",
              "Ongoing support",
            ]}
            featured
          />
          <PriceCard
            name="Post-Settlement Credit Repair"
            timeline="4-8 weeks typically"
            perfectFor="When legal agreements specify debt responsibility but credit files don't reflect it"
            includes={[
              "Legal document analysis",
              "Creditor communication",
              "Court order enforcement support",
            ]}
          />
          <PriceCard
            name="Domestic Violence Credit Recovery"
            timeline="6-12 weeks typically"
            perfectFor="Identity fraud, financial abuse, unauthorised debts from abusive relationships"
            includes={[
              "Trauma-informed approach",
              "Police report integration",
              "Safety-focused communication",
            ]}
          />
        </motion.div>
        <div className="mt-6 rounded-xl border border-dashed border-blue-300 bg-blue-50 p-4 text-base text-slate-600">
          <strong>All services include our No Win No Fee guarantee:</strong> If
          we don&apos;t successfully dispute your targeted unfair listings, you
          don&apos;t pay success fees. Pricing is customised based on your
          specific situation and case complexity.
        </div>
      </Section>

      {/* Recovery Timeline */}
      <Section title="Timeline for Credit Recovery After Divorce">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Immediate Impact (0-3 months)"
            bullets={[
              "Joint account closures may initially hurt your credit mix",
              "Credit utilisation might spike if you lose access to joint accounts",
              "New individual accounts may lower your average account age",
              "Score may initially drop even when you&apos;re doing everything right",
            ]}
          />
          <Card
            title="Short-Term Recovery (3-12 months)"
            bullets={[
              "Successful dispute removals start improving your score",
              "New individual payment history begins building",
              "Credit utilisation stabilises as you adjust to solo finances",
              "Score begins reflecting your true independent credit behavior",
            ]}
          />
          <Card
            title="Long-Term Rebuilding (12+ months)"
            bullets={[
              "Your independent credit history becomes more established",
              "Impact of any remaining joint account issues diminishes",
              "New positive payment history outweighs old problems",
              "Score reaches levels reflecting your actual creditworthiness",
            ]}
          />
          <Card
            title="Factors That Speed Recovery"
            bullets={[
              "Quick removal of unfair defaults through professional disputes",
              "Consistent payments on remaining valid accounts",
              "Keeping credit card balances low relative to limits",
              "Not applying for too much new credit during recovery period",
            ]}
          />
        </motion.div>
      </Section>

      {/* Document Everything */}
      <Section title="Fix Bad Credit Caused by Ex-Partner: What Actually Works">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-2 space-y-4 text-slate-700"
        >
          <h3 className="font-semibold text-blue">
            Document Everything From the Relationship
          </h3>
          <p>The key to successful divorce credit repair is evidence:</p>
          {[
            "Separation timeline documentation: Official separation date, when you moved out of shared properties, address change records with banks and government agencies, lease agreements showing when you started living separately.",
            "Financial responsibility agreements: Separation agreements detailing who pays what, Family Court orders specifying debt responsibility, mediation agreements about bill handling, written agreements about account closures.",
            "Communication records: Text messages about bill responsibilities, emails discussing account closures, letters from lawyers about financial arrangements, screenshots of online communications about debts.",
            "Payment evidence: Bank statements showing you paid your agreed share, direct debit records proving payment arrangements, receipts for final payments on joint accounts, evidence of account closure attempts.",
            "The reality: Most people don&apos;t keep proper records when relationships are breaking down, but these records become crucial later for disputing unfair credit listings.",
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
      <Section title="Common Questions About Credit Repair After Divorce">
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

      {/* Cost of ignoring */}
      <Section title="The Real Cost of Ignoring Post-Divorce Credit Problems">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">
              What Divorce Credit Damage Actually Costs You Long-Term
            </h3>
            {[
              "Housing and rental applications: Bad credit makes it harder to get approved for rental properties, qualify for home loans, or access government housing assistance. Single parents especially suffer.",
              "Employment opportunities: Some employers check credit for financial services, government positions, senior management roles, and positions handling money.",
              "Relationship and family impact: Bad credit affects your ability to contribute financially to new relationships, qualify for better housing for children, and model good financial behavior.",
              "Independence and self-worth: Ongoing credit problems can keep you financially dependent on others longer and make you feel like your ex is still controlling your life.",
              "The opportunity cost: While dealing with unfair credit listings, interest rates stay high, investment opportunities pass by, and home ownership goals get delayed indefinitely.",
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
              Don&apos;t Let Your Ex Keep Destroying Your Credit
            </h3>
            <p className="mt-3 text-slate-700">
              Every day you leave unfair credit listings from your divorce
              sitting there is another day your ex is still controlling your
              financial life.
            </p>
            <p className="mt-3 text-slate-700">
              You&apos;ve already been through the hell of relationship
              breakdown. You deserve a fresh start that reflects YOUR financial
              behavior, not the mess your ex left behind.
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
      <Section title="Getting Started: Your Free Divorce Credit Assessment">
        <ol className="mt-4 space-y-3 text-slate-700">
          {[
            "Confidential phone discussion (20 minutes) — call 0489 265 737 for a sensitive discussion about your relationship breakdown and credit concerns.",
            "Relationship timeline and evidence review — we analyze your separation timeline, legal agreements, and available documentation to identify disputable listings.",
            "Complete credit file investigation — we obtain reports from all three bureaus and identify every listing related to the relationship breakdown.",
            "Dispute strategy development — we develop a targeted approach focusing on listings where there are genuine legal grounds for dispute.",
            "Evidence-based dispute process — we handle all communications with credit bureaus and providers while you focus on rebuilding your life.",
            "Fresh start credit planning — once unfair listings are removed, we provide guidance on establishing strong independent credit.",
          ].map((step, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold text-base">
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
              <p className="text-base font-medium">
                98% success rate when we take cases
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-base font-medium">
                No Win No Fee — Sensitive support
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-base font-medium">
                Licensed & regulated — ASIC ACL 532003
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Related Services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/credit-repair-after-divorce-or-separation" />
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
      <p className="mt-1 text-base text-slate-600">Timeline: {timeline}</p>
      <p className="mt-1 text-base text-slate-600">Perfect for: {perfectFor}</p>
      <ul className="mt-3 space-y-2 text-base text-slate-700 flex-grow">
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
          className="rounded-lg bg-blue px-4 py-2 font-semibold text-white hover:bg-blue transition-colors text-base"
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
      <figcaption className="mt-3 text-base font-semibold text-blue">
        {name}
      </figcaption>
    </motion.figure>
  );
}
