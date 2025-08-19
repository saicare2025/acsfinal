"use client";

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import MainLayout from "../MainLayout";
import logo from "../../app/assets/logo.webp";

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
          

          {/* Card */}
          <div>
            {/* Embedded GHL Calendar */}
            <div className="p-0">
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
      </div>
    </MainLayout>
  );
}
