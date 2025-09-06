// utils/structuredData.js

/**
 * Builds comprehensive JSON-LD structured data for Australian Credit Solutions
 * @param {Object} params - Configuration object
 * @param {string} params.pathname - Current page pathname
 * @param {string} params.title - Page title
 * @param {string} params.description - Page description
 * @param {string} [params.ogImage] - OG image URL
 * @param {Array} [params.breadcrumbs] - Custom breadcrumb array
 * @param {Array} [params.faq] - FAQ array with {question, answer} objects
 * @param {boolean} [params.isService] - Whether this is a service page
 * @param {string} [params.serviceName] - Service name for service pages
 * @param {string} [params.serviceArea] - Service area (defaults to "Australia")
 * @param {Object} [params.blog] - Blog post data
 * @returns {Array} JSON-LD @graph array
 */
export function buildStructuredData({
  pathname,
  title,
  description,
  ogImage,
  breadcrumbs,
  faq,
  isService = false,
  serviceName,
  serviceArea = "Australia",
  blog
}) {
  const baseUrl = "https://www.australiancreditsolutions.com.au";
  const canonicalUrl = `${baseUrl}${pathname}`;
  const logoUrl = "https://www.australiancreditsolutions.com.au/logo.png";
  const fallbackImage = ogImage || logoUrl;
  
  // Company constants
  const companyData = {
    name: "Australian Credit Solutions",
    description: "Australian Credit Solutions helps individuals and businesses manage their credit profiles and financial opportunities.",
    logo: logoUrl,
    url: baseUrl,
    telephone: "+61489265737",
    email: "help@australiancreditsolutions.com.au",
    address: {
      streetAddress: "Level 8, 805/220 Collins Street",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      postalCode: "",
      addressCountry: "AU"
    },
    identifiers: {
      ABN: "80 650 730 699",
      ACN: "650 730 699",
      AFCA: "83546"
    }
  };

  const graph = [];

  // 1. Organization (always included)
  const organization = {
    "@type": "Organization",
    "@id": `${baseUrl}/#org`,
    name: companyData.name,
    legalName: "Australian Credit Solutions Pty Ltd",
    url: companyData.url,
    logo: {
      "@type": "ImageObject",
      url: companyData.logo,
      width: 300,
      height: 100
    },
    image: fallbackImage,
    description: companyData.description,
    telephone: companyData.telephone,
    email: companyData.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyData.address.streetAddress,
      addressLocality: companyData.address.addressLocality,
      addressRegion: companyData.address.addressRegion,
      postalCode: companyData.address.postalCode,
      addressCountry: companyData.address.addressCountry
    },
    identifier: [
      {
        "@type": "PropertyValue",
        name: "ABN",
        value: companyData.identifiers.ABN
      },
      {
        "@type": "PropertyValue", 
        name: "ACN",
        value: companyData.identifiers.ACN
      },
      {
        "@type": "PropertyValue",
        name: "AFCA",
        value: companyData.identifiers.AFCA
      }
    ],
    memberOf: {
      "@type": "Organization",
      name: "AFCA",
      identifier: companyData.identifiers.AFCA
    },
    sameAs: [] // Add social URLs when available
  };
  graph.push(organization);

  // 2. ProfessionalService (Local Business - always included)
  const professionalService = {
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#service`,
    name: companyData.name,
    description: companyData.description,
    telephone: companyData.telephone,
    email: companyData.email,
    address: organization.address,
    areaServed: "Australia",
    priceRange: "$$",
    image: [fallbackImage],
    parentOrganization: {
      "@id": `${baseUrl}/#org`
    },
    serviceType: "Credit Repair Services",
    hasCredential: {
      "@type": "EducationalOccupationalCredential", 
      credentialCategory: "ASIC Australian Credit License",
      identifier: "532003"
    }
  };
  graph.push(professionalService);

  // 3. WebSite (always included)
  const website = {
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: companyData.name,
    url: companyData.url,
    publisher: {
      "@id": `${baseUrl}/#org`
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/?s={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
  graph.push(website);

  // 4. WebPage (always included)
  const webPage = {
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: title,
    description: description,
    inLanguage: "en-AU",
    isPartOf: {
      "@id": `${baseUrl}/#website`
    },
    about: {
      "@id": `${baseUrl}/#org`
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: fallbackImage
    },
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0]
  };
  graph.push(webPage);

  // 5. BreadcrumbList (auto-built from pathname or custom)
  let breadcrumbItems;
  if (breadcrumbs && breadcrumbs.length > 0) {
    breadcrumbItems = breadcrumbs;
  } else {
    // Auto-build from pathname
    breadcrumbItems = [
      {
        position: 1,
        name: "Home",
        item: baseUrl
      }
    ];

    if (pathname !== "/") {
      const segments = pathname.split("/").filter(Boolean);
      segments.forEach((segment, index) => {
        const name = humanizeSegment(segment);
        const url = `${baseUrl}/${segments.slice(0, index + 1).join("/")}`;
        breadcrumbItems.push({
          position: index + 2,
          name: name,
          item: url
        });
      });
    }
  }

  const breadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: breadcrumbItems.map(item => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      item: item.item
    }))
  };
  graph.push(breadcrumbList);

  // 6. Service (conditional - for service pages)
  if (isService) {
    const serviceSchema = {
      "@type": "Service",
      "@id": `${canonicalUrl}#service-offering`,
      name: serviceName || title,
      description: description,
      serviceType: serviceName || title,
      provider: {
        "@id": `${baseUrl}/#service`
      },
      areaServed: serviceArea,
      url: canonicalUrl
    };

    // Add terms of service if "No Win, No Fee" is mentioned
    if (title.toLowerCase().includes("no win, no fee") || 
        description.toLowerCase().includes("no win, no fee")) {
      serviceSchema.termsOfService = `${baseUrl}/terms-conditions`;
    }

    graph.push(serviceSchema);
  }

  // 7. FAQPage (conditional - when FAQ provided)
  if (faq && faq.length > 0) {
    const faqPage = {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      mainEntity: faq.map(item => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer", 
          text: item.answer
        }
      }))
    };
    graph.push(faqPage);
  }

  // 8. BlogPosting (conditional - for blog pages)
  if (blog) {
    const blogPosting = {
      "@type": "BlogPosting",
      "@id": `${canonicalUrl}#article`,
      headline: blog.headline || title,
      description: description,
      url: canonicalUrl,
      datePublished: blog.datePublished || new Date().toISOString().split('T')[0],
      dateModified: blog.dateModified || new Date().toISOString().split('T')[0],
      author: {
        "@type": "Organization",
        name: companyData.name,
        "@id": `${baseUrl}/#org`
      },
      publisher: {
        "@id": `${baseUrl}/#org`
      },
      image: [fallbackImage],
      inLanguage: "en-AU",
      isPartOf: {
        "@id": `${baseUrl}/#website`
      }
    };

    if (blog.excerpt) {
      blogPosting.abstract = blog.excerpt;
    }

    graph.push(blogPosting);
  }

  return graph;
}

/**
 * Helper function to humanize URL segments
 * @param {string} segment - URL segment
 * @returns {string} Humanized segment
 */
function humanizeSegment(segment) {
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/([A-Z])/g, ' $1')
    .trim();
}

/**
 * Helper to detect if current page is a service page
 * @param {string} pathname - Current pathname
 * @returns {boolean} Whether this is likely a service page
 */
export function isServicePage(pathname) {
  const servicePatterns = [
    'credit-repair',
    'court-judgment-removal',
    'credit-enquiry-removal',
    'worst-repayment-history-removal',
    'credit-score',
    'default-removal',
    'credit_repair_sydney',
    'our-services'
  ];
  
  return servicePatterns.some(pattern => pathname.includes(pattern));
}

/**
 * Helper to detect if current page is a blog page
 * @param {string} pathname - Current pathname
 * @returns {boolean} Whether this is a blog page
 */
export function isBlogPage(pathname) {
  return pathname.startsWith('/blog') || pathname.startsWith('/blog-details');
}

/**
 * Helper to extract service name from title or pathname
 * @param {string} title - Page title
 * @param {string} pathname - Current pathname
 * @returns {string} Service name
 */
export function extractServiceName(title, pathname) {
  // Try to extract from title first
  if (title) {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('court judgment removal')) return 'Court Judgment Removal';
    if (titleLower.includes('credit enquiry removal')) return 'Credit Enquiry Removal';
    if (titleLower.includes('credit repair')) {
      // Check for location-specific credit repair
      if (titleLower.includes('melbourne')) return 'Credit Repair Services Melbourne';
      if (titleLower.includes('sydney')) return 'Credit Repair Services Sydney';
      if (titleLower.includes('brisbane')) return 'Credit Repair Services Brisbane';
      if (titleLower.includes('perth')) return 'Credit Repair Services Perth';
      if (titleLower.includes('adelaide')) return 'Credit Repair Services Adelaide';
      if (titleLower.includes('darwin')) return 'Credit Repair Services Darwin';
      if (titleLower.includes('hobart')) return 'Credit Repair Services Hobart';
      if (titleLower.includes('canberra')) return 'Credit Repair Services Canberra';
      return 'Credit Repair Services';
    }
    if (titleLower.includes('worst repayment history')) return 'Worst Repayment History Removal';
    if (titleLower.includes('our services')) return 'Credit Repair Services';
  }

  // Fall back to pathname
  if (pathname.includes('court-judgment-removal')) return 'Court Judgment Removal';
  if (pathname.includes('credit-enquiry-removal')) return 'Credit Enquiry Removal';
  if (pathname.includes('worst-repayment-history')) return 'Worst Repayment History Removal';
  if (pathname.includes('our-services')) return 'Credit Repair Services';
  
  // Location-specific credit repair
  if (pathname.includes('credit-repair-melbourne')) return 'Credit Repair Services Melbourne';
  if (pathname.includes('credit-repair-sydney') || pathname.includes('credit_repair_sydney')) return 'Credit Repair Services Sydney';
  if (pathname.includes('credit-repair-brisbane')) return 'Credit Repair Services Brisbane';
  if (pathname.includes('credit-repair-perth')) return 'Credit Repair Services Perth';
  if (pathname.includes('credit-repair-adelaide')) return 'Credit Repair Services Adelaide';
  if (pathname.includes('credit-repair-darwin')) return 'Credit Repair Services Darwin';
  if (pathname.includes('credit-repair-hobart')) return 'Credit Repair Services Hobart';
  if (pathname.includes('credit-repair-canberra')) return 'Credit Repair Services Canberra';
  if (pathname.includes('credit-repair')) return 'Credit Repair Services';
  
  return title; // Default fallback
}
