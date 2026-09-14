import jwt from "jsonwebtoken";
import "dotenv/config";
import { UserGenerateJWT } from "../types";
import { ENV } from "../config";

export const generateJWT = (data: UserGenerateJWT) => {
  const token = jwt.sign(data, ENV.JWT.SECRET, {
    expiresIn: ENV.JWT.EXPIRES_IN as any,
  });
  return token;
};
