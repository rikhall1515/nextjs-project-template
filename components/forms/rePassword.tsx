"use client";

import { useRef, useState } from "react";
import { FaEye } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function RePasswordInput() {
  const [submitActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [passwordStatus, setPasswordStatus] = useState<boolean>(false);
  const changeInputStatusAndFocus = () => {
    setPasswordStatus(!passwordStatus);
    inputRef.current!.focus();
  };
  return (
    <>
      <div className="relative mt-4 grid gap-2">
        <Label htmlFor="re-password">Re-type Password</Label>
        <Input
          type={!passwordStatus ? "password" : "text"}
          id="re-password"
          placeholder="******"
          className={cn(
            "transition-[border,background-color,box-shadow]",
            "text-base lg:text-xl",
            "h-[3.75rem] border-[1px] px-6 outline-none ring-0 ring-[transparent]",
            "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-[transparent] focus-visible:ring-offset-0"
          )}
          disabled={submitActive}
        />
        <Button
          className="absolute right-4 top-[2.25rem] h-7 w-7"
          size="icon"
          variant="ghost"
          type="button"
          onClick={changeInputStatusAndFocus}
        >
          <FaEye className="h-4 w-4" />
          <span className="sr-only">Toggle password visibility</span>
        </Button>
      </div>
    </>
  );
}
