// middleware.js
import { NextResponse } from 'next/server';

const BLOG_LISTING_PATH = '/blogs'; // <-- change if your listing is different

export function middleware(request) {
  const url = request.nextUrl;

  // Normalize & decode the path (/%24 -> /$). Trim trailing slashes.
  const decodedPath = decodeURIComponent(url.pathname).replace(/\/+$/, '') || '/';

  // 1) Redirect special-character paths ($ or &) to home
  const isRootBad = decodedPath === '/$' || decodedPath === '/&';
  const hasBadSegment = decodedPath.split('/').some(seg => seg === '$' || seg === '&');

  if (isRootBad || hasBadSegment) {
    const dest = url.clone();
    dest.pathname = '/';
    dest.search = ''; // drop queries
    return NextResponse.redirect(dest, 308);
  }

  // 2) /blog-details?id=... (no slug) -> blog listing
  if (decodedPath === '/blog-details' && url.searchParams.has('id')) {
    const dest = url.clone();
    dest.pathname = BLOG_LISTING_PATH;
    dest.search = ''; // optional: drop queries
    return NextResponse.redirect(dest, 308);
  }

  // 3) /blog-details/:slug?id=... -> same slug without the id (keep other params)
  if (decodedPath.startsWith('/blog-details/')) {
    if (url.searchParams.has('id')) {
      const clean = url.clone();
      clean.searchParams.delete('id'); // keep other params (e.g., utm_*)
      return NextResponse.redirect(clean, 308);
    }
  }

  return NextResponse.next();
}

// Run on everything except common static assets for perf
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
};
