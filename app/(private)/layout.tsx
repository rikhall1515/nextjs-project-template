import CookieBanner from "@/components/cookies";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Dashboard } from "./_components/sidebar";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TooltipProvider>
        <Dashboard />
        <main
          id="content"
          className="min-h-[100svh] w-full bg-background p-12 pt-[10rem] transition-all md:pl-[16.75rem] md:pt-12"
        >
          {children}
        </main>
        <CookieBanner />
      </TooltipProvider>
    </>
  );
}
