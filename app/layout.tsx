import "./globals.css";
import Providers from "./providers";
import type { Metadata } from "next";
import { AppProvider } from "@/lib/store";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BarChart3, Import, Wallet } from "lucide-react";

export const metadata: Metadata = {
  title: "FinOps Admin",
  description: "Cloud cost & budget control admin"
};


import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { SignOutButton } from "@/components/auth/SignOutButton";
import { SignInButton } from "@/components/auth/SignInButton";

async function AuthUserBox() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <div className="text-sm"><SignInButton /></div>;
  }
  const role = (session.user as any)?.role || "VIEWER";
  return (
    <div className="text-sm">
      <div className="font-medium">{session.user?.name || session.user?.email}</div>
      <div className="text-xs text-muted-foreground mb-2">角色：{role}</div>
      <SignOutButton />
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const nav = [
    { href: "/", label: "总览看板", icon: BarChart3 },
    { href: "/imports", label: "导入账单", icon: Import },
    { href: "/budgets", label: "预算", icon: Wallet },
    { href: "/cost-explorer", label: "成本探索", icon: BarChart3 }
  ] as const;

  return (
    <html lang="zh-CN">
      <body>
        <Providers>
        <AppProvider>
          <div className="min-h-screen grid grid-cols-1 md:grid-cols-[260px_1fr]">
            <aside className="border-r p-4">
              <div className="mb-4">
                <h1 className="text-xl font-bold">FinOps Admin</h1>
                <p className="text-sm text-muted-foreground">云成本与预算管控</p>
              </div>
              <nav className="space-y-1">
                {nav.map(({ href, label, icon: Icon }) => (
                  <Link key={href} className="sidebar-link" href={href}>
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                  </Link>
                ))}
              </nav>
              <div className="mt-6">
                <AuthUserBox />
              </div>
              <div className="mt-6 text-xs text-muted-foreground">
                <p>示例数据见首页“加载示例”。</p>
              </div>
            </aside>
            <main className="p-4">
              <div className="container">{children}</div>
            </main>
          </div>
        </AppProvider>
        </Providers>
      </body>
    </html>
  );
}
