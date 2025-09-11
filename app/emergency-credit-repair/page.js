// File: app/emergency-credit-repair/page.jsx
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

export default function EmergencyCreditRepairPage() {
  // FAQ-like content not required here; page is action-focused.

  const structuredData = generateMinimalStructuredData({
    pathname: "/emergency-credit-repair",
    title: "Emergency Credit Repair Australia | Same‑Day Assessment & Rush Processing",
    description:
      "URGENT credit fix: same‑day assessment, priority processing, direct access to senior specialists. Don't let bad credit kill your settlement, loan, or deal.",
    isService: true,
    serviceType: "Emergency Credit Repair",
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />

      {/* Emergency Banner */}
      <section className="w-full bg-red-600 text-white py-2 text-center text-sm sm:text-base font-semibold">
        🚨 URGENT CREDIT REPAIR — Same‑Day Assessment Available · Don't Let Bad Credit Kill Your Opportunity
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-8 lg:py-24">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                EMERGENCY CREDIT FIX
                <span className="block mt-2 text-blue">When Every Hour Counts</span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Property settlement next week? Loan application in progress? Business deal falling through because of bad credit? We provide <strong>URGENT</strong> credit repair when deadlines matter most.
                </p>
                <p className="text-base text-yellow-600 font-semibold">SAME‑DAY ASSESSMENT AVAILABLE</p>
                <p className="text-sm text-slate-600">Extended emergency hours: Mon–Fri 7am–10pm · Sat–Sun 9am–6pm</p>
              </div>

              {/* CTAs */}
              <div className="mt-8 relative flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center" role="group" aria-label="Primary actions">
                <a href="tel:+61489265737" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-red-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                  📞 CALL NOW: 0489 265 737
                </a>
             

                {/* Decorative arrow (desktop/tablet only) */}
                <div className="pointer-events-none hidden lg:block" aria-hidden="true">
                  <Image src={ArrowIcon} alt="" width={220} height={70} loading="lazy" className="select-none" />
                </div>
                <div className="pointer-events-none lg:hidden flex justify-center" aria-hidden="true">
                  <Image src={ArrowIconM} alt="" width={200} height={120} loading="lazy" className="select-none" />
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-1/3 relative" id="emergency-form">
              <FooterForm
                heading="🚨 Emergency Credit Assessment"
                subheading="Same‑Day Review"
                paragraph="Priority analysis of Equifax/Experian/Illion with a rapid action plan for settlements, loan approvals and time‑sensitive finance."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-sm text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>Rush processing available</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>Direct access to senior specialists</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>98% success when we take your case</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/emergency-credit-repair" />
      </div>

      {/* Urgency Indicators */}
      <Section title="Why Our Emergency Service Works">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card title="⏰ Same‑Day Assessment" bullets={["Assessment within hours, not days","Emergency team on when you need us"]} />
          <Card title="🚀 Rush Processing" bullets={["Skip the queue with priority handling","Fast‑tracked removal workflows"]} />
          <Card title="📞 Direct Access" bullets={["No hold music","Work directly with senior specialists"]} />
          <Card title="💼 98% Success Rate" bullets={["Emergency quality without compromise","Proven outcomes under pressure"]} />
        </motion.div>
      </Section>

      {/* Emergency Timeline */}
      <Section title="Emergency Timeline">
        <motion.ol variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 space-y-4 text-slate-700">
          {[
            { time: "0–4 HOURS", title: "Emergency Assessment", desc: "Same‑day file analysis. We identify what’s blocking approval and create a rapid action plan." },
            { time: "1–3 DAYS", title: "Immediate Action", desc: "Rush processing begins. Priority removal requests and legal challenges lodged immediately." },
            { time: "1–3 WEEKS", title: "Results Delivered", desc: "Defaults removed and file cleaned so your application can proceed." },
          ].map((step, i) => (
            <motion.li key={i} variants={fadeIn} className="flex gap-4">
              <div className="flex h-8 w-24 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold">{step.time}</div>
              <div>
                <strong>{step.title}:</strong> {step.desc}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </Section>

      {/* Trust Indicators */}
      <Section title="Why Choose Our Emergency Team?">
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { number: "98%", title: "Success Rate", text: "When we take your case" },
            { number: "3", title: "Award Years", text: "Industry excellence 2022–2024" },
            { number: "855+", title: "Happy Clients", text: "4.9/5 star rating" },
            { number: "ASIC", title: "Licensed", text: "ACL 532003" },
          ].map((t) => (
            <motion.div key={t.title} variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-blue">{t.number}</div>
              <h4 className="mt-2 font-semibold text-slate-900">{t.title}</h4>
              <p className="text-slate-600 text-sm">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Emergency Success Stories */}
      <Section title="Emergency Success Stories">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Testimonial name="Sarah M — Settlement in 5 Days">
            "Loan denied over a $2,400 default I didn’t know about. ACS had it removed in 72 hours. I’m a homeowner thanks to their emergency team!"
          </Testimonial>
          <Testimonial name="Michael T — Business Owner">
            "Expansion deal was collapsing due to credit issues. Called Monday, clean by Thursday. Deal saved."
          </Testimonial>
          <Testimonial name="David L — Property Investor">
            "Auction Saturday, pre‑approval knocked back Wednesday. ACS worked overnight; defaults removed by Friday. Bought the property."
          </Testimonial>
        </motion.div>
      </Section>

      {/* Final CTA */}
      <Section title="Don’t Let Bad Credit Kill Your Opportunity">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <p>Every hour you wait, the deadline gets closer. Our emergency service has saved thousands of settlements, deals and dreams. Don’t miss out because action came too late.</p>
            <ul className="space-y-2">
              {["Same‑day assessment","Rush processing","Direct specialist access","Seven‑day availability for emergencies"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="h-5 w-5 shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-blue">Emergency Hotline</h3>
            <p className="mt-3 text-slate-700">Call now for immediate assistance, or start an urgent assessment online.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+61489265737" className="rounded-lg bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700 transition-colors">📞 0489 265 737</a>
              <Link href="#emergency-form" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors">⚡ Urgent Assessment</Link>
            </div>
            <div className="mt-4 text-sm text-slate-600">Available 7 days a week for emergency cases.</div>
          </motion.div>
        </div>
      </Section>

      <RelatedBlock currentSlug="/emergency-credit-repair" heading="Related services & guides" />

      {/* Footer trust bar */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl bg-gradient-to-r from-blue to-blue p-6 text-white shadow-lg">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">Award‑winning specialists (2022, 2023, 2024)</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">No Win No Fee — Success‑based pricing</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">Licensed & regulated — ASIC ACL 532003</p></div>
          </div>
        </motion.div>
      </section>

      {/* Related Services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/emergency-credit-repair" />
      </div>

      {/* Floating Phone Button */}
      <a href="tel:+61489265737" className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full bg-red-600 px-5 py-3 text-white font-semibold shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">📞 URGENT CALL</a>

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
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
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