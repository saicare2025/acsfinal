import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

export default function CTASection() {
  return (
    <section className="w-full bg-blue py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Take Control of Your Credit Today
        </h2>
        <p className="text-blue-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
          Whether you need a free assessment, expert advice, or immediate help with credit repair, 
          we&apos;re ready to assist you every step of the way.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Free Credit Assessment Button */}
          <div className="bg-white p-1 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-200">
            <div className="bg-white rounded-lg p-6 h-full flex flex-col items-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <DocumentTextIcon className="w-8 h-8 text-blue" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Free Credit Assessment</h3>
              <p className="text-gray-600 text-base mb-4">Get your personalized credit evaluation</p>
              <Link 
                href="/free-credit-assessment" 
                className="mt-auto w-full bg-blue hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Start Now
              </Link>
            </div>
          </div>

          {/* Call Us Button */}
          <div className="bg-white p-1 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-200">
            <div className="bg-white rounded-lg p-6 h-full flex flex-col items-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <PhoneIcon className="w-8 h-8 text-blue" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Call Our Experts</h3>
              <p className="text-gray-600 text-base mb-4">Speak directly with a credit specialist</p>
              <a
                href="tel:0489265737"
                className="mt-auto w-full bg-blue hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                0489 265 737
              </a>
            </div>
          </div>

          
        </div>

        <p className="text-blue-100 mt-12 text-base">
          Prefer to message? <Link href="/contact-us" className="underline hover:text-white font-medium">Contact us online</Link>
        </p>
      </div>
    </section>
  );
}