"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FacebookIcon, LinkedinIcon, PlusIcon, PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import urlData from "../url.json";

// Helper functions
function isInternal(href) {
  return !href.startsWith('http') || href.includes('australiancreditsolutions.com.au');
}

function cleanPathname(href) {
  try {
    const url = new URL(href, 'https://www.australiancreditsolutions.com.au');
    return url.pathname;
  } catch {
    return href.replace(/[?#].*$/, '');
  }
}

function deriveLabel(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Normalize URL data
const normalizedUrls = urlData.urls.map(item => ({
  href: cleanPathname(item.pathname),
  label: deriveLabel(item.pathname.replace(/^\//, ''))
}));

// Categorization function
function categorizeUrl(href) {
  const slug = href.replace(/^\//, '').toLowerCase();
  
  // Services patterns
  if (slug.includes('default') || slug.includes('credit-enquiry') || 
      slug.includes('judgment') || slug.includes('repayment-history') || 
      slug.includes('identity-theft') || slug.includes('credit-report') || 
      slug.includes('equifax')) {
    return 'services';
  }
  
  // Credit Help patterns
  if (slug.includes('how-') || slug.includes('guide') || slug.includes('credit-score') || 
      slug.includes('blog') || slug.includes('what-we-can') || slug.includes('pricing') || 
      slug.includes('process') || slug.includes('faq')) {
    return 'credit-help';
  }
  
  // Locations patterns
  if (slug.includes('credit-repair-') || slug.includes('credit_repair_')) {
    return 'locations';
  }
  
  // Company patterns
  if (slug.includes('about') || slug.includes('testimonial') || 
      slug.includes('complaints-handling-policy') || slug.includes('contact') || 
      slug.includes('careers')) {
    return 'company';
  }
  
  // Legal & Trust patterns
  if (slug.includes('privacy-policy') || slug.includes('terms-conditions')) {
    return 'legal-trust';
  }
  
  return 'services'; // default fallback
}

// Canonical items mapping
const canonicalItems = {
  services: [
    { label: 'Default Removal', href: '/default-removal-services-australia' },
    { label: 'Credit Enquiry Removal', href: '/credit-enquiry-removal' },
    { label: 'Court Judgment Removal', href: '/court-judgment-removal' },
    { label: 'Repayment History Disputes', href: '/worst-repayment-history-removal' },
    { label: 'Identity Theft (Credit File Fix)', href: '/fix-my-credit-file-australia' },
    { label: 'Credit Report Analysis', href: '/credit-repair-australia' },
   
  ],
  'credit-help': [
    { label: 'How It Works', href: '/how-to-fix-my-credit-score-australia' },
    { label: 'What We Can & Can\'t Remove', href: '/default-removal-services-australia' },
    { label: 'Credit Score Guide', href: '/credit-score' },
    { label: 'Blog', href: '/blogs' }
  ],
  locations: [
    { label: 'Sydney', href: '/credit_repair_sydney' },
    { label: 'Melbourne', href: '/credit-repair-melbourne' },
    { label: 'Brisbane', href: '/credit-repair-brisbane' },
    { label: 'Perth', href: '/credit-repair-perth' },
    { label: 'Adelaide', href: '/credit-repair-adelaide' },
    { label: 'Canberra', href: '/credit-repair-canberra' },
    { label: 'Hobart', href: '/credit-repair-hobart' },
    { label: 'Darwin', href: '/credit-repair-darwin' },
   
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Testimonials', href: '/testimonial' },
    { label: 'Complaints Handling Policy', href: '/complaints-handling-policy' },
    { label: 'Contact', href: '/contact-us' }
  ],
  'legal-trust': [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-conditions' }
  ]
};

// State mapping for locations
const STATE_GROUPS = {
  NSW: ['sydney', 'regional-nsw'],
  VIC: ['melbourne', 'geelong', 'warrnambool', 'bendigo', 'ballarat', 'sale', 'traralgon', 'gippsland', 'geelong-warrnambool', 'sale-traralgon'],
  QLD: ['brisbane', 'gold-coast', 'sunshine-coast', 'cairns', 'townsville'],
  WA:  ['perth'],
  SA:  ['adelaide'],
  TAS: ['hobart'],
  NT:  ['darwin'],
  ACT: ['canberra'],
};

// Helper to determine state from city slug
function getStateFromSlug(slug) {
  const cityName = slug.replace('credit-repair-', '').replace('credit_repair_', '');
  for (const [state, cities] of Object.entries(STATE_GROUPS)) {
    if (cities.some(city => cityName.includes(city) || city.includes(cityName))) {
      return state;
    }
  }
  return null;
}

// Build similar links index
function buildSimilarIndex(maxSimilarPerItem = 8) {
  const similarIndex = {};
  
  // Group URLs by category
  const categorizedUrls = {
    services: normalizedUrls.filter(url => categorizeUrl(url.href) === 'services'),
    'credit-help': normalizedUrls.filter(url => categorizeUrl(url.href) === 'credit-help'),
    locations: normalizedUrls.filter(url => categorizeUrl(url.href) === 'locations'),
    company: normalizedUrls.filter(url => categorizeUrl(url.href) === 'company'),
    'legal-trust': normalizedUrls.filter(url => categorizeUrl(url.href) === 'legal-trust')
  };
  
  // Build similar links for each canonical item
  Object.entries(canonicalItems).forEach(([category, items]) => {
    items.forEach(item => {
      const similar = [];
      const itemSlug = item.href.replace(/^\//, '').toLowerCase();
      
      if (category === 'locations') {
        // Special handling for locations - group by state
        const itemState = getStateFromSlug(itemSlug);
        if (itemState) {
          const stateCities = STATE_GROUPS[itemState];
          
          categorizedUrls.locations.forEach(url => {
            const urlSlug = url.href.replace(/^\//, '').toLowerCase();
            const urlState = getStateFromSlug(urlSlug);
            
            // Only include URLs from the same state
            if (urlState === itemState && urlSlug !== itemSlug) {
              similar.push({
                label: url.label,
                href: url.href
              });
            }
          });
        }
      } else {
        // Standard token-based matching for other categories
        categorizedUrls[category].forEach(url => {
          const urlSlug = url.href.replace(/^\//, '').toLowerCase();
          
          // Skip if it's the same as the canonical item
          if (urlSlug === itemSlug) return;
          
          // Check for shared tokens
          const itemTokens = itemSlug.split('-');
          const urlTokens = urlSlug.split('-');
          const sharedTokens = itemTokens.filter(token => 
            urlTokens.some(urlToken => urlToken.includes(token) || token.includes(urlToken))
          );
          
          if (sharedTokens.length > 0) {
            similar.push({
              label: url.label,
              href: url.href
            });
          }
        });
      }
      
      // Dedupe and limit
      const uniqueSimilar = similar.filter((item, index, self) => 
        index === self.findIndex(t => t.href === item.href)
      );
      
      if (uniqueSimilar.length > 0) {
        const limitedSimilar = uniqueSimilar.slice(0, maxSimilarPerItem);
        
        // Add "View more..." link if there are more items
        if (uniqueSimilar.length > maxSimilarPerItem) {
          const categoryIndexUrl = category === 'locations' ? '/locations' : 
                                  category === 'services' ? '/services' : 
                                  category === 'credit-help' ? '/blogs' : 
                                  category === 'company' ? '/about' : '/privacy-policy';
          
          limitedSimilar.push({
            label: 'View more...',
            href: categoryIndexUrl
          });
        }
        
        similarIndex[item.label] = limitedSimilar;
      }
    });
  });
  
  return similarIndex;
}

// Expandable Link Component
function ExpandableLink({ item, similarLinks, isActive, onToggle }) {
  const LinkComponent = isInternal(item.href) ? Link : 'a';
  const linkProps = isInternal(item.href) 
    ? { href: item.href }
    : { href: item.href, target: '_blank', rel: 'noopener noreferrer' };
  
  return (
    <li className="flex items-center">
      <LinkComponent
        {...linkProps}
        className="text-base leading-6 text-gray-600 hover:text-blue-600 transition-colors hover:underline hover:underline-offset-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded"
      >
        {item.label}
      </LinkComponent>
      {similarLinks && similarLinks.length > 0 && (
        <button
          onClick={onToggle}
          aria-label={`Show similar links for ${item.label}`}
          aria-expanded={isActive}
          aria-controls="footer-disclosure"
          className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full border hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-shrink-0"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onToggle();
            }
          }}
        >
          <PlusIcon className={`w-4 h-4 transition-transform ${isActive ? 'rotate-45' : ''}`} />
        </button>
      )}
    </li>
  );
}

export default function Footer({ 
  qualificationLink = "/free-credit-assessment", 
  showCareers = false, 
  abn = "80 650 730 699",
  maxSimilarPerItem = 8,

  googleReviewsLink = "https://www.google.com/search?q=Australian+Credit+Solutions+reviews",
  trustpilotLink = "https://www.trustpilot.com/review/australiancreditlawyers.com.au"
}) {
  const currentYear = new Date().getFullYear();
  const [activeDisclosure, setActiveDisclosure] = useState(null);
  const similarIndex = buildSimilarIndex(maxSimilarPerItem);
  
  const toggleDisclosure = (item) => {
    if (activeDisclosure && activeDisclosure.label === item.label) {
      setActiveDisclosure(null);
    } else {
      setActiveDisclosure({
        ...item,
        similarLinks: similarIndex[item.label] || []
      });
    }
  };
  
  const closeDisclosure = () => {
    setActiveDisclosure(null);
  };
  
  // Add careers to company items if showCareers is true
  const companyItems = showCareers 
    ? [...canonicalItems.company, { label: 'Careers', href: '/careers' }]
    : canonicalItems.company;
  
  
  // Handle escape key and outside clicks
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && activeDisclosure) {
        closeDisclosure();
      }
    };
    
    const handleClickOutside = (e) => {
      if (activeDisclosure && !e.target.closest('#footer-disclosure') && !e.target.closest('button[aria-controls="footer-disclosure"]')) {
        closeDisclosure();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeDisclosure]);

  return (
    <footer className="bg-gradient-to-b from-blue-50 to-white text-gray-800 border-t border-gray-200">
      {/* CTA Strip */}
      <div className="bg-blue text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">
                Find out if we can remove negative listings from your credit report—fast and confidential.
              </h2>
            </div>
            <div className="text-center sm:text-right">
              <Link
                href={qualificationLink}
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
              >
                Check if you qualify
              </Link>
              <p className="text-base text-blue-100 mt-2">
                Takes 60 seconds. No obligation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Five Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.2fr_1.5fr_1.5fr_1fr_1fr] gap-x-8 gap-y-10">
          
          {/* Column A - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Company Logo */}
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="Australian Credit Solutions"
                width={180}
                height={60}
                className="h-auto max-w-full"
                priority
              />
            </div>
            
            {/* Contact Details */}
            <div className="space-y-3">
              {/* Mobile Phone */}
              <div className="flex items-start gap-3">
                <PhoneIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:0489265737"
                    className="text-base text-gray-600 hover:text-blue-600 transition-colors hover:underline hover:underline-offset-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded"
                  >
                    0489 265 737
                  </a>
                </div>
              </div>
              
              {/* Landline Phone */}
              <div className="flex items-start gap-3">
                <PhoneIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:1300368302"
                    className="text-base text-gray-600 hover:text-blue-600 transition-colors hover:underline hover:underline-offset-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded"
                  >
                    1300 368 302
                  </a>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start gap-3">
                <MailIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:help@australiancreditsolutions.com.au"
                    className="text-base text-gray-600 hover:text-blue-600 transition-colors hover:underline hover:underline-offset-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded break-all"
                  >
                    help@australiancreditsolutions.com.au
                  </a>
                </div>
              </div>
              
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <address className="text-base text-gray-600 not-italic">
                    805/220 Collins St<br />
                    Melbourne VIC 3000
                  </address>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Column B - Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-base font-semibold uppercase tracking-wide text-gray-900">Services</h3>
            <ul className="space-y-2">
              {canonicalItems.services.map((item, index) => (
                <ExpandableLink
                  key={index}
                  item={item}
                  similarLinks={similarIndex[item.label]}
                  isActive={activeDisclosure?.label === item.label}
                  onToggle={() => toggleDisclosure(item)}
                />
              ))}
            </ul>
          </motion.div>

          {/* Column C - Credit Help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-base font-semibold uppercase tracking-wide text-gray-900">Credit Help</h3>
            <ul className="space-y-2">
              {canonicalItems['credit-help'].map((item, index) => (
                <ExpandableLink
                  key={index}
                  item={item}
                  similarLinks={similarIndex[item.label]}
                  isActive={activeDisclosure?.label === item.label}
                  onToggle={() => toggleDisclosure(item)}
                />
              ))}
            </ul>
          </motion.div>

          {/* Column D - Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-base font-semibold uppercase tracking-wide text-gray-900">Locations</h3>
            <ul className="space-y-2">
              {canonicalItems.locations.map((item, index) => (
                <ExpandableLink
                  key={index}
                  item={item}
                  similarLinks={similarIndex[item.label]}
                  isActive={activeDisclosure?.label === item.label}
                  onToggle={() => toggleDisclosure(item)}
                />
              ))}
            </ul>
          </motion.div>

          {/* Column E - Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-base font-semibold uppercase tracking-wide text-gray-900">Company</h3>
            <ul className="space-y-2">
              {companyItems.map((item, index) => (
                <ExpandableLink
                  key={index}
                  item={item}
                  similarLinks={similarIndex[item.label]}
                  isActive={activeDisclosure?.label === item.label}
                  onToggle={() => toggleDisclosure(item)}
                />
              ))}
            </ul>
          </motion.div>

        </div>
         {/* Global Disclosure Row */}
      <div className="pt-6 relative z-10">
        <section 
          id="footer-disclosure"
          aria-live="polite"
          className="relative w-full"
        >
          {activeDisclosure && (
            <div className="mx-auto max-w-[1200px] px-4">
              <div className="rounded-xl bg-white/70 shadow-sm ring-1 ring-black/5 backdrop-blur-sm px-4 py-3 flex flex-wrap gap-3 items-center">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Related to: {activeDisclosure.label}
                </span>
                <ul className="flex flex-wrap gap-2">
                  {activeDisclosure.similarLinks.map((link, index) => {
                    const LinkComponent = isInternal(link.href) ? Link : 'a';
                    const linkProps = isInternal(link.href) 
                      ? { href: link.href }
                      : { href: link.href, target: '_blank', rel: 'noopener noreferrer' };
                    
                    return (
                      <li key={index}>
                        <LinkComponent
                          {...linkProps}
                          className="inline-flex items-center rounded-full border px-3 py-1 text-base hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          {link.label}
                        </LinkComponent>
                      </li>
                    );
                  })}
                </ul>
                <button 
                  aria-label="Close related links" 
                  className="ml-auto text-base underline underline-offset-4"
                  onClick={closeDisclosure}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
      </div>

     

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-base text-gray-600">
                © Australian Credit Solutions, {currentYear}
                {abn && ` • ABN ${abn}`}
              </p>
              {/* Legal Links */}
              <div className="flex flex-wrap gap-4 mt-2 justify-center sm:justify-start">
                <Link
                  href="/privacy-policy"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors hover:underline hover:underline-offset-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-conditions"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors hover:underline hover:underline-offset-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-end gap-4">
             
              <a
                href={googleReviewsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                aria-label="Google"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
              <a
                href={trustpilotLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                aria-label="Trustpilot"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
