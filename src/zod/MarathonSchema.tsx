import { z } from "zod";

// Zod Schema
export const marathonSchema = z
  .object({
    fname: z
      .string()
      .min(3, { message: "First name must have at least 3 letters" }),
    lname: z.string().min(5, "Last name must have at least 5 letters"),
    plan: z.enum(["funrun", "mini", "half", "full"], {
      message: "Select a plan",
    }),
    gender: z.enum(["male", "female"], { message: "Select gender" }),
    agree: z.boolean().default(false),
    email: z.email(),
    haveCoupon: z.boolean().default(false),
    couponcode: z.string().optional(),
    password: z
      .string()
      .min(6, { message: "Password must contain at least 6 characters" })
      .max(12, { message: "Password must not exceed 12 characters" }),
    confirmpassword: z.string(),
  })
  .refine(
    (data) => {
      if (!data.couponcode) return true;
      return data.couponcode?.trim() === "CMU2025";
    },
    {
      message: "Invalid coupon code",
      path: ["couponcode"],
    })
    .refine(
    (pass) => pass.confirmpassword === pass.password,{
      message: "Password does not match",
      path: ["confirmpassword"],
    }
  );
export type MarathonForm = z.infer<typeof marathonSchema>;
