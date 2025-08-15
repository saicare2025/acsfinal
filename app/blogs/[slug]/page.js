"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import blogData from "../../data/blogs_data.json";
import Link from "next/link";
import MainLayout from "@/app/MainLayout";
import Image from "next/image";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   if (!slug) return;

  //   const fetchBlog = async () => {
  //     try {
  //       const res = await fetch(`/api/blogs/${slug}`);

  //       if (!res.ok) {
  //         if (res.status === 404) {
  //           setError("Blog not found");
  //           return;
  //         }
  //         throw new Error(`Failed to fetch blog: ${res.status}`);
  //       }

  //       const json = await res.json();
  //       if (!json.success || !json.data) {
  //         setError("Blog not found");
  //         return;
  //       }

  //       setPost(json.data);
  //     } catch (err) {
  //       console.error("❌ Failed to fetch blog:", err);
  //       setError("Failed to load blog");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchBlog();
  // }, [slug]);
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
      }
    } catch (err) {
      console.error("❌ Failed to load blog:", err);
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
      <main className="max-w-3xl mx-auto lg:px-4 py-6 lg:py-12">
        {/* ✅ Professional Breadcrumb */}
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

        {/* ✅ Title */}
        <h1 className="text-3xl lg:text-4xl font-bold text-[#035071] mb-6 leading-tight">
          {post.title || "Untitled"}
        </h1>

        {/* ✅ Enlarged Cover Image */}
        {post.image && (
          <div className="relative w-full h-[250px] md:h-[420px] rounded-xl shadow-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, 800px"
              priority={false} // Set to true if it's above-the-fold
            />
          </div>
        )}

        {/* ✅ Blog Content */}
        <article className="blog max-w-none">
          {typeof post.content === "string" ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <p>No content available</p>
          )}
        </article>

        {/* ✅ Back Button */}
        <div className="mt-12">
          <Link
            href="/blogs"
            className="inline-block px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:from-blue-600 hover:to-indigo-700 shadow"
          >
            ← Back to all articles
          </Link>
        </div>
      </main>
    </MainLayout>
  );
}
