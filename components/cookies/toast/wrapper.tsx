"use client";
import { useEffect, useState } from "react";

import { useCookieContext } from "@/context/cookie";
import { cn } from "@/lib/utils";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const { consent } = useCookieContext();
  const [initialVisible, setInitialVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setInitialVisible(true);
    }, 500);
  });
  return (
    <>
      <div
        className={cn(
          "fixed bottom-0 right-0 z-[5] mb-6 flex w-full flex-col gap-3 rounded-l-lg rounded-r-none border-2 border-border bg-background px-6 py-3 shadow transition-all md:w-fit",
          !consent && initialVisible
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        aria-hidden={consent}
        role="region"
        aria-label="Cookie Banner"
      >
        {children}
      </div>
    </>
  );
}
