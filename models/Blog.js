import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    trim: true
    // Removed `unique: true` to allow duplicates
  },
  content: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    trim: true
  },
  author: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    trim: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  category: {
    type: String,
    trim: true
  },
  metaTitle: {
    type: String,
    trim: true
  },
  metaDescription: {
    type: String,
    trim: true
  },
  published: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

// Indexes (without conflicts)
blogSchema.index({ slug: 1 });        // No unique constraint now
blogSchema.index({ published: 1 });
blogSchema.index({ category: 1 });
blogSchema.index({ tags: 1 });

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;

