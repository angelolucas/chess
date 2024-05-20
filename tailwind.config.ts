import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      check: '#E6AF2E',
      checkmate: '#F71735',
      dark: '#1d363c',
      light: '#5292a0',
      lighter: '#d8d8d8',
      detail: '#00ff00',
    },
  },
  plugins: [],
};
export default config;
