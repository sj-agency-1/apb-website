import { z } from 'zod';

export const linkSchema = z.object({
  text: z.string(),
  href: z.string(),
  target: z.enum(['_blank', '_self', '_parent', '_top']).optional(),
  variant: z.enum(['primary', 'underline', 'muted']).optional(),
});

export type LinkProps = z.infer<typeof linkSchema>;
