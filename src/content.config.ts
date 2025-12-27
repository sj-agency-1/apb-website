import { defineCollection, z } from 'astro:content';
// import { cardSchema } from '@components/schemas/card.ts';
// import { pageSchema } from '@components/schemas/page.ts';
// import { glob } from 'astro/loaders';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  blogCollection: blog,

  // todo: define post schema using similar approach
  // pages: defineCollection({
  //   type: 'content',
  //   schema: pageSchema,
  // }),
  // layouts: defineCollection({
  //   type: 'data',
  //   schema: pageSchema,
  // }),
  // records: defineCollection({
  //   type: 'data',
  //   schema: cardSchema,
  // }),
};

// const blog = defineCollection({
//   // Load Markdown and MDX files in the `src/content/blog/` directory.
//   loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
//   // Type-check frontmatter using a schema
//   schema: ({ image }) =>
//     z.object({
//       title: z.string(),
//       description: z.string(),
//       // Transform string to Date object
//       pubDate: z.coerce.date(),
//       updatedDate: z.coerce.date().optional(),
//       heroImage: image().optional(),
//     }),
// });

// export const collections = { blog };
