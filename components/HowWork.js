import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  FileText,
  Users,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const HowWorks = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-blue mb-6">
              Personalized Credit Repair Services
            </h1>
            <p className="text-lg text-blue mb-8">
              Our Company comprises a dedicated team of professionals
              well-versed in credit scoring and comprehensive solutions. Our
              expertise lies in enhancing credit scores and rectifying financial
              matters. Partnering with us means receiving a personalized credit
              improvement plan, meticulously crafted to align with your
              financial objectives.
            </p>
            <div className="bg-gradient-to-br from-white to-blue-100 rounded-xl shadow-lg p-6 border border-blue-300">
              <h3 className="text-xl font-semibold text-blue mb-4">
                We&apos;re Here to Help
              </h3>
              <p className="text-blue-700 mb-4">
                Looking to fix your credit and get finance quickly? Contact us
                or fill out the form to get started.
              </p>
              <Link href="/free-credit-assessment">
                <button className="bg-blue hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center transition-all">
                  Free Credit Assessment <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-100 rounded-xl shadow-lg overflow-hidden border border-blue-300">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-blue mb-6">
                Start Rebuilding Your Future Now
              </h2>
              <p className="text-blue mb-6">
                Claim your free Credit Repair Consultation
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block text-base font-medium text-blue-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-blue-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-blue-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <Link href="meeting-schedule">
                  <button
                    type="submit"
                    className="w-full bg-blue hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all"
                  >
                    GET HELP NOW
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-blue rounded-2xl py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How to Get Started
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-blue mb-3">
                Contact Us
              </h3>
              <p className="text-blue-700">
                Simply fill out our Credit Assessment form and schedule a
                meeting with our Credit Repair Specialist.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-blue mb-3">
                Credit Report Analysis
              </h3>
              <p className="text-blue-700">
                Get a free copy of your Credit File from Equifax or we can
                organize a premium report for you.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-blue mb-3">
                Discuss Your Options
              </h3>
              <p className="text-blue-700">
                We&apos;ll give you all the information you need to know where you
                stand and how we can help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
