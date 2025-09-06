// hooks/useStructuredData.js
"use client";

import { useEffect } from 'react';

/**
 * Hook to add FAQ data attributes to elements for structured data extraction
 * @param {Array} faqData - Array of FAQ objects with {question, answer}
 */
export function useFAQStructuredData(faqData) {
  useEffect(() => {
    if (!faqData || !Array.isArray(faqData)) return;

    // Clean up existing FAQ data attributes
    const existingElements = document.querySelectorAll('[data-faq-question]');
    existingElements.forEach(el => {
      el.removeAttribute('data-faq-question');
      el.removeAttribute('data-faq-answer');
    });

    // Add data attributes to a temporary container for extraction
    const container = document.createElement('div');
    container.style.display = 'none';
    container.id = 'faq-structured-data';
    
    faqData.forEach((faq, index) => {
      if (faq.question && faq.answer) {
        const element = document.createElement('div');
        element.setAttribute('data-faq-question', faq.question);
        element.setAttribute('data-faq-answer', faq.answer);
        container.appendChild(element);
      }
    });

    document.body.appendChild(container);

    // Trigger structured data update by dispatching custom event
    window.dispatchEvent(new CustomEvent('structuredDataUpdate'));

    return () => {
      const existingContainer = document.getElementById('faq-structured-data');
      if (existingContainer) {
        existingContainer.remove();
      }
    };
  }, [faqData]);
}

/**
 * Hook to add blog structured data attributes
 * @param {Object} blogData - Blog post data
 */
export function useBlogStructuredData(blogData) {
  useEffect(() => {
    if (!blogData) return;

    // Find article element or create one
    let articleElement = document.querySelector('article.blog, article[itemtype*="BlogPosting"]');
    if (!articleElement) {
      articleElement = document.querySelector('article');
    }
    
    if (articleElement) {
      if (blogData.datePublished) {
        articleElement.setAttribute('data-published', blogData.datePublished);
      }
      if (blogData.dateModified) {
        articleElement.setAttribute('data-modified', blogData.dateModified);
      }
      
      // Trigger structured data update
      window.dispatchEvent(new CustomEvent('structuredDataUpdate'));
    }

    return () => {
      if (articleElement) {
        articleElement.removeAttribute('data-published');
        articleElement.removeAttribute('data-modified');
      }
    };
  }, [blogData]);
}

/**
 * Hook to force update structured data
 */
export function useUpdateStructuredData() {
  const updateStructuredData = () => {
    window.dispatchEvent(new CustomEvent('structuredDataUpdate'));
  };

  return { updateStructuredData };
}
