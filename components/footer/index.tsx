import ThemeToggle from "@/components/themeToggle";
import { env } from "@/env/client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="relative flex min-h-[15rem] w-full justify-center bg-popover py-6 text-foreground">
        <div className="pxPage mx-auto w-full max-w-[103rem]">
          <span className="mb-6 block text-2xl font-extrabold">
            {env.NEXT_PUBLIC_SITE_NAME}
          </span>
          <div className="mb-6 flex w-full flex-col items-start justify-between gap-6 m:flex-row">
            <div className="!w-[10rem] flex-shrink-0 text-sm">
              @ {year}{" "}
              <a href="/" className="ml-1 hover:underline">
                {env.NEXT_PUBLIC_SITE_NAME}
              </a>
            </div>
            <ul className="flex flex-wrap text-sm">
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
