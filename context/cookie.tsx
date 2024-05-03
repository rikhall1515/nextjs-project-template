"use client";

import { useEffect, useState, createContext, useContext } from "react";

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

export const CookieContext = createContext<CookieStore | undefined>(undefined);

// type ConsentValue = {
//   hasConsentValue: boolean;
//   setHasConsentValue: Dispatch<SetStateAction<boolean>>;
// };

// export const CookieContext = createContext<ConsentValue | undefined>(undefined);
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
  // const [isChangeConsentMenuOpen, setConsentMenuState] = useState(false);
  // const [isManageConsentMenuOpen, setManageConsentMenuState] = useState(false);
  // const [cPreferences, setPreferences] = useState(false);
  // const [cAnalytics, setAnalytics] = useState(false);
  // const [cAdvertising, setAdvertising] = useState(false);
  // const [cConsent, setConsent] = useState(false);
  function toggleChangeConsentMenu() {
    setCookieSettings((prev) => ({
      ...prev,
      isChangeConsentMenuOpen: !prev.isChangeConsentMenuOpen,
    }));
  }
  // const toggleChangeConsentMenu = () => {
  //   setConsentMenuState(!isChangeConsentMenuOpen);
  // };
  function toggleManageConsentMenu() {
    setCookieSettings((prev) => ({
      ...prev,
      isManageConsentMenuOpen: !prev.isManageConsentMenuOpen,
    }));
  }
  // const toggleManageConsentMenu = () => {
  //   setManageConsentMenuState(!isManageConsentMenuOpen);
  // };
  function toggleSelectCookies(
    preferences: boolean,
    analytics: boolean,
    advertising: boolean,
    consent: boolean
  ) {
    setCookieSettings({
      ...cookieSettings,
      preferences,
      analytics,
      advertising,
      consent,
    });
  }
  // const toggleSelectCookies = (
  //   preferences: boolean,
  //   analytics: boolean,
  //   advertising: boolean,
  //   consent: boolean
  // ) => {
  //   setPreferences(preferences);
  //   setAnalytics(analytics);
  //   setAdvertising(advertising);
  //   setConsent(consent);
  // };
  const acceptAllCookies = () => {
    toggleSelectCookies(true, true, true, true);
  };
  const denyAllCookies = () => {
    toggleSelectCookies(false, false, false, false);
  };
  useEffect(() => {
    setCookieSettings((prev) => ({
      ...prev,
      consent: !!getCookieConsentValue(),
    }));
  }, []);
  return (
    <>
      <CookieContext.Provider
        value={{
          ...cookieSettings,
          toggleChangeConsentMenu: toggleChangeConsentMenu,
          toggleManageConsentMenu: toggleManageConsentMenu,
          toggleSelectCookies: toggleSelectCookies,
          acceptAllCookies: acceptAllCookies,
          denyAllCookies: denyAllCookies,
        }}
      >
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
