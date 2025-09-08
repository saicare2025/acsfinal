// File: app/credit-repair-geelong-warrnambool-western-victoria/page.jsx
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

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function CreditRepairGeelongWarrnamboolPage() {
  // FAQ data for structured data
  const faqData = [
    {
      question: "Do you charge extra for regional and coastal clients?",
      answer: "No, our pricing is identical across Australia. Whether you&apos;re in central Geelong or remote Portland, you pay the same transparent No Win No Fee structure: $330 admin fee (applies regardless of outcome) plus success fee only when we remove items. Location never affects our service quality or pricing."
    },
    {
      question: "Can you help with tourism and seasonal businesses?",
      answer: "Absolutely. We understand tourism&apos;s seasonal patterns, hospitality cash flows, and agricultural income variations. Many western Victoria clients run tourism businesses, coastal accommodations, and agricultural enterprises. We work with specialized lenders who understand these industries."
    },
    {
      question: "How do you handle remote coastal locations?",
      answer: "Everything operates remotely – phone, email, and secure online systems. Clients from Portland to Apollo Bay receive identical priority service. Many find our remote service more convenient than traveling to Melbourne, especially during busy tourist seasons."
    },
    {
      question: "Do you understand coastal property markets?",
      answer: "Yes, we work extensively with coastal property finance, understanding Great Ocean Road markets, Surf Coast investments, and western Victoria rural properties. We know the local agents, developers, and specialized coastal lenders."
    },
    {
      question: "Can you help with urgent summer season business needs?",
      answer: "Definitely! We offer emergency processing for western Victoria businesses with urgent seasonal finance needs. Same-day assessment, priority handling, and regular updates. Many tourism clients have had defaults removed in time for summer equipment purchases or facility upgrades."
    },
    {
      question: "What if my business income is seasonal or weather-dependent?",
      answer: "We completely understand. Tourism, agriculture, and coastal businesses often have seasonal or weather-affected income. Our approach takes these factors into account when working with lenders who understand western Victoria&apos;s economic patterns."
    }
  ];

  // Generate structured data for this service page
  const structuredData = generateMinimalStructuredData({
    pathname: "/credit-repair-geelong-warrnambool-western-victoria",
    title: "Credit Repair Geelong Warrnambool | Western Victoria Specialists | Australian Credit Solutions",
    description: "Get your credit fixed in Western Victoria – 98% success rate when we take your case. Rejected for a home loan in Geelong? Can&apos;t get car finance in Warrnambool? Default listings ruining your credit score along the Great Ocean Road? Western Victoria&apos;s booming coastal and regional economy deserves better – and there&apos;s a proven solution.",
    isService: true,
    serviceType: "Credit Repair Geelong Warrnambool Western Victoria"
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-8 lg:py-24">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=")`
        }}></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Get Your Credit Fixed in Western Victoria – 98% Success Rate When We Take Your Case
                <span className="block mt-2 text-blue">
                  Western Victoria&apos;s Most Trusted Credit Repair Specialists
                </span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Rejected for a home loan in Geelong? Can&apos;t get car finance in Warrnambool? Default listings ruining your
                  credit score along the Great Ocean Road? Western Victoria&apos;s booming coastal and regional economy
                  deserves better – and there&apos;s a proven solution.
                </p>

                <p className="text-base text-gray-600">
                  Australian Credit Solutions has helped over 900 western Victorian residents remove defaults, fix
                  bad credit, and get approved for finance again. Award-winning specialists.{" "}
                  <strong className="font-semibold text-blue">
                    No Win No Fee
                  </strong>{" "}
                  policy. Licensed professionals.
                </p>
              </div>

              <div className="mt-4">
                <p className="text-lg font-semibold text-blue">
                  📞 Western Victoria Hotline: 0489 265 737
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
                  aria-label="Call Australian Credit Solutions on 0489 265 737"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-blue px-6 py-3 text-base font-semibold text-blue transition hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Call 0489 265 737
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

              {/* Trust badges */}
              
            </div>

            {/* Right Form with Arrow */}
            <div className="w-full lg:w-1/3 relative">
              {/* Form Container */}

              <FooterForm
                heading="Get My Free Western Victoria Credit Assessment"
                subheading="Fast & Confidential"
                paragraph="Find out if your credit can be fixed – free, fast, and confidential for western Victoria residents."
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
                  Licensed & insured (ASIC ACL 532003)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile arrow indicator (shown only on mobile) */}
      </section>
        <ReviewsWidget/>

      {/* Opening Section */}
      <Section title="Why Western Victoria Residents Choose Us">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">✅ Western Victoria&apos;s Most Trusted Credit Repair Specialists</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>3 consecutive industry awards (2022, 2023, 2024)</li>
              <li>98% success rate when we accept cases</li>
              <li>ASIC Licensed (ACL 532003)</li>
              <li>4.9/5 stars from 855+ reviews across Australia</li>
            </ul>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">✅ We Understand Western Victoria&apos;s Unique Opportunities</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Booming Geelong economy with Ford transition success</li>
              <li>Great Ocean Road tourism and hospitality boom</li>
              <li>Western districts agricultural prosperity</li>
              <li>Coastal lifestyle property investments</li>
            </ul>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue">✅ Fast Results for Western Victoria</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Priority service for urgent coastal property purchases</li>
              <li>Same-day assessments for Geelong, Warrnambool, Portland residents</li>
              <li>Express handling for tourism business finance</li>
              <li>Comprehensive solutions from Surf Coast to Grampians</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Impact Section */}
      <Section title="Western Victoria Credit Problems We Fix">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-blue mb-4">Default Removal - Geelong, Warrnambool & Coastal Victoria</h3>
            <p className="text-slate-700 mb-4">
              Got defaults on your credit file from western Victorian lenders? Whether it&apos;s from a Telstra account in
              Geelong, an unpaid utility in Warrnambool, or a credit card default in Portland – defaults can be removed
              with the right approach.
            </p>
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="font-semibold text-blue mb-2">Western Victoria Default Success Stories:</p>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Geelong client: $3,200 Vodafone default removed in 3 weeks</li>
                <li>• Warrnambool resident: Multiple utility defaults cleared in 6 weeks</li>
                <li>• Torquay family: Car finance default wiped, approved for beachside home loan</li>
                <li>• Portland professional: Credit card default removed, scored 2.8% business loan</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue mb-4">Late Payment Removal - Western Victoria Banking</h3>
            <p className="text-slate-700 mb-4">
              Late payments from western Victorian banks and credit unions can slash your credit score by 100+ points.
              We&apos;ve successfully removed late payment listings from:
            </p>
            <ul className="text-slate-700 space-y-2">
              <li>• Bendigo Bank branches across Geelong and western districts</li>
              <li>• Local credit unions in Warrnambool and Hamilton</li>
              <li>• Commonwealth Bank coastal branches from Torquay to Portland</li>
              <li>• Regional Westpac centres throughout western Victoria</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue mb-4">Credit Enquiry Removal - Coastal & Regional Finance</h3>
            <p className="text-slate-700 mb-4">
              Too many credit applications across western Victoria&apos;s competitive property and business markets?
              Multiple enquiries from Geelong car yards, Warrnambool mortgage brokers, or Great Ocean Road
              business loans can trigger automatic rejections.
            </p>
            <p className="text-slate-700">
              We remove unnecessary enquiries from:
            </p>
            <ul className="text-slate-700 space-y-2 mt-2">
              <li>• Geelong car dealerships and marine finance companies</li>
              <li>• Great Ocean Road tourism and hospitality financiers</li>
              <li>• Agricultural equipment finance across western districts</li>
              <li>• Coastal property investment loan applications</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* What We Remove */}
      <Section title="Our Proven 3-Step Western Victoria Process">
        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-6 text-slate-700"
        >
          <motion.li variants={fadeIn} className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold text-lg">
              1
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue">Free Western Victoria Credit Assessment</h3>
              <p className="mt-2">
                Within 60 seconds, we&apos;ll analyze your credit file and identify removal opportunities specific to
                western Victorian lenders and service providers.
              </p>
              <div className="mt-3 bg-blue-50 rounded-lg p-3">
                <p className="font-medium text-blue mb-2">Our western Victoria team reviews:</p>
                <ul className="text-sm space-y-1">
                  <li>• Defaults from Geelong and regional western companies</li>
                  <li>• Late payments from coastal and rural banks</li>
                  <li>• Credit enquiries from western Victoria lenders</li>
                  <li>• Incorrect listings from tourism and agricultural providers</li>
                </ul>
              </div>
            </div>
          </motion.li>

          <motion.li variants={fadeIn} className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold text-lg">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue">Strategic Western Victoria Challenge Process</h3>
              <p className="mt-2">
                We don&apos;t use generic templates. Every challenge is crafted specifically for western Victorian
                lenders, understanding coastal business practices and rural compliance requirements.
              </p>
              <div className="mt-3 bg-blue-50 rounded-lg p-3">
                <p className="font-medium text-blue mb-2">Western Victoria-focused approach:</p>
                <ul className="text-sm space-y-1">
                  <li>• Targeted strategies for tourism and hospitality businesses</li>
                  <li>• Understanding of coastal property market dynamics</li>
                  <li>• Relationships with western Victoria credit providers</li>
                  <li>• Fast-track processes for urgent seasonal business needs</li>
                </ul>
              </div>
            </div>
          </motion.li>

          <motion.li variants={fadeIn} className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold text-lg">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue">Credit File Victory</h3>
              <p className="mt-2">
                Watch your credit score climb as negative items disappear. Western Victoria clients typically see
                150-300 point improvements within 8-12 weeks.
              </p>
              <div className="mt-3 bg-blue-50 rounded-lg p-3">
                <p className="font-medium text-blue mb-2">Western Victoria success metrics:</p>
                <ul className="text-sm space-y-1">
                  <li>• 98% success rate for western Victoria cases we accept</li>
                  <li>• Average 2-6 week removal timeframes</li>
                  <li>• Typical credit score improvements: 150-300 points</li>
                  <li>• Follow-up support for western Victorian residents</li>
                </ul>
              </div>
            </div>
          </motion.li>
        </motion.ol>
      </Section>

      {/* Process */}
      <Section title="Western Victoria Areas We Service">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue mb-3">Geelong & Surf Coast</h3>
            <p className="text-sm text-slate-600 mb-3">Premium service for Victoria&apos;s fastest-growing regional economy</p>
            <p className="text-sm font-medium mb-2">Geelong | Torquay | Anglesea | Lorne | Colac | Winchelsea | Drysdale | Portarlington</p>
            <div className="bg-blue-50 rounded-lg p-3 mt-3">
              <p className="text-sm font-medium text-blue mb-2">We help Surf Coast residents overcome credit challenges for:</p>
              <ul className="text-xs space-y-1">
                <li>• Beachside property purchases and sea change investments</li>
                <li>• Tourism and hospitality business expansion</li>
                <li>• Marine industry equipment finance</li>
                <li>• Coastal lifestyle business development</li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue mb-3">Great Ocean Road & Coastal Communities</h3>
            <p className="text-sm text-slate-600 mb-3">Specialist service for Australia&apos;s most iconic coastal region</p>
            <p className="text-sm font-medium mb-2">Apollo Bay | Port Campbell | Warrnambool | Port Fairy | Portland | Nelson</p>
            <div className="bg-blue-50 rounded-lg p-3 mt-3">
              <p className="text-sm font-medium text-blue mb-2">Great Ocean Road challenges we solve:</p>
              <ul className="text-xs space-y-1">
                <li>• Tourism accommodation and restaurant finance</li>
                <li>• Coastal property and holiday rental investments</li>
                <li>• Marine and fishing industry equipment loans</li>
                <li>• Seasonal business working capital requirements</li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue mb-3">Western Districts & Grampians</h3>
            <p className="text-sm text-slate-600 mb-3">Targeted solutions for Victoria&apos;s agricultural heartland</p>
            <p className="text-sm font-medium mb-2">Hamilton | Horsham | Stawell | Ararat | Halls Gap | Dunkeld</p>
            <div className="bg-blue-50 rounded-lg p-3 mt-3">
              <p className="text-sm font-medium text-blue mb-2">Western districts expertise:</p>
              <ul className="text-xs space-y-1">
                <li>• Agricultural property and livestock finance</li>
                <li>• Farm machinery and equipment loans</li>
                <li>• Rural processing and value-adding investments</li>
                <li>• Tourism and hospitality in Grampians region</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Success Stories */}
      <Section title="Geelong&apos;s Economic Boom – How We Help">
        <p className="text-slate-700 mb-6">
          Geelong has transformed from manufacturing decline to Australia&apos;s fastest-growing regional
          economy. Don&apos;t let bad credit keep you from these opportunities.
        </p>
        
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-blue mb-4">Geelong Growth Opportunities vs Credit Reality</h3>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>NDIS headquarters creating 1,000+ jobs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Deakin University expansion attracting students and staff</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Ford site redevelopment bringing new industries</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Geelong median house price: $650,000 (rising fast)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span className="font-medium">Bad Credit Impact: Missing out on property and business opportunities</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-blue mb-4">Geelong Success Stories</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue text-sm">Case Study: Geelong Waterfront Apartment</h4>
                <ul className="text-xs text-slate-700 mt-2 space-y-1">
                  <li><strong>Problem:</strong> $2,800 credit card default blocking $580,000 apartment loan</li>
                  <li><strong>Location:</strong> Premium waterfront development near Steampacket Gardens</li>
                  <li><strong>Timeline:</strong> Default removed in 3 weeks</li>
                  <li><strong>Result:</strong> Approved at 3.3% rate, saving $52,000 over loan term</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue text-sm">Case Study: North Geelong Business Expansion</h4>
                <ul className="text-xs text-slate-700 mt-2 space-y-1">
                  <li><strong>Problem:</strong> Multiple late payments affecting equipment finance</li>
                  <li><strong>Business:</strong> Food processing startup near Avalon Airport</li>
                  <li><strong>Timeline:</strong> Credit file cleaned in 5 weeks</li>
                  <li><strong>Result:</strong> $250,000 equipment finance approved, expanding operations</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue text-sm">Case Study: Surf Coast Investment Property</h4>
                <ul className="text-xs text-slate-700 mt-2 space-y-1">
                  <li><strong>Problem:</strong> Car finance enquiries triggering home loan rejections</li>
                  <li><strong>Situation:</strong> Melbourne professional buying Torquay investment</li>
                  <li><strong>Timeline:</strong> Enquiries removed in 4 weeks</li>
                  <li><strong>Result:</strong> Approved for beachside investment, capitalizing on tourism boom</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <motion.div className="mt-8">
          <Testimonial name="Success Story – Torquay Family">
            &quot;We wanted our dream home just 5 minutes from Bells Beach but had a $5,800 default from 2019. ACS removed it in 4 weeks, and we got approved at 3.1%. Now we&apos;re living the coastal dream with mortgage payments less than Melbourne rent.&quot; – Jake & Emma T.
          </Testimonial>
          <Testimonial name="Success Story – Warrnambool Entrepreneur">
            &quot;My whale watching business needed new boats, but credit issues were blocking everything. ACS cleaned my file in 5 weeks – now I&apos;ve got two new vessels and bookings through next summer. Business is booming!&quot; – Sarah M.
          </Testimonial>
          <Testimonial name="Success Story – Hamilton Farmer">
            &quot;Wool prices were down, cash flow was tight, and an old default was blocking equipment finance. ACS removed it in 6 weeks – now I&apos;ve upgraded my shearing shed and productivity is up 30%.&quot; – Michael R.
          </Testimonial>
        </motion.div>
      </Section>

      {/* Why Choose Us */}
      <Section title="Great Ocean Road Tourism Finance Solutions">
        <p className="text-slate-700 mb-6">
          The Great Ocean Road generates $1.3 billion annually. Bad credit shouldn&apos;t stop you from joining this success.
        </p>
        
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-blue mb-4">Why Tourism Finance Gets Rejected</h3>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Seasonal income patterns:</strong> Peak summer/holiday periods</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Complex business models:</strong> Accommodation, tours, hospitality combinations</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Equipment intensive:</strong> Boats, buses, kitchen equipment, accommodation fit-outs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Credit sensitivity:</strong> Tourism lenders particularly strict about defaults</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-blue mb-4">Great Ocean Road Business Success Stories</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-slate-700">
                  <strong>Apollo Bay Accommodation Success:</strong> &quot;Wanted to expand our B&B but a $4,500 default was blocking all finance applications. ACS removed it in 6 weeks. Now we&apos;ve got 4 more rooms and bookings are solid through 2025.&quot; – David & Linda K.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-slate-700">
                  <strong>Port Campbell Tour Business Victory:</strong> &quot;My helicopter tour business needed finance for a second aircraft, but late payments from COVID were killing applications. ACS cleaned my file in 7 weeks. Now I&apos;ve got two choppers and the Great Ocean Road views are paying off big time!&quot; – Marcus T.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-slate-700">
                  <strong>Port Fairy Restaurant Expansion:</strong> &quot;Heritage restaurant needed kitchen upgrade but credit issues blocked equipment finance. ACS removed multiple entries in 8 weeks. New kitchen installed, reviews are amazing, profits up 40%.&quot; – Giuseppe & Maria C.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Service Options / Pricing */}
      <Section title="Why Western Victoria Trusts ACS">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-blue mb-4">Award-Winning Coastal Service</h3>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">✓</span>
                <span>Industry Excellence Awards 2022, 2023, 2024</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">✓</span>
                <span>Only credit repair company to win 3 consecutive years</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">✓</span>
                <span>Recognised for innovation, results, and client satisfaction</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">✓</span>
                <span>Endorsed by tourism and agricultural professionals across western Victoria</span>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-blue mb-4 mt-6">Western Victoria Expertise</h3>
            <p className="text-sm text-slate-700 mb-3">Deep understanding of western Victoria&apos;s economic landscape:</p>
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">•</span>
                <span>Tourism and hospitality seasonal finance requirements</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">•</span>
                <span>Agricultural and livestock lending patterns</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">•</span>
                <span>Coastal property investment strategies</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">•</span>
                <span>Regional manufacturing and processing finance</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-blue mb-4">No Win No Fee Promise</h3>
            <p className="text-sm text-slate-700 mb-3">We only get paid when you get results:</p>
            <div className="space-y-2 text-sm text-slate-700 mb-6">
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>One-off admin fee: $330 (applies regardless of outcome)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>No ongoing monthly charges</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>No hidden costs or surprise bills</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Success fee only charged when defaults are removed</span>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-blue mb-4">Western Victoria Client Reviews</h3>
            <div className="space-y-3">
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="flex text-orange-500 text-xs mb-1">
                  ★★★★★
                </div>
                <p className="text-xs text-slate-700">
                  <strong>&quot;Perfect for coastal lifestyle dreams&quot;</strong> &quot;Moving from Melbourne to Lorne seemed impossible with bad credit. ACS removed two defaults in 7 weeks. Now we&apos;re living 200m from the beach and mortgage is less than our old Melbourne rent!&quot; – Amanda & Chris, Lorne
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="flex text-orange-500 text-xs mb-1">
                  ★★★★★
                </div>
                <p className="text-xs text-slate-700">
                  <strong>&quot;They get tourism business challenges&quot;</strong> &quot;As a Great Ocean Road accommodation provider, my income is seasonal and complex. ACS understood this perfectly and fixed my credit file in 6 weeks. Equipment finance approved, business expanding.&quot; – Rebecca S., Apollo Bay
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="flex text-orange-500 text-xs mb-1">
                  ★★★★★
                </div>
                <p className="text-xs text-slate-700">
                  <strong>&quot;Outstanding service for regional clients&quot;</strong> &quot;I was worried about getting good service in Warrnambool. ACS proved me wrong – professional, fast, and got results. Three defaults removed, business loan approved.&quot; – Peter M., Warrnambool
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Outcomes */}
      <Section title="Western Victoria Service Areas & Local Expertise">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-blue mb-3">Greater Geelong & Bellarine Peninsula</h3>
              <p className="text-sm text-slate-600 mb-2">Victoria&apos;s second-largest city and gateway to coastal lifestyle</p>
              <p className="text-sm font-medium mb-2">Geelong | Torquay | Anglesea | Drysdale | Portarlington | Queenscliff | Ocean Grove</p>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-sm font-medium text-blue mb-2">Geelong region expertise:</p>
                <ul className="text-xs space-y-1">
                  <li>• Waterfront property investments</li>
                  <li>• Manufacturing transition opportunities</li>
                  <li>• University and healthcare sector lending</li>
                  <li>• Marine industry and port-related businesses</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue mb-3">Surf Coast & Great Ocean Road</h3>
              <p className="text-sm text-slate-600 mb-2">Australia&apos;s most iconic coastal tourism destination</p>
              <p className="text-sm font-medium mb-2">Torquay | Anglesea | Lorne | Apollo Bay | Port Campbell | Warrnambool</p>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-sm font-medium text-blue mb-2">Coastal specialisation:</p>
                <ul className="text-xs space-y-1">
                  <li>• Tourism accommodation and hospitality</li>
                  <li>• Marine equipment and boat finance</li>
                  <li>• Coastal property and holiday rentals</li>
                  <li>• Surf industry and retail businesses</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-blue mb-3">Western Districts & Agricultural Region</h3>
              <p className="text-sm text-slate-600 mb-2">Victoria&apos;s premier agricultural and livestock region</p>
              <p className="text-sm font-medium mb-2">Hamilton | Horsham | Ararat | Stawell | Colac | Camperdown</p>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-sm font-medium text-blue mb-2">Agricultural focus:</p>
                <ul className="text-xs space-y-1">
                  <li>• Livestock and wool industry finance</li>
                  <li>• Agricultural equipment and machinery</li>
                  <li>• Rural property and farm investments</li>
                  <li>• Processing and value-adding facilities</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue mb-3">Portland & South West Coast</h3>
              <p className="text-sm text-slate-600 mb-2">Industrial port and pristine coastal communities</p>
              <p className="text-sm font-medium mb-2">Portland | Port Fairy | Nelson | Casterton | Heywood</p>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-sm font-medium text-blue mb-2">South west expertise:</p>
                <ul className="text-xs space-y-1">
                  <li>• Industrial and port-related businesses</li>
                  <li>• Fishing and aquaculture industry</li>
                  <li>• Coastal tourism and accommodation</li>
                  <li>• Agricultural processing and logistics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Legal Rights / Education */}
      <Section title="Get Started Today - Western Victoria Credit Repair">
        <div className="mb-8">
          <p className="text-slate-700 mb-4">
            Don&apos;t let bad credit hold you back from western Victoria&apos;s opportunities. Every month you wait:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span>Coastal property prices continue rising rapidly</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span>Tourism season opportunities pass you by</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span>Interest rates may increase, costing thousands more</span>
              </div>
            </div>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span>Other buyers with better credit get the properties you want</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span>Business expansion plans remain on hold</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-blue mb-4">Take Action Now - Free Assessment for Western Victoria</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-lg font-semibold text-blue mb-2">📞 Call Western Victoria Direct: 0489 265 737</p>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Same-day assessment for Geelong, Warrnambool, Great Ocean Road residents</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Priority handling for urgent tourism and agricultural finance</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>No obligation, completely confidential</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Award-winning specialists with 98% success rate</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/free-credit-assessment"
                className="w-full rounded-lg bg-blue px-6 py-3 font-semibold text-white text-center hover:bg-blue-700 transition-colors"
              >
                Start My Free Credit Assessment
              </Link>
              <a
                href="tel:+61489265737"
                className="w-full rounded-lg border-2 border-blue px-6 py-3 font-semibold text-blue text-center hover:bg-blue hover:text-white transition-colors"
              >
                Call Now: 0489 265 737
              </a>
              <button className="w-full rounded-lg bg-green-600 px-6 py-3 font-semibold text-white text-center hover:bg-green-700 transition-colors">
                Live Chat - Western Victoria Team
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Common Questions About Credit Enquiry Removal">
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
                {f.answer}
              </p>
            </motion.details>
          ))}
        </motion.div>
      </Section>

      {/* Cost of keeping enquiries */}
      <Section title="About Australian Credit Solutions - Western Victoria">
        <div className="mb-6">
          <p className="text-slate-700 mb-4">
            Proudly helping western Victorian residents achieve financial freedom since 2018.
          </p>
          <p className="text-slate-700 mb-6">
            We understand that western Victoria offers unique lifestyle and business opportunities – from the
            booming Geelong economy to Great Ocean Road tourism, from Surf Coast property investments to
            western districts agricultural prosperity. Bad credit shouldn&apos;t prevent you from capitalizing on these
            opportunities.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-blue mb-4">Our Western Victoria Commitment:</h3>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">✓</span>
                <span>Same premium service from Geelong to Portland</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">✓</span>
                <span>Understanding of tourism, agriculture, and coastal finance</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">✓</span>
                <span>No travel required – everything handled remotely</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">✓</span>
                <span>Fast-track service for urgent seasonal business needs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">✓</span>
                <span>Licensed, professional, and award-winning team</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-blue mb-4">Contact Our Western Victoria Team Today:</h3>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">📞</span>
                <span><strong>Phone:</strong> 0489 265 737</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">✉️</span>
                <span><strong>Email:</strong> help@australiancreditsolutions.com.au</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">🌐</span>
                <span><strong>Web:</strong> australiancreditsolutions.com.au/geelong-warrnambool</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue font-bold">⭐</span>
                <span><strong>Reviews:</strong> 4.9/5 stars from 855+ satisfied clients</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm font-medium text-blue mb-2">ASIC Licensed ACL 532003 | Industry Excellence Awards 2022, 2023, 2024</p>
              <p className="text-xs text-slate-700">
                Don&apos;t let bad credit stop you from living the western Victoria lifestyle you deserve. From Geelong&apos;s waterfront opportunities to Great Ocean Road tourism success, we&apos;re here to help you achieve your financial goals.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Getting Started CTA - This section is now integrated above */}

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

function PriceCard({
  name,
  timeline,
  perfectFor,
  includes,
  featured = false,
}) {
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
      <div className="mt-4 flex items-end justify-between">
       
        <Link
          href="/free-credit-assessment"
          className="rounded-lg bg-blue px-4 py-2 font-semibold text-white hover:bg-blue transition-colors text-sm"
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