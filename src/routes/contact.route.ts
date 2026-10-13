import { Router } from "express";
import { ValidationMiddleware } from "../middlewares";
import { contactSendEmailSchema } from "../schemas";
import { ContactController } from "../controllers";

const router = Router();

router.post(
  "/send-email",
  ValidationMiddleware.validateSchema(contactSendEmailSchema),
  ContactController.sendEmail,
);

export default router;
