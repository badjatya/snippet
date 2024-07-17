CREATE TABLE IF NOT EXISTS "User" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(150) NOT NULL,
	"role" "role" DEFAULT 'user' NOT NULL,
	"email" varchar(150) NOT NULL,
	"created_at" timestamp (3) DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) DEFAULT now(),
	CONSTRAINT "User_email_unique" UNIQUE("email")
);
