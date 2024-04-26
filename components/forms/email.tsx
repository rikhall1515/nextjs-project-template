"use client";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function EmailInput() {
  const [submitActive] = useState<boolean>(false);
  return (
    <>
      <Label className="grid gap-2" htmlFor="email">
        <span>Email</span>
        <Input
          type="email"
          id="email"
          placeholder="example@example.com"
          className={cn(
            "transition-[border,background-color,box-shadow]",
            "text-base lg:text-xl",
            "h-[3.75rem] border-[1px] px-6 outline-none ring-0 ring-[transparent]",
            "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-[transparent] focus-visible:ring-offset-0"
          )}
          disabled={submitActive}
        />
      </Label>
    </>
  );
}
