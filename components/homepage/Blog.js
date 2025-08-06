import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Clock, FileText, ChartLine, ShieldCheck } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Remove Defaults from Your Credit Report",
      excerpt: "Learn the step-by-step process to dispute and remove incorrect defaults that are damaging your credit score.",
      category: "Credit Repair",
      readTime: "5 min read",
      icon: <ShieldCheck className="w-5 h-5 text-blue" />,
      date: "May 15, 2023"
    },
    {
      id: 2,
      title: "Understanding Your Credit Score: A Complete Guide",
      excerpt: "Discover what factors influence your credit score and how to improve each component effectively.",
      category: "Credit Education",
      readTime: "7 min read",
      icon: <ChartLine className="w-5 h-5 text-blue" />,
      date: "June 2, 2023"
    },
    {
      id: 3,
      title: "The Impact of Credit Inquiries on Your Score",
      excerpt: "Hard vs soft inquiries - what's the difference and how they affect your creditworthiness.",
      category: "Credit Basics",
      readTime: "4 min read",
      icon: <FileText className="w-5 h-5 text-blue" />,
      date: "April 28, 2023"
    },
    {
      id: 4,
      title: "Rebuilding Credit After Financial Hardship",
      excerpt: "Proven strategies to rebuild your credit score after bankruptcy, defaults or other financial challenges.",
      category: "Credit Repair",
      readTime: "6 min read",
      icon: <Clock className="w-5 h-5 text-blue" />,
      date: "July 10, 2023"
    },
    {
      id: 5,
      title: "How Long Do Negative Items Stay on Your Report?",
      excerpt: "The complete timeline for different types of negative marks and when they should automatically disappear.",
      category: "Credit Education",
      readTime: "5 min read",
      icon: <Clock className="w-5 h-5 text-blue" />,
      date: "March 22, 2023"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-indigo-600">Credit Insights</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Educational resources to help you understand and improve your credit
          </p>
        </motion.div>

        <div className="relative px-2">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}

            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
            loop={true}
            className="pb-12"
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-all h-full flex flex-col"
                  style={{ minHeight: '300px' }} // Fixed height
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-md">
                        {post.icon}
                      </div>
                      <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue to-blue-500">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                      <span className="text-sm text-gray-500">
                        {post.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Gradient fade effects */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-indigo-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-purple-50 to-transparent z-10 pointer-events-none" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <button className="px-6 py-3 bg-gradient-to-r from-blue to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg shadow-md transition-all transform hover:-translate-y-0.5">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;