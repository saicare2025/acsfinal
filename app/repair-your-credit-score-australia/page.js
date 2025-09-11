// File: app/repair-your-credit-score-australia/page.jsx
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { motion } from "framer-motion";
import FooterForm from "@/components/FooterForm";
import ReviewsWidget from "@/components/homepage/Testmonials";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedServices from "@/components/RelatedServices";
import RelatedBlock from "@/app/_seo/RelatedBlock";
import { generateMinimalStructuredData } from "../../utils/generateMinimalStructuredData";

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const staggerChildren = { visible: { transition: { staggerChildren: 0.08 } } };

export default function RepairYourCreditScoreAustraliaPage() {
  const structuredData = generateMinimalStructuredData({
    pathname: "/repair-your-credit-score-australia",
    title: "Repair Your Credit Score Australia | From Broken to Brilliant",
    description:
      "Your credit score is damaged, not dead. 15,000+ scores restored. Professional score repair across Equifax, Experian, illion. Call 0489 265 737.",
    isService: true,
    serviceType: "Credit repair service",
  });

  const faqData = [
    { q: "Can any credit score be repaired?", a: "Yes. We've never seen a score too damaged to improve — our lowest starting score (180) repaired to 820." },
    { q: "How long does credit score repair take?", a: "Minor damage: 2–6 months. Major: 6–12 months. Severe: 8–18 months. We'll set realistic timelines up‑front." },
    { q: "Will repair hurt my score?", a: "No. Professional repair only improves scores and protects against new damage during the process." },
    { q: "Can you repair after bankruptcy?", a: "Absolutely. We regularly repair post‑bankruptcy scores to excellent levels." },
    { q: "What if some items can't be removed?", a: "We optimise overall score factors. Even with some items remaining, we usually hit target ranges." },
    { q: "Do you guarantee improvement?", a: "Yes. No improvement = no success fees. We only accept cases we’re confident will materially improve." },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-10 lg:py-20">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
            <div className="lg:col-span-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                Repair Your Credit Score Australia <span className="block mt-2 text-blue">From Broken to Brilliant</span>
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                Your credit score is damaged, not dead. What looks permanent can be professionally repaired. We've restored <strong>15,000+ scores</strong> to excellent condition. Time to repair yours.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/free-credit-assessment" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue-700 transition">Start Free Score Assessment</Link>
                <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition">Call 0489 265 737</a>
              </div>
            </div>
            <div className="lg:col-span-1">
              <FooterForm
                heading="Repair Your Credit Score"
                subheading="Free, same‑day review"
                paragraph="We pull Equifax/Experian/illion, map damage and create a repair plan with timelines — No Win No Fee on eligible items."
              />
              <ul className="mt-4 text-sm text-gray-600 space-y-1">
                <li>✅ No Win No Fee</li>
                <li>✅ 98% success on accepted cases</li>
                <li>✅ ASIC Licensed (ACL 532003)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />
      <div className="mx-auto max-w-6xl px-4"><Breadcrumb pathname="/repair-your-credit-score-australia" /></div>

      {/* Myths */}
      <Section title="Is Your Credit Score Beyond Repair?">
        <p className="text-slate-700">Most Australians believe these myths — the truth is almost every damaged score can be repaired with the right expertise.</p>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Card title="Common Myths" bullets={["My score is too low to repair (we repaired 180)","Damage is too old (age can help)","Too many problems (more opportunities)","Faster to wait 5 years (repair is quicker)","Bankruptcy is permanent (we repair post‑bankruptcy)"]} />
          <Card title="The Truth" bullets={["Nearly all damaged scores can be improved","Legal + strategic removals work","Timing and utilisation matter","We prioritise high‑impact wins"]} />
        </div>
      </Section>

      {/* Anatomy of damage */}
      <Section title="The Anatomy of Credit Score Damage">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <TierCard range="0–400" label="SEVERE" complexity="High" timeframe="8–18 months" bullets={["Multiple defaults & judgments","Recent bankruptcy/debt agreements","Extensive late history","High utilisation"]} />
          <TierCard range="400–550" label="MAJOR" complexity="Moderate" timeframe="6–12 months" bullets={["Several defaults/late payments","High card utilisation","Multiple enquiries","Some account closures"]} />
          <TierCard range="550–650" label="MODERATE" complexity="Standard" timeframe="3–8 months" bullets={["1–3 defaults or persistent late","Poor utilisation","Enquiry clusters","Short history"]} />
          <TierCard range="650–700" label="MINOR" complexity="Low" timeframe="2–6 months" bullets={["Isolated late/single default","Sub‑optimal utilisation","Recent enquiry impact","Management issues"]} />
        </div>
        <p className="mt-4 text-slate-700">No matter how damaged your score, <strong>repair is possible</strong>.</p>
      </Section>

      {/* Workshop / Process */}
      <Section title="Our Credit Score Repair Workshop">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <PhaseCard phase="Phase 1" title="Damage Assessment" bullets={["Pull all 3 bureaus","Map every negative","Impact calculation","Prioritised plan","Custom timeline"]} />
          <PhaseCard phase="Phase 2" title="Damage Removal" bullets={["Challenge defaults","Dispute late marks","Remove enquiries","Clear judgments/errors","Pay‑for‑deletion where viable"]} />
          <PhaseCard phase="Phase 3" title="Foundation Repair" bullets={["Utilisation optimisation","Positive payment pattern","Credit mix rebuild","History extension","Behaviour systems"]} />
          <PhaseCard phase="Phase 4" title="Score Acceleration" bullets={["Fine‑tune utilisation","Strategic openings/closures","Payment timing","Limit increase talks","Protection systems"]} />
          <PhaseCard phase="Phase 5" title="Excellence Maintenance" bullets={["Monthly monitoring","Damage prevention","Continued growth","Major app prep","Long‑term preservation"]} />
        </div>
      </Section>

      {/* Why Pro vs DIY */}
      <Section title="Why Professional Repair Works When DIY Fails">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Why DIY Fails" bullets={["Lack of legal/technical knowledge","Emotional decisions & burnout","No industry relationships","Timing & strategy errors"]} />
          <Card title="Why Pros Succeed" bullets={["Deep algorithm knowledge","Legal grounds & proven disputes","Creditor/bureau relationships","Precise strategic coordination"]} />
        </div>
      </Section>

      {/* Science / DNA */}
      <Section title="The Science of Credit Score Repair">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Payment History (35%)" bullets={["Remove negatives","Establish positives","+20–80 points per removal","Immediate impact when removed"]} />
          <Card title="Credit Utilisation (30%)" bullets={["Balance management","Limit increases","+50–150 points","1–2 month timeline"]} />
          <Card title="History/Enquiries/Mix (35%)" bullets={["Protect old accounts","Remove excess enquiries","Strategic diversification","3–6 month impact"]} />
        </div>
        <p className="mt-4 text-slate-700">We repair in order of <strong>maximum impact</strong> for the <strong>fastest results</strong>.</p>
      </Section>

      {/* Packages / Pricing */}
      <Section title="Repair Investment and Guaranteed Returns">
        <div className="grid gap-6 md:grid-cols-3">
          <PriceCard name="Basic Repair" audience="Scores 600–700" investment="$1,650" target="50–100 points" bullets={["Remove 1–3 negatives","Utilisation optimisation","6 months monitoring"]} />
          <PriceCard name="Complete Repair" audience="Scores 400–600" investment="$2,950" target="150–250 points" bullets={["Unlimited negative removals","Full profile optimisation","12 months management"]} featured />
          <PriceCard name="Total Reconstruction" audience="Scores 0–400" investment="$4,950" target="300–500 points" bullets={["Complete file reconstruction","Advanced score engineering","18 months VIP service"]} />
        </div>
        <div className="mt-4 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800 text-sm">
          All packages include <strong>No Improvement, No Success Fee</strong> guarantee.
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card title="Repair ROI — Example (450 → 750)" bullets={["Home loan: $118,800 saved (5 yrs)","Car finance: $16,800 saved (5 yrs)","Cards: $9,750 saved (5 yrs)","30×+ ROI even on top package"]} />
          <Card title="What Happens Next" bullets={["Free damage analysis","Customised repair strategy","Timeline to target scores","Guaranteed outcomes discussion","You decide — no pressure"]} />
        </div>
      </Section>

      {/* Success Stories */}
      <Section title="Real Credit Score Repair Success Stories">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Testimonial name="Michael R — Perth" outcome="180 → 820 in 16 months">
            “Bankruptcy left my score at 180. ACS repaired it to 820. Now I own investment properties.”
          </Testimonial>
          <Testimonial name="Sarah T — Adelaide" outcome="390 → 740 in 11 months">
            “Divorce defaults destroyed my score. ACS repaired it and I bought my home.”
          </Testimonial>
          <Testimonial name="David L — Melbourne" outcome="420 → 780 in 13 months">
            “Business failure left multiple defaults. Score hit 780, business booming again.”
          </Testimonial>
          <Testimonial name="Jennifer K — Brisbane" outcome="310 → 750 in 14 months">
            “Medical issues crashed my score. ACS repaired it; got promoted with $60k increase.”
          </Testimonial>
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Frequently Asked Questions About Credit Score Repair">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
          {faqData.map((f, i) => (
            <motion.details key={i} variants={fadeIn} className="group rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
              <summary className="cursor-pointer select-none font-semibold text-blue flex items-center justify-between">
                <span>{f.q}</span>
                <svg className="h-5 w-5 transform group-open:rotate-180 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </summary>
              <p className="mt-3 text-sm text-slate-700 pl-2 border-l-2 border-blue-200 ml-1">{f.a}</p>
            </motion.details>
          ))}
        </motion.div>
      </Section>

      <RelatedBlock currentSlug="/repair-your-credit-score-australia" heading="Related services & guides" />

      {/* Final CTA */}
      <Section title="Ready to Repair Your Damaged Credit Score?">
        <p className="text-slate-700">Stop living with a broken credit score. Professional repair can restore your financial future.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/free-credit-assessment" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue-700 transition">Start Credit Score Repair</Link>
          <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition">Call 0489 265 737</a>
          <a href="mailto:help@australiancreditsolutions.com.au" className="rounded-lg border-2 border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50 transition">Email help@australiancreditsolutions.com.au</a>
        </div>
      </Section>

      {/* Trust bar */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl bg-gradient-to-r from-blue to-blue p-6 text-white shadow-lg">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">98% success on accepted cases</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">Lawyer‑led, evidence‑based repair</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">ASIC Licensed · ACL 532003</p></div>
          </div>
        </motion.div>
      </section>

      <div className="mx-auto max-w-6xl px-4"><RelatedServices pathname="/repair-your-credit-score-australia" /></div>

      <Footer />
    </main>
  );
}

function Section({ title, children }) {
  return (
    <motion.section initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true, margin: "-100px" }} className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold text-blue sm:text-3xl">{title}</h2>
      <div className="mt-4 text-base leading-relaxed text-slate-800">{children}</div>
    </motion.section>
  );
}

function Card({ title, bullets = [] }) {
  return (
    <motion.div variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
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

function TierCard({ range, label, complexity, timeframe, bullets }) {
  return (
    <motion.div variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-blue">{label} DAMAGE</h3>
        <span className="text-sm font-semibold text-slate-600">Range: {range}</span>
      </div>
      <p className="mt-1 text-xs text-slate-500">Repair complexity: {complexity} · Timeframe: {timeframe}</p>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <svg className="h-5 w-5 shrink-0 text-blue mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function PhaseCard({ phase, title, bullets }) {
  return (
    <motion.div variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
      <span className="text-xs font-bold text-slate-500 uppercase">{phase}</span>
      <h3 className="mt-1 text-lg font-semibold text-blue">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <svg className="h-5 w-5 shrink-0 text-orange-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 0 0118 0z" /></svg>
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function PriceCard({ name, audience, investment, target, bullets, featured }) {
  return (
    <motion.div variants={fadeIn} className={`relative rounded-xl border p-6 h-full ${featured ? "border-blue-300 bg-gradient-to-b from-blue-50 to-white shadow-lg" : "border-blue-100 bg-white shadow-sm"}`}>
      {featured && <span className="absolute -top-3 left-6 inline-block rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white shadow">Most Popular</span>}
      <h3 className="text-lg font-semibold text-blue">{name}</h3>
      <p className="text-sm text-slate-600">For: {audience}</p>
      <p className="mt-1 text-sm text-slate-600">Target improvement: {target}</p>
      <p className="mt-2 text-3xl font-extrabold">{investment}</p>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <svg className="h-5 w-5 shrink-0 text-blue mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            {b}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Link href="/free-credit-assessment" className="w-full rounded-lg bg-blue px-4 py-2 font-semibold text-white hover:bg-blue transition-colors text-sm text-center inline-block">Start Now</Link>
      </div>
    </motion.div>
  );
}

function Testimonial({ name, outcome, children }) {
  return (
    <motion.figure variants={fadeIn} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
      <div className="text-5xl leading-none text-orange-500">“</div>
      <blockquote className="mt-2 text-slate-700">{children}</blockquote>
      <figcaption className="mt-3 text-sm font-semibold text-blue">{name}</figcaption>
      {outcome && <p className="mt-2 text-sm text-green-700 font-medium">{outcome}</p>}
    </motion.figure>
  );
}
