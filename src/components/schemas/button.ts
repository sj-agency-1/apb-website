import { z } from 'zod';

export const buttonSchema = z.object({
  text: z.string(),
  href: z.string().optional(),
  variant: z.enum(['primary', 'secondary', 'outline', 'ghost', 'flat']).optional(),
  size: z.enum(['sm', 'md', 'lg']).optional(),
  icon: z.string().optional(),
});

export type ButtonProps = z.infer<typeof buttonSchema>;
