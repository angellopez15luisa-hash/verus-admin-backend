import { Router } from "express";
import { UserMiddleware, ValidationMiddleware } from "../middlewares";
import {
  userForgotPasswordSchema,
  userResetPasswordSchema,
  userSignInSchema,
  userUpdatePasswordSchema,
  userVerifyResetTokenSchema,
} from "../schemas/user.schema";
import { UserController } from "../controllers";

const router = Router();

router.post(
  "/sign-in",
  ValidationMiddleware.validateSchema(userSignInSchema),
  UserController.signIn,
);

router.get("/profile", UserMiddleware.verifyToken, UserController.getProfile);

router.post(
  "/forgot-password",
  ValidationMiddleware.validateSchema(userForgotPasswordSchema),
  UserController.forgotPassword,
);

router.get(
  "/verify-reset-token/:token",
  ValidationMiddleware.validateSchema(userVerifyResetTokenSchema),
  UserController.verifyResetToken,
);

router.post(
  "/reset-password/:token",
  ValidationMiddleware.validateSchema(userResetPasswordSchema),
  UserController.resetPassword,
);

router.post(
  "/update-password",
  UserMiddleware.verifyToken,
  ValidationMiddleware.validateSchema(userUpdatePasswordSchema),
  UserController.updatePassword,
);

export default router;
