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
  NewspaperIcon,
  ChatBubbleLeftRightIcon,

} from "@heroicons/react/24/outline";
import logo from "../app/assets/logo.png";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Logo from "./Logo";
// TikTokIcon.jsx
export function TikTokIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.72 0h3.124c.13 1.157.54 2.263 1.21 3.219.67.955 1.583 1.733 2.646 2.264-.52.757-1.273 1.403-2.157 1.744a6.05 6.05 0 0 1-2.597.287v8.405a6.556 6.556 0 0 1-1.635 4.38 6.556 6.556 0 0 1-4.38 1.635c-1.685 0-3.3-.67-4.494-1.865A6.34 6.34 0 0 1 3.87 15.77a6.34 6.34 0 0 1 1.635-4.494 6.34 6.34 0 0 1 4.494-1.635c.223 0 .44.017.654.048v3.14a3.24 3.24 0 0 0-.654-.064 3.204 3.204 0 0 0-2.278.944 3.204 3.204 0 0 0-.944 2.278c0 .857.334 1.662.944 2.278a3.204 3.204 0 0 0 2.278.944 3.204 3.204 0 0 0 2.278-.944 3.204 3.204 0 0 0 .944-2.278V0z" />
    </svg>
  );
}
// PinterestIcon.jsx
export function PinterestIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12c0 4.991 3.657 9.142 8.438 10.037-.117-.853-.222-2.164.046-3.096.243-.84 1.562-5.34 1.562-5.34s-.398-.797-.398-1.974c0-1.85 1.073-3.232 2.406-3.232 1.136 0 1.682.852 1.682 1.873 0 1.142-.728 2.85-1.103 4.433-.314 1.323.666 2.402 1.977 2.402 2.373 0 4.197-2.5 4.197-6.102 0-3.188-2.293-5.417-5.566-5.417-3.797 0-6.033 2.848-6.033 5.792 0 1.148.444 2.384 1 3.053.11.13.125.244.092.375-.1.4-.332 1.273-.377 1.45-.06.242-.195.294-.45.178-1.676-.778-2.72-3.215-2.72-5.172 0-4.215 3.063-8.085 8.833-8.085 4.633 0 8.233 3.308 8.233 7.742 0 4.6-2.9 8.303-6.922 8.303-1.352 0-2.621-.705-3.055-1.54l-.83 3.156c-.3 1.146-1.113 2.582-1.66 3.454C9.484 23.88 10.729 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}


const NAV_LINKS = [
  { name: "Home", href: "/", icon: <HomeIcon className="w-5 h-5" /> },
  {
    name: "Our Services",
    href: "/our-services",
    icon: <CogIcon className="w-5 h-5" />,
  },
  {
    name: "Check Credit Score",
    href: "/quiz",
    icon: <ChartBarIcon className="w-5 h-5" />,
  },
  {
    name: "Blogs",
    href: "/blogs",
    icon: <NewspaperIcon className="w-5 h-5" />,
  },
    {
    name: "Testimonials",
    href: "/testimonials",
    icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />,
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
            className="flex items-center px-3 py-2 text-base font-bold text-gray-900 hover:text-blue-500 hover:bg-blue-50 rounded-md"
            onClick={onClose}
          >
            <span className="mr-3">{link.icon}</span>
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile CTAs */}
      <div className="px-3 pb-4 pt-2 border-t border-gray-100 space-y-2">
        <Link
          href="/meeting-schedule"
          onClick={onClose}
          className="block w-full text-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-700
                     hover:from-blue-600 hover:to-blue-800 text-white font-medium py-3 shadow-md"
          aria-label="Start Free Credit Assessment"
        >
          Free Credit Assessment
        </Link>

        <a
          href="tel:0489265737"
          className="block w-full text-center rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500
                     hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-600 text-white font-medium py-3 shadow-md"
          aria-label="Call Credit Repair Helpline"
        >
          Helpline 0489 265 737
        </a>
      </div>
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
            <Link href="/testimonials">
              | <span className="font-medium tracking-wide ml-2">Testimonials</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/australiancreditsolutions"
              className="hover:text-blue-200"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/credits_aussie"
              className="hover:text-blue-200"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/australian_credit_solution/"
              className="hover:text-blue-200"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/australian-credit-solutions/"
              className="hover:text-blue-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://ph.pinterest.com/australiancreditsolutions/"
              className="hover:text-blue-200 hidden lg:block"
              aria-label="Pinterest"
            >
              <PinterestIcon className="w-4 h-4 " />
            </a>
            <a
              href="https://www.youtube.com/@australiancreditsolutions3719"
              className="hover:text-blue-200 hidden lg:block"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.tiktok.com/@australiancreditrepair"
              className="hover:text-blue-200 hidden lg:block"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-4 h-4" />
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
          <Logo />

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
              <Link href="/meeting-schedule">
                <button
                  className="bg-gradient-to-r from-blue-500 via-blue to-blue-700
                hover:from-blue hover:via-blue-700 hover:to-blue-800
                text-white px-4 py-2 rounded-md text-sm font-medium
                transition-all duration-200 shadow-md"
                >
                  Free Credit Assessment
                </button>
              </Link>

              
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
