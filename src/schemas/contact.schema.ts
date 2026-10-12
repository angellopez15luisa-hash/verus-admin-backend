import z from "zod";

export const contactSchema = z.object({
  name: z
    .string({
      message: "* El nombre del contacto debe ser una cadena de texto",
    })
    .min(1, { message: "* El nombre del contacto es requerido" }),
  company: z
    .string({
      message: "* El nombre de la empresa debe ser una cadena de texto",
    })
    .min(1, { message: "* La nombre de la empresa es requerido" }),
  email: z
    .string({ message: "* El email del contacto debe ser una cadena de texto" })
    .min(1, { message: "* El email del contacto es requerido" })
    .email({ message: "* El email no es valido" }),
  phone: z
    .string({
      message: "* El telefono del contacto debe ser una cadena de texto",
    })
    .min(1, { message: "* El telefono del contacto es requerido" }),
  service: z
    .string({
      message: "* El asunto del contacto debe ser una cadena de texto",
    })
    .min(1, { message: "* El asunto del contacto es requerido" }),
  message: z
    .string({
      message: "* El Mensaje del contacto deber ser una cadena de texto",
    })
    .min(1, { message: "* El mensaje del contacto es requerido" }),
  recaptchaToken: z.string(),
});

export const contactSendEmailSchema = z.object({
  body: contactSchema.pick({
    name: true,
    company: true,
    email: true,
    phone: true,
    service: true,
    message: true,
    recaptchaToken:true
  }),
});
