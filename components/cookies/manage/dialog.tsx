import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import { CloseModal } from "./buttons";

type Props = {
  children: React.ReactNode;
};

const Dialog = forwardRef<HTMLDialogElement, Props>(function Dialog({ children }, ref) {
  return (
    <dialog
      ref={ref}
      className={cn(
        "hidden open:flex",
        "flex-col items-center rounded-2xl text-foreground",
        "fixed left-0 top-0 z-[99] box-border overflow-hidden md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2",
        "h-auto max-h-[calc(100%-16px)] w-[calc(100%-16px)] max-w-[80rem] rounded-2xl bg-background pt-6 shadow transition-all md:min-h-[30rem]",
        "backdrop:fixed backdrop:bottom-[-100%] backdrop:left-[-100%] backdrop:right-[-100%] backdrop:top-[-100%] backdrop:z-40 backdrop:m-auto backdrop:h-[100vh] backdrop:w-full backdrop:overflow-hidden backdrop:bg-black backdrop:bg-opacity-50",
        "backdrop:!bg-no-repeat backdrop:object-cover backdrop:backdrop-blur backdrop:backdrop-brightness-50"
      )}
      id="manageConsentMenuDialog"
    >
      {children}
      <CloseModal />
    </dialog>
  );
});
export default Dialog;
