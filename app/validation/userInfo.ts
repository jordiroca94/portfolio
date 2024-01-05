import { z } from "zod";

export const userinfoSchema = z.object({
  email: z.string().email({ message: "An email is required." }),
  name: z.string().min(1, { message: "A name is required" }),
  message: z.string().min(1, { message: "A message is required" }),
});
