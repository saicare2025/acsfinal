// components/GlobalStructuredData.js
"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { buildStructuredData, isServicePage, extractServiceName } from '@/utils/structuredData';

export default function GlobalStructuredData() {
  const pathname = usePathname();

  const generateStructuredData = () => {
    // Remove any existing structured data script
    const existingScript = document.querySelector('script[data-structured-data]');
    if (existingScript) {
      existingScript.remove();
    }

    // Extract metadata from document
    const title = document.title || 'Australian Credit Solutions';
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || 
      'Australian Credit Solutions helps individuals and businesses manage their credit profiles and financial opportunities.';
    const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content') ||
      'https://www.australiancreditsolutions.com.au/logo.png';

    // Determine if this is a service page
    const isService = isServicePage(pathname);
    
    // Extract service name if this is a service page
    const serviceName = isService ? extractServiceName(title, pathname) : undefined;

    // Check for FAQ data (pages with FAQ sections)
    let faq = [];
    const faqElements = document.querySelectorAll('[data-faq-question]');
    if (faqElements.length > 0) {
      faq = Array.from(faqElements).map(el => ({
        question: el.getAttribute('data-faq-question'),
        answer: el.getAttribute('data-faq-answer')
      })).filter(item => item.question && item.answer);
    }

    // Check for blog data
    let blog = null;
    if (pathname.startsWith('/blog-details/')) {
      const articleElement = document.querySelector('article.blog, article[itemtype*="BlogPosting"]');
      if (articleElement) {
        blog = {
          headline: title,
          datePublished: articleElement.getAttribute('data-published') || new Date().toISOString().split('T')[0],
          dateModified: articleElement.getAttribute('data-modified') || new Date().toISOString().split('T')[0]
        };
      }
    }

    // Generate structured data
    const graph = buildStructuredData({
      pathname,
      title,
      description,
      ogImage,
      faq,
      isService,
      serviceName,
      blog
    });

    const structuredDataJson = {
      "@context": "https://schema.org",
      "@graph": graph
    };

    // Create and inject script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-structured-data', 'true');
    script.textContent = JSON.stringify(structuredDataJson, null, 0);
    document.head.appendChild(script);
  };

  useEffect(() => {
    // Generate initial structured data
    generateStructuredData();

    // Listen for custom events to regenerate structured data
    const handleUpdate = () => {
      // Small delay to ensure DOM is updated
      setTimeout(generateStructuredData, 100);
    };

    window.addEventListener('structuredDataUpdate', handleUpdate);

    return () => {
      window.removeEventListener('structuredDataUpdate', handleUpdate);
    };
  }, [pathname]);

  return null;
}
