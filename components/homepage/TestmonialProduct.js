"use client";

import { useEffect, useRef } from "react";

/**
 * ProductReviewWidget
 * Shows ProductReview.com.au "reviews-horizontal" widget.
 *
 * REQUIREMENTS in <head> (root layout):
 *   window.__productReviewSettings = { brandId: "407543ca-1287-43ab-a66b-5f78dfd94a6a" };
 *   <script src="https://cdn.productreview.com.au/assets/widgets/loader.js" async></script>
 *
 * Props:
 *   - identifier  (string, required for from-brand-external-entry-id)
 *   - containerId (string, optional) default: "pr-reviews-horizontal-widget"
 *   - widget      (string, optional) default: "reviews-horizontal"
 *   - type        (string, optional) default: "single"
 *   - strategy    (string, optional) default: "from-brand-external-entry-id"
 *   - className, style (optional)
 *   - onReady     (fn, optional) called once the widget attempts to init
 *   - onError     (fn, optional) called if widget fails to render within timeout
 *   - renderTimeoutMs (number, optional) default: 5000
 */
export default function ProductReviewWidget({
  identifier,
  containerId = "pr-reviews-horizontal-widget",
  widget = "reviews-horizontal",
  type = "single",
  strategy = "from-brand-external-entry-id",
  className,
  style,
  onReady,
  onError,
  renderTimeoutMs = 5000,
}) {
  const containerRef = useRef(null);
  const initializedRef = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Guard: some strategies NEED an identifier (e.g., from-brand-external-entry-id)
    const needsIdentifier = strategy === "from-brand-external-entry-id";
    if (needsIdentifier && (!identifier || /YOUR IDENTIFIER/i.test(identifier))) {
      const msg =
        "[ProductReviewWidget] Missing or placeholder `identifier`. Map your External Entry ID in ProductReview and pass the exact value.";
      console.error(msg);
      onError?.(new Error(msg));
      return;
    }

    if (typeof window === "undefined" || !containerRef.current) return;

    const el = containerRef.current;
    if (initializedRef.current || el.dataset.prInitialized === "1") return;

    // Function that actually runs the widget init
    const init = () => {
      try {
        if (initializedRef.current || el.dataset.prInitialized === "1") return;

        // Initialize via ProductReview SDK (same shape as their snippet)
        window.ProductReview?.use?.(widget, {
          container: `#${containerId}`,
          identificationDetails: {
            type,
            strategy,
            ...(identifier ? { identifier } : {}),
          },
        });

        // Mark initialized (avoid double inits)
        initializedRef.current = true;
        el.dataset.prInitialized = "1";
        onReady?.();

        // Fallback: if nothing renders, flag likely 404/mapping issue
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          // Heuristic: if the container still has no children, assume failure
          const empty =
            !el.hasChildNodes() ||
            (el.childNodes.length === 1 &&
              el.firstChild.nodeType === Node.TEXT_NODE &&
              !el.firstChild.textContent?.trim());

          if (empty) {
            const err = new Error(
              "[ProductReviewWidget] Widget did not render. Likely causes: External Entry ID not mapped to your listing, wrong strategy, or network/CSP blocking."
            );
            console.error(err);
            onError?.(err);
          }
        }, renderTimeoutMs);
      } catch (e) {
        console.error("[ProductReviewWidget] init failed:", e);
        onError?.(e);
      }
    };

    // If loader is ready, init immediately; otherwise queue it (official pattern)
    if (window.ProductReview && typeof window.ProductReview.use === "function") {
      init();
    } else {
      window.__productReviewCallbackQueue = window.__productReviewCallbackQueue || [];
      window.__productReviewCallbackQueue.push(init);
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [identifier, containerId, widget, type, strategy, onReady, onError, renderTimeoutMs]);

  return <div id={containerId} ref={containerRef} className={className} style={style} />;
}
