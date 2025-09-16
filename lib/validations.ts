import { z } from "zod";

export const contactFormSchema = z.object({
  event: z.string().min(1, "Event is required"),
  name: z.string().min(1, "Name is required"),
  surname: z.string().min(1, "Surname is required"),
  phone: z
    .string()
    .min(10, "Phone number is too short")
    .max(15, "Phone number is too long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message cannot be empty"),
});

// Type inference for form values
export type ContactFormValues = z.infer<typeof contactFormSchema>;
