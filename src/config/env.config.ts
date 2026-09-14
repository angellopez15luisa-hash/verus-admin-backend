import "dotenv/config";

export const ENV = {
  SERVER: {
    PORT: process.env.PORT,
  },
  DB: {
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    NAME: process.env.DB_NAME,
    DIALECT: process.env.DB_DIALECT,
    TIMEZONE: process.env.DB_TIMEZONE,
    LOGGING: process.env.DB_LOGGING ? process.env.DB_LOGGING === 'true' : false,
    DIALECTOPTIONS: {
      dateStrings: true,
    },
    UNDERSCORED: process.env.DB_UNDERSCORED ?  process.env.DB_UNDERSCORED === 'true':false,
  },
  NODE: {
    NODE_ENV: process.env.NODE_ENV,
  },
  JWT: {
    SECRET: process.env.JWT_SECRET,
    EXPIRES_IN: process.env.EXPIRES_IN,
  },
  RESEND: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
  CLOUDINARY: {
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  },
};
