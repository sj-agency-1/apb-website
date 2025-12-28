import { z } from 'zod';

export const bluredDotSchema = z.object({
  /** Dot color in hex format (e.g., 'FFAB24' or '#FFAB24') */
  color: z.string(),
  /** Top position in pixels */
  top: z.number().optional(),
  /** Left position in pixels */
  left: z.number().optional(),
  /** Right position in pixels */
  right: z.number().optional(),
  /** Bottom position in pixels */
  bottom: z.number().optional(),
  /** Width of the dot in pixels (default: 1) */
  width: z.number().optional(),
  /** Height of the dot in pixels (default: 1) */
  height: z.number().optional(),
  /** Shadow blur radius in pixels for the glowing effect (default: 70) */
  shadowBlur: z.number().optional(),
  /** Shadow spread radius in pixels (default: 30) */
  shadowSpread: z.number().optional(),
  /** Opacity of the dot (0 to 1, default: 1) */
  opacity: z.number().min(0).max(1).optional(),
  /** Whether to show on mobile devices (default: true) */
  showOnMobile: z.boolean().optional(),
  /** Z-index of the dot (default: 0, behind content) */
  zIndex: z.number().optional(),
});

export const bluredDotsSchema = z.array(bluredDotSchema);

export type BluredDotProps = z.infer<typeof bluredDotSchema>;
export type BluredDotsProps = BluredDotProps[];
