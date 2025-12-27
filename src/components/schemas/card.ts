import { z } from 'astro:content';
import { badgeSchema } from './badge.ts';
import { buttonSchema } from './button.ts';
import { channelSchema } from './channel.ts';
import { imageSchema } from './image.ts';
import { linkSchema } from './link.ts';
import { logoSchema } from './logo.ts';
import { menuSchema } from './menu.ts';
import { proofSchema } from './proof.ts';

export const cardSchema = z
  .object({
    target: z.string().optional(),
    href: z.string().optional(),
    order: z.number().optional(),
    dark: z.boolean().optional(),
    text: z.string().optional(),
    content: z.string().optional(),
    badge: badgeSchema.optional(),
    tagline: z.string().optional(),
    heading: z.string().optional(),
    paragraph: z.string().optional(),
    list: z.string().array().optional(),
    socials: z.string().array().optional(),
    logo: logoSchema.optional(),
    link: linkSchema.optional(),
    links: linkSchema.array().optional(),
    menus: menuSchema.array().optional(),
    badges: z.string().array().optional(),
    button: buttonSchema.optional(),
    buttons: buttonSchema.array().optional(),
    image: imageSchema.optional(),
    images: imageSchema.array().optional(),
    channels: channelSchema.array().optional(),
    proof: proofSchema.optional(),
    price: z.number().optional(),
    icon: z.string().optional(),
    rating: z.number().optional(),
    avatar: imageSchema.optional(),
    avatars: imageSchema.array().optional(),
    soldout: z.boolean().optional(),
  })
  .strict();
