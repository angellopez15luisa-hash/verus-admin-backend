import z from "zod";
import { messageResponseSchema } from "./custom.schema";

export const socialLinkSchema = z
  .object({
    key: z.string({ message: "La clave de red social es requerida" }),
    url: z
      .string({ message: "La URL debe ser texto" })
      .url({ message: "Debe ser una URL válida" }),
  })
  .optional();

export const bannerSchema = z
  .object({
    id: z.number(),
    image: z
      .string({ message: "La imagen es requerida" })
      .min(1, { message: "La imagen no puede estar vacía" }),
    active: z.boolean({ message: "El estado activo debe ser un booleano" }),
  })
  .optional();

export const textHeaderSectionSchema = z.object({
  title: z
    .string({ message: "El titulo debe ser texto" })
    .min(1, { message: "El titulo es requerido" })
    .optional(),
  description: z
    .string({ message: "La descripcion debe ser texto" })
    .min(1, { message: "La descripcion es requerida" })
    .optional(),
  section: z.string().optional(),
});

export const contentHowItWorkSchema = z.object({
  id: z.number(),
  title: z
    .string({ message: "El titulo debe ser texto" })
    .min(1, { message: "El titulo es requerido" }),
  description: z
    .string({ message: "La descripcion debe ser texto" })
    .min(1, { message: "La descripcion es requerida" }),
});

export const contentFrequentlyQuestionSchema = z.object({
  id: z.number(),
  question: z
    .string({ message: "El titulo debe ser texto" })
    .min(1, { message: "El titulo es requerido" }),
  answer: z
    .string({ message: "La descripcion debe ser texto" })
    .min(1, { message: "La descripcion es requerida" }),
  isActive: z.boolean(),
  service_id: z.number(),
});

export const contentItemsTrustsSchema = z.object({
  id: z.number(),
  title: z
    .string({ message: "El titulo debe ser texto" })
    .min(1, { message: "El titulo es requerido" }),
  subtitle: z
    .string({ message: "El subtitulo debe ser texto" })
    .min(1, { message: "El subtitulo es requerido" }),
  description: z
    .string({ message: "La descripcion debe ser texto" })
    .min(1, { message: "La descripcion es requerida" }),
  image: z.string(),
  isActive: z.boolean(),
});

// export const gallery_imagesSchema = z.object({
//   id: z.number().optional(),
//   name: z
//     .string({ message: "El nombre debe ser texto" })
//     .min(1, { message: "El nombre es requerido" }),
//   image: z.string(),
//   isActive: z.boolean(),
// });

export const serviceSchema = z.object({
  id: z.number().optional(),
  title: z
    .string({ message: "El titulo debe ser texto" })
    .min(1, { message: "El titulo es requerido" }),
  text_short: z
    .string({ message: "El texto corto debe ser texto" })
    .min(1, { message: "El texto corto es requerido" }),
  description_short: z
    .string({ message: "La descripcion corta debe ser texto" })
    .min(1, { message: "La descripcion corta es requerido" }),
  description_long: z
    .string({ message: "La descripcion larga debe ser texto" })
    .min(1, { message: "La descripcion larga es requerido" }),
  image: z.string(),
  video: z.string(),
  slug: z
    .string({ message: "El slug debe ser texto" })
    .min(1, { message: "El slug es requerido" }),
  icon_risk: z
    .string({ message: "La clase del icono debe ser texto" })
    .min(1, { message: "La clase del icono icono es requerido" }),
  title_risk: z
    .string({ message: "El titulo de riesgo debe ser texto" })
    .min(1, { message: "El titulo de riesgo es requerido" }),
  description_risk: z
    .string({ message: "La descripcion de riesgo debe ser texto" })
    .min(1, { message: "La descripcion de riesgo es requerido" }),
  isActive: z.boolean(),
  which_includes: z
    .string({ message: "La descripcion larga debe ser texto" })
    .min(1, { message: "La descripcion larga es requerido" }),
  specific_process: z
    .string({ message: "La descripcion larga debe ser texto" })
    .min(1, { message: "La descripcion larga es requerido" }),
  // gallery_images: z.array(gallery_imagesSchema),
});

export const imagesServiceSchema = z.object({
  id: z.number().optional(),
  name: z
    .string({ message: "* El nombre debe ser texto" })
    .min(1, { message: "* El nombre es requerido" }),
  image: z.string(),
  isActive: z.boolean(),
  service_id: z.number(),
});

export const informationAditionalSchema = z.object({
  text_verify: z
    .string({ message: "* El texto de verficacion debe ser texto" })
    .min(1, { message: "* El texto de verificacion es requerido" }),
  text_button_verify: z
    .string({ message: "* El texto del boton de verifcacion debe ser texto" })
    .min(1, { message: "* El texto del boton de verificacion debe ser texto" }),
  iframe_map_contact: z
  .string({ message: "El iframe debe ser texto" })
  .min(1, { message: "El iframe es requerido" })
  .refine(
    (val) => val.trim().startsWith('<iframe') && val.trim().endsWith('</iframe>'),
    { message: "El código debe ser un elemento iframe válido de Google Maps" }
  )
});

export const informationContactSchema = z.object({
  address: z
    .string({ message: "* La direccion debe ser texto" })
    .min(1, { message: "* La direccion es requerida" }),
  phone: z
    .string({ message: "* El telefono debe ser texto" })
    .min(1, { message: "* El telefono es requerido" }),
  whatsapp: z
    .string({ message: "* El whatsapp debe ser texto" })
    .min(1, { message: "* El whatsapp es requerido" }),
  email: z
    .string({ message: "* El email debe ser texto" })
    .min(1, { message: "* El email es requerido" }),
  businessHours: z
    .string({ message: "* El horario de atencion debe ser texto" })
    .min(1, { message: "* El horario de atencion es requerido" }),
});

export const generalSettingSchema = z.object({
  id: z.number(),
  socialLinks: z.array(socialLinkSchema).optional(),
  title1Start: z
    .string({
      invalid_type_error: "El titulo 1 debe ser una cadena de texto",
    })
    .min(1, { message: "El titulo 1 es requerido" })
    .optional(),
  title2Start: z
    .string({
      invalid_type_error: "El titulo 2 debe ser una cadena de texto",
    })
    .min(1, { message: "El titulo 2 es requerido" })
    .optional(),
  descriptionStart: z
    .string({
      invalid_type_error: "La descripcion debe ser una cadena de texto",
    })
    .min(1, { message: "La descripcion es requerida" })
    .optional(),
  textButtonLeftStart: z
    .string({
      invalid_type_error: "El texto del boton debe ser una cadena de texto",
    })
    .min(1, { message: "El texto del boton es requerido" })
    .optional(),
  textButtonRightStart: z
    .string({
      invalid_type_error: "El texto del boton debe ser una cadena de texto",
    })
    .min(1, { message: "El texto del boton es requerido" })
    .optional(),
  banners: z.array(bannerSchema).optional(),
  textHeaderSections: z.array(textHeaderSectionSchema).optional(),
  services: z.array(serviceSchema).optional(),
  imagesService: z
    .array(imagesServiceSchema)
    .min(1, { message: "* Debes agregar al menos 1 elemento a la lista" }),
  contentHowItWorks: z.array(contentHowItWorkSchema).optional(),
  contentFrequentlyQuestions: z
    .array(contentFrequentlyQuestionSchema)
    .optional(),
  contentItemsTrusts: z.array(contentItemsTrustsSchema).optional(),
  informationContact: informationContactSchema.optional(),
  informationAditional: informationAditionalSchema.optional(),
});

export const generalSettingResponseSchema = generalSettingSchema.pick({
  id: true,
  socialLinks: true,
  title1Start: true,
  title2Start: true,
  descriptionStart: true,
  textButtonLeftStart: true,
  textButtonRightStart: true,
  banners: true,
  textHeaderSections: true,
  services: true,
  imagesService: true,
  contentHowItWorks: true,
  contentFrequentlyQuestions: true,
  contentItemsTrusts: true,
  informationContact: true,
  informationAditional: true,
});

export const generalSettingDataResponseSchema = z.object({
  generalSetting: generalSettingResponseSchema,
  success: messageResponseSchema.shape.success,
});

export const generalSettingUpdateSchema = z.object({
  params: z.object({
    id: z.string().transform((val, ctx) => {
      const parsed = Number(val);
      if (isNaN(parsed)) {
        ctx.addIssue({
          code: "custom",
          message: "El ID debe ser un numero valido",
        });
        return z.NEVER;
      }
      if (parsed <= 0) {
        ctx.addIssue({
          code: "custom",
          message: "El ID debe ser mayor a cero",
        });
        return z.NEVER;
      }
      return val;
    }),
  }),
  body: generalSettingSchema.omit({ id: true }).partial(),
});
