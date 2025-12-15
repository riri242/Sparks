/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", "ui-sans-serif", "system-ui"],
      },
      letterSpacing: {
        tightest: "-0.035em",
        tighter: "-0.025em",
        subtle: "-0.015em",
      },
      lineHeight: {
        relaxedPlus: "1.75",
      },
    },
  },
  plugins: [],
};
