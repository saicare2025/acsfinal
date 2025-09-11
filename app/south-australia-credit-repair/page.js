// File: app/south-australia-festival-state/page.jsx
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

export default function SouthAustraliaFestivalStatePage() {
  const faqData = [
    {
      question: "Why is South Australia such a high‑value target right now?",
      answer:
        "Massive infrastructure (airport, North–South Corridor, Riverbank Precinct) + wine regions + cultural economy = lifestyle and finance opportunities at lower entry prices than Sydney/Melbourne.",
    },
    {
      question: "How fast can ACS unlock SA finance if I have bad credit?",
      answer:
        "Defaults and serious negatives are typically removed in ~2–8 weeks for accepted cases, aligning with property settlements or seasonal business timelines.",
    },
    {
      question: "Do you have a No Win No Fee option for SA clients?",
      answer:
        "Yes: $330 admin (applies regardless of outcome) + success fees only when items are removed—no monthly charges, no hidden fees.",
    },
    {
      question: "Are wine & agricultural cash‑flows considered?",
      answer:
        "We structure challenges and lender positioning to reflect seasonal cash‑flows and industry nuances for vineyards, tourism and ag operations across SA.",
    },
  ];

  const structuredData = generateMinimalStructuredData({
    pathname: "/south-australia-festival-state",
    title:
      "South Australian Festival State Credit Repair | Property, Wine & Business Finance",
    description:
      "Unlock South Australia’s property, wine and festival economy with clean credit: defaults removed in 2–8 weeks for accepted cases. No Win No Fee options.",
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-8 lg:py-24">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <p className="mb-3 inline-block rounded-full bg-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow">
                South Australia • Property • Wine • Festivals
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                The South Australian Property Paradise
                <span className="block mt-2 text-blue">Don’t let bad credit exile you from the Festival State</span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  $15.8b+ in SA infrastructure, wine country prosperity and a thriving festival economy are creating once‑in‑a‑generation opportunities. With bad credit, you’re locked out. With a clean file, you’re in.
                </p>
                <ul className="grid gap-3 sm:grid-cols-2 text-base text-gray-700 list-disc pl-5">
                  <li>Adelaide Airport expansion • global access</li>
                  <li>North–South Corridor • seamless city↔hills</li>
                  <li>Riverbank Precinct • culture &amp; entertainment</li>
                  <li>Hydrogen industry • future energy jobs</li>
                </ul>
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
                  🍷 Start SA Assessment
                </Link>

                <a
                  href="tel:+61489265737"
                  aria-label="Call Australian Credit Solutions on 0489 265 737"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-blue px-6 py-3 text-base font-semibold text-blue transition hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Call 0489 265 737
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
                heading="South Australia Fast‑Track"
                subheading="Festival State Priority"
                paragraph="Same‑day SA assessment. Defaults removed in 2–8 weeks for accepted cases. No Win No Fee options."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-sm text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>Property • Wine • Tourism • Ag</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>Transparent pricing</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>ASIC Licensed (ACL 532003)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/south-australia-festival-state" />
      </div>

      {/* SA Lifestyle Infrastructure Boom */}
      <Section title="SA Lifestyle Infrastructure Boom">
        <div className="space-y-2 text-slate-700">
          <p><strong>$15.8 billion</strong> in South Australian infrastructure is reshaping lifestyle and finance opportunities across Adelaide, the Hills and wine regions.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Adelaide Airport expansion</strong> for international connectivity</li>
            <li><strong>North–South Corridor</strong> for seamless city‑to‑hills access</li>
            <li><strong>Riverbank Precinct</strong> for culture &amp; entertainment</li>
            <li><strong>Hydrogen industry</strong> for future‑ready jobs</li>
          </ul>
          <p className="font-semibold text-blue">With bad credit, you’re locked out of this transformation.</p>
        </div>
      </Section>

      {/* SA vs Other Capitals */}
      <Section title="South Australia vs Other Capitals — Value Explosion">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <StatCard label="Adelaide median" value="$620,000" />
            <StatCard label="McLaren Vale wine country" value="$580,000" />
            <StatCard label="Adelaide Hills lifestyle" value="$720,000" />
          </div>
          <div className="space-y-2">
            <StatCard label="Sydney equivalents" value="$1.4m+" />
            <StatCard label="Melbourne similars" value="$900k+" />
            <p className="text-slate-700">SA = most affordable capital‑city lifestyle <em>with world‑class wine regions</em>—if your credit qualifies.</p>
          </div>
        </div>
      </Section>

      {/* Business Finance Liberation */}
      <Section title="South Australian Business Finance Liberation">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-2 text-slate-700">
            <h4 className="font-semibold text-blue">Festival State’s business paradise</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Wine exports ≈ $2.3b annually</li>
              <li>Festival economy: Adelaide Festival, Fringe, WOMAD</li>
              <li>Cultural industries &amp; creative tourism</li>
              <li>Agricultural excellence across beef, dairy, grain</li>
            </ul>
            <h4 className="font-semibold text-blue mt-4">Bad credit = business dreams denied</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Winery &amp; cellar door expansions rejected</li>
              <li>Festival accommodation/venue finance declined</li>
              <li>Ag equipment and livestock upgrades blocked</li>
              <li>Creative industry financing knocked back</li>
            </ul>
          </div>
          <div className="space-y-4">
            <Testimonial name="Barossa Valley Wine Empire">
              “Wanted to expand our Barossa cellar door but defaults blocked loans. ACS obliterated everything in 5 weeks. Expansion complete, tours booked solid, restaurant opening for next vintage.” — Klaus &amp; Ingrid S., Tanunda
            </Testimonial>
            <Testimonial name="Adelaide Festival Accommodation Success">
              “Boutique hotel needed expansion capital for festival season. ACS cleaned my file in 4 weeks. Finance approved, portfolio doubled—booked solid every festival.” — Rebecca M., North Adelaide
            </Testimonial>
            <Testimonial name="McLaren Vale Tourism Victory">
              “Couldn’t get restaurant expansion finance due to defaults. ACS removed them in 6 weeks. New venue approved; vineyard dinners booked through next year!” — Antonio &amp; Lisa C., McLaren Vale
            </Testimonial>
          </div>
        </div>
      </Section>

      {/* Wine & Agricultural Finance */}
      <Section title="South Australian Wine &amp; Agricultural Finance">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-2 text-slate-700">
            <h4 className="font-semibold text-blue">Festival State’s wine dominance</h4>
            <p>Perfect climate + premium soils + advanced winemaking = excellence and tourism prosperity.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Vineyard development (Barossa, McLaren Vale, Adelaide Hills)</li>
              <li>Winery equipment for premium production &amp; cellar doors</li>
              <li>Agricultural machinery for grain, beef and dairy</li>
              <li>Tourism infrastructure for accommodation &amp; hospitality</li>
            </ul>
            <h4 className="font-semibold text-blue mt-3">Bad credit disasters</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>12–20% interest vs 4–8% with clean credit</li>
              <li>50–70% deposits demanded</li>
              <li>Seasonal cash‑flows ignored by mainstream lenders</li>
              <li>Outright rejections from industry specialists</li>
            </ul>
          </div>
          <div className="space-y-4">
            <Testimonial name="Clare Valley Riesling Empire">
              “Needed modern bottling equipment but faced 18% rates. ACS fixed my file in 5 weeks; finance at 6.8% and exports to Germany tripled.” — Peter &amp; Heidi M., Clare
            </Testimonial>
            <Testimonial name="Adelaide Hills Chardonnay Dynasty">
              “Defaults killed applications. ACS removed them in 6 weeks. Vineyard doubled; new tasting room; cool‑climate awards rolling in.” — James &amp; Sarah K., Piccadilly
            </Testimonial>
          </div>
        </div>
      </Section>

      {/* ACS Advantage */}
      <Section title="The ACS South Australian Advantage">
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="No Win No Fee"
            bullets={["$330 admin (applies regardless of outcome)", "Success fee only when SA dreams come true", "No monthly charges", "No hidden fees"]}
          />
          <Card
            title="SA Success Metrics"
            bullets={["1,600+ SA clients", "98% success (accepted cases)", "+175–340 point improvements", "2–8 week timeframes"]}
          />
          <Card
            title="Industry Recognition"
            bullets={["ASIC Licensed (ACL 532003)", "Awards 2022–2024", "4.9★ from 865+", "Featured in SA media"]}
          />
        </div>
      </Section>

      {/* SA Client Testimonials */}
      <Section title="South Australian Client Testimonials">
        <Testimonial name="★★★★★ Wine country dreams beyond imagination">
          “$8,400 in defaults blocked our McLaren Vale expansion. ACS removed everything in 6 weeks. Premium Shiraz, ocean views, most‑photographed cellar door in SA.” — Antonio &amp; Maria G., McLaren Vale
        </Testimonial>
        <Testimonial name="★★★★★ South Australia’s premier credit service">
          “DIY for 18 months while running our Barossa operation—waste of time. ACS cleared defaults in 4 weeks. Now expanding into Clare Valley too.” — Hans T., Barossa Valley
        </Testimonial>
        <Testimonial name="★★★★★ Professional, caring, life‑changing">
          “Adelaide Hills accommodation expansion was crushed by bad credit. ACS cleaned my file in 5 weeks. Luxury retreat opened—booked solid every Adelaide Festival.” — Emma L., Stirling
        </Testimonial>
        <Testimonial name="★★★★★ Festival state lifestyle made affordable">
          “Rate difference ACS achieved means the Adelaide Hills property pays for itself via wine tourism. From rejection to ~2.9% in 5 weeks.” — David &amp; Lisa P., Mount Barker
        </Testimonial>
      </Section>

      {/* Ready to Claim */}
      <Section title="Ready to Claim Your Festival State Life?">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-2 text-slate-700">
            <h4 className="font-semibold text-blue">Option 1: Stay locked out</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Watch SA prices climb</li>
              <li>Pay 4–6% more in interest</li>
              <li>Miss the wine &amp; festival boom</li>
              <li>Stay shut out of Australia’s most affordable capital</li>
            </ul>
            <h4 className="font-semibold text-blue mt-4">Option 2: Claim your empire</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Defaults removed in 2–8 weeks</li>
              <li>Unlock premium SA rates</li>
              <li>Access wine &amp; festival paradise</li>
              <li>Live the lifestyle others only visit</li>
            </ul>
          </div>
          <div className="space-y-2 text-slate-700">
            <h4 className="font-semibold text-blue">The clock is ticking</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>$146/day</strong> lost to extra interest (avg. SA client savings)</li>
              <li>Property appreciation you could be capturing</li>
              <li>Wine industry opportunities slipping away</li>
              <li>Cultural lifestyle freedom within reach</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Start Now */}
      <Section title="Start Your SA Festival State Dreams Now">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-3 text-slate-700">
            <h3 className="font-semibold text-blue">🍷 South Australia Exclusive Offer</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>FREE 60‑second SA credit analysis</li>
              <li>Same‑day SA assessment (priority)</li>
              <li>No‑obligation wine country consultation</li>
              <li>Emergency processing for urgent purchases</li>
              <li>Direct access to award‑winning SA specialists</li>
            </ul>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-blue">Call Now or Start Online</h3>
            <p className="mt-3 text-slate-700">Don’t let another SA vineyard sunset pass without action.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+61489265737" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors">📞 0489 265 737</a>
              <Link href="/free-credit-assessment" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors">Start My SA Dream</Link>
              <Link href="/live-chat" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors">Live Chat — Festival State Urgent</Link>
            </div>
            <div className="mt-4 text-sm text-slate-600">
              <p>Australian Credit Solutions Pty Ltd | ASIC ACL 532003</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* About ACS SA */}
      <Section title="About Australian Credit Solutions — South Australia">
        <div className="space-y-2 text-slate-700">
          <p>We’ve been unlocking SA festival‑state dreams since 2018—balancing world‑class wine regions, vibrant cultural festivals and an affordable lifestyle.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Only take winnable SA cases (98% success proves it)</li>
            <li>Transparent SA pricing with zero surprises</li>
            <li>Lightning‑fast results when festival state calls</li>
            <li>Personal service from SA lifestyle specialists</li>
          </ul>
          <p className="font-semibold">South Australia Direct: 0489 265 737 • help@australiancreditsolutions.com.au</p>
        </div>
      </Section>

      <RelatedBlock currentSlug="/south-australia-festival-state" heading="Related services &amp; guides" />

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
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">No Win No Fee options</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">SA wine • property • tourism</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-sm font-medium">ASIC‑licensed &amp; insured</p></div>
          </div>
        </motion.div>
      </section>

      {/* Related Services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/south-australia-festival-state" />
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
    <motion.div
      variants={fadeIn}
      className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
    >
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

function StatCard({ label, value }) {
  return (
    <motion.div
      variants={fadeIn}
      className="rounded-xl border border-blue-100 bg-white p-6 text-center shadow-sm"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-1 text-lg font-bold text-blue">{value}</p>
    </motion.div>
  );
}

function KpiCard({ label, value }) {
  return (
    <motion.div
      variants={fadeIn}
      className="rounded-xl border border-blue-100 bg-white p-6 text-center shadow-sm"
    >
      <p className="text-3xl font-extrabold text-blue">{value}</p>
      <p className="mt-1 text-sm font-medium text-slate-600">{label}</p>
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
      <figcaption className="mt-3 text-sm font-semibold text-blue">{name}</figcaption>
    </motion.figure>
  );
}
