import { z } from 'zod';
import { linkSchema } from './link';

export const footerSchema = z.object({
  logo: z
    .object({
      text: z.string().optional(),
      image: z
        .object({
          src: z.string(),
          alt: z.string().optional(),
        })
        .optional(),
    })
    .optional(),
  socials: z.array(z.string()).optional(),
  copyright: z.string().optional(),
  navGroups: z
    .array(
      z.object({
        links: z.array(linkSchema),
      })
    )
    .optional(),
  legalLinks: z.array(linkSchema).optional(),
});

export type FooterProps = z.infer<typeof footerSchema>;
