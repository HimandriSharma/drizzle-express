import { varchar, pgTable, uuid } from "drizzle-orm/pg-core";
export const mySchemaUsers = pgTable("users", {
  id: uuid("id").primaryKey(),
  name: varchar("name").notNull(),
  bio: varchar("bio").notNull(),
});
