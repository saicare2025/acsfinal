"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import blogData from "../../data/blogs_data.json";
import Link from "next/link";
import MainLayout from "@/app/MainLayout";
import HeroSection from "@/components/homepage/HeroSection4";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [processedContent, setProcessedContent] = useState("");

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    setError(null);

    try {
      const found = blogData.find((blog) => blog.slug === slug);

      if (!found) {
        setError("Blog not found");
      } else {
        setPost(found);

        // Process content to remove first h2
        if (typeof found.content === "string") {
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = found.content;
          const firstH2 = tempDiv.querySelector("h2");
          if (firstH2) {
            firstH2.remove();
          }
          setProcessedContent(tempDiv.innerHTML);
        }

        // Get recent posts (excluding current post)
        setRecentPosts(
          blogData.filter((blog) => blog.slug !== slug).slice(0, 10)
        );
      }
    } catch (err) {
      console.error("Failed to load blog:", err);
      setError("Failed to load blog");
    } finally {
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center py-20 text-blue-600">
          <svg
            className="animate-spin h-10 w-10 mb-4 text-blue-600"
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
          <p className="text-sm font-medium text-blue-600">
            Loading blog post...
          </p>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="text-center py-20 text-red-500">{error}</div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <HeroSection/>
      <div className="max-w-5xl mx-auto px-4 py-6 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main>
            {/* Breadcrumb */}
            <nav
              className="flex items-center text-base mb-4 lg:mb-6 space-x-2"
              aria-label="Breadcrumb"
            >
              <Link
                href="/"
                className="text-blue-500 hover:text-blue-600 transition-colors duration-200 hover:underline hover:underline-offset-4"
              >
                Home
              </Link>
              <span aria-hidden="true" className="text-blue-300">
                /
              </span>
              <Link
                href="/blogs"
                className="text-blue-500 hover:text-blue-600 transition-colors duration-200 hover:underline hover:underline-offset-4"
              >
                Blogs
              </Link>
              <span aria-hidden="true" className="text-blue-300">
                /
              </span>
              <span className="text-blue-700 font-medium truncate max-w-[60%]">
                {post.title}
              </span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-[#035071] mb-6 leading-tight">
              {post.title || "Untitled"}
            </h1>

            {/* Blog Content */}
            <article className="blog max-w-none">
              {processedContent ? (
                <div dangerouslySetInnerHTML={{ __html: processedContent }} />
              ) : (
                <p>No content available</p>
              )}
            </article>

            {/* Back Button */}
            <div className="mt-12">
              <Link
                href="/blogs"
                className="inline-block px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:from-blue-600 hover:to-indigo-700 shadow"
              >
                ← Back to all articles
              </Link>
            </div>
          </main>

         
        </div>
      </div>
    </MainLayout>
  );
}
