import express, { Request, Response, NextFunction } from "express";
import fs from "fs";
import morgan from "morgan";
import colors from "colors";
import cors from "cors";
import { corsConfig } from "./config";
import userRoutes from "./routes/user.route";
import generalSettingRoutes from "./routes/general-setting.route";
import { CustomError } from "./types";

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors(corsConfig));
app.use(morgan("dev"));

app.use(express.json());

const antiCacheMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.setHeader(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate",
  );
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  next();
};

app.use("/api/users", antiCacheMiddleware, userRoutes);
app.use("/api/general-settings", antiCacheMiddleware, generalSettingRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("¡Ruta no encontrada!");
});

app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  if (req.file && req.file.path) {
    fs.unlink((req as any).file.path, (unlinkErr) => {
      if (unlinkErr)
        console.error("Error borrando archivo huérfano:", unlinkErr);
    });
  }

  const status = err.status || 500;
  const message = err.message || "Error interno del servidor";

  console.error(colors.red.bold(`[Error del servidor]: ${message}`));

  res.status(status).json({
    // error: true,
    success: false,
    status,
    message,
    // stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});

export default app;
