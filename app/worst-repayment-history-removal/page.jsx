"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { useMemo } from "react";
import { motion } from "framer-motion";
import FooterForm from "@/components/FooterForm";
import ArrowIcon from "../assets/arrow.png";
import ArrowIconM from "../assets/arrowm.png";
import Image from "next/image";

export default function RHIRemovalPage() {
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.australiancreditsolutions.com.au/rhi-removal",
          url: "https://www.australiancreditsolutions.com.au/rhi-removal",
          name: "RHI Removal Australia | Remove Repayment History Information | 98% Success Rate",
          description: "Remove RHI (Repayment History Information) from your credit report with Australia's specialists. Professional RHI removal services with 98% success rate.",
          datePublished: "2024-12-15",
          dateModified: "2024-12-15",
          inLanguage: "en-AU",
          isPartOf: {
            "@type": "WebSite",
            "@id": "https://www.australiancreditsolutions.com.au/#website",
            name: "Australian Credit Solutions",
            url: "https://www.australiancreditsolutions.com.au",
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            "@id": "https://www.australiancreditsolutions.com.au/rhi-removal#breadcrumb",
          },
          about: {
            "@type": "Thing",
            name: "RHI Removal Services",
            description: "Professional service to remove Repayment History Information from Australian credit files.",
          },
          mainEntity: {
            "@type": "Service",
            "@id": "https://www.australiancreditsolutions.com.au/rhi-removal#service",
          },
        },
        {
          "@type": "Organization",
          "@id": "https://www.australiancreditsolutions.com.au/#organization",
          name: "Australian Credit Solutions",
          legalName: "Australian Credit Solutions Pty Ltd",
          url: "https://www.australiancreditsolutions.com.au",
          logo: "https://www.australiancreditsolutions.com.au/images/acs-logo.png",
          image: "https://www.australiancreditsolutions.com.au/images/acs-office.jpg",
          description: "Award-winning Australian RHI removal specialists helping Australians remove incorrect repayment history information and restore credit.",
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
        },
        {
          "@type": "Service",
          "@id": "https://www.australiancreditsolutions.com.au/rhi-removal#service",
          name: "RHI Removal Services Australia",
          description: "Professional RHI removal services to remove incorrect Repayment History Information from credit files.",
          provider: {
            "@type": "Organization",
            "@id": "https://www.australiancreditsolutions.com.au/#organization",
          },
          areaServed: { "@type": "Country", name: "Australia" },
          serviceType: "RHI Removal",
          category: "Credit Repair Services",
          offers: [
            {
              "@type": "Offer",
              name: "Standard RHI Removal",
              description: "Complete RHI removal process with professional assistance.",
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "880",
                priceCurrency: "AUD",
                description: "Includes $330 administration fee",
              },
            },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is RHI (Repayment History Information)?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "RHI stands for Repayment History Information and shows how you've managed your credit accounts over the past 24 months, including payment history and account status.",
              },
            },
            {
              "@type": "Question",
              name: "Can RHI be removed from my credit file?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, incorrect or outdated RHI can be removed from your credit file through professional credit repair services.",
              },
            },
          ],
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.australiancreditsolutions.com.au/rhi-removal#breadcrumb",
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
              name: "RHI Removal",
              item: "https://www.australiancreditsolutions.com.au/rhi-removal",
            },
          ],
        },
      ],
    }),
    []
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-8 lg:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-start">
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Remove RHI from Credit Report
                <span className="block mt-2 text-blue">
                  Australia&apos;s Leading RHI Removal Specialists
                </span>
              </h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Repayment History Information (RHI) damaging your credit score? We remove incorrect and outdated RHI professionally.{" "}
                  <strong className="font-semibold text-blue">
                    98% success rate
                  </strong>{" "}
                  when we take your case. Licensed specialists,{" "}
                  <strong className="font-semibold text-blue">
                    No Win No Fee
                  </strong>{" "}
                  policy.
                </p>

                <p className="text-base text-gray-600">
                  RHI can significantly impact your credit score and loan approvals. Our award-winning team removes bad RHI across Equifax, Experian and Illion — often within weeks, not years.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-8 relative flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center" role="group" aria-label="Primary actions">
                <Link
                  href="/free-credit-assessment"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Remove My RHI Now
                </Link>

                <a
                  href="tel:+61489265737"
                  aria-label="Call Australian Credit Solutions on 0489 265 737"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-blue px-6 py-3 text-base font-semibold text-blue transition hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Call 0489 265 737
                </a>

                {/* Decorative arrow */}
                <div className="pointer-events-none hidden lg:block" aria-hidden="true">
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
                <div className="pointer-events-none lg:hidden flex justify-center" aria-hidden="true">
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
              <FooterForm
                heading="Get My Free RHI Assessment"
                subheading="Fast & Confidential"
                paragraph="Find out if your RHI can be removed – free, fast, and confidential."
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
      </section>

      {/* Opening Section */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold tracking-tight text-blue sm:text-3xl">
          What is RHI and Why It's Damaging Your Credit
        </h2>
        <div className="mt-4 text-base leading-relaxed text-slate-800">
          <p>
            RHI stands for Repayment History Information, and it's one of the most critical factors affecting your credit score. Unlike traditional credit information that shows your current account status, RHI provides a detailed 24-month history of how you've managed your credit accounts, including payment patterns, account status changes, and financial behavior.
          </p>
          <p className="mt-4">
            The problem is that RHI can contain outdated, incorrect, or misleading information that doesn't reflect your current financial situation. Maybe you had a difficult period a year ago, but you've since recovered and are managing your finances responsibly. However, that old RHI is still dragging down your credit score and affecting your ability to get approved for loans, credit cards, and even rental applications.
          </p>
          <p className="mt-4">
            Australian Credit Solutions specialises in RHI removal across Australia. We're award-winning specialists with a 98% success rate when we take cases. We identify incorrect, outdated, or improperly reported RHI and work with credit bureaus to have it removed from your credit file.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold tracking-tight text-blue sm:text-3xl">
          How RHI is Destroying Your Credit Score
        </h2>
        <div className="mt-4 text-base leading-relaxed text-slate-800">
          <ul className="mt-2 grid gap-4 sm:grid-cols-2">
            {[
              {
                h: "Your Credit Score Gets Severely Impacted",
                p: "RHI can drop your credit score by 50–150 points depending on the severity and duration of the negative information.",
              },
              {
                h: "Loan Applications Get Rejected",
                p: "Lenders see negative RHI as a red flag, often resulting in automatic rejections regardless of your current financial situation.",
              },
              {
                h: "Higher Interest Rates",
                p: "Even if approved, negative RHI leads to higher interest rates, costing you thousands in additional interest payments.",
              },
              {
                h: "Rental Applications Fail",
                p: "Many landlords check credit reports and reject applicants with negative RHI, limiting your housing options.",
              },
              {
                h: "Employment Opportunities Affected",
                p: "Some employers check credit reports and may reject candidates with poor RHI, especially in financial services.",
              },
              {
                h: "Insurance Premiums Increase",
                p: "Insurance companies use credit information to set rates, and negative RHI can result in higher premiums.",
              },
            ].map((item) => (
              <li
                key={item.h}
                className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm transition-all hover:shadow-md"
              >
                <h3 className="font-semibold text-blue">{item.h}</h3>
                <p className="mt-2 text-sm text-slate-700">{item.p}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What We Remove */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold tracking-tight text-blue sm:text-3xl">
          What RHI We Can Remove from Your Credit File
        </h2>
        <div className="mt-4 text-base leading-relaxed text-slate-800">
          <p className="text-slate-700">
            <strong>Important Note:</strong> We can only remove RHI that is incorrect, outdated, or improperly reported. We cannot remove accurate, current RHI that reflects your actual payment history.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Incorrect Payment History",
                bullets: [
                  "Payments marked as late when they were actually on time",
                  "Incorrect payment amounts recorded",
                  "Payments applied to wrong accounts",
                  "Duplicate payment entries",
                ],
              },
              {
                title: "Outdated Account Status",
                bullets: [
                  "Accounts showing as open when they're closed",
                  "Outdated balance information",
                  "Incorrect account opening dates",
                  "Wrong account types listed",
                ],
              },
              {
                title: "Identity Theft Issues",
                bullets: [
                  "Accounts opened fraudulently in your name",
                  "Payment history from identity theft",
                  "Incorrect personal information",
                  "Mixed credit files",
                ],
              },
              {
                title: "Reporting Errors",
                bullets: [
                  "Incorrect reporting by creditors",
                  "Credit bureau processing errors",
                  "Data transmission problems",
                  "System glitches and errors",
                ],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-blue">{item.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {item.bullets.map((b) => (
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold tracking-tight text-blue sm:text-3xl">
          Our Proven RHI Removal Process
        </h2>
        <div className="mt-4 text-base leading-relaxed text-slate-800">
          <ol className="mt-4 space-y-4 text-slate-700">
            {[
              {
                title: "Comprehensive RHI Analysis",
                description: "We obtain your complete credit file from all three major bureaus (Equifax, Experian, Illion) and analyze your RHI for errors and inconsistencies.",
              },
              {
                title: "Error Identification",
                description: "Our experts identify incorrect, outdated, or improperly reported RHI that can be challenged and removed.",
              },
              {
                title: "Evidence Compilation",
                description: "We gather supporting documentation, payment records, and correspondence to support your case for RHI removal.",
              },
              {
                title: "Credit Bureau Challenges",
                description: "We file formal disputes with credit bureaus, providing evidence and legal arguments for RHI removal.",
              },
              {
                title: "Creditor Negotiations",
                description: "When necessary, we work directly with creditors to correct inaccurate RHI reporting.",
              },
              {
                title: "Follow-up and Monitoring",
                description: "We monitor the progress of your disputes and ensure all corrections are properly implemented.",
              },
            ].map((step, index) => (
              <li key={index} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue font-bold">
                  {index + 1}
                </div>
                <div>
                  <strong>{step.title}:</strong> {step.description}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Success Stories */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold tracking-tight text-blue sm:text-3xl">
          Success Stories: Real Australians Who Had RHI Removed
        </h2>
        <div className="mt-4 text-base leading-relaxed text-slate-800">
          {[
            {
              name: "Sarah from Brisbane – Teacher with Incorrect RHI",
              quote: "Had incorrect late payment RHI from a credit card I never used... ACS proved the error and got it removed. My credit score jumped from 580 to 720 in just 6 weeks.",
            },
            {
              name: "Michael from Perth – Small Business Owner",
              quote: "RHI showed my business account as personal debt... ACS worked with the bank to correct this. Home loan approved within 2 months.",
            },
            {
              name: "Lisa from Adelaide – Nurse with Identity Theft",
              quote: "Identity theft created false RHI entries... ACS got them all removed. Credit back to excellent and car finance approved.",
            },
          ].map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md mb-4"
            >
              <div className="flex text-orange-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-slate-700">{testimonial.quote}</blockquote>
              <figcaption className="mt-3 text-sm font-semibold text-blue">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold tracking-tight text-blue sm:text-3xl">
          Why Choose Us for RHI Removal
        </h2>
        <div className="mt-4 text-base leading-relaxed text-slate-800">
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              "We specialise specifically in RHI removal and credit repair – not general financial services.",
              "98% success rate when we take cases – we're selective and honest about what we can achieve.",
              "No Win, No Fee protection – $330 admin fee, success fees only if we win.",
              "Three years of industry awards (2022–2024) for results others can't deliver.",
              "Licensed and regulated (ASIC ACL 532003) with professional indemnity insurance.",
              "National coverage across all Australian credit bureaus and financial institutions.",
              "We don't give up – we use multiple strategies until we find the path that works.",
            ].map((t) => (
              <li
                key={t}
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
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service Options */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold tracking-tight text-blue sm:text-3xl">
          Our RHI Removal Service Options
        </h2>
        <div className="mt-4 text-base leading-relaxed text-slate-800">
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Standard RHI Removal",
                timeline: "4–8 weeks typically",
                perfectFor: "Most RHI removal cases",
                includes: [
                  "Complete credit file analysis",
                  "Error identification",
                  "Credit bureau disputes",
                  "Creditor negotiations",
                ],
                price: "$880",
                featured: true,
              },
              {
                name: "Complex RHI Removal",
                timeline: "8–12 weeks typically",
                perfectFor: "Multiple errors or identity theft",
                includes: [
                  "Extended investigation",
                  "Multiple bureau disputes",
                  "Legal documentation",
                  "Ongoing monitoring",
                ],
                price: "$1,320",
                featured: false,
              },
              {
                name: "Emergency RHI Removal",
                timeline: "2–4 weeks typically",
                perfectFor: "Urgent loan applications",
                includes: [
                  "Priority processing",
                  "Expedited disputes",
                  "Daily updates",
                  "Rush service",
                ],
                price: "$1,650",
                featured: false,
              },
            ].map((service) => (
              <div
                key={service.name}
                className={`relative rounded-xl border p-6 h-full flex flex-col ${
                  service.featured
                    ? "border-blue-300 bg-gradient-to-b from-blue-50 to-white shadow-lg"
                    : "border-blue-100 bg-white shadow-sm"
                }`}
              >
                {service.featured && (
                  <span className="absolute -top-3 left-6 inline-block rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white shadow">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-blue">{service.name}</h3>
                <p className="mt-1 text-sm text-slate-600">Timeline: {service.timeline}</p>
                <p className="mt-1 text-sm text-slate-600">Perfect for: {service.perfectFor}</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700 flex-grow">
                  {service.includes.map((i) => (
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
                  <div className="text-2xl font-extrabold text-slate-900">{service.price}</div>
                  <Link
                    href="/free-credit-assessment"
                    className="rounded-lg bg-blue px-4 py-2 font-semibold text-white hover:bg-blue transition-colors text-sm"
                  >
                    Start Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-dashed border-blue-300 bg-blue-50 p-4 text-sm text-slate-600">
            <strong>All services include our No Win No Fee guarantee.</strong>
            <br />
            <em>Admin fee: $330. Success fees only apply if we successfully remove RHI.</em>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold tracking-tight text-blue sm:text-3xl">
          Common Questions About RHI Removal
        </h2>
        <div className="mt-4 text-base leading-relaxed text-slate-800">
          <div className="mt-4 space-y-4">
            {[
              {
                q: "What is RHI (Repayment History Information)?",
                a: "RHI stands for Repayment History Information and shows how you've managed your credit accounts over the past 24 months, including payment history, account status, and financial behavior patterns.",
              },
              {
                q: "Can RHI be removed from my credit file?",
                a: "Yes, incorrect, outdated, or improperly reported RHI can be removed from your credit file through professional credit repair services. We cannot remove accurate RHI that reflects your actual payment history.",
              },
              {
                q: "How long does RHI removal take?",
                a: "Standard RHI removal typically takes 4-8 weeks. Complex cases may take 8-12 weeks. We offer emergency services for urgent situations that can be completed in 2-4 weeks.",
              },
              {
                q: "What types of RHI errors can be removed?",
                a: "We can remove incorrect payment history, outdated account status, identity theft issues, reporting errors, duplicate entries, and mixed credit file problems.",
              },
              {
                q: "How much does RHI removal cost?",
                a: "Our standard RHI removal service costs $880 (includes $330 admin fee). Complex cases are $1,320, and emergency services are $1,650. All services include our No Win No Fee guarantee.",
              },
              {
                q: "Will removing RHI improve my credit score?",
                a: "Yes, removing incorrect or outdated RHI can significantly improve your credit score. We've seen improvements of 50-150 points in many cases, depending on the severity of the negative information.",
              },
              {
                q: "Do I need to provide documentation?",
                a: "Yes, we'll help you gather supporting documentation including payment records, correspondence with creditors, and any evidence that supports your case for RHI removal.",
              },
              {
                q: "What happens if the RHI removal fails?",
                a: "With our No Win No Fee policy, you only pay the $330 admin fee. If we're unsuccessful in removing the RHI, you don't pay any success fees. We're honest about what we can achieve and only take cases where we believe we can succeed.",
              },
            ].map((f) => (
              <details
                key={f.q}
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
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold tracking-tight text-blue sm:text-3xl">
          Getting Started: Your Free RHI Assessment
        </h2>
        <div className="mt-4 text-base leading-relaxed text-slate-800">
          <ol className="mt-4 space-y-3 text-slate-700">
            {[
              "Confidential phone discussion (20 minutes) — call 0489 265 737.",
              "Complete RHI investigation — full credit file analysis from all bureaus.",
              "Error identification & strategy — determine what RHI can be removed.",
              "Professional removal process — we handle all disputes and negotiations.",
              "Credit file cleanup & monitoring — ensure all corrections are implemented.",
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
        </div>
      </section>

      {/* Internal Linking Blocks */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold tracking-tight text-blue sm:text-3xl">
          Recommended Services & Resources
        </h2>
        <div className="mt-4 text-base leading-relaxed text-slate-800">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-base font-semibold text-blue">Primary Service Links</h3>
              <nav className="mt-2 space-y-2 text-sm">
                <Link href="/credit-repair-australia" className="underline">Credit Repair Australia</Link><br />
                <Link href="/default-removal" className="underline">Default Removal Services</Link><br />
                <Link href="/late-payment-removal" className="underline">Late Payment Removal</Link><br />
                <Link href="/credit-enquiry-removal" className="underline">Credit Enquiry Removal</Link><br />
                <Link href="/court-judgment-removal" className="underline">Court Judgment Removal</Link><br />
                <Link href="/credit-file-cleanup" className="underline">Credit File Clean-Up</Link>
              </nav>
            </div>
            <div>
              <h3 className="text-base font-semibold text-blue">RHI Specific Links</h3>
              <nav className="mt-2 space-y-2 text-sm">
                <Link href="/remove-incorrect-rhi-credit-report" className="underline">Remove Incorrect RHI</Link><br />
                <Link href="/rhi-dispute-australia" className="underline">RHI Dispute Australia</Link><br />
                <Link href="/repayment-history-removal" className="underline">Repayment History Removal</Link><br />
                <Link href="/credit-payment-history-cleanup" className="underline">Payment History Cleanup</Link><br />
                <Link href="/rhi-credit-repair" className="underline">RHI Credit Repair</Link>
              </nav>
            </div>
            <div>
              <h3 className="text-base font-semibold text-blue">Location-Based Links</h3>
              <nav className="mt-2 space-y-2 text-sm">
                <Link href="/credit-repair-sydney" className="underline">RHI Removal Sydney</Link><br />
                <Link href="/credit-repair-melbourne" className="underline">RHI Removal Melbourne</Link><br />
                <Link href="/credit-repair-brisbane" className="underline">RHI Removal Brisbane</Link><br />
                <Link href="/credit-repair-perth" className="underline">RHI Removal Perth</Link><br />
                <Link href="/credit-repair-adelaide" className="underline">RHI Removal Adelaide</Link>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Footer trust bar */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-2xl bg-gradient-to-r from-blue to-blue p-6 text-white shadow-lg">
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
        </div>
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
