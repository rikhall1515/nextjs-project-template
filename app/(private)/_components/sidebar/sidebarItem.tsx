import Link from "next/link";
import type { ReactNode } from "react";
import React from "react";

import { cn } from "@/lib/utils";

type SideBarItemProps = {
  icon: ReactNode;
  text: string;
  active: boolean;
  alert: boolean;
  href: string;
};

export default function SideBarItem({
  icon,
  text,
  active,
  alert,
  href,
}: SideBarItemProps) {
  return (
    <li className="w-full">
      <Link
        href={href}
        className={cn(
          "group/item",
          "relative flex h-[3.75rem] w-full items-center justify-between pl-10 pr-4 transition-all",
          active
            ? "bg-primary text-primary-foreground"
            : "bg-card text-card-foreground hover:bg-primary hover:text-primary-foreground"
        )}
      >
        <div className="flex items-center gap-3">
          <div className="w-6">{icon}</div>
          <span>{text}</span>
        </div>
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-1 rounded-l-lg bg-primary transition-all",
            active ? "opacity-100" : "opacity-0 group-hover/item:opacity-100"
          )}
        ></div>
        <div
          className={cn(alert ? "bg-primary" : "", "h-2 w-2 rounded-full")}
          aria-hidden="true"
        ></div>
      </Link>
    </li>
  );
}
