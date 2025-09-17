// File: app/credit-repair-after-debt-agreement-australia/page.jsx
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

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function CreditRepairAfterDebtAgreementPage() {
  const faqData = [
    {
      question: "How long after completing my Part 9 can I start credit repair?",
      answer: "Immediately. The sooner you start, the faster your recovery."
    },
    {
      question: "Will lenders ever trust me again after a debt agreement?",
      answer: "Yes. Many lenders understand that debt agreements show responsibility. Time and positive actions rebuild trust."
    },
    {
      question: "Can you remove the Part 9 listing itself?",
      answer: "Generally no – completed debt agreements stay for 5 years. But we clean up everything around it and help you build positive credit."
    },
    {
      question: "I'm scared to apply for any credit after my agreement. Is this normal?",
      answer: "Absolutely. Many clients feel this way. We'll guide you through safe, strategic applications."
    },
    {
      question: "What if I have defaults from after my debt agreement?",
      answer: "Post-agreement defaults are often easier to remove. We have high success rates with these."
    },
    {
      question: "How long until I can get a home loan after Part 9?",
      answer: "Typically 12–24 months with the right strategy. Some specialist lenders consider applications sooner."
    }
  ];

  const structuredData = generateMinimalStructuredData({
    pathname: "/credit-repair-after-debt-agreement-australia",
    title: "Credit Repair After Debt Agreement (Part 9) | Your Fresh Start Begins Now",
    description:
      "Completed your Part 9 debt agreement? Now rebuild your financial life. 94% success rate, lawyer-led specialists, No Win No Fee. Fresh start strategies Australia-wide.",
    isService: true,
    serviceType: "Credit Repair After Debt Agreement"
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
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Credit Repair After Debt Agreement (Part 9)
                <span className="block mt-2 text-blue">Your Fresh Start Begins Now</span>
              </h1>
              <p className="mt-6 text-lg text-gray-700 max-w-2xl">
                Completed your Part 9 debt agreement? Congratulations – you’ve survived one of life’s toughest financial challenges. Now it’s time to rebuild and reclaim your financial future.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link href="/free-credit-assessment" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue px-6 py-3 font-semibold text-white shadow-sm hover:bg-blue-700">
                  Remove My Credit Problems Now
                </Link>
                <a href="tel:+61489265737" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-blue px-6 py-3 font-semibold text-blue hover:bg-blue hover:text-white">
                  Call 0489 265 737
                </a>
                <div className="pointer-events-none hidden lg:block">
                  <Image src={ArrowIcon} alt="" width={220} height={70} />
                </div>
                <div className="pointer-events-none lg:hidden flex justify-center">
                  <Image src={ArrowIconM} alt="" width={200} height={120} />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <FooterForm
                heading="Fresh Start Assessment"
                subheading="Specialists in Post-Part 9 Recovery"
                paragraph="Quick intake. Judgment-free advice. Transparent pricing."
              />
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />

      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/credit-repair-after-debt-agreement-australia" />
      </div>

      <Section title="Why Credit Repair After Part 9 is Different">
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Complex Credit History" bullets={["Multiple creditors & defaults","Overlapping timelines","AFSA records"]} />
          <Card title="Emotional Recovery" bullets={["Rebuilding confidence","Fear of rejection","Anxiety after hardship"]} />
          <Card title="Lender Prejudice" bullets={["Bias against Part 9 completions","Need specialist lenders","Advocacy required"]} />
        </div>
      </Section>

      <Section title="Your Fresh Start Action Plan">
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Phase 1: Credit File Cleanup (Weeks 1–8)" bullets={["Challenge incorrect defaults","Fix admin errors","Ensure Part 9 completion noted"]} />
          <Card title="Phase 2: Credit Score Rebuild (Months 2–6)" bullets={["Secured cards","Specialist lenders","Positive utility accounts"]} />
          <Card title="Phase 3: Finance Access (Months 6–18)" bullets={["Car finance","Personal/business loans","Home loan eligibility"]} />
        </div>
      </Section>

      <Section title="Real Stories: Life After Part 9">
        <Testimonial name="Michael R – Brisbane">
          "Completed my Part 9 in 2022 after business failure. ACS cleaned my file and built strategy. 18 months later – approved for $450K home loan."
        </Testimonial>
        <Testimonial name="Sarah T – Perth">
          "Couldn't get car finance anywhere after my debt agreement. ACS removed old defaults and found specialist lender."
        </Testimonial>
        <Testimonial name="David & Jenny L – Melbourne">
          "Part 9 from divorce nearly destroyed me. ACS rebuilt everything – credit, confidence, future. Now we own rental properties."
        </Testimonial>
      </Section>

      <Section title="Our Part 9 Fresh Start Guarantee">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="What We Promise" bullets={["Honest assessment","Customized strategy","No Win No Fee","Ongoing support"]} />
          <Card title="Investment in Your Future" bullets={["Car loan savings $8K+","Personal loan savings $6K+","Home loan savings $40K+ in 5 years"]} />
        </div>
      </Section>

      <Section title="Frequently Asked Questions">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" className="space-y-4">
          {faqData.map((f, i) => (
            <motion.details key={i} variants={fadeIn} className="group rounded-lg border border-blue-100 bg-white p-4">
              <summary className="cursor-pointer font-semibold text-blue flex justify-between items-center">
                {f.question}
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-3 text-base text-slate-700">{f.answer}</p>
            </motion.details>
          ))}
        </motion.div>
      </Section>

      <Section title="Ready for Your Fresh Start?">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-blue font-semibold">Take the next step:</h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Free assessment – no obligation</li>
              <li>Customized recovery plan</li>
              <li>No Win No Fee protection</li>
              <li>Supportive, non-judgmental specialists</li>
            </ul>
            <div className="flex flex-wrap gap-3 mt-4">
              <Link href="/free-credit-assessment" className="bg-blue text-white px-5 py-3 rounded-lg font-semibold">Start My Fresh Start</Link>
              <a href="tel:+61489265737" className="border border-blue px-5 py-3 rounded-lg text-blue hover:bg-blue hover:text-white">Call 0489 265 737</a>
              <a href="mailto:help@australiancreditsolutions.com.au" className="border border-blue px-5 py-3 rounded-lg text-blue hover:bg-blue hover:text-white">Email Us</a>
            </div>
          </div>
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-6">
            <p className="text-slate-700">Australian Credit Solutions Pty Ltd | ASIC ACL 532003</p>
            <p className="mt-2">Fresh Start Specialists for Post-Debt Agreement Recovery</p>
          </div>
        </div>
      </Section>

      <RelatedBlock currentSlug="/credit-repair-after-debt-agreement-australia" heading="Related Services & Guides" />

      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/credit-repair-after-debt-agreement-australia" />
      </div>

      <Footer />
    </main>
  );
}

function Section({ title, children }) {
  return (
    <motion.section initial="hidden" whileInView="visible" variants={fadeIn} className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold text-blue sm:text-3xl">{title}</h2>
      <div className="mt-4 text-slate-800">{children}</div>
    </motion.section>
  );
}

function Card({ title, bullets }) {
  return (
    <motion.div variants={fadeIn} className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-blue">{title}</h3>
      <ul className="mt-3 space-y-2 text-base text-slate-700">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-orange-500">✔</span> {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function Testimonial({ name, children }) {
  return (
    <motion.figure variants={fadeIn} className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
      <blockquote className="text-slate-700">{children}</blockquote>
      <figcaption className="mt-3 text-base font-semibold text-blue">{name}</figcaption>
    </motion.figure>
  );
}
