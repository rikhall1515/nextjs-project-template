"use client";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import {
  type Dispatch,
  type RefObject,
  type SetStateAction,
  createContext,
  useCallback,
  useContext,
  useRef,
} from "react";
import { useState } from "react";

type SidebarStore = {
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
  toggle: () => void;
  sidebarRef: RefObject<HTMLElement>;
};

export const SidebarContext = createContext<SidebarStore | undefined>(undefined);
export function useSidebarContext() {
  const sidebarStore = useContext(SidebarContext);

  if (sidebarStore === undefined) {
    throw new Error("useSidebarContext must be used with a SidebarContext provider");
  }

  return sidebarStore;
}

export default function SidebarContextProvider({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);
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
  return (
    <>
      <SidebarContext.Provider
        value={{
          isExpanded,
          setIsExpanded,
          toggle,
          sidebarRef,
        }}
      >
        {children}
      </SidebarContext.Provider>
    </>
  );
}
