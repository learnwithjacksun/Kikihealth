import { z } from "zod";


const profileSchema = z.object({
  firstname: z.string().min(1, { message: "First Name is required!" }),
  lastname: z.string().min(1, { message: "Last Name is required!" }),
  email: z.string().email().min(1, { message: "Email is required!" }),
  phone: z.string().optional(),
  address: z.string().optional(),
});

type ProfileSchema = z.infer<typeof profileSchema>;

export {profileSchema, type ProfileSchema}