import { z } from 'zod';

export const advantageSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
  secondaryDescription: z.string().optional(),
});

export const advantagesListSchema = z.object({
  items: z.array(advantageSchema),
});

export type AdvantageProps = z.infer<typeof advantageSchema>;
export type AdvantagesListProps = z.infer<typeof advantagesListSchema>;
