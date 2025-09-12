// Utility functions for generating page-specific structured data
import { generatePageSchema } from '@/components/StructuredData';

// Common breadcrumb patterns for different page types
export const breadcrumbPatterns = {
  service: (serviceName, serviceUrl) => [
    { name: "Home", url: "https://www.australiancreditsolutions.com.au" },
    { name: "Services", url: "https://www.australiancreditsolutions.com.au/services" },
    { name: serviceName, url: `https://www.australiancreditsolutions.com.au${serviceUrl}` }
  ],
  location: (locationName, locationUrl) => [
    { name: "Home", url: "https://www.australiancreditsolutions.com.au" },
    { name: "Locations", url: "https://www.australiancreditsolutions.com.au/locations" },
    { name: locationName, url: `https://www.australiancreditsolutions.com.au${locationUrl}` }
  ],
  blog: (blogTitle, blogUrl) => [
    { name: "Home", url: "https://www.australiancreditsolutions.com.au" },
    { name: "Blog", url: "https://www.australiancreditsolutions.com.au/blogs" },
    { name: blogTitle, url: `https://www.australiancreditsolutions.com.au${blogUrl}` }
  ],
  about: () => [
    { name: "Home", url: "https://www.australiancreditsolutions.com.au" },
    { name: "About", url: "https://www.australiancreditsolutions.com.au/about" }
  ],
  contact: () => [
    { name: "Home", url: "https://www.australiancreditsolutions.com.au" },
    { name: "Contact", url: "https://www.australiancreditsolutions.com.au/contact-us" }
  ]
};

// Service-specific schemas
export const serviceSchemas = {
  'credit-enquiry-removal': {
    serviceType: "Credit Enquiry Removal",
    description: "Expert legal service to remove unfair or outdated credit enquiries from your credit report, helping Australians improve credit scores and loan eligibility."
  },
  'default-removal': {
    serviceType: "Default Removal",
    description: "Professional service to remove defaults from your credit file, improving your credit score and financial opportunities."
  },
  'credit-repair': {
    serviceType: "Credit Repair",
    description: "Comprehensive credit repair services to fix bad credit, remove negative listings, and improve your credit score."
  },
  'court-judgment-removal': {
    serviceType: "Court Judgment Removal",
    description: "Legal assistance to remove court judgments from your credit report and restore your financial reputation."
  }
};

// Location-specific schemas
export const locationSchemas = {
  'melbourne': {
    city: "Melbourne",
    state: "VIC",
    description: "Professional credit repair services in Melbourne, Victoria. Expert assistance to improve your credit score."
  },
  'sydney': {
    city: "Sydney",
    state: "NSW", 
    description: "Expert credit repair services in Sydney, New South Wales. Fast and effective credit score improvement."
  },
  'brisbane': {
    city: "Brisbane",
    state: "QLD",
    description: "Professional credit repair services in Brisbane, Queensland. Comprehensive credit score solutions."
  },
  'perth': {
    city: "Perth",
    state: "WA",
    description: "Expert credit repair services in Perth, Western Australia. Reliable credit score improvement solutions."
  },
  'adelaide': {
    city: "Adelaide", 
    state: "SA",
    description: "Professional credit repair services in Adelaide, South Australia. Effective credit score restoration."
  }
};

// Function to generate schema for any page
export function createPageSchema(pageType, pageData = {}) {
  const baseData = {
    title: pageData.title || "Australian Credit Solutions",
    url: pageData.url || "",
    description: pageData.description || "Professional credit repair services in Australia"
  };

  // Add breadcrumbs based on page type
  if (pageData.breadcrumbs) {
    baseData.breadcrumbs = pageData.breadcrumbs;
  } else if (pageType && breadcrumbPatterns[pageType]) {
    baseData.breadcrumbs = breadcrumbPatterns[pageType](pageData.serviceName || pageData.locationName || pageData.blogTitle, pageData.url);
  }

  return generatePageSchema(baseData);
}

// Function to add service-specific schema
export function addServiceSchema(serviceKey, pageData = {}) {
  const serviceInfo = serviceSchemas[serviceKey];
  if (!serviceInfo) {
    console.warn(`Service schema not found for: ${serviceKey}`);
    return null;
  }

  return {
    "@type": "Service",
    "@id": `https://www.australiancreditsolutions.com.au${pageData.url || ''}#service`,
    "serviceType": serviceInfo.serviceType,
    "name": `${serviceInfo.serviceType} Service`,
    "url": `https://www.australiancreditsolutions.com.au${pageData.url || ''}`,
    "description": serviceInfo.description,
    "provider": { "@id": "https://www.australiancreditsolutions.com.au#org" },
    "areaServed": { "@type": "Country", "name": "Australia" },
    "offers": { 
      "@type": "Offer", 
      "category": "ProfessionalService", 
      "availability": "https://schema.org/InStock" 
    }
  };
}

// Function to add location-specific schema
export function addLocationSchema(locationKey, pageData = {}) {
  const locationInfo = locationSchemas[locationKey];
  if (!locationInfo) {
    console.warn(`Location schema not found for: ${locationKey}`);
    return null;
  }

  return {
    "@type": "LocalBusiness",
    "@id": `https://www.australiancreditsolutions.com.au${pageData.url || ''}#localbusiness`,
    "name": `Australian Credit Solutions - ${locationInfo.city}`,
    "url": `https://www.australiancreditsolutions.com.au${pageData.url || ''}`,
    "description": locationInfo.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": locationInfo.city,
      "addressRegion": locationInfo.state,
      "addressCountry": "AU"
    },
    "areaServed": {
      "@type": "City",
      "name": locationInfo.city
    },
    "parentOrganization": { "@id": "https://www.australiancreditsolutions.com.au#org" }
  };
}
