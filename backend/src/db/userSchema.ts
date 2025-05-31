import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  varchar,
} from "drizzle-orm/pg-core";

export const userRoleEnum = pgEnum("user_role", ["user", "creator", "admin"]);

export const usersTable = pgTable("users", {
  _id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  bio: varchar({ length: 255 }).default("I'm a new user!"),
  image: varchar({ length: 255 }).default("https://example.com/avatar.jpg"),
  role: userRoleEnum("role").notNull().default("user"),
  isVerified: boolean().notNull().default(false),
  createdAt: integer().notNull().default(Date.now()),
});
