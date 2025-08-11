"use client";

import Link from "next/link";
import Logo from "./Logo"; // Import your logo component

export default function Footer() {
  return (
    <footer className="bg-blue-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Contact Info */}
          <div className="space-y-4">
            <Logo className="h-10 w-auto text-blue-900" />
            <p className="text-sm text-gray-600">ABN 80 650 730 699</p>

            <div className="space-y-2">
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-blue-700 mr-2" />
                <a
                  href="tel:1300368302"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  1300 368 302
                </a>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-blue-700 mr-2" />
                <a
                  href="tel:0489265737"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  0489 265 737
                </a>
              </div>
              <div className="flex items-center">
                <MailIcon className="h-5 w-5 text-blue-700 mr-2" />
                <a
                  href="mailto:help@australiancreditsolutions.com.au"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  help@australiancreditsolutions.com.au
                </a>
              </div>
              <div className="flex items-start">
                <LocationIcon className="h-5 w-5 text-blue-700 mr-2 mt-0.5" />
                <address className="text-gray-700 not-italic">
                  Level 8, 805/220 Collins Street
                  <br />
                  Melbourne VIC 3000
                </address>
              </div>
            </div>
          </div>

          {/* Services by State */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              We provide services in all states:
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Adelaide",
                "Brisbane",
                "Canberra",
                "Darwin",
                "Hobart",
                "Melbourne",
                "Perth",
                "Sydney",
              ].map((city) => (
                <Link
                  key={city}
                  href={`/credit-quiz`}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Credit Repair {city}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Form */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Start rebuilding your Future Now with a Free Credit Repair
              Consultation
            </h3>
            <p className="text-gray-600 mb-4">
              To start the process simply fill out the form below to claim a
              free Credit Assessment worth $199.
            </p>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Link href="/meeting-schedule">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-md transition-all shadow-md"
                >
                  GET HELP NOW
                </button>
              </Link>
            </form>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t flex flex-col justify-center items-center gap-2 border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
              <Link
                href="/terms-conditions"
                className="text-gray-600 hover:text-blue-600 text-sm"
              >
                Terms and Conditions
              </Link>
              <Link
                href="/privacy-policy"
                className="text-gray-600 hover:text-blue-600 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/testimonials"
                className="text-gray-600 hover:text-blue-600 text-sm"
              >
                Testimonials
              </Link>
              <a
                href="/Complaints.pdf"
                download="Complaints.pdf"
                className="text-gray-600 hover:text-blue-600 text-sm"
              >
                Complaints Handling Policy
              </a>

              <Link
                href="/blogs"
                className="text-gray-600 hover:text-blue-600 text-sm"
              >
                Blogs
              </Link>
            </div>
          </div>
          <p className="text-gray-600 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Australian Credit Solutions
          </p>
          <p className="text-gray-500 text-xs text-center">
            Australian Credit Solutions specializes exclusively in credit repair
            services and does not provide legal advice. For any legal matters,
            please contact Fogarty Oliver and Rothschilds.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Icon components
function PhoneIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function LocationIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );
}
