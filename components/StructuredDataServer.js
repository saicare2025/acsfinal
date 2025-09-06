// components/StructuredDataServer.js

import { headers } from 'next/headers';
import { buildStructuredData, isServicePage, isBlogPage, extractServiceName } from '@/utils/structuredData';

/**
 * Server-side StructuredData component for Next.js App Router
 * @param {Object} props - Component props
 * @param {Object} [props.metadata] - Next.js metadata object
 * @param {Array} [props.breadcrumbs] - Custom breadcrumb array
 * @param {Array} [props.faq] - FAQ array with {question, answer} objects
 * @param {boolean} [props.forceService] - Force treat as service page
 * @param {string} [props.serviceName] - Override service name
 * @param {string} [props.serviceArea] - Service area override
 * @param {Object} [props.blog] - Blog post data
 */
export default function StructuredDataServer({
  metadata,
  breadcrumbs,
  faq,
  forceService,
  serviceName,
  serviceArea,
  blog
}) {
  // Get pathname from headers
  const headersList = headers();
  const pathname = headersList.get('x-pathname') || '/';
  
  // Extract data from metadata object
  const title = metadata?.title || 'Australian Credit Solutions';
  const description = metadata?.description || 'Australian Credit Solutions helps individuals and businesses manage their credit profiles and financial opportunities.';
  const ogImage = metadata?.openGraph?.images?.[0]?.url || metadata?.openGraph?.image;

  // Determine if this is a service page
  const isService = forceService !== undefined ? forceService : isServicePage(pathname);
  
  // Extract service name if this is a service page
  const finalServiceName = isService ? 
    (serviceName || extractServiceName(title, pathname)) : undefined;

  // Generate structured data
  const graph = buildStructuredData({
    pathname,
    title,
    description,
    ogImage,
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
