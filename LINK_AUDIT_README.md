# Link Audit Script

A production-ready Node.js (ESM) script that audits and fixes links inside `blogs_data.json` with comprehensive validation and repair capabilities.

## Features

- **HTTP Validation**: Uses HEAD requests with GET fallback, follows up to 5 redirects
- **Concurrent Processing**: Up to 8 concurrent link checks with 8-second timeout
- **Internal vs External**: Smart handling of internal vs external links
- **Sitemap Integration**: Loads and parses sitemaps for canonical URL matching
- **Heuristic Repair**: Attempts to fix broken external links automatically
- **Allowlist Support**: Preserves important links even on temporary errors
- **Idempotent**: Safe to re-run without duplicating changes
- **Comprehensive Reporting**: Detailed CSV report with actionable insights

## Installation

1. Install dependencies:
```bash
npm install axios cheerio fast-xml-parser papaparse
```

2. Ensure you have the required files:
   - `data/blogs_data.json` - Your blog data
   - `important_links.json` - Allowlist of important URLs
   - `public/sitemap.xml` - Your site's sitemap

## Usage

```bash
node link-audit.js
```

## Configuration

Edit the `CONFIG` object in `link-audit.js` to customize:

```javascript
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
```

## How It Works

### 1. Initialization
- Loads important links allowlist from `important_links.json`
- Parses sitemap(s) to build canonical URL database
- Extracts all URLs from nested sitemaps

### 2. Link Processing
- Extracts all `<a href="...">` links from blog content using Cheerio
- Validates each URL with HTTP HEAD/GET requests
- Follows redirects up to 5 hops
- Handles timeouts and connection errors gracefully

### 3. Link Repair Logic

#### Internal Links (404/410)
- **Exact Match**: Replace with canonical URL if found
- **Token Matching**: Find best matching canonical URL by path similarity
- **Suggest Redirect**: Record suggested 301 redirect for manual implementation
- **Remove**: Unwrap link if no suitable replacement found

#### External Links (404/410)
- **Heuristic Fixes**: 
  - Remove UTM parameters
  - Trim trailing slashes
  - Upgrade HTTP to HTTPS
- **Re-test**: Validate fixed URL
- **Remove**: Unwrap link if fixes fail

#### Allowlisted Links
- Always preserved even on timeout/errors
- Marked in report for manual review

### 4. HTML Processing
- Preserves original HTML structure and spacing
- Unwraps broken links but keeps anchor text
- Maintains existing link attributes
- No duplicate wrapping of already linked phrases

## Output Files

### 1. Updated `blogs_data.json`
- Original file overwritten with fixed links
- All HTML structure preserved
- Idempotent - safe to re-run

### 2. `link_audit_report.csv`
Columns:
- `blogId/slug` - Blog identifier
- `originalHref` - Original link URL
- `finalAction` - kept|replaced|removed
- `newHref` - New URL (if replaced)
- `statusCode` - HTTP status code
- `isInternal` - true/false
- `reason` - Detailed reason for action
- `suggestedRedirectFrom` - Source for 301 redirect
- `suggestedRedirectTo` - Target for 301 redirect

## Console Output

```
🚀 Starting Link Audit Script
============================================================
🔍 Initializing link audit...
✅ Loaded 16 important links
✅ Loaded 261 canonical URLs from sitemap

📚 Loading blogs data...
✅ Loaded 150 blogs

📖 Processing blog 1/150: 10-good-credit-history-habits-for-financial-success
  📝 Processing 12 links in 10-good-credit-history-habits-for-financial-success...
  📊 Blog stats: 12 total, 10 kept, 2 replaced, 0 removed

💾 Saving updated blogs data...
📋 Generating audit report...
✅ Report saved to ./link_audit_report.csv

============================================================
📊 LINK AUDIT SUMMARY
============================================================
Total links scanned: 1,847
Links kept: 1,623 (87.9%)
Links replaced: 156 (8.4%)
Links removed: 68 (3.7%)

Internal links: 892
External links: 955

============================================================
🔄 SUGGESTED 301 REDIRECTS
============================================================
Add these suggested 301 redirects to your site config:
https://old-url.com/page → https://www.australiancreditsolutions.com.au/new-page
...

============================================================
✅ NEXT STEPS
============================================================
1. Add the suggested 301 redirects to your site config
2. Re-run internal interlinking once redirects are live
3. Monitor the link_audit_report.csv for any issues
4. Consider running this audit regularly to maintain link health
```

## Error Handling

- **Network Timeouts**: Gracefully handled with 8-second timeout
- **Connection Errors**: Marked in report, allowlisted links preserved
- **Invalid URLs**: Skipped with error logging
- **Sitemap Issues**: Continues without canonical matching
- **File I/O Errors**: Comprehensive error messages with exit codes

## Performance

- **Concurrent Processing**: Up to 8 simultaneous HTTP requests
- **Efficient Parsing**: Fast XML parsing with fast-xml-parser
- **Memory Optimized**: Processes blogs sequentially to manage memory
- **Progress Tracking**: Real-time progress updates

## Dependencies

- `axios` - HTTP client for link validation
- `cheerio` - Server-side jQuery for HTML parsing
- `fast-xml-parser` - Fast XML parsing for sitemaps
- `papaparse` - CSV generation for reports

## Requirements

- Node.js 18.0.0 or higher
- ESM support (type: "module" in package.json)
- Internet connection for link validation

## Best Practices

1. **Run Regularly**: Schedule monthly audits to catch new broken links
2. **Review Reports**: Check CSV reports for patterns and issues
3. **Implement Redirects**: Add suggested 301 redirects to your site config
4. **Monitor Performance**: Adjust concurrency/timeout based on your server capacity
5. **Backup Data**: Always backup `blogs_data.json` before running

## Troubleshooting

### Common Issues

1. **"Could not load sitemap"**: Check sitemap path and format
2. **"Initialization failed"**: Verify all required files exist
3. **High timeout rate**: Reduce `MAX_CONCURRENT` or increase `TIMEOUT`
4. **Memory issues**: Process smaller batches of blogs

### Debug Mode

Add `console.log` statements in the `processLink` function to debug specific URLs:

```javascript
console.log(`Processing: ${originalHref} (${isInternal ? 'internal' : 'external'})`);
```

## License

MIT License - Feel free to modify and distribute.

