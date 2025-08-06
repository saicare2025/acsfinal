"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  HomeIcon,
  ChartBarIcon,
  CogIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import logo from "../app/assets/logo.png";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/", icon: <HomeIcon className="w-5 h-5" /> },
  {
    name: "Our Service",
    href: "/our-service",
    icon: <CogIcon className="w-5 h-5" />,
  },
  {
    name: "Credit Score",
    href: "/credit-score",
    icon: <ChartBarIcon className="w-5 h-5" />,
  },
];

function MobileMenu({ isOpen, navLinks, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="lg:hidden bg-white border-t border-gray-200 z-40">
      <nav className="px-2 py-3 space-y-1">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="flex items-center px-3 py-2 text-base font-bold text-gray-900 hover:text-blue-500 hover:bg-gray-50 rounded-md"
            onClick={onClose}
          >
            <span className="mr-3">{link.icon}</span>
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#0668a5] text-white text-xs">
        <div className="container max-w-7xl mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex items-center gap-4">
            {/* Phone: always visible */}
            <a
              href="tel:1300368302"
              className="flex items-center gap-2 hover:underline"
            >
              <PhoneIcon className="w-4 h-4" />
              <span className="font-medium tracking-wide">1300 368 302</span>
            </a>
            {/* Email: hidden on mobile, visible from sm and up */}
            <a
              href="mailto:help@australiancreditsolutions.com.au"
              className="hidden sm:flex items-center gap-2 hover:underline"
            >
              <EnvelopeIcon className="w-4 h-4" />
              <span className="font-medium tracking-wide">
                help@australiancreditsolutions.com.au
              </span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-200" aria-label="Facebook">
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-blue-200" aria-label="Twitter">
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-blue-200" aria-label="Instagram">
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-blue-200" aria-label="LinkedIn">
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`bg-white shadow-sm transition-all duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container w-full max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Go to homepage"
          >
            <Image
              src={logo}
              alt="Company Logo"
              width={200}
              height={60}
              priority
            />
          </Link>

          {/* Desktop Navigation with Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center text-gray-900 font-medium hover:text-blue-500 transition-colors"
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4 ml-6">
              <button
                className="bg-gradient-to-r from-blue-500 via-blue to-blue-700
                 hover:from-blue hover:via-blue-700 hover:to-blue-800
                 text-white px-4 py-2 rounded-md text-sm font-medium
                 transition-all duration-200 shadow-md"
              >
                Free Credit Assessment
              </button>
              <button
                className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500
                 hover:from-cyan-600 hover:via-blue hover:to-indigo-600
                 text-white px-4 py-2 rounded-md text-sm font-medium
                 transition-all duration-200 shadow-md"
              >
                Credit Repair Helpline 0489 265 737
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex gap-2 p-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open mobile menu"
          >
            <svg
              className="w-6 h-6 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span>MENU</span>
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          navLinks={NAV_LINKS}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
}
