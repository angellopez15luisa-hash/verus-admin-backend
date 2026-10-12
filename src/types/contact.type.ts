import { z } from "zod";
import { contactSendEmailSchema } from "../schemas";

export type ContactSendEmailBody = z.infer<
  typeof contactSendEmailSchema
>["body"];
