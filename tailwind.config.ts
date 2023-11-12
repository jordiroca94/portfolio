import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#847963",
        white: "#FFFFFF",
        black: "#000000",
        matteBlack: "#28282B",
        gray: "#808080",
        lightGray: "#E8E9E8",
      },
    },
  },
  plugins: [],
};
export default config;
