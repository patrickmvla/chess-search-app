import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    VITE_TYPESENSE_PORT: z.string().transform((val) => {
      const parsed = parseFloat(val);
      if (isNaN(parsed)) {
        throw new Error(`Invalid number: ${val}`);
      }
      return parsed;
    }),
    VITE_TYPESENSE_API_KEY: z.string().min(1),
    VITE_TYPESENSE_HOST: z.string(),
    VITE_TYPESENSE_PROTOCOL: z.string(),
  },
  runtimeEnv: import.meta.env,
});
