"use client";
import Link from 'next/link';
import { getSiblingRoutes } from '../utils/seoInterlinking';

const RelatedServices = ({ pathname }) => {
  const siblingRoutes = getSiblingRoutes(pathname, 6);

  if (siblingRoutes.length === 0) return null;

  return (
    <section className="mb-12 bg-gray-50 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {siblingRoutes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className="block p-3 bg-white rounded-md border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all group"
          >
            <span className="text-blue-600 group-hover:text-blue-800 font-medium text-sm">
              {route.title}
            </span>
          </Link>
        ))}
      </div>
      <p className="text-sm text-gray-600">
        Not sure which service is right for you? Start with our{' '}
        <Link 
          href="/free-credit-assessment" 
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Free Credit Assessment
        </Link>{' '}
        to get personalized recommendations.
      </p>
    </section>
  );
};

export default RelatedServices;
