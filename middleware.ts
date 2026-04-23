import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host") || "";

  // Redirect www to non-www
  if (host.startsWith("www.")) {
    url.host = host.replace("www.", "");
    return NextResponse.redirect(url, 301);
  }

  // Ensure HTTPS
  if (
    request.headers.get("x-forwarded-proto") === "http" &&
    !url.hostname.includes("localhost")
  ) {
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    "/((?!_next/static|_next/image|favicon\\.ico|images/).*)",
  ],
};
