/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#008080",
          dark: "#004d4d", // Darker teal
        },
        coral: {
          DEFAULT: "#FF6F61",
          dark: "#CC5B50", // Darker coral
        },
        lightGray: "#F4F4F4",
        charcoal: "#333333",
        electricBlue: "#1E90FF",
        crimsonRed: "#DC143C",
        mintGreen: "#98FF98",
      },
    },
  },
  plugins: [],
};
