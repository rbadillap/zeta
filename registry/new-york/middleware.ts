import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyToken } from "@/lib/shadcn/registry/utils"

export async function middleware(request: NextRequest) {
  // First, check if the path actually starts with /registry/
  // This is a safety check in addition to the matcher
  if (!request.nextUrl.pathname.startsWith("/registry/")) {
    return NextResponse.next()
  }
  
  // Allow access to the license validation page without token
  if (request.nextUrl.pathname === '/registry/access/validate-license') {
    return NextResponse.next()
  }

  // Allow access to the license validation api without token but ensure is a POST request
  if (request.nextUrl.pathname === '/registry/api/validate-license' && request.method === 'POST') {
    return NextResponse.next()
  }

  // Get the authorization token from ?token=
  const token = request.nextUrl.searchParams.get('token')

  if (!token) {
    return NextResponse.redirect(new URL('/registry/access/validate-license?return=' + request.nextUrl.pathname, request.url))
  }

  const isValidToken = await verifyToken(token)

  if (!isValidToken) {
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 401 }
    )
  }

  return NextResponse.next()
}

// Configure the paths that should be matched by this middleware
export const config = {
  matcher: [
    '/registry/:path*',
  ]
} 