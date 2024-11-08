import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
    borderWidth: {
      DEFAULT: '0',
      '1': '1px',
      '2': '2px',
    },
  },
  plugins: [],
};
export default config;
