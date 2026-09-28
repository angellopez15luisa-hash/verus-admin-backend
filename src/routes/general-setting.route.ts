import { Router } from "express";
import { UserMiddleware, ValidationMiddleware } from "../middlewares";
import { GeneralSettingController } from "../controllers";
import { generalSettingUpdateSchema } from "../schemas";

const router = Router();

router.get("/public", GeneralSettingController.getData);

router.use(UserMiddleware.verifyToken);

router.get("/", GeneralSettingController.getData);

router.patch(
  "/:id",
  ValidationMiddleware.validateSchema(generalSettingUpdateSchema),
  GeneralSettingController.update,
);

export default router;
