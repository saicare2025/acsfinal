"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const ROMW_SCRIPT_ID = "romw-script";
const ROMW_BASE_SRC =
  "https://reviewsonmywebsite.com/js/v2/embed.js?id=4a24b3ba631386ba5f4ec3ef018ac9ca";

// Build a cache-busting src when needed
const withStamp = (src) => `${src}${src.includes("?") ? "&" : "?"}_=${Date.now()}`;

export default function ReviewsWidget() {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const loaderRef = useRef(null);
  const observerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  // --- helper: hide loader when ROMW injects nodes
  const hideLoaderIfReady = () => {
    const node = containerRef.current;
    if (node && node.childElementCount > 0) {
      setIsLoading(false);
      if (loaderRef.current) loaderRef.current.style.display = "none";
    }
  };

  // --- helper: ensure script is present/loaded
  const ensureRomwScript = () =>
    new Promise((resolve) => {
      const existing = document.getElementById(ROMW_SCRIPT_ID);
      if (existing) {
        if (existing.getAttribute("data-loaded") === "true") return resolve(true);
        existing.addEventListener("load", () => resolve(true), { once: true });
        existing.addEventListener("error", () => resolve(false), { once: true });
        return;
      }
      const s = document.createElement("script");
      s.id = ROMW_SCRIPT_ID;
      s.src = ROMW_BASE_SRC;
      s.type = "text/javascript";
      s.async = true;
      s.defer = true;
      s.addEventListener(
        "load",
        () => {
          s.setAttribute("data-loaded", "true");
          resolve(true);
        },
        { once: true }
      );
      s.addEventListener("error", () => resolve(false), { once: true });
      document.body.appendChild(s);
    });

  // --- helper: trigger a re-scan / re-init of the widget
  const reinitReviews = async () => {
    setIsLoading(true);
    if (loaderRef.current) loaderRef.current.style.display = "";

    // Clean previous injected children so we don't get duplicates
    const node = containerRef.current;
    if (node) {
      node.innerHTML = "";
    }

    // Preferred: ask library to refresh if available
    if (typeof window !== "undefined" && window.ROMW && typeof window.ROMW.refresh === "function") {
      try {
        window.ROMW.refresh(); // ROMW should scan for data-romw-token nodes again
        return;
      } catch {
        // fall through to re-inject script
      }
    }

    // Fallback: re-inject script with a cache-busting param
    const existing = document.getElementById(ROMW_SCRIPT_ID);
    if (existing) {
      existing.remove();
    }
    await new Promise((resolve) => {
      const s = document.createElement("script");
      s.id = ROMW_SCRIPT_ID;
      s.src = withStamp(ROMW_BASE_SRC);
      s.type = "text/javascript";
      s.async = true;
      s.defer = true;
      s.addEventListener(
        "load",
        () => {
          s.setAttribute("data-loaded", "true");
          resolve(true);
        },
        { once: true }
      );
      s.addEventListener("error", () => resolve(false), { once: true });
      document.body.appendChild(s);
    });
  };

  // Initial mount: load script and set up observer
  useEffect(() => {
    let timeoutId;

    // Observe the container for injected reviews; hide loader once ready
    if (containerRef.current) {
      const obs = new MutationObserver(hideLoaderIfReady);
      obs.observe(containerRef.current, { childList: true, subtree: true });
      observerRef.current = obs;
    }

    // Soft timeout: if nothing appears, keep loader but avoid hanging aria-busy forever
    timeoutId = setTimeout(() => {
      // still loading… leave the loader visible; nothing to change
    }, 12000);

    // Ensure script is there on first mount
    ensureRomwScript().then(() => {
      // If the script injects quickly, observer will hide the loader
      // If not, user will see the loader until it does
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      clearTimeout(timeoutId);
    };
     
  }, []);

  // Re-initialize the widget whenever the route changes (client navigation)
  useEffect(() => {
    reinitReviews();
     
  }, [pathname]);

  return (
    <section className=" py-8 lg:py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Added H2 Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our{" "}
            <span className="bg-blue bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-blue max-w-3xl mx-auto">
            Discover why Australian Credit Solutions is trusted by clients across Australia
          </p>
        </div>

        {/* Loader */}
        <div
          ref={loaderRef}
          aria-live="polite"
          aria-busy={isLoading ? "true" : "false"}
          className="my-6 rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-6 shadow-sm"
          style={{ display: isLoading ? "" : "none" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 border border-blue-200">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M12 2l2.09 3.97L18.5 7.5l-3 3 .71 4.5L12 13.5 7.79 15l.71-4.5-3-3 4.41-1.53L12 2z"
                  fill="currentColor"
                  className="text-blue"
                />
              </svg>
            </span>
            <div className="text-lg font-semibold leading-tight text-blue-900">Loading verified reviews…</div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full shimmer" />
                  <div className="flex-1">
                    <div className="h-3 w-28 rounded shimmer mb-2" />
                    <div className="h-3 w-20 rounded shimmer" />
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  {Array.from({ length: 5 }).map((__, s) => (
                    <div key={s} className="h-3 w-3 rounded shimmer" />
                  ))}
                  <div className="h-3 w-10 rounded shimmer ml-auto" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-full rounded shimmer" />
                  <div className="h-3 w-11/12 rounded shimmer" />
                  <div className="h-3 w-9/12 rounded shimmer" />
                </div>
                <div className="mt-4 h-6 w-24 rounded-full shimmer" />
              </div>
            ))}
          </div>
        </div>

        {/* ROMW will inject reviews here */}
        <div
          ref={containerRef}
          data-romw-token="Un2YoIQfGfa3N1fM3aK9jrRYmudhaHraWDe42ioCB7Sy0POe2h"
          style={{ minHeight: 300 }}
        />

        {/* Local shimmer styles */}
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
            animation: shimmer 1.2s infinite;
          }
          @keyframes shimmer {
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}