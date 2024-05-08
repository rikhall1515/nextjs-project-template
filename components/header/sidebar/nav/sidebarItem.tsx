"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

import { cn } from "@/lib/utils";

export const SidebarItem = memo(function SidebarItem({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      <Link
        href={href}
        className={cn(
          "group/sidebarItem relative h-[3.75rem] w-full transition-all",
          "flex items-center gap-3",
          pathname === href ? "bg-primary text-primary-foreground" : "",
          "hover:bg-primary"
        )}
      >
        {children}
      </Link>
    </>
  );
});
