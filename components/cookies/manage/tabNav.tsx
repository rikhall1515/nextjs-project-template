"use client";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import FormContent from "@/components/cookies/manage/formContent";
import { useCookieContext } from "@/context/cookie";
import { setCookie } from "@/lib/cookie/utils";

export type CookieInputs = {
  necessary: boolean;
  preferences: boolean;
  analytics: boolean;
  advertising: boolean;
};

export default function TabNav() {
  const cookieStore = useCookieContext();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CookieInputs>({
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
  return (
    <>
      <form
        className="flex h-full w-full flex-col items-center overflow-auto bg-[transparent] align-baseline"
        onSubmit={handleSubmit(onSubmit)}
        id="cookieForm"
      >
        <FormContent
          control={control}
          errors={errors}
          isSubmitting={isSubmitting}
          register={register}
          setValue={setValue}
        />
      </form>
    </>
  );
}
