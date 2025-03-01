import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}', // Expo Router files
    './components/**/*.{ts,tsx}', // Reusable components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
