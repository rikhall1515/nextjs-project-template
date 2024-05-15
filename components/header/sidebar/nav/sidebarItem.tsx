"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

import { useSidebarContext } from "@/context/sidebar";
import { cn } from "@/lib/utils";

export const SidebarItem = memo(function SidebarItem({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) {
  const pathname = usePathname();
  const { isExpanded, toggle } = useSidebarContext();
  return (
    <>
      <Link
        href={href}
        className={cn(
          "group/sidebarItem relative h-[3.75rem] w-full transition-all",
          "flex items-center gap-3",
          pathname === href
            ? "bg-gradient-to-r from-primary to-background to-80% text-primary-foreground"
            : "",
          "hover:bg-gradient-to-r hover:from-primary hover:via-primary hover:via-40% hover:to-background hover:to-60% hover:text-primary-foreground"
        )}
        tabIndex={isExpanded ? 0 : -1}
        onClick={toggle}
      >
        {children}
      </Link>
    </>
  );
});
