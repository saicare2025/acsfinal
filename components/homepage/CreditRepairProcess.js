"use client";

import React, { useMemo, useState } from "react";

export default function CreditRepairProcess() {
  const [expandedId, setExpandedId] = useState(null);
  const toggle = (id) => setExpandedId((p) => (p === id ? null : id));

  const steps = useMemo(
    () => [
      {
        id: 1,
        title: "Step 1: Let's Check What's Actually On Your Credit File",
        intro: `Got a credit report already? Sweet! Just email it over or pop it on our secure upload page.
Don't have one yet? No worries at all, mate! We'll grab the same premium report that banks and lenders use (costs just $29.99) and explain everything in plain English - no confusing jargon here.
📅 Book a quick chat with one of our credit experts through our online calendar. We'll go through your report together over the phone or video call. You'll finally understand:`,
        bullets: [
          "What's dragging your credit score down",
          "Why certain things are on your file",
          "What it all means for getting approved for loans",
        ],
      },
      {
        id: 2,
        title: "Step 2: Your Personal Game Plan to Fix Things",
        intro: `After we've had a good look at your credit file, here's what happens next:`,
        bullets: [
          "✅ We'll spot the problem listings - defaults, court judgments, dodgy credit inquiries, late repayment issues or plain old mistakes",
          "✅ We'll tell you straight up - what can be removed, what's worth challenging, and what's probably staying put",
          "✅ You'll get realistic timeframes - no false promises. We'll tell you how long it takes and exactly what it costs",
        ],
        note:
          "Here's the best bit: We only take on your case if we're genuinely confident we can help you. That's why we offer our No Win, No Fee - if we can't remove those negative listings, you don't pay our success fees (terms and conditions apply).",
      },
      {
        id: 3,
        title: "Step 3: Get Your Life Back on Track",
        intro: `Once we've cleaned up your credit file and your score starts climbing, that's when the magic happens:`,
        bullets: [
          "🏠 Ready for that home loan? We'll connect you with mortgage brokers who can help (not just sell you anything)",
          "🚗 Need car finance? Our trusted partners work with people who've had credit issues before",
          "💰 Personal loan for debt consolidation? We'll point you toward lenders who look at the whole picture, not just your credit score",
        ],
        note:
          "The bottom line: After we fix your credit, you'll have finance options again.",
      },
    ],
    []
  );

  return (
    <section
      id="our-process"
      className="py-16 bg-gradient-to-b from-white to-blue-50 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Simple <span className="bg-blue bg-clip-text text-transparent">3-Step Credit Repair Process</span>
          </h2>
          <p className="text-lg text-blue-700 max-w-3xl mx-auto">
            A straightforward approach to improving your credit health
          </p>
        </div>

        {/* Cards row: equal card heights; overlays can escape */}
        <div className="relative flex flex-col md:flex-row items-start gap-6 overflow-visible">
          {steps.map((s) => {
            const open = expandedId === s.id;
            const panelId = `process-panel-${s.id}`;

            return (
              <article
                key={s.id}
                className={`relative w-full md:w-[calc(33.333%-0px)] self-start rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-shadow
                ${open ? "z-30" : "z-10"}`}
                style={{ minHeight: 150 }} 
              >
                {/* Number badge */}
                <div className="flex justify-center -mt-5 pointer-events-none">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue to-blue-700 text-white grid place-items-center shadow-lg ring-4 ring-white">
                    <span className="font-bold">{s.id}</span>
                  </div>
                </div>

                {/* Card content (kept compact so heights match) */}
                <div className="px-6 pt-6 pb-5">
                  <h3 className="text-lg font-bold text-blue-900 text-center mb-3 leading-tight">
                    {s.title}
                  </h3>

                  <div className="flex justify-center">
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setExpandedId(open ? null : s.id)}
                      className="inline-flex items-center gap-2 text-blue font-semibold hover:text-blue-800 transition-colors"
                    >
                      {open ? "Read Less" : "Read More"}
                      <svg
                        className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* DROPDOWN OVERLAY (absolute, high z-index, doesn't change card height) */}
                <div
                  id={panelId}
                  className={`absolute left-0 right-0 top-full ${
                    open ? "pointer-events-auto" : "pointer-events-none"
                  }`}
                  style={{ zIndex: 40 }} // ensure above neighbors/next sections
                  aria-hidden={!open}
                >
                  <div
                    className={`mx-0 md:mx-2 mt-3 rounded-xl border border-blue-200 bg-blue-50/80 backdrop-blur-sm px-4 py-4 shadow-lg transition-all
                    ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
                  >
                    <p className="whitespace-pre-line text-blue-900/90 leading-relaxed text-[15px]">
                      {s.intro}
                    </p>

                    <ul className="mt-3 space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue shrink-0" />
                          <span className="text-blue-900/95 leading-relaxed text-[15px]">{b}</span>
                        </li>
                      ))}
                    </ul>

                    {s.note && (
                      <p className="mt-4 text-blue-900/90 leading-relaxed text-[15px]">{s.note}</p>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
