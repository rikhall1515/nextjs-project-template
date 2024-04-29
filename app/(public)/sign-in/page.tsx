import type { Metadata } from "next";
import Link from "next/link";
//import { redirect } from "next/navigation";

import EmailInput from "@/components/forms/email";
import RePasswordInput from "@/components/forms/rePassword";
import { Button } from "@/components/ui/button";
//import { createClient } from "@/db/server";
import { env } from "@/env/client";

import Wrapper from "./wrapper";

export const metadata: Metadata = {
  title: "Sign In",
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
    title: "Sign In - rikhall.proj",
    description: "The sign in page for the NextJS template.",
    url: env.NEXT_PUBLIC_BASE_URL,
    images: "/next-data/og?title=Sign%20In",
    siteName: "RikardTemplate",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Sign In - rikhall.proj",
    description: "The sign in page for the NextJS template.",
    images: "/next-data/og?title=Sign%20In",
    card: "summary_large_image",
    creator: "@rikhall_",
  },
};
export default function SignIn() {
  // const signIn = async (formData: FormData) => {
  //   "use server";

  //   const email = formData.get("email") as string;
  //   const password = formData.get("password") as string;
  //   const supabase = createClient();

  //   const { error } = await supabase.auth.signInWithPassword({
  //     email,
  //     password,
  //   });

  //   if (error) {
  //     return redirect("/sign-in?message=Could not authenticate user");
  //   }

  //   return redirect("/dashboard");
  // };

  return (
    <Wrapper>
      <h1 className="text-center text-3xl font-bold">Login</h1>
      <p className="text-balance text-center text-muted-foreground">
        Enter your email below to login to your account
      </p>
      <form className="grid gap-4">
        <EmailInput />
        <RePasswordInput />
        <Button
          type="submit"
          className="mt-4 h-12 w-full text-xl font-bold text-primary-foreground"
        >
          Login
        </Button>
        <Button variant="outline" className="h-12 w-full text-xl font-bold">
          Login with Google
        </Button>
      </form>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="#" className="underline">
          Sign up
        </Link>
      </div>
    </Wrapper>
  );
}
