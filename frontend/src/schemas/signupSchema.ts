import {z} from "zod"

export const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 6 characters long."),
  passwordConfirm: z.string()
}).refine((data) => data.password === data.passwordConfirm, {
  message: "Passwords don't match",
  path: ["passwordConfirm"],
});

export type SignupFormData = z.infer<typeof signupSchema>;