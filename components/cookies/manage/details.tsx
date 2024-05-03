import type { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import { Controller } from "react-hook-form";

import { DetailsCheckBox } from "@/components/cookies/manage/detailsCheckbox";
import { TabsContent } from "@/components/ui/tabs";

type CookieInputs = {
  necessary: boolean;
  preferences: boolean;
  analytics: boolean;
  advertising: boolean;
};

export default function DetailsTab({
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
      <TabsContent value="Details" id="detailsTab">
        <div className="mb-12 flex w-full flex-col gap-6 px-6">
          <Controller
            name="necessary"
            control={control}
            disabled={true}
            defaultValue={true}
            render={({ field: { onChange, onBlur, value, ref, name, disabled } }) => (
              <DetailsCheckBox
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
                amount={1}
              >
                Necessary cookies help the website function. This includes navigation, and access to
                secure areas of the site. This website will not function without these cookies.
              </DetailsCheckBox>
            )}
          />
          <Controller
            name="preferences"
            control={control}
            disabled={isSubmitting}
            defaultValue={true}
            render={({ field: { onChange, onBlur, value, ref, name, disabled } }) => (
              <DetailsCheckBox
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
                amount={0}
              >
                Preference cookies are for remembering information that changes the way that the
                website works or its appearance. This is primarily for preferences such as language,
                theme, and more.
              </DetailsCheckBox>
            )}
          />
          <Controller
            name="analytics"
            control={control}
            disabled={isSubmitting}
            defaultValue={true}
            render={({ field: { onChange, onBlur, value, ref, name, disabled } }) => (
              <DetailsCheckBox
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
                amount={0}
              >
                Analytics cookies help the owners of this website to understand what the visitors
                are interacting with on the website. It also collects information about the behavior
                of the users while preserving their anonimity.
              </DetailsCheckBox>
            )}
          />
          <Controller
            name="advertising"
            control={control}
            disabled={isSubmitting}
            defaultValue={true}
            render={({ field: { onChange, onBlur, value, ref, name, disabled } }) => (
              <DetailsCheckBox
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
                amount={0}
              >
                Marketing cookies track the user&apos;s activity across the website. This helps the
                owners of the website to recommend better content to the user.
              </DetailsCheckBox>
            )}
          />
        </div>
      </TabsContent>
    </>
  );
}
