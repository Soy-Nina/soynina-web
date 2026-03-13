import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match root
    "/",
    // Match all locale paths
    "/(es|en)/:path*",
    // Match all pathnames except API routes, static files, and Next.js internals
    "/((?!api|_next|_vercel|admin|.*\\..*).*)",
  ],
};
