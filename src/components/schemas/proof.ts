import type { ComponentProps } from 'astro/types';
import { z } from 'astro:content';
import type Proof from '../ui/Proof.astro';
import { imageSchema } from './image.ts';

export const proofSchema = z
  .object({
    rating: z.number().optional(),
    avatars: imageSchema.array().optional(),
    text: z.string().optional(),
  })
  .strict() satisfies z.ZodType<ComponentProps<typeof Proof>>;
