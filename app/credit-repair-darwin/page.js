// app/page.js
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/components/homepage";
import CompanyCarousel from "@/components/homepage/CompanySection";
import HeroSection from "@/components/homepage/HeroSection4";
import TestimonialSection from "@/components/homepage/ScrollTestimonials";
import VideoServicesSection from "@/components/homepage/VideoServicesSection";
import HowWorks from "@/components/HowWork";
import Link from "next/link";

// ✅ SEO Metadata for Darwin Credit Repair

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <VideoServicesSection />
     <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    {/* Question 1 */}
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#0668a5] mb-4">
        Question #1: When is the best time to leverage a credit fixing service in Darwin?
      </h2>
      <div className="space-y-4 text-gray-700">
        <p>
          The majority of individuals ask this question. When do you know it&apos;s time to get your credit file fixed? The best time to fix your credit file is when you are in the process of applying for a loan.
        </p>
        <p>
          Another good time to get started is after any significant life event that affects your finances or if you&apos;re looking to change some behaviors and habits as part of a financial plan, such as making substantial investments or getting married. There are times when individuals require help dealing with aggressive debt collectors. Still, such situations should be evaluated individually by experts who can better analyze the situation and advise on what actions would be beneficial and suitable for these kinds of creditors/debtors. However, to repair it, you must first determine what is wrong with it.
        </p>
      </div>
    </div>

    {/* Question 2 */}
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#0668a5] mb-4">
        Question #2: What are some of the benefits of fixing a credit score fast in Darwin?
      </h2>
      <div className="space-y-4 text-gray-700">
        <p>
          Bad credit might have prevented you from renting an apartment, buying a car, getting a loan for college tuition, or finding a bank to offer you reasonable interest rates. It might have made it hard for you to get your gas furnace serviced, or if the power goes out, it may make it difficult for them to cut your electricity until they are sure that payment will be made on their end. So what are the benefits of fixing bad credit?
        </p>
        
        <h3 className="font-semibold mt-6 mb-3">
          Some of the benefits of fixing your credit fast in Darwin:
        </h3>
        <ul className="space-y-3 pl-5 list-disc">
          <li>You can upgrade car insurance rates to lower levels.</li>
          <li>Save money on interest rates with loans and mortgages after six months.</li>
          <li>Prices make big drops in numerous areas for your everyday needs, from groceries to cars.</li>
          <li>Get a rental ASAP, so you have a place to live while you work towards long-term solutions.</li>
          <li>Higher Scores Mean Saving Time - When you have higher credit scores, things will be easier for you in terms of getting loans, securing apartments or car loans, etc. Having these things will save time to jump through hoops to proceed with particular projects in life.</li>
        </ul>
      </div>
    </div>

    {/* Question 3 */}
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#0668a5] mb-4">
        Question #3: How do you fix a bad credit rating?
      </h2>
      <div className="space-y-4 text-gray-700">
        <p>
          Consistently making small payments on your debts will quickly increase the amount of money you owe. This is not good for your credit score because it will show a high debt-to-income ratio. And that&apos;s what you should never do in a desperate attempt to fix a credit score fast in Darwin.
        </p>
        <p>
          If you&apos;re behind on payments, there are options like debt consolidation or refinancing that might help get things back in order. A new credit card with a reduced interest rate may also be beneficial. If that&apos;s what has caused the problem, paying off balances on other cards (you only need one) and no more overspending will be all it takes to get out of trouble. The best way, of course, is to stay away from always spending beyond your means, no matter how tempting, but this doesn&apos;t mean cutting yourself off thoroughly - think twice.
        </p>
        
        <h3 className="font-semibold mt-6 mb-3">
          More tips for fixing your credit history and improving your financial situation:
        </h3>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <span className="bg-[#0668a5] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
            <p>
              Take a look at your credit report and note any mistakes and notify the credit bureau to correct those mistakes as those will negatively affect your credit score. Be aware of any bills not being reported -- account numbers, due date, etc.
            </p>
          </div>
          
          <div className="flex items-start">
            <span className="bg-[#0668a5] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
            <p>
              Reviewing late payments and unpaid accounts to set up payment plans for those accounts as, according to FICO models, they will be reflected as &apos;bad debts.&apos; Credit card companies may offer debt settlement or work out arrangements; however, these options should only be considered for extreme cases where carrying the debt burden is unmanageable. Consumers are subject to collections calls with no end in sight.
            </p>
          </div>
          
          <div className="flex items-start">
            <span className="bg-[#0668a5] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
            <div>
              <p>Practicing good financial habits such as:</p>
              <ul className="pl-5 mt-2 space-y-2 list-disc">
                <li>Paying your bills on time</li>
                <li>Avoiding credit card debt and,</li>
                <li>Having a savings account</li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-start">
            <span className="bg-[#0668a5] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">4</span>
            <p>
              Find a reputable debt negotiation company to help you out. Debt negotiation companies work with creditors to create a payment plan that&apos;s affordable and fair, and they negotiate on your behalf for favorable terms, so you don&apos;t have to take the hit yourself.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Question 4 */}
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#0668a5] mb-4">
        Question #4: What should I know before I ask a company to help fix my credit in Darwin?
      </h2>
      <div className="space-y-4 text-gray-700">
        <p>
          Make sure you know how to fix your credit report before you contact the company. If they ask questions about what&apos;s wrong, discuss your former debts and why those items were paid late or not at all. If they seem unclear, don&apos;t be afraid to walk them through what needs to be fixed with a credit report using an example from their online database as a guide.
        </p>
        <p>
          If they tell you that it will cost money for a consultation, see if the price is already shown on their website. This quote should be free because it helps future clients decide whether or not it is worth their time and money to hear the advice. Never spend anything until you talk with someone first.
        </p>
        
        <h3 className="font-semibold mt-6 mb-3">
          What makes our service stand out for your needs?
        </h3>
        <p>
          Australian Credit Solutions are considered the best credit fixing service in Darwin because they specialize in repairing credit, which other legal firms often overlook.
        </p>
        <p>
          While many law firms understand your situation, they may not have the knowledge or experience to offer a full-service recovery for you.
        </p>
        <p>
          Australian Credit Solutions have both knowledge and experience dealing with severe cases of credit abuse that other legal firms shy away from. This will give you the security that your particular case will receive maximum attention and individualized representation - no two cases are alike after all!
        </p>
      </div>
    </div>
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
                #1 in Darwin
              </div>
            </div>

            <p className="text-gray-700 text-lg mb-6">
              Australian Credit Solutions is the premier credit repair service
              in Darwin because we deliver exceptional results. Our team
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
