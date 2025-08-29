// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;

  // --- 1) Redirect special-character paths ($ or &) to home ---
  // Normalize and decode path (so /%24 -> /$), also trim trailing slashes.
  const decodedPath = decodeURIComponent(url.pathname).replace(/\/+$/, '') || '/';

  const isRootBad = decodedPath === '/$' || decodedPath === '/&';
  const hasBadSegment = decodedPath.split('/').some((seg) => seg === '$' || seg === '&');

  if (isRootBad || hasBadSegment) {
    const dest = url.clone();
    dest.pathname = '/';
    dest.search = ''; // optional: drop all query params
    return NextResponse.redirect(dest, 308); // permanent
  }

  // --- 2) Canonicalize blog URLs: remove just ?id=..., keep the rest ---
  if (decodedPath.startsWith('/blog-details/')) {
    if (url.searchParams.has('id')) {
      const clean = url.clone();
      clean.searchParams.delete('id'); // keep other params (e.g., utm_*)
      return NextResponse.redirect(clean, 308);
    }
  }

  return NextResponse.next();
}

// Run for everything except static assets for perf
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
};
