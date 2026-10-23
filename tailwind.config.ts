import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0F2042",
          "navy-dark": "#091428",
          "navy-light": "#1B3363",
          blue: "#1E3A8A",
          orange: "#F97316",
          "orange-dark": "#EA580C",
          "orange-light": "#FB923C",
          slate: "#F8FAFC",
          gray: "#E2E8F0",
        },
      },
    },
  },
  plugins: [],
};
export default config;
