// middleware.js
import { NextResponse } from 'next/server';

const BLOG_LISTING_PATH = '/blogs'; // change if your listing route differs

export function middleware(request) {
  const url = request.nextUrl;

  // Safely decode and normalize path, trim trailing slashes.
  const rawPath = url.pathname;
  let decodedPath = rawPath;
  try {
    decodedPath = decodeURIComponent(rawPath);
  } catch {
    // keep rawPath if decode fails
  }
  decodedPath = decodedPath.replace(/\/+$/, '') || '/';

  // 1) Redirect special-character path segments ($ or &) to home
  const hasBadSegment = decodedPath.split('/').some(seg => seg === '$' || seg === '&');
  if (hasBadSegment) {
    const dest = url.clone();
    dest.pathname = '/';
    dest.search = '';
    return NextResponse.redirect(dest, 308);
  }

  // 2) /get-car-loan -> home
  if (decodedPath === '/get-car-loan') {
    const dest = url.clone();
    dest.pathname = '/';
    dest.search = '';
    return NextResponse.redirect(dest, 308);
  }

  // 3) /blog-details?id=... (no slug) -> blog listing  ✅ explicit rule
  if (decodedPath === '/blog-details' && url.searchParams.has('id')) {
    const dest = url.clone();
    dest.pathname = BLOG_LISTING_PATH;
    dest.search = '';
    return NextResponse.redirect(dest, 308);
  }

  // 4) /blog-details (no slug, any query or none) -> blog listing
  if (decodedPath === '/blog-details') {
    const dest = url.clone();
    dest.pathname = BLOG_LISTING_PATH;
    dest.search = '';
    return NextResponse.redirect(dest, 308);
  }

  // 5) /blog-details/:slug?id=... -> same slug without id (keep other params)
  if (decodedPath.startsWith('/blog-details/')) {
    if (url.searchParams.has('id')) {
      const clean = url.clone();
      clean.searchParams.delete('id'); // keep the rest (e.g., utm_*)
      return NextResponse.redirect(clean, 308);
    }
  }
   if (decodedPath === '/get-car-loan') {
    const dest = url.clone();
    dest.pathname = '/';
    dest.search = '';
    return NextResponse.redirect(dest, 308);
  }

  return NextResponse.next();
}

// Run on everything except common static assets for perf
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
};
