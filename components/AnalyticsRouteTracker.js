'use client';
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pageview } from "../app/gtag";

export default function AnalyticsRouteTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    pageview(window.location.href);
  }, [pathname]);

  return null;
}
