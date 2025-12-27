import { z } from 'astro:content';
import { channelSchema } from './channel.ts';
import { logoSchema } from './logo.ts';
import { menuSchema } from './menu.ts';

export const footerSchema = z
  .object({
    logo: logoSchema.optional(),
    heading: z.string().optional(),
    paragraph: z.string().optional(),
    socials: z.string().url().array().optional(),
    channels: channelSchema.array().optional(),
    menus: menuSchema.array().optional(),
  })
  .strict();

export type FooterSchema = z.infer<typeof footerSchema>;
