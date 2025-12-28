import { z } from 'zod';

export const reviewSchema = z.object({
  id: z.string(),
  name: z.string(),
  age: z.number(),
  location: z.string(),
  text: z.string(),
  sex: z.enum(['male', 'female']),
  avatar: z.string().optional(),
  translated: z.boolean().optional(),
});

export type ReviewProps = z.infer<typeof reviewSchema>;
