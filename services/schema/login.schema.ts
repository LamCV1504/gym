import { z } from "zod";

export const loginSchema = z.object({
  phone: z.string().min(10, "Phone number must be in correct form!"),
  password: z.string().min(6, "Minimum 6 characters"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
