import { env } from "@/env/client";
export const defaultCookieConsentName = `${env.NEXT_PUBLIC_SITE_NAME}_consent`;

export enum SAME_SITE_OPTIONS {
  STRICT = "Strict",
  LAX = "Lax",
  NONE = "None",
}

export const VISIBILITY_OPTIONS = {
  HIDDEN: "hidden",
  SHOW: "show",
  BY_COOKIE_VALUE: "byCookieValue",
};

export const defaultCookieExpires = 365;
