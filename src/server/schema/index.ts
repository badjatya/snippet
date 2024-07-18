import {
	pgTable,
	varchar,
	serial,
	timestamp,
	pgEnum,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["admin", "user"]);

export const User = pgTable("User", {
	clerkId: varchar("clerk_id", { length: 150 }).primaryKey(),
	name: varchar("name", { length: 150 }).notNull(),
	role: roleEnum("role").notNull().default("user"),
	email: varchar("email", { length: 150 }).notNull().unique(),
	createdAt: timestamp("created_at", { mode: "date", precision: 3 })
		.notNull()
		.defaultNow(),
	updatedAt: timestamp("updated_at", {
		mode: "date",
		precision: 3,
	})
		.defaultNow()
		.$onUpdate(() => new Date()),
});

export const Tag = pgTable("Tag", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 150 }).notNull().unique(),
	userId: varchar("user_id", { length: 150 })
		.notNull()
		.references(() => User.clerkId),
	createdAt: timestamp("created_at", { mode: "date", precision: 3 })
		.notNull()
		.defaultNow(),
	updatedAt: timestamp("updated_at", {
		mode: "date",
		precision: 3,
	})
		.defaultNow()
		.$onUpdate(() => new Date()),
});
