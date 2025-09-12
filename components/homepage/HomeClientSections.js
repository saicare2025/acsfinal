'use client';

import dynamic from 'next/dynamic';



const Testimonials3DCarousel = dynamic(() => import("./Testmonials"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
});

const TransformationalJourney = dynamic(() => import("./TransformationalJourney"), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse rounded-lg" />
});

const LoanCalculator = dynamic(() => import("./LoanCalculator"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
});

const CTASection = dynamic(() => import("./CTA"), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse rounded-lg" />
});

export default function HomeClientSections() {
  return (
    <>
      
      <TransformationalJourney />
     
      <CTASection />
      <LoanCalculator />
    </>
  );
}
