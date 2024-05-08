"use client";

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { createContext, useContext, useCallback, useMemo, useRef } from "react";

export type CookieMenuAPIStore = {
  toggleManageConsentMenu: () => void;
  dialogRef: React.RefObject<HTMLDialogElement>;
};

export const CookieMenuAPIContext = createContext<CookieMenuAPIStore | undefined>(undefined);

export function useCookieMenuAPIContext() {
  const cookieMenuAPIStore = useContext(CookieMenuAPIContext);

  if (cookieMenuAPIStore === undefined) {
    throw new Error("useCookieMenuAPIContext must be used with a CookieContext provider");
  }

  return cookieMenuAPIStore;
}

export default function CookieMenuContextProvider({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const toggleManageConsentMenu = useCallback(() => {
    if (!dialogRef.current) {
      return;
    }
    if (dialogRef.current.hasAttribute("open")) {
      dialogRef.current.close();
      enableBodyScroll(dialogRef.current);
      return;
    }
    disableBodyScroll(dialogRef.current);
    dialogRef.current.showModal();
  }, []);

  const api = useMemo(
    () => ({
      toggleManageConsentMenu,
      dialogRef,
    }),
    [toggleManageConsentMenu]
  );
  return (
    <>
      <CookieMenuAPIContext.Provider value={api}>{children}</CookieMenuAPIContext.Provider>
    </>
  );
}
