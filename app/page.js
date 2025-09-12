// app/page.js

import Header from "../components/Header";
import HomePage from "../components/homepage";
import { CookieConsent } from "../components/CookieConsent";
import Footer from "../components/Footer";

// Enable static generation for better TTFB
export const revalidate = 3600; // Revalidate every hour

const homepageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.australiancreditsolutions.com.au#org",
      "name": "Australian Credit Solutions",
      "url": "https://www.australiancreditsolutions.com.au",
      "logo": "https://www.australiancreditsolutions.com.au/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+61-489-265-737",
        "email": "help@australiancreditsolutions.com.au",
        "contactType": "customer service",
        "areaServed": "AU",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "805/220 Collins Street",
        "addressLocality": "Melbourne",
        "addressRegion": "VIC",
        "postalCode": "3000",
        "addressCountry": "AU"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:30"
      },
      "sameAs": [
        "https://www.productreview.com.au/listings/australian-credit-solutions",
        "https://www.google.com/maps/place/805%2F220+Collins+St,+Melbourne+VIC+3000"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "865",
        "bestRating": "5",
        "worstRating": "1",
        "url": "https://www.productreview.com.au/listings/australian-credit-solutions"
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.australiancreditsolutions.com.au#elisa",
      "name": "Elisa Rothschild",
      "jobTitle": "Principal Lawyer & Director",
      "alumniOf": "Monash University",
      "worksFor": {
        "@id": "https://www.australiancreditsolutions.com.au#org"
      },
      "knowsAbout": [
        "Credit Repair",
        "Credit Law",
        "Family Law", 
        "Debt Negotiation",
        "Consumer Finance"
      ],
      "sameAs": "https://www.linkedin.com/in/elisa-rothschild"
    },
    {
      "@type": "WebSite",
      "@id": "https://www.australiancreditsolutions.com.au#website",
      "url": "https://www.australiancreditsolutions.com.au",
      "name": "Australian Credit Solutions",
      "publisher": {
        "@id": "https://www.australiancreditsolutions.com.au#org"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.australiancreditsolutions.com.au#homepage",
      "url": "https://www.australiancreditsolutions.com.au",
      "name": "Credit Repair Australia – Fix Defaults & Improve Your Score Fast",
      "about": {
        "@id": "https://www.australiancreditsolutions.com.au#org"
      },
      "reviewedBy": {
        "@id": "https://www.australiancreditsolutions.com.au#elisa"
      },
      "isPartOf": {
        "@id": "https://www.australiancreditsolutions.com.au#website"
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <title>Credit Repair Australia – Fix Defaults & Improve Your Score Fast | Australian Credit Solutions</title>
      <meta name="description" content="Professional credit repair services in Australia. Fix defaults, remove negative listings, and improve your credit score fast. No win, no fee guarantee. Licensed experts." />
      <main className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homepageStructuredData)
          }}
        />
        <Header />
        <HomePage/>
        <Footer/>
        <CookieConsent />
      </main>
    </>
  );
}