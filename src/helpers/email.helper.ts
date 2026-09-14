import { Resend } from "resend";
import { ENV } from "../config";
import { User } from "../types";

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
        console.log(error)
      throw new Error("No se pudo enviar el correo de recuperacion");
    }
    return data;
  } catch (error) {
    throw error;
  }
};
