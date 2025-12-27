import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        heading: 'rgb(var(--color-heading) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Unbounded', 'sans-serif'],
      },
      fontSize: {
        base: 'var(--text-base-size)',
        sm: 'var(--text-sm-size)',
        lg: 'var(--text-lg-size)',
        'h1': 'var(--heading-1-size)',
        'h2': 'var(--heading-2-size)',
        'h3': 'var(--heading-3-size)',
        'h4': 'var(--heading-4-size)',
        'h5': 'var(--heading-5-size)',
        'h6': 'var(--heading-6-size)',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
