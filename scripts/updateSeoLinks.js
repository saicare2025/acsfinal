// Helper script to add SEO links to multiple pages
// This script adds breadcrumb, contextual links, and related services to service pages

const fs = require('fs').promises;
const path = require('path');

// Pages to update with their contextual link configurations
const pagesToUpdate = [
  // General Service Pages
  {
    filePath: 'app/get-credit-repair/page.js',
    pathname: '/get-credit-repair',
    contextualLink: {
      href: '/credit-repair-australia',
      anchor: 'comprehensive credit repair services',
      insertAfter: 'Australian Credit Solutions'
    }
  },
  {
    filePath: 'app/apply-credit-repair/page.js',
    pathname: '/apply-credit-repair',
    contextualLink: {
      href: '/fix-bad-credit-australia',
      anchor: 'fixing bad credit',
      insertAfter: 'ready to get your life back on track'
    }
  },
  {
    filePath: 'app/fix-my-credit-now/page.js',
    pathname: '/fix-my-credit-now',
    contextualLink: {
      href: '/emergency-credit-repair',
      anchor: 'emergency credit repair',
      insertAfter: 'urgent finance needs'
    }
  },
  {
    filePath: 'app/emergency-credit-repair/page.js',
    pathname: '/emergency-credit-repair',
    contextualLink: {
      href: '/fix-my-credit-now',
      anchor: 'urgent credit repair services',
      insertAfter: 'time-sensitive situations'
    }
  },
  
  // Regional Pages - Victoria
  {
    filePath: 'app/credit-repair-melbourne-victoria/page.js',
    pathname: '/credit-repair-melbourne-victoria',
    contextualLink: {
      href: '/credit-repair-melbourne',
      anchor: 'Melbourne credit repair',
      insertAfter: 'Melbourne\'s property market'
    }
  },
  {
    filePath: 'app/credit-repair-geelong-warrnambool-western-victoria/page.js',
    pathname: '/credit-repair-geelong-warrnambool-western-victoria',
    contextualLink: {
      href: '/credit-repair-melbourne-victoria',
      anchor: 'Victoria credit repair services',
      insertAfter: 'western Victorian residents'
    }
  },
  
  // Specific Service Pages
  {
    filePath: 'app/default-removal-services-australia/page.js',
    pathname: '/default-removal-services-australia',
    contextualLink: {
      href: '/remove-defaults-from-your-credit-file',
      anchor: 'removing defaults from credit files',
      insertAfter: 'default listings'
    }
  },
  {
    filePath: 'app/court-judgment-removal/page.js',
    pathname: '/court-judgment-removal',
    contextualLink: {
      href: '/credit-enquiry-removal',
      anchor: 'credit enquiry removal',
      insertAfter: 'court judgments'
    }
  }
];

async function updatePageWithSeoLinks(config) {
  const { filePath, pathname, contextualLink } = config;
  
  try {
    console.log(`Updating ${filePath}...`);
    
    // Read the file
    const content = await fs.readFile(filePath, 'utf8');
    
    // Check if already updated (look for Breadcrumb import)
    if (content.includes('import Breadcrumb from')) {
      console.log(`  ✓ ${filePath} already updated, skipping...`);
      return;
    }
    
    let updatedContent = content;
    
    // 1. Add imports
    const importPattern = /(import.*from\s+["']@\/components\/.*["'];?\s*)/;
    const lastImportMatch = content.match(/import.*from\s+["']@\/components\/.*["'];?\s*/g);
    if (lastImportMatch) {
      const lastImport = lastImportMatch[lastImportMatch.length - 1];
      updatedContent = updatedContent.replace(
        lastImport,
        lastImport + '\nimport Breadcrumb from "@/components/Breadcrumb";\nimport RelatedServices from "@/components/RelatedServices";'
      );
    }
    
    // 2. Add breadcrumb after ReviewsWidget or first Section
    const breadcrumbInsertPattern = /(ReviewsWidget\s*\/>\s*\n\s*(?:{\/\*.*?\*\/}?\s*)?)/;
    const breadcrumbReplacement = `$1
      {/* Breadcrumb Navigation */}
      <div className="mx-auto max-w-6xl px-4">
        <Breadcrumb pathname="${pathname}" />
      </div>

      `;
    
    if (breadcrumbInsertPattern.test(updatedContent)) {
      updatedContent = updatedContent.replace(breadcrumbInsertPattern, breadcrumbReplacement);
    }
    
    // 3. Add Related Services before Footer trust bar or Footer
    const relatedServicesPattern = /((?:{\/\*.*?Footer.*?\*\/}?\s*)?<section.*?mx-auto.*?max-w-6xl.*?pb-20|<Footer)/;
    const relatedServicesReplacement = `
      {/* Related Services */}
      <div className="mx-auto max-w-6xl px-4">
        <RelatedServices pathname="${pathname}" />
      </div>

      $1`;
    
    if (relatedServicesPattern.test(updatedContent)) {
      updatedContent = updatedContent.replace(relatedServicesPattern, relatedServicesReplacement);
    }
    
    // Write the updated content
    await fs.writeFile(filePath, updatedContent);
    console.log(`  ✓ Updated ${filePath} successfully`);
    
  } catch (error) {
    console.error(`  ✗ Error updating ${filePath}:`, error.message);
  }
}

async function updateAllPages() {
  console.log('Starting SEO links update for multiple pages...\n');
  
  for (const config of pagesToUpdate) {
    await updatePageWithSeoLinks(config);
  }
  
  console.log('\n✅ SEO links update completed!');
}

// Run the script
if (require.main === module) {
  updateAllPages().catch(console.error);
}

module.exports = { updatePageWithSeoLinks, pagesToUpdate };
