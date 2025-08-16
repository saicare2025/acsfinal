# Blog System for Next.js 14

A comprehensive blog management system built with Next.js 14 App Router, MongoDB, and Tiptap editor.

## Features

- **Rich Text Editor**: Tiptap-based WYSIWYG editor with formatting options
- **Image Upload**: Vercel Blob storage integration for blog cover images
- **CRUD Operations**: Full Create, Read, Update, Delete functionality
- **Admin Panel**: Clean, responsive admin interface
- **SEO Support**: Meta titles and descriptions
- **Tagging System**: Comma-separated tags with visual display
- **Pagination**: Efficient blog listing with pagination
- **Search & Filtering**: Search by title, content, excerpt, and filter by category/status
- **Migration Script**: Import blogs from JSONL file to MongoDB

## Prerequisites

- Node.js 18+ 
- MongoDB database
- Vercel account (for blob storage)

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env.local` file in your project root:
   ```env
   MONGO_DB_URL=your_mongodb_connection_string
   BLOB_READ_WRITE_TOKEN=your_vercel_blob_token
   ```

3. **MongoDB Setup**
   - Create a MongoDB database
   - Get your connection string
   - Add it to your `.env.local` file

4. **Vercel Blob Storage**
   - Create a Vercel project
   - Install Vercel CLI: `npm i -g vercel`
   - Run: `vercel link`
   - Add blob storage: `vercel blob create`
   - Copy the token to your `.env.local` file

## Usage

### 1. Migrate Existing Blogs

If you have blog data in `public/blogs_data.jsonl`:

```bash
npm run migrate-blogs
```

The migration script will:
- Read the JSONL file
- Parse each line as JSON
- Transform data to match the blog schema
- Insert blogs into MongoDB
- Handle missing images gracefully
- Preserve exact slugs from Excel

### 2. Access Admin Panel

Navigate to `/admin/blogs` to access the blog management interface.

### 3. Create New Blog

1. Go to `/admin/blogs/new`
2. Fill in the required fields (title, slug, content)
3. Add optional metadata (excerpt, author, category, tags)
4. Upload a featured image (optional)
5. Set SEO meta title and description
6. Choose publish status
7. Click "Save Blog"

### 4. Edit Existing Blog

1. Go to `/admin/blogs` to see all blogs
2. Click "Edit" on any blog
3. Make your changes
4. Click "Save Blog"

## API Endpoints

### GET /api/blogs
Get all blogs with pagination and filtering.

**Query Parameters:**
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 10)
- `search` (string): Search in title, content, excerpt
- `category` (string): Filter by category
- `tag` (string): Filter by tag
- `published` (boolean): Filter by publish status

**Response:**
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "pages": 10
  }
}
```

### POST /api/blogs
Create a new blog.

**Required Fields:**
- `title` (string)
- `slug` (string, unique)
- `content` (string, HTML)

**Optional Fields:**
- `excerpt` (string)
- `author` (string)
- `image` (string, URL)
- `tags` (array of strings)
- `category` (string)
- `metaTitle` (string)
- `metaDescription` (string)
- `published` (boolean, default: true)

### GET /api/blogs/[id]
Get a single blog by ID.

### PUT /api/blogs/[id]
Update an existing blog.

### DELETE /api/blogs/[id]
Delete a blog.

## Blog Schema

```javascript
{
  title: String,           // Required
  slug: String,           // Required, unique
  content: String,        // Required, HTML
  excerpt: String,        // Optional
  author: String,         // Optional
  image: String,          // Optional, URL
  tags: [String],         // Array of tags
  category: String,       // Optional
  metaTitle: String,      // Optional
  metaDescription: String, // Optional
  published: Boolean,     // Default: true
  createdAt: Date,        // Auto-generated
  updatedAt: Date         // Auto-generated
}
```

## Components

### TiptapEditor
A rich text editor component with:
- Text formatting (bold, italic, strike)
- Headings (H1, H2, H3)
- Lists (bullet, ordered)
- Links
- Images
- Blockquotes
- Horizontal rules

### BlogEditor
The main admin interface for creating/editing blogs with:
- Form validation
- Image upload
- Plain text preview
- SEO settings
- Publish controls

## File Structure

```
├── app/
│   ├── api/blogs/
│   │   ├── route.js              # GET, POST /api/blogs
│   │   └── [id]/route.js         # GET, PUT, DELETE /api/blogs/[id]
│   └── admin/blogs/
│       ├── page.js               # Blog list
│       └── [id]/page.js          # Blog editor
├── components/
│   └── TiptapEditor.js           # Rich text editor
├── lib/
│   └── mongodb.js                # MongoDB connection
├── models/
│   └── Blog.js                   # Mongoose model
└── scripts/
    └── migrate-blogs.js          # Migration script
```

## Styling

The system uses Tailwind CSS for styling. All components are responsive and follow a clean, modern design.

## Error Handling

- Comprehensive error handling in API routes
- User-friendly error messages
- Validation for required fields
- Duplicate slug prevention
- Graceful handling of missing images

## Performance

- MongoDB indexing on frequently queried fields
- Pagination to handle large datasets
- Efficient queries with field selection
- Cached MongoDB connections

## Security

- Input validation and sanitization
- MongoDB injection protection
- Secure file upload handling
- Environment variable protection

## Troubleshooting

### Migration Issues
- Ensure MongoDB connection string is correct
- Check that `blogs_data.jsonl` exists in `public/` directory
- Verify JSONL format (one JSON object per line)

### Editor Issues
- Ensure all Tiptap dependencies are installed
- Check browser console for JavaScript errors
- Verify Tailwind CSS is properly configured

### Image Upload Issues
- Verify Vercel Blob token is set correctly
- Check network connectivity
- Ensure file size is within limits

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

