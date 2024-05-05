/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { createContext, useContext, useEffect } from "react";
import type {
  Control,
  FormState,
  SubmitHandler,
  UseFormClearErrors,
  UseFormGetFieldState,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormResetField,
  UseFormSetError,
  UseFormSetFocus,
  UseFormSetValue,
  UseFormTrigger,
  UseFormUnregister,
  UseFormWatch,
} from "react-hook-form";
import { useForm, useWatch } from "react-hook-form";

import { setCookie } from "@/lib/cookie/utils";
import type { CookieInputs } from "@/types/cookie";

import { useCookieContext } from ".";
export type CookieFormStore = {
  clearErrors: UseFormClearErrors<CookieInputs>;
  control: Control<CookieInputs, any>;
  formState: FormState<CookieInputs>;
  getFieldState: UseFormGetFieldState<CookieInputs>;
  handleSubmit: UseFormHandleSubmit<CookieInputs, undefined>;
  getValues: UseFormGetValues<CookieInputs>;
  register: UseFormRegister<CookieInputs>;
  reset: UseFormReset<CookieInputs>;
  resetField: UseFormResetField<CookieInputs>;
  setError: UseFormSetError<CookieInputs>;
  setFocus: UseFormSetFocus<CookieInputs>;
  setValue: UseFormSetValue<CookieInputs>;
  trigger: UseFormTrigger<CookieInputs>;
  unregister: UseFormUnregister<CookieInputs>;
  watch: UseFormWatch<CookieInputs>;
  onSubmit: SubmitHandler<CookieInputs>;
};

export const CookieFormContext = createContext<CookieFormStore | undefined>(undefined);

export function useCookieFormContext() {
  const form = useContext(CookieFormContext);

  if (form === undefined) {
    throw new Error("useCookieFormContext must be used with a CookieContext provider");
  }

  return form;
}

export const useFormValues = () => {
  const { getValues } = useCookieFormContext();
  return {
    ...useWatch(), // subscribe to form value updates

    ...getValues(), // always merge with latest form values
  };
};

export default function CookieFormContextProvider({ children }: { children: React.ReactNode }) {
  const cookieStore = useCookieContext();
  const form = useForm<CookieInputs>({
    defaultValues: {
      necessary: true,
      preferences: cookieStore.preferences,
      advertising: cookieStore.advertising,
      analytics: cookieStore.analytics,
    },
  });
  const onSubmit: SubmitHandler<CookieInputs> = (data) => {
    setCookie(`1:${data.preferences ? 1 : 0}${data.analytics ? 1 : 0}${data.advertising ? 1 : 0}`);
    cookieStore.toggleSelectCookies(data.preferences, data.analytics, data.advertising, true);
  };
  useEffect(() => {
    form.setValue("preferences", cookieStore.preferences);
    form.setValue("analytics", cookieStore.analytics);
    form.setValue("advertising", cookieStore.advertising);
  }, [cookieStore.preferences, cookieStore.advertising, cookieStore.analytics]);
  return (
    <>
      <CookieFormContext.Provider value={{ ...form, onSubmit }}>
        {children}
      </CookieFormContext.Provider>
    </>
  );
}
