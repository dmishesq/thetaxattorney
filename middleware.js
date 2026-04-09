import { NextResponse } from 'next/server'
export function middleware(request) {
  var pathname = request.nextUrl.pathname; var searchParams = request.nextUrl.searchParams
  if (pathname === '/' && searchParams.has('p')) return NextResponse.redirect(new URL('/', request.url), 301)
  if (searchParams.has('s')) return NextResponse.redirect(new URL('/', request.url), 301)
  if (pathname.endsWith('.php') || pathname.startsWith('/wp')) return NextResponse.redirect(new URL('/', request.url), 301)
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) return NextResponse.next()
  var p = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  if (/^\/page\/\d+/.test(p)) return NextResponse.redirect(new URL('/', request.url), 301)
  if (p.startsWith('/author/')) return NextResponse.redirect(new URL('/about', request.url), 301)
  if (/^\/\d{4}\/\d{2}/.test(p)) return NextResponse.redirect(new URL('/', request.url), 301)
  if (p.startsWith('/category/') || p.startsWith('/tag/')) return NextResponse.redirect(new URL('/', request.url), 301)
  if (p.endsWith('/feed')) return NextResponse.redirect(new URL('/', request.url), 301)
  return NextResponse.next()
}
export var config = { matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'] }
