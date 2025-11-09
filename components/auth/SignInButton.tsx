"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

type Props = {
  provider?: "github";        // 可按需扩展其他 provider
  callbackUrl?: string;
  children?: React.ReactNode; // 自定义文案
  className?: string;
  variant?: React.ComponentProps<typeof Button>["variant"];
  size?: React.ComponentProps<typeof Button>["size"];
};

export function SignInButton({
  provider = "github",
  callbackUrl = "/",
  children = "使用 GitHub 登录",
  className,
  variant,
  size,
}: Props) {
  return (
    <Button
      className={className}
      variant={variant}
      size={size}
      onClick={() => signIn(provider, { callbackUrl })}
    >
      {children}
    </Button>
  );
}
