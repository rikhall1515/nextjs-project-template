"use client";
import {
  type KeyboardEventHandler,
  type RefObject,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
} from "react";

type MenuBtnRefStore = {
  mainMenuBtnRef: RefObject<HTMLButtonElement>;
  trapFocus: KeyboardEventHandler<HTMLAnchorElement>;
};

export const MenuBtnRefContext = createContext<MenuBtnRefStore | undefined>(undefined);
export function useMenuBtnRefContext() {
  const menuBtnRefStore = useContext(MenuBtnRefContext);

  if (menuBtnRefStore === undefined) {
    throw new Error("useMenuBtnRefContext must be used with a MenuBtnRefContext provider");
  }

  return menuBtnRefStore;
}

export default function MenuBtnRefContextProvider({ children }: { children: React.ReactNode }) {
  const mainMenuBtnRef = useRef<HTMLButtonElement>(null);
  const trapFocus: KeyboardEventHandler<HTMLAnchorElement> = useCallback((e) => {
    if (e.code === "Tab" && !e.shiftKey && mainMenuBtnRef.current) {
      e.preventDefault();
      mainMenuBtnRef.current.focus();
    }
  }, []);
  const value = useMemo(() => ({ mainMenuBtnRef, trapFocus }), [trapFocus]);
  return (
    <>
      <MenuBtnRefContext.Provider value={value}>{children}</MenuBtnRefContext.Provider>
    </>
  );
}
