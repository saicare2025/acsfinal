"use client";

import { useEffect, useRef } from "react";

const ROMW_SCRIPT_ID = "romw-script";
const ROMW_SRC =
  "https://reviewsonmywebsite.com/js/v2/embed.js?id=4a24b3ba631386ba5f4ec3ef018ac9ca";

export default function ReviewsWidget() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (document.getElementById(ROMW_SCRIPT_ID)) return;

    const s = document.createElement("script");
    s.id = ROMW_SCRIPT_ID;
    s.src = ROMW_SRC;
    s.type = "text/javascript";
    s.async = true;
    s.defer = true;

    s.onload = () => {
      window.dispatchEvent(new CustomEvent("reviewsWidgetLoaded"));
    };
    s.onerror = () => {
      window.dispatchEvent(new CustomEvent("reviewsWidgetError"));
    };

    document.body.appendChild(s);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* ROMW will inject reviews here */}
      <div
        ref={containerRef}
        data-romw-token="Un2YoIQfGfa3N1fM3aK9jrRYmudhaHraWDe42ioCB7Sy0POe2h"
        style={{ minHeight: 300 }}
      />
    </div>
  );
}
