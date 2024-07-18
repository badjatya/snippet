DO $$ BEGIN
 CREATE TYPE "public"."role" AS ENUM('admin', 'user');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "User" (
	"id" serial PRIMARY KEY NOT NULL,
	"clerk_id" varchar(150) NOT NULL,
	"name" varchar(150) NOT NULL,
	"role" "role" DEFAULT 'user' NOT NULL,
	"email" varchar(150) NOT NULL,
	"created_at" timestamp (3) DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) DEFAULT now(),
	CONSTRAINT "User_email_unique" UNIQUE("email")
);
