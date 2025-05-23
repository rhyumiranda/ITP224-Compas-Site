import {z} from "zod"

export const passwordResetSchema = z
.object({
  password: z.
    string()
    .min(8, {message: "Password must be at least 8 characters long."})
    .regex(/[a-z]/, {message: "Password must contain at least one lowercase letter."})
    .regex(/[A-Z]/, {message: "Password must contain at least one uppercase letter."})
    .regex(/[0-9]/, {message: "Password must contain at least one number."})
    .regex(/[^a-zA-Z0-9]/, {message: "Password must contain at least one special character."}),
  passwordConfirm: z.string()
}).refine((data) => data.password === data.passwordConfirm, {
  message: "Passwords don't match",
  path: ["passwordConfirm"],
});

export type PasswordResetFormData = z.infer<typeof passwordResetSchema>;