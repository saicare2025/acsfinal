"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterForm from "@/components/FooterForm";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedServices from "@/components/RelatedServices";
import RelatedBlock from "@/app/_seo/RelatedBlock";
import ReviewsWidget from "@/components/homepage/Testmonials";
import Link from "next/link";
import { motion } from "framer-motion";
import { generateMinimalStructuredData } from "../../utils/generateMinimalStructuredData";


// Animations
const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function RemoveDefaultsAustraliaPage() {
  // FAQ data
  const faqData = [
    {
      q: "Can you really remove defaults from my credit file?",
      a: "Yes, we successfully remove defaults for 98% of cases we accept. Defaults can be removed when they’re listed incorrectly, unfairly, or without proper process. We only take cases where we’re genuinely confident of success — if we can’t help, we’ll tell you upfront.",
    },
    {
      q: "How much does it cost to remove defaults?",
      a: "We operate on a No Win No Fee basis. There’s a one-off admin fee of $330 that applies regardless of outcome, then our success fee is only charged when we successfully remove defaults. Most clients save thousands in lower interest rates within months.",
    },
    {
      q: "What if I’ve already paid the default?",
      a: "Paying a default doesn’t remove it from your credit file — it just changes the status to “paid.” The black mark remains for 5 years, still damaging your credit score. We can often remove paid defaults just as easily as unpaid ones.",
    },
    {
      q: "How long does default removal take?",
      a: "Timeline varies by case complexity, but most default removals are completed within 2–8 weeks. Urgent cases with pending finance applications often receive priority handling for faster results.",
    },
    {
      q: "Will removing defaults improve my credit score?",
      a: "Yes, removing defaults typically improves credit scores by 50–200+ points. Clients often see immediate improvements in loan approval rates and access to premium interest rates previously unavailable.",
    },
  ];

  // Minimal service JSON-LD
  const structuredData = generateMinimalStructuredData({
    pathname: "/remove-defaults-australia",
    title: "Remove Defaults From Your Credit File | 98% Success | No Win No Fee",
    description:
      "Remove defaults from your credit file fast with Australia’s award-winning specialists. 98% success rate, No Win No Fee guarantee. Get approved for loans again.",
    isService: true,
    serviceType: "Credit Default Removal",
  });

  // Rich FAQPage + Service JSON-LD
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Remove Defaults Australia",
    description:
      "Professional default removal services for Australians with 98% success rate. Remove defaults from credit files, improve credit scores, get approved for loans again.",
    provider: {
      "@type": "Organization",
      name: "Australian Credit Solutions",
      telephone: "0489265737",
      email: "help@australiancreditsolutions.com.au",
    },
    areaServed: { "@type": "Country", name: "Australia" },
    offers: {
      "@type": "Offer",
      name: "No Win No Fee Default Removal",
      description:
        "Default removal service with No Win No Fee guarantee. One-off admin fee of $330 applies regardless of outcome.",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "330",
        priceCurrency: "AUD",
        description: "Administration fee applies regardless of outcome",
      },
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden  py-10 lg:py-20 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,white,transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-3xl text-blue sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Remove Defaults{" "}
                <span className="block text-orange">
                  From Your Credit File
                </span>
              </h1>
              <ul className="mt-6 space-y-2 text-blue text-lg lg:text-xl">
                <li>✅ 98% Success Rate When We Take Your Case</li>
                <li>✅ Award-Winning 3 Years Running</li>
                <li>✅ No Win No Fee Guarantee</li>
                <li>✅ Get Approved for Loans Again</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#apply"
                  className="rounded-lg bg-orange-400 px-6 py-3 font-semibold text-black shadow transition hover:bg-yellow-300"
                >
                  🚀 Remove My Defaults Now
                </Link>
                <a
                  href="tel:+61489265737"
                  className="rounded-lg border-2 text-blue border-orange px-6 py-3 font-semibold  transition hover:bg-white hover:text-slate-900"
                >
                  📞 Call 0489 265 737
                </a>
              </div>
              <p className="mt-4 text-sm/6 text-blue opacity-80">
                ⭐⭐⭐⭐⭐ 4.9/5 from 855+ happy clients
              </p>
            </div>

            {/* Form */}
            <div>
              <FooterForm
                heading="⚡ Free Assessment"
                subheading="Find out if we can remove your defaults"
                paragraph="60-second pre-check. No obligation. Judgment-free."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews widget (optional global social proof) */}
      <ReviewsWidget />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/remove-defaults-australia" />
      </div>

      {/* Trust bar */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <TrustPill stat="98%" label="Success Rate" color="text-blue-600" />
          <TrustPill stat="855+" label="Happy Clients" color="text-green-600" />
          <TrustPill stat="3" label="Years Award Winner" color="text-purple-600" />
          <TrustPill stat="ASIC" label="Licensed #532003" color="text-orange-600" />
        </div>
      </section>

      {/* Problem section */}
      <Section title="Defaults Are Destroying Your Financial Future">
        <p className="text-slate-700">
          Every day you wait, your chances of loan approval slip further away. Here’s what defaults are
          costing you right now:
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-3"
        >
          <InfoCard
            tone="red"
            title="💔 Loan Rejections"
            text="Banks automatically reject applications with defaults. No explanation, no second chances."
          />
          <InfoCard
            tone="orange"
            title="💸 Higher Interest Rates"
            text="When you do get approved, expect 8–15% rates instead of premium 3–5% rates."
          />
          <InfoCard
            tone="yellow"
            title="⏰ 5 Years of Pain"
            text="Defaults stay visible for 5 full years, even after you’ve paid them off."
          />
        </motion.div>

        {/* Real cost example */}
        <div className="mt-10 rounded-2xl bg-slate-900 text-white p-6 lg:p-8 shadow">
          <h3 className="text-xl font-semibold">🔥 The Real Cost Example</h3>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-red-300 mb-2">With Defaults:</h4>
              <ul className="space-y-1">
                <li>❌ Home loan rejected</li>
                <li>❌ Car finance: 12.9% interest</li>
                <li>❌ Credit cards: $500 limit</li>
                <li>❌ Personal loans: Not available</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-300 mb-2">Defaults Removed:</h4>
              <ul className="space-y-1">
                <li>✅ Home loan approved: 3.2%</li>
                <li>✅ Car finance: 4.9% interest</li>
                <li>✅ Credit cards: $25,000 limit</li>
                <li>✅ Personal loans: Premium rates</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 font-semibold text-yellow-300">
            Potential savings: $50,000+ over life of loans
          </p>
        </div>
      </Section>

      {/* Solution / Process */}
      <Section title="We Remove Defaults Other Companies Can’t Touch">
        <p className="text-slate-700">
          While others promise the world, we deliver results. Here’s our proven 3-step process:
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-3"
        >
          <Card
            title="1. Expert Analysis"
            bullets={[
              "Lawyer-led credit file review",
              "Find procedural & notice errors",
              "Identify unfair or invalid listings",
            ]}
          />
          <Card
            title="2. Strategic Challenge"
            bullets={[
              "Bulletproof legal arguments",
              "Credit providers must verify or remove",
              "Escalation when needed (OAIC/complaints)",
            ]}
          />
          <Card
            title="3. Default Removed"
            bullets={[
              "98% success rate (accepted cases)",
              "Score improvements of 50–200+ points",
              "Get approved like a premium customer again",
            ]}
          />
        </motion.div>
        <div className="mt-8">
          <Link
            href="#apply"
            className="inline-block rounded-lg bg-blue px-6 py-3 font-semibold text-white shadow hover:bg-blue-700"
          >
            🚀 Remove My Defaults Now
          </Link>
        </div>
      </Section>

      {/* Results / Testimonials */}
      <Section title="Real Results From Real Australians">
        <p className="text-slate-700">
          These aren’t actors or made-up stories. These are actual clients who got their financial lives back:
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 lg:grid-cols-3"
        >
          <Testimonial
            name="Sarah M — Melbourne"
            details="Default removed: 3 weeks | Savings: $80,000+ over loan life"
          >
            "Had a $3,400 phone bill default destroying my chances of buying my first home. ACS removed it in just 3 weeks! Now I’m a homeowner with a 3.1% mortgage. Life-changing doesn’t even cover it."
          </Testimonial>
          <Testimonial
            name="Mark T — Brisbane"
            details="Defaults removed: 5 weeks | Credit score: +180 points"
          >
            "Two medical bill defaults from when I was sick in 2019. Tried DIY removal for 12 months — nothing. ACS removed both in 5 weeks. My credit score jumped 180 points!"
          </Testimonial>
          <Testimonial
            name="Emma & James — Sydney"
            details="Multiple defaults removed: 6 weeks | Portfolio value: $2.1M"
          >
            "Utility defaults from a rental property disaster. Every bank said no to our investment loan. ACS cleared everything in 6 weeks. We now own 3 properties building wealth for our kids’ future."
          </Testimonial>
        </motion.div>
      </Section>

      {/* Urgency */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 p-8 text-white shadow"
        >
          <h2 className="text-2xl font-bold">⏰ Every Day You Wait Costs You Money</h2>
          <p className="mt-2 opacity-90">
            Interest rates are rising. Property prices are climbing. The longer defaults stay on your file, the
            more opportunities slip away forever.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white/10 p-5">
              <h3 className="font-semibold mb-2">⚡ Act This Week:</h3>
              <ul className="space-y-1">
                <li>✅ Lock in current interest rates</li>
                <li>✅ Priority case handling</li>
                <li>✅ Beat rate rise deadlines</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white/10 p-5">
              <h3 className="font-semibold mb-2">😰 Wait Another Month:</h3>
              <ul className="space-y-1">
                <li>❌ Rates may increase again</li>
                <li>❌ Property prices keep climbing</li>
                <li>❌ More missed opportunities</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="#apply"
              className="inline-block rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black shadow hover:bg-yellow-300"
            >
              🚀 Remove My Defaults NOW
            </Link>
          </div>
        </motion.div>
      </section>

      {/* FAQs */}
      <Section title="Frequently Asked Questions">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqData.map((f, i) => (
            <motion.details
              key={i}
              variants={fadeIn}
              className="group rounded-xl border border-blue-100 bg-white p-4 shadow-sm"
            >
              <summary className="cursor-pointer select-none font-semibold text-blue group-open:text-blue flex items-center justify-between">
                <span>{f.q}</span>
                <svg
                  className="h-5 w-5 transform group-open:rotate-180 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
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

      {/* Related block */}
      <RelatedBlock
        currentSlug="/remove-defaults-australia"
        heading="Related services & guides"
      />

      {/* Final CTA band */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-blue to-blue p-6 text-white shadow-lg"
        >
          <div className="grid gap-4 md:grid-cols-[1fr_auto_auto] md:items-center">
            <p className="text-sm font-medium">
              No Win No Fee • 98% Success Rate • ASIC Licensed #532003 • Award Winner 3 Years
            </p>
            <Link
              href="#apply"
              className="rounded-xl bg-white px-5 py-3 text-blue font-semibold text-center"
            >
              Start Free Assessment
            </Link>
            <a
              href="tel:+61489265737"
              className="rounded-xl border-2 border-white px-5 py-3 font-semibold text-white text-center hover:bg-white hover:text-blue"
            >
              Call 0489 265 737
            </a>
          </div>
        </motion.div>
      </section>

      {/* Related services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/remove-defaults-australia" />
      </div>

      <Footer />
    </main>
  );
}

/* ——— Reusable local components ——— */

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

function TrustPill({ stat, label, color = "text-blue-600" }) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm border">
      <div className={`text-3xl font-extrabold ${color}`}>{stat}</div>
      <div className="text-slate-600">{label}</div>
    </div>
  );
}

function InfoCard({ tone = "red", title, text }) {
  const tones = {
    red: "bg-red-50 border-red-500 text-red-700",
    orange: "bg-orange-50 border-orange-500 text-orange-700",
    yellow: "bg-yellow-50 border-yellow-500 text-yellow-700",
  };
  return (
    <div
      className={`rounded-lg border-l-4 p-6 ${tones[tone]} shadow-sm bg-opacity-70`}
    >
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-slate-700">{text}</p>
    </div>
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
              className="h-5 w-5 shrink-0 text-blue-500 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function Testimonial({ name, details, children }) {
  return (
    <motion.figure
      variants={fadeIn}
      className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md"
    >
      <div className="flex text-orange-500 mb-2" aria-hidden="true">
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
      {details && (
        <p className="mt-1 text-xs text-slate-500">{details}</p>
      )}
    </motion.figure>
  );
}
