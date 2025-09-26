import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form schema for validation
export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;

// Project schema for portfolio projects
export const projectSectionSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  fullDescription: z.string(),
  image: z.string(), // Will be import path reference
  tags: z.array(z.string()),
  category: z.string(),
  client: z.string(),
  year: z.string(),
  duration: z.string(),
  role: z.string(),
  team: z.array(z.string()),
  challenge: z.string(),
  solution: z.string(),
  outcome: z.string(),
  sections: z.array(projectSectionSchema),
});

export type Project = z.infer<typeof projectSchema>;
export type ProjectSection = z.infer<typeof projectSectionSchema>;
