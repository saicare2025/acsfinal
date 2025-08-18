// app/page.js
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/components/homepage";
import CompanyCarousel from "@/components/homepage/CompanySection";
import HeroSection from "@/components/homepage/HeroSection3";
import TestimonialSection from "@/components/homepage/ScrollTestimonials";
import VideoServicesSection from "@/components/homepage/VideoServicesSection";
import HowWorks from "@/components/HowWork";
import Link from "next/link";

// ✅ SEO Metadata for Perth Credit Repair

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <VideoServicesSection />
     <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    {/* Main Heading */}
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-[#0668a5] mb-4">
        Truths About Credit Reports And Credit Scores
      </h2>
      <div className="w-24 h-1 bg-[#0668a5] mb-6"></div>
    </div>

    {/* Introduction */}
    <div className="mb-8 space-y-4 text-gray-700">
      <p>
        A credit score (&apos;credit rating&apos;) is a number that influences whether or not a person can get a loan, an apartment, insurance, phone service - regardless of who they are and what their income might be. Essentially it&apos;s based on your statistical probability of meeting your debt obligations in the past by making on-time payments and not defaulting on loans. In other words, it&apos;s an expression of how risky it is to lend to you, given our knowledge of you over the years.
      </p>
      <p>
        But having a bad credit can affect you. A person with a bad credit history will have a difficult time getting a loan, especially at standard interest rates, because they are considered a more significant risk than other potential borrowers. This is true for all kinds of loans, with the exception of debt consolidation loans, which have various choices available to borrowers with bad credit. Home loans for those with bad credit are one such alternative.
      </p>
    </div>

    {/* Bad Credit Score Definition */}
    <div className="mb-8 bg-blue-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-[#0668a5] mb-4">
        What Is A Bad Credit Score?
      </h3>
      <p className="mb-4">
        Let&apos;s look at three of the biggest credit agencies in Australia that provide credit reporting services and what they consider a terrible or low credit score.
      </p>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <span className="bg-[#0668a5] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
          <div>
            <p>
              A score of 0 to 505 is considered &quot;below average&quot; by Equifax. This implies that you&apos;re in the lowest 20% of credit-active people, and you&apos;re more likely than the average to have a credit-related problem in the following 12 months. A score of 506 to 665 implies that an adverse event is as likely to occur in the next 12 months for someone in that group as it is for the general population.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <span className="bg-[#0668a5] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
          <div>
            <p>
              A score of 0 to 549 is regarded as &quot;below average,&quot; while 550 to 624 is considered &quot;fair&quot; by Experian.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <span className="bg-[#0668a5] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
          <div>
            <p>
              A &apos;zero&apos; score is possible for Illion, 1 to 299 is deemed &apos;Low,&apos; and 300 to 499 is referred to as &apos;Room for Improvement.&apos;
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Get Free Credit Report */}
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-[#0668a5] mb-4">
        Get A Free Credit Report
      </h3>
      <p className="mb-4">
        Get a free credit report. You have one free report every twelve months from each bureau - Contact all three agencies with a written request as more than likely they contain different information that could be important for you to review like some utility or medical bills that creditors had defaulted on and were never brought up to date on before the agency took over those items after they lost it bond. Too many people neglect doing this and end up paying equally as much as if not more on their monthly expenses.
      </p>
    </div>

    {/* Check For Errors */}
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-[#0668a5] mb-4">
        Check For Errors
      </h3>
      <p className="mb-4">
        Mistakes such as account closures or false information may be caused by incorrect input of personal details, an incorrectly matched social security number, a misread handwriting signature, and even misspelled words. A simple mistake like including the letter &quot;O&quot; instead of the letter &quot;I&quot; in a person&apos;s name could deprive them or their family members from much-needed funding and considerably affect their lives without a timely credit fix in Perth.
      </p>
      <p>
        Australian Credit Solutions can help people to remove mistakes from their history, which records how they handle borrowing money to meet emergencies and pay for big purchases over time. If an error is found on your record, it needs to be corrected as soon as possible.
      </p>
    </div>

    {/* Pay Bills On Time */}
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-[#0668a5] mb-4">
        Paying your bills on time
      </h3>
      <p className="mb-4">
        Don&apos;t pay bills late. Closely related, pay all of your monthly payments on time. Late and missed payments will show up on a credit report and lower a credit score.
      </p>
      <p className="mb-4">
        Avoid opening too many cards or taking out several high-balance loans at the same time. It is likewise wise to keep the amount owed each month below 30% of what you make, which should provide enough breathing room in case finances get tight for any reason.
      </p>
      <p>
        Build a history of responsible borrowing by only applying for new lines of credit when needed and paying them off gradually rather than maxing out one card after another or living beyond your means to handle things financially without going into debt again soon after cutbacks have been made to.
      </p>
    </div>

    {/* Monitor Credit Scores */}
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-[#0668a5] mb-4">
        Monitor Your Credit Scores Yearly To See Where You Stand
      </h3>
      <p className="mb-4">
        Regular credit checks are a smart method to keep track of what information is being reported about you. And they are integral to any credit fixing service in Perth.
      </p>
      <p className="mb-4">
        The following are a handful of the most compelling reasons:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>Identity Theft</li>
        <li>Credit Rating Misuse</li>
        <li>Over-Reporting of Debts</li>
      </ul>
      <p className="mb-4">
        Credit rating abuse can lead to a lower score and a higher interest rate on your loans. Over-reported debts could mean that you&apos;re going into default on obligations that are already paid off or won&apos;t affect your rating.
      </p>
      <p>
        Keep a watch out for any changes on your credit reports, and contact the firm if they don&apos;t appear as expected!
      </p>
    </div>

    {/* Unsecured Debts */}
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-[#0668a5] mb-4">
        Get A Handle On Any Unsecured Debts You May Have
      </h3>
      <p className="mb-4">
        Take for example the case of Enzo, who owes $20k on his credit card and $3k on his car loan. This doesn&apos;t sound like too much money at first, but what if he also has two kids in primary school?
      </p>
      <p className="mb-4">
        Now calculating annual living expenses looks like this:
      </p>
      <ul className="list-disc pl-5 space-y-1 mb-4">
        <li>Child Care - $8000;</li>
        <li>Electricity - $1800;</li>
        <li>Gas - $1200;</li>
        <li>Groceries - 3000;</li>
        <li>Clothes - 3000;</li>
        <li>Internet (home) - $450;</li>
      </ul>
      <p className="mb-4">
        Throw in another eight months of wages for savings ($10K) and what you&apos;ve got is a disaster waiting to happen.
      </p>
      <p>
        An Australian Credit Lawyer can assist you if you are having trouble making unsecured debt repayments as well as help you fix your credit rating in Perth.
      </p>
    </div>

    {/* Loan Advice */}
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-[#0668a5] mb-4">
        Don&apos;t Take Out Too Many Loans At One Time
      </h3>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>consolidate debt with low rates and fees</li>
        <li>Get better deals for utilities like gas or electricity</li>
        <li>Be careful about taking out loans that can&apos;t be paid back at once</li>
      </ul>
      <p className="mb-4">
        Keep your balance below 50% of what is offered, such as balances on student or personal loans, car loans or mortgage.
        For most people, it&apos;s best to keep your balance under 50%. That way, you&apos;ll stay on top of the cash flow and never overspend with credit.
      </p>
      <p className="mb-4">
        If your balance gets too high, creditors might think there&apos;s something wrong with you and either increase your interest rate or lower the credit limit. They might even ask for collateral or stop issuing you new cards.
      </p>
      <p>
        It can be tough to stay below 50% with an empty bank account that perpetually needs its funds replenished, but again... Australian Credit Solutions are here to help! We offer many excellent specials including plan-ahead loans so you can meet expenses in advance. Call us today! Laws are all we do!
      </p>
    </div>

    {/* Help Section */}
    <div className="bg-gradient-to-r from-[#0668a5] to-[#0aa6e8] text-white p-8 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">
        How Can I Ask For Help To Fix My Credit In Perth
      </h3>
      <div className="space-y-4">
        <p>
          Why is it important to ask for help from a credit repair company? The simple answer is because credit repair companies know everything about the law and about how to change bad or negative items on your credit report. You might think that after a certain amount of time, these nasty items will disappear from your report by themselves, but they&apos;re not likely to go away on their own. In fact, many people don&apos;t realize that when you pay off an overdue account in full -- which can be done automatically through some types of loans -- the removal process doesn&apos;t always take place automatically. This is why it&apos;s so important to let an expert handle a credit fix in Perth for you. It is in their best interest for you to have a good score!
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
