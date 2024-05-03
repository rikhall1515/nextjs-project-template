"use client";

import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type DashboardStore = {
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
  toggle: () => void;
};

export const DashboardContext = createContext<DashboardStore | undefined>(undefined);
export function useDashboardContext() {
  const sidebarStore = useContext(DashboardContext);

  if (sidebarStore === undefined) {
    throw new Error("useDashboardContext must be used with a DashboardContext provider");
  }

  return sidebarStore;
}

export default function DashboardContextProvider({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(true);
  useEffect(() => {
    if (typeof window === "undefined") return;

    setIsExpanded(localStorage.getItem("preference_sidebar_expanded") === "true");
  }, []);
  const toggle = () => {
    setIsExpanded(!isExpanded);
    localStorage.setItem("preference_sidebar_expanded", `${!isExpanded}`);
  };
  return (
    <>
      <DashboardContext.Provider
        value={{
          isExpanded,
          setIsExpanded,
          toggle,
        }}
      >
        {children}
      </DashboardContext.Provider>
    </>
  );
}
