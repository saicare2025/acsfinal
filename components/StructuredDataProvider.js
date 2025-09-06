// components/StructuredDataProvider.js
"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { buildStructuredData, isServicePage, isBlogPage, extractServiceName } from '@/utils/structuredData';

const StructuredDataContext = createContext();

export function StructuredDataProvider({ children, defaultMetadata }) {
  const [structuredData, setStructuredData] = useState(null);
  const pathname = usePathname();

  const updateStructuredData = ({
    title,
    description,
    ogImage,
    breadcrumbs,
    faq,
    forceService,
    serviceName,
    serviceArea,
    blog
  } = {}) => {
    // Use provided data or extract from document/defaults
    const finalTitle = title || 
      (typeof document !== 'undefined' ? document.title : '') ||
      defaultMetadata?.title ||
      'Australian Credit Solutions';
      
    const finalDescription = description || 
      (typeof document !== 'undefined' ? 
        document.querySelector('meta[name="description"]')?.getAttribute('content') : '') ||
      defaultMetadata?.description ||
      'Australian Credit Solutions helps individuals and businesses manage their credit profiles and financial opportunities.';
      
    const finalOgImage = ogImage || 
      (typeof document !== 'undefined' ? 
        document.querySelector('meta[property="og:image"]')?.getAttribute('content') : '') ||
      defaultMetadata?.openGraph?.images?.[0]?.url ||
      'https://www.australiancreditsolutions.com.au/logo.png';

    // Determine if this is a service page
    const isService = forceService !== undefined ? forceService : isServicePage(pathname);
    
    // Extract service name if this is a service page
    const finalServiceName = isService ? 
      (serviceName || extractServiceName(finalTitle, pathname)) : undefined;

    // Generate structured data
    const graph = buildStructuredData({
      pathname,
      title: finalTitle,
      description: finalDescription,
      ogImage: finalOgImage,
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

    setStructuredData(structuredDataJson);
  };

  // Initialize with defaults on pathname change
  useEffect(() => {
    updateStructuredData();
  }, [pathname]);

  return (
    <StructuredDataContext.Provider value={{ updateStructuredData, structuredData }}>
      {children}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 0)
          }}
        />
      )}
    </StructuredDataContext.Provider>
  );
}

export function useStructuredData() {
  const context = useContext(StructuredDataContext);
  if (!context) {
    throw new Error('useStructuredData must be used within StructuredDataProvider');
  }
  return context;
}
