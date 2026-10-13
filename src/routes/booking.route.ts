import { Router } from "express";
import { ValidationMiddleware } from "../middlewares";
import { bookingSendEmailSchema } from "../schemas";
import { BookingController } from "../controllers";

const router = Router();

router.post(
  "/send-email",
  ValidationMiddleware.validateSchema(bookingSendEmailSchema),
  BookingController.sendEmail,
);

export default router;
