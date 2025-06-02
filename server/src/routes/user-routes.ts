import express from "express";
import { validateData } from "../middleware/validation-middleware";
import { registerUserSchema } from "../db/schema-validator";
import {
  getAllUsers,
  getUser,
  registerUser,
} from "../controllers/auth/user-controller";

const router = express.Router();

router.post("/register", validateData(registerUserSchema), registerUser);
router.get("/get-users", getAllUsers);
router.get("/user/:id", getUser);

export default router;
