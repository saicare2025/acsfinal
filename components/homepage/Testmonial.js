"use client";

import { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import {
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

// Swiper styles (make sure these are included globally in your app as well)
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";

import review1 from "../../app/assets/review-image/1.webp";
import review2 from "../../app/assets/review-image/2.webp";
import review3 from "../../app/assets/review-image/3.webp";
import review4 from "../../app/assets/review-image/4.webp";
import review5 from "../../app/assets/review-image/5.webp";
import review6 from "../../app/assets/review-image/6.webp";
import review7 from "../../app/assets/review-image/7.webp";
import review8 from "../../app/assets/review-image/8.webp";
import review9 from "../../app/assets/review-image/9.webp";

import productReview from "../../app/assets/Screenshot_2025-08-11_142949-removebg-preview.png";


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


const COLLAPSED_LINES = 5; // how many lines to show when collapsed
const LONG_QUOTE_CHAR_THRESHOLD = 220; // when to show the Read more button

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

export default function PremiumTestimonialCarousel() {
  const [expanded, setExpanded] = useState({});

  const toggle = (idx) => setExpanded((s) => ({ ...s, [idx]: !s[idx] }));

  const swiperBreakpoints = useMemo(
    () => ({
      320: {
        slidesPerView: 1,
        coverflowEffect: { rotate: 10, depth: 100 },
      },
      768: {
        slidesPerView: 2,
        coverflowEffect: { rotate: 15, depth: 150 },
      },
      1024: {
        slidesPerView: 3,
        coverflowEffect: { rotate: 15, depth: 200 },
      },
      1280: {
        slidesPerView: 4,
        coverflowEffect: { rotate: 15, depth: 250 },
      },
    }),
    []
  );

  return (
    <div
      id="testimonials"
      className="w-full max-w-7xl mx-auto px-4 lg:py-8 p-4"
    >
      {/* Top banner */}
      <div className="text-center">
        <div className="w-full rounded-2xl mb-4 px-3 sm:px-4 py-3 sm:py-4 bg-[linear-gradient(90deg,rgba(244,255,233,1)_19%,rgba(180,221,121,1)_44%,rgba(128,186,39,1)_73%)] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 lg:gap-8">
          {/* Left: Titles */}
          <div className="flex flex-col items-start">
            <p className="text-xs sm:text-sm font-medium">Best 2025</p>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold">
              Credit Score Repair
            </p>
          </div>

          {/* Middle: Rating */}
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

          {/* Right: Image */}
          <a href="https://www.productreview.com.au/listings/australian-credit-solutions">
            <Image
              src={productReview}
              alt="Best 2025 Credit Score Repair"
              width={400}
              height={250}
              priority
              sizes="(max-width: 768px) 40vw, (max-width: 1024px) 30vw, 240px"
              className="mt-1 hidden lg:block md:mt-0 h-auto w-28 sm:w-40 md:w-48 lg:w-60 object-contain self-center"
            />
          </a>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        <Swiper
          effect={"coverflow"}
          grabCursor
          centeredSlides
          slidesPerView={4}
          spaceBetween={30}
          loop
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}
          breakpoints={swiperBreakpoints}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          className="testimonial-swiper"
        >
          {testimonials.map((t, idx) => {
            const isLong = t.quote.length > LONG_QUOTE_CHAR_THRESHOLD;
            const isOpen = !!expanded[idx];
            return (
              <SwiperSlide key={idx}>
                {/* Card */}
                <div className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-2xl shadow-lg border border-blue-200 p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-[480px]">
                  {/* Verified Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-200">
                    <ShieldCheckIcon className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-medium text-blue-700">
                      Verified
                    </span>
                  </div>

                  {/* Content Container */}
                  <div className="h-full flex flex-col items-center">
                    {/* Avatar */}
                    <div className="relative mb-4 w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-md">
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

                    {/* Quote + Read more (flex-1 to keep footer pinned) */}
                    <div className="flex-1 w-full flex flex-col items-center">
                      <blockquote
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
                          onClick={() => toggle(idx)}
                          className="mt-2 inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded"
                          aria-expanded={isOpen}
                          aria-controls={`quote-${idx}`}
                        >
                          {isOpen ? "Read less" : "Read more"}
                        </button>
                      )}

                      {/* Divider + Meta */}
                      <div className="mt-5 border-t border-blue-200/50 pt-4 w-full">
                        <h4 className="text-lg sm:text-xl font-bold text-blue-900 text-center">
                          {t.author}
                        </h4>
                        <p className="text-sm text-blue-700/90 text-center">
                          {t.position}
                        </p>
                        <div className="mt-1 flex items-center justify-center gap-2 text-xs">
                          <span className="text-blue-700">{t.source}</span>
                          <span className="text-blue-500">•</span>
                          <span className="text-blue-600/80">{t.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Custom Navigation */}
        <button
          className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeftIcon className="w-6 h-6 text-blue-700" />
        </button>
        <button
          className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRightIcon className="w-6 h-6 text-blue-700" />
        </button>
      </div>

      {/* Local styles for the Swiper behavior and active slide emphasis */}
      <style jsx global>{`
        .testimonial-swiper {
          padding: 60px 0;
        }
        .swiper-slide {
          transition: all 0.4s ease;
          transform-origin: center center;
        }
        .swiper-slide-active {
          transform: scale(1.05) translateY(-10px) !important;
          z-index: 10;
          opacity: 1 !important;
        }
        .swiper-slide-prev,
        .swiper-slide-next {
          opacity: 0.85;
        }
        .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.7;
        }
        @media (max-width: 1023px) {
          .swiper-slide-active {
            transform: scale(1) !important;
          }
        }
      `}</style>
    </div>
  );
}
