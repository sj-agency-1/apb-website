import { z } from 'zod';
import { linkSchema } from './link';
import { buttonSchema } from './button';

export const headerSchema = z.object({
  logo: z
    .object({
      text: z.string().optional(),
      image: z
        .object({
          src: z.string(),
          alt: z.string().optional(),
          height: z.number().optional(),
          width: z.number().optional(),
        })
        .optional(),
    })
    .optional(),
  nav: z.array(linkSchema).optional(),
  mobileNav1: z.array(linkSchema).optional(),
  mobileNav2: z.array(linkSchema).optional(),
  action: buttonSchema.optional(),
  lang: z.boolean().optional(),
});

export type HeaderProps = z.infer<typeof headerSchema>;
