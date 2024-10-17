import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function SignInPage() {
  return (
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary: "bg-[#624cf5] hover:bg-[#624cf5] text-sm",
          footerActionLink: "text-[#624cf5]",
        },
      }}
    />
  );
}
