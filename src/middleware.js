import { NextResponse } from "next/server"
 
export function middleware(request) {
  // Getting cookies from the request using the `RequestCookies` API
  let cookie = request.cookies.get('token')
  console.log(cookie) 
  if(!cookie && request.nextUrl.pathname === '/admin'){
    return NextResponse.rewrite(new URL('/login', request.url))
  }
  if(cookie && request.nextUrl.pathname === '/login'){
    return NextResponse.rewrite(new URL('/admin', request.url))
  }
}

export const config = {
    matcher: ['/login/:path*', '/admin/:path*'],
  }