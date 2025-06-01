import { Request, Response } from "express";
import { db } from "../../db/index";
import { usersTable } from "../../db/userSchema";
import { eq } from "drizzle-orm";
import { createId } from "@paralleldrive/cuid2";
import bcrypt from "bcrypt";
import { generateToken } from "../../helpers/generate-token";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    if (password.length < 6) {
      res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
      return;
    }

    // Check if user already exists
    const existingUsers = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (existingUsers.length > 0) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    // TODO: Hash the password before saving it!
    // generate salt
    const salt = await bcrypt.genSalt(10);

    // hash password
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const createdUser = await db
      .insert(usersTable)
      .values({
        _id: createId(),
        name,
        email,
        password: hashedPassword,
      })
      .returning();

    const user = createdUser[0];

    const token = generateToken(user._id);

    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
      sameSite: true,
      secure: true,
    });

    res
      .status(201)
      .json({ message: "User created successfully", ...user, token });

    return;
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json({ message: "Server error, try again later" });
    return;
  }
};
