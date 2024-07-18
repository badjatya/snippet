"use server";

import { db } from "@/server/db";
import { User } from "@/server/schema";

type NewUser = typeof User.$inferInsert;

export const createUser = async ({ name, email, clerkId }: NewUser) => {
	return db
		.insert(User)
		.values({
			name,
			email,
			clerkId,
		})
		.returning({ insertedId: User.id });
};
