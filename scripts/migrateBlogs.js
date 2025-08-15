// scripts/migrateBlogs.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// === Flexible BlogData schema: accept all fields, no type checking
const flexibleSchema = new mongoose.Schema({}, { strict: false, collection: 'blogs' });

const BlogData = mongoose.models.BlogData || mongoose.model('BlogData', flexibleSchema);

async function migrateBlogs() {
  const MONGO_DB_URL = process.env.MONGO_DB_URL;

  if (!MONGO_DB_URL) {
    console.error('❌ MONGO_DB_URL is not defined in .env');
    process.exit(1);
  }

  const blogFilePath = path.join(__dirname, '..', 'public', 'blogs.json');

  if (!fs.existsSync(blogFilePath)) {
    console.error(`❌ File not found: ${blogFilePath}`);
    process.exit(1);
  }

  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(MONGO_DB_URL);
    console.log('✅ Connected to MongoDB');

    const raw = fs.readFileSync(blogFilePath, 'utf-8');
    const blogs = JSON.parse(raw);

    if (!Array.isArray(blogs) || blogs.length === 0) {
      console.log('❌ No blog records found.');
      return;
    }

    console.log(`📊 Loaded ${blogs.length} blog entries from blogs.json`);

    // Optional: clear old data
    const deleted = await BlogData.deleteMany({});
    console.log(`🧹 Cleared ${deleted.deletedCount} old documents`);

    // Insert as-is, no validation
    const result = await BlogData.insertMany(blogs, { ordered: false });
    console.log(`✅ Inserted ${result.length} blogs into blogdata collection`);
  } catch (err) {
    console.error('❌ Migration failed:', err.message);
    if (err.writeErrors) {
      err.writeErrors.slice(0, 5).forEach((e, i) => {
        console.error(`  [${i + 1}] ${e.err?.op?.slug || 'Unknown'} - ${e.errmsg}`);
      });
    }
  } finally {
    await mongoose.disconnect();
    console.log('🔌 MongoDB connection closed');
  }
}

migrateBlogs().catch(console.error);
