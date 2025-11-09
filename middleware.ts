export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/((?!api/auth|signin|_next|public|sample-bill.csv|favicon.ico).*)"
  ]
};
