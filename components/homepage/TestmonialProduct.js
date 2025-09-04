'use client';

import { useEffect, useRef } from 'react';

export default function ProductReviewWidget({
  brandId = '407543ca-1287-43ab-a66b-5f78dfd94a6a',
  loaderSrc = 'https://cdn.productreview.com.au/assets/widgets/loader.js',
  containerId = 'productreview-widget',
  className = '',
  style,
  placeholder = 'Loading reviews…',
}) {
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    // 1) Set global settings early (idempotent)
    if (typeof window !== 'undefined') {
      window.__productReviewSettings = {
        ...(window.__productReviewSettings || {}),
        brandId,
      };
    }

    // 2) Avoid re-injecting the loader
    const existing = document.querySelector('script[data-pr-loader="1"]');
    if (existing) return;

    const inject = () => {
      const s = document.createElement('script');
      s.src = loaderSrc;
      s.async = true;
      s.defer = true;
      s.setAttribute('data-pr-loader', '1');
      document.head.appendChild(s);
    };

    // Defer to idle if available; otherwise, microtask
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(inject, { timeout: 2000 });
    } else {
      setTimeout(inject, 0);
    }
  }, [brandId, loaderSrc]);

  // Container is optional; some ProductReview widgets auto-render near script,
  // but having a stable mount point helps layout & CLS.
  return (
    <section
      id={containerId}
      className={className}
      style={style}
      aria-busy="true"
      aria-live="polite"
    >
      {placeholder}
    </section>
  );
}
