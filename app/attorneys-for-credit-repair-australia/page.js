// File: app/attorneys-for-credit-repair-australia/page.jsx
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function AttorneysForCreditRepairPage() {
  // FAQ content (attorney-led specific)
  const faqData = [
    {
      question: "Do I really need an attorney for credit repair?",
      answer:
        "Not legally required, but attorney-led cases achieve far better results. Our lawyer-led approach delivers a 98% success rate on accepted matters because we apply legislation, procedure, and escalation pathways correctly."
    },
    {
      question: "Will an attorney make my credit repair more expensive?",
      answer:
        "Attorney-led services may cost slightly more upfront but typically save money through faster results, higher success rates, and lower lifetime interest costs. Most clients recover the difference within weeks."
    },
    {
      question: "Can attorneys guarantee outcomes?",
      answer:
        "Ethical lawyers cannot guarantee specific results. However, our success rate is 98% on accepted cases and we operate No Win No Fee for removals — success fees are only charged when items are removed."
    },
    {
      question: "How do I verify a lawyer's qualifications?",
      answer:
        "Check law degree and university, confirm a current practising certificate, ask about Privacy Act 1988 and Credit Reporting Code expertise, and verify ASIC licensing."
    },
    {
      question: "What happens if attorney-led credit repair fails?",
      answer:
        "With No Win No Fee, you don't pay success fees. You still receive legal analysis and recommendations; plus you are protected by professional standards and insurance."
    },
    {
      question: "Can I speak directly with the attorney?",
      answer:
        "Yes. Principal Lawyer Elisa Rothschild oversees cases and is available for complex matters, with day-to-day management by qualified legal staff."
    }
  ];

  // Structured data
  const structuredData = generateMinimalStructuredData({
    pathname: "/attorneys-for-credit-repair-australia",
    title:
      "Attorneys for Credit Repair Australia | Lawyer-Led Legal Expertise",
    description:
      "Lawyer-led credit repair by Principal Lawyer Elisa Rothschild. Monash-qualified, ASIC licensed. Legal strategies under the Privacy Act 1988 & Credit Reporting Code.",
    isService: true,
    serviceType: "Attorney-Led Credit Repair"
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-8 lg:py-12">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Attorneys for Credit Repair Australia
                <span className="block mt-2 text-blue">Lawyer-Led Legal Expertise Gets Results</span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  ⚖️ Principal Lawyer Elisa Rothschild leads Australia's premier attorney-driven credit repair team.
                </p>
                <p className="text-base text-gray-600">
                  🎓 Monash University qualified | Consumer Law Specialists | Real Lawyers, Real Results | ASIC Licensed ACL 532003.
                </p>
                <p className="text-base text-gray-600">
                  Credit repair is a legal process. We apply the Privacy Act 1988, the Credit Reporting Code, and consumer protection laws using formal legal strategy — not templates.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-8 relative flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center" role="group" aria-label="Primary actions">
                <Link href="/free-credit-assessment" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Start with Legal Experts (Free)
                </Link>
                <a href="tel:+61489265737" aria-label="Call Australian Credit Solutions on 0489 265 737" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-blue px-6 py-3 text-base font-semibold text-blue transition hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Call Attorney Team: 0489 265 737
                </a>
                {/* Decorative arrows */}
                <div className="pointer-events-none hidden lg:block" aria-hidden="true">
                  <Image src={ArrowIcon} alt="" width={220} height={70} loading="lazy" className="select-none" />
                </div>
                <div className="pointer-events-none lg:hidden flex justify-center" aria-hidden="true">
                  <Image src={ArrowIconM} alt="" width={200} height={120} loading="lazy" className="select-none" />
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-1/3 relative">
              <FooterForm
                heading="Speak to a Lawyer"
                subheading="Attorney-Led Assessment"
                paragraph="Have a complex default or judgment? Get a legal view first. 2-minute intake; a qualified team reviews and responds."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-base text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>Lawyer-led strategy</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>ASIC Licensed ACL 532003</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>No Win No Fee on removals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/attorneys-for-credit-repair-australia" />
      </div>

      {/* Why attorney-led delivers superior results */}
      <Section title="Why Attorney-Led Credit Repair Delivers Superior Results">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-2">
          <Card
            title="👩‍⚖️ Meet Your Principal Lawyer: Elisa Rothschild"
            bullets={[
              "LLB (Monash University), current practising certificate",
              "Privacy Act 1988 & Credit Reporting Code specialist",
              "Consumer & family law experience; corporate & consumer debt negotiation"
            ]}
          />
          <Card
            title="Why Legal Training Matters"
            bullets={[
              "Procedural knowledge: formal timeframes & requirements",
              "Legislative expertise: precise sections & obligations",
              "Enforcement power: escalation when creditors ignore duties",
              "Ethical standards & professional authority"
            ]}
          />
        </motion.div>
      </Section>

      {/* The Legal Advantage in Action */}
      <Section title="The Legal Advantage in Action">
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Privacy Act 1988"
            bullets={[
              "Notice requirements before defaults",
              "Response timeframes & accuracy obligations",
              "Rights to correction/deletion & OAIC enforcement"
            ]}
          />
          <Card
            title="Credit Reporting Code"
            bullets={[
              "Procedures for listing defaults & hardship obligations",
              "Verification standards & correction processes",
              "Reporting requirements to OAIC"
            ]}
          />
          <Card
            title="Consumer Protection Laws"
            bullets={[
              "Australian Consumer Law (unconscionable conduct)",
              "NCCP Act safeguards & unfair contract terms",
              "Debt collection regulation impacts on files"
            ]}
          />
        </div>
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-6">
          <p className="text-green-800 font-semibold">
            Non-lawyer template services lack this depth of legal knowledge — that is why their success rates are dramatically lower.
          </p>
        </div>
      </Section>

      {/* Success Stories */}
      <Section title="Real Clients Share Their Attorney-Led Success Stories">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Testimonial name="Michael T — Business Owner, Sydney">
            "Had a $47,000 commercial default that three other companies couldn't touch. Elisa's team identified procedural breaches and used specific Privacy Act provisions. Default removed in 6 weeks. Now I've got $2.3M business finance approved."
          </Testimonial>
          <Testimonial name="Sarah M — Divorced Professional, Melbourne">
            "Defaults from joint debts created by my ex. Elisa's family law experience was game-changing — she applied provisions around financial abuse and unconscionable conduct. All defaults removed in 8 weeks."
          </Testimonial>
          <Testimonial name="David R — Retail Worker, Brisbane">
            "Creditor ignored dispute letters for months. When Elisa's legal team wrote, they responded in days. What took 9 months elsewhere took 4 weeks with qualified attorneys."
          </Testimonial>
          <Testimonial name="Lisa K — Small Business, Perth">
            "Part IX debt agreement showing incorrectly. Non-legal companies had no idea. Elisa knew the insolvency provisions to cite and removed it in 5 weeks."
          </Testimonial>
        </motion.div>
      </Section>

      {/* Success Rate Reality */}
      <Section title="Attorneys vs Non-Lawyers: The Success Rate Reality">
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Attorney-Led (ACS)"
            bullets={[
              "Success rate: 98% on accepted cases",
              "Average timeline: 3–6 weeks",
              "95% creditor response rate",
              "90% success on complex cases",
              "99% remain removed long-term"
            ]}
          />
          <Card
            title="Template Services"
            bullets={[
              "Success rate: 15–30%",
              "Average timeline: 6–18 months",
              "40% response rate; 25% re-listing",
              "5% success on difficult cases"
            ]}
          />
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card
            title="When Attorneys Challenge"
            bullets={[
              "Escalated to legal/compliance teams",
              "Investigated by qualified staff",
              "Obligations taken seriously; proper responses"
            ]}
          />
          <Card
            title="When Non-Lawyers Challenge"
            bullets={[
              "Handled as customer complaints",
              "Template replies; often ignored",
              "No obligation to engage professionally"
            ]}
          />
        </div>
      </Section>

      {/* Legal Process Phases */}
      <Section title="The Legal Process: How Attorneys Approach Credit Repair">
        <motion.ol variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 space-y-4 text-slate-700">
          {[{
            title: "Phase 1: Legal File Analysis",
            description: "Compliance checks under the Privacy Act 1988 and Credit Reporting Code; timing, notices, evidence, hardship and precedent review."
          },{
            title: "Phase 2: Legal Strategy Development",
            description: "Select legislation, identify breaches, compile evidence and precedent, plan escalation and deadlines."
          },{
            title: "Phase 3: Legal Challenge Execution",
            description: "Citations to exact law sections, breach particulars, verification demands, consequence warnings, OAIC escalation, and deadline enforcement."
          }].map((step, i) => (
            <motion.li key={i} variants={fadeIn} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold">{i + 1}</div>
              <div><strong>{step.title}:</strong> {step.description}</div>
            </motion.li>
          ))}
        </motion.ol>
      </Section>

      {/* When you absolutely need attorneys */}
      <Section title="When You Absolutely Need Attorney-Led Credit Repair">
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Business & Commercial Defaults"
            bullets={["Director guarantees", "Corporate vs consumer law", "Insolvency and structure impacts"]}
          />
          <Card
            title="Family Law Intersections"
            bullets={["Joint debt liability", "Financial abuse documentation", "Property settlement impacts"]}
          />
          <Card
            title="Bankruptcy & Insolvency"
            bullets={["Part IX agreements", "Discharge implications", "Trustee actions on files"]}
          />
          <Card
            title="Consumer Law Violations"
            bullets={["Unconscionable conduct", "Unfair contract terms", "Debt collection breaches", "Hardship violations"]}
          />
          <Card
            title="Government & Regulatory Debts"
            bullets={["Administrative procedures", "Taxation implications", "Statutory demand responses"]}
          />
        </div>
      </Section>

      {/* Why others avoid hiring attorneys */}
      <Section title="Why Most Credit Repair Companies Avoid Hiring Attorneys">
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="The Economics of Legal Expertise"
            bullets={["Qualified lawyers are costly; professional insurance & training required", "Ethical marketing rules limit exaggerated claims"]}
          />
          <Card
            title="Why We Invest in Lawyers"
            bullets={["Superior results and faster timelines", "Legal protection and complex case capability", "Reputation built on professional excellence"]}
          />
        </div>
      </Section>

      {/* Ethics vs Marketing */}
      <Section title="Attorney Ethics vs Industry Marketing">
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Professional Standards You Can Trust"
            bullets={["Honest assessments; no false guarantees", "Transparent pricing & confidentiality", "Ongoing competence & oversight"]}
          />
          <Card
            title="Protection You Receive"
            bullets={["Professional indemnity insurance", "Conduct oversight & complaint processes", "Trust accounting standards"]}
          />
        </div>
      </Section>

      {/* Consultation Process */}
      <Section title="The Attorney Consultation Process">
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="What to Expect"
            bullets={["Legal file review & procedural assessment", "Strategy development & timeline estimation", "Transparent fee structure & success probability"]}
          />
          <Card
            title="Working with Your Legal Team"
            bullets={["Direct attorney oversight", "Legally privileged communications", "Ethical duties to act in your best interests"]}
          />
        </div>
      </Section>

      {/* Performance by case type */}
      <Section title="Attorney-Led Success Rates by Case Type">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Simple Defaults" bullets={["99% attorney success", "2–4 weeks avg timeline", "Procedural breaches found quickly"]} />
          <Card title="Credit Cards/Personal Loans" bullets={["97% attorney success", "3–6 weeks avg timeline", "NCCP Act knowledge required"]} />
          <Card title="Commercial Defaults" bullets={["95% attorney success", "4–8 weeks avg timeline", "Complex commercial law intersections"]} />
          <Card title="Court Judgments" bullets={["90% attorney success", "6–10 weeks avg timeline", "Formal procedure experience needed"]} />
          <Card title="Bankruptcy Items" bullets={["85% attorney success", "6–12 weeks avg timeline", "Insolvency law expertise essential"]} />
        </div>
      </Section>

      {/* Investment & ROI */}
      <Section title="Investment in Legal Expertise: Cost vs Value">
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Attorney-Led Pricing Structure"
            bullets={["Admin fee includes initial legal consultation", "$330 legal analysis & strategy", "Success fees only when items are removed", "Ongoing legal support included"]}
          />
          <Card
            title="Return on Legal Investment"
            bullets={["Example: $890 total fees; two defaults removed", "$650K loan approved at 3.2% vs 8.5%", "~$34,000 annual saving; ROI recovered in days"]}
          />
        </div>
      </Section>

      {/* Verify Qualifications */}
      <Section title="How to Verify Attorney Qualifications">
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="3-Step Verification"
            bullets={["University degree & specialization (e.g., Monash LLB)", "Current practising certificate & memberships", "Professional insurance, references, recognition"]}
          />
          <Card
            title="Essential Questions"
            bullets={["What law school? Current certificate?", "Explain Privacy Act/Credit Reporting Code", "Insurance coverage & case volume"]}
          />
        </div>
      </Section>

      {/* Why Elisa chose credit repair */}
      <Section title="Why Principal Lawyer Elisa Rothschild Chose Credit Repair">
        <p className="text-slate-700">
          "After years in family law, I saw good people harmed by unlawful listings and ignored hardship provisions. Using legal training for consumer financial justice became my mission."
        </p>
      </Section>

      <RelatedBlock currentSlug="/attorneys-for-credit-repair-australia" heading="Related services & guides" />

      {/* FAQs */}
      <Section title="Frequently Asked Questions: Attorney-Led Credit Repair">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 space-y-4">
          {faqData.map((f, index) => (
            <motion.details key={`faq-${index}`} variants={fadeIn} className="group rounded-xl border border-blue-100 bg-white p-4 shadow-sm transition-all hover:shadow-md">
              <summary className="cursor-pointer select-none font-semibold text-blue group-open:text-blue flex items-center justify-between">
                <span>{f.question}</span>
                <svg className="h-5 w-5 transform group-open:rotate-180 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-3 text-base text-slate-700 pl-2 border-l-2 border-blue-200 ml-1">{f.answer}</p>
            </motion.details>
          ))}
        </motion.div>
      </Section>

      {/* Final CTA */}
      <Section title="Experience Attorney-Led Excellence Today">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">The Legal Advantage: Why Attorney-Led Credit Repair Wins</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Qualified legal expertise and professional authority</li>
              <li>Strategic case-specific approach and escalation capability</li>
              <li>Professional protection and ethical standards</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/free-credit-assessment" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors">Start with Legal Experts</Link>
              <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors">Call 0489 265 737</a>
              <a href="mailto:help@australiancreditsolutions.com.au" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors">Email Legal Team</a>
            </div>
          </div>
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg">
            <p className="text-slate-700">Australian Credit Solutions Pty Ltd | ASIC Australian Credit Licence ACL 532003</p>
            <p className="mt-2 text-slate-700">Principal Lawyer: Elisa Rothschild — Monash University qualified. Professional legal expertise, lawyer-led strategies.</p>
            <p className="mt-2 text-slate-700">
              ⭐⭐⭐⭐⭐ 4.9/5 from 855+ verified reviews
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Trust bar */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl bg-gradient-to-r from-blue to-blue p-6 text-white shadow-lg">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-base font-medium">Lawyer-led legal strategy</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-base font-medium">No Win No Fee on removals</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-base font-medium">ASIC Licensed — ACL 532003</p></div>
          </div>
        </motion.div>
      </section>

      {/* Related Services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/attorneys-for-credit-repair-australia" />
      </div>

      <Footer />
    </main>
  );
}

function Section({ title, children }) {
  return (
    <motion.section initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true, margin: "-100px" }} className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold tracking-tight text-blue sm:text-3xl">{title}</h2>
      <div className="mt-4 text-base leading-relaxed text-slate-800">{children}</div>
    </motion.section>
  );
}

function Card({ title, bullets = [] }) {
  return (
    <motion.div variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <h3 className="text-lg font-semibold text-blue">{title}</h3>
      <ul className="mt-3 space-y-2 text-base text-slate-700">
        {bullets.map((b, i) => (
          <li key={`${i}-${b}`} className="flex items-start gap-2">
            <svg className="h-5 w-5 shrink-0 text-orange-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
      className={`relative rounded-xl border p-6 h-full flex flex-col ${featured ? "border-blue-300 bg-gradient-to-b from-blue-50 to-white shadow-lg" : "border-blue-100 bg-white shadow-sm"}`}
    >
      {featured && (
        <span className="absolute -top-3 left-6 inline-block rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white shadow">Most Popular</span>
      )}
      <h3 className="text-lg font-semibold text-blue">{name}</h3>
      <p className="mt-1 text-base text-slate-600">Timeline: {timeline}</p>
      <p className="mt-1 text-base text-slate-600">Perfect for: {perfectFor}</p>
      <ul className="mt-3 space-y-2 text-base text-slate-700 flex-grow">
        {includes?.map((i, idx) => (
          <li key={`${idx}-${i}`} className="flex items-start gap-2">
            <svg className="h-5 w-5 shrink-0 text-blue-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {i}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Link href="/free-credit-assessment" className="w-full rounded-lg bg-blue px-4 py-2 font-semibold text-white hover:bg-blue transition-colors text-base text-center block">Start Now</Link>
      </div>
    </motion.div>
  );
}

function Testimonial({ name, children }) {
  return (
    <motion.figure variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md mb-4">
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
