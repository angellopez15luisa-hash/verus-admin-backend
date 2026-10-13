import { z } from "zod";

export const bookingSchema = z.object({
  name: z
    .string({
      message: "* El nombre del contacto debe ser una cadena de texto",
    })
    .min(1, { message: "* El nombre del contacto es requerido" }),
  company: z
    .string({
      message: "* El nombre de la empresa debe ser una cadena de texto",
    })
    .min(1, { message: "* El nombre de la empresa es requerido" }),
  registerdNameCompany: z
    .string({
      message:
        "* El nombre de la razon social de la empresa debe ser una cadena de texto",
    })
    .min(1, {
      message: "* El nombre de la razon social de la empresa es requerido",
    }),
  ruc: z
    .string({
      message: "* El RUC de la empresa debe ser una cadena de texto",
    })
    .min(1, { message: "* El RUC de la empresa es requerido" }),
  idTax: z
    .string({
      message: "* El Id tributario de la empresa debe ser una cadena de texto",
    })
    .min(1, { message: "* El Id tributario de la empresa es requerido" }),
  email: z
    .string({ message: "* El email del contacto debe ser una cadena de texto" })
    .min(1, { message: "* El email del contacto es requerido" })
    .email({ message: "* El email no es valido" }),
  phone: z
    .string({
      message: "* El telefono del contacto debe ser una cadena de texto",
    })
    .min(1, { message: "* El telefono del contacto es requerido" }),
  country: z
    .string({
      message: "* El pais debe ser una cadena de texto",
    })
    .min(1, { message: "* El pais es requerido" }),
  city: z
    .string({
      message: "* La ciudad debe ser una cadena de texto",
    })
    .min(1, { message: "* La ciudad es requerido" }),
  service: z
    .string({
      message: "* El servicio debe ser una cadena de texto",
    })
    .min(1, { message: "* El servicio es requerido" }),
  dateBooking: z
    .string()
    .min(1, { message: "La fecha es requerida" })
    .refine(
      (dateString) => {
        // Validamos que tenga el formato YYYY-MM-DD que manda el input nativo
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(dateString)) return false;

        const selectedDate = new Date(dateString + "T00:00:00"); // Evitamos problemas de zona horaria
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        return !isNaN(selectedDate.getTime()) && selectedDate >= today;
      },
      {
        message:
          "La fecha de reserva no puede ser anterior al día de hoy o no es válida",
      },
    ),
  amount: z
    .union([z.string(), z.number()])
    .refine(
      (val) =>
        val !== "" &&
        val !== null &&
        val !== undefined &&
        String(val).trim() !== "",
      {
        message: "* La cantidad es requerida",
      },
    )
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), {
      message: "* La cantidad debe ser un número válido",
    })
    .refine((val) => val > 0, {
      message: "* La cantidad debe ser mayor a 0",
    }),
  details: z
    .string({
      required_error: "* Los detalles adicionales son obligatorios",
    })
    .min(1, {
      message: "* Los detalles adicionales son obligatorios",
    })
    .max(1000, {
      message:
        "* Los detalles adicionales no pueden superar los 1000 caracteres",
    }),
  fileBooking: z
    .string({
      required_error: "* El archivo adjunto es obligatorio",
    })
    .min(1, "* El archivo adjunto es obligatorio"),

  // Opcional: el nombre del archivo para armar el adjunto
  fileName: z.string().optional(),
  methodContact: z.enum(["email", "whatsapp", "llamada"], {
    required_error: "* El medio de contacto es requerido",
    invalid_type_error: "* Selecciona un medio de contacto válido",
  }),
  privacy: z.boolean().refine((val) => val === true, {
    message: "* Debes aceptar las políticas de privacidad",
  }),
  recaptchaToken: z.string(),
});

export const bookingSendEmailSchema = z.object({
  body: bookingSchema.pick({
    name: true,
    company: true,
    registerdNameCompany: true,
    ruc: true,
    idTax: true,
    amount: true,
    city: true,
    country: true,
    dateBooking: true,
    details: true,
    email: true,
    fileBooking: true,
    methodContact: true,
    phone: true,
    privacy: true,
    recaptchaToken: true,
    service: true,
    fileName: true,
  }),
});
