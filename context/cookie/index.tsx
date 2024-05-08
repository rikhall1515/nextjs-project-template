"use client";

import { useEffect, createContext, useContext, useCallback, useReducer, useMemo } from "react";

import { getCookieConsentValue } from "@/lib/cookie/utils";

export type CookieStore = {
  preferences: boolean;
  analytics: boolean;
  advertising: boolean;
  consent: boolean;
};

export type CookieAPIStore = {
  toggleSelectCookies: (
    preferences: boolean,
    analytics: boolean,
    advertising: boolean,
    consent: boolean
  ) => void;
  acceptAllCookies: () => void;
  denyAllCookies: () => void;
};

type State = {
  preferences: boolean;
  analytics: boolean;
  advertising: boolean;
  consent: boolean;
};

type Action =
  | { type: "SET_COOKIES"; payload: Partial<State> }
  | { type: "ACCEPT_ALL" }
  | { type: "DENY_ALL" };

const cookieReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_COOKIES":
      return { ...state, ...action.payload };
    case "ACCEPT_ALL":
      return { ...state, preferences: true, analytics: true, advertising: true, consent: true };
    case "DENY_ALL":
      return { ...state, preferences: false, analytics: false, advertising: false, consent: false };
    default:
      return state;
  }
};

export const CookieContext = createContext<CookieStore | undefined>(undefined);

export const CookieAPIContext = createContext<CookieAPIStore | undefined>(undefined);

export function useCookieContext() {
  const cookieStore = useContext(CookieContext);

  if (cookieStore === undefined) {
    throw new Error("useCookieContext must be used with a CookieContext provider");
  }

  return cookieStore;
}

export function useCookieAPIContext() {
  const cookieAPIStore = useContext(CookieAPIContext);

  if (cookieAPIStore === undefined) {
    throw new Error("useCookieContext must be used with a CookieContext provider");
  }

  return cookieAPIStore;
}

export default function CookieContextProvider({ children }: { children: React.ReactNode }) {
  const [cookieSettings, dispatch] = useReducer(cookieReducer, {
    preferences: false,
    analytics: false,
    advertising: false,
    consent: false,
  });
  const toggleSelectCookies = useCallback(
    (preferences: boolean, analytics: boolean, advertising: boolean, consent: boolean) =>
      dispatch({ type: "SET_COOKIES", payload: { preferences, analytics, advertising, consent } }),
    []
  );
  const acceptAllCookies = useCallback(() => dispatch({ type: "ACCEPT_ALL" }), []);
  const denyAllCookies = useCallback(() => dispatch({ type: "DENY_ALL" }), []);

  useEffect(() => {
    const { preferences, advertising, analytics, consent } = getCookieConsentValue();
    toggleSelectCookies(preferences, advertising, analytics, consent);
  }, []);

  const data = useMemo(() => ({ ...cookieSettings }), [cookieSettings]);
  const api = useMemo(
    () => ({ toggleSelectCookies, acceptAllCookies, denyAllCookies }),
    [acceptAllCookies, toggleSelectCookies, denyAllCookies]
  );
  return (
    <>
      <CookieContext.Provider value={data}>
        <CookieAPIContext.Provider value={api}>{children}</CookieAPIContext.Provider>
      </CookieContext.Provider>
    </>
  );
}
