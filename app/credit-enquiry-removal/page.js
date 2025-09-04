// File: app/credit-enquiry-removal/page.jsx
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { useMemo } from "react";
import { motion } from "framer-motion";
import FooterForm from "@/components/FooterForm";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function CreditEnquiryRemovalPage() {
  // ===== JSON-LD (consolidated @graph) =====
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id":
            "https://www.australiancreditsolutions.com.au/credit-enquiry-removal",
          url: "https://www.australiancreditsolutions.com.au/credit-enquiry-removal",
          name: "Credit Enquiry Removal Australia | Remove Unauthorised Credit Checks | 98% Success Rate",
          description:
            "Remove unauthorised, duplicate and incorrect credit enquiries fast with Australia's specialists. Stop credit enquiries destroying your score and loan approvals.",
          datePublished: "2024-03-15",
          dateModified: "2025-09-04",
          inLanguage: "en-AU",
          isPartOf: {
            "@type": "WebSite",
            "@id": "https://www.australiancreditsolutions.com.au/#website",
            name: "Australian Credit Solutions",
            url: "https://www.australiancreditsolutions.com.au",
          },
          about: {
            "@type": "Thing",
            name: "Credit Enquiry Removal Services",
            description:
              "Professional service to remove unauthorised and duplicate credit enquiries from Australian credit files.",
          },
          mainEntity: {
            "@type": "Service",
            "@id":
              "https://www.australiancreditsolutions.com.au/credit-enquiry-removal#service",
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            "@id":
              "https://www.australiancreditsolutions.com.au/credit-enquiry-removal#breadcrumb",
          },
        },
        {
          "@type": "Organization",
          "@id": "https://www.australiancreditsolutions.com.au/#organization",
          name: "Australian Credit Solutions",
          legalName: "Australian Credit Solutions Pty Ltd",
          url: "https://www.australiancreditsolutions.com.au",
          logo: "https://www.australiancreditsolutions.com.au/images/acs-logo.png",
          image:
            "https://www.australiancreditsolutions.com.au/images/acs-office.jpg",
          description:
            "Award-winning Australian credit enquiry removal specialists helping Australians remove unauthorised credit checks and restore credit health.",
          telephone: "0489265737",
          email: "help@australiancreditsolutions.com.au",
          address: {
            "@type": "PostalAddress",
            addressCountry: "AU",
            addressRegion: "Australia",
          },
          sameAs: [
            "https://www.productreview.com.au/listings/australian-credit-solutions",
          ],
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "ASIC Australian Credit License",
            identifier: "532003",
            recognizedBy: {
              "@type": "Organization",
              name: "Australian Securities and Investments Commission",
              alternateName: "ASIC",
            },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "855",
            bestRating: "5",
            worstRating: "1",
          },
          award: [
            {
              "@type": "Award",
              name: "Industry Excellence Award 2024",
              description:
                "Recognized for outstanding credit enquiry removal services and client satisfaction",
              dateReceived: "2024-01-15",
            },
            {
              "@type": "Award",
              name: "Industry Excellence Award 2023",
              description:
                "Award for exceptional results in credit enquiry dispute resolution",
              dateReceived: "2023-01-15",
            },
            {
              "@type": "Award",
              name: "Industry Excellence Award 2022",
              description:
                "Recognition for innovative credit enquiry removal methodologies",
              dateReceived: "2022-01-15",
            },
          ],
        },
        {
          "@type": "Service",
          "@id":
            "https://www.australiancreditsolutions.com.au/credit-enquiry-removal#service",
          name: "Credit Enquiry Removal Services Australia",
          description:
            "Professional credit enquiry removal services to remove unauthorised, duplicate, and incorrect enquiries across Equifax, Experian and Illion.",
          provider: {
            "@type": "Organization",
            "@id": "https://www.australiancreditsolutions.com.au/#organization",
          },
          areaServed: { "@type": "Country", name: "Australia" },
          serviceType: "Credit Enquiry Removal",
          category: "Financial Services",
          offers: [
            {
              "@type": "Offer",
              name: "Express Enquiry Removal - Urgent Cases",
              description:
                "Same-day assessment, priority processing for urgent finance needs. Timeline: 1-2 weeks typically.",
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "880",
                priceCurrency: "AUD",
                description: "Includes $330 administration fee",
              },
            },
            {
              "@type": "Offer",
              name: "Standard Enquiry Removal - Comprehensive Review",
              description:
                "Full audit, detailed challenge strategy with weekly reports. Timeline: 3-4 weeks typically.",
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "660",
                priceCurrency: "AUD",
                description: "Includes $330 administration fee",
              },
            },
            {
              "@type": "Offer",
              name: "Bulk Enquiry Package - Major File Cleanup",
              description:
                "Coordinated removal strategy for 10+ enquiries. Timeline: 4-6 weeks typically.",
              priceSpecification: {
                "@type": "PriceSpecification",
                description: "Custom quote based on enquiry count",
              },
            },
          ],
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Success Rate",
              value: "98% when we take cases",
            },
            {
              "@type": "PropertyValue",
              name: "License Number",
              value: "ASIC ACL 532003",
            },
            {
              "@type": "PropertyValue",
              name: "Service Coverage",
              value: "Australia-wide",
            },
            {
              "@type": "PropertyValue",
              name: "Policy",
              value: "No Win No Fee",
            },
            {
              "@type": "PropertyValue",
              name: "Specialisation",
              value: "Unauthorised and duplicate credit enquiry removal",
            },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How many enquiries are too many?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Generally more than 2-3 enquiries in 3 months starts impacting your score. More than 5-6 enquiries in 12 months seriously damages your profile.",
              },
            },
            {
              "@type": "Question",
              name: "Will removing enquiries improve my credit score immediately?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Score improvements typically show within 30-60 days of enquiry removal. The exact lift depends on how many are removed and your overall profile.",
              },
            },
            {
              "@type": "Question",
              name: "Can I remove credit enquiries myself?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can try, but success rates are low. Providers and bureaus receive thousands of DIY dispute letters; most fail due to procedural errors or insufficient evidence.",
              },
            },
            {
              "@type": "Question",
              name: "What if the enquiry was legitimate but hurt my score?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Legitimate enquiries made with proper consent usually can't be removed. However, many 'legitimate' enquiries have flaws that make them removable.",
              },
            },
            {
              "@type": "Question",
              name: "How long do enquiries stay on my file naturally?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Credit enquiries remain visible for 5 years in Australia. Their impact diminishes over time, with the heaviest effect in the first 12 months.",
              },
            },
            {
              "@type": "Question",
              name: "Will enquiry removal hurt my credit score?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. Removing incorrect or unauthorised enquiries helps your score; there is no negative impact from successful removal.",
              },
            },
            {
              "@type": "Question",
              name: "Can you remove all enquiries from my file?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No ethical company can guarantee removal of all enquiries. We only challenge those with legitimate grounds under Australian privacy law.",
              },
            },
            {
              "@type": "Question",
              name: "What types of enquiries can be removed?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We remove unauthorised, duplicate, procedurally incorrect and Privacy Act–violating enquiries, plus incorrect entries linked to wrong personal details.",
              },
            },
          ],
        },
        {
          "@type": "BreadcrumbList",
          "@id":
            "https://www.australiancreditsolutions.com.au/credit-enquiry-removal#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.australiancreditsolutions.com.au",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Credit Repair Services",
              item: "https://www.australiancreditsolutions.com.au/credit-repair-australia",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Credit Enquiry Removal",
              item: "https://www.australiancreditsolutions.com.au/credit-enquiry-removal",
            },
          ],
        },
        {
          "@type": "Review",
          itemReviewed: {
            "@type": "Organization",
            name: "Australian Credit Solutions",
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: { "@type": "Person", name: "James M" },
          datePublished: "2024-03-12",
          reviewBody:
            "Had 23 credit enquiries from a broker who shopped my application everywhere. ACS removed 19 of 23 enquiries and my score rebounded quickly.",
        },
        {
          "@type": "HowTo",
          name: "How to Get Credit Enquiries Removed",
          description:
            "Step-by-step process to remove unauthorised credit enquiries with Australian Credit Solutions",
          totalTime: "PT10M",
          supply: [
            {
              "@type": "HowToSupply",
              name: "Credit reports from all three bureaus",
            },
            { "@type": "HowToSupply", name: "Identity verification documents" },
            { "@type": "HowToSupply", name: "Evidence of unauthorised access" },
          ],
          step: [
            {
              "@type": "HowToStep",
              position: 1,
              name: "Free Phone Consultation",
              text: "Call 0489 265 737 to discuss your enquiry situation and identify removal opportunities.",
              url: "https://www.australiancreditsolutions.com.au/credit-enquiry-removal#consultation",
            },
            {
              "@type": "HowToStep",
              position: 2,
              name: "Complete Credit File Review",
              text: "We obtain reports from all three bureaus and conduct a detailed enquiry audit.",
              url: "https://www.australiancreditsolutions.com.au/credit-enquiry-removal#review",
            },
            {
              "@type": "HowToStep",
              position: 3,
              name: "Removal Strategy Presentation",
              text: "We present findings, explain which enquiries can be removed, and outline our approach.",
              url: "https://www.australiancreditsolutions.com.au/credit-enquiry-removal#strategy",
            },
            {
              "@type": "HowToStep",
              position: 4,
              name: "Professional Challenge Process",
              text: "We handle all enquiry challenges with regular progress updates throughout.",
              url: "https://www.australiancreditsolutions.com.au/credit-enquiry-removal#challenge",
            },
            {
              "@type": "HowToStep",
              position: 5,
              name: "Results & Score Monitoring",
              text: "We monitor your file until targeted enquiries are removed and provide ongoing protection guidance.",
              url: "https://www.australiancreditsolutions.com.au/credit-enquiry-removal#results",
            },
          ],
        },
        {
          "@type": "Article",
          "@id":
            "https://www.australiancreditsolutions.com.au/credit-enquiry-removal#article",
          headline:
            "Credit Enquiry Removal Australia: Complete Guide to Removing Unauthorised Credit Checks",
          description:
            "Comprehensive guide to removing unauthorised credit enquiries from your Australian credit file.",
          author: {
            "@type": "Organization",
            name: "Australian Credit Solutions",
            url: "https://www.australiancreditsolutions.com.au",
          },
          publisher: {
            "@type": "Organization",
            "@id": "https://www.australiancreditsolutions.com.au/#organization",
            name: "Australian Credit Solutions",
            logo: {
              "@type": "ImageObject",
              url: "https://www.australiancreditsolutions.com.au/images/acs-logo.png",
            },
          },
          datePublished: "2024-03-15",
          dateModified: "2025-09-04",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id":
              "https://www.australiancreditsolutions.com.au/credit-enquiry-removal",
          },
          articleSection: "Credit Repair",
          keywords: [
            "credit enquiry removal",
            "unauthorised credit checks",
            "credit score improvement",
            "Privacy Act 1988",
            "credit repair Australia",
          ],
          wordCount: 4200,
        },
      ],
    }),
    []
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-blue-200/20 -z-10" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:py-24">
          <div className="flex items-center gap-10">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl lg:text-5xl">
                Remove Credit Enquiries Fast{" "}
                <span className="text-blue">
                  | Australia's Leading Enquiry Removal Specialists
                </span>
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                Too many credit enquiries killing your score? We remove
                unauthorised, duplicate and incorrect enquiries professionally.{" "}
                <strong>98% success rate</strong> when we take your case.
                Licensed specialists, <strong>No Win No Fee</strong> policy.
              </p>
              <p className="mt-4 text-base text-slate-700">
                Multiple enquiries can slash your score by 100+ points and block
                approvals. Our award-winning team removes bad enquiries across
                Equifax, Experian and Illion — often within weeks, not years.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/free-credit-assessment"
                  className="inline-flex items-center rounded-xl bg-blue px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-blue hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Remove My Credit Enquiries Now
                </Link>
                <a
                  href="tel:+61489265737"
                  className="inline-flex items-center rounded-xl border-2 border-blue px-6 py-3 text-base font-semibold text-blue transition hover:bg-blue hover:text-white"
                >
                  Call 0489 265 737
                </a>
              </div>
              <ul className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
                <li className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue" />
                  98% success rate
                </li>
                <li className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue" />
                  No Win No Fee
                </li>
                <li className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue" />
                  Licensed & insured (ASIC ACL 532003)
                </li>
              </ul>
            </motion.div>

            {/* FooterForm with direct props */}
            <FooterForm
              heading="Get My Free Enquiry Assessment"
         
            />
          </div>
        </div>
      </section>

      {/* Opening Section */}
      <Section title="Your credit enquiries are quietly destroying your financial future">
        <p>
          Every time someone checks your credit — whether you applied or not —
          it gets recorded on your file. Too many enquiries signal "credit
          hungry" behaviour to lenders, leading to instant rejections.
        </p>
        <p className="mt-4">
          But here’s the truth: many enquiries shouldn’t be on your file at all.
          Unauthorised, duplicate, or consent‑less checks that breach the
          Privacy Act can be removed. Cleaning them up often boosts scores
          dramatically.
        </p>
        <p className="mt-4">
          Australian Credit Solutions specialises in enquiry removal nationwide.
          We’re award‑winning with a <strong>98% success rate</strong> when we
          accept cases. We only take matters when we’re confident of success —
          and we’ll tell you upfront if we can’t help.
        </p>
      </Section>

      {/* Impact Section */}
      <Section title="How credit enquiries destroy your credit score">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-2 grid gap-4 sm:grid-cols-2"
        >
          {[
            {
              h: "Immediate score impact",
              p: "Each hard enquiry can drop your score by 5–15 points. Clusters can slash 50–100+ points.",
            },
            {
              h: "Lender red flags",
              p: "Multiple enquiries trigger automated declines before a human ever reviews your application.",
            },
            {
              h: "The enquiry death spiral",
              p: "Rejections lead to more applications → more enquiries → more rejections.",
            },
            {
              h: "Different types hit differently",
              p: "Credit card enquiries hit hardest; personal loans moderate; home loan shopping can still hurt when repeated; car finance often creates clusters.",
            },
            {
              h: "Time doesn’t heal all wounds",
              p: "Enquiries stay visible for 5 years. The opportunity cost of waiting is huge.",
            },
          ].map((item) => (
            <motion.li
              key={item.h}
              variants={fadeIn}
              className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="font-semibold text-blue">{item.h}</h3>
              <p className="mt-2 text-sm text-slate-700">{item.p}</p>
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      {/* What We Remove */}
      <Section title="What credit enquiries we can remove from your file">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card
            title="Unauthorised enquiries"
            bullets={[
              "Employers checking credit without permission",
              "Identity theft applications",
              "Marketing enquiries you never applied for",
              "Ex‑partners applying using your details",
            ]}
          />
          <Card
            title="Duplicate enquiries"
            bullets={[
              "One application appearing multiple times",
              "Broker submissions duplicated across lenders",
              "System errors creating identical enquiries",
              "Refinance enquiries duplicating existing records",
            ]}
          />
          <Card
            title="Procedurally incorrect enquiries"
            bullets={[
              "No proper consent documentation",
              "Checks after application withdrawal",
              "Unlicensed provider checks",
              "Enquiries exceeding authorised scope",
            ]}
          />
          <Card
            title="Privacy Act violations"
            bullets={[
              "No legitimate business need",
              "Retained beyond legal timeframes",
              "Cross‑referencing without authorisation",
              "Sharing enquiry data without consent",
            ]}
          />
          <Card
            title="Incorrect information enquiries"
            bullets={[
              "Wrong DOB or address causing mixed files",
              "Name variations linking to another person",
              "Outdated information still referenced",
            ]}
          />
          <Card
            title="Post‑settlement enquiries"
            bullets={[
              "Mortgage checks after settlement",
              "Credit card checks after cancellation",
              "Personal loan checks after full repayment",
              "Ongoing monitoring after relationship ended",
            ]}
          />
        </motion.div>
      </Section>

      {/* Process */}
      <Section title="Our professional credit enquiry removal process">
        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4 text-slate-700"
        >
          {[
            {
              title: "Complete enquiry audit",
              description:
                "We obtain Equifax, Experian and Illion reports to identify every enquiry, duplicates and suspicious patterns, missing consent and procedural violations.",
            },
            {
              title: "Legal assessment & strategy",
              description:
                "We assess each enquiry against the Privacy Act 1988, Credit Reporting Code, AFCA guidance, industry procedures and limitation periods.",
            },
            {
              title: "Professional challenge process",
              description:
                "Legally structured letters with evidence, direct provider engagement, escalation protocols and rigorous follow‑ups.",
            },
            {
              title: "Monitoring & score recovery",
              description:
                "Removals often occur in batches. We track bureau updates and score improvements as entries disappear.",
            },
            {
              title: "Prevention strategy",
              description:
                "Protect your file with enquiry alerts and guidance on minimising score impact for legitimate applications.",
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

      {/* Success Stories */}
      <Section title="Success stories: real results from enquiry removal">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Testimonial name="James — Melbourne IT Manager">
            "Had 23 credit enquiries from a broker who shopped my home loan
            everywhere. ACS removed 19 in 5 weeks. Score +127 points; home loan
            approved at 0.3% below standard."
          </Testimonial>
          <Testimonial name="Rebecca — Brisbane Marketing Executive">
            "Identity theft left 8 unauthorised enquiries. Police report alone
            wasn’t enough. ACS got all 8 wiped in 3 weeks. Score jumped 420 →
            720."
          </Testimonial>
          <Testimonial name="Michael — Perth Tradie">
            "Lender ran my credit 4 times by mistake. Other lenders assumed
            desperation. ACS removed duplicates in 10 days; equipment finance
            approved."
          </Testimonial>
          <Testimonial name="Sarah — Sydney Teacher">
            "Car dealership ran 6 separate enquiries for quotes. ACS removed 5
            of 6. Score improved by 89 points in a month."
          </Testimonial>
        </motion.div>
      </Section>

      {/* Why Choose Us */}
      <Section title="Why choose Australian Credit Solutions for enquiry removal">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {[
            "Specialists in enquiry removal — nuanced legal and procedural expertise.",
            "98% success rate when we take cases — selective, honest and accountable.",
            "No Win No Fee — $330 admin fee; success fees only if we win.",
            "Three consecutive industry awards (2022–2024).",
            "Licensed and regulated (ASIC ACL 532003) with professional indemnity insurance.",
            "Australia‑wide service; same standards from Darwin to Hobart.",
            "Direct expert communication — no offshore call centres.",
            "Fast turnarounds — unauthorised enquiries often removed quickly once challenged properly.",
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

      {/* Service Options / Pricing */}
      <Section title="Our credit enquiry removal service options">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <PriceCard
            name="Express Enquiry Removal — Urgent"
            timeline="1–2 weeks typically"
            perfectFor="Home loan pre‑approvals, urgent finance"
            includes={[
              "Same‑day assessment",
              "Priority processing",
              "Daily updates",
            ]}
            price="$880"
          />
          <PriceCard
            name="Standard Enquiry Removal — Comprehensive"
            timeline="3–4 weeks typically"
            perfectFor="Multiple enquiries, complex cases"
            includes={[
              "Full audit across 3 bureaus",
              "Detailed challenge strategy",
              "Weekly reports",
            ]}
            price="$660"
            featured
          />
          <PriceCard
            name="Bulk Enquiry Package — Major Cleanup"
            timeline="4–6 weeks typically"
            perfectFor="10+ enquiries, broker damage, identity theft"
            includes={[
              "Coordinated removal strategy",
              "Bulk processing efficiencies",
              "Score tracking",
            ]}
            price="Custom"
          />
        </motion.div>
        <div className="mt-6 rounded-xl border border-dashed border-blue-300 bg-blue-50 p-4 text-sm text-slate-600">
          <strong>Enquiry Prevention Package — Ongoing Protection:</strong>{" "}
          Immediate setup + 12 months monitoring. Custom quote based on
          requirements.
          <br />
          <em>All services include our No Win No Fee guarantee.</em>
        </div>
      </Section>

      {/* Outcomes */}
      <Section title="What happens after your enquiries are removed">
        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {[
            "Credit scores often improve within 30–60 days.",
            "Automated approval systems stop auto‑declining you.",
            "Better interest rates and access to prime products.",
            "Home, car, personal and business finance become accessible again.",
            "Broker relationships restored; more competitive options open up.",
            "Eligibility for premium rewards credit cards improves.",
            "Business finance opportunities expand with clean personal files.",
          ].map((t) => (
            <motion.li
              key={t}
              variants={fadeIn}
              className="rounded-xl border border-blue-100 bg-white p-4 text-sm text-slate-700 shadow-sm transition-all hover:shadow-md"
            >
              {t}
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      {/* Legal Rights / Education */}
      <Section title="Understanding your rights: Privacy Act & credit enquiries">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-2 space-y-4 text-slate-700"
        >
          {[
            "Providers must have clear, informed, documented consent, limited to the product being assessed.",
            "You can challenge incorrect, unauthorised or improperly recorded enquiries.",
            "Bureaus must respond within 30 days (or 7 days if you're seeking credit within 60 days).",
            "If you suffered financial loss from unauthorised enquiries, you may be entitled to compensation.",
            "Escalate unresolved disputes to AFCA at no cost.",
          ].map((text, index) => (
            <motion.p
              key={index}
              variants={fadeIn}
              className="flex items-start gap-2"
            >
              <svg
                className="h-5 w-5 shrink-0 text-orange mt-0.5"
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
              {text}
            </motion.p>
          ))}
        </motion.div>
      </Section>

      {/* FAQs */}
      <Section title="Common questions about credit enquiry removal">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 space-y-4"
        >
          {faqData.map((f) => (
            <motion.details
              key={f.q}
              variants={fadeIn}
              className="group rounded-xl border border-blue-100 bg-white p-4 shadow-sm transition-all hover:shadow-md"
            >
              <summary className="cursor-pointer select-none font-semibold text-blue group-open:text-blue flex items-center justify-between">
                <span>{f.q}</span>
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
                {f.a}
              </p>
            </motion.details>
          ))}
        </motion.div>
      </Section>

      {/* Hidden Costs / Quantifying Impact */}
      <Section title="The hidden cost of keeping bad enquiries">
        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <h3 className="font-semibold text-blue">
              Quantifying the financial impact
            </h3>
            {[
              "Home loans: best ~6.2% vs premium ~7.5%+; on $500k, the gap can cost ~$162,500 over 30 years.",
              "Credit cards: clean history → premium rewards & higher limits; enquiry overload → basic cards, low limits, higher fees.",
              "Car finance: good enquiry profile ~5.9% vs dealer finance 12.9%+; +$6,800 interest on $40k over 5 years.",
              "Employment & rentals: financial roles and competitive rentals may screen out high‑enquiry applicants.",
              "Business finance: clean personal enquiries help unlock loans, equipment finance and trade credit.",
            ].map((text, i) => (
              <p key={i} className="flex items-start gap-2">
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
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
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
              Your two choices
            </h3>
            <ul className="mt-3 space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
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
                Wait up to 5 years while paying premium rates and facing
                rejections.
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
                Fix it professionally in weeks with experts who do this every
                day.
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/free-credit-assessment"
                className="rounded-lg bg-blue px-5 py-3 font-semibold text-white hover:bg-blue transition-colors"
              >
                Start My Assessment
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

      {/* Getting Started CTA */}
      <Section title="Getting started: your free enquiry assessment">
        <ol className="mt-4 space-y-3 text-slate-700">
          {[
            "Free phone consultation (10 minutes) — call 0489 265 737.",
            "Complete credit file review — detailed audit across all three bureaus.",
            "Removal strategy presentation — which enquiries can be removed and timelines.",
            "Professional challenge process — we handle everything and keep you updated.",
            "Results delivery & score monitoring — protect against future unauthorised access.",
          ].map((step, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold text-sm">
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/free-credit-assessment"
            className="rounded-lg bg-blue px-6 py-3 font-semibold text-white hover:bg-blue transition-colors"
          >
            Book My Free Assessment
          </Link>
          <a
            href="tel:+61489265737"
            className="rounded-lg border-2 border-blue px-6 py-3 font-semibold text-blue hover:bg-blue hover:text-white transition-colors"
          >
            Call 0489 265 737
          </a>
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

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
  price,
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
        <div className="text-2xl font-extrabold text-slate-900">{price}</div>
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

const faqData = [
  {
    q: "How many enquiries are too many?",
    a: "Generally more than 2–3 enquiries in 3 months starts impacting your score. More than 5–6 in 12 months seriously damages your profile.",
  },
  {
    q: "Will removing enquiries improve my score immediately?",
    a: "Improvements typically appear within 30–60 days of removal. The lift depends on how many are removed and your overall profile.",
  },
  {
    q: "Can I remove enquiries myself?",
    a: "You can try, but providers and bureaus receive thousands of DIY letters; most fail due to procedural errors or lack of evidence. We structure legal challenges with proof.",
  },
  {
    q: "What if the enquiry was legitimate?",
    a: "Legitimate enquiries with proper consent usually can’t be removed. However, many ‘legit’ entries contain flaws (consent, scope, timing) that make removal possible.",
  },
  {
    q: "How long do enquiries stay on file?",
    a: "Five years in Australia. Impact is heaviest in the first 12 months, but opportunity costs stack up if you wait.",
  },
  {
    q: "Will removal hurt my score?",
    a: "No — removing incorrect/unauthorised enquiries only helps.",
  },
  {
    q: "Can you remove all enquiries?",
    a: "No ethical firm guarantees complete removal. We only challenge entries with legitimate grounds under Australian privacy law.",
  },
  {
    q: "What evidence do you need?",
    a: "Consent documents, application records, provider correspondence, and ID verification — varies by case.",
  },
];
