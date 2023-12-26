/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        medium: "Open Sans Medium",
        bold: "Open Sans Bold",
        semibold: "Open Sans SemiBold",
        light: "Open Sans Light",
        regular: "Open Sans",
      },
    },
  },
  plugins: [],
};
