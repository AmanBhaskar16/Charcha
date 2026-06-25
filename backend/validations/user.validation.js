import { z } from "zod";

export const signupSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  username: z.string().min(3).max(20).regex(/^[a-zA-Z0-9_]+$/,"Username can only contain letters, numbers and underscores"),
  email: z.email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const loginSchema = z.object({
  email: z.email("Please enter a valid email").trim().toLowerCase(),
  password: z.string().min(1, "Password is required"),
});

