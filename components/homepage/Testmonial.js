"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import {
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import review1 from "../../app/assets/review-image/review1.png";
import review2 from "../../app/assets/review-image/review2.png";
import review3 from "../../app/assets/review-image/review3.png";
import review4 from "../../app/assets/review-image/review4.png";
import review5 from "../../app/assets/review-image/review5.png";
import review6 from "../../app/assets/review-image/review6.png";
const testimonials = [
  {
    quote:
      "Exceptional service from start to finish. The team went above and beyond.",
    author: "Michael T.",
    position: "Financial Advisor",
    source: "Trustpilot",
    rating: 5,
    image: review1,
    date: "2 days ago",
  },
  {
    quote:
      "I've used many exchange services, but none compare to the professionalism here.",
    author: "Sarah K.",
    position: "Business Owner",
    source: "Google Reviews",
    rating: 5,
    image: review2,
    date: "1 week ago",
  },
  {
    quote:
      "Quick response times and transparent processes. Will definitely use again.",
    author: "David P.",
    position: "Investor",
    source: "Facebook",
    rating: 5,
    image: review3,
    date: "3 weeks ago",
  },
  {
    quote:
      "The customer support team was incredibly helpful with my first exchange.",
    author: "Emma L.",
    position: "Freelancer",
    source: "Trustpilot",
    rating: 5,
    image: review4,
    date: "1 month ago",
  },
  {
    quote:
      "Competitive rates and a seamless digital experience. Completed in under 10 minutes!",
    author: "James W.",
    position: "Entrepreneur",
    source: "Google Reviews",
    rating: 5,
    image: review5,
    date: "2 months ago",
  },
  {
    quote:
      "The team guided me through every step with patience during my first transfer.",
    author: "Olivia M.",
    position: "Expat",
    source: "Facebook",
    rating: 5,
    image: review6,
    date: "3 months ago",
  },
   {
    quote:
      "Exceptional service from start to finish. The team went above and beyond.",
    author: "Michael T.",
    position: "Financial Advisor",
    source: "Trustpilot",
    rating: 5,
    image: review1,
    date: "2 days ago",
  },
  {
    quote:
      "I've used many exchange services, but none compare to the professionalism here.",
    author: "Sarah K.",
    position: "Business Owner",
    source: "Google Reviews",
    rating: 5,
    image: review2,
    date: "1 week ago",
  },
  {
    quote:
      "Quick response times and transparent processes. Will definitely use again.",
    author: "David P.",
    position: "Investor",
    source: "Facebook",
    rating: 5,
    image: review3,
    date: "3 weeks ago",
  },
  {
    quote:
      "The customer support team was incredibly helpful with my first exchange.",
    author: "Emma L.",
    position: "Freelancer",
    source: "Trustpilot",
    rating: 5,
    image: review4,
    date: "1 month ago",
  },
  {
    quote:
      "Competitive rates and a seamless digital experience. Completed in under 10 minutes!",
    author: "James W.",
    position: "Entrepreneur",
    source: "Google Reviews",
    rating: 5,
    image: review5,
    date: "2 months ago",
  },
  {
    quote:
      "The team guided me through every step with patience during my first transfer.",
    author: "Olivia M.",
    position: "Expat",
    source: "Facebook",
    rating: 5,
    image: review6,
    date: "3 months ago",
  },
];

export default function PremiumTestimonialCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:py-8 lg:pt-16 pt-4">
      <div className="text-center lg:mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
          What our <span className="text-blue">Clients</span> says about us
        </h2>

        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-4 bg-blue-50 px-6 py-3 rounded-full">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-6 h-6 text-amber-400" />
              ))}
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-900">
                4.9<span className="text-lg text-blue">/5</span>
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Based on{" "}
            <span className="font-medium text-blue-700">
              976 verified reviews
            </span>
          </p>
        </div>
      </div>

      <div className="relative">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
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
          breakpoints={{
            320: {
              slidesPerView: 1,
              coverflowEffect: {
                rotate: 10,
                depth: 100,
              },
            },
            768: {
              slidesPerView: 2,
              coverflowEffect: {
                rotate: 15,
                depth: 150,
              },
            },
            1024: {
              slidesPerView: 3,
              coverflowEffect: {
                rotate: 15,
                depth: 200,
              },
            },
            1280: {
              slidesPerView: 4,
              coverflowEffect: {
                rotate: 15,
                depth: 250,
              },
            },
          }}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          className="testimonial-swiper"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative h-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-2xl shadow-lg border border-blue-200 px-8 py-12 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Verified Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-200">
                  <ShieldCheckIcon className="w-4 h-4 text-blue" />
                  <span className="text-xs font-medium text-blue-700">
                    Verified
                  </span>
                </div>

                {/* Content Container */}
                <div className="h-full flex flex-col items-center">
                  {/* Client Avatar - Centered between rating and content */}
                  <div className="relative mb-6 w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-md">
                    <Image
                      src={t.image}
                      alt={t.author}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-5 h-5 ${
                          i < t.rating
                            ? "text-amber-400 fill-amber-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1 flex flex-col justify-between text-center">
                    <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    <div className="border-t border-blue-200/50 pt-6 w-full">
                      <h4 className="text-xl font-bold text-blue-900">
                        {t.author}
                      </h4>
                      <p className="text-sm text-blue/90 mb-1">
                        {t.position}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-xs">
                        <span className="text-blue-700">{t.source}</span>
                        <span className="text-blue-500">•</span>
                        <span className="text-blue-400">{t.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <button className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors">
          <ChevronLeftIcon className="w-6 h-6 text-blue" />
        </button>
        <button className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors">
          <ChevronRightIcon className="w-6 h-6 text-blue" />
        </button>
      </div>

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
