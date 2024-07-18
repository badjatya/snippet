import { relations } from "drizzle-orm";
import {
	pgTable,
	varchar,
	serial,
	timestamp,
	pgEnum,
	integer,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["admin", "user"]);

export const User = pgTable("User", {
	id: serial("id").primaryKey(),
	clerkId: varchar("clerk_id", { length: 150 }).notNull(),
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

export const UserRelation = relations(User, ({ many }) => ({
	tags: many(Tag),
}));

export const Tag = pgTable("Tag", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 150 }).notNull().unique(),
	userId: integer("user_id")
		.notNull()
		.references(() => User.id),
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

export const TagRelations = relations(Tag, ({ one }) => ({
	user: one(User, {
		fields: [Tag.userId],
		references: [User.id],
	}),
}));
