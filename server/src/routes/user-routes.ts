import express from "express";
import { validateData } from "../middleware/validation-middleware";
import { loginUserSchema, registerUserSchema } from "../db/schema-validator";
import {
  getAllUsers,
  getUser,
  loginUser,
  registerUser,
} from "../controllers/auth/user-controller";

const router = express.Router();

router.post("/register", validateData(registerUserSchema), registerUser);
router.post("/login", validateData(loginUserSchema), loginUser);
router.get("/users", getAllUsers);
router.get("/user/:id", getUser);

export default router;
