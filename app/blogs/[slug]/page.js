"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Clock } from "lucide-react";
import MainLayout from "@/app/MainLayout";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${slug}`);

        if (!res.ok) {
          if (res.status === 404) {
            setError("Blog not found");
            return;
          }
          throw new Error(`Failed to fetch blog: ${res.status}`);
        }

        const json = await res.json();
        if (!json.success || !json.data) {
          setError("Blog not found");
          return;
        }

        setPost(json.data);
      } catch (err) {
        console.error("❌ Failed to fetch blog:", err);
        setError("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <MainLayout>
        <div className="text-center py-20 text-gray-500">Loading blog...</div>
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
      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6 text-gray-500">
          <Link href="/blogs" className="hover:text-blue-600">
            Blogs
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{post.title}</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl font-bold text-blue-900 mb-2">
          {post.title || "Untitled"}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
          <span className="inline-flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime || "5 min read"}
          </span>
          <time>
            {post.createdAt
              ? new Date(post.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : "Unknown date"}
          </time>
        </div>

        {/* Cover Image */}
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        )}

        {/* Content */}
        <article className="prose prose-blue max-w-none">
          {typeof post.content === "string" ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <p>No content available</p>
          )}
        </article>

        {/* Back Button */}
        <div className="mt-10">
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
