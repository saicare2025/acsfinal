"use client";
import Link from 'next/link';
import { getPageCategory, getPageTitle } from '../utils/seoInterlinking';

const Breadcrumb = ({ pathname }) => {
  const category = getPageCategory(pathname);
  const pageTitle = getPageTitle(pathname);

  if (!category || !pageTitle) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center space-x-2 text-base text-gray-600">
        <li>
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Home
          </Link>
        </li>
        <li className="flex items-center">
          <svg
            className="w-4 h-4 mx-2 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-500">{category.label}</span>
        </li>
        <li className="flex items-center">
          <svg
            className="w-4 h-4 mx-2 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-900 font-medium">{pageTitle}</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
