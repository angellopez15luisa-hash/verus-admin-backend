import { NextFunction, Request, Response } from "express";
import { BookingSendEmailBody, MessageResponse } from "../types";
import { sendBookingEmail } from "../helpers";

export class BookingController {
  static sendEmail = async (
    req: Request<{}, {}, BookingSendEmailBody>,
    res: Response<MessageResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      await sendBookingEmail(req.body);
      res.status(200).json({
        success: true,
        message: "El Email ha sido enviado satisfactoriamente.",
      });
      console.log(req.body);
    } catch (error) {
      next(error);
    }
  };
}
