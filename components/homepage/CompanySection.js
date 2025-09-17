"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Import your logo files
import anz from "../../app/assets/company/anz.png";
import commonwealth from "../../app/assets/company/coomonbank.png";
import creditcorp from "../../app/assets/company/creditcorpgroup.png";
import dodo from "../../app/assets/company/dodo.png";
import flexirent from "../../app/assets/company/flexi.png";
import gemoney from "../../app/assets/company/gemoney.png";
import latitude from "../../app/assets/company/latitude.png";
import nab from "../../app/assets/company/nab.png";
import origin from "../../app/assets/company/Origin.png";
import panthera from "../../app/assets/company/panthera.png";
import stgeorge from "../../app/assets/company/st.png";
import westpac from "../../app/assets/company/westpac.png";

// Name + image pairs for good alt/title (SEO)
const COMPANIES = [
  { src: anz, name: "ANZ Bank New Zealand" },
  { src: commonwealth, name: "Commonwealth Bank" },
  { src: creditcorp, name: "Credit Corp Group" },
  { src: dodo, name: "Dodo" },
  { src: flexirent, name: "FlexiRent" },
  { src: gemoney, name: "GE Money" },
  { src: latitude, name: "Latitude Financial Services" },
  { src: nab, name: "NAB – National Australia Bank" },
  { src: origin, name: "Origin Energy" },
  { src: panthera, name: "Panthera Finance" },
  { src: stgeorge, name: "St.George Bank" },
  { src: westpac, name: "Westpac" },
];

export default function CompanyCarousel() {
  return (
    <div className="lg:py-16 py-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Defaults we remove {" "}
            <span className="bg-blue bg-clip-text text-transparent">
              on a daily basis
            </span>
          </h2>
          <p className="text-lg text-blue max-w-3xl mx-auto">
            Our clients work with Australia's leading financial institutions and service providers
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          loop
          speed={1200}
          spaceBetween={40}
          slidesPerView={6}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 16 },
            480: { slidesPerView: 3, spaceBetween: 20 },
            640: { slidesPerView: 4, spaceBetween: 24 },
            768: { slidesPerView: 5, spaceBetween: 28 },
            1024: { slidesPerView: 6, spaceBetween: 32 },
            1280: { slidesPerView: 7, spaceBetween: 36 },
          }}
          className="py-4"
          aria-label="Australian company logos carousel"
        >
          {COMPANIES.map(({ src, name }, i) => (
            <SwiperSlide key={name + i}>
              <div className="flex items-center justify-center h-32 transition-all group">
                {/* Enhanced logo container with gradient border effect */}
                <div className="relative w-40 h-40 rounded-xl bg-white shadow-sm border border-blue-100 group-hover:shadow-md group-hover:border-blue-200 transition-all duration-300 flex items-center justify-center p-4">
                  <Image
                    src={src}
                    alt={`${name} logo`}
                    title={name}
                    width={120}
                    height={60}
                    className="object-contain opacity-100 group-hover:opacity-100 transition-opacity duration-300 grayscale-50 group-hover:grayscale-0"
                    // Removed priority for all images to avoid conflict with lazy loading
                    // Next.js automatically optimizes loading behavior
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Additional decorative elements */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="w-2 h-2 bg-blue-300 rounded-full opacity-60"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}