import z from "zod";

export const personalSchema = z.object({
  firstName: z
    .string()
    .min(3, "Please enter more than 3 characters.")
    .max(255, "Please enter less than 255 characters."),
  lastName: z
    .string()
    .min(3, "Please enter more than 3 characters.")
    .max(255, "Please enter less than 255 characters."),
  email: z.email("Please enter valid email address"),
});

export const securitySchema = z.object({
  password: z
    .string()
    .min(8, "Please enter at least 8 characters")
    .regex(/[A-Z]/, "password must contain at least one uppercase letter.")
    .regex(/[0-9]/, "password must contain at least one number."),
  confirmPassword: z.string(),
});

export type PersonalData = z.infer<typeof personalSchema>;
export type SecurityData = z.infer<typeof securitySchema>;
