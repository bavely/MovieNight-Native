import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}", // Expo Router files
    "./components/**/*.{ts,tsx}", // Reusable components
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
