"use client";

import { useEffect, useState } from "react";
import MainLayout from "../MainLayout";
import { generateMinimalStructuredData } from "../../utils/generateMinimalStructuredData";

function RomwLoader() {
  // simple animated loader while the ROMW widget initializes
  return (
    <div className="w-full flex justify-center py-12">
      <div className="relative inline-flex">
        <div className="w-8 h-8 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
        <div className="w-8 h-8 bg-blue-400 rounded-full animate-bounce mx-2" style={{ animationDelay: "150ms" }}></div>
        <div className="w-8 h-8 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
      </div>
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
          {!ready && <RomwLoader />}
          
        </div>
      </section>
    </MainLayout>
  );
}
