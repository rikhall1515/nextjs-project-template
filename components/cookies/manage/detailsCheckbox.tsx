import type { InputHTMLAttributes, RefAttributes } from "react";
import type { Path, UseFormRegister, FieldError } from "react-hook-form";

import type { CookieInputs } from "@/components/cookies/manage/tabNav";
import { cn } from "@/lib/utils";

type DetailsCheckboxProps = {
  label: Path<CookieInputs>;
  register: UseFormRegister<CookieInputs>;
  required: boolean;
  disabled?: boolean | undefined;
  error?: FieldError | undefined;
  checked?: boolean;
  classes?: string;
  name: string;
  children: React.ReactNode;
  amount: number;
};

export const DetailsCheckBox = ({
  label,
  register,
  required,
  disabled,
  error,
  checked,
  classes,
  name,
  children,
  amount,
  ...props
}: DetailsCheckboxProps &
  InputHTMLAttributes<HTMLInputElement> &
  RefAttributes<HTMLInputElement>) => (
  <>
    <div
      className={cn(
        "rounded-lg border-2 px-3 pb-6 pt-3 transition-all",
        disabled ? "opacity-80" : "",
        checked ? "border-[transparent] bg-primary text-primary-foreground" : "border-border",
        classes
      )}
    >
      <label
        className={cn(
          "mb-6 flex w-full items-center gap-6 text-[1.125rem]",
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        )}
      >
        <div className="flex w-[12rem] items-center">
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
              error ? "border-error" : "",
              disabled ? "cursor-not-allowed" : ""
            )}
          ></span>
          <p className={cn("ml-6 w-fit", checked ? "text-foreground" : "")}>{label}</p>
        </div>
        <span className="h-6 w-[0.125rem] shrink-0 bg-primary-foreground"></span>
        <div
          className={cn(
            "item-center flex h-6 justify-center rounded-full px-3  font-bold",
            amount > 0 && checked
              ? "bg-background text-foreground"
              : amount > 0
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
          )}
        >
          <span className="">{amount}</span>
        </div>
      </label>
      {children}
    </div>
  </>
);
