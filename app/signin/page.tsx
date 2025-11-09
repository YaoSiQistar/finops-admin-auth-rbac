"use client";
import { signIn } from "next-auth/react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <Card className="w-full max-w-md">
        <CardHeader><CardTitle>登录 FinOps Admin</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <Button onClick={() => signIn("github", { callbackUrl: "/" })}>使用 GitHub 登录</Button>
          <p className="text-sm text-muted-foreground">首次登录的第一个用户会自动成为 <b>ADMIN</b>，其余为 <b>VIEWER</b>。</p>
        </CardContent>
      </Card>
    </div>
  );
}
