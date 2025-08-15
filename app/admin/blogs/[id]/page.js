'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import TiptapEditor from '@/components/TiptapEditor';
import { put } from '@vercel/blob';
import { htmlToText } from 'html-to-text';

const BlogEditor = ({ params }) => {
  const router = useRouter();
  const { id } = params;
  const isNew = id === 'new';

  const [blog, setBlog] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    author: '',
    image: '',
    tags: [],
    category: '',
    metaTitle: '',
    metaDescription: '',
    published: true
  });

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  // Fetch blog data if editing existing blog
  useEffect(() => {
    if (!isNew) {
      fetchBlog();
    }
  }, [id]);

  const fetchBlog = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/blogs/${id}`);
      const result = await response.json();
      
      if (result.success) {
        setBlog(result.data);
        if (result.data.image) {
          setImagePreview(result.data.image);
        }
      } else {
        setError('Failed to fetch blog');
      }
    } catch (error) {
      setError('Error fetching blog');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setBlog(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTagsChange = (value) => {
    const tags = value.split(',').map(tag => tag.trim()).filter(tag => tag);
    setBlog(prev => ({
      ...prev,
      tags
    }));
  };

  const handleImageUpload = async (file) => {
    if (!file) return;

    try {
      const blob = await put(file.name, file, {
        access: 'public',
      });

      setBlog(prev => ({
        ...prev,
        image: blob.url
      }));
      setImagePreview(blob.url);
      setImageFile(null);
    } catch (error) {
      setError('Failed to upload image');
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setError('');
    setSuccess('');

    try {
      // Upload image if there's a new file
      if (imageFile) {
        await handleImageUpload(imageFile);
      }

      const url = isNew ? '/api/blogs' : `/api/blogs/${id}`;
      const method = isNew ? 'POST' : 'PUT';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blog),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess('Blog saved successfully!');
        if (isNew) {
          router.push(`/admin/blogs/${result.data._id}`);
        }
      } else {
        setError(result.error || 'Failed to save blog');
      }
    } catch (error) {
      setError('Error saving blog');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    setSaving(true);
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (result.success) {
        router.push('/admin/blogs');
      } else {
        setError(result.error || 'Failed to delete blog');
      }
    } catch (error) {
      setError('Error deleting blog');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {isNew ? 'Create New Blog' : 'Edit Blog'}
              </h1>
              <p className="mt-2 text-gray-600">
                {isNew ? 'Create a new blog post' : 'Edit your blog post'}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => router.push('/admin/blogs')}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Back to Blogs
              </button>
              {!isNew && (
                <button
                  onClick={handleDelete}
                  disabled={saving}
                  className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 disabled:opacity-50"
                >
                  {saving ? 'Deleting...' : 'Delete'}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Alerts */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-800">{error}</p>
          </div>
        )}
        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-800">{success}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                value={blog.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter blog title"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Slug *
              </label>
              <input
                type="text"
                value={blog.slug}
                onChange={(e) => handleInputChange('slug', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="blog-post-url-slug"
              />
            </div>

            {/* Content Editor */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content *
              </label>
              <TiptapEditor
                content={blog.content}
                onChange={(content) => handleInputChange('content', content)}
                placeholder="Start writing your blog content..."
              />
            </div>

            {/* Plain Text Preview */}
            {blog.content && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Plain Text Preview (Read-only)
                </label>
                <div className="p-4 bg-gray-100 border border-gray-300 rounded-md max-h-40 overflow-y-auto">
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">
                    {htmlToText(blog.content, {
                      wordwrap: 80,
                      preserveNewlines: true,
                    })}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Save Button */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <button
                onClick={handleSave}
                disabled={saving || !blog.title || !blog.slug || !blog.content}
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? 'Saving...' : 'Save Blog'}
              </button>
            </div>

            {/* Blog Settings */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Blog Settings</h3>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt
                </label>
                <textarea
                  value={blog.excerpt}
                  onChange={(e) => handleInputChange('excerpt', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Brief description of the blog post"
                />
              </div>

              {/* Author */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Author
                </label>
                <input
                  type="text"
                  value={blog.author}
                  onChange={(e) => handleInputChange('author', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Author name"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <input
                  type="text"
                  value={blog.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Blog category"
                />
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={blog.tags.join(', ')}
                  onChange={(e) => handleTagsChange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="tag1, tag2, tag3"
                />
              </div>

              {/* Published Status */}
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={blog.published}
                    onChange={(e) => handleInputChange('published', e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Published</span>
                </label>
              </div>
            </div>

            {/* SEO Settings */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
              <h3 className="text-lg font-medium text-gray-900">SEO Settings</h3>

              {/* Meta Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={blog.metaTitle}
                  onChange={(e) => handleInputChange('metaTitle', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="SEO title for search engines"
                />
              </div>

              {/* Meta Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Description
                </label>
                <textarea
                  value={blog.metaDescription}
                  onChange={(e) => handleInputChange('metaDescription', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="SEO description for search engines"
                />
              </div>
            </div>

            {/* Image Upload */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Featured Image</h3>

              {/* Current Image */}
              {imagePreview && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Image
                  </label>
                  <img
                    src={imagePreview}
                    alt="Blog cover"
                    className="w-full h-32 object-cover rounded-md border border-gray-300"
                  />
                </div>
              )}

              {/* Upload New Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload New Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setImageFile(file);
                      setImagePreview(URL.createObjectURL(file));
                    }
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Remove Image */}
              {imagePreview && (
                <button
                  onClick={() => {
                    setImagePreview('');
                    setImageFile(null);
                    handleInputChange('image', '');
                  }}
                  className="w-full px-3 py-2 text-red-600 border border-red-300 rounded-md hover:bg-red-50"
                >
                  Remove Image
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;
