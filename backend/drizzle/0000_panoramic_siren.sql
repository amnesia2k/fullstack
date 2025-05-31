-- CREATE TYPE "public"."user_role" AS ENUM('user', 'creator', 'admin');--> statement-breakpoint
CREATE TABLE "users" (
	"_id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users__id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"bio" varchar(255) DEFAULT 'I''m a new user!',
	"image" varchar(255) DEFAULT 'https://example.com/avatar.jpg',
	"role" "user_role" DEFAULT 'user' NOT NULL,
	"isVerified" boolean DEFAULT false NOT NULL,
	"createdAt" integer DEFAULT 1748708777494 NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
