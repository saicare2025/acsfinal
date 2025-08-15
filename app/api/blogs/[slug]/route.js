// /app/api/blogs/[slug]/route.js
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";

export const dynamic = "force-dynamic"; // Ensures latest data (disables static cache)

export async function GET(request, { params }) {
  try {
    await connectDB();

    const slug = params?.slug?.toString().trim();
    if (!slug) {
      return NextResponse.json(
        { success: false, error: "Slug parameter is missing" },
        { status: 400 }
      );
    }

    console.log("🔎 Fetching blog with slug:", slug);

    const blog = await Blog.findOne({ slug }).lean();

    if (!blog) {
      console.warn(`❌ Blog not found for slug: ${slug}`);
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: blog });
  } catch (err) {
    console.error("💥 Error fetching blog by slug:", err);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}
