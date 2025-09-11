// File: app/no-win-no-fee-credit-repair/page.jsx
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { motion } from "framer-motion";
import { generateMinimalStructuredData } from "../../utils/generateMinimalStructuredData";
import Breadcrumb from "@/components/Breadcrumb";
import FooterForm from "@/components/FooterForm";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};



export default function NoWinNoFeeCreditRepairPage() {
  const structuredData = generateMinimalStructuredData({
    pathname: "/no-win-no-fee-credit-repair",
    title: "No Win No Fee Credit Repair | 100% Risk‑Free Guarantee",
    description:
      "We remove defaults and repair bad credit with a genuine No Win No Fee guarantee. Free assessment. Pay success fees only if we win.",
    isService: true,
    serviceType: "Credit repair service",
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />

      {/* Guarantee Banner */}
      <div className="w-full bg-green-600 text-white text-center text-sm md:text-base py-2 px-4 font-semibold">
        ✅ 100% NO WIN NO FEE GUARANTEE — Pay Nothing Unless We Remove Your Defaults · Zero Risk to You
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/no-win-no-fee-credit-repair" />
      </div>

      {/* Hero */}
      <section className="hero relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-10 md:py-16">
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="grid items-start gap-8 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                NO WIN NO FEE
                <br />
                <span className="text-blue">CREDIT REPAIR</span>
              </h1>
              <div className="mt-3 inline-block rounded-full bg-yellow-400/90 px-4 py-1 text-sm font-bold text-slate-900">
                100% RISK‑FREE GUARANTEE
              </div>
              <p className="mt-4 text-lg text-slate-700">
                Pay absolutely nothing unless we successfully remove your defaults and fix your bad credit. If we don't win, you don't pay. It's that simple.
              </p>

              <div className="mt-6 rounded-2xl border border-green-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-green-700">Zero Risk Promise</h2>
                <p className="mt-3 text-slate-700">
                  We're so confident in our ability to fix your credit that we'll take all the risk. You only pay our success fee <strong>after</strong> we remove your defaults.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href="tel:+61489265737" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue-700 transition">
                    📞 CALL NOW: 0489 265 737
                  </a>
                 
                </div>
                <div className="mt-4 text-green-600 font-semibold">
                  ✓ No Upfront Costs · ✓ No Hidden Fees · ✓ No Risk to You
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="md:pl-6">
              <FooterForm/>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guarantee Breakdown */}
      <Section title="How Our No Win No Fee Guarantee Works">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { n: "1", h: "Free Assessment", t: "We analyse your credit file completely free. We identify exactly what's damaging your credit and how we can fix it." },
            { n: "2", h: "Admin Fee Only", t: "If we take your case, there's a one‑off admin fee of $330. No other upfront charges." },
            { n: "3", h: "We Do The Work", t: "We work on removing your defaults, late payments, and credit issues while you relax." },
            { n: "✓", h: "Success Fee When We Win", t: "Only when we successfully remove items do you pay the success fee. No removal = no success fee." },
          ].map((b) => (
            <div key={b.h} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">{b.n}</div>
              <h3 className="text-lg font-semibold text-blue">{b.h}</h3>
              <p className="mt-2 text-slate-700 text-sm">{b.t}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing Transparency */}
      <Section title="Transparent Pricing — No Surprises">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-blue">Admin Fee</h3>
            <p className="mt-2 text-4xl font-extrabold">$330</p>
            <p className="text-sm text-slate-600">One‑off administration fee (applies regardless of outcome)</p>
            <ul className="mt-4 list-disc pl-5 text-slate-700 text-sm space-y-1">
              <li>Complete credit file analysis</li>
              <li>Legal document preparation</li>
              <li>Credit provider correspondence</li>
              <li>Case management setup</li>
              <li>Progress reports and updates</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-blue">Success Fee</h3>
            <p className="mt-2 text-3xl font-extrabold">ONLY IF WE WIN</p>
            <p className="text-sm text-slate-600">Charged only when we remove defaults/items</p>
            <ul className="mt-4 list-disc pl-5 text-slate-700 text-sm space-y-1">
              <li>Per item successfully removed</li>
              <li>No removal = no success fee</li>
              <li>Transparent pricing structure</li>
              <li>Discussed upfront before we start</li>
              <li>Protected by our guarantee</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 mx-auto max-w-2xl rounded-2xl border border-yellow-200 bg-yellow-50 p-6 text-center shadow-sm">
          <h3 className="text-xl font-semibold text-yellow-800">Our Promise to You</h3>
          <p className="mt-2 text-slate-800">If we don't remove any defaults or improve your credit file, you pay nothing beyond the small admin fee. We take all the risk so you don't have to.</p>
        </div>
      </Section>

      {/* Trust Indicators */}
      <Section title="Why Our Guarantee Is Genuine">
        <p className="text-slate-700">We can offer this guarantee because we consistently deliver results. Our track record speaks for itself.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          <StatCard number="98%" label="Success Rate" note="When we take cases" />
          <StatCard number="855+" label="Happy Clients" note="4.9/5 star rating" />
          <StatCard number="3" label="Award Years" note="2022 · 2023 · 2024" />
          <StatCard number="ASIC" label="Licensed" note="ACL 532003" />
        </div>
      </Section>

      {/* Comparison Table */}
      <Section title="Compare Our No Win No Fee Guarantee">
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 font-semibold">Feature</th>
                <th className="px-4 py-3 font-semibold text-blue">Australian Credit Solutions</th>
                <th className="px-4 py-3 font-semibold">Other Credit Repair Companies</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Upfront Fees", "Only $330 admin fee", "$1,500 – $5,000+ upfront"],
                ["Payment if No Results", "Pay nothing (beyond admin)", "Keep all fees regardless"],
                ["Success Rate", "98% when we take cases", "Often don't disclose"],
                ["Guarantee", "Genuine No Win No Fee", "‘Money‑back’ claims with conditions"],
                ["ASIC Licensed", "Yes — ACL 532003", "Many not licensed"],
                ["Industry Awards", "3 years running (2022–2024)", "Rarely awarded"],
              ].map(([feature, us, them]) => (
                <tr key={feature} className="border-t border-slate-100">
                  <td className="px-4 py-3 font-medium">{feature}</td>
                  <td className="px-4 py-3 text-green-700 font-semibold">{us}</td>
                  <td className="px-4 py-3 text-slate-600">{them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Risk-Free Form (anchor) */}
      
      {/* Success Stories */}
      <Section title="No Win No Fee Success Stories">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              quote:
                "I was skeptical about the No Win No Fee promise, but it's completely genuine. They removed my $3,200 default and I only paid the success fee after it was gone from my credit file. No risk at all.",
              author: "Emma K, Melbourne",
              outcome: "✅ $3,200 default removed · Home loan approved at 3.1%",
            },
            {
              quote:
                "The $330 admin fee was all I paid upfront. When they couldn't remove one of my defaults, I didn't pay anything extra. But they did remove two others, so I got great value with zero risk.",
              author: "James R, Brisbane",
              outcome: "✅ 2 of 3 defaults removed · Car finance approved",
            },
            {
              quote:
                "Best decision I ever made. The No Win No Fee guarantee meant I had nothing to lose. They cleaned my entire credit file and now I'm a property investor. True to their word on every promise.",
              author: "Sarah T, Perth",
              outcome: "✅ Complete clean‑up · 3 investment properties purchased",
            },
          ].map((t) => (
            <figure key={t.author} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <div className="text-5xl leading-none text-orange-500">“</div>
              <blockquote className="mt-2 text-slate-700">{t.quote}</blockquote>
              <figcaption className="mt-3 text-sm font-semibold text-blue">— {t.author}</figcaption>
              <p className="mt-2 text-sm text-green-700 font-medium">{t.outcome}</p>
            </figure>
          ))}
        </div>
      </Section>

      {/* Final Guarantee */}
      <Section title="Our Iron‑Clad Guarantee">
        <p className="text-slate-700">
          We're one of the few Australian credit repair companies that offer a genuine No Win No Fee guarantee because we're confident in our ability to deliver results. You have absolutely nothing to lose and everything to gain.
        </p>
        <div className="mt-6 grid place-items-center">
          <div className="rounded-full border-4 border-green-500 px-6 py-3 text-center text-xl font-extrabold text-green-700">
            100% NO WIN NO FEE
          </div>
          <a href="tel:+61489265737" className="mt-6 rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue-700 transition">
            📞 CALL RISK‑FREE: 0489 265 737
          </a>
          <p className="mt-4 text-slate-700 text-center">
            <strong>Ready to fix your credit with zero risk?</strong>
            <br />
            Join 855+ Australians who trusted our No Win No Fee guarantee.
          </p>
        </div>
      </Section>

      {/* Floating Guarantee Button */}
      <a href="#guarantee-form" className="fixed bottom-6 right-6 z-40 rounded-full bg-green-600 px-4 py-3 text-sm font-bold text-white shadow-lg hover:bg-green-700">
        ✅ NO RISK
      </a>

      <Footer />
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold text-blue sm:text-3xl">{title}</h2>
      <div className="mt-4 text-base text-slate-800">{children}</div>
    </section>
  );
}

function StatCard({ number, label, note }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-sm">
      <p className="text-3xl font-extrabold text-blue">{number}</p>
      <p className="mt-1 text-sm font-medium text-slate-700">{label}</p>
      {note && <p className="text-xs text-slate-500">{note}</p>}
    </div>
  );
}
