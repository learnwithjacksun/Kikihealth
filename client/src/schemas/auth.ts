import { z } from "zod";

const registerSchema = z.object({
  firstname: z.string().min(1, { message: "First name is required!" }),
  lastname: z.string().min(1, { message: "First name is required!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters!" }),
  agree: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions!",
  }),
});

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters!" }),
});

type RegisterSchema = z.infer<typeof registerSchema>;
type LoginSchema = z.infer<typeof loginSchema>;

export { registerSchema, loginSchema, type RegisterSchema, type LoginSchema };
