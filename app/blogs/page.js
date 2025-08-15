"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Clock } from "lucide-react";
import MainLayout from "../MainLayout";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const LIMIT = 9;

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      try {
        const res = await fetch(`/api/blogs?page=${page}&limit=${LIMIT}`);
        const json = await res.json();

        if (json.success) {
          setBlogs(json.data);
          setTotalPages(json.pagination.pages);
        } else {
          console.error("Failed to fetch blogs:", json.error);
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, [page]);

  const handlePrev = () => {
    if (page > 1) setPage((p) => p - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage((p) => p + 1);
  };

  return (
    <MainLayout>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
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

          {/* Loading state */}
          {loading && (
            <p className="text-center text-gray-500">Loading blogs...</p>
          )}

          {/* Blog Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post) => (
              <Link
                key={post._id}
                href={`/blogs/${post.slug}`}
                className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col"
              >
                {/* Cover Image */}
                {post.image && (
                  <div className="w-full h-48 bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h2 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition-colors mb-2">
                    {post.title}
                  </h2>

                  {/* Short Excerpt */}
                  <p className="text-gray-600 mb-4 flex-grow">
                    {post.excerpt?.split(" ").slice(0, 25).join(" ") +
                      (post.excerpt?.split(" ").length > 15 ? "..." : "")}
                  </p>

                  {/* Meta Info */}
                  <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime || "5 min read"}
                    </span>
                    <time>
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty state */}
          {!loading && blogs.length === 0 && (
            <p className="text-center text-gray-500 mt-6">No blogs found.</p>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                onClick={handlePrev}
                disabled={page === 1}
                className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-300 rounded-md hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
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
                className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-300 rounded-md hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
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
