import TawkDesktopOnly from "@/components/TawkDesktopOnly";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import AnalyticsRouteTracker from "@/components/AnalyticsRouteTracker";

const inter = Inter({ subsets: ["latin"], display: "swap", preload: true });

export const metadata = {
  title: "Improve Your Credit Score with Australian Credit Solutions",
  description:
    "Take control of your financial future. Australian Credit Solutions offers expert credit repair and tailored strategies to help you improve your credit score quickly and effectively.",
  keywords: [
    "improve your credit score",
    "Australian Credit Solutions",
    "credit repair",
    "credit score help",
    "credit solutions Australia",
    "fix bad credit",
    "financial recovery services",
  ],
};

export default function RootLayout({ children }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-MVMW025XRV";
  const TIKTOK_ID =
    process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || "C5B6LNC6J7TSRVQBTN00";

  return (
    <html lang="en">
      <head>
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

        {/* Consent Mode v2 (recommended). Remove if you don't use a consent banner. */}
        <Script id="consent-defaults" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              ad_storage: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>

        {/* GA4: load lazily; do not auto-send page_view */}
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

        {/* TikTok: defer to browser idle to avoid blocking interactivity */}
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
        {/* --- ProductReview widget --- */}
        <Script id="pr-settings" strategy="afterInteractive">
          {`
            window.__productReviewSettings = {
              brandId: '407543ca-1287-43ab-a66b-5f78dfd94a6a'
            };
          `}
        </Script>
        <Script
          id="pr-loader"
          src="https://cdn.productreview.com.au/assets/widgets/loader.js"
          strategy="lazyOnload"
        />
      </head>
      <body className={inter.className}>
        {/* Single pageview per route */}
        <AnalyticsRouteTracker />
        {children}
        <TawkDesktopOnly />
      </body>
    </html>
  );
}
