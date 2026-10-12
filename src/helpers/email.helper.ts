import { Resend } from "resend";
import { ENV } from "../config";
import { ContactSendEmailBody, User } from "../types";
import axios from "axios";
const resend = new Resend(ENV.RESEND.RESEND_API_KEY);

export const sendPasswordResetEmail = async (
  email: User["email"],
  resetUrl: string,
) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Adminstracion App <soporte@imaynadigital.com>",
      to: [email],
      subject: "Restablecer tu password",
      html: `
          <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>¿Olvidaste tu contraseña?</h2>
          <p>Haz clic en el siguiente enlace para restablecerla. Este enlace expira en 1 hora:</p>
          <a href="${resetUrl}" style="background: #4f46e5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Restablecer contraseña</a>
          <p style="margin-top: 20px; font-size: 12px; color: #666;">Si no solicitaste esto, ignora este correo.</p>
        </div>
            `,
    });
    if (error) {
      console.log(error);
      throw new Error("No se pudo enviar el correo de recuperacion");
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const sendContactEmail = async (contact: ContactSendEmailBody) => {
  try {
    const { recaptchaToken } = contact;

    // 1. Validar si vino el token
    if (!recaptchaToken) {
      throw new Error("Por favor, completa la verificación de reCAPTCHA.");
    }

    // 2. Verificar el token con Google usando la función fetch que hicimos
    const isValid = await verifyRecaptcha(recaptchaToken);
    if (!isValid) {
      throw new Error(
        "La validación del reCAPTCHA ha fallado. Inténtalo de nuevo.",
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Landing Contacto <soporte@imaynadigital.com>",
      to: ["angellopez15luisa@gmail.com"], // El correo donde quieres recibir los avisos
      replyTo: contact.email, // ¡Importante! Para que al darle a "Responder" le contestes directo al cliente
      subject: `Nuevo mensaje de contacto: ${contact.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e1e1e1; border-radius: 8px;">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px;">Nuevo Mensaje de Contacto</h2>
          <p><strong>Nombre:</strong> ${contact.name}</p>
          <p><strong>Empresa:</strong> ${contact.company || "No especificada"}</p>
          <p><strong>Correo electrónico:</strong> ${contact.email}</p>
          <p><strong>Teléfono:</strong> ${contact.phone}</p>
          <p><strong>Asunto / Servicio:</strong> ${contact.service}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 6px;">
            <p style="margin: 0; font-weight: bold;">Mensaje:</p>
            <p style="margin-top: 5px; white-space: pre-wrap;">${contact.message}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #666; text-align: center;">Este correo fue enviado desde el formulario de la landing page.</p>
        </div>
      `,
    });

    // 👇 AGREGA ESTOS LOGS PARA VER QUÉ RESPONDE RESEND
  console.log("Respuesta de Resend Data:", data);
  console.log("Respuesta de Resend Error:", error);

    if (error) {
      console.log(error);
      throw new Error("No se pudo enviar el correo de contacto");
    }
    return data;
  } catch (error) {}
};

export const verifyRecaptcha = async (token: string): Promise<boolean> => {
  try {
    const secretKey = ENV.RECAPTCHA.SECRET_KEY; // O desde tu config
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: secretKey,
          response: token,
        },
      },
    );
    console.log(response.data)
    return response.data.success;
  } catch (error) {
    console.error("Error al verificar reCAPTCHA con Google:", error);
    return false;
  }
};
