"use client";

import { useEffect, useState, createContext, useContext, useCallback } from "react";

import { getCookieConsentValue } from "@/lib/cookie/utils";
export type CookieStore = {
  preferences: boolean;
  analytics: boolean;
  advertising: boolean;
  consent: boolean;
  isChangeConsentMenuOpen: boolean;
  isManageConsentMenuOpen: boolean;
  toggleChangeConsentMenu: () => void;
  toggleManageConsentMenu: () => void;
  toggleSelectCookies: (
    preferences: boolean,
    analytics: boolean,
    advertising: boolean,
    consent: boolean
  ) => void;
  acceptAllCookies: () => void;
  denyAllCookies: () => void;
};

// type State = {
//   preferences: boolean;
//   analytics: boolean;
//   advertising: boolean;
//   consent: boolean;
//   isChangeConsentMenuOpen: boolean;
//   isManageConsentMenuOpen: boolean;
// };

// type Action =
//   | { type: "TOGGLE_MENU"; menu: "isChangeConsentMenuOpen" | "isManageConsentMenuOpen" }
//   | { type: "SET_COOKIES"; payload: Partial<State> }
//   | { type: "ACCEPT_ALL" }
//   | { type: "DENY_ALL" };

// const cookieReducer = (state: State, action: Action) => {
//   switch (action.type) {
//     case "TOGGLE_MENU":
//       return { ...state, [action.menu]: !state[action.menu] };
//     case "SET_COOKIES":
//       return { ...state, ...action.payload };
//     case "ACCEPT_ALL":
//       return { ...state, preferences: true, analytics: true, advertising: true, consent: true };
//     case "DENY_ALL":
//       return { ...state, preferences: false, analytics: false, advertising: false, consent: false };
//     default:
//       return state;
//   }
// };

// function init() {
//   const initValues = getCookieConsentValue();
//   return {
//     preferences: initValues.preferences,
//     analytics: initValues.analytics,
//     advertising: initValues.advertising,
//     consent: initValues.consent,
//     isChangeConsentMenuOpen: false,
//     isManageConsentMenuOpen: false,
//   };
// }

export const CookieContext = createContext<CookieStore | undefined>(undefined);

export function useCookieContext() {
  const cookieStore = useContext(CookieContext);

  if (cookieStore === undefined) {
    throw new Error("useCookieContext must be used with a CookieContext provider");
  }

  return cookieStore;
}

export default function CookieContextProvider({ children }: { children: React.ReactNode }) {
  const [cookieSettings, setCookieSettings] = useState({
    preferences: false,
    analytics: false,
    advertising: false,
    consent: false,
    isChangeConsentMenuOpen: false,
    isManageConsentMenuOpen: false,
  });
  const toggleChangeConsentMenu = useCallback(() => {
    setCookieSettings((prev) => ({
      ...prev,
      isChangeConsentMenuOpen: !prev.isChangeConsentMenuOpen,
    }));
  }, []);
  const toggleManageConsentMenu = useCallback(() => {
    setCookieSettings((prev) => ({
      ...prev,
      isManageConsentMenuOpen: !prev.isManageConsentMenuOpen,
    }));
  }, []);
  const toggleSelectCookies = (
    preferences: boolean,
    analytics: boolean,
    advertising: boolean,
    consent: boolean
  ) => {
    setCookieSettings({
      ...cookieSettings,
      preferences,
      analytics,
      advertising,
      consent,
    });
  };
  const acceptAllCookies = useCallback(() => {
    toggleSelectCookies(true, true, true, true);
  }, []);
  const denyAllCookies = useCallback(() => {
    toggleSelectCookies(false, false, false, true);
  }, []);
  useEffect(() => {
    const { preferences, advertising, analytics, consent } = getCookieConsentValue();
    setCookieSettings((prev) => ({
      ...prev,
      preferences: preferences,
      advertising: advertising,
      analytics: analytics,
      consent: consent,
    }));
  }, []);
  // const funcValue = useMemo(
  //   () => ({
  //     toggleChangeConsentMenu,
  //     toggleManageConsentMenu,
  //     toggleSelectCookies,
  //     acceptAllCookies,
  //     denyAllCookies,
  //   }),
  //   [
  //     toggleChangeConsentMenu,
  //     toggleManageConsentMenu,
  //     toggleSelectCookies,
  //     acceptAllCookies,
  //     denyAllCookies,
  //   ]
  // );
  return (
    <>
      <CookieContext.Provider
        value={{
          ...cookieSettings,
          toggleChangeConsentMenu,
          toggleManageConsentMenu,
          toggleSelectCookies,
          acceptAllCookies,
          denyAllCookies,
        }}
      >
        {children}
      </CookieContext.Provider>
    </>
  );
}
