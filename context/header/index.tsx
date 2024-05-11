"use client";
import { type Dispatch, type SetStateAction, createContext, useContext } from "react";
import { useState } from "react";

type HeaderStore = {
  isAtTop: boolean;
  setIsAtTop: Dispatch<SetStateAction<boolean>>;
};

export const HeaderContext = createContext<HeaderStore | undefined>(undefined);
export function useHeaderContext() {
  const headerStore = useContext(HeaderContext);

  if (headerStore === undefined) {
    throw new Error("useHeaderContext must be used with a HeaderContext provider");
  }

  return headerStore;
}

export default function HeaderContextProvider({ children }: { children: React.ReactNode }) {
  const [isAtTop, setIsAtTop] = useState(true);
  return (
    <>
      <HeaderContext.Provider
        value={{
          isAtTop,
          setIsAtTop,
        }}
      >
        {children}
      </HeaderContext.Provider>
    </>
  );
}
