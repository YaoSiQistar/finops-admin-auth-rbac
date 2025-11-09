// lib/auth.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/db";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],

  // ✅ 用 JWT，让 middleware 能识别登录态
  session: { strategy: "jwt" },

  callbacks: {
    // 首次登录赋予角色
    async signIn({ user }) {
      const count = await prisma.user.count();
      // 只有首次创建用户没有 role 时才写入
      try {
        if (!(user as any).role) {
          await prisma.user.update({
            where: { id: user.id },
            data: { role: count === 1 ? "ADMIN" : "VIEWER" },
          });
        }
      } catch {}
      return true;
    },

    // 把数据库里的角色塞进 JWT
    async jwt({ token, user }) {
      // user 只在首次登录时存在；其后从 DB 读
      if (user) {
        token.role = (user as any).role ?? "VIEWER";
      } else if (!token.role && token.sub) {
        const dbUser = await prisma.user.findUnique({ where: { id: token.sub } });
        token.role = dbUser?.role ?? "VIEWER";
      }
      return token;
    },

    // 再把 JWT 里的角色同步到 session
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.sub;
        (session.user as any).role = (token as any).role ?? "VIEWER";
      }
      return session;
    },
  },

  pages: { signIn: "/signin" },
};
