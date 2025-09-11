"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  HomeIcon,
  CogIcon,
  PhoneIcon,
  EnvelopeIcon,
  NewspaperIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Logo from "./Logo";

/* TikTok & Pinterest icons (plain SVGs) */
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

/* Store icon COMPONENTS here; instantiate them during render */
const SERVICE_LINKS = [
  { name: "Credit Enquiry Removal", href: "/credit-enquiry-removal" },
  { name: "Court Judgment Removal", href: "/court-judgment-removal" },
  { name: "Worst Repayment History Removal", href: "/worst-repayment-history-removal" },
  { name: "Credit Repair — Home Loan Approval", href: "/credit-repair-home-loan-approval" },
  { name: "Credit Repair for Car Finance", href: "/credit-repair-for-car-finance" },
  { name: "Credit Repair After Bankruptcy", href: "/credit-repair-after-bankruptcy" },
  { name: "Credit Enquiry Removal Australia", href: "/credit-enquiry-removal-australia" },
  { name: "Credit Repair After Divorce or Separation", href: "/credit-repair-after-divorce-or-separation" },
  { name: "Credit Repair for First Home Buyers", href: "/credit-repair-for-first-home-buyers" },
  { name: "Default Removal Services Australia", href: "/default-removal-services-australia" },
];

const NAV_LINKS = [
  { name: "Home", href: "/", Icon: HomeIcon },
  { name: "Our Services", href: "/our-services", Icon: CogIcon, hasDropdown: true },
  { name: "Credit Score", href: "/credit-score", Icon: NewspaperIcon },
  { name: "Testimonials", href: "/testimonial", Icon: ChatBubbleLeftRightIcon },
  { name: "FAQ", href: "/faq", Icon: QuestionMarkCircleIcon },
];

function MobileMenu({ isOpen, navLinks, onClose }) {
  const [expandedService, setExpandedService] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-white border-t border-gray-200 z-40">
      <nav className="px-2 py-3 space-y-1">
        {navLinks.map((link) => (
          <div key={link.name}>
            {link.hasDropdown ? (
              <div>
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-bold text-gray-900 hover:text-blue-500 hover:bg-blue-50 rounded-md"
                  onClick={() => setExpandedService(!expandedService)}
                  aria-expanded={expandedService}
                >
                  <div className="flex items-center">
                    <span className="mr-3">
                      <link.Icon className="w-5 h-5" aria-hidden />
                    </span>
                    {link.name}
                  </div>
                  <ChevronDownIcon 
                    className={`w-4 h-4 transition-transform ${expandedService ? 'transform rotate-180' : ''}`}
                    aria-hidden 
                  />
                </button>
                {expandedService && (
                  <div className="ml-8 mt-1 space-y-1">
                    <Link
                      href={link.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50 rounded-md"
                      onClick={onClose}
                    >
                      View All Services
                    </Link>
                    {SERVICE_LINKS.map((serviceLink) => (
                      <Link
                        key={serviceLink.href}
                        href={serviceLink.href}
                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50 rounded-md"
                        onClick={onClose}
                      >
                        {serviceLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={link.href}
                className="flex items-center px-3 py-2 text-base font-bold text-gray-900 hover:text-blue-500 hover:bg-blue-50 rounded-md"
                onClick={onClose}
              >
                <span className="mr-3">
                  <link.Icon className="w-5 h-5" aria-hidden />
                </span>
                {link.name}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile CTAs */}
      <div className="px-3 pb-4 pt-2 border-t border-gray-100 space-y-2">
        <Link
          href="/free-credit-assessment"
          onClick={onClose}
          className="block w-full text-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue hover:to-blue-800 text-white font-medium py-3 shadow-md"
          aria-label="Start Free Credit Assessment"
        >
          Free Credit Assessment
        </Link>

        <a
          href="tel:0489265737"
          className="block w-full text-center rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:from-cyan-600 hover:via-blue hover:to-indigo-600 text-white font-medium py-3 shadow-md"
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // avoid SSR/client mismatch
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll(); // sync once after mount (doesn't affect SSR markup)
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isDropdownOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsDropdownOpen(!isDropdownOpen);
    } else if (event.key === 'ArrowDown' && isDropdownOpen) {
      event.preventDefault();
      // Focus first dropdown item
      const firstDropdownItem = dropdownRef.current?.querySelector('a');
      firstDropdownItem?.focus();
    }
  };

  const handleDropdownKeyDown = (event, index, totalItems) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = (index + 1) % totalItems;
      const nextItem = dropdownRef.current?.querySelectorAll('a')[nextIndex];
      nextItem?.focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prevIndex = index === 0 ? totalItems - 1 : index - 1;
      const prevItem = dropdownRef.current?.querySelectorAll('a')[prevIndex];
      prevItem?.focus();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      setIsDropdownOpen(false);
      // Focus back to the trigger button
      dropdownRef.current?.querySelector('button')?.focus();
    }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#0668a5] text-white text-xs">
        <div className="container max-w-7xl mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex items-center gap-4">
            {/* Phone: always visible */}
            <a
              href="tel:0489265737"
              className="flex items-center gap-2 hover:underline"
            >
              <PhoneIcon className="w-4 h-4" aria-hidden />
              <span className="font-medium tracking-wide">0489 265 737</span>
            </a>
            {/* Email: hidden on mobile, visible from sm and up */}
            <a
              href="mailto:help@australiancreditsolutions.com.au"
              className="hidden sm:flex items-center gap-2 hover:underline"
            >
              <EnvelopeIcon className="w-4 h-4" aria-hidden />
              <span className="font-medium tracking-wide">
                help@australiancreditsolutions.com.au
              </span>
            </a>
            <Link href="/testimonial">
              <span className="font-medium tracking-wide">| Testimonials</span>
            </Link>
          </div>

       
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`bg-white shadow-sm transition-all duration-300 ${
          mounted && isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container w-full max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation with Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <div 
                      className="relative"
                      ref={dropdownRef}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        className="flex items-center text-gray-900 font-medium hover:text-blue transition-colors group"
                        onClick={handleDropdownClick}
                        onKeyDown={handleKeyDown}
                        aria-expanded={isDropdownOpen}
                        aria-haspopup="true"
                      >
                        <span className="mr-2">
                          <link.Icon className="w-5 h-5 group-hover:text-blue" aria-hidden />
                        </span>
                        {link.name}
                        <ChevronDownIcon 
                          className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'transform rotate-180 text-blue' : 'text-gray-500 group-hover:text-blue'}`}
                          aria-hidden 
                        />
                      </button>
                      
                      {/* Enhanced Dropdown Menu */}
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-blue-100 py-3 z-50">
                          {/* Header */}
                          <div className="px-4 py-2 border-b border-blue-100">
                            <h3 className="text-base font-semibold text-blue-800 uppercase tracking-wide flex items-center">
                              <CogIcon className="w-4 h-4 mr-2" />
                              Our Services
                            </h3>
                          </div>
                          
                          {/* View All Link */}
                          <Link
                            href={link.href}
                            className="flex items-center justify-between px-4 py-3 text-base font-medium text-blue hover:bg-blue-50 transition-colors focus:outline-none focus:bg-blue-50 border-b border-dashed border-blue-100"
                            onClick={() => setIsDropdownOpen(false)}
                            onKeyDown={(e) => handleDropdownKeyDown(e, 0, SERVICE_LINKS.length + 1)}
                          >
                            <span>View All Services</span>
                            <ArrowRightIcon className="w-4 h-4" />
                          </Link>
                          
                          {/* Services List */}
                          <div className="max-h-72 overflow-y-auto py-1">
                            {SERVICE_LINKS.map((serviceLink, index) => (
                              <Link
                                key={serviceLink.href}
                                href={serviceLink.href}
                                className="block px-4 py-3 text-base text-gray-700 hover:text-blue hover:bg-blue-50 transition-colors focus:outline-none focus:bg-blue-50 border-b border-dashed border-gray-100 last:border-0"
                                onClick={() => setIsDropdownOpen(false)}
                                onKeyDown={(e) => handleDropdownKeyDown(e, index + 1, SERVICE_LINKS.length + 1)}
                              >
                                <div className="flex items-start">
                                  <div className="flex-shrink-0 mt-0.5 mr-3 text-blue-500">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                  </div>
                                  <span>{serviceLink.name}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                          
                          {/* Footer CTA */}
                          <div className="px-4 py-3 bg-blue-50 rounded-b-lg border-t border-blue-100">
                            <Link
                              href="/free-credit-assessment"
                              className="block text-center bg-blue hover:bg-blue-700 text-white text-base font-medium py-2 px-4 rounded-md transition-colors"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              Free Assessment
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="flex items-center text-gray-900 font-medium hover:text-blue transition-colors"
                    >
                      <span className="mr-2">
                        <link.Icon className="w-5 h-5" aria-hidden />
                      </span>
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center space-x-4 ml-6">
              <Link href="/free-credit-assessment">
                <button
                  className="bg-gradient-to-r from-blue-500 via-blue to-blue-700
                             hover:from-blue hover:via-blue-700 hover:to-blue-800
                             text-white px-4 py-2 rounded-md text-base font-medium
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
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Open mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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