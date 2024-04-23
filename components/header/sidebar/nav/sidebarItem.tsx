"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { KeyboardEventHandler } from "react";

import { useSidebarContext } from "@/context/sidebar";
import { cn } from "@/lib/utils";

export default function SidebarItem({
  href,
  classes = "",
  text,
  isLast = false,
  onKeyDown,
  children,
}: {
  href: string;
  classes?: string;
  text: string;
  isLast?: boolean;
  onKeyDown?: KeyboardEventHandler<HTMLAnchorElement> | undefined;
  children?: React.ReactNode;
}) {
  const sidebar = useSidebarContext();
  const pathname = usePathname();
  let attr = {};
  attr = {
    tabIndex: sidebar.isExpanded ? 0 : -1,
    onClick: () => sidebar.toggle(),
  };
  if (isLast) {
    attr = {
      ...attr,
      onKeyDown,
    };
  }
  return (
    <>
      <Link
        href={href}
        className={cn(
          "group/sidebarItem relative h-[3.75rem] w-full transition-all",
          "flex items-center gap-3",
          pathname === href ? "bg-primary" : "",
          "hover:bg-primary",
          classes
        )}
        {...attr}
      >
        <div
          className={cn("ml-[2.125rem] w-6 fill-[inherit] stroke-[inherit]")}
        >
          {children}
        </div>
        <span>{text}</span>
        <span
          aria-hidden="true"
          className={cn(
            "absolute left-0 h-full w-1 rounded-r-2xl bg-foreground transition-all",
            pathname === href ? "opacity-100" : "opacity-0",
            "group-hover/sidebarItem:opacity-100"
          )}
        ></span>
      </Link>
    </>
  );
}
