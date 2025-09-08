export const metadata = {
  title:
    "Credit Repair Regional NSW | Orange Tamworth Wagga Wagga | Country Finance Specialists",
  description:
    "Regional NSW's award-winning credit repair specialists. Remove defaults for Orange wineries, Tamworth country music, Wagga Wagga agriculture. 98% success rate, country dreams fulfilled. Call 0489 265 737.",
  keywords: [
    "credit repair regional nsw",
    "orange wine finance",
    "tamworth credit repair",
    "wagga wagga agriculture",
    "bathurst finance",
    "dubbo credit repair",
    "hunter valley wine",
    "broken hill mining finance",
    "regional nsw credit specialists",
    "country finance nsw",
    "agricultural credit repair",
    "wine industry finance nsw",
    "country music finance",
    "riverina farming finance"
  ],
  authors: [{ name: "Australian Credit Solutions" }],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://www.australiancreditsolutions.com.au/credit-repair-regional-nsw",
  },
  openGraph: {
    type: "website",
    url: "https://www.australiancreditsolutions.com.au/credit-repair-regional-nsw",
    title:
      "Credit Repair Regional NSW | Wine Country Agriculture Mining | Country Dreams",
    description:
      "Regional NSW's award-winning credit repair specialists. Remove defaults for Orange wineries, Tamworth tourism, Wagga agriculture, Hunter Valley wine. Licensed professionals, country lifestyle unlocked.",
    siteName: "Australian Credit Solutions",
    locale: "en_AU",
    images: [
      {
        url: "https://www.australiancreditsolutions.com.au/images/credit-repair-regional-nsw-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Credit Repair Regional NSW - Wine Country & Agriculture Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://www.australiancreditsolutions.com.au/credit-repair-regional-nsw",
    title: "Regional NSW Credit Repair | Wine Agriculture Mining | Country Finance Specialists",
    description:
      "Award-winning Regional NSW credit repair. Orange wine, Tamworth music, Wagga agriculture, Hunter Valley mining. Licensed specialists, country dreams realized.",
    images: [
      "https://www.australiancreditsolutions.com.au/images/credit-repair-regional-nsw-twitter-card.jpg",
    ],
  },
  other: {
    "revisit-after": "30 days",
    "geo.region": "AU-NSW",
    "geo.placename": "Regional NSW, Orange, Tamworth, Wagga Wagga",
    "geo.position": "-33.2847;148.6166",
    "ICBM": "-33.2847, 148.6166",
  },
};

// Enhanced comprehensive JSON-LD structured data for Regional NSW
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.australiancreditsolutions.com.au#org",
      "name": "Australian Credit Solutions",
      "url": "https://www.australiancreditsolutions.com.au",
      "logo": { 
        "@type": "ImageObject", 
        "url": "https://www.australiancreditsolutions.com.au/logo.png" 
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "‪+61-489-265-737‬",
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
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "09:00",
        "closes": "18:30"
      }],
      "areaServed": { "@type": "Country", "name": "Australia" },
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
      },
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "ASIC Australian Credit License",
        "identifier": "532003",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Australian Securities and Investments Commission",
          "alternateName": "ASIC"
        }
      },
      "award": [
        {
          "@type": "Award",
          "name": "Industry Excellence Award 2024",
          "description": "Recognized for outstanding credit repair services and client satisfaction",
          "dateReceived": "2024-01-15"
        },
        {
          "@type": "Award",
          "name": "Industry Excellence Award 2023",
          "description": "Award for exceptional results in credit file improvements",
          "dateReceived": "2023-01-15"
        },
        {
          "@type": "Award",
          "name": "Industry Excellence Award 2022",
          "description": "Recognition for innovative credit repair methodologies",
          "dateReceived": "2022-01-15"
        }
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
      "@type": "WebSite",
      "@id": "https://www.australiancreditsolutions.com.au#website",
      "url": "https://www.australiancreditsolutions.com.au",
      "name": "Australian Credit Solutions",
      "publisher": { "@id": "https://www.australiancreditsolutions.com.au#org" }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.australiancreditsolutions.com.au/credit-repair-regional-nsw",
      "url": "https://www.australiancreditsolutions.com.au/credit-repair-regional-nsw",
      "name": "Credit Repair Regional NSW | Orange Tamworth Wagga Wagga | Country Finance Specialists",
      "description": "Regional NSW's award-winning credit repair specialists. Remove defaults for Orange wineries, Tamworth country music, Wagga Wagga agriculture. 98% success rate, ASIC licensed.",
      "datePublished": "2024-03-15",
      "dateModified": "2024-03-15",
      "inLanguage": "en-AU",
      "about": {
        "@type": "Thing",
        "name": "Credit Repair Regional NSW",
        "description": "Professional credit repair services specifically for Regional NSW residents including Orange, Tamworth, Wagga Wagga and country towns"
      },
      "mainEntity": {
        "@type": "Service",
        "name": "Regional NSW Credit Repair Services",
        "@id": "https://www.australiancreditsolutions.com.au/credit-repair-regional-nsw#service"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "@id": "https://www.australiancreditsolutions.com.au/credit-repair-regional-nsw#breadcrumb"
      },
      "reviewedBy": { "@id": "https://www.australiancreditsolutions.com.au#elisa" },
      "isPartOf": { "@id": "https://www.australiancreditsolutions.com.au#website" }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.australiancreditsolutions.com.au/credit-repair-regional-nsw#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does credit repair cost in Regional NSW?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Regional NSW service operates on a transparent No Win No Fee basis. There's a one-off admin fee of $330 that applies regardless of outcome, then our success fee is only charged when we successfully remove items from your credit file. Most Regional NSW clients find the interest rate savings from better country finance more than pay for our service within months."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with Orange wine region and Hunter Valley vineyard finance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We understand the Orange wine region, Hunter Valley vineyards, and wine tourism business requirements. Clean credit is essential to access premium rates for vineyard expansion, cellar door development, and wine tourism ventures. We help wine country residents unlock their vineyard dreams with competitive agricultural finance."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle agricultural finance for Wagga Wagga and Riverina farming?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Agricultural finance is a Regional NSW specialty. We help clients remove credit barriers for John Deere equipment, irrigation systems, livestock purchases, and farm expansion loans. Bad credit often means 12-18% agricultural rates - we help you access premium 4-8% rates instead for Wagga Wagga, Griffith, and Riverina operations."
          }
        },
        {
          "@type": "Question",
          "name": "How long does credit repair take for Regional NSW clients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Timeline varies by case complexity, but Regional NSW clients typically see results within 2-8 weeks. Urgent cases (like pending agricultural equipment purchases or time-sensitive vineyard expansion) often receive priority handling with faster timelines."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with Tamworth Country Music Festival and tourism business finance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Definitely! We offer specialized processing for Tamworth tourism businesses and Country Music Festival ventures. Same-day assessment, priority handling, and regular updates. Many Tamworth clients have had defaults removed in time for accommodation expansion or tourism business development."
          }
        },
        {
          "@type": "Question",
          "name": "Do you understand seasonal agricultural income and mining industry patterns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we work extensively with Regional NSW agricultural operations, wine industry businesses, and mining sector workers. We understand seasonal income from wheat, cotton, and wine harvests, plus mining industry employment patterns in Broken Hill and Hunter Valley regions."
          }
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.australiancreditsolutions.com.au/credit-repair-regional-nsw#service",
      "name": "Credit Repair Services Regional NSW - Wine Agriculture Mining Country Finance",
      "description": "Professional credit repair services for Regional NSW residents with 98% success rate when we take cases. Remove defaults, fix bad credit for Orange wine region, Tamworth country music, Wagga Wagga agriculture, Hunter Valley mining, and country business opportunities.",
      "provider": {
        "@type": "Organization",
        "@id": "https://www.australiancreditsolutions.com.au#org"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Orange",
          "containedInPlace": {
            "@type": "State",
            "name": "New South Wales"
          }
        },
        {
          "@type": "City",
          "name": "Tamworth",
          "containedInPlace": {
            "@type": "State",
            "name": "New South Wales"
          }
        },
        {
          "@type": "City",
          "name": "Wagga Wagga",
          "containedInPlace": {
            "@type": "State",
            "name": "New South Wales"
          }
        },
        {
          "@type": "City",
          "name": "Bathurst",
          "containedInPlace": {
            "@type": "State",
            "name": "New South Wales"
          }
        },
        {
          "@type": "City",
          "name": "Dubbo",
          "containedInPlace": {
            "@type": "State",
            "name": "New South Wales"
          }
        },
        {
          "@type": "City",
          "name": "Griffith",
          "containedInPlace": {
            "@type": "State",
            "name": "New South Wales"
          }
        },
        {
          "@type": "City",
          "name": "Albury",
          "containedInPlace": {
            "@type": "State",
            "name": "New South Wales"
          }
        },
        {
          "@type": "City",
          "name": "Broken Hill",
          "containedInPlace": {
            "@type": "State",
            "name": "New South Wales"
          }
        }
      ],
      "serviceType": "Credit Repair and Regional Agricultural Wine Mining Finance Default Removal",
      "category": "Financial Services - Agricultural & Regional",
      "offers": {
        "@type": "Offer",
        "name": "No Win No Fee Credit Repair Regional NSW",
        "description": "Credit repair service for Regional NSW residents with No Win No Fee policy. One-off admin fee of $330 applies regardless of outcome. Wine industry, agricultural, and mining finance specialization.",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "330",
          "priceCurrency": "AUD",
          "description": "Administration fee applies regardless of outcome"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Regional NSW Credit Repair Service Options",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Urgent Service - Agricultural Equipment Emergency",
            "description": "Same-day assessment for Regional NSW residents, priority handling for urgent agricultural equipment and vineyard expansion finance. Timeline: 1-3 weeks typically."
          },
          {
            "@type": "Offer",
            "name": "Wine Industry Service - Orange Hunter Valley Vineyard Finance",
            "description": "Specialized service for wine industry including vineyard expansion, cellar door development, and wine tourism ventures in Orange, Hunter Valley, Mudgee regions. Timeline: 2-6 weeks typically."
          },
          {
            "@type": "Offer",
            "name": "Agricultural Service - Wagga Griffith Riverina Farming Finance",
            "description": "Farm equipment, irrigation systems, livestock, and agricultural property finance for Wagga Wagga, Griffith, Riverina farming operations. Timeline: 3-8 weeks typically."
          },
          {
            "@type": "Offer",
            "name": "Tourism Business - Tamworth Country Music Festival Finance",
            "description": "Accommodation, entertainment, and tourism business finance for Tamworth Country Music Festival and regional NSW tourism ventures. Timeline varies by complexity."
          }
        ]
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Success Rate",
          "value": "98% when we take cases"
        },
        {
          "@type": "PropertyValue",
          "name": "License Number",
          "value": "ASIC ACL 532003"
        },
        {
          "@type": "PropertyValue",
          "name": "Service Coverage",
          "value": "Regional NSW - Orange, Tamworth, Wagga Wagga, Hunter Valley and surrounding country areas"
        },
        {
          "@type": "PropertyValue",
          "name": "Specialization",
          "value": "Wine industry finance, agricultural equipment, Riverina farming, mining industry, country tourism business finance"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.australiancreditsolutions.com.au/credit-repair-regional-nsw#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.australiancreditsolutions.com.au"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Credit Repair Services",
          "item": "https://www.australiancreditsolutions.com.au/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "New South Wales",
          "item": "https://www.australiancreditsolutions.com.au/credit-repair-nsw"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Regional NSW",
          "item": "https://www.australiancreditsolutions.com.au/credit-repair-regional-nsw"
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "name": "Australian Credit Solutions - Regional NSW",
      "description": "Award-winning credit repair specialists serving Regional NSW including Orange wine region, Tamworth country music, Wagga Wagga agriculture, Hunter Valley mining. Agricultural, wine industry, and country business finance specialists.",
      "url": "https://www.australiancreditsolutions.com.au/credit-repair-regional-nsw",
      "telephone": "0489265737",
      "email": "help@australiancreditsolutions.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AU",
        "addressRegion": "New South Wales",
        "addressLocality": "Regional NSW"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-33.2847",
        "longitude": "148.6166"
      },
      "openingHours": "Mo-Fr 09:00-18:30",
      "priceRange": "$330",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "865"
      },
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "ASIC Australian Credit License",
        "identifier": "532003"
      }
    },
    {
      "@type": "Organization",
      "name": "Australian Credit Solutions",
      "alternateName": "ACS Credit Repair",
      "description": "Award-winning Australian credit repair specialists serving Regional NSW with 98% success rate. Remove defaults, fix bad credit for wine industry, agriculture, mining, and country business finance.",
      "foundingDate": "2018",
      "legalName": "Australian Credit Solutions Pty Ltd",
      "slogan": "Australia's Most Trusted Credit Repair Specialists",
      "knowsAbout": [
        "Credit Repair",
        "Default Removal", 
        "Agricultural Finance",
        "Wine Industry Finance",
        "Mining Industry Credit",
        "Regional NSW Business Finance",
        "Consumer Credit Law",
        "Debt Negotiation"
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Australian Securities and Investments Commission",
        "alternateName": "ASIC"
      },
      "owns": {
        "@type": "Service",
        "name": "Credit Repair Services",
        "serviceArea": {
          "@type": "Country",
          "name": "Australia"
        }
      },
      "employee": {
        "@type": "Person",
        "name": "Elisa Rothschild",
        "jobTitle": "Principal Lawyer & Director"
      },
      "founder": {
        "@type": "Person", 
        "name": "Elisa Rothschild"
      }
    }
  ]
};
