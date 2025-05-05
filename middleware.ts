import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyToken } from "@/lib/shadcn/registry/utils"

export async function middleware(request: NextRequest) {
  // Get the authorization token from ?token=
  const token = request.nextUrl.searchParams.get('token')

  if (!token) {
    return NextResponse.redirect(new URL('/example/access/validate-license?return=/registry/logo', request.url))
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
  matcher: ['/registry/:path*', '/logo']
} 