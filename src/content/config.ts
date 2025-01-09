import { defineCollection, z } from "astro:content";

// Post collection schema
const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    unlisted: z.boolean().default(false),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    bestOf: z.boolean().default(false),
  }),
});

// Projects collection schema
const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    url: z.string().url(),
    users: z.number().default(0),
    isActive: z.boolean().default(true),
    order: z.number(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
};
