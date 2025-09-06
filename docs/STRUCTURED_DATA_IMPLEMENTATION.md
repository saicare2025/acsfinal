# Structured Data Implementation for Australian Credit Solutions

## Overview

This implementation provides comprehensive JSON-LD structured data for Australian Credit Solutions across all pages. The system automatically generates and injects structured data that includes:

- **Organization** (with logo, contact info, identifiers)
- **ProfessionalService** (Local Business profile)
- **WebSite** (with search functionality)
- **WebPage** (individual page data)
- **BreadcrumbList** (auto-generated from URL)
- **Service** (for service pages)
- **FAQPage** (for pages with FAQ content)
- **BlogPosting** (for blog articles)

## Company Constants Used

All structured data uses these exact company details:

```javascript
const companyData = {
  name: "Australian Credit Solutions",
  description: "Australian Credit Solutions helps individuals and businesses manage their credit profiles and financial opportunities.",
  logo: "https://www.australiancreditsolutions.com.au/logo.png",
  url: "https://www.australiancreditsolutions.com.au/",
  telephone: "+61489265737", // E.164 format
  email: "help@australiancreditsolutions.com.au",
  address: {
    streetAddress: "Level 8, 805/220 Collins Street",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    postalCode: "", // Left blank as specified
    addressCountry: "AU"
  },
  identifiers: {
    ABN: "80 650 730 699",
    ACN: "650 730 699",
    AFCA: "83546"
  }
};
```

## Architecture

### Core Files

1. **`utils/structuredData.js`** - Main utility function and helpers
2. **`components/GlobalStructuredData.js`** - Client component that auto-generates structured data
3. **`hooks/useStructuredData.js`** - React hooks for custom data injection
4. **`components/BlogStructuredDataClient.js`** - Blog-specific structured data
5. **`middleware.js`** - Updated to pass pathname in headers

### Integration Points

- **Root Layout** (`app/layout.js`) - Includes `GlobalStructuredData` component
- **All Pages** - Automatically get Organization, ProfessionalService, WebSite, WebPage, BreadcrumbList
- **Service Pages** - Auto-detected and get additional Service schema
- **FAQ Pages** - Use `useFAQStructuredData` hook for FAQ schema
- **Blog Pages** - Use `useBlogStructuredData` hook for BlogPosting schema

## How It Works

### Automatic Generation

The `GlobalStructuredData` component runs on every page and:

1. Extracts metadata from document (`title`, `description`, `og:image`)
2. Detects page type (service, blog) from pathname
3. Looks for FAQ data attributes in DOM
4. Generates comprehensive structured data graph
5. Injects JSON-LD script into document head

### Page Type Detection

```javascript
// Service pages auto-detected by URL patterns
const servicePatterns = [
  'credit-repair',
  'court-judgment-removal', 
  'credit-enquiry-removal',
  'worst-repayment-history-removal',
  'credit-score',
  'default-removal'
];

// Blog pages detected by URL patterns
pathname.startsWith('/blog') || pathname.startsWith('/blog-details')
```

### Breadcrumb Generation

Breadcrumbs are automatically built from the URL pathname:

```
/court-judgment-removal → Home > Court Judgment Removal
/credit-repair-melbourne → Home > Credit Repair Melbourne
/blog-details/my-article → Home > Blog Details > My Article
```

## Usage Examples

### Basic Usage (Automatic)

No code needed! Every page automatically gets:
- Organization
- ProfessionalService  
- WebSite
- WebPage
- BreadcrumbList

### FAQ Pages

```javascript
import { useFAQStructuredData } from '../hooks/useStructuredData';

export default function MyFAQPage() {
  const faqData = [
    {
      question: "What is credit repair?",
      answer: "Credit repair is the process of..."
    },
    {
      question: "How long does it take?", 
      answer: "Typically 6-12 weeks..."
    }
  ];

  useFAQStructuredData(faqData);
  
  return (
    // Your FAQ page content
  );
}
```

### Blog Pages

```javascript
import { useBlogStructuredData } from '../hooks/useStructuredData';

export default function BlogPost({ post }) {
  useBlogStructuredData({
    datePublished: post.publishedDate,
    dateModified: post.modifiedDate
  });

  return (
    // Your blog post content
  );
}
```

### Service Pages

Service pages are auto-detected, but you can force service detection:

```javascript
import { useStructuredData } from '../hooks/useStructuredData';

export default function MyServicePage() {
  const { updateStructuredData } = useStructuredData();
  
  useEffect(() => {
    updateStructuredData({
      forceService: true,
      serviceName: "Custom Service Name",
      serviceArea: "Sydney, NSW"
    });
  }, []);

  return (
    // Your service page content
  );
}
```

## Schema Types Generated

### Always Included

1. **Organization** with:
   - Company details and contact info
   - ABN, ACN, AFCA identifiers
   - Logo and address
   - AFCA membership

2. **ProfessionalService** with:
   - Local business profile
   - Area served: Australia
   - Price range: $$
   - Parent organization link

3. **WebSite** with:
   - Search action for site search
   - Publisher information

4. **WebPage** with:
   - Page-specific metadata
   - Image and language info

5. **BreadcrumbList** with:
   - Auto-generated from URL
   - Proper item positions

### Conditionally Included

6. **Service** (when `isService: true`):
   - Service name and description
   - Provider link to ProfessionalService
   - Area served
   - Terms of service (if "No Win, No Fee" detected)

7. **FAQPage** (when FAQ data provided):
   - Question/Answer pairs
   - Proper schema structure

8. **BlogPosting** (for blog pages):
   - Article metadata
   - Author and publisher info
   - Publication dates

## Technical Details

### JSON-LD Structure

All structured data uses a single `@graph` array:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.australiancreditsolutions.com.au/#org",
      // ... organization data
    },
    {
      "@type": "ProfessionalService", 
      "@id": "https://www.australiancreditsolutions.com.au/#service",
      // ... service data
    }
    // ... more schema objects
  ]
}
```

### @id Anchors

Each schema object has a unique `@id` for clean linking:

- Organization: `#org`
- ProfessionalService: `#service` 
- WebSite: `#website`
- WebPage: `{canonical}#webpage`
- Service: `{canonical}#service-offering`
- FAQPage: `{canonical}#faq`
- BlogPosting: `{canonical}#article`

### Image Handling

- Primary image: OG image from metadata
- Fallback: Company logo
- Used consistently across all schema types

## Validation

The structured data has been designed to pass:

- **Google Rich Results Test**
- **Schema.org validation**
- **Search Console structured data testing**

Expected rich results:
- ✅ Breadcrumbs
- ✅ Local Business
- ✅ Organization 
- ✅ FAQ (when present)
- ✅ Article (for blog posts)

## Troubleshooting

### No Structured Data Appearing

1. Check that `GlobalStructuredData` is included in layout
2. Verify page metadata is properly set
3. Check browser console for JavaScript errors

### FAQ Not Working

1. Ensure `useFAQStructuredData` hook is called
2. Verify FAQ data format (`question`, `answer` properties)
3. Check that hook is called within a React component

### Service Pages Not Detected

1. Check if URL matches service patterns in `isServicePage()`
2. Use `forceService: true` in hook if needed
3. Verify serviceName is being extracted correctly

### Structured Data Not Updating

The component listens for `structuredDataUpdate` events. Trigger manually:

```javascript
window.dispatchEvent(new CustomEvent('structuredDataUpdate'));
```

## Best Practices

1. **Keep metadata accurate** - Structured data pulls from document metadata
2. **Use semantic HTML** - Helps with automatic detection
3. **Test regularly** - Use Google's Rich Results Test
4. **Monitor Search Console** - Check for structured data errors
5. **Keep company data consistent** - Update constants file when details change

## Performance Notes

- Structured data generation is client-side for flexibility
- Minimal performance impact (runs once per page load)
- No server-side rendering required
- Automatic cleanup on page transitions
- Event-driven updates for dynamic content
