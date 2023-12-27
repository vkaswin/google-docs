/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderColor: {
        gray: "#C4C7C5",
      },
      outlineColor: {
        "dark-blue": "#0b57d0",
        "dark-gray": "#747775",
      },
      backgroundColor: {
        gray: "#C4C7C5",
        "dark-gray": "#8E918F",
        "light-blue": "#D3E3FD",
        "mild-blue": "#EDF2FA",
        "light-silver": "#f9fbfd",
      },
      textColor: {
        "dark-gray": "#444746",
        "light-green": "#4eac6e",
      },
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
