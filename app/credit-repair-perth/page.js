// app/page.js
"use client";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomePage from "../../components/homepage";
import CompanyCarousel from "../../components/homepage/CompanySection";
import HeroSection from "../../components/homepage/HeroSection3";
import TestimonialSection from "../../components/homepage/ScrollTestimonials";
import VideoServicesSection from "../../components/homepage/VideoServicesSection";
import HowWorks from "../../components/HowWork";
import Link from "next/link";
import { generateMinimalStructuredData } from "../../utils/generateMinimalStructuredData";
import ReviewsWidget from "@/components/homepage/Testmonials";

// ✅ SEO Metadata for Perth Credit Repair

export default function Home() {
  // Generate structured data for this service page
  const structuredData = generateMinimalStructuredData({
    pathname: "/credit-repair-perth",
    title: "Perth Credit Repair Experts | Australian Credit Solutions",
    description: "Professional credit repair services in Perth. Remove defaults, correct credit reports, and improve your credit score with Perth's trusted credit repair experts.",
    isService: true,
    serviceType: "Credit Repair Services Perth"
  });
  return (
    <main className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <Header />
      <HeroSection />
      <ReviewsWidget/>
      <VideoServicesSection />
      <section className="bg-gradient-to-b from-blue via-blue/90 to-blue/80 text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 lg:py-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Perth Credit Repair
          </div>
          <h1 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Credit Repair Perth — Start Fresh with a Local, Trusted Team
          </h1>
          <p className="mt-4 text-sm text-blue-100">
            <strong className="font-semibold">Last updated:</strong> August 20,
            2025
          </p>
          <p className="mt-6 max-w-3xl text-lg text-blue-100">
            If past bills, unexpected life events, or simple mistakes have left
            a mark on your credit report, you’re not alone. Many Perth residents
            come to us feeling stuck — and leave with a clear plan. At{" "}
            <strong>Australian Credit Solutions</strong>, we carefully review
            your credit files, challenge incorrect or unfair listings, and guide
            you step‑by‑step to a healthier credit profile.
          </p>
          <p className="mt-3 max-w-3xl text-blue-100">
            We believe everyone deserves a fair go and a genuine second chance.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 lg:py-16">
          <h2 className="text-2xl font-semibold text-blue-900">
            Why Perth Residents Choose Us
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Local insight",
                body: "We work with clients across Perth and WA, so we understand the day‑to‑day realities behind credit issues.",
              },
              {
                title: "Straight talk, no pressure",
                body: "We explain your options in plain English and outline realistic next steps.",
              },
              {
                title: "Privacy and respect",
                body: "Your information is handled with care under the Australian Privacy Principles.",
              },
              {
                title: "Clear process",
                body: "We document what we’ll do, why we’re doing it, and how you’ll hear updates.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6 shadow-sm shadow-blue-100 transition hover:shadow-md"
              >
                <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/10 text-blue-700">
                  <span className="text-lg">★</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-blue/80">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-blue">
            From Joondalup to Mandurah, our goal is simple: help you move
            forward with clarity and confidence.
          </p>
        </div>
      </section>
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-5xl px-4 py-12 lg:py-16">
          <h2 className="text-2xl font-semibold text-blue-900">
            How We Help — Credit Repair in Perth
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900">
                1) Full Credit File Review
              </h3>
              <p className="mt-2 text-blue">
                We obtain your reports from{" "}
                <strong>Equifax, illion, and Experian</strong> and check every
                line for accuracy, timing, and compliance with the Credit
                Reporting Code.
              </p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900">
                2) Disputes &amp; Corrections
              </h3>
              <p className="mt-2 text-blue">
                If something looks wrong, unfair, or out of date, we prepare
                targeted disputes and work directly with the relevant credit
                provider or bureau to seek a correction or removal.
              </p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900">
                3) Practical Score Rebuild Plan
              </h3>
              <p className="mt-2 text-blue">
                Alongside disputes, we share practical steps you can take to
                build stronger credit habits over time — the things lenders like
                to see.
              </p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900">
                4) Updates You Can Rely On
              </h3>
              <p className="mt-2 text-blue">
                You’ll receive regular, plain‑language updates so you always
                know where things stand and what happens next.
              </p>
            </div>
          </div>

          <p className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
            <em>Important:</em> We don’t promise specific outcomes or approvals.
            We provide careful reviews, evidence‑based disputes, and genuine
            guidance that improves your position over time.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 lg:py-16">
          <h2 className="text-2xl font-semibold text-blue-900">
            Issues We Commonly See in Perth
          </h2>
          <ul className="mt-6 grid list-disc gap-3 pl-6 text-blue sm:grid-cols-2">
            <li>
              <strong>Defaults</strong> (e.g., utilities, telco, personal loans)
            </li>
            <li>
              <strong>Incorrect balances or dates</strong> on paid or closed
              accounts
            </li>
            <li>
              <strong>Identity mix‑ups</strong> or suspicious activity
            </li>
            <li>
              <strong>Judgments</strong> and historical listings that no longer
              meet reporting rules
            </li>
            <li>
              <strong>Simple reporting errors</strong> that slip through the
              cracks
            </li>
          </ul>
          <p className="mt-4 text-blue">
            If any of this sounds familiar, a calm, methodical review can make a
            real difference.
          </p>
        </div>
      </section>
      <section className="bg-gradient-to-b from-white to-blue-50">
        <div className="mx-auto max-w-5xl px-4 py-12 lg:py-16">
          <h2 className="text-2xl font-semibold text-blue-900">
            Our Perth Credit Repair Process — Step by Step
          </h2>
          <ol className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              {
                n: 1,
                title: "Free consultation",
                body: "A short conversation to understand your goals and explain how credit repair works in Australia.",
              },
              {
                n: 2,
                title: "File access & review",
                body: "We securely access your Equifax, illion, and Experian reports and highlight priority items.",
              },
              {
                n: 3,
                title: "Strategy & consent",
                body: "We outline what we’ll dispute and why; nothing proceeds without your go‑ahead.",
              },
              {
                n: 4,
                title: "Dispute management",
                body: "We prepare letters, evidence, and follow‑ups with bureaus and credit providers.",
              },
              {
                n: 5,
                title: "Progress updates",
                body: "You receive clear updates and timelines. We refine the plan as results come in.",
              },
              {
                n: 6,
                title: "Rebuild guidance",
                body: "You leave with practical habits and next steps to support future applications.",
              },
            ].map((s) => (
              <li
                key={s.n}
                className="relative rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
              >
                <div className="absolute -top-3 left-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
                  <span className="text-sm font-semibold">{s.n}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-blue-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-blue">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-blue">
            Timelines vary by case, but many clients first see movement within{" "}
            <strong>30–90 days</strong>. Complex matters can take longer, and
            we’ll set expectations upfront.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 lg:py-16">
          <h2 className="text-2xl font-semibold text-blue-900">
            Benefits of Repairing Your Credit
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Fairer finance options",
                body: "Avoid being held back by errors or outdated listings.",
              },
              {
                title: "Less stress",
                body: "Clarity and progress replace guesswork and worry.",
              },
              {
                title: "Stronger applications",
                body: "Better‑presented reports support future loan or rental applications.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-blue-900">
                  {b.title}
                </h3>
                <p className="mt-2 text-blue">{b.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-blue">
            Imagine applying with confidence — and knowing your report reflects
            the real story.
          </p>
        </div>
      </section>
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-5xl px-4 py-12 lg:py-16">
          <h2 className="text-2xl font-semibold text-blue-900">
            Frequently Asked Questions — Credit Repair Perth
          </h2>

          <div className="mt-6 space-y-6">
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900">
                How long does it take?
              </h3>
              <p className="mt-2 text-blue">
                Simple corrections can move quickly; others take more time
                depending on the credit provider and the evidence required. Many
                clients see initial progress within <strong>30–90 days</strong>.
              </p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900">
                Can you remove a default?
              </h3>
              <p className="mt-2 text-blue">
                If a listing is incorrect, unfair, or non‑compliant, we’ll seek
                a correction or removal. If it’s accurate and compliant, we
                focus on the best available alternatives and long‑term rebuild
                steps.
              </p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900">
                Is credit repair legal in Australia?
              </h3>
              <p className="mt-2 text-blue">
                Yes. We work within Australian law, the Credit Reporting Code,
                and guidance from the Office of the Australian Information
                Commissioner (OAIC).
              </p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900">
                What will it cost?
              </h3>
              <p className="mt-2 text-blue">
                Fees depend on the complexity of your matter. We explain costs
                before you decide, and there’s <strong>no charge</strong> for
                your initial consultation.
              </p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900">
                Will this guarantee loan approval?
              </h3>
              <p className="mt-2 text-blue">
                No legitimate service can guarantee approvals. Our role is to
                correct inaccuracies, present your information properly, and
                guide you toward stronger applications.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 lg:py-16">
          <h2 className="text-2xl font-semibold text-blue-900">
            Talk to a Perth Credit Repair Specialist
          </h2>
          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-sm">
            <p className="text-blue">
              Ready to take the next step? We’d love to listen, review your
              file, and map out a practical plan — at your pace.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="tel:0489265737"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700"
              >
                📞 Call <span className="ml-2 font-semibold">0489 265 737</span>
              </a>
              <span className="text-blue">
                💻 Or fill in the enquiry form on this page — it takes less than
                a minute.
              </span>
            </div>
            <p className="mt-3 font-medium text-blue-900">
              <strong>Free, no‑obligation consultation.</strong> Clear options.
              Respectful guidance.
            </p>
            <p className="mt-2 text-sm text-blue">
              <em>Disclaimer:</em> This page is general information, not
              financial advice. Outcomes vary based on the accuracy of listings,
              available evidence, and third‑party response times.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-5xl px-4 py-12 lg:py-16">
          <h2 className="text-2xl font-semibold text-blue-900">
            We Serve Perth‑Wide
          </h2>
          <p className="mt-2 text-blue">
            We provide credit repair services across Perth and surrounding
            areas:
          </p>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Joondalup",
              "Fremantle",
              "Rockingham",
              "Mandurah",
              "Canning Vale",
              "Morley",
              "Baldivis",
              "Midland",
              "Armadale",
              "Ellenbrook",
              "Clarkson",
              "Scarborough",
              "Subiaco",
              "Victoria Park",
              "South Perth",
              "Mount Lawley",
              "Kwinana",
              "Gosnells",
              "Wanneroo",
              "Leederville",
              "Belmont",
              "Applecross",
              "Osborne Park",
              "Nedlands",
              "Northbridge",
            ].map((suburb) => (
              <li key={suburb} className="">
                <span className="inline-block rounded-full border border-blue-200 bg-white px-3 py-1 text-sm text-blue shadow-sm">
                  {suburb}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-blue">
            If your suburb isn’t listed, we can still help — get in touch.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 lg:py-16">
          <h2 className="text-2xl font-semibold text-blue-900">
            Who We Are &amp; How We Work
          </h2>
          <p className="mt-4 text-blue">
            Australian Credit Solutions is an Australian‑owned team focused on
            careful reviews, respectful communication, and transparent steps you
            can track. Our specialists stay up to date with the Credit Reporting
            Code and privacy rules, and we’re happy to explain anything in plain
            English.
          </p>
          <p className="mt-3 text-blue">
            Prefer email first? No problem. Want a quick call to check if it’s
            worth proceeding? We’ll give you a straight answer.
          </p>
        </div>
      </section>

      <HowWorks />
      <section className="py-16 bg-gradient-to-b from-white to-blue-50 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-start mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How we{" "}
              <span className="bg-blue bg-clip-text text-transparent">
                can help you
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              We apply our expertise to help you understand and manage your
              credit profile.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Removing Incorrect Defaults */}
             <Link href="/credit-enquiry-removal-australia">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-[#0668a5] mb-3">
                  Removing Incorrect Defaults
                </h3>
                <p className="text-gray-700">
                  Our credit specialists can help remove defaults that were
                  incorrectly recorded on your credit file. These entries can be
                  challenged legally when not properly applied or verified.
                </p>
              </div>
            </Link>

            {/* Disputing Invalid Inquiries */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-[#0668a5] mb-3">
                Disputing Invalid Inquiries
              </h3>
              <p className="text-gray-700">
                Finance inquiries can be confusing and damaging if left
                unresolved. Our legal team provides expert advice and support to
                help dispute inaccurate or unauthorized credit inquiries.
              </p>
            </div>

            {/* Court Judgements */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-[#0668a5] mb-3">
                Court Judgements
              </h3>
              <p className="text-gray-700">
                If you’ve received a court judgment, our credit lawyers can
                assist in managing the outcome to avoid unnecessary fines,
                penalties, or potential foreclosure.
              </p>
            </div>

            {/* Worst Repayment History Disputes */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-[#0668a5] mb-3">
                Repayment History Disputes
              </h3>
              <p className="text-gray-700">
                We evaluate your repayment history for incorrect or harmful
                entries and work to resolve disputes—helping you build a strong
                foundation for future financial success.
              </p>
            </div>

            {/* Debt Negotiation */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-[#0668a5] mb-3">
                Debt Negotiation
              </h3>
              <p className="text-gray-700">
                Our team negotiates directly with creditors to reduce or
                restructure your debt. We aim to free you from financial stress
                and represent your interests in all negotiations.
              </p>
            </div>

            {/* Fixing Identity Theft */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-[#0668a5] mb-3">
                Fixing Identity Theft on Your Credit File
              </h3>
              <p className="text-gray-700">
                If your identity has been compromised, we’ll help you repair the
                damage and prevent future misuse. Regain control of your
                personal information and restore your credit profile.
              </p>
            </div>
          </div>

          {/* CTA */}
        </div>
      </section>
      <TestimonialSection />
      <CompanyCarousel />
      <section className="relative py-20 bg-gradient-to-b from-[#0668a5] to-[#0aa6e8] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Australian Credit Solutions?
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-[#0668a5] text-white text-xl font-bold py-2 px-6 rounded-full inline-block">
                #1 in Perth
              </div>
            </div>

            <p className="text-gray-700 text-lg mb-6">
              Australian Credit Solutions is the premier credit repair service
              in Perth because we deliver exceptional results. Our team
              specializes in removing judgments, bankruptcies, bad debts,
              defaults, and other negative listings to help you qualify for
              loans and financial services again.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-[#0668a5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-700">
                  Years of expertise handling all types of credit cases
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-[#0668a5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-700">
                  Nationwide service - we help clients across Australia
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-[#0668a5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-700">
                  Proven track record of successful credit repairs
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-[#0668a5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-700">
                  Outstanding customer service as our top priority
                </p>
              </div>
            </div>

            <p className="text-gray-700 hidden lg:block text-lg font-medium mb-8">
              Above all else, your satisfaction means everything to us! You
              won&apos;t regret choosing Australian Credit Solutions for fast,
              effective results that get you back on track financially.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* Call Button 1 */}
              <a
                href="tel:0489265737"
                className="bg-white border-2 border-[#0668a5] text-[#0668a5] hover:bg-blue-50 font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="text-center">
                  <div className="font-bold">0489 265 737</div>
                  <div className="text-xs">Credit Repair Helpline</div>
                </div>
              </a>

              {/* Call Button 2 */}
              <a
                href="tel:0489265737"
                className="bg-white border-2 border-[#0668a5] text-[#0668a5] hover:bg-blue-50 font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="text-center">
                  <div className="font-bold">0489 265 737</div>
                  <div className="text-xs">Direct Support</div>
                </div>
              </a>

              {/* Consultation Button */}
              <Link
                href="/meeting-schedule"
                className="bg-[#0668a5] hover:bg-[#05578a] text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
