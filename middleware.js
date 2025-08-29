// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;

  // Only act on /blog-details/:slug (and nested if any)
  if (!url.pathname.startsWith('/blog-details/')) {
    return NextResponse.next();
  }

  // If there's an `id` query param, remove it and redirect permanently
  if (url.searchParams.has('id')) {
    const clean = url.clone();
    clean.searchParams.delete('id'); // remove JUST 'id', keep everything else
    return NextResponse.redirect(clean, 308); // 308 Permanent Redirect
  }

  return NextResponse.next();
}

// Limit middleware only to relevant paths for perf
export const config = {
  matcher: ['/blog-details/:slug*'],
};
