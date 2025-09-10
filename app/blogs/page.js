"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Clock, ArrowRight, ArrowLeft, BookOpen } from "lucide-react";
import MainLayout from "../MainLayout";
import blogData from "../../data/blogs_data.json";
import HeroSection from "../../components/homepage/HeroSection";
import { generateMinimalStructuredData } from "../../utils/generateMinimalStructuredData";

import RelatedBlock from "@/app/_seo/RelatedBlock";

// Constants
const LIMIT = 9;

// Main Page Component
export default function BlogsPage() {
  // Generate structured data for this page
  const structuredData = generateMinimalStructuredData({
    pathname: "/blogs",
    title: "Credit Repair Blog | Australian Credit Solutions",
    description: "Expert insights on credit repair, financial tips, and industry updates from Australian Credit Solutions professionals.",
    isService: false
  });

  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Generate a random reading time between 3-10 minutes
  const getRandomReadTime = useCallback(() => {
    return Math.floor(Math.random() * 8) + 3;
  }, []);

  // Load blogs and apply pagination
  const loadBlogs = useCallback(() => {
    setLoading(true);
    try {
      const start = (page - 1) * LIMIT;
      const paginated = blogData.slice(start, start + LIMIT).map((post) => ({
        ...post,
        readTime: getRandomReadTime(),
      }));

      setBlogs(paginated);
      setTotalPages(Math.ceil(blogData.length / LIMIT));
      setError("");
    } catch (err) {
      console.error("Failed to load blogs:", err);
      setError("Failed to load blogs. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [page, getRandomReadTime]);

  useEffect(() => {
    loadBlogs();
  }, [loadBlogs]);

  const handlePrev = () => page > 1 && setPage((prev) => prev - 1);
  const handleNext = () => page < totalPages && setPage((prev) => prev + 1);

  return (
    <MainLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <HeroSection/>
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4 bg-blue-100 text-blue rounded-full px-4 py-2">
              <BookOpen className="w-5 h-5 mr-2" />
              <span className="font-medium">Credit Education</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest <span className="text-blue">Credit Insights</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert articles to help <Link href="/blog-details/get-loans-with-bad-credit" className="text-blue-600 hover:text-blue-800 underline">Get Loans With Bad Credit</Link> you understand and improve your financial health
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-center py-8">
              <p className="text-red-500">{error}</p>
              <button
                onClick={loadBlogs}
                className="mt-4 px-4 py-2 bg-blue text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Retry
              </button>
            </div>
          )}

          {/* Loading Spinner */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-blue font-medium">Loading articles...</p>
            </div>
          )}

          {/* Blog Cards */}
          {!loading && blogs.length > 0 && (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && blogs.length === 0 && !error && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No <Link href="/blog-details/bad-credit-can-cost-you-money-here-s-why" className="text-blue-600 hover:text-blue-800 underline">Bad Credit Can Cost You Money Here S Why</Link> articles found</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-4">
              <PaginationButton
                direction="prev"
                onClick={handlePrev}
                disabled={page === 1}
              />

              <span className="text-sm font-medium text-blue-700 px-4 py-2 bg-blue-100 rounded-md">
                Page {page} of {totalPages}
              </span>

              <PaginationButton
                direction="next"
                onClick={handleNext}
                disabled={page === totalPages}
              />
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}

// BlogCard component
function BlogCard({ post }) {
  const excerpt = post.excerpt?.split(" ").slice(0, 25).join(" ");
  const needsEllipsis = post.excerpt?.split(" ").length > 25;

  return (

    <Link
      href={`/blog-details/${post.slug}`}
      className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3 flex items-center text-sm text-blue">
          <Clock className="w-4 h-4 mr-1.5" />
          <span>{post.readTime} min read</span>
        </div>

        <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue transition-colors mb-3">
          {post.title}
        </h2>

        <p className="text-gray-600 mb-4 flex-grow">
          {excerpt}{needsEllipsis && "..."}
        </p>

        <div className="mt-auto pt-3 border-t border-gray-100">
          <span className="inline-flex items-center text-blue font-medium group-hover:text-blue transition-colors">
            Read more
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

BlogCard.displayName = "BlogCard";

// PaginationButton component
function PaginationButton({ direction, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center px-4 py-2 text-sm font-medium ${
        disabled
          ? "text-gray-400 bg-gray-100 cursor-not-allowed"
          : "text-blue bg-white hover:bg-blue-50"
      } border border-gray-300 rounded-md transition-colors`}
      aria-label={direction === "prev" ? "Previous page" : "Next page"}
    >
      {direction === "prev" ? (
        <>
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Previous
        </>
      ) : (
        <>
          Next
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </>
      )}
    </button>
  );
}

PaginationButton.displayName = "PaginationButton";
