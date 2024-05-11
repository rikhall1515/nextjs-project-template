"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useSidebarContext } from "@/context/sidebar";
import { useMenuBtnRefContext } from "@/context/sidebar/btnRef";
import { cn } from "@/lib/utils";

export default function Privacy({ children }: { children?: React.ReactNode }) {
  const pathname = usePathname();
  const { isExpanded, toggle } = useSidebarContext();
  const { trapFocus } = useMenuBtnRefContext();
  return (
    <>
      <Link
        href="/legal/privacy-policy"
        className={cn(
          "group/sidebarItem relative h-[3.75rem] w-full transition-all",
          "flex items-center gap-3",
          pathname === "/legal/privacy-policy" ? "bg-primary text-primary-foreground" : "",
          "hover:bg-primary"
        )}
        tabIndex={isExpanded ? 0 : -1}
        onKeyDown={trapFocus}
        onClick={toggle}
      >
        {children}
      </Link>
    </>
  );
}
