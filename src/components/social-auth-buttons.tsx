"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export function SocialAuthButtons({
  callbackURL = "/dashboard",
  googleAuthConfigured,
  githubAuthConfigured,
}: {
  callbackURL?: string;
  googleAuthConfigured: boolean;
  githubAuthConfigured: boolean;
}) {
  const [provider, setProvider] = useState<"google" | "github" | null>(null);

  async function signInWithSocial(selectedProvider: "google" | "github") {
    setProvider(selectedProvider);
    try {
      const result = await authClient.signIn.social({
        provider: selectedProvider,
        callbackURL,
      });
      if (result.error) {
        toast.error(
          result.error.message ||
            `${selectedProvider === "google" ? "Google" : "GitHub"} সাইন ইন চালু নেই।`,
        );
      }
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "সামাজিক মাধ্যমে সাইন ইন করা যায়নি।",
      );
    } finally {
      setProvider(null);
    }
  }

  return (
    <div className="social-auth">
      <button
        className="social-button"
        disabled={provider !== null || !googleAuthConfigured}
        onClick={() => signInWithSocial("google")}
        type="button"
      >
        <Image
          alt=""
          aria-hidden="true"
          className="social-provider-logo"
          height={18}
          src="/Google-Symbol.png"
          width={18}
        />
        {provider === "google"
          ? "সংযোগ হচ্ছে..."
          : googleAuthConfigured
            ? "Google দিয়ে চালিয়ে যান"
            : "Google login সেটআপ করা হয়নি"}
      </button>
      <button
        className="social-button"
        disabled={provider !== null || !githubAuthConfigured}
        onClick={() => signInWithSocial("github")}
        type="button"
      >
        <Image
          alt=""
          aria-hidden="true"
          className="social-provider-logo"
          height={18}
          src="/GitHub-Mark-ea2971cee799.png"
          width={18}
        />
        {provider === "github"
          ? "সংযোগ হচ্ছে..."
          : githubAuthConfigured
            ? "GitHub দিয়ে চালিয়ে যান"
            : "GitHub login সেটআপ করা হয়নি"}
      </button>
    </div>
  );
}
