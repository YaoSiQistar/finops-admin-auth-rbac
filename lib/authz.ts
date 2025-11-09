// lib/authz.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

export type Role = "ADMIN" | "VIEWER";

export type SessionUser = {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: Role; // 没有时默认按 VIEWER 处理
};

/** 取当前登录用户（服务端） */
export async function getSessionUser(): Promise<SessionUser | null> {
  const session = await getServerSession(authOptions);
  // 允许 session.user 被你在 NextAuth callbacks 里扩展的字段（如 role）
  return (session?.user as SessionUser) ?? null;
}

/** 未登录直接 401 */
export async function requireLogin(): Promise<SessionUser> {
  const user = await getSessionUser();
  if (!user) {
    // 抛出一个可被 route 捕获的 Response（App Router 会正确返回）
    throw NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  }
  return user;
}

/** 角色校验，不通过直接 403；返回用户对象便于继续使用 */
export async function requireRole(roles: Role[] = ["ADMIN"]): Promise<SessionUser> {
  const user = await requireLogin();
  const role: Role = (user.role ?? "VIEWER");
  if (!roles.includes(role)) {
    throw NextResponse.json({ error: "FORBIDDEN", need: roles, got: role }, { status: 403 });
  }
  return user;
}

/** 仅做布尔判断，不抛错，适合页面级条件渲染 */
export async function hasRole(roles: Role[] = ["ADMIN"]): Promise<boolean> {
  const user = await getSessionUser();
  if (!user) return false;
  const role: Role = (user.role ?? "VIEWER");
  return roles.includes(role);
}
