import z from "zod";
import {
  userForgotPasswordSchema,
  userGenerateJWTSchema,
  userResetPasswordSchema,
  userSchema,
  userSignInResponseSchema,
  userSignInSchema,
  userUpdatePasswordSchema,
  userVerifyResetTokenSchema,
} from "../schemas";

export type User = z.infer<typeof userSchema>;

export type UserSignInBody = z.infer<typeof userSignInSchema>["body"];

export type UserGenerateJWT = z.infer<typeof userGenerateJWTSchema>;

export type UserSignInResponse = z.infer<typeof userSignInResponseSchema>;

export type UserForgotPasswordBody = z.infer<
  typeof userForgotPasswordSchema
>["body"];

export type UserVerifyResetToken = z.infer<
  typeof userVerifyResetTokenSchema
>["params"];

export type UserResetPasswordParams = z.infer<
  typeof userResetPasswordSchema
>["params"];

export type UserResetPasswordBody = z.infer<
  typeof userResetPasswordSchema
>["body"];

export type UserUpdatePasswordBody = z.infer<
  typeof userUpdatePasswordSchema
>["body"];
