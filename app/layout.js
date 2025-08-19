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

        // <Script
        //   strategy="afterInteractive"
        //   src={`https://www.googletagmanager.com/gtag/js?id=G-MVMW025XRV`}
        // />
        // <Script
        //   id="gtag-init"
        //   strategy="afterInteractive"
        //   dangerouslySetInnerHTML={{
        //     __html: `
        //       window.dataLayer = window.dataLayer || [];
        //       function gtag(){dataLayer.push(arguments);}
        //       gtag('js', new Date());
        //       gtag('config', 'G-MVMW025XRV', {
        //         page_path: window.location.pathname,
        //       });
        //     `,
        //   }}
        // />
       
        {/* <Script id="provesrc" strategy="lazyOnload">
          {`
            if (!window.provesrc) {
              (function(o,i){
                window.provesrc={dq:[],display:function(){this.dq.push(arguments)}};
                o._provesrcAsyncInit=function(){
                  window.provesrc.init({
                    apiKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2MDZlOGY4NTU0YTkyNjU0ZWRhZDUzMjgiLCJpYXQiOjE2MTc4NTg0Mzd9.HoaQOP6GAI3um5hYjGIRlxhUHPqMGj0dv2dgo6xkfYM",
                    v:"0.0.4"
                  });
                };
                var r=i.createElement("script");
                r.type="text/javascript";
                r.async=true;
                r.charset="UTF-8";
                r.src="https://cdn.provesrc.com/provesrc.js";
                var e=i.getElementsByTagName("script")[0];
                e.parentNode.insertBefore(r,e);
              })(window,document);
            }
          `}
        </Script> */}
      </head>
      <body className={inter.className}>
        {children}
        <TawkDesktopOnly />
      </body>
    </html>
  );
}
