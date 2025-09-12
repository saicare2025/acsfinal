import Script from 'next/script';

// Global JSON-LD Schema for Australian Credit Solutions
const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.australiancreditsolutions.com.au#org",
      "name": "Australian Credit Solutions",
      "url": "https://www.australiancreditsolutions.com.au",
      "logo": { "@type": "ImageObject", "url": "https://www.australiancreditsolutions.com.au/logo.png" },
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
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "09:00",
          "closes": "18:30"
        }
      ],
      "sameAs": [
        "https://www.productreview.com.au/listings/australian-credit-solutions",
        "https://www.google.com/maps/place/805%2F220+Collins+St,+Melbourne+VIC+3000"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.australiancreditsolutions.com.au#elisa",
      "name": "Elisa Rothschild",
      "jobTitle": "Principal Lawyer & Director",
      "alumniOf": { "@type": "CollegeOrUniversity", "name": "Monash University" },
      "worksFor": { "@id": "https://www.australiancreditsolutions.com.au#org" },
      "knowsAbout": ["Credit Repair","Credit Law","Family Law","Debt Negotiation","Consumer Finance"],
      "sameAs": ["https://www.linkedin.com/in/elisa-rothschild"]
    },
    {
      "@type": "Service",
      "@id": "https://www.australiancreditsolutions.com.au/credit-enquiry-removal#service",
      "serviceType": "Credit Enquiry Removal",
      "name": "Credit Enquiry Removal Service",
      "url": "https://www.australiancreditsolutions.com.au/credit-enquiry-removal",
      "description": "Expert legal service to remove unfair or outdated credit enquiries from your credit report, helping Australians improve credit scores and loan eligibility.",
      "provider": { "@id": "https://www.australiancreditsolutions.com.au#org" },
      "areaServed": { "@type": "Country", "name": "Australia" },
      "offers": { "@type": "Offer", "category": "ProfessionalService", "availability": "https://schema.org/InStock" }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.australiancreditsolutions.com.au/credit-enquiry-removal#webpage",
      "url": "https://www.australiancreditsolutions.com.au/credit-enquiry-removal",
      "name": "Credit Enquiry Removal | Australian Credit Solutions",
      "about": { "@id": "https://www.australiancreditsolutions.com.au/credit-enquiry-removal#service" },
      "reviewedBy": { "@id": "https://www.australiancreditsolutions.com.au#elisa" },
      "isPartOf": { "@id": "https://www.australiancreditsolutions.com.au#website" }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.australiancreditsolutions.com.au#website",
      "url": "https://www.australiancreditsolutions.com.au",
      "name": "Australian Credit Solutions",
      "publisher": { "@id": "https://www.australiancreditsolutions.com.au#org" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.australiancreditsolutions.com.au/credit-enquiry-removal#breadcrumbs",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.australiancreditsolutions.com.au" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.australiancreditsolutions.com.au/services" },
        { "@type": "ListItem", "position": 3, "name": "Credit Enquiry Removal", "item": "https://www.australiancreditsolutions.com.au/credit-enquiry-removal" }
      ]
    },
    {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "612",
      "bestRating": "5",
      "worstRating": "1",
      "itemReviewed": { "@id": "https://www.australiancreditsolutions.com.au#org" },
      "url": "https://www.productreview.com.au/listings/australian-credit-solutions"
    }
  ]
};

// Function to generate page-specific schema
export function generatePageSchema(pageData = {}) {
  const baseSchema = { ...globalSchema };
  
  // Add page-specific data if provided
  if (pageData.title) {
    baseSchema["@graph"].push({
      "@type": "WebPage",
      "@id": `https://www.australiancreditsolutions.com.au${pageData.url || ''}#webpage`,
      "url": `https://www.australiancreditsolutions.com.au${pageData.url || ''}`,
      "name": pageData.title,
      "description": pageData.description || "Professional credit repair services in Australia",
      "about": { "@id": "https://www.australiancreditsolutions.com.au#org" },
      "reviewedBy": { "@id": "https://www.australiancreditsolutions.com.au#elisa" },
      "isPartOf": { "@id": "https://www.australiancreditsolutions.com.au#website" }
    });
  }

  // Add breadcrumbs if provided
  if (pageData.breadcrumbs && pageData.breadcrumbs.length > 0) {
    baseSchema["@graph"].push({
      "@type": "BreadcrumbList",
      "@id": `https://www.australiancreditsolutions.com.au${pageData.url || ''}#breadcrumbs`,
      "itemListElement": pageData.breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    });
  }

  return baseSchema;
}

// Component to render structured data
export default function StructuredData({ schema = globalSchema }) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 0)
      }}
    />
  );
}

// Export the global schema for use in other components
export { globalSchema };
