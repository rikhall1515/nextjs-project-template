/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { createContext, useCallback, useContext, useEffect, useMemo } from "react";
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

import { useCookieAPIContext, useCookieContext } from ".";
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
  const { preferences, advertising, analytics } = useCookieContext();
  const { toggleSelectCookies } = useCookieAPIContext();
  const form = useForm<CookieInputs>({
    defaultValues: {
      necessary: true,
      preferences: preferences,
      advertising: advertising,
      analytics: analytics,
    },
  });
  const onSubmit: SubmitHandler<CookieInputs> = useCallback(
    (data) => {
      setCookie(
        `1:${data.preferences ? 1 : 0}${data.analytics ? 1 : 0}${data.advertising ? 1 : 0}`
      );
      toggleSelectCookies(data.preferences, data.analytics, data.advertising, true);
    },
    [toggleSelectCookies]
  );
  useEffect(() => {
    form.setValue("preferences", preferences);
    form.setValue("analytics", analytics);
    form.setValue("advertising", advertising);
  }, [preferences, advertising, analytics]);
  const data = useMemo(
    () => ({
      ...form,
      onSubmit,
    }),
    [form, onSubmit]
  );
  return (
    <>
      <CookieFormContext.Provider value={data}>{children}</CookieFormContext.Provider>
    </>
  );
}
