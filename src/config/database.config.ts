import { Sequelize } from "sequelize";
import "dotenv/config";
import { User, initUserModel } from "../models";
import { ENV } from "./env.config";

const dbConfig = require("../../db/config");

const env = ENV.NODE.NODE_ENV;

const config = (dbConfig as any)[env];

if (!config) {
  throw new Error(`No se encontro la confguracion para el entorno: ${env}`);
}

const dbConnection = new Sequelize(ENV.DB.NAME, ENV.DB.USER, ENV.DB.PASSWORD, {
  host: ENV.DB.HOST,
  dialect: ENV.DB.DIALECT as any,
  logging: ENV.DB.LOGGING,
  timezone: ENV.DB.TIMEZONE,
  dialectOptions: ENV.DB.DIALECTOPTIONS,
  define: {
    underscored: ENV.DB.UNDERSCORED,
  },
});

initUserModel(dbConnection)

const models = {
    User
}

Object.values(models).forEach((model: any) => {
     if (typeof model.associate === 'function') {
        model.associate(models)
    } 
})

export type DBModels = typeof models

export { dbConnection, User }

export const testConnection = async () => {
  try {
    await dbConnection.authenticate();
    console.log("¡Conexión a la base de datos establecida exitosamente!");

    // await sequelize.sync({ alter: true });
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
};