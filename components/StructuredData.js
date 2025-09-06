// components/StructuredData.js
"use client";

import { usePathname } from 'next/navigation';
import { buildStructuredData, isServicePage, isBlogPage, extractServiceName } from '@/utils/structuredData';

/**
 * StructuredData component that generates and injects JSON-LD
 * @param {Object} props - Component props
 * @param {string} [props.title] - Page title (will try to extract from document.title if not provided)
 * @param {string} [props.description] - Page description (will try to extract from meta if not provided) 
 * @param {string} [props.ogImage] - OG image URL (will try to extract from meta if not provided)
 * @param {Array} [props.breadcrumbs] - Custom breadcrumb array
 * @param {Array} [props.faq] - FAQ array with {question, answer} objects
 * @param {boolean} [props.forceService] - Force treat as service page
 * @param {string} [props.serviceName] - Override service name
 * @param {string} [props.serviceArea] - Service area override
 * @param {Object} [props.blog] - Blog post data
 */
export default function StructuredData({
  title,
  description,
  ogImage,
  breadcrumbs,
  faq,
  forceService,
  serviceName,
  serviceArea,
  blog
}) {
  const pathname = usePathname();

  // Extract metadata from document if not provided
  const extractedTitle = title || (typeof document !== 'undefined' ? document.title : '');
  const extractedDescription = description || (typeof document !== 'undefined' ? 
    document.querySelector('meta[name="description"]')?.getAttribute('content') : '');
  const extractedOgImage = ogImage || (typeof document !== 'undefined' ? 
    document.querySelector('meta[property="og:image"]')?.getAttribute('content') : '');

  // Determine if this is a service page
  const isService = forceService !== undefined ? forceService : isServicePage(pathname);
  
  // Extract service name if this is a service page
  const finalServiceName = isService ? 
    (serviceName || extractServiceName(extractedTitle, pathname)) : undefined;

  // Generate structured data
  const graph = buildStructuredData({
    pathname,
    title: extractedTitle,
    description: extractedDescription,
    ogImage: extractedOgImage,
    breadcrumbs,
    faq,
    isService,
    serviceName: finalServiceName,
    serviceArea,
    blog
  });

  const structuredDataJson = {
    "@context": "https://schema.org",
    "@graph": graph
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredDataJson, null, 0)
      }}
    />
  );
}
