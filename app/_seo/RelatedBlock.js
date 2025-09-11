// RelatedBlock Component
// Displays related services and guides based on the current page

import React from 'react';
import Link from 'next/link';

// Load the link graph data
import linkGraph from './link-graph.json' assert { type: 'json' };

export default function RelatedBlock({ currentSlug, heading = "Related services & guides" }) {
  // Get related links for the current page
  const relatedLinks = linkGraph[currentSlug] || [];
  
  // Limit to 6 related links as per requirements
  const displayLinks = relatedLinks.slice(0, 6);
  
  if (displayLinks.length === 0) {
    return null;
  }
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {heading}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayLinks.map((link, index) => (
            <Link
              key={index}
              href={link.target}
              className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200 hover:border-blue-300"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {link.anchor}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    {getDescriptionForLink(link)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper function to generate descriptions based on link type
function getDescriptionForLink(link) {
  switch (link.type) {
    case 'up-link':
      return 'Learn more about this comprehensive service';
    case 'down-link':
      return 'Explore this specific aspect of our services';
    case 'cross-category':
      return 'Related information that may interest you';
    case 'boost-services':
      return 'Discover our professional services';
    case 'boost-scarce':
      return 'Important information about this topic';
    case 'orphan-fix':
      return 'Additional resources and information';
    default:
      return 'Related content and services';
  }
}

