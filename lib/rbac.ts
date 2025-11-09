import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function requireAuth() {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }
  return session;
}

export async function requireRole(role: "ADMIN" | "VIEWER" = "ADMIN") {
  const session = await requireAuth();
  const userRole = (session.user as any)?.role || "VIEWER";
  const roles = ["VIEWER", "ADMIN"];
  if (roles.indexOf(userRole) < roles.indexOf(role)) {
    throw new Response(JSON.stringify({ error: "Forbidden" }), { status: 403 });
  }
  return session;
}
