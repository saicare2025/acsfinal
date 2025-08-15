#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Blog System Setup');
console.log('===================\n');

// Check if .env.local exists
const envPath = path.join(__dirname, '..', '.env.local');
const envExists = fs.existsSync(envPath);

if (!envExists) {
  console.log('📝 Creating .env.local file...');
  
  const envContent = `# MongoDB Connection
MONGO_DB_URL=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority

# Vercel Blob Storage (for image uploads)
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Optional: Add your existing environment variables below
# SUPABASE_URL=your_supabase_url
# SUPABASE_ANON_KEY=your_supabase_anon_key
# TWILIO_ACCOUNT_SID=your_twilio_account_sid
# TWILIO_AUTH_TOKEN=your_twilio_auth_token
`;

  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env.local file created');
  console.log('⚠️  Please update the environment variables with your actual values\n');
} else {
  console.log('✅ .env.local file already exists\n');
}

// Check if blogs_data.jsonl exists
const jsonlPath = path.join(__dirname, '..', 'public', 'blogs_data.jsonl');
const jsonlExists = fs.existsSync(jsonlPath);

if (jsonlExists) {
  console.log('📊 Found blogs_data.jsonl file');
  console.log('💡 You can run "npm run migrate-blogs" to import your existing blogs\n');
} else {
  console.log('⚠️  No blogs_data.jsonl file found in public/ directory');
  console.log('💡 You can create blogs manually through the admin panel\n');
}

console.log('📋 Next Steps:');
console.log('1. Update .env.local with your MongoDB connection string');
console.log('2. Set up Vercel Blob storage and add the token to .env.local');
console.log('3. Run "npm run dev" to start the development server');
console.log('4. Navigate to /admin/blogs to access the admin panel');
console.log('5. If you have existing blog data, run "npm run migrate-blogs"\n');

console.log('🎉 Setup complete! Happy blogging!');
