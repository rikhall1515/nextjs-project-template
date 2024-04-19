import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/db/server";
import { env } from "@/env/client";

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
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/sign-in?message=Could not authenticate user");
    }

    return redirect("/dashboard");
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <form action={signIn} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
