import ThemeToggle from "@/components/themeToggle";
import { env } from "@/env/client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="relative flex min-h-[30rem] w-full justify-center border-t-2 bg-background py-12 text-foreground">
        <div className="pxPage mx-auto w-full max-w-[103rem]">
          <div className="mb-6 flex items-center gap-6 text-sm">
            <a href="/" className="mb-1 block text-2xl font-bold">
              {env.NEXT_PUBLIC_SITE_NAME}
            </a>
            <div>@ {year} </div>
          </div>
          <div className="mb-6 flex w-full flex-col items-start justify-between gap-6 m:flex-row">
            <ul className="flex flex-wrap text-sm font-medium">
              <li className="me-4 last:mr-0 md:mr-6">
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li className="me-4 last:mr-0 md:mr-6">
                <a href="#">Customer Support</a>
              </li>
              <li className="me-4 last:mr-0 md:mr-6">
                <a href="#">Privacy Settings</a>
              </li>
              <li className="me-4 last:mr-0 md:mr-6">
                <a href="#">Terms</a>
              </li>
            </ul>
          </div>
          <ThemeToggle />
        </div>
      </footer>
    </>
  );
}
