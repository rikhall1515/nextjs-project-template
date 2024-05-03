import type { Metadata } from "next";
//import { headers } from "next/headers";
import Link from "next/link";
//import { redirect } from "next/navigation";

import EmailInput from "@/components/forms/email";
import PasswordInput from "@/components/forms/password";
import RePasswordInput from "@/components/forms/rePassword";
import { Button } from "@/components/ui/button";
//import { createClient } from "@/db/server";
import { env } from "@/env/client";

import Wrapper from "./wrapper";

export const metadata: Metadata = {
  title: "Sign Up",
  alternates: {
    canonical: "/sign-in",
  },
  icons: {
    apple: "/static/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "alternate icon",
        sizes: "48x48",
        url: "/static/favicon/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        sizes: "any",
        url: "/static/favicon/favicon.svg",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/static/favicon/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/static/favicon/favicon-16x16.png",
      },
      {
        rel: "mask-icon",
        color: "#0e0813",
        url: "/public/static/favicon/safari-pinned-tab.svg",
      },
    ],
  },
  openGraph: {
    title: "Sign Up - rikhall.proj",
    description: "Register an account with the NextJS template.",
    url: env.NEXT_PUBLIC_BASE_URL,
    images: "/next-data/og?title=Sign%20Up",
    siteName: "RikardTemplate",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Sign Up - rikhall.proj",
    description: "Register an account with the NextJS template.",
    images: "/next-data/og?title=Sign%20Up",
    card: "summary_large_image",
    creator: "@rikhall_",
  },
};

export default function Component() {
  // const signUp = async (formData: FormData) => {
  //   "use server";

  //   const origin = headers().get("origin");
  //   const email = formData.get("email") as string;
  //   const password = formData.get("password") as string;
  //   const supabase = createClient();

  //   const { error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //     options: {
  //       emailRedirectTo: `${origin}/auth/callback`,
  //     },
  //   });

  //   if (error) {
  //     return redirect("/sign-up?message=Could not authenticate user");
  //   }

  //   return redirect("/sign-in?message=Check email to continue sign in process");
  // };
  return (
    <Wrapper>
      <h1 className="w-full text-center text-3xl font-bold">Sign up</h1>
      <p className="w-full text-balance text-center text-muted-foreground">
        Enter your email below to create an account
      </p>
      <form className="grid w-full gap-4">
        <EmailInput />
        <PasswordInput />
        <RePasswordInput />

        <Button
          className="mt-4 h-12 w-full text-xl font-bold text-primary-foreground"
          type="submit"
        >
          Sign up
        </Button>
        <Button className="h-12 w-full text-xl font-bold text-foreground" variant="outline">
          Sign up with Google
        </Button>
      </form>
      <p className="mt-4 w-full text-center text-base">
        Already have an account?{" "}
        <Link className="underline" href="#">
          Login
        </Link>
      </p>
    </Wrapper>
  );
}
