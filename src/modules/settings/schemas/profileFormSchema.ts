import { z } from "zod";

export const profileFormSchema = z.object({
  fullName: z.string({
    required_error: "Name is required",
  }).min(2, {
    message: "Name must be at least 2 characters",
  }),
  username: z.string({
    required_error: "Username is required",
  }).min(2, {
    message: "Username must be at least 2 characters",
  }),
  email: z.string({
    required_error: "Email is required",
  }).email({
    message: "Invalid email format",
  }),
  password: z.string({
    required_error: "Password is required",
  }).min(8, {
    message: "Password must be at least 8 characters",
  }),
  dateOfBirth: z.date({
    required_error: "Date of Birth is required",
  }),
  presentAddress: z.string({
    required_error: "Present Address is required",
  }).min(5, {
    message: "Present Address must be at least 5 characters",
  }),
  permanentAddress: z.string({
    required_error: "Permanent Address is required",
  }).min(5, {
    message: "Permanent Address must be at least 5 characters",
  }),
  city: z.string({
    required_error: "City is required",
  }).min(2, {
    message: "City must be at least 2 characters",
  }),
  postalCode: z.string({
    required_error: "Postal Code is required",
  }).regex(/^\d{4,6}$/, {
    message: "Postal Code must be between 4 and 6 digits",
  }),
  country: z.string({
    required_error: "Country is required",
  }).min(2, {
    message: "Country must be at least 2 characters",
  }),
});

export type ProfileFormSchema = z.infer<typeof profileFormSchema>;
