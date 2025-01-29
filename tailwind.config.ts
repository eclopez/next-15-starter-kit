import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      clear: 'transparent',
      black: '#000000',
      white: '#ffffff',
    },
    fontSize: {
      DEFAULT: '1rem',
      caption: ['0.625rem', '0.875rem'],
      'body-sm': ['0.75rem', '1.125rem'],
      'body-sm-compact': ['0.75rem', '1rem'],
      'body-md': ['0.875rem', '1.25rem'],
      'body-md-compact': ['0.875rem', '1.125rem'],
      'body-lg': ['1rem', '1.5rem'],
      'body-lg-compact': ['1rem', '1.25rem'],
      'heading-1': ['2rem', '2.5rem'],
      'heading-2': ['1.5rem', '2rem'],
      'heading-3': ['1.25rem', '1.875rem'],
      'heading-4': ['1.125rem', '1.75rem'],
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)'],
        serif: ['var(--font-roboto-serif)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
