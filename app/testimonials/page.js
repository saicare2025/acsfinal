"use client";

import { useState } from "react";
import Image from "next/image";
import { StarIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

import review1 from "../../app/assets/review-image/1.webp";
import review2 from "../../app/assets/review-image/2.webp";
import review3 from "../../app/assets/review-image/3.webp";
import review4 from "../../app/assets/review-image/4.webp";
import review5 from "../../app/assets/review-image/5.webp";
import review6 from "../../app/assets/review-image/6.webp";
import review7 from "../../app/assets/review-image/7.webp";
import review8 from "../../app/assets/review-image/8.webp";
import review9 from "../../app/assets/review-image/9.webp";
import productreview from "../../app/assets/Screenshot_2025-08-11_142949-removebg-preview.png";
import MainLayout from "../MainLayout";

const testimonials = [
  {
    quote:
      "My experience with Australian Credit Solutions was excellent! The process was very smooth and fast. A big thank you to Daisy and Angelie for their amazing support and assistance they made everything so much easier. Highly recommend their service!",
    author: "Thai",
    position: "Financial Advisor",
    source: "Product Review",
    rating: 5,
    image: review1,
    date: "2 days ago",
  },
  {
    quote:
      "Do yourself a favour – Australian Credit Solutions are the Good People you need to talk to when you need Good Solutions for your Credit Rating. Bless Them All",
    author: "Kim",
    position: "Business Owner",
    source: "Product Review",
    rating: 5,
    image: review2,
    date: "1 week ago",
  },
  {
    quote:
      "Excellent work – I am very happy with the outcome my Enquiries has been remove and as well my defaultSuccessfully removed another invalid inquiry – It’s really possible to repair the credit. amazing!!! Thanks you Reyna and Angelie for working on my file and successfully removing another hard inquiry. It’s not even one month I signed up with you ",
    author: "Vivek",
    position: "Investor",
    source: "Product Review",
    rating: 5,
    image: review3,
    date: "3 weeks ago",
  },
  {
    quote:
      "Thank you so much for informing me—it was so good to hear the result! I’m beyond happy and honestly feel like celebrating. This means so much to me after everything I’ve been through. ",
    author: "Raphael C.",
    position: "Freelancer",
    source: "Product Review",
    rating: 5,
    image: review4,
    date: "1 month ago",
  },
  {
    quote:
      "Kristine and the team have been incredibly helpful and professional. They’re honest, fast, and really know what they’re doing. Everything was handled smoothly and without any delays. I truly appreciate how quick and transparent their service is. Highly recommended! ",
    author: "Jason Poore",
    position: "Entrepreneur",
    source: "Product Review",
    rating: 5,
    image: review5,
    date: "2 months ago",
  },
  {
    quote:
      "Good Service – Australia Credit Solutions done awesome in assisting me in partly fixing my credit file. Shane expertly guided me in fixing my credit file, making the process smooth and stress-free. Erica kept me updated every step of the way, adding a personal touch that made all the difference. ",
    author: "David Freeman",
    position: "Expat",
    source: "Product Review",
    rating: 5,
    image: review6,
    date: "3 months ago",
  },
  {
    quote:
      "The customer service team is excellent! Very friendly, professional, and always willing to help. They made the whole process smooth and easy. I truly appreciate the support and positive attitude of the team. Highly recommended!",
    author: "Russel",
    position: "Financial Advisor",
    source: "Product Review",
    rating: 5,
    image: review7,
    date: "2 days ago",
  },
  {
    quote:
      "I’m very happy with the service so far. Kristine and Angelie have been great—both very helpful and responsive. They’ve made the process smooth and easy, and I appreciate their support throughout. Excellent service overall! ",
    author: "Gavin",
    position: "Business Owner",
    source: "Product Review",
    rating: 5,
    image: review8,
    date: "1 week ago",
  },
  {
    quote:
      "It’s all good—thank you so much, I really liked the experience! Angelie was excellent in helping me with my loan, and Vanessa kept me updated and supported me throughout. Truly appreciated! ",
    author: "Flavio G.",
    position: "Investor",
    source: "Product Review",
    rating: 5,
    image: review9,
    date: "3 weeks ago",
  },
];

const COLLAPSED_LINES = 5; // visible lines when collapsed
const LONG_QUOTE_CHAR_THRESHOLD = 220; // when to show Read more

function Stars({ count = 5, filled = 5 }) {
  return (
    <div className="flex justify-center gap-1" aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon
          key={i}
          className={`w-5 h-5 ${
            i < filled ? "text-amber-400 fill-amber-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t, idx, isOpen, onToggle }) {
  const isLong = t.quote.length > LONG_QUOTE_CHAR_THRESHOLD;
  return (
    <article className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-2xl shadow-lg border border-blue-200 p-6 sm:p-7 flex flex-col h-full">
      {/* Verified */}
      <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-200">
        <ShieldCheckIcon className="w-4 h-4 text-blue-600" />
        <span className="text-xs font-medium text-blue-700">Verified</span>
      </div>

      {/* Avatar */}
      <div className="mx-auto mb-4 w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-md">
        <Image
          src={t.image}
          alt={t.author}
          width={80}
          height={80}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Stars */}
      <div className="mb-3">
        <Stars filled={t.rating} />
      </div>

      {/* Quote */}
      <blockquote
        id={`quote-${idx}`}
        className={`relative text-center text-base sm:text-lg text-gray-700 leading-relaxed ${
          isOpen ? "" : "overflow-hidden"
        }`}
        style={
          isOpen
            ? undefined
            : {
                display: "-webkit-box",
                WebkitLineClamp: COLLAPSED_LINES,
                WebkitBoxOrient: "vertical",
              }
        }
      >
        &ldquo;{t.quote}&rdquo;
        {!isOpen && isLong && (
          <span
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-blue-200/80 to-transparent"
            aria-hidden
          />
        )}
      </blockquote>

      {isLong && (
        <button
          type="button"
          onClick={() => onToggle(idx)}
          className="mt-2 inline-flex self-center items-center text-sm font-semibold text-blue-700 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded"
          aria-expanded={isOpen}
          aria-controls={`quote-${idx}`}
        >
          {isOpen ? "Read less" : "Read more"}
        </button>
      )}

      {/* Footer */}
      <div className="mt-5 border-t border-blue-200/50 pt-4 text-center">
        <h4 className="text-lg sm:text-xl font-bold text-blue-900">
          {t.author}
        </h4>
        <p className="text-sm text-blue-700/90">{t.position}</p>
        <div className="mt-1 flex items-center justify-center gap-2 text-xs">
          <span className="text-blue-700">{t.source}</span>
          <span className="text-blue-500">•</span>
          <span className="text-blue-600/80">{t.date}</span>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsGridPage() {
  const [expanded, setExpanded] = useState({});
  const toggle = (idx) => setExpanded((s) => ({ ...s, [idx]: !s[idx] }));

  return (
    <MainLayout>
      <div id="testimonials" className="w-full max-w-7xl mx-auto px-4 py-8">
        {/* Header band reused */}
        <div className="w-full rounded-2xl mb-8 px-3 sm:px-4 py-3 sm:py-4 bg-[linear-gradient(90deg,rgba(244,255,233,1)_19%,rgba(180,221,121,1)_44%,rgba(128,186,39,1)_73%)] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 lg:gap-8">
          <div className="flex flex-col items-start">
            <p className="text-xs sm:text-sm font-medium">Best 2025</p>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold">
              Credit Score Repair
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 md:gap-3">
            <div className="flex items-center gap-3 sm:gap-4 bg-blue-50 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-full">
              <div className="flex" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-400"
                  />
                ))}
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-blue-900 leading-none">
                  4.9
                  <span className="ml-1 align-top text-sm sm:text-lg text-blue-600">
                    /5
                  </span>
                </p>
                <span className="sr-only">Average rating 4.9 out of 5</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              Based on{" "}
              <span className="font-medium text-blue-700">
                976 verified reviews
              </span>
            </p>
          </div>
          <a href="https://www.productreview.com.au/listings/australian-credit-solutions">
            <Image
              src={productreview}
              alt="Best 2025 Credit Score Repair"
              width={400}
              height={250}
              priority
              sizes="(max-width: 768px) 40vw, (max-width: 1024px) 30vw, 240px"
              className="mt-1 hidden lg:block md:mt-0 h-auto w-28 sm:w-40 md:w-48 lg:w-60 object-contain"
            />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <TestimonialCard
              key={idx}
              t={t}
              idx={idx}
              isOpen={!!expanded[idx]}
              onToggle={toggle}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
