import TawkDesktopOnly from "@/components/TawkDesktopOnly";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

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
  return (
    <html lang="en">
      <head>
        {/* Preconnect to required origins for faster resource loading */}

        <link rel="preconnect" href="https://i.ytimg.com" crossOrigin="" />
        <link
          rel="preconnect"
          href="https://www.youtube-nocookie.com"
          crossOrigin=""
        />

        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-MVMW025XRV`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MVMW025XRV', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
          !function(w,d,t){
            w.TiktokAnalyticsObject=t;
            var ttq=w[t]=w[t]||[];
            ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
            ttq.setAndDefer=function(t,e){
              t[e]=function(){
                t.push([e].concat(Array.prototype.slice.call(arguments,0)))
              }
            };
            for(var i=0;i<ttq.methods.length;i++) ttq.setAndDefer(ttq,ttq.methods[i]);
            ttq.instance=function(t){
              var e=ttq._i[t]||[];
              for(var n=0;n<ttq.methods.length;n++) ttq.setAndDefer(e,ttq.methods[n]);
              return e
            };
            ttq.load=function(e,n){
              var r="https://analytics.tiktok.com/i18n/pixel/events.js";
              ttq._i=ttq._i||{};
              ttq._i[e]=[];
              ttq._i[e]._u=r;
              ttq._t=ttq._t||{};
              ttq._t[e]=+new Date;
              ttq._o=ttq._o||{};
              ttq._o[e]=n||{};
              var a=document.createElement("script");
              a.type="text/javascript";
              a.async=!0;
              a.src=r+"?sdkid="+e+"&lib="+t;
              var s=document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(a,s)
            };
            ttq.load('C5B6LNC6J7TSRVQBTN00');
            ttq.page();
          }(window, document, 'ttq');
        `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        <TawkDesktopOnly />
      </body>
    </html>
  );
}
