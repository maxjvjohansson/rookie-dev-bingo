import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value }) =>
            supabaseResponse.cookies.set(name, value)
          );
        },
      },
    }
  );

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getClaims(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  // IMPORTANT: Don't remove getClaims()
  const { data } = await supabase.auth.getClaims();

  const user = data?.claims ?? null;

  const pathname: string = request.nextUrl.pathname;

  // ----  DEFINE ROUTE RULES ----
  const PROTECTED_ROUTES: string[] = ["/board"];

  const isProtected: boolean = PROTECTED_ROUTES.some((route: string): boolean =>
    pathname.startsWith(route)
  );

  const isAuthPage: boolean =
    pathname.startsWith("/login") || pathname.startsWith("/signup");

  // If NOT logged in and trying to access PROTECTED route, redirect to /login
  if (!user && isProtected) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // If logged in and on login/signup, redirect to /board
  if (user && isAuthPage) {
    const url = request.nextUrl.clone();
    url.pathname = "/board";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
