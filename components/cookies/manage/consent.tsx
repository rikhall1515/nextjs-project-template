import type { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import { Controller } from "react-hook-form";

import { CookieCheckBox } from "@/components/cookies/manage/cookieCheckbox";
import { TabsContent } from "@/components/ui/tabs";

type CookieInputs = {
  necessary: boolean;
  preferences: boolean;
  analytics: boolean;
  advertising: boolean;
};

export default function ConsentTab({
  control,
  register,
  errors,
  isSubmitting,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<CookieInputs, any>;
  register: UseFormRegister<CookieInputs>;
  errors: FieldErrors<CookieInputs>;
  isSubmitting: boolean;
}) {
  return (
    <>
      <TabsContent value="Consent" id="consentTab">
        <div className="">
          <h3 className="mb-6 px-6 font-bold">This website uses cookies</h3>
          <p className="mb-10 px-6 leading-[1.4]">
            We use cookies to personalize content and marketing, deliver functionality through
            social media, och for analyzing traffic. We share, with your consent, information to our
            partners in social media, marketing, and analytics. They can then use this data in
            combination with other data that you hae either shared or that they have collected
            through your usage of their services.
          </p>
          <div className="mb-12 grid w-full grid-cols-1 m:grid-cols-2 md:grid-cols-4">
            <Controller
              name="necessary"
              control={control}
              disabled={true}
              defaultValue={true}
              render={({ field: { onChange, onBlur, value, ref, name, disabled } }) => (
                <CookieCheckBox
                  onChange={onChange}
                  onBlur={onBlur}
                  checked={value}
                  ref={ref}
                  name={name}
                  register={register}
                  required
                  label={name}
                  error={errors.necessary}
                  disabled={disabled}
                />
              )}
            />
            <Controller
              name="preferences"
              control={control}
              disabled={isSubmitting}
              defaultValue={true}
              render={({ field: { onChange, onBlur, value, ref, name, disabled } }) => (
                <CookieCheckBox
                  onChange={onChange}
                  onBlur={onBlur}
                  checked={value}
                  ref={ref}
                  name={name}
                  register={register}
                  required
                  label={name}
                  error={errors.necessary}
                  disabled={disabled}
                />
              )}
            />
            <Controller
              name="analytics"
              control={control}
              disabled={isSubmitting}
              defaultValue={true}
              render={({ field: { onChange, onBlur, value, ref, name, disabled } }) => (
                <CookieCheckBox
                  onChange={onChange}
                  onBlur={onBlur}
                  checked={value}
                  ref={ref}
                  name={name}
                  register={register}
                  required
                  label={name}
                  error={errors.necessary}
                  disabled={disabled}
                />
              )}
            />
            <Controller
              name="advertising"
              control={control}
              disabled={isSubmitting}
              defaultValue={true}
              render={({ field: { onChange, onBlur, value, ref, name, disabled } }) => (
                <CookieCheckBox
                  onChange={onChange}
                  onBlur={onBlur}
                  checked={value}
                  ref={ref}
                  name={name}
                  register={register}
                  required
                  label={name}
                  error={errors.necessary}
                  disabled={disabled}
                />
              )}
            />
          </div>
        </div>
      </TabsContent>
    </>
  );
}
