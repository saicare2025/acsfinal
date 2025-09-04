'use client';

import Script from 'next/script';

/**
 * ProductReviewWidget — uses the exact embed you provided
 *
 * Renders the two scripts in the right order so ProductReview's loader
 * picks up the global settings and mounts the widget. A container is
 * included for layout stability and a friendly placeholder.
 */
export default function ProductReviewWidget({
  brandId = '407543ca-1287-43ab-a66b-5f78dfd94a6a',
  loaderSrc = 'https://cdn.productreview.com.au/assets/widgets/loader.js',
  containerId = 'productreview-widget',
  className = '',
  style,
  placeholder = 'Loading reviews…',
}) {
  return (
    <>
      {/* 1) Global settings (must run before the loader) */}
      <Script
        id="productreview-settings"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.__productReviewSettings = {
              ...(window.__productReviewSettings || {}),
              brandId: ${JSON.stringify(brandId)}
            };
          `,
        }}
      />

      {/* 2) Loader (async) — same as your snippet */}
      <Script
        id="productreview-loader"
        src={loaderSrc}
        async
        strategy="afterInteractive"
        data-pr-loader="1"
      />

      {/* 3) Optional stable mount point to help layout/CLS */}
      <section
        id={containerId}
        className={className}
        style={style}
        aria-busy="true"
        aria-live="polite"
      >
        {placeholder}
      </section>
    </>
  );
}

/**
 * Usage:
 * <ProductReviewWidget className="mt-6" />
 *
 * Notes:
 * - Keep a single instance per page to avoid reloading the widget script.
 * - If you place multiple widgets, ensure they share the same brandId
 *   or render on different pages.
 */
