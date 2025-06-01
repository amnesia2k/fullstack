import express from "express";
import { validateData } from "../middleware/validation-middleware";
import { registerUserSchema } from "../db/schema-validator";
import { registerUser } from "../controllers/auth/user-controller";

const router = express.Router();

router.post("/register", validateData(registerUserSchema), registerUser);

export default router;
