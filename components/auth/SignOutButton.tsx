"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

type Props = {
  callbackUrl?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: React.ComponentProps<typeof Button>["variant"];
  size?: React.ComponentProps<typeof Button>["size"];
};

export function SignOutButton({
  callbackUrl = "/signin",
  children = "退出登录",
  className,
  variant = "outline",
  size,
}: Props) {
  return (
    <Button
      className={className}
      variant={variant}
      size={size}
      onClick={() => signOut({ callbackUrl })}
    >
      {children}
    </Button>
  );
}
