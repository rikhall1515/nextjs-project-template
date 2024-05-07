"use client";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import type { Dispatch, RefObject, SetStateAction } from "react";
import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";

type SidebarRefStore = {
  mainMenuBtnRef: RefObject<HTMLButtonElement>;
  sidebarRef: RefObject<HTMLElement>;
};

type HeaderTopStore = {
  isAtTop: boolean;
};

type SidebarExpanded = {
  isExpanded: boolean;
};

type HeaderAPIStore = {
  setIsAtTop: Dispatch<SetStateAction<boolean>>;
  toggle: () => void;
};

export const HeaderTopContext = createContext<HeaderTopStore | undefined>(undefined);
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

export function useSidebarExpandedContext() {
  const sidebarExpandedStore = useContext(SidebarExpandedContext);

  if (sidebarExpandedStore === undefined) {
    throw new Error(
      "useSidebarExpandedContext must be used with a SidebarExpandedContext provider"
    );
  }

  return sidebarExpandedStore;
}

export function useHeaderTopContext() {
  const headerTopStore = useContext(HeaderTopContext);

  if (headerTopStore === undefined) {
    throw new Error("useHeaderTopContext must be used with a HeaderTopContext provider");
  }

  return headerTopStore;
}

export default function SidebarContextProvider({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const mainMenuBtnRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const toggle = useCallback(() => {
    setIsExpanded(!isExpanded);
    if (sidebarRef.current) {
      if (!isExpanded) {
        disableBodyScroll(sidebarRef.current);
        return;
      }
      enableBodyScroll(sidebarRef.current);
    }
  }, [isExpanded]);

  const api = useMemo(
    () => ({
      setIsAtTop,
      toggle,
    }),
    [toggle]
  );
  const refs = useMemo(
    () => ({
      mainMenuBtnRef,
      sidebarRef,
    }),
    []
  );
  return (
    <>
      <HeaderTopContext.Provider value={{ isAtTop }}>
        <SidebarExpandedContext.Provider value={{ isExpanded }}>
          <SidebarRefContext.Provider value={refs}>
            <HeaderAPIContext.Provider value={api}>{children}</HeaderAPIContext.Provider>
          </SidebarRefContext.Provider>
        </SidebarExpandedContext.Provider>
      </HeaderTopContext.Provider>
    </>
  );
}
