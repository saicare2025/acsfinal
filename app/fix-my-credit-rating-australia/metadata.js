// File: app/fix-my-credit-file-australia/metadata.js

import { generateMinimalStructuredData } from "../../utils/generateMinimalStructuredData";

export const metadata = {
  title: "Fix My Credit File Australia | Remove Defaults, Improve Score, Get Approved",
  description:
    "Fix your credit file in Australia with award-winning specialists. Remove defaults, late payments, court judgments & credit enquiries. 98% success rate, No Win No Fee.",
  openGraph: {
    title: "Fix My Credit File Australia | Remove Defaults, Improve Score, Get Approved",
    description:
      "Struggling with rejections? Our experts fix your credit file fast. Defaults, judgments & enquiries removed. Get approved with better rates.",
    url: "https://www.australiancreditsolutions.com.au/fix-my-credit-file-australia",
    siteName: "Australian Credit Solutions",
    images: [
      {
        url: "https://www.australiancreditsolutions.com.au/og-credit-file.jpg",
        width: 1200,
        height: 630,
        alt: "Fix My Credit File Australia - Australian Credit Solutions",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  alternates: {
    canonical: "https://www.australiancreditsolutions.com.au/fix-my-credit-file-australia",
  },
};

export const structuredData = generateMinimalStructuredData({
  pathname: "/fix-my-credit-file-australia",
  title: "Fix My Credit File Australia | Remove Defaults, Improve Score, Get Approved",
  description:
    "Credit repair experts in Australia. We help remove defaults, late payments, judgments, and enquiries from your credit file. No Win No Fee.",
  isService: true,
  serviceType: "Credit File Repair",
});
