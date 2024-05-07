"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useHeaderAPIContext } from "@/context/sidebar";
import { cn } from "@/lib/utils";

export default function HeaderWrapper({ children }: { children: React.ReactNode }) {
  const { setIsAtTop } = useHeaderAPIContext();
  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: true,
    fallbackInView: false,
  });

  useEffect(() => {
    setIsAtTop(inView);
  }, [inView, setIsAtTop]);
  return (
    <>
      <div ref={ref} className="absolute left-0 right-0 top-0 h-[1px] w-full"></div>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-10", //position
          "flex items-center justify-center", //display
          "h-[8rem] w-[100svw]", //size
          "border-b-[1px] border-[transparent] bg-[initial]", //color
          "transition-[height,border,background-color] duration-300", //transition
          inView === true || undefined || null ? "" : "scrolled"
        )}
      >
        {children}
      </header>
    </>
  );
}
