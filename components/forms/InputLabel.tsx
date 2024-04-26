import { cn } from "@/lib/utils";

export default function InputLabel({
  name,
  label,
  required,
  error,
}: {
  name: string;
  label?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <>
      <label
        className={cn(
          "mb-[0.5rem] block text-[1.125rem] font-medium m:mb-[1.1875rem] m:text-[1.5rem]",
          error ? "text-error" : ""
        )}
        htmlFor={name}
      >
        {label} {required && <span className="text-error ml-1">*</span>}
      </label>
    </>
  );
}
