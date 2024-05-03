import type { InputHTMLAttributes, RefAttributes } from "react";
import type { Path, UseFormRegister, FieldError } from "react-hook-form";

import type { CookieInputs } from "@/components/cookies/manage/tabNav";
import { cn } from "@/lib/utils";

type CookieCheckboxProps = {
  label: Path<CookieInputs>;
  register: UseFormRegister<CookieInputs>;
  required: boolean;
  disabled?: boolean | undefined;
  error?: FieldError | undefined;
  checked?: boolean;
  classes?: string;
  name: string;
};

export const CookieCheckBox = ({
  label,
  register,
  required,
  disabled,
  error,
  checked,
  classes,
  name,
  ...props
}: CookieCheckboxProps &
  InputHTMLAttributes<HTMLInputElement> &
  RefAttributes<HTMLInputElement>) => (
  <>
    <div
      className={cn(
        "h-[6.25rem] w-full border-x-[0.0625rem] border-y-2 transition-all",
        disabled ? "opacity-80" : "",
        checked ? "border-[transparent] bg-primary text-primary-foreground" : "border-border",
        classes
      )}
    >
      <label
        htmlFor={name}
        className="relative flex h-full w-full flex-col items-center justify-center gap-1 text-[1.125rem]"
      >
        <span className="font-bold capitalize">{label}</span>
        <input
          {...props}
          type="checkbox"
          id={name}
          aria-invalid={!!error}
          aria-errormessage={`${name}-error`}
          className="peer/villkor h-0 w-0 opacity-0"
          checked={checked}
          disabled={disabled}
          {...register(label, { required })}
        />

        <span
          className={cn(
            "relative inline-block h-8 w-8 rounded-lg border-4 border-primary transition-all",
            error ? "border-destructive" : "",
            disabled ? "cursor-not-allowed" : ""
          )}
        ></span>
      </label>
    </div>
  </>
);
