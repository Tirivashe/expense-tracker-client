import { z } from "zod";

export const loginSchema = z.object({
  loginEmail: z.string().email("Please enter a valid email"),
});

export const registerSchema = z.object({
  registerEmail: z.string().email("Enter a valid email"),
  registerPassword: z.string().min(5, "Password too short"),
});