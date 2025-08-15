// testMongoConnection.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_DB_URL = process.env.MONGO_DB_URL;

if (!MONGO_DB_URL) {
  console.error("❌ MONGO_DB_URL not found in .env file");
  process.exit(1);
}

async function testConnection() {
  try {
    console.log("🔌 Attempting to connect to MongoDB...");

    await mongoose.connect(MONGO_DB_URL);
    
    console.log("✅ MongoDB connected successfully");

    // Optional: print connection info
    console.log("📡 Database:", mongoose.connection.name);
    console.log("📦 Host:", mongoose.connection.host);

  } catch (err) {
    console.error("❌ Connection failed:", err.message);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 MongoDB connection closed");
  }
}

testConnection();
