import { z } from 'zod';

export const launchStepSchema = z.object({
  step: z.number(),
  icon: z.string(),
  title: z.string(),
  description: z.string(),
});

export const launchStepsSchema = z.object({
  items: z.array(launchStepSchema),
});

export type LaunchStepProps = z.infer<typeof launchStepSchema>;
export type LaunchStepsProps = z.infer<typeof launchStepsSchema>;
