import { z } from "zod";

export const detailsSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email().min(1, { message: "Email is required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  type: z.string().min(1, { message: "Type is required" }),
  onGoing: z.string(),
  basis: z.string().min(1, { message: "Please choose a basis" }),
  hoursPerWeek: z.coerce
    .string()
    .min(1, { message: "Hours per week is required" }),
});
