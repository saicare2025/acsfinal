"use client";

import { useEffect, useState } from "react";
import MainLayout from "../MainLayout";
import { generateMinimalStructuredData } from "../../utils/generateMinimalStructuredData";

import RelatedBlock from "@/app/_seo/RelatedBlock";

/** Shimmer grid loader while ROMW initializes */
function RomwGridLoader({ count = 6 }) {
  const items = Array.from({ length: count });

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-8">
      {items.map((_, i) => (
        <div
          key={i}
          className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full shimmer" />
            <div className="flex-1">
              <div className="h-3 w-28 rounded shimmer mb-2" />
              <div className="h-3 w-20 rounded shimmer" />
            </div>
          </div>

          {/* Stars row */}
          <div className="flex items-center gap-2 mb-3">
            {Array.from({ length: 5 }).map((_, s) => (
              <div key={s} className="h-3 w-3 rounded shimmer" />
            ))}
            <div className="h-3 w-10 rounded shimmer ml-auto" />
          </div>

          {/* Review text lines */}
          <div className="space-y-2">
            <div className="h-3 w-full rounded shimmer" />
            <div className="h-3 w-11/12 rounded shimmer" />
            <div className="h-3 w-9/12 rounded shimmer" />
          </div>

          {/* Footer chip */}
          <div className="mt-4 h-6 w-24 rounded-full shimmer" />
        </div>
      ))}
      <style jsx>{`
        .shimmer {
          position: relative;
          overflow: hidden;
          background: #f3f4f6;
        }
        .shimmer::after {
          content: "";
          position: absolute;
          inset: 0;
          transform: translateX(-100%);
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.7) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          animation: shimmer 1.6s infinite;
        }
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}

export default function TestimonialsWidgetSection() {
  // Minimal structured data (non-service page)
  const structuredData = generateMinimalStructuredData({
    pathname: "/testimonial",
    title: "Client Testimonials | Australian Credit Solutions",
    description:
      "Read success stories from Australian Credit Solutions clients who improved their credit scores and achieved their financial goals.",
    isService: false,
  });

  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Inject ROMW script once
    const existing = document.querySelector("#romw-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "romw-script";
      script.src =
        "https://reviewsonmywebsite.com/js/v2/embed.js?id=4a24b3ba631386ba5f4ec3ef018ac9ca";
      script.type = "text/javascript";
      script.defer = true;
      script.onload = () => setReady(true);
      script.onerror = () => setReady(true); // fail gracefully
      document.body.appendChild(script);
    } else {
      setReady(true);
    }
  }, []);

  return (
    <MainLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section id="testimonials" className="w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8">
          {/* ReviewsOnMyWebsite embed container */}
          <div
            data-romw-token="RVBSAwYGLTSoO4OLbjRLgAdMeTRpmVm8CnBWTQO2H6Y29jyJs7"
            data-romw-lazy
          />
          {!ready && <RomwGridLoader />}
        </div>
      </section>
    </MainLayout>
  );
}
