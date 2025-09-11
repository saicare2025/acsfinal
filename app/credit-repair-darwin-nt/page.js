// File: app/credit-repair-darwin-nt/page.jsx
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

export default function CreditRepairDarwinPage() {
  // FAQ data for structured data & rendering
  const faqData = [
    {
      question: "How much does credit repair cost in Darwin?",
      answer:
        "Our Darwin service operates on a transparent No Win No Fee basis. There's a one-off admin fee of $330 that applies regardless of outcome, then our success fee is only charged when we successfully remove items from your credit file. Most Darwin clients find the interest rate savings from better mining, defence, or tourism finance more than pay for our service within months.",
    },
    {
      question: "Can you help FIFO workers with irregular income?",
      answer:
        "Absolutely. We understand FIFO rotations, camp allowances, and the feast-or-famine nature of resource sector income. Many of our Darwin clients are mining contractors, drillers, and resource workers. We work with lenders who understand FIFO income patterns and help position your application for success.",
    },
    {
      question: "Do you understand defence personnel relocations?",
      answer:
        "Yes! Defence relocations can disrupt banking relationships and cause administrative defaults. We specialise in helping ADF members, contractors, and defence industry workers remove defaults caused by posting changes, deployment complications, and military banking challenges.",
    },
    {
      question: "How long does credit repair take for Darwin residents?",
      answer:
        "Timeline varies by case complexity, but Darwin clients typically see results within 2-8 weeks. Urgent cases (like pending mining equipment purchases, defence home loans, or time-sensitive tourism business expansion) often receive priority handling with faster timelines.",
    },
    {
      question: "Can you help with seasonal tourism business credit?",
      answer:
        "Definitely! Darwin's tourism industry faces unique wet/dry season challenges. We understand the cyclical nature of tourism income and work with lenders who appreciate seasonal business patterns. Many tourism operators have had defaults removed in time for high season expansion.",
    },
    {
      question: "Do you guarantee my defaults will be removed?",
      answer:
        "We only take cases where we're genuinely confident of success. Our 98% success rate for accepted cases means if we take your Darwin case, the odds are heavily in your favour. If we don't think we can help, we'll tell you upfront and won't charge you anything.",
    },
    {
      question: "Can you help with remote area banking issues?",
      answer:
        "Yes, we understand NT's remote area banking challenges. Limited bank branches, unreliable internet, and geographical complications can cause legitimate defaults. We challenge these aggressively and have excellent success rates with geographically-related credit issues.",
    },
    {
      question: "What if I need urgent finance for a mining rotation or defence posting?",
      answer:
        "We offer emergency processing for Darwin residents with urgent finance needs. Same-day assessment, priority handling, and regular updates. Many clients have had defaults removed in time for their mining equipment purchase, defence home loan, or business expansion opportunity.",
    },
    {
      question: "How do I start my credit repair in Darwin?",
      answer:
        "Simple! Call 0489 265 737 for your free Darwin assessment or complete our online form. We'll analyze your credit file, identify removal opportunities, and provide a clear roadmap for your credit repair Northern Territory success story.",
    },
  ];

  // Generate structured data for this service page
  const structuredData = generateMinimalStructuredData({
    pathname: "/credit-repair-darwin-nt",
    title:
      "Credit Repair Darwin NT | Top End Finance Specialists | 98% Success Rate",
    description:
      "Remove defaults fast in Darwin. Mining, Defence & Tourism finance experts with 98% success when we take your case. ASIC licensed (ACL 532003). No Win No Fee.",
    isService: true,
    serviceType: "Darwin Credit Repair",
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
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
                Credit Repair Darwin NT
                <span className="block mt-2 text-blue">Top End Finance Specialists</span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Struggling with bad credit in Darwin? You're not alone. Whether you're a mining contractor between FIFO rotations, a defence personnel member buying your first home, or a tourism worker managing seasonal income, defaults and bad credit don't have to destroy your Top End dreams.
                </p>

                <p className="text-base text-gray-600">
                  At Australian Credit Solutions, we're Darwin's credit repair specialists. Recognised three years running (2022–2024) with a <strong className="font-semibold text-blue">98% success rate</strong> when we accept your case. Fully licensed (ASIC ACL 532003). No Win No Fee.
                </p>
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
                  Get My Free Darwin Assessment
                </Link>

                <a
                  href="tel:+61489265737"
                  aria-label="Call Australian Credit Solutions on 0489 265 737"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-blue px-6 py-3 text-base font-semibold text-blue transition hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Call 0489 265 737
                </a>

                {/* Decorative arrow (desktop/tablet only) */}
                <div className="pointer-events-none hidden lg:block" aria-hidden="true">
                  <Image src={ArrowIcon} alt="" width={220} height={70} loading="lazy" className="select-none" priority={false} />
                </div>
                <div className="pointer-events-none lg:hidden flex justify-center" aria-hidden="true">
                  <Image src={ArrowIconM} alt="" width={200} height={120} loading="lazy" className="select-none" priority={false} />
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-1/3 relative">
              <FooterForm
                heading="Free Darwin Credit Assessment"
                subheading="Mining • Defence • Tourism"
                paragraph="Same-day review of Equifax/Experian/Illion. Priority processing for urgent Darwin finance needs."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-base text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>No Win No Fee</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>98% success when we take your case</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>Licensed ASIC ACL 532003</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />

      {/* Breadcrumb Navigation */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/credit-repair-darwin-nt" />
      </div>

      {/* Why Darwin Residents Choose Us */}
      <Section title="Why Darwin Residents Choose Australia's Award‑Winning Credit Repair Specialists">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-2">
          <Card title="🏆 3‑Year Award Winning Streak" bullets={[
            "Industry Excellence Awards 2022, 2023, 2024",
            "Recognised nationally for outcomes and ethics",
          ]} />
          <Card title="⚡ 98% Success When We Take Your Case" bullets={[
            "We only accept cases we’re confident we can win",
            "If we take your Darwin case, odds are in your favour",
          ]} />
          <Card title="💰 No Win No Fee Policy" bullets={[
            "$330 admin fee regardless of outcome",
            "Success fee only if we remove items",
          ]} />
          <Card title="🔒 ASIC Licensed Professionals" bullets={[
            "Australian Credit Licence 532003",
            "Fully licensed, regulated and compliant",
          ]} />
          <Card title="⭐ 4.9/5 from 855+ Reviews" bullets={[
            "Real Darwin residents, real results",
            "Hundreds of verified testimonials",
          ]} />
        </motion.div>
      </Section>

      {/* Darwin's Unique Credit Challenges */}
      <Section title="Darwin's Unique Credit Challenges — We Get It">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-2">
          <Card title="FIFO Lifestyle Complications" bullets={[
            "Income gaps between rotations trigger missed payments",
            "We understand cash‑flow patterns for contractors and drillers",
            "Hundreds of mining workers helped to clean their files",
          ]} />
          <Card title="Defence Personnel Relocations" bullets={[
            "Posting changes disrupt banking and payments",
            "Specialists in ADF defaults from admin delays",
          ]} />
          <Card title="Seasonal Tourism Income" bullets={[
            "Wet season downturns can create arrears and defaults",
            "Support for hospitality, tour operators and tourism businesses",
          ]} />
          <Card title="Remote Area Banking Challenges" bullets={[
            "Limited options and admin errors in remote NT",
            "We challenge every questionable listing",
          ]} />
          <Card title="Top End Property Dreams" bullets={[
            "Access ~3.5% investment rates vs 12% bad‑credit rates",
            "$15,000+ annual savings on a $500k property is common",
          ]} />
        </motion.div>
      </Section>

      {/* Success Stories */}
      <Section title="Darwin Success Stories — Real Results for Real People">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Testimonial name="Mark T — Mining Contractor, Humpty Doo">
            "Had a $6,800 default from a phone bill mix‑up during my 4‑week rotation. ACS removed it in 5 weeks. Now I own two investment properties in Palmerston and my FIFO income works for me, not against me."
          </Testimonial>
          <Testimonial name="Sarah & James W — Defence Family, Darwin">
            "Posted to Darwin from Townsville, banking got complicated, ended up with defaults. ACS cleaned everything in 6 weeks. We bought our forever home in Millner with a 3.2% rate. Our kids love the Territory lifestyle!"
          </Testimonial>
          <Testimonial name="David M — Tourism Operator, Katherine">
            "Wet season killed our tour business, missed some payments, got defaults. ACS removed everything in 7 weeks. Now I've got equipment finance for new 4WDs and bookings are through the roof."
          </Testimonial>
          <Testimonial name="Lisa R — Government Worker, Palmerston">
            "Divorce left me with defaults I didn't even know about. ACS found and removed them all in 8 weeks. Home loan approved at prime rates — my fresh start in the Top End!"
          </Testimonial>
        </motion.div>
      </Section>

      {/* Process */}
      <Section title="Our Proven 3‑Step Darwin Credit Repair Process">
        <motion.ol variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 space-y-4 text-slate-700">
          {[
            {
              title: "Step 1: Free Darwin Credit Assessment (Same Day)",
              description:
                "Complete analysis from Equifax, Experian and Illion. Identify removable items (defaults, late payments, judgments, bankruptcies). Calculate potential interest savings. Strategy tailored to your industry and circumstances.",
            },
            {
              title: "Step 2: Strategic Challenge & Removal (2–8 Weeks)",
              description:
                "Legal challenges to credit providers under Australian consumer credit laws. Documentation requests to prove legitimacy. Negotiated removals with creditors and collections. Regular updates throughout.",
            },
            {
              title: "Step 3: Credit Score Improvement & Monitoring (Ongoing)",
              description:
                "Score tracking as items are removed. Long‑term improvement strategies. Pre‑approval help for loans and finance. Ongoing support for your Darwin financial goals.",
            },
          ].map((step, index) => (
            <motion.li key={index} variants={fadeIn} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold">{index + 1}</div>
              <div>
                <strong>{step.title}:</strong> {step.description}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </Section>

      {/* What We Remove */}
      <Section title="What We Remove from Darwin Credit Files">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-2">
          <Card title="✅ Defaults ($1 – $100,000+)" bullets={[
            "Telstra, Optus, energy companies, rental bonds",
            "Medical bills, gym memberships, credit cards",
          ]} />
          <Card title="✅ Late Payment Listings" bullets={[
            "Home, car and personal loans",
            "Credit cards and buy‑now‑pay‑later",
          ]} />
          <Card title="✅ Credit Enquiries" bullets={[
            "Multiple loan and credit card enquiries",
            "Unnecessary or mistaken credit checks",
          ]} />
          <Card title="✅ Judgments & Court Orders" bullets={[
            "Unpaid fines, civil judgments, debt collection orders",
          ]} />
          <Card title="✅ Bankruptcies & Part IX Agreements" bullets={[
            "Older bankruptcies and discharged agreements",
          ]} />
          <Card title="✅ Commercial Credit Issues" bullets={[
            "Business defaults, commercial lending problems",
          ]} />
        </motion.div>
      </Section>

      {/* Industry Specialisations */}
      <Section title="Darwin Industry Specialisations">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-2">
          <Card title="⛏️ Mining & Resources Finance" bullets={[
            "Rio Tinto Darwin Ops, Inpex Ichthys, McArthur River, Nhulunbuy Bauxite",
            "FIFO contractors across major NT projects",
            "We understand rotations, allowances, shutdowns, contracts",
          ]} />
          <Card title="🛡️ Defence & Security Finance" bullets={[
            "RAAF Base Darwin, Robertson Barracks, HMAS Coonawarra",
            "ADF families, Defence contractors, security services",
            "We understand posting cycles, deployment pay, clearances",
          ]} />
          <Card title="🌴 Tourism & Hospitality Finance" bullets={[
            "Kakadu operators, Darwin Waterfront, Mindil Beach Markets",
            "Crocodile parks, hotels, resorts and accommodation",
            "We understand wet/dry season cycles and income",
          ]} />
          <Card title="🏛️ Government & Public Service" bullets={[
            "NT Government, Federal Depts, Local Councils",
            "Essential services and education sector",
            "We understand pay cycles, remote postings, benefits",
          ]} />
        </motion.div>
      </Section>

      {/* Suburbs We Serve */}
      <Section title="Darwin Suburbs We Serve">
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="font-semibold text-blue">Darwin Metro Areas</h4>
            <p className="text-slate-700 mt-1">CBD, Waterfront, The Gardens, Larrakeyah, Stuart Park, Fannie Bay, Parap, Woolner, Bayview, Cullen Bay</p>
            <h4 className="font-semibold text-blue mt-4">Northern Suburbs</h4>
            <p className="text-slate-700 mt-1">Nightcliff, Rapid Creek, Millner, Coconut Grove, Nakara, Wanguri, Tiwi, Buffalo Creek, Howard Springs</p>
            <h4 className="font-semibold text-blue mt-4">Southern Suburbs</h4>
            <p className="text-slate-700 mt-1">Stuart Park, Winnellie, Marrara, Berrimah, Hidden Valley, Humpty Doo, Girraween, Palmerston</p>
          </div>
          <div>
            <h4 className="font-semibold text-blue">Rural & Remote NT</h4>
            <p className="text-slate-700 mt-1">Katherine, Tennant Creek, Alice Springs, Gove Peninsula, McArthur River, Nhulunbuy, Jabiru</p>
            <div className="mt-4">
              <Link href="/regional-nt-credit-repair" className="text-blue-600 underline hover:text-blue-800">Regional NT Credit Repair Services →</Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Property Market Opportunities */}
      <Section title="Darwin Property Market Opportunities">
        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          <div className="space-y-3">
            <h4 className="font-semibold text-blue">Investment Hotspots</h4>
            <ul className="list-disc pl-5 text-slate-700">
              <li>Waterfront Precincts — premium developments</li>
              <li>Palmerston Growth — family homes & townhouses</li>
              <li>Howard Springs — acreage & lifestyle</li>
              <li>Nightcliff — beachfront apartments & units</li>
              <li>CBD High‑Rise — rental investment opportunities</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-blue">Interest Rate Impact (on $500,000)</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-base">
                <thead>
                  <tr className="text-left">
                    <th className="py-2 pr-4">Credit Score</th>
                    <th className="py-2 pr-4">Typical Rate</th>
                    <th className="py-2 pr-4">Monthly Payment*</th>
                    <th className="py-2">Annual Difference</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr><td className="py-2 pr-4">Excellent (800+)</td><td className="py-2 pr-4">3.5%</td><td className="py-2 pr-4">$2,245</td><td className="py-2">Baseline</td></tr>
                  <tr><td className="py-2 pr-4">Good (700–799)</td><td className="py-2 pr-4">4.2%</td><td className="py-2 pr-4">$2,388</td><td className="py-2">+$1,716/yr</td></tr>
                  <tr><td className="py-2 pr-4">Fair (600–699)</td><td className="py-2 pr-4">6.8%</td><td className="py-2 pr-4">$2,950</td><td className="py-2">+$8,460/yr</td></tr>
                  <tr><td className="py-2 pr-4">Poor (&lt;600)</td><td className="py-2 pr-4">12–18%</td><td className="py-2 pr-4">$4,200+</td><td className="py-2">+$23,460/yr</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500">*Estimated repayments. Clean credit → premium rates → more properties → generational wealth.</p>
          </div>
        </div>
      </Section>

      {/* Banking & Finance Partners */}
      <Section title="Darwin Banking & Finance Partners">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-2">
          <Card title="Major Banks We Work With" bullets={[
            "Commonwealth Bank — Darwin branches",
            "Westpac — Territory lending",
            "ANZ — Regional NT presence & mining finance",
            "NAB — Agricultural & business lending",
            "Bendigo Bank — Community partnerships",
          ]} />
          <Card title="Specialist Lenders & Finance Types" bullets={[
            "Territory Finance, Beyond Bank, ING, Pepper, Liberty",
            "FIFO‑savvy lenders & Defence‑friendly providers",
            "Home, car, business & equipment finance; credit cards",
          ]} />
        </motion.div>
      </Section>

      {/* Service Options */}
      <Section title="Service Options for Darwin Residents">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <PriceCard name="Standard Darwin Service" timeline="2–8 weeks typically" perfectFor="Most clients with 1–3 credit issues" includes={[
            "Same‑day assessment",
            "Success fee only on removals",
            "Regular progress updates",
            "Empathetic support",
          ]} featured />
          <PriceCard name="Complex Case Support" timeline="4–12 weeks typically" perfectFor="Multiple defaults, judgments, complex situations" includes={[
            "Comprehensive case management",
            "Multiple dispute coordination",
            "Ongoing monitoring & support",
            "Finance‑readiness guidance",
          ]} />
          <PriceCard name="Emergency Finance Support" timeline="Expedited" perfectFor="Mining rotations, Defence postings, time‑sensitive purchases" includes={[
            "Priority processing",
            "Fast‑track communication",
            "Focus on blocking listings",
            "Liaison notes for lenders",
          ]} />
          <PriceCard name="Return‑to‑Growth Plan" timeline="6–10 weeks typically" perfectFor="Preparing for investment or business expansion" includes={[
            "Score‑building roadmap",
            "Pre‑approval preparation",
            "Debt structuring tips",
            "Long‑term credit health",
          ]} />
        </motion.div>
        <div className="mt-6 rounded-xl border border-dashed border-blue-300 bg-blue-50 p-4 text-base text-slate-600">
          <strong>Policy:</strong> $330 admin fee (applies regardless of outcome). Success fees only if we remove items. No hidden costs.
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Frequently Asked Questions — Darwin Credit Repair">
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

      <RelatedBlock currentSlug="/credit-repair-darwin-nt" heading="Related services & guides" />

      {/* Next Steps */}
      <Section title="Start Your Darwin Credit Repair Journey Today">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">Your Top End dreams don't have to wait</h3>
            <p>Whether it's a first Darwin home, Palmerston investment, tourism expansion, or premium finance for FIFO income — clean credit is the key.</p>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-800">Your Free Assessment Includes:</h4>
              <ul className="space-y-2">
                {[
                  "Complete credit file analysis (Equifax, Experian, Illion)",
                  "Darwin‑specific removal strategy",
                  "Potential savings calculation from rate improvements",
                  "Timeline estimate & industry‑specific advice",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="h-5 w-5 shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-blue">Don't Let Defaults Define Your Top End Future</h3>
            <p className="mt-3 text-slate-700">Same‑day assessment, priority handling for urgent mining, defence and tourism finance needs.</p>
            <p className="mt-3 text-slate-700 font-semibold">Every day with bad credit costs money — lock in clean credit now.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/free-credit-assessment" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors">Start My Darwin Assessment</Link>
              <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors">Call 0489 265 737</a>
            </div>
            <div className="mt-4 text-base text-slate-600">
              <p>Email: <a href="mailto:help@australiancreditsolutions.com.au" className="underline text-blue-600">help@australiancreditsolutions.com.au</a></p>
              <p>Service Area: Darwin Metro, Palmerston, Rural & Remote NT</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Footer trust bar */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl bg-gradient-to-r from-blue to-blue p-6 text-white shadow-lg">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-base font-medium">Award‑winning specialists (2022, 2023, 2024)</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-base font-medium">No Win No Fee — Success‑based pricing</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-base font-medium">Licensed & regulated — ASIC ACL 532003</p></div>
          </div>
        </motion.div>
      </section>

      {/* Related Services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/credit-repair-darwin-nt" />
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

function PriceCard({ name, timeline, perfectFor, includes, featured = false }) {
  return (
    <motion.div
      variants={fadeIn}
      className={`relative rounded-xl border p-6 h-full flex flex-col ${
        featured ? "border-blue-300 bg-gradient-to-b from-blue-50 to-white shadow-lg" : "border-blue-100 bg-white shadow-sm"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-6 inline-block rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white shadow">Most Popular</span>
      )}
      <h3 className="text-lg font-semibold text-blue">{name}</h3>
      <p className="mt-1 text-base text-slate-600">Timeline: {timeline}</p>
      <p className="mt-1 text-base text-slate-600">Perfect for: {perfectFor}</p>
      <ul className="mt-3 space-y-2 text-base text-slate-700 flex-grow">
        {includes.map((i) => (
          <li key={i} className="flex items-start gap-2">
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
