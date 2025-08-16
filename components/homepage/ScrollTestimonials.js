import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";

const testimonials = [
  {
    quote:
      "My experience with Australian Credit Solutions was excellent! The process was very smooth and fast. A big thank you to Daisy and Angelie for their amazing support and assistance. They made everything so much easier. Highly recommend their service!",
    author: "Thai",
    position: "Financial Advisor",
    rating: 5,
    date: "2 days ago",
  },
  {
    quote:
      "Do yourself a favour – Australian Credit Solutions are the Good People you need to talk to when you need Good Solutions for your Credit Rating. Bless Them All",
    author: "Kim",
    position: "Business Owner",
    rating: 5,
    date: "1 week ago",
  },
  {
    quote:
      "Excellent work – I am very happy with the outcome. My enquiries have been removed and my default as well. Successfully removed another invalid inquiry. It’s really possible to repair the credit. Amazing! Thank you Reyna and Angelie for working on my file.",
    author: "Vivek",
    position: "Investor",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    quote:
      "Thank you so much for informing me—it was so good to hear the result! I’m beyond happy and honestly feel like celebrating. This means so much to me after everything I’ve been through.",
    author: "Raphael C.",
    position: "Freelancer",
    rating: 5,
    date: "1 month ago",
  },
  {
    quote:
      "Kristine and the team have been incredibly helpful and professional. They’re honest, fast, and really know what they’re doing. Everything was handled smoothly and without any delays. Highly recommended!",
    author: "Jason Poore",
    position: "Entrepreneur",
    rating: 5,
    date: "2 months ago",
  },
  {
    quote:
      "Good Service – Australia Credit Solutions done awesome in assisting me in partly fixing my credit file. Shane expertly guided me in fixing my credit file. Erica kept me updated every step of the way, adding a personal touch that made all the difference.",
    author: "David Freeman",
    position: "Expat",
    rating: 5,
    date: "3 months ago",
  },
  {
    quote:
      "The customer service team is excellent! Very friendly, professional, and always willing to help. They made the whole process smooth and easy. I truly appreciate the support and positive attitude of the team. Highly recommended!",
    author: "Russel",
    position: "Financial Advisor",
    rating: 5,
    date: "2 days ago",
  },
  {
    quote:
      "I’m very happy with the service so far. Kristine and Angelie have been great—both very helpful and responsive. They’ve made the process smooth and easy, and I appreciate their support throughout. Excellent service overall!",
    author: "Gavin",
    position: "Business Owner",
    rating: 5,
    date: "1 week ago",
  },
  {
    quote:
      "It’s all good—thank you so much, I really liked the experience! Angelie was excellent in helping me with my loan, and Vanessa kept me updated and supported me throughout. Truly appreciated!",
    author: "Flavio G.",
    position: "Investor",
    rating: 5,
    date: "3 weeks ago",
  },
];

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-200 rounded-lg shadow-sm border border-gray-100 p-6 h-[340px] flex flex-col items-start justify-center transition-all duration-300 hover:shadow-md">
      <div className="flex justify-center items-center">
        <p className="text-gray-700 text-base ">{review.quote}</p>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(review.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.384 2.46a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.538 1.118L10 13.347l-3.384 2.461c-.783.57-1.838-.196-1.538-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.616 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-gray-900">{review.author}</p>
            <p className="text-xs text-gray-500">{review.position}</p>
          </div>
          <span className="text-xs text-gray-400">{review.date}</span>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fix your Credit with{" "}
            <span className="bg-gradient-to-r from-[#0668a5] to-[#0aa6e8] bg-clip-text text-transparent">
              Australian Credit Solutions
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Our Credit Repair Specialists help individuals resolve issues on
            their credit file. With expert guidance and tailored advice, we
            provide the service best suited to your financial situation.
          </p>
       
        </div>

        <Swiper
          modules={[Autoplay, Grid]}
          slidesPerView={1}
          grid={{ rows: 2, fill: "row" }}
          spaceBetween={24}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          allowTouchMove={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
        >
          {testimonials.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
