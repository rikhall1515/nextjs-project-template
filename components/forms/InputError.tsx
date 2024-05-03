"use client";
import { useEffect, useState } from "react";

import Expandable from "./expandable";

export default function FormError({ name, error }: { name: string; error?: string }) {
  const [frozenError, setError] = useState<string>();
  useEffect(() => {
    if (!error) {
      const timeout = setTimeout(() => (setError(""), 200));
      return () => {
        clearTimeout(timeout);
      };
    } else {
      setError(error);
    }
  }, [error]);
  return (
    <>
      <Expandable expanded={!!error}>
        <div className="pt-1 font-bold text-destructive" id={`${name}-error`}>
          {frozenError}
        </div>
      </Expandable>
    </>
  );
}
