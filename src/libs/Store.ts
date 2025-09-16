//import { boolean } from "zod";
import { type MarathonForm } from "../zod/MarathonSchema";
interface MarathonFormState {
  fname: string;
  lname: string;
  plan: "funrun" | "mini" | "half" | "full";
  gender: "male" | "female";
  email: string;
  password: string;
  confirmpassword: string;
  couponcode: string;
  haveCoupon: boolean;
  total: number;
  // Setters
  setFname: (v: string) => void;
  setLname: (v: string) => void;
  setPlan: (v: MarathonForm["plan"]) => void;
  setGender: (v: MarathonForm["gender"]) => void;
  setEmail: (v: string) => void;
  SetCoupon: (v: string) => void;
  SetHavecoupon : (v: boolean) => void;
  SetPassword : (v: string) => void;
  SetConfirmpassword: (v: string) => void;
  discountCoupon: () => void;
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้
  reset: () => void;
}
export type { MarathonFormState }