import type { ComponentProps } from 'astro/types';
import { z } from 'astro:content';
import type Image from '../ui/Image.astro';

const image = z
  .object({
    src: z.string().optional(),
    alt: z.string().optional(),
    width: z.number().optional(),
    height: z.number().optional(),
  })
  .strict() satisfies z.ZodType<ComponentProps<typeof Image>>;

export const imageSchema = z
  .preprocess((data: unknown) => (typeof data === 'string' ? { src: data } : data), image)
  .optional() as z.ZodType<ComponentProps<typeof Image>>;
