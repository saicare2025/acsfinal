"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import c1 from "@/app/assets/company/1.webp";
import c2 from "@/app/assets/company/2.webp";
import c3 from "@/app/assets/company/3.webp";
import c4 from "@/app/assets/company/4.webp";
import c5 from "@/app/assets/company/5.webp";
import c6 from "@/app/assets/company/6.webp";
import c7 from "@/app/assets/company/1.webp";
import c8 from "@/app/assets/company/2.webp";
import c9 from "@/app/assets/company/3.webp";

const CompanyCarousel = () => {
  const companies = [c1, c2, c3, c4, c5, c6, c7, c8, c9];

  return (
    <div className="lg:py-12 py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Section */}
        <div className="text-start mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Defaults{" "}
            <span className="bg-blue bg-clip-text text-transparent">
              We Remove Daily Basis
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by industry leaders worldwide
          </p>
        </div>
        

        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1000}
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          className="py-6"
        >
          {companies.map((company, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center lg:h-44 transition-all duration-300">
                <div className="relative w-[200px] h-[100px]">
                  {" "}
                  {/* 30% larger than 200x100 */}
                  <Image
                    src={company}
                    alt={`Company ${index + 1}`}
                    fill
                    className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 hover:scale-105"
                    sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 16vw"
                    quality={75}
                    loading="lazy"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CompanyCarousel;
