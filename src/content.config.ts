import { defineCollection, z } from 'astro:content';

// Shared post schema for blog and advantages
const postSchema = z.object({
  title: z.string(),
  description: z.string().nullable().optional(),
  excerptTitle: z.string().optional(), // Defaults to title if not provided
  excerptDescription: z.string(),
  breadcrumbsTitle: z.string().optional(), // Short title for breadcrumbs, defaults to title
  slug: z.string().optional(), // Custom URL slug, defaults to filename (useful for DecapCMS)
  publishDate: z.coerce.date(),
  heroImage: z.string(),
  tags: z.array(z.string()).default([]),
  isArchive: z.boolean().default(false),
});

const blog = defineCollection({
  type: 'content',
  schema: postSchema,
});

const advantages = defineCollection({
  type: 'content',
  schema: postSchema,
});

export const collections = {
  blog,
  advantages,
};
