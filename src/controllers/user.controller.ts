import { NextFunction, Request, Response } from "express";
import {
  MessageResponse,
  UserForgotPasswordBody,
  UserResetPasswordBody,
  UserResetPasswordParams,
  UserSignInBody,
  UserSignInResponse,
  UserUpdatePasswordBody,
  UserVerifyResetToken,
} from "../types";
import { UserService } from "../services";

export class UserController {
  static signIn = async (
    req: Request<{}, {}, UserSignInBody>,
    res: Response<UserSignInResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const token = await UserService.signIn(req.body);
      res.status(200).json({
        token,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static getProfile = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const user = req.user;
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      next(error);
    }
  };

  static forgotPassword = async (
    req: Request<{}, {}, UserForgotPasswordBody>,
    res: Response<MessageResponse>,
    next: NextFunction,
  ) => {
    try {
      const message = await UserService.forgotPassword(req.body);
      res.status(200).json({
        message,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static verifyResetToken = async (
    req: Request<UserVerifyResetToken>,
    res: Response<MessageResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      await UserService.verifyToken(req.params.token);
      res.status(200).json({
        message: "Token valido",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static resetPassword = async (
    req: Request<UserResetPasswordParams, {}, UserResetPasswordBody>,
    res: Response<MessageResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const message = await UserService.resetPassword(
        req.params.token,
        req.body.newPassword,
      );
      res.status(200).json({
        message,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static updatePassword = async (
    req: Request<{}, {}, UserUpdatePasswordBody>,
    res: Response<MessageResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const message = await UserService.updatePassword(req.user.id, req.body);
      res.status(200).json({
        message,
        success: true,
      });
    } catch (error) {}
  };
}
