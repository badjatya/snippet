import {
	pgTable,
	varchar,
	serial,
	timestamp,
	pgEnum,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["admin", "user"]);

export const User = pgTable("User", {
	id: serial("id").primaryKey(),
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
