"use client";

import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MainLayout from "../MainLayout";
import PremiumTestimonialCarousel from "../../components/homepage/Testmonials";

const YOUTUBE_VIDEOS = [
  {
    id: "video1",
    embedId: "kul2qAjNq-Q",
    title: "Client Success Story - Sarah",
    thumbnail: "https://img.youtube.com/vi/kul2qAjNq-Q/maxresdefault.jpg",
  },
  {
    id: "video2",
    embedId: "89ceb0uVZo4",
    title: "Credit Repair Journey - Michael",
    thumbnail: "https://img.youtube.com/vi/89ceb0uVZo4/maxresdefault.jpg",
  },
  {
    id: "video3",
    embedId: "uer-g34e_d8",
    title: "From 500 to 700 Credit Score",
    thumbnail: "https://img.youtube.com/vi/uer-g34e_d8/maxresdefault.jpg",
  },
  {
    id: "video4",
    embedId: "V3VUjwqufhg",
    title: "Business Loan Approval Story",
    thumbnail: "https://img.youtube.com/vi/V3VUjwqufhg/maxresdefault.jpg",
  },
  {
    id: "video6",
    embedId: "89ceb0uVZo4",
    title: "Credit Repair Journey - Michael",
    thumbnail: "https://img.youtube.com/vi/89ceb0uVZo4/maxresdefault.jpg",
  },
  {
    id: "video5",
    embedId: "uer-g34e_d8",
    title: "From 500 to 700 Credit Score",
    thumbnail: "https://img.youtube.com/vi/uer-g34e_d8/maxresdefault.jpg",
  },
];

export default function BookingConfirmation() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className=" py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Confirmation Header */}
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-green-400 bg-gradient-to-br from-blue-50 to-blue-100 shadow-sm">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Appointment Confirmed!
            </h1>
           
          </div>

          {/* Confirmation Details */}
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 p-1 shadow-sm">
            <div className="rounded-xl bg-white p-6 sm:p-8">
              <div className="prose prose-blue">
                <p className="text-gray-700">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text font-medium text-transparent">
                    One of our credit specialists will contact you shortly.
                  </span>{" "}
                  Please be available at your scheduled time as we maintain a
                  high-demand appointment calendar to serve our clients
                  efficiently.
                </p>
                <p className="mt-4 font-medium text-blue-600">
                  While you wait, explore verified client experiences below.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div >
            <PremiumTestimonialCarousel />
          </div>

          {/* YouTube Video Carousel */}
          <div >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-6">
              Clients <span className="text-blue">Success</span> Histories
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
              Watch real clients share their credit repair journeys
            </p>

            <div className="mt-10 px-2 sm:px-4">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1.5 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                centeredSlides={true}
                className="relative !pb-12"
              >
                {YOUTUBE_VIDEOS.map((video) => (
                  <SwiperSlide key={video.id}>
                    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                      <div className="relative aspect-video w-full overflow-hidden">
                        <iframe
                          className="h-full w-full"
                          src={`https://www.youtube.com/embed/${video.embedId}?rel=0&modestbranding=1`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600/80 backdrop-blur-sm">
                            <svg
                              className="h-8 w-8 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {video.title}
                        </h3>
                        <p className="mt-2 text-gray-600">
                          {video.description}
                        </p>
                        <div className="mt-4 flex-1">
                          <a
                            href={`https://youtu.be/${video.embedId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                          >
                            Watch full story
                            <svg
                              className="ml-1 h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                {/* Navigation buttons */}
                <div className="swiper-button-prev !-left-1 !h-10 !w-10 rounded-full bg-white/80 !text-blue-600 shadow-md after:!text-sm"></div>
                <div className="swiper-button-next !-right-1 !h-10 !w-10 rounded-full bg-white/80 !text-blue-600 shadow-md after:!text-sm"></div>

                {/* Pagination */}
                <div className="swiper-pagination !bottom-0"></div>
              </Swiper>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600">
              Have questions before your appointment?{" "}
              <br className="sm:hidden" />
              Contact us at{" "}
              <span className="font-medium text-blue-600">
                help@australiancreditsolutions.com.au
              </span>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
