const fs = require('fs');
const path = require('path');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.australiancreditsolutions.com.au',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/server-sitemap.xml'],

  additionalPaths: async (config) => {
    // 1. Load static paths
    const staticPaths = [
      { loc: '/credit-repair-adelaide', changefreq: 'monthly', priority: 0.8 },
      { loc: '/credit-repair-brisbane', changefreq: 'monthly', priority: 0.8 },
      { loc: '/credit-repair-canberra', changefreq: 'monthly', priority: 0.8 },
      { loc: '/credit-repair-darwin', changefreq: 'monthly', priority: 0.8 },
      { loc: '/credit-repair-hobart', changefreq: 'monthly', priority: 0.8 },
      { loc: '/credit-repair-melbourne', changefreq: 'monthly', priority: 0.8 },
      { loc: '/credit-repair-perth', changefreq: 'monthly', priority: 0.8 },
      { loc: '/credit_repair_sydney', changefreq: 'monthly', priority: 0.8 },
      { loc: '/credit-score', changefreq: 'monthly', priority: 0.8 },
      { loc: '/meeting-schedule', changefreq: 'monthly', priority: 0.7 },
      { loc: '/privacy-policy', changefreq: 'yearly', priority: 0.5 },
      { loc: '/terms-conditions', changefreq: 'yearly', priority: 0.5 },
      { loc: '/complaints-handling-policy', changefreq: 'yearly', priority: 0.5 },
      { loc: '/testimonial', changefreq: 'monthly', priority: 0.6 },
      { loc: '/blogs', changefreq: 'weekly', priority: 0.6 },
    ];

    // 2. Load blog posts from local JSON
    const blogFilePath = path.join(process.cwd(), 'data', 'blogs_data.json');
    const blogData = JSON.parse(fs.readFileSync(blogFilePath, 'utf-8'));

    const blogPaths = blogData.map((blog) => ({
      loc: `/blog-details/${blog.slug}`,
      changefreq: 'weekly',
      priority: 0.6,
    }));

    return [...staticPaths, ...blogPaths];
  },
};
