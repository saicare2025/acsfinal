"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  StarIcon, 
  ShieldCheckIcon, 
  UserIcon, 
  BriefcaseIcon,
  BuildingOfficeIcon
} from "@heroicons/react/24/solid";
import MainLayout from "../MainLayout";
import testimonialsData from "../../app/data/testimonials.json";

const INITIAL_LOAD = 15;
const LOAD_MORE_COUNT = 9;

function Stars({ count = 5, filled = 5 }) {
  return (
    <div className="flex justify-center gap-1" aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon
          key={i}
          className={`w-5 h-5 ${i < filled ? "text-amber-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t, idx }) {
  return (
    <article className="relative bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-blue-100 shadow-sm">
        <ShieldCheckIcon className="w-4 h-4 text-green-600" />
        <span className="text-xs font-medium text-green-700">Verified</span>
      </div>

      <div className="px-6 pt-8 pb-2 flex flex-col flex-1">
        <div className="mx-auto mb-4 w-20 h-20 rounded-full border-2 border-white overflow-hidden shadow-md bg-gradient-to-br from-blue-100 to-blue-200">
          {t.image ? (
            <Image 
              src={t.image} 
              alt={t.author} 
              width={80} 
              height={80} 
              className="object-cover w-full h-full" 
              unoptimized
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-blue-600">
              <UserIcon className="w-8 h-8" />
            </div>
          )}
        </div>

        <div className="mb-4">
          <Stars filled={t.rating || 5} />
        </div>

        <div className="flex-1 overflow-y-auto max-h-40 pr-2">
          <blockquote className="text-center text-gray-700 leading-relaxed">
            <p className="text-base sm:text-[15.5px] font-medium">
              &ldquo;{t.quote}&rdquo;
            </p>
          </blockquote>
        </div>
      </div>

      <div className="px-6 pb-6 pt-4 bg-gradient-to-b from-blue-50 to-blue-100/30 border-t border-blue-100/50">
        <h4 className="text-lg font-bold text-gray-900 text-center flex items-center justify-center gap-2">
          <UserIcon className="w-4 h-4 text-blue-600" />
          {t.author}
        </h4>
        
        {t.position && (
          <p className="mt-1 text-sm text-gray-600 text-center flex items-center justify-center gap-1.5">
            <BriefcaseIcon className="w-3.5 h-3.5 text-blue-500" />
            {t.position}
          </p>
        )}
        
        <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-green-600 font-medium">
          <BuildingOfficeIcon className="w-3.5 h-3.5" />
          <span>Verified via ProductReview</span>
        </div>
      </div>
    </article>
  );
}

function Loader() {
  return (
    <div className="w-full flex justify-center py-12">
      <div className="relative inline-flex">
        <div className="w-8 h-8 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-8 h-8 bg-blue-400 rounded-full animate-bounce mx-2" style={{ animationDelay: '150ms' }}></div>
        <div className="w-8 h-8 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );
}

export default function TestimonialsGridPage() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = () => {
    if (isLoading || window.innerHeight + window.scrollY < document.body.offsetHeight - 300) return;
    
    if (visibleCount < testimonialsData.length) {
      setIsLoading(true);
      setTimeout(() => {
        setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, testimonialsData.length));
        setIsLoading(false);
      }, 800);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCount, isLoading]);

  return (
    <MainLayout>
      <div id="testimonials" className="w-full  max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.slice(0, visibleCount).map((t, idx) => (
            <TestimonialCard key={`${t.author}-${idx}`} t={t} idx={idx} />
          ))}
        </div>
        
        {isLoading && <Loader />}
        
        {visibleCount >= testimonialsData.length && (
          <div className="mt-8 text-center text-gray-500 text-sm">
            You&apos;ve reached the end of our testimonials
          </div>
        )}
      </div>
    </MainLayout>
  );
}