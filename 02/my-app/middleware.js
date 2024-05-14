import { NextResponse } from 'next/server'

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/random-1')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
  if (request.nextUrl.pathname.startsWith('/random-2')) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

// There is more to middleware, Refer Next.js Docs...