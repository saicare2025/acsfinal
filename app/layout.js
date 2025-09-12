import TawkDesktopOnly from "@/components/TawkDesktopOnly";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import AnalyticsRouteTracker from "@/components/AnalyticsRouteTracker";
import ExitIntentPopupWithSuspense from "@/components/ExitIntentPopupWithSuspense";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"], display: "swap", preload: true });

export const metadata = {
  metadataBase: new URL("https://www.australiancreditsolutions.com.au"),
  title: {
    default:
      "Credit Repair Australia: Quick Solutions to Fix Bad Credit",
   
  },
  description:
    "Get defaults removed and improve your credit score with expert credit repair services in Australia. Fast, confidential, and effective",
  keywords: [
    "improve your credit score",
    "Australian Credit Solutions",
    "credit repair",
    "credit score help",
    "credit solutions Australia",
    "fix bad credit",
    "financial recovery services",
  ],
  openGraph: {
    title:
      "Credit Repair Australia: Quick Solutions to Fix Bad Credit",
    description:
      "Get defaults removed and improve your credit score with expert credit repair services in Australia. Fast, confidential, and effective",
    url: "/",
    siteName: "Australian Credit Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Australian Credit Solutions – Credit Repair Australia",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@credits_aussie",
    title:
      "Credit Repair Australia: Quick Solutions to Fix Bad Credit",
    description:
      "Get defaults removed and improve your credit score with expert credit repair services in Australia. Fast, confidential, and effective",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
    languages: { "en-AU": "/" },
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};


export default function RootLayout({ children }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-MVMW025XRV";
  const TIKTOK_ID =
    process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || "C5B6LNC6J7TSRVQBTN00";

  return (
    <html lang="en">
      <head>
        {/* Global Structured Data */}
        <StructuredData />
        
        {/* Preconnects to reduce connection latency */}
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://i.ytimg.com" crossOrigin="" />
        <link
          rel="preconnect"
          href="https://www.youtube-nocookie.com"
          crossOrigin=""
        />

        {/* GA4 (lazy, no automatic page_view) */}
        {GA_ID && (
          <>
            <Script
              id="gtag-src"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="lazyOnload"
            />
            <Script
              id="gtag-init"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);} 
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', { send_page_view: false });
                `,
              }}
            />
          </>
        )}

      
        {TIKTOK_ID && (
          <Script id="tiktok-deferred" strategy="lazyOnload">
            {`
              (function(){
                function loadTikTok(){
                  !function(w,d,t){
                    w.TiktokAnalyticsObject=t;
                    var ttq=w[t]=w[t]||[];
                    ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
                    ttq.setAndDefer=function(t,e){ t[e]=function(){ t.push([e].concat([].slice.call(arguments,0))) } };
                    for(var i=0;i<ttq.methods.length;i++) ttq.setAndDefer(ttq,ttq.methods[i]);
                    ttq.instance=function(t){ var e=ttq._i[t]||[]; for(var n=0;n<ttq.methods.length;n++) ttq.setAndDefer(e,ttq.methods[n]); return e };
                    ttq.load=function(e,n){
                      var r="https://analytics.tiktok.com/i18n/pixel/events.js";
                      ttq._i=ttq._i||{}; ttq._i[e]=[]; ttq._i[e]._u=r; ttq._t=ttq._t||{}; ttq._t[e]=+new Date; ttq._o=ttq._o||{}; ttq._o[e]=n||{};
                      var a=d.createElement("script"); a.type="text/javascript"; a.async=true; a.src=r+"?sdkid="+e+"&lib="+t;
                      var s=d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(a,s);
                    };
                    ttq.load('${TIKTOK_ID}');
                    ttq.page();
                  }(window, document, 'ttq');
                }
                if ('requestIdleCallback' in window) {
                  requestIdleCallback(loadTikTok, { timeout: 3000 });
                } else {
                  setTimeout(loadTikTok, 3000);
                }
              })();
            `}
          </Script>
        )}
      </head>
      <body className={inter.className}>
        <AnalyticsRouteTracker />
        <Script
          id="productreview-settings"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.__productReviewSettings = {
                ...(window.__productReviewSettings || {}),
                brandId: '407543ca-1287-43ab-a66b-5f78dfd94a6a'
              };
            `,
          }}
        />
        {/* Step 1: loader.js (async) */}
        <Script
          id="productreview-loader"
          src="https://cdn.productreview.com.au/assets/widgets/loader.js"
          strategy="afterInteractive"
          async
        />
        <Script id="ms-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "t83jm3uahm");
          `}
        </Script>
        {children}
        <ExitIntentPopupWithSuspense />

      <TawkDesktopOnly />

      </body>
    </html>
  );
}
