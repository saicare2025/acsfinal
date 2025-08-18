// components/LiteYouTube.js
"use client";
import { useEffect, useRef, useState } from "react";

export default function LiteYouTube({ id, title, className = "" }) {
  const [ready, setReady] = useState(false); // in-viewport
  const [play, setPlay] = useState(false);   // user clicked
  const ref = useRef(null);

  // Lazy “in-viewport” detection
  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === "undefined") {
      setReady(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (setReady(true), io.disconnect())),
      { rootMargin: "200px 0px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const poster = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  const iframeSrc = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;

  return (
    <div
      ref={ref}
      className={`relative w-full overflow-hidden rounded-lg border-2 border-white shadow-md ${className}`}
      style={{ aspectRatio: "16 / 9" }} // prevents CLS
    >
      {/* Poster until clicked */}
      {!play && (
        <button
          type="button"
          onClick={() => setPlay(true)}
          className="group absolute inset-0"
          aria-label={`Play video: ${title}`}
        >
          {/* Background poster */}
          {ready && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={poster}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          )}
          {/* Play button */}
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full p-4 bg-white/90 group-hover:bg-white shadow-md">
            <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z"></path>
            </svg>
          </span>
          {/* light overlay for brand color */}
          <span className="pointer-events-none absolute inset-0 bg-blue-500/5" />
        </button>
      )}

      {/* Actual iframe only after click */}
      {play && (
        <iframe
          src={iframeSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full"
        />
      )}
    </div>
  );
}
