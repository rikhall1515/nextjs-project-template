"use client";
import type { Dispatch, SetStateAction } from "react";
import { useEffect, useState, createContext, useContext } from "react";
import { getCookieConsentValue } from "react-cookie-consent";
// export type CookieStore = {
//   preferences: boolean;
//   analytics: boolean;
//   advertising: boolean;
//   consent: boolean;
//   isChangeConsentMenuOpen: boolean;
//   isManageConsentMenuOpen: boolean;
//   toggleChangeConsentMenu: () => void;
//   toggleManageConsentMenu: () => void;
//   toggleSelectCookies: (
//     preferences: boolean,
//     analytics: boolean,
//     advertising: boolean,
//     consent: boolean
//   ) => void;
// };

// export const CookieContext = createContext<CookieStore | undefined>(undefined);

type ConsentValue = {
  hasConsentValue: boolean;
  setHasConsentValue: Dispatch<SetStateAction<boolean>>;
};

export const CookieContext = createContext<ConsentValue | undefined>(undefined);
export function useCookieContext() {
  const cookieStore = useContext(CookieContext);

  if (cookieStore === undefined) {
    throw new Error(
      "useCookieContext must be used with a CookieContext provider"
    );
  }

  return cookieStore;
}

export default function CookieContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasConsentValue, setHasConsentValue] = useState(false);

  useEffect(() => {
    setHasConsentValue(!!getCookieConsentValue());
  }, []);
  return (
    <>
      <CookieContext.Provider value={{ hasConsentValue, setHasConsentValue }}>
        {children}
      </CookieContext.Provider>
    </>
  );
}
/**
 *   const [hasConsentValue, setHasConsentValue] = useState(false);

  useEffect(() => {
    setHasConsentValue(!!getCookieConsentValue());
  }, []);
 */
