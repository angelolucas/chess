import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      board: {
        'light-square': 'rgba(80, 80, 80, 1)', // Dark gray
        'dark-square': 'rgba(30, 30, 30, 1)', // Very dark gray
        possible: 'rgba(169, 169, 169, 0.5)', // Light gray
        move: 'rgba(149, 255, 0, 0.5)', // Gold
        check: '#806500', // Tomato
        checkmate: '#800000', // Maroon
        'selected-piece': 'rgba(135, 206, 250, 0.5)', // Light sky blue
        'piece-white': '#FFFFFF',
        'piece-black': '#000000',
        'piece-highlight-white': '#D3D3D3', // Light gray
        'piece-highlight-black': '#696969', // Dim gray
        promotion: '#0a0a0a', // Forest green
      },
      ui: {
        background: '#333333', // Dark gray
        borders: '#A9A9A9', // Dark gray
        'buttons-primary': '#4682B4', // Steel blue
        'buttons-secondary': '#B0C4DE', // Light steel blue
        'text-primary': '#F5F5F5', // White smoke
        'text-secondary': '#D3D3D3', // Light gray
      },
      notation: {
        coordinates: '#708090', // Slate gray
        'move-list-default': '#FFFFFF', // White
        'move-list-current': '#FF4500', // Orange red
      },
    },
  },
  plugins: [],
};
export default config;
