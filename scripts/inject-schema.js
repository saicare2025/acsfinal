#!/usr/bin/env node

/**
 * Script to automatically inject JSON-LD structured data into all Next.js pages
 * This script scans the app directory and adds structured data to pages that don't have it
 */

const fs = require('fs');
const path = require('path');

// Global schema data
const SCHEMA_JSON = {
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
      "@type": "WebSite",
      "@id": "https://www.australiancreditsolutions.com.au#website",
      "url": "https://www.australiancreditsolutions.com.au",
      "name": "Australian Credit Solutions",
      "publisher": { "@id": "https://www.australiancreditsolutions.com.au#org" }
    },
    {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "612",
      "bestRating": "5",
      "worstRating": "1",
      "url": "https://www.productreview.com.au/listings/australian-credit-solutions"
    }
  ]
};

// Function to recursively find all page files
function findPageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (!['node_modules', '.next', '.git'].includes(file)) {
        findPageFiles(filePath, fileList);
      }
    } else if (file === 'page.js' || file === 'page.jsx') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to check if a file already has structured data
function hasStructuredData(content) {
  return content.includes('application/ld+json') || 
         content.includes('StructuredData') ||
         content.includes('@context');
}

// Function to generate page-specific schema
function generatePageSchema(filePath) {
  const relativePath = path.relative('./app', filePath);
  const url = '/' + relativePath.replace(/\\/g, '/').replace('/page.js', '').replace('/page.jsx', '');
  
  // Extract page name from path
  const pathParts = relativePath.split(path.sep);
  const pageName = pathParts[pathParts.length - 2] || 'homepage';
  
  // Generate page-specific schema
  const pageSchema = {
    "@type": "WebPage",
    "@id": `https://www.australiancreditsolutions.com.au${url}#webpage`,
    "url": `https://www.australiancreditsolutions.com.au${url}`,
    "name": generatePageTitle(pageName),
    "description": generatePageDescription(pageName),
    "about": { "@id": "https://www.australiancreditsolutions.com.au#org" },
    "reviewedBy": { "@id": "https://www.australiancreditsolutions.com.au#elisa" },
    "isPartOf": { "@id": "https://www.australiancreditsolutions.com.au#website" }
  };
  
  return pageSchema;
}

// Function to generate page title based on path
function generatePageTitle(pageName) {
  const titleMap = {
    'credit-enquiry-removal': 'Credit Enquiry Removal | Australian Credit Solutions',
    'default-removal': 'Default Removal Services | Australian Credit Solutions',
    'credit-repair': 'Credit Repair Services | Australian Credit Solutions',
    'about': 'About Us | Australian Credit Solutions',
    'contact-us': 'Contact Us | Australian Credit Solutions',
    'services': 'Our Services | Australian Credit Solutions',
    'blog': 'Blog | Australian Credit Solutions'
  };
  
  return titleMap[pageName] || `${pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Australian Credit Solutions`;
}

// Function to generate page description based on path
function generatePageDescription(pageName) {
  const descriptionMap = {
    'credit-enquiry-removal': 'Expert legal service to remove unfair or outdated credit enquiries from your credit report, helping Australians improve credit scores and loan eligibility.',
    'default-removal': 'Professional service to remove defaults from your credit file, improving your credit score and financial opportunities.',
    'credit-repair': 'Comprehensive credit repair services to fix bad credit, remove negative listings, and improve your credit score.',
    'about': 'Learn about Australian Credit Solutions, your trusted partner for professional credit repair services across Australia.',
    'contact-us': 'Get in touch with our expert credit repair team. Free consultation and professional assistance available.',
    'services': 'Professional credit repair services including default removal, credit enquiry removal, and credit score improvement.',
    'blog': 'Expert insights and advice on credit repair, financial recovery, and improving your credit score in Australia.'
  };
  
  return descriptionMap[pageName] || 'Professional credit repair services in Australia. Expert assistance to improve your credit score and financial opportunities.';
}

// Function to inject schema into a file
function injectSchema(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already has structured data
    if (hasStructuredData(content)) {
      console.log(`✓ Skipping ${filePath} - already has structured data`);
      return;
    }
    
    // Generate page-specific schema
    const pageSchema = generatePageSchema(filePath);
    const fullSchema = {
      ...SCHEMA_JSON,
      "@graph": [...SCHEMA_JSON["@graph"], pageSchema]
    };
    
    // Add schema import and component
    const schemaImport = `import StructuredData from "@/components/StructuredData";\n`;
    const schemaComponent = `      <StructuredData schema={${JSON.stringify(fullSchema, null, 2)}} />\n`;
    
    // Add import if not present
    if (!content.includes('StructuredData')) {
      // Find the first import statement and add after it
      const importMatch = content.match(/^import.*?;$/m);
      if (importMatch) {
        const insertIndex = importMatch.index + importMatch[0].length;
        content = content.slice(0, insertIndex) + '\n' + schemaImport + content.slice(insertIndex);
      } else {
        content = schemaImport + content;
      }
    }
    
    // Add schema component to the JSX
    // Look for the main return statement and add schema component
    const returnMatch = content.match(/return\s*\(\s*<[^>]*>/);
    if (returnMatch) {
      const insertIndex = returnMatch.index + returnMatch[0].length;
      content = content.slice(0, insertIndex) + '\n' + schemaComponent + content.slice(insertIndex);
    }
    
    // Write the updated content
    fs.writeFileSync(filePath, content);
    console.log(`✓ Updated ${filePath} with structured data`);
    
  } catch (error) {
    console.error(`✗ Error updating ${filePath}:`, error.message);
  }
}

// Main execution
function main() {
  console.log('🔍 Scanning for page files...');
  
  const pageFiles = findPageFiles('./app');
  console.log(`📄 Found ${pageFiles.length} page files`);
  
  let updatedCount = 0;
  
  pageFiles.forEach(filePath => {
    injectSchema(filePath);
    updatedCount++;
  });
  
  console.log(`\n✅ Schema injection complete!`);
  console.log(`📊 Processed ${pageFiles.length} files`);
  console.log(`\n💡 The global schema is now automatically included in your root layout.`);
  console.log(`💡 Individual pages can override or extend the schema using the StructuredData component.`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { injectSchema, findPageFiles };
