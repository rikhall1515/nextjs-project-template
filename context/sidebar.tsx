"use client";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import {
  type Dispatch,
  type RefObject,
  type SetStateAction,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";

type SidebarStore = {
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
  isAtTop: boolean;
  setIsAtTop: Dispatch<SetStateAction<boolean>>;
  toggle: () => void;
  mainMenuBtnRef: RefObject<HTMLButtonElement>;
  btnInSidebarRef: RefObject<HTMLButtonElement>;
  sidebarRef: RefObject<HTMLElement>;
};

export const SidebarContext = createContext<SidebarStore | undefined>(
  undefined
);
export function useSidebarContext() {
  const sidebarStore = useContext(SidebarContext);

  if (sidebarStore === undefined) {
    throw new Error(
      "useSidebarContext must be used with a SidebarContext provider"
    );
  }

  return sidebarStore;
}

export default function SidebarContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const mainMenuBtnRef = useRef<HTMLButtonElement>(null);
  const btnInSidebarRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const toggle = () => {
    setIsExpanded(!isExpanded);
    if (sidebarRef.current) {
      if (!isExpanded) {
        disableBodyScroll(sidebarRef.current);
        return;
      }
      enableBodyScroll(sidebarRef.current);
    }
  };
  return (
    <>
      <SidebarContext.Provider
        value={{
          isExpanded,
          setIsExpanded,
          isAtTop,
          setIsAtTop,
          toggle,
          mainMenuBtnRef,
          btnInSidebarRef,
          sidebarRef,
        }}
      >
        {children}
      </SidebarContext.Provider>
    </>
  );
}
