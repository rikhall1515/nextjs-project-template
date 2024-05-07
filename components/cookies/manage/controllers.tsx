"use client";
import React, { memo } from "react";
import type { Path } from "react-hook-form";
import { Controller } from "react-hook-form";

import { useCookieFormContext } from "@/context/cookie/form";
import { cn } from "@/lib/utils";
import type { CookieInputs } from "@/types/cookie";

export const ConsentTabController = memo(function ConsentTabController({
  name,
}: {
  name: Path<CookieInputs>;
}) {
  const { register, control, formState } = useCookieFormContext();

  return (
    <>
      <Controller
        name={name}
        control={control}
        disabled={name === "necessary" ? true : formState.isSubmitting}
        defaultValue={formState.defaultValues![name]}
        render={({ field: { name, value, disabled } }) => (
          <div
            className={cn(
              "h-[6.25rem] w-full border-x-[0.0625rem] border-y-2 transition-all",
              disabled ? "opacity-80" : "",
              value ? "border-[transparent] bg-primary text-primary-foreground" : "border-border"
            )}
          >
            <label
              htmlFor={name}
              className="relative flex h-full w-full flex-col items-center justify-center gap-1 text-[1.125rem]"
            >
              <span className="font-bold capitalize">{name}</span>
              <input
                type="checkbox"
                id={name}
                aria-invalid={!!formState.errors![name]}
                aria-errormessage={`${name}-error`}
                className="peer/villkor h-0 w-0 opacity-0"
                checked={value}
                disabled={disabled}
                {...register(name, { required: name === "necessary" })}
              />

              <span
                className={cn(
                  "relative inline-block h-8 w-8 rounded-lg border-4 border-primary transition-all",
                  formState.errors![name] ? "border-destructive" : "",
                  disabled ? "cursor-not-allowed" : ""
                )}
              ></span>
            </label>
          </div>
        )}
      />
    </>
  );
});

export const DetailsTabController = memo(function DetailsTabController({
  name,
  children,
  amount,
}: {
  name: Path<CookieInputs>;
  children: React.ReactNode;
  amount: number;
}) {
  const { register, control, formState } = useCookieFormContext();

  return (
    <>
      <Controller
        name={name}
        control={control}
        disabled={name === "necessary" ? true : formState.isSubmitting}
        defaultValue={formState.defaultValues![name]}
        render={({ field: { value, name, disabled } }) => (
          <div
            className={cn(
              "rounded-lg border-2 px-3 pb-6 pt-3 transition-all",
              disabled ? "opacity-80" : "",
              value ? "border-[transparent] bg-primary text-primary-foreground" : "border-border"
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
                  type="checkbox"
                  id={name}
                  aria-invalid={!!formState.errors![name]}
                  aria-errormessage={`${name}-error`}
                  className="peer/villkor h-0 w-0 opacity-0"
                  checked={value}
                  disabled={disabled}
                  {...register(name, { required: name === "necessary" })}
                />

                <span
                  className={cn(
                    "relative inline-block h-8 w-8 rounded-lg border-4 border-primary transition-all",
                    disabled ? "cursor-not-allowed" : ""
                  )}
                ></span>
                <p
                  className={cn(
                    "ml-6 w-fit font-bold capitalize",
                    value ? "text-primary-foreground" : ""
                  )}
                >
                  {name}
                </p>
              </div>
              <span className="h-6 w-[0.125rem] shrink-0 bg-primary-foreground"></span>
              <div
                className={cn(
                  "item-center flex h-6 justify-center rounded-full px-3  font-bold",
                  amount > 0 && value
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
        )}
      />
    </>
  );
});
