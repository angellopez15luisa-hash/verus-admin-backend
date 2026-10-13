import { z } from "zod";
import { bookingSendEmailSchema } from "../schemas";

export type BookingSendEmailBody = z.infer<
  typeof bookingSendEmailSchema
>["body"];
