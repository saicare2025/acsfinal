"use client";

import Script from "next/script";
import MainLayout from "../MainLayout";

import RelatedBlock from "@/app/_seo/RelatedBlock";

export default function MeetingScheduled() {
  return (
    <MainLayout>
      {/* GHL form auto-resizer */}
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />

      <div className="min-h-screen bg-blue-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            {/* Step Label */}
            <div className="inline-block bg-blue-100 text-blue text-base font-semibold px-4 py-1 rounded-full mb-2 shadow-sm">
              Final Step
            </div>

            {/* Headline */}
            <h1 className="text-2xl md:text-3xl font-semibold text-[#035071]">
              Please Book Your Free Credit Assessment Now
            </h1>
          </div>

          {/* Card */}
          <div className="p-0">
            {/* Embedded GHL Calendar */}
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/OyureZb7xDY5PxiKABv3"
              title="Book a time with Australian Credit Solutions"
              id="OyureZb7xDY5PxiKABv3_1755594235705"
              scrolling="no"
              style={{ width: "100%", border: "none", overflow: "hidden" }}
              className="block w-full min-h-[900px]"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
