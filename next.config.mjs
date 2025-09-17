/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bundle analyzer for development
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config) => {
      config.plugins.push(
        new (require('@next/bundle-analyzer')({
          enabled: true,
        }))()
      );
      return config;
    },
  }),

  // Optimize package imports for better tree-shaking
  experimental: {
    optimizePackageImports: ['@heroicons/react', 'react-icons', 'lucide-react'],
  },

  // Image optimization for better LCP
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'www.pngitem.com' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com' },
      { protocol: 'https', hostname: 'img.freepik.com' },
      { protocol: 'https', hostname: 'static.vecteezy.com' },
      { protocol: 'https', hostname: 'ui-avatars.com' },
      { protocol: 'https', hostname: 'cdn.productreview.com.au' },
      { protocol: 'https', hostname: 'ui-avatars.com' },
    ],
  },

  // Add compression and caching headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
      {
        source: '/assets/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.(js|css|png|jpg|jpeg|gif|webp|svg|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // 👇 Add redirects here
  async redirects() {
    return [
      // Simple page redirect
      {
        source: '/assesment',
        destination: '/free-credit-assessment',
        permanent: true,
      },
       {
        source: '/credit-repair-after-divorce',
        destination: '/credit-repair-after-divorce-or-separation',
        permanent: true,
      },
       {
        source: '/credit-repair-first-home-buyers',
        destination: '/credit-repair-for-first-home-buyers',
        permanent: true,
      },
       {
        source: '/credit-repair-centrelink-recipients',
        destination: '/credit-repair-for-centrelink-recipients-australia',
        permanent: true,
      },
       {
        source: '/services',
        destination: '/our-services',
        permanent: true,
      },
       {
        source: '/credit-repair-bendigo-ballarat',
        destination: '/credit-repair-bendigo-ballarat-regional-victoria',
        permanent: true,
      },
      {
        source: '/default-removal-services',
        destination: '/default-removal-services-australia',
        permanent: true,
      },
      {
        source: '/late-payment-removal',
        destination: '/does-late-rent-payment-affect-credit-score-australia',
        permanent: true,
      },
      {
        source: '/credit-repair-car-finance',
        destination: '/credit-repair-for-car-finance',
        permanent: true,
      },
      {
        source: '/rhi-removal',
        destination: '/worst-repayment-history-removal',
        permanent: true,
      },
      {
        source: '/default-removal',
        destination: '/default-removal-services-australia',
        permanent: true,
      },
      {
        source: '/rhi-dispute-australia',
        destination: '/worst-repayment-history-removal',
        permanent: true,
      },
      {
        source: '/credit-file-cleanup',
        destination: '/credit-repair-australia',
        permanent: true,
      },
      {
        source: '/remove-incorrect-rhi-credit-report',
        destination: '/worst-repayment-history-removal',
        permanent: true,
      },
      {
        source: '/rhi-credit-repair',
        destination: '/worst-repayment-history-removal',
        permanent: true,
      },
      {
        source: '/repayment-history-removal',
        destination: '/worst-repayment-history-removal',
        permanent: true,
      },
      {
        source: '/credit-payment-history-cleanup',
        destination: '/worst-repayment-history-removal',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/complaints-handling-policy',
        destination: '/complaints-handling-policy',
        permanent: true,
      },
     
    ];
  },
};

export default nextConfig;
