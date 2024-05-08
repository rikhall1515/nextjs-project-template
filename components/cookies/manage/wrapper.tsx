"use client";

import { useCookieFormContext } from "@/context/cookie/form";
import { useCookieMenuAPIContext } from "@/context/cookie/menu";

import Dialog from "./dialog";

export default function ManageWrapper({ children }: { children: React.ReactNode }) {
  const { dialogRef } = useCookieMenuAPIContext();
  const { handleSubmit, onSubmit } = useCookieFormContext();
  return (
    <>
      <Dialog ref={dialogRef}>
        <form
          className="flex h-full w-full flex-col items-center overflow-auto bg-[transparent] align-baseline"
          onSubmit={handleSubmit(onSubmit)}
          id="cookieForm"
        >
          {children}
        </form>
      </Dialog>
    </>
  );
}
