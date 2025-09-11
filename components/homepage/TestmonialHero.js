"use client";

import { useEffect, useRef, useState } from "react";

const ROMW_SCRIPT_ID = "romw-script";
const ROMW_SRC =
  "https://reviewsonmywebsite.com/js/v2/embed.js?id=4a24b3ba631386ba5f4ec3ef018ac9ca";
const ROMW_TOKEN =
  "7xmJu5vtRE3nLcbkj2g3sbFOYMXmxg9VyU7NLECN07LrrZhO61";

export default function FloatingTestimonials({
  position = "right", // "right" | "left"
  offsetY = 24, // px bottom offset
  offsetX = 24, // px side offset
  label = "Testimonials",
}) {
  const [open, setOpen] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const panelRef = useRef(null);
  const btnRef = useRef(null);

  // Inject script on first open only
  useEffect(() => {
    if (!open) return;
    if (document.getElementById(ROMW_SCRIPT_ID)) {
      setScriptReady(true);
      return;
    }
    const s = document.createElement("script");
    s.id = ROMW_SCRIPT_ID;
    s.src = ROMW_SRC;
    s.type = "text/javascript";
    s.defer = true;
    s.onload = () => setScriptReady(true);
    document.body.appendChild(s);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Click outside to close
  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target) && !btnRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const sideClass = position === "left" ? "left-0" : "right-0";
  const sideOffset = position === "left" ? { left: `${offsetX}px` } : { right: `${offsetX}px` };

  return (
    <>
      {/* Toggle Button */}
      <button
        ref={btnRef}
        type="button"
        aria-expanded={open}
        aria-controls="floating-testimonials-panel"
        onClick={() => setOpen((v) => !v)}
        className="fixed z-40 bottom-0 translate-y-[-50%] rounded-full shadow-lg border border-gray-200 bg-white px-4 py-2 text-base font-semibold text-gray-800 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 flex items-center gap-2"
        style={{ bottom: `${offsetY}px`, ...sideOffset }}
      >
        <span aria-hidden>⭐</span>
        <span>{label}</span>
      </button>

      {/* Panel */}
      <div
        id="floating-testimonials-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Client testimonials"
        className={`fixed z-50 bottom-0 left-0 ${sideClass} w-[80vw] max-w-md md:max-w-lg`}
        style={{ bottom: `${offsetY + 56}px` }} // sit above the button
      >
        <div
          className={`origin-bottom-${position === "left" ? "left" : "right"} transition-all duration-300 ${
            open
              ? "opacity-100 translate-y-0"
              : "pointer-events-none opacity-0 translate-y-2"
          }`}
        >
          <div >
            {/* Header */}
           

            {/* Body */}
            <div className="px-3 sm:px-4 pt-3 pb-4">
              {/* Widget container */}
              <div
                data-romw-token={ROMW_TOKEN}
                data-romw-lazy // allows the library to lazy-init
              />

              {/* Loader until script ready */}
              {!scriptReady && (
                <div className="py-8 flex items-center justify-center">
                  <div className="inline-flex gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "120ms" }} />
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "240ms" }} />
                  </div>
                </div>
              )}

              <noscript>
                <p className="text-center text-base text-gray-500 mt-4">
                  Enable JavaScript to view our latest client reviews.
                </p>
              </noscript>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
