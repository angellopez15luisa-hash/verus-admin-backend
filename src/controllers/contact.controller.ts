import { NextFunction, Request, Response } from "express";
import { ContactSendEmailBody, MessageResponse } from "../types";
import { sendContactEmail } from "../helpers";

export class ContactController {
  static sendEmail = async (
    req: Request<{}, {}, ContactSendEmailBody>,
    res: Response<MessageResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      

      await sendContactEmail(req.body);
      res.status(200).json({
        success: true,
        message: "El Email ha sido enviado satisfactoriamente.",
      });
    } catch (error) {
      next(error);
    }
  };
}
