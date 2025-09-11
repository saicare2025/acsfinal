// File: app/our-responsibility-to-you/page.jsx
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

export default function OurResponsibilityPage() {
  const structuredData = generateMinimalStructuredData({
    pathname: "/our-responsibility-to-you",
    title: "Our Responsibility to You | Why We Genuinely Care About Your Financial Future",
    description:
      "We know the system isn’t fair. One stuff‑up shouldn’t wreck five years of your life. Here’s how we fight for you — honestly, legally and with genuine care.",
    isService: false,
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-8 lg:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Our Responsibility to You
                <span className="block mt-2 text-blue">Why We Genuinely Care About Your Financial Future</span>
              </h1>
              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  The system isn’t fair. One stuff‑up shouldn’t wreck your life for five years. You missed a payment while caring for family, your business copped it during COVID, or someone else’s actions torched your file — and somehow you’re the one punished.
                </p>
                <p className="text-base text-gray-600">
                  It’s not fair. It’s not right. And we’re here to fix it — honestly, lawfully and with genuine care.
                </p>
              </div>
              <div className="mt-8 relative flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center" role="group" aria-label="Primary actions">
                <Link href="#care-form" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">🤝 Get Your Free Assessment</Link>
                <a href="tel:+61489265737" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-blue px-6 py-3 text-base font-semibold text-blue transition hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">📞 Call 0489 265 737</a>
                <div className="pointer-events-none hidden lg:block" aria-hidden="true"><Image src={ArrowIcon} alt="" width={220} height={70} loading="lazy" /></div>
                <div className="pointer-events-none lg:hidden flex justify-center" aria-hidden="true"><Image src={ArrowIconM} alt="" width={200} height={120} loading="lazy" /></div>
              </div>
            </div>
            {/* Right */}
            <div className="w-full lg:w-1/3 relative" id="care-form">
              <FooterForm
                heading="Free, Caring Credit Assessment"
                subheading="Judgment‑Free · Lawyer‑Led"
                paragraph="Tell us what happened. We’ll review all three bureaus, explain your options plainly and map a humane, legal path forward."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-sm text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>No Win No Fee</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>ASIC ACL 532003</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>4.9★ from 855+ reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />

      <div className="mx-auto max-w-6xl px-4"><Breadcrumb pathname="/our-responsibility-to-you" /></div>

      {/* We Understand */}
      <Section title="We Understand Because We’ve Seen It All">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Testimonial name="Hospital & Hardship">
            “I was crook in hospital for three months. One bill went unpaid and now I can’t get a home loan.”
          </Testimonial>
          <Testimonial name="Separation Fallout">
            “My ex racked up debt in my name after we split. The banks don’t give a stuff that I was screwed over.”
          </Testimonial>
          <Testimonial name="Work Dried Up">
            “Lost my job when the mines went quiet. Now I can’t even get car finance to get back to work.”
          </Testimonial>
          <Testimonial name="Tiny Mistake, Massive Cost">
            “A $200 phone‑bill mistake has cost me tens of thousands in knocked‑back applications.”
          </Testimonial>
        </motion.div>
      </Section>

      {/* System stacked */}
      <Section title="The System Is Designed to Keep You Down">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Punitive by Design" bullets={["One mistake shadows you for five years","No context for illness, job loss or crisis","Compound punishment via higher rates","No forgiveness — ‘paid’ defaults still stain","Joint accounts can nuke your file"]} />
          <Card title="Profiting from Pain" bullets={["Higher interest on future loans","Default fees that dwarf the debt","Collection add‑ons of dubious legality","Legal‑threat letters to force payment","No incentive to fix their own errors"]} />
          <Card title="Rules Stacked Against You" bullets={["Complex processes few can navigate","Short dispute windows favour providers","Burden of proof sits on you","Limited compliance oversight","Legal help is costly when you need it most"]} />
        </div>
      </Section>

      {/* Level the field */}
      <Section title="Our Responsibility: Leveling the Playing Field">
        <div className="grid gap-6 md:grid-cols-2">
          <PromiseCard
            name="Honest Assessment"
            points={["If we can’t help, we’ll say so and charge nothing","If success is iffy, we’ll explain risks before you decide","If we’re confident, we’ll show the legal ‘why’ and ‘how’","No nonsense timelines, no impossible guarantees"]}
          />
          <PromiseCard
            name="Fighting the Legal Fight"
            points={["Lawyer review on every file","Identify specific legal failures in listing","Provider‑proof legal correspondence","Escalate to OAIC when required","Prepared for court in rare cases"]}
          />
          <PromiseCard
            name="Treating You Like a Human"
            points={["Zero judgment about the past","Respectful, dignified communication","Recognition that life happens to good people","Support throughout — not only when we need docs"]}
          />
          <PromiseCard
            name="Transparent, Fair Pricing"
            points={["$330 admin fee — that’s it upfront","Success fees only on actual removals","No subscriptions or drip‑fees","No pressure tactics or fake deadlines"]}
          />
          <PromiseCard
            name="Getting You Back on Track"
            points={["Referrals to finance partners who understand recovery","Applications timed to protect your score","Ongoing help for future credit questions","We celebrate your wins — that’s the point"]}
          />
        </div>
      </Section>

      {/* Elisa story */}
      <Section title="Why This Matters to Us Personally">
        <motion.blockquote variants={fadeIn} className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm">
          <p className="text-slate-800">
            “I’ll never forget the single mum from Frankston who walked into my office in 2018. Three kids, facing losing their home because a $2,400 default was blocking approval. She’d done everything right — deposit saved, steady job, perfect rental history — but the listing broke the rules.
            Six weeks later, it was gone. Loan approved. Family safe. That’s when it clicked: most people wearing bad‑credit labels aren’t irresponsible — they’re victims of a system that doesn’t follow its own rules. That’s why Australian Credit Solutions exists.”
          </p>
          <footer className="mt-3 text-sm font-semibold text-blue">— Elisa Rothschild, Principal Lawyer & Founder</footer>
        </motion.blockquote>
      </Section>

      {/* Commitments */}
      <Section title="Our Commitments to You">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">We Commit to Fighting Until You Win</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
              <li>Multiple dispute rounds as needed</li>
              <li>Escalation to senior management when providers resist</li>
              <li>Privacy Commissioner complaints for non‑compliance</li>
              <li>Legal action when all else fails</li>
              <li>We don’t give up on accepted cases</li>
            </ul>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">We Commit to Keeping You Informed</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
              <li>Weekly progress updates during active disputes</li>
              <li>Honest communication about challenges and delays</li>
              <li>Copies of all correspondence sent on your behalf</li>
              <li>Direct access to case managers, not call centres</li>
              <li>We celebrate every win, big or small</li>
            </ul>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">We Commit to Your Long‑Term Success</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
              <li>Guidance on maintaining good credit after repair</li>
              <li>Warnings about actions that could hurt your file</li>
              <li>Referrals to lenders who understand recovery</li>
              <li>Ongoing support for future credit questions</li>
              <li>Advocacy if new problems arise</li>
            </ul>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">We Commit to Treating You with Respect</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
              <li>No judgment about past financial difficulty</li>
              <li>We recognise circumstances beyond your control</li>
              <li>Respect for your time, intelligence and dignity</li>
              <li>Gratitude for trusting us with your future</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Social proof quotes */}
      <Section title="What Our Clients Say About Our Care">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Testimonial name="They Actually Listened">
            “They removed my default in a couple of weeks. Efficient, dedicated and genuinely caring.”
          </Testimonial>
          <Testimonial name="No Judgment, Just Help">
            “Do yourself a favour — these are good people with good solutions when your credit rating needs it.”
          </Testimonial>
          <Testimonial name="They Fought When Others Gave Up">
            “Large debt listed on my file — ACS challenged it and won. Life‑changing.”
          </Testimonial>
          <Testimonial name="Angelie & Sheina Are Legends">
            “Genuine care, quick responses and steady support from start to finish.”
          </Testimonial>
          <Testimonial name="Professional & Caring">
            “Sherlyn and the team made the process easier than I imagined. Thank you.”
          </Testimonial>
        </motion.div>
      </Section>

      {/* Promise */}
      <Section title="Our Promise: Your Fresh Start Is Our Mission">
        <p className="text-slate-700">We can’t change the system overnight — but we can change your place in it. Every removal is a win against unfairness. Every approval is proof that second chances matter. This is bigger than business; it’s about justice.</p>
      </Section>

      {/* Final CTA */}
      <Section title="You Deserve Better. Let Us Help You Get It.">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-3 text-slate-700">
            <p>If you’re ready to fight back against unfair listings, we’re ready to stand with you.</p>
            <ul className="space-y-2">
              {["📞 Call 0489 265 737 — speak to people who understand","🔗 Get your free assessment — no judgment, just honest options","📧 Email help@australiancreditsolutions.com.au — tell us your story"].map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <svg className="h-5 w-5 shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-blue">Make the Call That Changes Everything</h3>
            <p className="mt-3 text-slate-700">You didn’t choose this system — but you can choose to fight back. Your fresh start begins with one conversation.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#care-form" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors">Start Free Assessment</Link>
              <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors">Call 0489 265 737</a>
            </div>
          </motion.div>
        </div>
      </Section>

      <RelatedBlock currentSlug="/our-responsibility-to-you" heading="Related services & guides" />

      {/* Footer trust bar */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl bg-gradient-to-r from-blue to-blue p-6 text-white shadow-lg">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">Award‑winning care (2022, 2023, 2024)</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">Lawyer‑led advocacy — Privacy Act & CRC</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">No Win No Fee · ASIC ACL 532003</p></div>
          </div>
        </motion.div>
      </section>

      <div className="mx-auto max-w-6xl px-4"><RelatedServices pathname="/our-responsibility-to-you" /></div>

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
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <svg className="h-5 w-5 shrink-0 text-orange-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function PromiseCard({ name, points = [] }) {
  return (
    <motion.div variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <h3 className="text-lg font-semibold text-blue">{name}</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <svg className="h-5 w-5 shrink-0 text-blue-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            {p}
          </li>
        ))}
      </ul>
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
      <figcaption className="mt-3 text-sm font-semibold text-blue">{name}</figcaption>
    </motion.figure>
  );
}