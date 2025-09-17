import Link from "next/link";
import { PhoneIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

export default function CTASection() {
  return (
    <section id="start-today" className="w-full lg:py-16 py-8 bg-gradient-to-b from-blue-50 to-blue-100 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Start Your{" "}
          <span className="bg-blue bg-clip-text text-transparent">
            Credit Repair Today
          </span>
        </h2>
        <div className="mb-6 space-y-2">
          <h3 className="text-xl font-semibold text-blue-800">Book a Free Credit Assessment</h3>
          <h3 className="text-xl font-semibold text-blue-800">Speak with a Credit Repair Specialist</h3>
        </div>
        <p className="text-blue-700 text-lg sm:text-xl mb-10 max-w-3xl mx-auto">
          Whether you need a free assessment, expert advice, or immediate help with credit repair, 
          we&apos;re ready to assist you every step of the way.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Credit Assessment Button */}
          <div className="bg-gradient-to-b from-white to-blue-50 p-1 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-blue-100">
            <div className="bg-white rounded-xl p-6 h-full flex flex-col items-center">
              <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 mb-4">
                <DocumentTextIcon className="w-8 h-8 text-blue" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Free Credit Assessment</h3>
              <p className="text-blue-700 text-base mb-4">Get your personalized credit evaluation</p>
              <Link 
                href="/free-credit-assessment" 
                className="mt-auto w-full bg-gradient-to-r from-blue to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-4 rounded-lg transition-all"
              >
                Start Now
              </Link>
            </div>
          </div>

          {/* Call Us Button */}
          <div className="bg-gradient-to-b from-white to-blue-50 p-1 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-blue-100">
            <div className="bg-white rounded-xl p-6 h-full flex flex-col items-center">
              <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 mb-4">
                <PhoneIcon className="w-8 h-8 text-blue" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Call Our Experts</h3>
              <p className="text-blue-700 text-base mb-4">Speak directly with a credit specialist</p>
              <a
                href="tel:0489265737"
                className="mt-auto w-full bg-gradient-to-r from-blue to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-4 rounded-lg transition-all"
              >
                0489 265 737
              </a>
            </div>
          </div>
        </div>

        <p className="text-blue-700 mt-12 text-base">
          Prefer to message? <Link href="/contact-us" className="underline hover:text-blue-900 font-medium transition-colors">Contact us online</Link>
        </p>
      </div>
    </section>
  );
}