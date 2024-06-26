"use client";
import Sidebar from "@/app/(private)/_components/sidebar";
import CookieBanner from "@/components/cookies";
import CookieMenuContextProvider from "@/context/cookie/menu";
import { useDashboardContext } from "@/context/dashboard";
import { cn } from "@/lib/utils";
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const dashboardCtx = useDashboardContext();
  return (
    <>
      <CookieMenuContextProvider>
        <Sidebar />
        <main
          id="content"
          className={cn(
            "min-h-[100svh] w-full bg-background p-12 pt-[10rem] transition-all md:pt-12",
            dashboardCtx.isExpanded ? "md:pl-[16.75rem]" : "md:pl-28"
          )}
        >
          {children}
        </main>
        <CookieBanner />
      </CookieMenuContextProvider>
    </>
  );
}
