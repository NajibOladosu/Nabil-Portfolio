import { NextResponse, type NextRequest } from "next/server";
import { DEV_URL } from "@/lib/dev-data";

// Requests to the dev host (or any dev.* host, e.g. dev.localhost:3000) are served from app/dev.
export function proxy(req: NextRequest) {
  const host = req.headers.get("host") ?? "";
  const { pathname } = req.nextUrl;
  if (host === new URL(DEV_URL).host || host.startsWith("dev.")) {
    return NextResponse.rewrite(new URL(`/dev${pathname === "/" ? "" : pathname}`, req.url));
  }
  if (pathname === "/dev" || pathname.startsWith("/dev/")) {
    const devOrigin = host.startsWith("localhost") ? `http://dev.${host}` : DEV_URL;
    return NextResponse.redirect(new URL(pathname.slice(4) || "/", devOrigin));
  }
}

export const config = {
  matcher: ["/((?!_next/|favicon.ico).*)"],
};
