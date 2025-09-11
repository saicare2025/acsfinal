// next-sitemap.config.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://www.australiancreditsolutions.com.au';

const iso = (d) => (d instanceof Date ? d : new Date(d)).toISOString();

function tryGetLastmodForRoute(route) {
  const candidates = [
    path.join(process.cwd(), 'app', route === '/' ? 'page.js' : route.replace(/^\//, ''), 'page.js'),
    path.join(process.cwd(), 'app', route === '/' ? 'page.jsx' : route.replace(/^\//, ''), 'page.jsx'),
    path.join(process.cwd(), 'pages', route === '/' ? 'index.js' : `${route.replace(/^\//, '')}.js`),
    path.join(process.cwd(), 'pages', route === '/' ? 'index.jsx' : `${route.replace(/^\//, '')}.jsx`),
  ];
  for (const p of candidates) {
    try {
      const stat = fs.statSync(p);
      if (stat?.mtime) return iso(stat.mtime);
    } catch (_) {}
  }
  return iso(new Date());
}

/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  autoLastmod: true,
  sitemapSize: 45000,
  trailingSlash: false,

  changefreq: 'weekly',
  priority: 0.7,

  additionalSitemaps: [`${SITE_URL}/server-sitemap.xml`],

  exclude: ['/server-sitemap.xml', '/404', '/500', '/_error'],

  transform: async (config, pathUrl) => {
    let priority = 0.7;
    let changefreq = 'weekly';

    if (pathUrl === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (/^\/(blogs|blog|blog-details)/.test(pathUrl)) {
      priority = 0.6;
      changefreq = 'weekly';
    } else if (/privacy-policy|terms-conditions|complaints-handling-policy/.test(pathUrl)) {
      priority = 0.3;
      changefreq = 'yearly';
    }

    return {
      loc: pathUrl,
      changefreq,
      priority,
      lastmod: tryGetLastmodForRoute(pathUrl),
    };
  },

  additionalPaths: async () => {
    const staticPaths = [
      { loc: '/', changefreq: 'daily', priority: 1.0, lastmod: iso(new Date()) },
      { loc: '/credit-repair-adelaide',    changefreq: 'monthly', priority: 0.8 },
      { loc: '/credit-repair-brisbane',    changefreq: 'monthly', priority: 0.8 },
      { loc: '/credit-repair-canberra',    changefreq: 'monthly', priority: 0.8 },
      { loc: '/credit-repair-darwin',      changefreq: 'monthly', priority: 0.8 },
      { loc: '/credit-repair-hobart',      changefreq: 'monthly', priority: 0.8 },
      { loc: '/credit-repair-melbourne',   changefreq: 'monthly', priority: 0.8 },
      { loc: '/credit-repair-perth',       changefreq: 'monthly', priority: 0.8 },
      { loc: '/credit_repair_sydney',      changefreq: 'monthly', priority: 0.8 },
      { loc: '/credit-score',              changefreq: 'monthly', priority: 0.8 },
      { loc: '/meeting-schedule',          changefreq: 'monthly', priority: 0.7 },
      { loc: '/privacy-policy',            changefreq: 'yearly',  priority: 0.5 },
      { loc: '/terms-conditions',          changefreq: 'yearly',  priority: 0.5 },
      { loc: '/complaints-handling-policy',changefreq: 'yearly',  priority: 0.5 },
      { loc: '/testimonial',               changefreq: 'monthly', priority: 0.6 },
      { loc: '/blogs',                     changefreq: 'weekly',  priority: 0.6 },
    ].map((p) => ({ ...p, lastmod: p.lastmod ?? tryGetLastmodForRoute(p.loc) }));

    const blogFilePath = path.join(__dirname, 'data', 'blogs_data.json');
    let blogData = [];
    try {
      blogData = JSON.parse(fs.readFileSync(blogFilePath, 'utf-8'));
    } catch (_) {}

    const blogPaths = (blogData || []).map((blog) => ({
      loc: `/blog-details/${blog.slug}`,
      changefreq: 'weekly',
      priority: 0.6,
      lastmod: iso(blog.updatedAt || blog.publishedAt || new Date()),
    }));

    return [...staticPaths, ...blogPaths];
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/_next/', '/static/', '/assets/*',
          '/api/*',
          '/server-sitemap.xml',
          '/404', '/500',
          '/*?*',
          '/64dae32494cf5d49dc6a6c49/',
        ],
      },
    ],
    additionalSitemaps: [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/server-sitemap.xml`],
  },
};
