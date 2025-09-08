// utils/generateMinimalStructuredData.js

function generateMinimalStructuredData({
  pathname,
  title,
  description,
  isService = false,
  serviceType = null,
  breadcrumbs = null,
  faqData = null
}) {
  const baseUrl = "https://www.australiancreditsolutions.com.au";
  const canonicalUrl = `${baseUrl}${pathname}`;

  // NEW: person image URL + @id we’ll re-use
  const personImageUrl = `${baseUrl}/person.jpeg`;
  const personImageId = `${baseUrl}#elisa-image`;

  const graph = [
    // Organization (same as homepage, without aggregateRating)
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
      ]
    },

    // NEW: ImageObject node for the person's image
    {
      "@type": "ImageObject",
      "@id": personImageId,
      "url": personImageUrl,
      "contentUrl": personImageUrl
      // Optional (add if you know them):
      // "width": 800,
      // "height": 800,
      // "caption": "Elisa Rothschild"
    },

    // Person (same across all pages) — now referencing the image by @id
    {
      "@type": "Person",
      "@id": "https://www.australiancreditsolutions.com.au#elisa",
      "name": "Elisa Rothschild",
      "jobTitle": "Principal Lawyer & Director",
      "alumniOf": "Monash University",
      "worksFor": { "@id": "https://www.australiancreditsolutions.com.au#org" },
      "knowsAbout": [
        "Credit Repair",
        "Credit Law",
        "Family Law",
        "Debt Negotiation",
        "Consumer Finance"
      ],
      "sameAs": "https://www.linkedin.com/in/elisa-rothschild",
      "image": { "@id": personImageId } // <-- this is the key addition
    },

    // WebSite (same across all pages)
    {
      "@type": "WebSite",
      "@id": "https://www.australiancreditsolutions.com.au#website",
      "url": "https://www.australiancreditsolutions.com.au",
      "name": "Australian Credit Solutions",
      "publisher": { "@id": "https://www.australiancreditsolutions.com.au#org" }
    }
  ];

  // ...the rest of your function remains unchanged...
  // (Service, WebPage, BreadcrumbList, FAQPage, return object)
  
  // Add Service if this is a service page
  if (isService && serviceType) {
    graph.push({
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      "serviceType": serviceType,
      "name": serviceType,
      "url": canonicalUrl,
      "description": description,
      "provider": { "@id": "https://www.australiancreditsolutions.com.au#org" },
      "areaServed": "Australia",
      "offers": {
        "@type": "Offer",
        "category": "ProfessionalService",
        "availability": "https://schema.org/InStock"
      }
    });
  }

  const webPage = {
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    "url": canonicalUrl,
    "name": title,
    "description": description,
    "reviewedBy": { "@id": "https://www.australiancreditsolutions.com.au#elisa" },
    "isPartOf": { "@id": "https://www.australiancreditsolutions.com.au#website" }
  };

  if (isService) {
    webPage.about = { "@id": `${canonicalUrl}#service` };
  } else {
    webPage.about = { "@id": "https://www.australiancreditsolutions.com.au#org" };
  }

  graph.push(webPage);

  let breadcrumbItems;
  if (breadcrumbs && breadcrumbs.length > 0) {
    breadcrumbItems = breadcrumbs;
  } else {
    breadcrumbItems = [
      { position: 1, name: "Home", item: baseUrl }
    ];
    if (pathname !== "/") {
      const segments = pathname.split("/").filter(Boolean);
      segments.forEach((segment, index) => {
        const name = humanizeSegment(segment);
        const url = `${baseUrl}/${segments.slice(0, index + 1).join("/")}`;
        breadcrumbItems.push({
          position: index + 2,
          name,
          item: url
        });
      });
    }
  }

  graph.push({
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumbs`,
    "itemListElement": breadcrumbItems.map(item => ({
      "@type": "ListItem",
      "position": item.position,
      "name": item.name,
      "item": item.item
    }))
  });

  if (faqData && Array.isArray(faqData) && faqData.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}

// Helper function to humanize URL segments
function humanizeSegment(segment) {
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export { generateMinimalStructuredData };