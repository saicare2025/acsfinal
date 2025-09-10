// File: app/credit-repair-bendigo-ballarat/page.jsx
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

import RelatedBlock from "@/app/_seo/RelatedBlock";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function RegionalVictoriaCreditRepairPage() {
  // FAQ data for structured data
  const faqData = [
    {
      question: "Do you charge extra for regional Victoria clients?",
      answer:
        "No, our pricing is the same Australia-wide. Regional Victoria residents pay the same transparent No Win No Fee structure: $330 admin fee plus success fee only when we remove items. Distance doesn't affect our service quality or pricing.",
    },
    {
      question: "Can you help with agricultural and farming credit issues?",
      answer:
        "Absolutely. We understand seasonal income, drought impacts, and rural business complexities. Many of our regional Victoria clients are farmers, agricultural contractors, and rural business owners.",
    },
    {
      question: "How do you handle the distance for regional clients?",
      answer:
        "Everything is handled remotely – phone, email, and secure online systems. Regional Victoria clients receive the same priority service as Melbourne residents. Many clients find our remote service more convenient than traveling to Melbourne.",
    },
    {
      question: "Do you understand regional banking and credit unions?",
      answer:
        "Yes, we work extensively with regional Victorian banks and credit unions including Bendigo Bank, local credit unions, and regional branches of major banks. We understand their processes, requirements, and local business practices.",
    },
    {
      question:
        "Can you help with urgent farm equipment or property purchases?",
      answer:
        "Yes! We offer emergency processing for regional Victoria residents with urgent finance needs. Same-day assessment, priority handling, and regular updates for seasonal equipment purchases or property settlements.",
    },
  ];

  // Generate structured data for this service page
  const structuredData = generateMinimalStructuredData({
    pathname: "/credit-repair-bendigo-ballarat",
    title:
      "Credit Repair Bendigo Ballarat | Regional Victoria Specialists | Australian Credit Solutions",
    description:
      "Get Your Credit Fixed in Regional Victoria – 98% Success Rate When We Take Your Case. Rejected for a home loan in Bendigo? Can't get car finance in Ballarat? Award-winning specialists with No Win No Fee policy.",
    isService: true,
    serviceType: "Regional Victoria Credit Repair",
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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-8 lg:py-24">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Credit Repair Bendigo Ballarat
                <span className="block mt-2 text-blue">
                  Regional Victoria Specialists
                </span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Rejected for a home loan in Bendigo? Can&apos;t get car finance in
                  Ballarat? Default listings destroying your credit score in
                  Shepparton? Regional Victoria deserves the same financial
                  opportunities as Melbourne – and there&apos;s a proven solution.{" "}
                  <strong className="font-semibold text-blue">
                    98% success rate
                  </strong>{" "}
                  when we take your case.
                </p>

                <p className="text-base text-gray-600">
                  Australian Credit Solutions has helped over 1,200 regional
                  Victorian residents remove defaults, fix bad credit, and get
                  approved for finance again. Award-winning specialists with{" "}
                  <strong className="font-semibold text-blue">
                    No Win No Fee
                  </strong>{" "}
                  policy. Licensed professionals.
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
                  Fix My Credit Now - Free Assessment
                </Link>

                <a
                  href="tel:+61489265737"
                  aria-label="0489 265 737"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-blue px-6 py-3 text-base font-semibold text-blue transition hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  0489 265 737
                </a>

                {/* Decorative arrow (desktop/tablet only) */}
                <div
                  className="pointer-events-none hidden lg:block"
                  aria-hidden="true"
                >
                  <Image
                    src={ArrowIcon}
                    alt=""
                    width={220}
                    height={70}
                    loading="lazy"
                    className="select-none"
                    priority={false}
                  />
                </div>
                <div
                  className="pointer-events-none lg:hidden flex justify-center"
                  aria-hidden="true"
                >
                  <Image
                    src={ArrowIconM}
                    alt=""
                    width={200}
                    height={120}
                    loading="lazy"
                    className="select-none"
                    priority={false}
                  />
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-1/3 relative">
                      <RelatedBlock currentSlug="/credit-repair-bendigo-ballarat-regional-victoria" heading="Related services & guides" />
        <FooterForm
                heading="Get Your Regional Victoria Credit Assessment"
                subheading="Bendigo to Mildura Coverage"
                paragraph="Find out if your credit can be fixed across Regional Victoria – from goldfields to Murray River. Free, fast, and confidential."
              />
              <ul className="mt-8 flex flex-col justify-center gap-3 text-sm text-gray-600 sm:flex-row sm:flex-wrap">
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>
                  98% success rate
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>
                  No Win No Fee
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue"></span>
                  Licensed ASIC ACL 532003
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ReviewsWidget />

      {/* Why Regional Victoria Residents Choose Us */}
      <Section title="Why Regional Victoria Residents Choose Us">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-6 md:grid-cols-3"
        >
          <Card
            title="Regional Victoria's Most Trusted Credit Repair Specialists"
            bullets={[
              "3 consecutive industry awards (2022, 2023, 2024)",
              "98% success rate when we accept cases",
              "ASIC Licensed (ACL 532003)",
              "4.9/5 stars from 855+ reviews",
            ]}
          />
          <Card
            title="We Understand Regional Victoria's Unique Challenges"
            bullets={[
              "Limited local banking options in smaller centres",
              "Distance to major financial services",
              "Rural and regional employment patterns",
              "Agricultural and seasonal income variations",
            ]}
          />
          <Card
            title="Fast Results for Regional Communities"
            bullets={[
              "Priority service for urgent regional applications",
              "Same-day assessments for Bendigo, Ballarat, Shepparton",
              "Express handling for rural property purchases",
              "Comprehensive solutions from goldfields to Murray River",
            ]}
          />
        </motion.div>
      </Section>

      {/* Regional Victoria Credit Problems We Fix */}
      <Section title="Regional Victoria Credit Problems We Fix">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Default Removal - Bendigo, Ballarat & Shepparton"
            bullets={[
              "Bendigo client: $3,800 Optus default removed in 4 weeks",
              "Ballarat resident: Multiple utility defaults cleared in 5 weeks",
              "Shepparton family: Car finance default wiped, approved for home loan",
              "Echuca professional: Credit card default removed, scored 3.1% farm loan",
            ]}
          />
          <Card
            title="Late Payment Removal - Regional Banking"
            bullets={[
              "Bendigo Bank branches across regional Victoria",
              "Local credit unions in Ballarat and Shepparton",
              "Regional Commonwealth Bank centres",
              "Westpac rural and regional branches",
            ]}
          />
          <Card
            title="Credit Enquiry Removal - Regional Finance"
            bullets={[
              "Regional Victorian car dealerships and finance companies",
              "Agricultural equipment financiers across central Victoria",
              "Business loan applications from regional lenders",
              "Personal loan enquiries throughout goldfields region",
            ]}
          />
          <Card
            title="Regional Success Stories"
            bullets={[
              "Multiple enquiries from car yards, farm equipment finance, business loans removed",
              "Late payments from regional banks and credit unions cleaned up",
              "Agricultural and seasonal finance challenges resolved",
              "Rural property and business investment approvals secured",
            ]}
          />
        </motion.div>
      </Section>

      {/* Process */}
      <Section title="Our Proven 3-Step Regional Victoria Process">
        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4 text-slate-700"
        >
          {[
            {
              title: "Free Regional Victoria Credit Assessment",
              description:
                "Within 60 seconds, we'll analyze your credit file and identify removal opportunities specific to regional Victorian lenders and service providers. Our regional team reviews defaults from regional Victorian companies, late payments from local banks and credit unions, and credit enquiries from regional lenders.",
            },
            {
              title: "Strategic Regional Challenge Process",
              description:
                "We don&apos;t use generic templates. Every challenge is crafted specifically for regional Victorian lenders, understanding local business practices and rural compliance requirements. Targeted strategies for agricultural and rural businesses with fast-track processes for urgent regional cases.",
            },
            {
              title: "Credit File Victory",
              description:
                "Watch your credit score climb as negative items disappear. Regional Victoria clients typically see 150-300 point improvements within 8-12 weeks, with 98% success rate for cases we accept and average 3-8 week removal timeframes.",
            },
          ].map((step, index) => (
            <motion.li key={index} variants={fadeIn} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold">
                {index + 1}
              </div>
              <div>
                <strong>{step.title}:</strong> {step.description}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </Section>

      {/* Service Areas */}
      <Section title="Regional Victoria Areas We Service">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Bendigo & Central Goldfields"
            subtitle="Premium service for Victoria's historic goldfields region"
            bullets={[
              "Bendigo | Castlemaine | Kyneton | Macedon | Woodend | Gisborne",
              "Heritage property purchases and renovations",
              "Tourism and hospitality business lending",
              "Agricultural property investments",
              "Mining industry equipment finance",
            ]}
          />
          <Card
            title="Ballarat & Western Highlands"
            subtitle="Specialist service for Victoria's largest inland city and surrounds"
            bullets={[
              "Ballarat | Ararat | Stawell | Avoca | Beaufort | Daylesford | Bacchus Marsh",
              "Historic property financing in heritage areas",
              "Agricultural and farming equipment loans",
              "Tourism and hospitality business expansion",
              "Rural lifestyle property purchases",
            ]}
          />
          <Card
            title="Shepparton & Murray Region"
            subtitle="Targeted solutions for Victoria's food bowl region"
            bullets={[
              "Shepparton | Echuca | Swan Hill | Yarrawonga | Cobram | Numurkah | Kyabram",
              "Agricultural equipment and machinery finance",
              "Irrigation and farm infrastructure loans",
              "Food processing and manufacturing equipment",
              "Rural property and orchard investments",
            ]}
          />
          <Card
            title="Mildura & Sunraysia"
            subtitle="Premium service for Victoria's premier agricultural region"
            bullets={[
              "Mildura | Red Cliffs | Robinvale | Ouyen | Murrayville",
              "Horticultural equipment and technology finance",
              "Wine industry business lending",
              "Agricultural property and vineyard loans",
              "Seasonal worker accommodation financing",
            ]}
          />
        </motion.div>
      </Section>

      {/* Regional Success Stories */}
      <Section title="Regional Victoria Success Stories">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Testimonial name="Bendigo Family - Goldfields Heritage Home">
            &quot;We wanted to buy a character home in Bendigo&apos;s historic precinct
            but had a $4,200 default from 2020. ACS removed it in 5 weeks, and
            we got approved at 3.3%. Now we&apos;re living our dream in the
            goldfields.&quot; – Mark & Jenny S.
          </Testimonial>
          <Testimonial name="Ballarat Entrepreneur - Earthmoving Business">
            &quot;I needed equipment finance for my earthmoving business in Ballarat
            but had multiple late payments. ACS cleaned my file in 6 weeks – now
            I&apos;ve got three new machines and contracts are pouring in.&quot; – Steve
            T.
          </Testimonial>
          <Testimonial name="Echuca Farmer - Irrigation Upgrade">
            &quot;Seasonal income made getting finance tough, and an old default made
            it impossible. ACS removed the default in 7 weeks – now I&apos;ve
            upgraded my irrigation system and yields are up 40%.&quot; – David M.
          </Testimonial>
          <Testimonial name="Shepparton Dairy Farm - Equipment Success">
            &quot;Needed to upgrade milking equipment but couldn&apos;t get finance due to
            late payments from the drought years. ACS cleaned my file in 8
            weeks. The new equipment has increased productivity 25%.&quot; – Michael
            & Sue L.
          </Testimonial>
        </motion.div>
      </Section>

      {/* Regional Property Challenge */}
      <Section title="Regional Victoria's Property Challenge – How We Help">
        <p className="text-slate-700">
          Regional Victoria offers affordable property compared to Melbourne,
     <Link href="/get-credit-repair" className="text-blue-600 hover:text-blue-800 underline">Get Credit Repair</Link>      but bad credit can lock you out of these opportunities.
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-3"
        >
          <Card
            title="Bendigo Heritage Home"
            bullets={[
              "Problem: $2,400 credit card default blocking $520,000 heritage home loan",
              "Location: Character home in Bendigo's Golden Square",
              "Timeline: Default removed in 4 weeks",
              "Result: Approved at 3.2% rate, saving $48,000 over loan term",
            ]}
          />
          <Card
            title="Ballarat First-Home Buyers"
            bullets={[
              "Problem: Multiple late payments from university years",
              "Property: $425,000 first home in Ballarat East",
              "Timeline: Credit file cleaned in 7 weeks",
              "Result: First home owner grant plus 3.4% loan rate",
            ]}
          />
          <Card
            title="Shepparton Investment Property"
            bullets={[
              "Problem: Business loan enquiries triggering automatic rejections",
              "Situation: Dairy farmer expanding property portfolio",
              "Timeline: Enquiries removed in 5 weeks",
              "Result: Approved for investment property, building rural wealth",
            ]}
          />
        </motion.div>
      </Section>

      {/* Agricultural & Business Finance */}
      <Section title="Agricultural & Business Finance Solutions">
        <p className="text-slate-700">
          Regional Victoria&apos;s economy depends on agriculture, small business,
          <Link href="/what-is-a-good-credit-score-australia" className="text-blue-600 hover:text-blue-800 underline">What Is A Good Credit Score Australia</Link> and rural industry. Bad credit shouldn&apos;t hold back regional
          prosperity.
        </p>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-4 sm:grid-cols-2"
        >
          {[
            {
              h: "Why Business Finance Gets Rejected in Regional Victoria",
              p: "Seasonal income patterns affected by weather/seasons, limited local bank branches and finance specialists, complex rural business applications, and credit sensitivity where minor defaults trigger instant rejections.",
            },
            {
              h: "Ballarat Equipment Finance Victory",
              p: "Earthmoving business needed new excavators, but a $5,800 default was blocking every application. ACS removed it in 6 weeks. Now operating with $180,000 in new equipment and biggest contracts ever.",
            },
            {
              h: "Echuca Tourism Business Success",
              p: "Wanted to expand Murray River accommodation but bad credit was blocking everything. ACS fixed the file in 5 weeks. Now operating river frontage cabins with bookings through 2025.",
            },
            {
              h: "Regional Business Expertise",
              p: "We understand seasonal income patterns, agricultural cash flows, rural business complexities, and work with specialized regional lenders who understand rural industry requirements.",
            },
          ].map((item) => (
            <motion.div
              key={item.h}
              variants={fadeIn}
              className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="font-semibold text-blue">{item.h}</h3>
              <p className="mt-2 text-sm text-slate-700">{item.p}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Why Regional Victoria Trusts ACS */}
      <Section title="Why Regional Victoria Trusts ACS">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {[
            "Award-winning regional service: Industry Excellence Awards 2022, 2023, 2024 – only credit repair company to win 3 consecutive years.",
            "Regional Victoria expertise: Deep understanding of agricultural and rural lending requirements, seasonal income and cash flow patterns.",
            "No Win No Fee promise: One-off admin fee $330, no ongoing monthly charges, success fee only charged when defaults are removed.",
            "Regional understanding: We know regional bank and credit union relationships, rural property and business financing needs.",
            "Agricultural specialization: Recognised by regional professionals across Victoria for understanding farming and rural business.",
            "Distance-friendly service: Outstanding service for regional clients with remote handling that many find more convenient than traveling to Melbourne.",
            "Equal treatment guarantee: Regional Victoria deserves the same quality service as Melbourne clients – and that&apos;s exactly what we deliver.",
          ].map((t) => (
            <motion.li
              key={t}
              variants={fadeIn}
              className="flex items-start gap-2 rounded-xl bg-blue-50 p-4 text-sm text-slate-700"
            >
              <svg
                className="h-5 w-5 shrink-0 text-blue mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {t}
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      {/* Service Options */}
      <Section title="Our Regional Victoria Credit Repair Services">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2"
        >
          <PriceCard
            name="Express Regional Service"
            timeline="3-6 weeks typically"
            perfectFor="Urgent property purchases, seasonal business needs"
            includes={[
              "Same-day assessment for regional areas",
              "Priority processing for agricultural finance",
              "Emergency handling for rural settlements",
            ]}
            featured
          />
          <PriceCard
            name="Complete Regional Cleanup"
            timeline="6-12 weeks typically"
            perfectFor="Complex cases, multiple defaults, comprehensive repair"
            includes={[
              "Full credit file analysis",
              "Multiple dispute coordination",
              "Ongoing monitoring and support",
            ]}
          />
          <PriceCard
            name="Agricultural Business Special"
            timeline="4-10 weeks typically"
            perfectFor="Farming operations, rural businesses, seasonal income"
            includes={[
              "Rural industry-specific approach",
              "Seasonal income consideration",
              "Agricultural lender relationships",
            ]}
          />
          <PriceCard
            name="Heritage Property Support"
            timeline="6-10 weeks typically"
            perfectFor="Historic homes, character properties, goldfields region"
            includes={[
              "Heritage property finance expertise",
              "Regional property market knowledge",
              "Specialist heritage lender access",
            ]}
          />
        </motion.div>
        <div className="mt-6 rounded-xl border border-dashed border-blue-300 bg-blue-50 p-4 text-sm text-slate-600">
          <strong>No Win No Fee Promise:</strong> $330 admin fee applies
          regardless of outcome. Success fee only charged when defaults are
          removed. Same pricing Australia-wide – distance doesn&apos;t affect our
          service quality or cost.
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Frequently Asked Questions - Regional Victoria">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4"
        >
          {faqData.map((f, index) => (
            <motion.details
              key={`faq-${index}`}
              variants={fadeIn}
              className="group rounded-xl border border-blue-100 bg-white p-4 shadow-sm transition-all hover:shadow-md"
            >
              <summary className="cursor-pointer select-none font-semibold text-blue group-open:text-blue flex items-center justify-between">
                <span>{f.question}</span>
                <svg
                  className="h-5 w-5 transform group-open:rotate-180 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-sm text-slate-700 pl-2 border-l-2 border-blue-200 ml-1">
               <Link href="/blog-details/credit-file-defaults-can-an-unreceived-bill-appear-on-your-report" className="text-blue-600 hover:text-blue-800 underline">Credit File Defaults Can An Unreceived Bill Appear On Your Report</Link>  {f.answer}
              </p>
            </motion.details>
          ))}
        </motion.div>
      </Section>

      {/* Take Action Now */}
      <Section title="Get Started Today - Regional Victoria Credit Repair">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">
              Don&apos;t let bad credit limit your opportunities in regional Victoria
            </h3>
            <p>Every month <Link href="/credit-repair-sale-traralgon-gippsland-victoria" className="text-blue-600 hover:text-blue-800 underline">Credit Repair Sale Traralgon Gippsland Victoria</Link> you wait:</p>
            {[
              "Property prices continue rising even in regional areas",
              "Interest rates may increase, costing thousands more",
              "Agricultural opportunities pass you by",
              "Business expansion plans remain on hold",
              "Bad credit continues damaging your financial future",
            ].map((text, index) => (
              <p key={index} className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 shrink-0 text-red-500 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                {text}
              </p>
            ))}
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-blue">
              Take Action Now - Free Assessment for Regional Victoria
            </h3>
            <ul className="mt-3 space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 shrink-0 text-green-500 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Same-day assessment for Bendigo, Ballarat, Shepparton residents
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 shrink-0 text-green-500 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Priority handling for urgent agricultural and business finance
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 shrink-0 text-green-500 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Award-winning specialists with 98% success rate
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/free-credit-assessment"
                className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors"
              >
                Start My Free Assessment
              </Link>
              <a
                href="tel:+61489265737"
                className="rounded-lg border-2 border-blue px-5 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors"
              >
                Call 0489 265 737
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

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
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-sm font-medium">
                98% success rate when we take cases
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-sm font-medium">
                No Win No Fee — $330 admin fee
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
              <p className="text-sm font-medium">
                Licensed & regulated — ASIC ACL 532003
              </p>
            </div>
          </div>
        </motion.div>
      </section>

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
      <h2 className="text-2xl font-bold tracking-tight text-blue sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 text-base leading-relaxed text-slate-800">
        {children}
      </div>
    </motion.section>
  );
}

function Card({ title, subtitle, bullets = [] }) {
  return (
    <motion.div
      variants={fadeIn}
      className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-blue">{title}</h3>
      {subtitle && (
        <p className="text-sm text-slate-600 mt-1 font-medium">{subtitle}</p>
      )}
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <svg
              className="h-5 w-5 shrink-0 text-orange-500 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
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
        featured
          ? "border-blue-300 bg-gradient-to-b from-blue-50 to-white shadow-lg"
          : "border-blue-100 bg-white shadow-sm"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-6 inline-block rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white shadow">
          Most Popular
        </span>
      )}
      <h3 className="text-lg font-semibold text-blue">{name}</h3>
      <p className="mt-1 text-sm text-slate-600">Timeline: {timeline}</p>
      <p className="mt-1 text-sm text-slate-600">Perfect for: {perfectFor}</p>
      <ul className="mt-3 space-y-2 text-sm text-slate-700 flex-grow">
        {includes.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <svg
              className="h-5 w-5 shrink-0 text-blue-500 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {i}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Link
          href="/free-credit-assessment"
          className="w-full rounded-lg bg-blue px-4 py-2 font-semibold text-white hover:bg-blue transition-colors text-sm text-center block"
        >
          Start Now
        </Link>
      </div>
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
      <figcaption className="mt-3 text-sm font-semibold text-blue">
        {name}
      </figcaption>
    </motion.figure>
  );
}
