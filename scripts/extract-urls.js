import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the sitemap file
const sitemapPath = path.join(__dirname, '../public/sitemap-0.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// Extract URLs using regex
const urlRegex = /<loc>(https:\/\/www\.australiancreditsolutions\.com\.au\/[^<]+)<\/loc>/g;
const urls = [];
let match;

while ((match = urlRegex.exec(sitemapContent)) !== null) {
  const fullUrl = match[1];
  const pathname = fullUrl.replace('https://www.australiancreditsolutions.com.au', '');
  
  // Exclude blog-details URLs
  if (!pathname.includes('/blog-details/')) {
    urls.push({
      url: fullUrl,
      pathname: pathname
    });
  }
}

// Create the JSON structure
const urlData = {
  generated: new Date().toISOString(),
  totalUrls: urls.length,
  urls: urls
};

// Write to url.json
const outputPath = path.join(__dirname, '../url.json');
fs.writeFileSync(outputPath, JSON.stringify(urlData, null, 2));

console.log(`✅ Extracted ${urls.length} URLs (excluding blog-details)`);
console.log(`📄 Saved to: ${outputPath}`);
console.log(`\n📊 Summary:`);
console.log(`- Total URLs found: ${urls.length}`);
console.log(`- Blog-details URLs excluded: ${sitemapContent.split('/blog-details/').length - 1}`);

// Show first few URLs as preview
console.log(`\n🔍 Preview of first 10 URLs:`);
urls.slice(0, 10).forEach((item, index) => {
  console.log(`${index + 1}. ${item.pathname}`);
});
