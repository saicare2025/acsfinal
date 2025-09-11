// File: app/australian-credit-lawyers-now-acs/page.jsx
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

export default function AustralianCreditLawyersNowACSPage() {
  const faqData = [
    {
      question: "Are you still the same company I worked with as Australian Credit Lawyers?",
      answer: "Yes, exactly the same company, same team, same ownership. Just evolved our name and services to help more Australians."
    },
    {
      question: "Will my existing case be affected by the name change?",
      answer: "Not at all. Same case managers, same processes, same commitment to your success. Nothing changes except our expanded ability to help."
    },
    {
      question: "Are you still lawyer-led after becoming 'Solutions'?",
      answer: "Absolutely. Elisa Rothschild still leads legal strategy, qualified lawyers still draft all disputes. We just made our services more accessible."
    },
    {
      question: "Why did you change from such a strong legal brand?",
      answer: "Client feedback showed many Australians needed our help but felt intimidated by 'lawyers.' We removed that barrier while keeping our expertise."
    },
    {
      question: "Do you still charge like lawyers (expensive hourly rates)?",
      answer: "No, we never charged like traditional lawyers. Same No Win, No Fee structure: admin fee plus success fees only when we get results."
    },
    {
      question: "Can I still get the same lawyer-quality service?",
      answer: "Yes, the legal quality is identical. Same lawyers, same legal processes, same standards. Just wrapped in a more accessible model."
    }
  ];

  const structuredData = generateMinimalStructuredData({
    pathname: "/australian-credit-lawyers-now-acs",
    title: "Australian Credit Lawyers is Now Australian Credit Solutions",
    description:
      "Looking for Australian Credit Lawyers? We've evolved into Australian Credit Solutions: same award-winning lawyer-led team, expanded services, more accessibility.",
    isService: true,
    serviceType: "Credit Repair & Legal Solutions"
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-8 lg:py-12">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:flex-row lg:gap-12 lg:items-start">
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl text-gray-900">
                Australian Credit Lawyers is Now Australian Credit Solutions
                <span className="block mt-2 text-blue">Same Legal Expertise. Expanded Services.</span>
              </h1>
              <div className="mt-6 space-y-4">
                <p className="text-lg text-gray-700">
                  Looking for Australian Credit Lawyers? You've found us – we're now Australian Credit Solutions. Same award-winning team, same legal expertise, expanded mission to help more Australians rebuild their financial lives.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/free-credit-assessment" className="rounded-lg bg-blue px-6 py-3 text-white font-semibold hover:bg-blue-700">
                  Get Started Today
                </Link>
                <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-6 py-3 font-semibold text-blue hover:bg-blue hover:text-white">
                  Call 0489 265 737
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <FooterForm
                heading="Same Team, Expanded Mission"
                subheading="From Lawyers to Solutions"
                paragraph="Speak to the same trusted team under our new name – Australian Credit Solutions."
              />
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/australian-credit-lawyers-now-acs" />
      </div>

      <Section title="Our Evolution: From Lawyers to Solutions">
        <p className="text-slate-700 font-semibold">Our Legal Heritage (Australian Credit Lawyers 2018–2023)</p>
        <ul className="list-disc pl-6 text-slate-700 mt-2 space-y-1">
          <li>Lawyer-led approach to credit disputes</li>
          <li>Consumer credit law expertise</li>
          <li>Professional standards from day one</li>
          <li>Award-winning results through legal precision</li>
          <li>Trusted reputation built on integrity</li>
        </ul>
        <p className="mt-4 text-slate-700 font-semibold">Why We Became Australian Credit Solutions (2024+)</p>
        <p className="text-slate-700 mt-2">
          Client feedback showed our name created barriers – people feared high legal costs or judgment. We kept the legal foundation but made our services more approachable.
        </p>
      </Section>

      <Section title="Same Team, Expanded Mission">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Your Trusted Team Remains" bullets={["Elisa Rothschild – Principal Lawyer & Director","Qualified legal team drafting every dispute","Experienced case managers","Australian-based support team"]} />
          <Card title="What's Changed: Our Approach" bullets={["Holistic financial solutions","Accessible and friendly","Plain English communication","Client partnership model"]} />
        </div>
      </Section>

      <Section title="Why This Evolution Benefits You">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Broader Range of Solutions" bullets={["Credit improvement strategies","Financial rehabilitation planning","Lender relationship support","Credit monitoring & protection","Financial education"]} />
          <Card title="More Accessible Service" bullets={["Friendly consultations","Client-focused support","Easy documentation","Outcome-focused solutions"]} />
          <Card title="Inclusive Brand Identity" bullets={["Solutions = positive & hopeful","Approachable delivery","Focus on fresh starts","Clear communication"]} />
        </div>
      </Section>

      <Section title="Our Legal Expertise Remains Your Advantage">
        <ul className="list-disc pl-6 space-y-1 text-slate-700">
          <li>Elisa Rothschild still directs legal strategy</li>
          <li>Lawyers draft every dispute</li>
          <li>Legal precision drives success rates</li>
          <li>ASIC licensing ensures compliance</li>
        </ul>
        <p className="mt-4 text-slate-700">
          Our legal foundation delivers higher success rates, faster resolutions, stronger negotiations, and professional credibility.
        </p>
      </Section>

      <Section title="Client Testimonials: Before and After the Evolution">
        <Testimonial name="Michael R – Sydney (2022)">
          "I was nervous about contacting lawyers, but Australian Credit Lawyers made it comfortable. Their legal approach got results I couldn't get myself."
        </Testimonial>
        <Testimonial name="Sarah T – Melbourne (2024)">
          "Australian Credit Solutions made the whole process easier than I expected. Same great results, but felt more supportive."
        </Testimonial>
        <Testimonial name="David L – Brisbane">
          "I worked with them as Australian Credit Lawyers and now ACS. Same amazing team, but more accessible and supportive."
        </Testimonial>
      </Section>

      <Section title="Finding Us After the Name Change">
        <p className="text-slate-700">Searching for "Australian Credit Lawyers" or "Credit repair lawyers Australia"? You'll still find us. Same number, same email, same team.</p>
        <p className="mt-2 text-slate-700">Phone: 0489 265 737 | Email: help@australiancreditsolutions.com.au | ASIC ACL 532003</p>
      </Section>

      <Section title="The Evolution Benefits: What You Gain">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Old Model (Australian Credit Lawyers)" bullets={["Legal analysis","Lawyer-drafted disputes","Legal negotiations","Case closed at resolution"]} />
          <Card title="New Model (Australian Credit Solutions)" bullets={["Holistic assessment","Legal + improvement planning","Ongoing support","Long-term partnership"]} />
        </div>
      </Section>

      <Section title="Why The Legal Foundation Still Matters">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Non-Legal Credit Repair" bullets={["Generic templates","No legal understanding","Aggressive tactics","Limited success"]} />
          <Card title="Australian Credit Solutions" bullets={["Custom legal arguments","Deep legal knowledge","Professional escalation","Complex case expertise"]} />
        </div>
      </Section>

      <RelatedBlock currentSlug="/australian-credit-lawyers-now-acs" heading="Related services & guides" />

      <Section title="Frequently Asked Questions">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 space-y-4">
          {faqData.map((f, i) => (
            <motion.details key={i} variants={fadeIn} className="group border rounded-xl p-4 bg-white shadow-sm">
              <summary className="font-semibold text-blue cursor-pointer flex justify-between items-center">
                <span>{f.question}</span>
                <svg className="h-5 w-5 transform group-open:rotate-180 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </summary>
              <p className="mt-2 text-slate-700 text-base">{f.answer}</p>
            </motion.details>
          ))}
        </motion.div>
      </Section>

      <Section title="Moving Forward Together">
        <p className="text-slate-700">What will never change: quality, legal expertise, success rates, standards, and client-first focus.</p>
        <p className="mt-2 text-slate-700">What's improved: accessibility, clearer communication, broader solutions, long-term support, innovation.</p>
      </Section>

      <Section title="Ready to Experience Our Evolution?">
        <div className="flex flex-wrap gap-4">
          <a href="tel:+61489265737" className="rounded-lg bg-blue px-6 py-3 text-white font-semibold">Call 0489 265 737</a>
          <a href="mailto:help@australiancreditsolutions.com.au" className="rounded-lg border-2 border-blue px-6 py-3 text-blue font-semibold hover:bg-blue hover:text-white">Email Us</a>
          <Link href="/free-credit-assessment" className="rounded-lg bg-orange px-6 py-3 text-white font-semibold">Online Consultation</Link>
        </div>
      </Section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl bg-gradient-to-r from-blue to-blue p-6 text-white">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white/10 p-4 rounded-xl text-center"><p>Legal expertise + precision</p></div>
            <div className="bg-white/10 p-4 rounded-xl text-center"><p>Accessible & friendly service</p></div>
            <div className="bg-white/10 p-4 rounded-xl text-center"><p>Award-winning results</p></div>
          </div>
        </motion.div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/australian-credit-lawyers-now-acs" />
      </div>

      <Footer />
    </main>
  );
}

function Section({ title, children }) {
  return (
    <motion.section initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true, margin: "-100px" }} className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold text-blue sm:text-3xl">{title}</h2>
      <div className="mt-4 text-slate-800">{children}</div>
    </motion.section>
  );
}

function Card({ title, bullets = [] }) {
  return (
    <motion.div variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-blue">{title}</h3>
      <ul className="mt-3 text-base space-y-1 text-slate-700">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2 items-start">
            <svg className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function Testimonial({ name, children }) {
  return (
    <motion.figure variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm mb-4">
      <blockquote className="text-slate-700">{children}</blockquote>
      <figcaption className="mt-3 text-base font-semibold text-blue">{name}</figcaption>
    </motion.figure>
  );
}
