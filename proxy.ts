import type { NextRequest } from "next/server";
import { updateSession } from "./lib/supabase/middleware";

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  return await updateSession(request);
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
