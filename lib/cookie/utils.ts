import Cookies from "js-cookie";

import { defaultCookieConsentName, defaultCookieExpires, SAME_SITE_OPTIONS } from "./constants";

/**
 * Returns the value of the consent cookie
 * Retrieves the regular value first and if not found the legacy one according
 * to: https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
 * @param {*} name optional name of the cookie
 */
export const getCookieConsentValue = (
  name = defaultCookieConsentName
): { preferences: boolean; analytics: boolean; advertising: boolean; consent: boolean } => {
  let cookieValue = Cookies.get(name);

  // if the cookieValue is undefined check for the legacy cookie
  if (cookieValue === undefined) {
    cookieValue = Cookies.get(getLegacyCookieName(name));
  }
  if (cookieValue === undefined) {
    return {
      preferences: false,
      analytics: false,
      advertising: false,
      consent: false,
    };
  }
  const values = cookieValue.split(":")[1];
  const booleans = {
    preferences: values[0] === "1",
    analytics: values[1] === "1",
    advertising: values[2] === "1",
    consent: true,
  };
  return booleans;
};

/**
 * Reset the consent cookie
 * Remove the cookie on browser in order to allow user to change their consent
 * @param {*} name optional name of the cookie
 */
export const resetCookieConsentValue = (name = defaultCookieConsentName) => {
  Cookies.remove(name);
};

/**
 * Get the legacy cookie name by the regular cookie name
 * @param {string} name of cookie to get
 */
export const getLegacyCookieName = (name: string) => {
  return `${name}-legacy`;
};

/**
 * Set cookie with value
 * @param {string} name
 * @param {string} cookieValue
 */
export function setCookie(
  cookieValue: string,
  name = defaultCookieConsentName,
  sameSite = SAME_SITE_OPTIONS.LAX
) {
  // Fallback for older browsers where can not set SameSite=None,
  // SEE: https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
  if (sameSite === SAME_SITE_OPTIONS.NONE) {
    Cookies.set(getLegacyCookieName(name), cookieValue, {
      expires: defaultCookieExpires,
      sameSite: "Lax",
      secure: true,
      path: "/",
    });
  }

  Cookies.set(name, cookieValue, {
    expires: defaultCookieExpires,
    sameSite: "Lax",
    secure: true,
    path: "/",
  });
}
