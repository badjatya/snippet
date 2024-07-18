"use server";

import { db } from "@/server/db";
import { Tag } from "@/server/schema";
import { desc, eq } from "drizzle-orm";

type NewTagType = typeof Tag.$inferInsert;

export const createTag = async ({ name, userId }: NewTagType) => {
	return db.insert(Tag).values({ name, userId }).execute();
};

export const getAllTags = async () => {
	return db
		.select({
			name: Tag.name,
		})
		.from(Tag)
		.orderBy(desc(Tag.createdAt));
};

export const getAllUserTags = async (userId: string) => {
	return db
		.select({
			name: Tag.name,
		})
		.from(Tag)
		.where(eq(Tag.userId, userId))
		.orderBy(desc(Tag.createdAt));
};
