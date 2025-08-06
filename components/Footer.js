"use client";

import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import logo from "../app/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 w-full overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div className="w-full">
            <Link href="/" className="flex items-center gap-2 mb-6 w-full">
              <Image
                src={logo}
                alt="Australian Credit Solutions Logo"
                width={180}
                height={50}
                priority
                className="h-auto max-w-[180px] w-auto"
              />
            </Link>
            <p className="text-blue-900 mb-6 text-sm sm:text-base">
              Australia’s trusted credit repair specialists. We help you restore your credit rating quickly, professionally, and securely.
            </p>
            <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg w-full">
              <ShieldCheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue" />
              <span className="font-medium text-sm sm:text-base text-blue-900">
                100% Secure & Confidential
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-blue-900">
              <ArrowRightIcon className="w-5 h-5 text-blue-500" />
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/our-service"
                  className="text-blue-900 hover:text-blue-700 transition-colors flex items-center gap-2 text-sm sm:text-base"
                >
                  Our Service
                </Link>
              </li>
              <li>
                <Link
                  href="/credit-score"
                  className="text-blue-900 hover:text-blue-700 transition-colors flex items-center gap-2 text-sm sm:text-base"
                >
                  Credit Score Check
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-blue-900 hover:text-blue-700 transition-colors flex items-center gap-2 text-sm sm:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-blue-900 hover:text-blue-700 transition-colors flex items-center gap-2 text-sm sm:text-base"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-blue-900 hover:text-blue-700 transition-colors flex items-center gap-2 text-sm sm:text-base"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-blue-900 hover:text-blue-700 transition-colors flex items-center gap-2 text-sm sm:text-base"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-blue-900">
              <PhoneIcon className="w-5 h-5 text-blue-500" />
              Contact Us
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5" />
                <a
                  href="tel:1300368302"
                  className="hover:text-blue-700 transition-colors block text-sm sm:text-base text-blue-900"
                >
                  1300 368 302
                </a>
              </li>
              <li className="flex items-start gap-3">
                <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5" />
                <a
                  href="mailto:help@australiancreditsolutions.com.au"
                  className="hover:text-blue-700 transition-colors text-sm sm:text-base text-blue-900"
                >
                  help@australiancreditsolutions.com.au
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5" />
                <span className="text-blue-900 text-sm sm:text-base">
                  Sydney, NSW, Australia
                </span>
              </li>
            </ul>
          </div>

          {/* Payment & Security */}
          <div className="w-full">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-blue-900">
              <BanknotesIcon className="w-5 h-5 text-blue-500" />
              Payment & Security
            </h3>
            <div className="bg-blue-50 p-3 sm:p-4 rounded-lg mb-6">
              <h4 className="font-medium mb-2 text-sm sm:text-base text-blue-900">
                Secure Payment Processing
              </h4>
              <p className="text-blue-700 text-xs sm:text-sm">
                We accept secure payment by Bank Transfer and Credit Card.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto"
            >
              Start Your Credit Repair
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-100 my-6 sm:my-8"></div>

        {/* Bottom Footer */}
        <div className="flex justify-center items-center gap-4 text-center md:text-left">
          <p className="text-blue text-xs sm:text-sm">
            © {new Date().getFullYear()} Australian Credit Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
