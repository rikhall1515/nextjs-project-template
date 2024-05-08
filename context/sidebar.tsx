"use client";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import type { RefObject } from "react";
import { createContext, useCallback, useContext, useMemo, useRef } from "react";

type SidebarRefStore = {
  sidebarRef: RefObject<HTMLDialogElement>;
};

type SidebarExpanded = {
  isExpanded: boolean;
};

type HeaderAPIStore = {
  toggleSidebarDialog: () => void;
};

export const SidebarExpandedContext = createContext<SidebarExpanded | undefined>(undefined);
export const SidebarRefContext = createContext<SidebarRefStore | undefined>(undefined);
export const HeaderAPIContext = createContext<HeaderAPIStore | undefined>(undefined);

export function useHeaderAPIContext() {
  const headerAPIStore = useContext(HeaderAPIContext);

  if (headerAPIStore === undefined) {
    throw new Error("useHeaderAPIContext must be used with a HeaderAPIContext provider");
  }

  return headerAPIStore;
}

export function useSidebarRefContext() {
  const sidebarRefStore = useContext(SidebarRefContext);

  if (sidebarRefStore === undefined) {
    throw new Error("useSidebarRefContext must be used with a SidebarRefContext provider");
  }

  return sidebarRefStore;
}

export default function SidebarContextProvider({ children }: { children: React.ReactNode }) {
  const sidebarRef = useRef<HTMLDialogElement>(null);

  const toggleSidebarDialog = useCallback(() => {
    if (!sidebarRef.current) {
      return;
    }
    if (sidebarRef.current.hasAttribute("open")) {
      sidebarRef.current.close();
      enableBodyScroll(sidebarRef.current);
      return;
    }
    disableBodyScroll(sidebarRef.current);
    sidebarRef.current.showModal();
  }, []);

  const api = useMemo(
    () => ({
      toggleSidebarDialog,
    }),
    [toggleSidebarDialog]
  );
  const refs = useMemo(
    () => ({
      sidebarRef,
    }),
    []
  );
  return (
    <>
      <SidebarRefContext.Provider value={refs}>
        <HeaderAPIContext.Provider value={api}>{children}</HeaderAPIContext.Provider>
      </SidebarRefContext.Provider>
    </>
  );
}
