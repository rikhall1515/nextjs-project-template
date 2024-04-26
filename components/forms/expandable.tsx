"use client";
import React, { useRef } from "react";

import { cn } from "@/lib/utils";

export default function Expandable({
  id,
  expanded,
  className,
  children,
}: {
  id?: string;
  className?: string;
  expanded: boolean;
  children: React.ReactNode;
}) {
  const element = useRef<HTMLDivElement>(null);
  return (
    <>
      <div
        className={cn(
          "!m-0 w-full origin-top duration-200",
          !expanded && "invisible h-0 -translate-y-2 scale-y-75 opacity-0",
          className
        )}
        id={id}
        ref={element}
        aria-hidden={!expanded}
      >
        {children}
      </div>
    </>
  );
}
