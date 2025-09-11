// File: app/credit-repair-after-identity-theft-australia/page.jsx
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

export default function IdentityTheftCreditRepairPage() {
  const faqData = [
    {
      question: "How long does identity theft credit repair take?",
      answer:
        "Most cases resolve in 6–12 weeks depending on complexity. Simple cases 4–6 weeks; complex synthetic identity theft may take 12–16 weeks."
    },
    {
      question: "Will my credit be as good as before?",
      answer:
        "Yes—once fraudulent entries are removed, we optimise your legitimate profile. Many clients finish with higher scores than before the theft."
    },
    {
      question: "How much does recovery cost?",
      answer:
        "Compassionate pricing with payment plans and hardship options. The savings from restored credit usually exceed fees on your first loan."
    },
    {
      question: "Can I do this myself?",
      answer:
        "Self-advocacy succeeds far less often and takes longer. Credit providers respond faster to lawyer-led disputes, and we support you emotionally throughout."
    },
    {
      question: "What if the theft happened years ago?",
      answer:
        "It's never too late. Fraudulent entries can be removed regardless of age; older cases often have stronger evidence patterns."
    },
    {
      question: "Will I need to go to court?",
      answer:
        "Rarely. Most recovery is administrative with providers and bureaus. Police reports help but ongoing police/court involvement is uncommon."
    }
  ];

  const structuredData = generateMinimalStructuredData({
    pathname: "/credit-repair-after-identity-theft-australia",
    title: "Credit Repair After Identity Theft | Reclaim Your Financial Life",
    description:
      "Identity stolen? We remove fraudulent entries fast and restore your credit. Lawyer-led, award-winning team with 98% success on accepted cases. No Win No Fee.",
    isService: true,
    serviceType: "Identity Theft Credit Repair"
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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Credit Repair After Identity Theft
                <span className="block mt-2 text-blue">Reclaim Your Financial Life</span>
              </h1>
              <p className="mt-6 text-lg text-gray-700 max-w-2xl">
                When someone steals your identity, we help you take back control. Lawyer-led, victim-focused specialists with award-winning results and a 98% success rate when we take your case.
              </p>

              {/* CTAs */}
              <div className="mt-8 relative flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center" role="group" aria-label="Primary actions">
                <Link href="/free-credit-assessment" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Start My Victim Assessment
                </Link>
                <a href="tel:+61489265737" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-blue px-6 py-3 text-base font-semibold text-blue transition hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Call 0489 265 737
                </a>
                <div className="pointer-events-none hidden lg:block" aria-hidden="true">
                  <Image src={ArrowIcon} alt="" width={220} height={70} loading="lazy" className="select-none" />
                </div>
                <div className="pointer-events-none lg:hidden flex justify-center" aria-hidden="true">
                  <Image src={ArrowIconM} alt="" width={200} height={120} loading="lazy" className="select-none" />
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-1/3">
              <FooterForm
                heading="Identity Theft Help"
                subheading="Compassionate, Lawyer‑Led"
                paragraph="Upload evidence securely. We build your fraud case and remove every bogus entry—fast."
              />
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/credit-repair-after-identity-theft-australia" />
      </div>

      {/* Why Choose Us */}
      <Section title="Why Identity Theft Victims Choose Us">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Victim‑Focused" bullets={["Trauma‑informed approach","Safety and control restored"]} />
          <StatCard title="Award‑Winning" bullets={["2022 • 2023 • 2024","Trusted specialists"]} />
          <StatCard title="Legal Expertise" bullets={["Qualified lawyers","Privacy Act & ACL mastery"]} />
          <StatCard title="98% Success" bullets={["Accepted cases","Proven outcomes"]} />
        </div>
      </Section>

      {/* The Nightmare */}
      <Section title="The Identity Theft Nightmare: We've Seen It All">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="The Discovery" bullets={["Loan denials with no reason","Unknown accounts on your report","Collectors chasing debts you don't owe","Score smashed by a criminal"]} />
          <Card title="The Emotional Hit" bullets={["Violation and helplessness","Shame (not your fault)","Anger and fear","Sleepless nights"]} />
          <Card title="System Failures" bullets={["Banks don't believe you","Providers ignore disputes","Endless calls, no action","Treated like the offender"]} />
        </div>
      </Section>

      {/* How it damages life */}
      <Section title="How Identity Theft Destroys Your Credit (and Your Life)">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Immediate Credit Carnage" bullets={["Fraudulent cards, loans, telco & BNPL","Score drops 200–500 points","Limits cut; premiums jump","Employment checks flag issues"]} />
          <Card title="Long‑Term Life Impact" bullets={["Home & car finance denied","Rentals rejected","Career & clearances at risk","Relationship stress & anxiety"]} />
        </div>
      </Section>

      {/* Why standard repair fails */}
      <Section title="Why Standard Credit Repair Fails for Identity Theft">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Different from Normal Disputes" bullets={["Needs fraud‑specific legal strategy","Criminal‑grade evidence handling","Victim advocacy throughout","Navigate multiple fraud laws"]} />
          <Card title="The Evidence & Law Challenge" bullets={["Prove you didn't open accounts","Show provider verification failures","Privacy Act & NCCP arguments","Banks respond to lawyer letters"]} />
        </div>
      </Section>

      {/* Process */}
      <Section title="Our Identity Theft Recovery Process">
        <motion.ol variants={staggerChildren} initial="hidden" whileInView="visible" className="space-y-4 text-slate-700">
          {[
            {
              title: "Phase 1: Victim Support & Evidence (Week 1)",
              description:
                "Confidential consult, validation and rights; gather reports, statements, timelines, and identify every fraudulent entry."
            },
            {
              title: "Phase 2: Legal Strategy (Week 2)",
              description:
                "Map fraud, pinpoint provider failures, craft fraud‑specific disputes citing Privacy Act, ACL, NCCP; prepare escalation."
            },
            {
              title: "Phase 3: Aggressive Advocacy (Weeks 3–8)",
              description:
                "Submit legal demands, monitor investigations, escalate to senior fraud teams, lodge formal complaints, place fraud alerts."
            },
            {
              title: "Phase 4: Credit Restoration & Protection (Ongoing)",
              description:
                "Remove all fraudulent entries, rebuild positive history, optimise legitimate accounts, monitor and educate for prevention."
            }
          ].map((step, idx) => (
            <motion.li key={idx} variants={fadeIn} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold">{idx + 1}</div>
              <div>
                <strong>{step.title}:</strong> {step.description}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </Section>

      {/* Case studies */}
      <Section title="Real Identity Theft Victims We've Helped">
        <Testimonial name="Sarah M – Melbourne Teacher">
          "Ex‑partner opened 8 accounts ($47k). All entries removed in 6 weeks. Score now higher than before; owns 2 investment properties."
        </Testimonial>
        <Testimonial name="Michael R – Sydney Business Owner">
          "Partner stole identity; $63k fraudulent loans. Legal action removed entries; business thriving with 3 locations."
        </Testimonial>
        <Testimonial name="Emma & David T – Brisbane">
          "Clinic breach led to 12 accounts. Coordinated removal and protection. Bought dream family home."
        </Testimonial>
      </Section>

      {/* Immediate steps */}
      <Section title="Immediate Steps After You Discover Identity Theft">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="First 24 Hours" bullets={["Call your bank & freeze accounts","File a police report","Place fraud alerts with bureaus","Document everything"]} />
          <Card title="Week 1 Setup" bullets={["Build evidence file & timeline","Professional legal assessment","Recovery strategy & timeline","Begin provider disputes"]} />
        </div>
      </Section>

      {/* Types we handle */}
      <Section title="Types of Identity Theft We Handle">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Financial – New/Account Takeover" bullets={["Cards, loans, BNPL, telco","Unauthorised transactions"]} />
          <Card title="Synthetic Identity" bullets={["Real + fake details blended","Complex evidence needs"]} />
          <Card title="Child Identity Theft" bullets={["Minors targeted","Long‑term recovery planning"]} />
          <Card title="Medical Identity Theft" bullets={["Medical billing & claims fraud","Credit clean‑up with providers"]} />
        </div>
      </Section>

      {/* Prevention */}
      <Section title="Prevention: Protect Yourself Going Forward">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Immediate Protections" bullets={["Strong unique passwords + 2FA","Secure mail & shred docs","Check statements weekly","Order free credit reports"]} />
          <Card title="Advanced Practices" bullets={["Use secure Wi‑Fi only","Keep ID locked away","Verify callers before sharing","Watch for new‑account alerts"]} />
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Frequently Asked Questions">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" className="mt-4 space-y-4">
          {faqData.map((f, index) => (
            <motion.details key={`faq-${index}`} variants={fadeIn} className="group rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
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

      {/* CTA Final */}
      <Section title="Take Back Control – Start Your Recovery Today">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">Free Victim Assessment</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>We review all fraudulent entries and evidence</li>
              <li>Explain your rights and build a recovery plan</li>
              <li>Clear timeline and compassionate pricing</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/free-credit-assessment" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue">
                Start My Assessment
              </Link>
              <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white">
                Call 0489 265 737
              </a>
              <a href="mailto:help@australiancreditsolutions.com.au" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white">
                Email the Team
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg">
            <p>Australian Credit Solutions Pty Ltd • ASIC ACL 532003</p>
            <p className="mt-1">Award‑winning identity theft recovery • Lawyer‑led • 98% success on accepted cases</p>
          </div>
        </div>
      </Section>

      <RelatedBlock currentSlug="/credit-repair-after-identity-theft-australia" heading="Related services & guides" />

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} className="rounded-2xl bg-gradient-to-r from-blue to-blue p-6 text-white shadow-lg">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-base font-medium">3× Industry Excellence Awards (2022–2024)</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-base font-medium">Lawyer‑Led • No Win No Fee</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-base font-medium">Licensed & regulated — ASIC ACL 532003</p>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/credit-repair-after-identity-theft-australia" />
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
          <li key={`${title}-${i}`} className="flex items-start gap-2">
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

function StatCard({ title, bullets = [] }) {
  return (
    <motion.div variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-blue">{title}</h3>
      <ul className="mt-3 space-y-2 text-base text-slate-700">
        {bullets.map((b, i) => (
          <li key={`${title}-b-${i}`} className="flex items-start gap-2">
            <span className="text-blue">•</span> {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function Testimonial({ name, children }) {
  return (
    <motion.figure variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md mb-4">
      <blockquote className="text-slate-700">{children}</blockquote>
      <figcaption className="mt-3 text-base font-semibold text-blue">{name}</figcaption>
    </motion.figure>
  );
}