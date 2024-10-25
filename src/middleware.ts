import { clerkMiddleware } from "@clerk/nextjs/server";

export const middleware = clerkMiddleware({
  publicRoutes: ["/", "/galeri", "/program", "/kontak"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};