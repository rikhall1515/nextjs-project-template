import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  isServer: typeof window === "undefined",
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },
  /**
   * Makes it so that empty strings are treated as undefined.
   * `SOME_VAR: z.string()` and `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
