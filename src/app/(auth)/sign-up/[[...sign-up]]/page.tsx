import { SignUp } from "@clerk/nextjs";
import React from "react";

export default function SignUpPage() {
  return (
    <SignUp
      appearance={{
        elements: {
          formButtonPrimary: "bg-[#624cf5] hover:bg-[#624cf5] text-sm",
        },
      }}
    />
  );
}
