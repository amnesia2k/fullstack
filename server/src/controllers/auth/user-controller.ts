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

    // validate user input
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

    // checks if user already exists
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

    // creates a new user
    const createdUser = await db
      .insert(usersTable)
      .values({
        _id: createId(),
        name,
        email,
        password: hashedPassword,
      })
      .returning();

    const { password: _, ...user } = createdUser[0];

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
    console.error("Error registering new user:", error);
    res.status(500).json({ message: "Server error, try again later" });
    return;
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // validate user input
    if (!email || !password) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const user = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (user.length === 0) {
      res.status(400).json({ message: "User not found" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user[0].password);

    if (!isPasswordValid) {
      res.status(400).json({ message: "Invalid password" });
      return;
    }

    const { password: _, ...userWithoutPassword } = user[0];

    const token = generateToken(userWithoutPassword._id);

    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
      sameSite: true,
      secure: true,
    });

    res.status(200).json({
      message: "User logged in successfully",
      ...userWithoutPassword,
      token,
    });
    return;
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Server error, try again later" });
    return;
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await db.select().from(usersTable);

    // Remove password field from each user
    const usersWithoutPassword = users.map(({ password, ...user }) => user);

    res.status(200).json({
      message: "All Users fetched successfully!",
      users: usersWithoutPassword,
    });
    return;
  } catch (error) {
    console.error("Error fetching all users:", error);
    res.status(500).json({ message: "Server error, try again later" });
    return;
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable._id, id));

    const userWithoutPassword = user.map(({ password, ...user }) => user);

    res.status(200).json({
      message: "User fetched successfully!",
      user: userWithoutPassword[0],
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Server error, try again later" });
    return;
  }
};
