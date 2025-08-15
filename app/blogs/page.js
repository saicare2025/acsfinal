"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Clock } from "lucide-react";
import MainLayout from "../MainLayout";

// 👇 Import local JSON data (ensure blog_data.json is in src/data/)
import blogData from "../data/blogs_data.json";
import Image from "next/image";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const LIMIT = 9;

  // 🚫 Original API code (preserved for future reference)
  /*
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(`/api/blogs?page=${page}&limit=${LIMIT}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch blogs. Status: ${res.status}`);
        }

        const data = await res.json();
        if (data.success) {
          setBlogs(data.data);
          setTotalPages(data.pagination.pages || 1);
        } else {
          setError(data.error || "Something went wrong while fetching blogs.");
        }
      } catch (err) {
        console.error("❌ Error fetching blogs:", err);
        setError("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [page]);
  */

  // ✅ Local import-based blog loading
  useEffect(() => {
    setLoading(true);
    setError("");

    try {
      const total = blogData.length;
      const start = (page - 1) * LIMIT;
      const paginated = blogData.slice(start, start + LIMIT);

      setBlogs(paginated);
      setTotalPages(Math.ceil(total / LIMIT));
    } catch (err) {
      console.error("❌ Failed to load blogs:", err);
      setError("Failed to load blogs.");
    } finally {
      setLoading(false);
    }
  }, [page]);

  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  return (
    <MainLayout>
      <section className="py-8 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-6 lg:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                Credit Insights
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Educational resources to help you understand and improve your
              credit
            </p>
          </div>

          {/* Error */}
          {error && <p className="text-center text-red-500 mb-6">{error}</p>}

          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-12 text-blue">
              <svg
                className="animate-spin h-10 w-10 mb-4 text-blue"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              <p className="text-sm font-medium">Loading blog posts...</p>
            </div>
          )}

          {/* Blog Grid */}
          {!loading && blogs.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col"
                >
                  {/* Cover Image */}
                  {post.image && (
                    <div className="relative w-full h-48 bg-gray-100 rounded overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={false} // You can set to true if it's above the fold
                      />
                    </div>
                  )}

                  {/* Blog Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition-colors mb-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 flex-grow">
                      {post.excerpt?.split(" ").slice(0, 25).join(" ") +
                        (post.excerpt?.split(" ").length > 25 ? "..." : "")}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* No Blogs Found */}
          {!loading && blogs.length === 0 && !error && (
            <p className="text-center text-gray-500 mt-6">No blogs found.</p>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                onClick={handlePrev}
                disabled={page === 1}
                className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-300 rounded-md hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Previous
              </button>

              <span className="text-sm font-medium text-blue-700">
                Page {page} of {totalPages}
              </span>

              <button
                onClick={handleNext}
                disabled={page === totalPages}
                className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-300 rounded-md hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
