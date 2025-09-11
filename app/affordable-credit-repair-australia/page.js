// File: app/affordable-credit-repair-australia/page.jsx
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

export default function AffordableCreditRepairPage() {
  // FAQ data for structured data
  const faqData = [
    {
      question: "How can you offer award-winning service so affordably?",
      answer:
        "Our efficient business model, high volume, and technology investments allow us to deliver premium results at affordable prices. We don't waste money on expensive marketing or fancy offices — those savings go directly to keeping our fees low while maintaining the same award-winning quality."
    },
    {
      question: "Are there any hidden costs or fees?",
      answer:
        "Absolutely not. Our pricing is completely transparent: small admin fee upfront, then success fees only when items are removed. No setup fees, no monthly charges, no hidden costs. What we quote is what you pay — nothing more."
    },
    {
      question: "Can I get a payment plan if I can't afford the upfront fee?",
      answer:
        "Yes! We offer flexible payment plans including splitting the admin fee into manageable monthly payments. We also offer deferred success fee payments for genuine hardship cases. Everyone deserves a fresh start regardless of their current financial situation."
    },
    {
      question: "Is your affordable service lower quality than expensive competitors?",
      answer:
        "Not at all. We use the same qualified lawyers, same proven process, and achieve the same 98% success rate as expensive competitors. Our awards prove our quality hasn't decreased despite affordable pricing. You get premium results without premium prices."
    },
    {
      question: "How do you compare to cheap credit repair services?",
      answer:
        "Those ultra-cheap services are usually scams or unlicensed operators with near-zero success rates. We're ASIC licensed, award-winning, and have a 98% success rate. Our affordable pricing delivers real results while cheap services typically waste your money and time."
    },
    {
      question: "What happens if you can't remove my defaults?",
      answer:
        "With our No Win No Fee guarantee, you don't pay success fees if we can't remove items. You've only invested the small admin fee, which covers our assessment and initial work. Unlike other companies that keep all your money regardless of results, we only charge success fees for actual success."
    }
  ];

  // Generate structured data for this service page
  const structuredData = generateMinimalStructuredData({
    pathname: "/affordable-credit-repair-australia",
    title:
      "Affordable Credit Repair Australia | No Win No Fee | Award Winners | 98% Success Rate",
    description:
      "Award-winning credit repair at prices that won't break the bank. No Win No Fee, payment plans, ASIC licensed. 98% success rate when we take cases.",
    isService: true,
    serviceType: "Affordable Credit Repair"
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
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Affordable Credit Repair Australia
                <span className="block mt-2 text-blue">No Win No Fee Award Winners</span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">Award-Winning Results That Won't Break the Bank</p>
                <p className="text-base text-gray-600">
                  Think quality credit repair is too expensive? Think again, mate. Australian Credit Solutions delivers award-winning results at prices that won't break the bank. Our No Win No Fee guarantee means you only pay for success — making premium credit repair accessible to every Australian.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-8 relative flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center" role="group" aria-label="Primary actions">
                <Link href="/free-credit-assessment" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Get My Free Credit Assessment
                </Link>
                <a href="tel:+61489265737" aria-label="Call Australian Credit Solutions on 0489 265 737" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-blue px-6 py-3 text-base font-semibold text-blue transition hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
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
                heading="Get My Free Affordable Assessment"
                subheading="Award-Winning Value"
                paragraph="Quick credit check: Find out exactly what you should pay and what value you'll receive. Complete cost-benefit analysis in 2 minutes."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-base text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>No Win No Fee</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>Payment plans available</li>
                <li className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>Licensed ASIC ACL 532003</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReviewsWidget />

      {/* Breadcrumb Navigation */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="/affordable-credit-repair-australia" />
      </div>

      {/* Why Affordable Doesn't Mean Cheap Quality */}
      <Section title="Why Affordable Doesn't Mean Cheap Quality">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-2">
          <Card title="🏆 3-Year Award Winner (2022, 2023, 2024)" bullets={["Same award-winning service, same 98% success rate, same qualified lawyers — just at prices ordinary Australians can afford."]} />
          <Card title="💰 No Win No Fee Guarantee" bullets={["Small admin fee upfront, then you only pay when we remove items.", "No hidden costs, no ongoing fees, no nasty surprises."]} />
          <Card title="📊 98% Success Rate" bullets={["Affordable pricing doesn't mean cutting corners.", "We deliver the same results as expensive competitors for a fraction of the cost."]} />
          <Card title="💳 Payment Plans Available" bullets={["Flexible payment options because everyone deserves a financial fresh start."]} />
        </motion.div>
      </Section>

      {/* How Much Does Bad Credit Really Cost You? */}
      <Section title="How Much Does Bad Credit Really Cost You?">
        <p className="text-slate-700">The hidden monthly drain on your wallet. Before you worry about our fees, consider what bad credit is already costing you:</p>
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-3">
          <Card title="Home Loans" bullets={["Good Credit: 3.5% interest = $1,750/month on $500K", "Bad Credit: 8.5% interest = $2,456/month on $500K", "Monthly Cost of Bad Credit: $706 MORE"]} />
          <Card title="Car Finance" bullets={["Good Credit: 5% interest = $443/month on $25K", "Bad Credit: 18% interest = $634/month on $25K", "Monthly Cost of Bad Credit: $191 MORE"]} />
          <Card title="Personal Loans" bullets={["Good Credit: 7% on $20K = $198/month", "Bad Credit: 24% on $20K = $264/month", "Monthly Cost of Bad Credit: $66 MORE"]} />
        </motion.div>
        <div className="mt-6 rounded-xl border border-orange-200 bg-orange-50 p-6 shadow">
          <p className="text-orange-800 font-semibold">Your bad credit is costing you $963+ EXTRA every month. Our service pays for itself in weeks, not years.</p>
        </div>
      </Section>

      {/* Pricing & Why We're Cheaper */}
      <Section title="Australia's Most Affordable Credit Repair Pricing">
        <h3 className="text-lg font-semibold text-blue">Simple, Transparent, No-Nonsense Pricing</h3>
        <ul className="mt-3 space-y-2 text-base text-slate-700">
          <li>Small admin fee to get started</li>
          <li>Success fees only when items are removed</li>
          <li>Payment plans available for any budget</li>
          <li>No hidden costs or ongoing charges</li>
        </ul>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card
            title="Why We're 40–60% Cheaper Than Competitors"
            bullets={[
              "Volume Economics: We help thousands yearly, passing savings to clients.",
              "No Expensive Marketing: Awards & word-of-mouth beat TV ads.",
              "Streamlined Process: Three award-winning years honed our system.",
              "Technology Investment: Automation reduces manual work without losing quality."
            ]}
          />
          <Card
            title="What You Still Get Despite Affordable Pricing"
            bullets={[
              "Same Qualified Lawyers: Principal Lawyer Elisa Rothschild leads every case.",
              "Same 98% Success Rate when we take cases.",
              "Same Industry Awards: Three consecutive years of recognition.",
              "Same ASIC Licensing & Professional Standards."
            ]}
          />
        </div>
      </Section>

      {/* Flexible Payment Options */}
      <Section title="Flexible Payment Options for Every Budget">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-base text-slate-700 mb-6">
          <strong>No Win No Fee Structure: </strong>
          <span>Upfront: Small admin fee. Success: Only when items are removed. If we fail: Nothing more.</span>
        </div>
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-6 md:grid-cols-3">
          <PriceCard
            name="Option 1: Split Admin Fee"
            timeline="Low monthly payments"
            perfectFor="Cash‑flow friendly setup"
            includes={["Split admin fee into low monthly payments", "Success fees paid only when items are removed", "No interest charges"]}
            featured
          />
          <PriceCard
            name="Option 2: Deferred Success Fees"
            timeline="Pay 30 days after removal"
            perfectFor="Want to start now, pay later"
            includes={["Pay small admin fee upfront", "Success fees due 30 days after removal", "No penalties for early payment"]}
          />
          <PriceCard
            name="Option 3: Hardship Consideration"
            timeline="Extended terms available"
            perfectFor="Genuine financial difficulty"
            includes={["Individual review for hardship", "Extended payment terms", "Same quality service guaranteed"]}
          />
        </motion.div>
      </Section>

      {/* Real Australians Getting Results */}
      <Section title="Real Australians Getting Affordable Results">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Testimonial name="Sarah T — Single Mum, Newcastle">
            "As a single mum, every dollar counts. ACS gave me quality service at a price I could actually afford. Default removed in 3 weeks, rental approved immediately. Worth every cent."
          </Testimonial>
          <Testimonial name="Tom M — Apprentice Electrician, Perth">
            "Thought I couldn't afford credit repair on apprentice wages. Payment plan made it possible — now I'm buying my first home at 25."
          </Testimonial>
          <Testimonial name="Jenny & David — Young Family, Brisbane">
            "Best investment we ever made. Service paid for itself in the first month with our new low interest rate. Kids have their forever home now."
          </Testimonial>
        </motion.div>
      </Section>

      <RelatedBlock currentSlug="/affordable-credit-repair-australia" heading="Related services & guides" />

      {/* Red Flags & How to Spot Quality */}
      <Section title="Don't Fall for 'Too Good to Be True' Cheap Services">
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Red Flags of Dodgy Cheap Operators"
            bullets={[
              "❌ '$99 Miracle' services: unlicensed, disappear, can make credit worse.",
              "❌ 'Free' services: hidden costs, poor success, no accountability.",
              "❌ Overseas call centres: no ASIC licensing, poor communication, zero success rates."
            ]}
          />
          <Card
            title="How to Spot Quality Affordable Services"
            bullets={[
              "✅ ASIC Licensed: look for ACL number, regulatory protection.",
              "✅ Transparent Pricing: all costs disclosed, clear refund policies.",
              "✅ Proven Track Record: awards, real testimonials, published success rates.",
              "✅ Qualified Staff: lawyers, Australian‑based, direct communication."
            ]}
          />
        </div>
      </Section>

      {/* ROI & Savings */}
      <Section title="Why Affordable Credit Repair Makes Financial Sense">
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="The ROI of Clean Credit — Immediate Benefits"
            bullets={["Lower interest rates on all loans", "Higher loan approval chances", "Better rental applications", "Improved insurance premiums"]}
          />
          <Card
            title="Long‑term Value"
            bullets={["Save hundreds of thousands over a lifetime", "Greater investment opportunities & financial freedom", "Improved quality of life"]}
          />
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card
            title="Real Numbers: What Our Clients Save"
            bullets={["$500K home loan: ~${421}/month saved = $151,560 over 30 years (payback ~183:1)", "Better rates enable property investment", "$400K property @6%: ~10‑year value increase ~$716,000", "Business finance access: equipment approvals & revenue growth"]}
          />
          <Card
            title="The Smart Australian's Guide to Affordable Credit Repair"
            bullets={["Monthly waste: $600–$1,300 across home/car/personal loans", "Annual cost: $7,200–$15,600 — that's a holiday or deposit", "30‑year cost: $216,000–$468,000 — an extra investment property", "Every day you delay: $20–$43 wasted, fewer options, more stress"]}
          />
        </div>
      </Section>

      {/* Service Options */}
      <Section title="Service Options: Quality at Every Price Point">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PriceCard
            name="Budget Service — Essential Credit Repair"
            timeline="2–6 weeks"
            perfectFor="Single default or simple cases"
            includes={["Professional legal representation", "Direct credit provider negotiation", "Progress updates and reporting", "No Win No Fee guarantee"]}
            featured
          />
          <PriceCard
            name="Standard Service — Multiple Item Cleanup"
            timeline="4–8 weeks"
            perfectFor="2–3 defaults or late payments"
            includes={["Comprehensive credit file analysis", "Coordinated multi‑item strategy", "Priority case handling", "Payment plan options"]}
          />
          <PriceCard
            name="Premium Service — Complete Credit Transformation"
            timeline="6–12 weeks"
            perfectFor="Complex cases with multiple issues"
            includes={["Full credit file reconstruction", "Advanced legal strategies", "Credit score optimization guidance", "Ongoing support and advice"]}
          />
        </motion.div>
      </Section>

      {/* FAQs */}
      <Section title="Frequently Asked Questions About Affordable Credit Repair">
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

      {/* Next Steps */}
      <Section title="Get Started with Australia's Most Affordable Credit Repair">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">Free Assessment — No Obligation</h3>
            <p>We'll tell you the exact items affecting your credit, a realistic removal timeline, total cost estimate with payment options, and expected credit score improvement.</p>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-800">Three Ways to Get Started</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span><strong>Phone Assessment:</strong> <a href="tel:+61489265737" className="underline text-blue-600 hover:text-blue-800">0489 265 737</a> — speak with experts, book assessment, discuss payment plans.</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span><strong>Online Assessment:</strong> Complete our 60‑second form, upload your credit report securely, receive a detailed analysis within 24 hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span><strong>Email Consultation:</strong> <a href="mailto:help@australiancreditsolutions.com.au" className="underline text-blue-600 hover:text-blue-800">help@australiancreditsolutions.com.au</a> — send questions, get pricing & timeline estimates.</span>
                </li>
              </ul>
              <div className="text-base text-slate-600">Payment methods: Credit Card (Visa, MasterCard, Amex), Direct Bank Transfer, Payment Plans (approved), BPAY.</div>
            </div>
          </div>
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-blue">Your Affordable Fresh Start Begins Today</h3>
            <p className="mt-3 text-slate-700">Don't let financial constraints keep you trapped in bad credit. Our affordable pricing, payment plans, and No Win No Fee guarantee make quality credit repair accessible to every Australian.</p>
            <p className="mt-3 text-slate-700">Every day you wait, you're literally throwing money away. Take action now.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/free-credit-assessment" className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors">Start My Assessment</Link>
              <a href="tel:+61489265737" className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors">Call 0489 265 737</a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Footer trust bar */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="rounded-2xl bg-gradient-to-r from-blue to-blue p-6 text-white shadow-lg">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-base font-medium">Award-winning specialists (2022, 2023, 2024)</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-base font-medium">No Win No Fee — Payment plans available</p></div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"><p className="text-base font-medium">Licensed & regulated — ASIC ACL 532003</p></div>
          </div>
        </motion.div>
      </section>

      {/* Related Services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="/affordable-credit-repair-australia" />
      </div>

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
      <ul className="mt-3 space-y-2 text-base text-slate-700">
        {bullets.map((b, i) => (
          <li key={`${b}-${i}`} className="flex items-start gap-2">
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
      className={`relative rounded-xl border p-6 h-full flex flex-col ${featured ? "border-blue-300 bg-gradient-to-b from-blue-50 to-white shadow-lg" : "border-blue-100 bg-white shadow-sm"}`}
    >
      {featured && (
        <span className="absolute -top-3 left-6 inline-block rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white shadow">Most Popular</span>
      )}
      <h3 className="text-lg font-semibold text-blue">{name}</h3>
      <p className="mt-1 text-base text-slate-600">Timeline: {timeline}</p>
      <p className="mt-1 text-base text-slate-600">Perfect for: {perfectFor}</p>
      <ul className="mt-3 space-y-2 text-base text-slate-700 flex-grow">
        {includes.map((i, idx) => (
          <li key={`${i}-${idx}`} className="flex items-start gap-2">
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
