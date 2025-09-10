#!/usr/bin/env node

/**
 * Link Audit Script
 * Audits and fixes links in blogs_data.json with comprehensive validation and repair
 * 
 * Features:
 * - HTTP validation with HEAD/GET fallback
 * - Redirect following (up to 5)
 * - Internal vs external link handling
 * - Sitemap-based canonical URL matching
 * - Heuristic link repair for external URLs
 * - Allowlist preservation for important links
 * - Idempotent operation
 * - Comprehensive reporting
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { XMLParser } from 'fast-xml-parser';
import Papa from 'papaparse';

// Configuration
const CONFIG = {
  INTERNAL_DOMAIN: 'australiancreditsolutions.com.au',
  TIMEOUT: 8000,
  MAX_REDIRECTS: 5,
  MAX_CONCURRENT: 8,
  BLOGS_DATA_PATH: './data/blogs_data.json',
  IMPORTANT_LINKS_PATH: './important_links.json',
  SITEMAP_PATH: './public/sitemap.xml',
  OUTPUT_REPORT_PATH: './link_audit_report.csv'
};

// Global state
let canonicalUrls = new Set();
let importantLinks = new Set();
let auditResults = [];

/**
 * Initialize the script by loading sitemaps and important links
 */
async function initialize() {
  console.log('🔍 Initializing link audit...');
  
  try {
    // Load important links allowlist
    const importantLinksData = await fs.readFile(CONFIG.IMPORTANT_LINKS_PATH, 'utf8');
    const importantLinksArray = JSON.parse(importantLinksData);
    importantLinks = new Set(importantLinksArray.map(url => normalizeUrl(url)));
    console.log(`✅ Loaded ${importantLinks.size} important links`);
    
    // Load and parse sitemaps
    await loadSitemaps();
    console.log(`✅ Loaded ${canonicalUrls.size} canonical URLs from sitemap`);
    
  } catch (error) {
    console.error('❌ Initialization failed:', error.message);
    process.exit(1);
  }
}

/**
 * Load sitemaps and extract canonical URLs
 */
async function loadSitemaps() {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_'
  });
  
  try {
    // Read main sitemap
    const sitemapContent = await fs.readFile(CONFIG.SITEMAP_PATH, 'utf8');
    const sitemapData = parser.parse(sitemapContent);
    
    // Handle sitemap index
    if (sitemapData.sitemapindex?.sitemap) {
      const sitemaps = Array.isArray(sitemapData.sitemapindex.sitemap) 
        ? sitemapData.sitemapindex.sitemap 
        : [sitemapData.sitemapindex.sitemap];
      
      for (const sitemap of sitemaps) {
        const sitemapUrl = sitemap.loc;
        const sitemapPath = sitemapUrl.replace(`https://www.${CONFIG.INTERNAL_DOMAIN}`, './public');
        
        try {
          const nestedContent = await fs.readFile(sitemapPath, 'utf8');
          const nestedData = parser.parse(nestedContent);
          extractUrlsFromSitemap(nestedData);
        } catch (error) {
          console.warn(`⚠️  Could not load sitemap: ${sitemapPath}`);
        }
      }
    } else {
      // Handle direct sitemap
      extractUrlsFromSitemap(sitemapData);
    }
    
  } catch (error) {
    console.warn('⚠️  Could not load sitemap, continuing without canonical URL matching');
  }
}

/**
 * Extract URLs from parsed sitemap data
 */
function extractUrlsFromSitemap(sitemapData) {
  if (sitemapData.urlset?.url) {
    const urls = Array.isArray(sitemapData.urlset.url) 
      ? sitemapData.urlset.url 
      : [sitemapData.urlset.url];
    
    for (const url of urls) {
      if (url.loc) {
        canonicalUrls.add(normalizeUrl(url.loc));
      }
    }
  }
}

/**
 * Normalize URL for comparison
 */
function normalizeUrl(url) {
  try {
    const urlObj = new URL(url);
    let pathname = urlObj.pathname.toLowerCase();
    
    // Remove trailing slash except for root
    if (pathname !== '/' && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1);
    }
    
    return `${urlObj.protocol}//${urlObj.host.toLowerCase()}${pathname}`;
  } catch (error) {
    return url.toLowerCase();
  }
}

/**
 * Check if URL is internal
 */
function isInternalUrl(url) {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.toLowerCase().includes(CONFIG.INTERNAL_DOMAIN);
  } catch (error) {
    return false;
  }
}

/**
 * Find best matching canonical URL for internal links
 */
function findBestCanonicalMatch(originalUrl) {
  const normalized = normalizeUrl(originalUrl);
  
  // Exact match
  if (canonicalUrls.has(normalized)) {
    return normalized;
  }
  
  // Token-based matching
  const originalPath = new URL(originalUrl).pathname.toLowerCase();
  const originalTokens = originalPath.split('/').filter(Boolean);
  
  let bestMatch = null;
  let bestScore = 0;
  
  for (const canonical of canonicalUrls) {
    const canonicalPath = new URL(canonical).pathname.toLowerCase();
    const canonicalTokens = canonicalPath.split('/').filter(Boolean);
    
    // Calculate overlap score
    const commonTokens = originalTokens.filter(token => 
      canonicalTokens.some(canonicalToken => 
        canonicalToken.includes(token) || token.includes(canonicalToken)
      )
    );
    
    const score = commonTokens.length / Math.max(originalTokens.length, canonicalTokens.length);
    
    if (score > bestScore && score > 0.3) { // Minimum 30% overlap
      bestScore = score;
      bestMatch = canonical;
    }
  }
  
  return bestMatch;
}

/**
 * Apply heuristic fixes to external URLs
 */
function applyHeuristicFixes(url) {
  const fixes = [];
  
  try {
    const urlObj = new URL(url);
    
    // Remove UTM parameters
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    let hasUtm = false;
    utmParams.forEach(param => {
      if (urlObj.searchParams.has(param)) {
        urlObj.searchParams.delete(param);
        hasUtm = true;
      }
    });
    if (hasUtm) fixes.push('removed_utm');
    
    // Remove trailing slash
    if (urlObj.pathname !== '/' && urlObj.pathname.endsWith('/')) {
      urlObj.pathname = urlObj.pathname.slice(0, -1);
      fixes.push('removed_trailing_slash');
    }
    
    // Upgrade HTTP to HTTPS
    if (urlObj.protocol === 'http:') {
      urlObj.protocol = 'https:';
      fixes.push('upgraded_https');
    }
    
    return { url: urlObj.toString(), fixes };
  } catch (error) {
    return { url, fixes: [] };
  }
}

/**
 * Validate URL with HTTP request
 */
async function validateUrl(url, isImportant = false) {
  const result = {
    url,
    statusCode: null,
    finalUrl: url,
    isRedirect: false,
    error: null,
    timeout: false
  };
  
  try {
    const response = await axios({
      method: 'HEAD',
      url,
      timeout: CONFIG.TIMEOUT,
      maxRedirects: CONFIG.MAX_REDIRECTS,
      validateStatus: () => true // Accept all status codes
    });
    
    result.statusCode = response.status;
    result.finalUrl = response.request.res.responseUrl || url;
    result.isRedirect = response.request.res.responseUrl !== url;
    
    // If HEAD fails with 405, try GET
    if (response.status === 405) {
      const getResponse = await axios({
        method: 'GET',
        url,
        timeout: CONFIG.TIMEOUT,
        maxRedirects: CONFIG.MAX_REDIRECTS,
        validateStatus: () => true
      });
      
      result.statusCode = getResponse.status;
      result.finalUrl = getResponse.request.res.responseUrl || url;
      result.isRedirect = getResponse.request.res.responseUrl !== url;
    }
    
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      result.timeout = true;
      result.error = 'timeout';
    } else if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
      result.statusCode = 404;
      result.error = 'not_found';
    } else {
      result.error = error.message;
    }
  }
  
  return result;
}

/**
 * Process a single link
 */
async function processLink(originalHref, blogId, isImportant = false) {
  const isInternal = isInternalUrl(originalHref);
  const normalized = normalizeUrl(originalHref);
  
  // Check if it's in the allowlist
  const isAllowlisted = importantLinks.has(normalized);
  
  const result = {
    blogId,
    originalHref,
    finalAction: 'kept',
    newHref: originalHref,
    statusCode: null,
    isInternal,
    reason: 'valid',
    suggestedRedirectFrom: null,
    suggestedRedirectTo: null
  };
  
  // Validate the URL
  const validation = await validateUrl(originalHref, isAllowlisted);
  result.statusCode = validation.statusCode;
  result.finalUrl = validation.finalUrl;
  
  // Handle timeouts and errors for allowlisted links
  if ((validation.timeout || validation.error) && isAllowlisted) {
    result.reason = 'allowlisted_preserved';
    return result;
  }
  
  // Handle internal links
  if (isInternal) {
    if (validation.statusCode === 404 || validation.statusCode === 410) {
      const canonicalMatch = findBestCanonicalMatch(originalHref);
      
      if (canonicalMatch) {
        result.finalAction = 'replaced';
        result.newHref = canonicalMatch;
        result.reason = 'replaced_with_canonical';
      } else {
        // Suggest redirect to best matching URL
        const bestMatch = findBestCanonicalMatch(originalHref);
        if (bestMatch) {
          result.suggestedRedirectFrom = originalHref;
          result.suggestedRedirectTo = bestMatch;
          result.finalAction = 'replaced';
          result.newHref = bestMatch;
          result.reason = 'suggested_redirect';
        } else {
          result.finalAction = 'removed';
          result.newHref = '';
          result.reason = 'no_canonical_match';
        }
      }
    } else if (validation.statusCode >= 200 && validation.statusCode < 400) {
      result.reason = 'valid';
    } else {
      result.finalAction = 'removed';
      result.newHref = '';
      result.reason = `http_error_${validation.statusCode}`;
    }
  } else {
    // Handle external links
    if (validation.statusCode === 404 || validation.statusCode === 410) {
      // Try heuristic fixes
      const { url: fixedUrl, fixes } = applyHeuristicFixes(originalHref);
      
      if (fixes.length > 0) {
        const fixedValidation = await validateUrl(fixedUrl);
        
        if (fixedValidation.statusCode >= 200 && fixedValidation.statusCode < 400) {
          result.finalAction = 'replaced';
          result.newHref = fixedUrl;
          result.reason = `fixed_${fixes.join('_')}`;
        } else {
          result.finalAction = 'removed';
          result.newHref = '';
          result.reason = 'heuristic_fixes_failed';
        }
      } else {
        result.finalAction = 'removed';
        result.newHref = '';
        result.reason = 'external_404_410';
      }
    } else if (validation.statusCode >= 200 && validation.statusCode < 400) {
      result.reason = 'valid';
    } else if (validation.timeout) {
      result.reason = 'timeout';
    } else {
      result.finalAction = 'removed';
      result.newHref = '';
      result.reason = `external_error_${validation.statusCode}`;
    }
  }
  
  return result;
}

/**
 * Process links in HTML content with concurrency control
 */
async function processLinksInContent(content, blogId) {
  const $ = cheerio.load(content);
  const links = [];
  
  // Extract all links
  $('a[href]').each((index, element) => {
    const href = $(element).attr('href');
    if (href && href.startsWith('http')) {
      links.push({ element, href, index });
    }
  });
  
  if (links.length === 0) {
    return { content, results: [] };
  }
  
  console.log(`  📝 Processing ${links.length} links in ${blogId}...`);
  
  // Process links with concurrency control
  const results = [];
  const semaphore = new Array(CONFIG.MAX_CONCURRENT).fill(null);
  let linkIndex = 0;
  
  const processNext = async () => {
    if (linkIndex >= links.length) return;
    
    const link = links[linkIndex++];
    const isImportant = importantLinks.has(normalizeUrl(link.href));
    
    try {
      const result = await processLink(link.href, blogId, isImportant);
      results.push(result);
      
      // Apply changes to HTML
      if (result.finalAction === 'replaced') {
        $(link.element).attr('href', result.newHref);
      } else if (result.finalAction === 'removed') {
        // Unwrap link but keep text
        const text = $(link.element).text();
        $(link.element).replaceWith(text);
      }
      
    } catch (error) {
      console.error(`    ❌ Error processing link ${link.href}:`, error.message);
      results.push({
        blogId,
        originalHref: link.href,
        finalAction: 'kept',
        newHref: link.href,
        statusCode: null,
        isInternal: isInternalUrl(link.href),
        reason: 'processing_error',
        suggestedRedirectFrom: null,
        suggestedRedirectTo: null
      });
    }
    
    // Process next link
    await processNext();
  };
  
  // Start concurrent processing
  await Promise.all(semaphore.map(() => processNext()));
  
  return { content: $.html(), results };
}

/**
 * Main audit function
 */
async function auditBlogs() {
  console.log('📚 Loading blogs data...');
  
  try {
    const blogsData = JSON.parse(await fs.readFile(CONFIG.BLOGS_DATA_PATH, 'utf8'));
    console.log(`✅ Loaded ${blogsData.length} blogs`);
    
    let totalLinks = 0;
    let keptLinks = 0;
    let replacedLinks = 0;
    let removedLinks = 0;
    let internalLinks = 0;
    let externalLinks = 0;
    
    // Process each blog
    for (let i = 0; i < blogsData.length; i++) {
      const blog = blogsData[i];
      const blogId = blog.slug || `blog-${i}`;
      
      console.log(`\n📖 Processing blog ${i + 1}/${blogsData.length}: ${blogId}`);
      
      if (!blog.content) {
        console.log('  ⚠️  No content found, skipping...');
        continue;
      }
      
      const { content: updatedContent, results } = await processLinksInContent(blog.content, blogId);
      
      // Update blog content
      blogsData[i].content = updatedContent;
      
      // Aggregate results
      auditResults.push(...results);
      
      const blogStats = {
        total: results.length,
        kept: results.filter(r => r.finalAction === 'kept').length,
        replaced: results.filter(r => r.finalAction === 'replaced').length,
        removed: results.filter(r => r.finalAction === 'removed').length,
        internal: results.filter(r => r.isInternal).length,
        external: results.filter(r => !r.isInternal).length
      };
      
      totalLinks += blogStats.total;
      keptLinks += blogStats.kept;
      replacedLinks += blogStats.replaced;
      removedLinks += blogStats.removed;
      internalLinks += blogStats.internal;
      externalLinks += blogStats.external;
      
      console.log(`  📊 Blog stats: ${blogStats.total} total, ${blogStats.kept} kept, ${blogStats.replaced} replaced, ${blogStats.removed} removed`);
    }
    
    // Save updated blogs data
    console.log('\n💾 Saving updated blogs data...');
    await fs.writeFile(CONFIG.BLOGS_DATA_PATH, JSON.stringify(blogsData, null, 2));
    
    // Generate report
    await generateReport();
    
    // Print summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 LINK AUDIT SUMMARY');
    console.log('='.repeat(60));
    console.log(`Total links scanned: ${totalLinks}`);
    console.log(`Links kept: ${keptLinks} (${((keptLinks/totalLinks)*100).toFixed(1)}%)`);
    console.log(`Links replaced: ${replacedLinks} (${((replacedLinks/totalLinks)*100).toFixed(1)}%)`);
    console.log(`Links removed: ${removedLinks} (${((removedLinks/totalLinks)*100).toFixed(1)}%)`);
    console.log(`\nInternal links: ${internalLinks}`);
    console.log(`External links: ${externalLinks}`);
    
    // Print suggested redirects
    const suggestedRedirects = auditResults.filter(r => r.suggestedRedirectFrom && r.suggestedRedirectTo);
    if (suggestedRedirects.length > 0) {
      console.log('\n' + '='.repeat(60));
      console.log('🔄 SUGGESTED 301 REDIRECTS');
      console.log('='.repeat(60));
      console.log('Add these suggested 301 redirects to your site config:');
      suggestedRedirects.forEach(redirect => {
        console.log(`${redirect.suggestedRedirectFrom} → ${redirect.suggestedRedirectTo}`);
      });
    }
    
    console.log('\n' + '='.repeat(60));
    console.log('✅ NEXT STEPS');
    console.log('='.repeat(60));
    if (suggestedRedirects.length > 0) {
      console.log('1. Add the suggested 301 redirects to your site config');
      console.log('2. Re-run internal interlinking once redirects are live');
    } else {
      console.log('1. Re-run internal interlinking to update any affected links');
    }
    console.log('2. Monitor the link_audit_report.csv for any issues');
    console.log('3. Consider running this audit regularly to maintain link health');
    
  } catch (error) {
    console.error('❌ Audit failed:', error.message);
    process.exit(1);
  }
}

/**
 * Generate CSV report
 */
async function generateReport() {
  console.log('📋 Generating audit report...');
  
  const csvData = auditResults.map(result => ({
    blogId: result.blogId,
    originalHref: result.originalHref,
    finalAction: result.finalAction,
    newHref: result.newHref,
    statusCode: result.statusCode || 'N/A',
    isInternal: result.isInternal,
    reason: result.reason,
    suggestedRedirectFrom: result.suggestedRedirectFrom || '',
    suggestedRedirectTo: result.suggestedRedirectTo || ''
  }));
  
  const csv = Papa.unparse(csvData);
  await fs.writeFile(CONFIG.OUTPUT_REPORT_PATH, csv);
  console.log(`✅ Report saved to ${CONFIG.OUTPUT_REPORT_PATH}`);
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting Link Audit Script');
  console.log('='.repeat(60));
  
  try {
    await initialize();
    await auditBlogs();
    
    console.log('\n🎉 Link audit completed successfully!');
    
  } catch (error) {
    console.error('\n💥 Fatal error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run the script
console.log('🚀 Link Audit Script Starting...');
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1].endsWith('link-audit.js')) {
  main();
}

export { main as auditLinks };
