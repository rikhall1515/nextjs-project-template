import type { Control, FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

import Logo from "@/components/logo";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import AboutTab from "./about";
import { AcceptAll, AcceptSelection, DenyAll } from "./buttons";
import ConsentTab from "./consent";
import DetailsTab from "./details";

type CookieInputs = {
  necessary: boolean;
  preferences: boolean;
  analytics: boolean;
  advertising: boolean;
};

export default function FormContent({
  control,
  register,
  errors,
  isSubmitting,
  setValue,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<CookieInputs, any>;
  register: UseFormRegister<CookieInputs>;
  errors: FieldErrors<CookieInputs>;
  isSubmitting: boolean;
  setValue: UseFormSetValue<CookieInputs>;
}) {
  return (
    <>
      <Logo className="mb-6" />
      <Tabs
        defaultValue="Consent"
        className="flex h-auto w-full flex-col overflow-auto bg-[transparent] py-6 align-baseline"
      >
        <TabsList className="mx-auto mb-6">
          <TabsTrigger value="Consent">Consent</TabsTrigger>
          <TabsTrigger value="Details">Details</TabsTrigger>
          <TabsTrigger value="About">About</TabsTrigger>
        </TabsList>
        <ConsentTab
          control={control}
          errors={errors}
          isSubmitting={isSubmitting}
          register={register}
        />
        <DetailsTab
          control={control}
          errors={errors}
          isSubmitting={isSubmitting}
          register={register}
        />
        <AboutTab />
      </Tabs>
      <div className="relative flex w-full flex-shrink-0 flex-col-reverse gap-6  p-6 md:flex-row md:flex-nowrap">
        <div className="absolute -top-[4.125rem] left-0 h-16 w-full bg-gradient-to-b from-[transparent] to-background to-50%"></div>
        <DenyAll setValue={setValue} />
        <AcceptSelection />
        <AcceptAll setValue={setValue} />
      </div>
    </>
  );
}
