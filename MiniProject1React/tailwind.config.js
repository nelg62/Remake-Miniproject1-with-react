/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#CFE2FF", // Light Blue Background
          paper: "#FFFFFF", // White Paper Background for forms/cards
        },
        primary: {
          DEFAULT: "#1E3A8A", // Navy Blue
          light: "#3B82F6", // Lighter Blue for hover states
          dark: "#1E40AF", // Darker Blue for active states
        },
        secondary: {
          DEFAULT: "#FF6B6B", // Coral
          light: "#FF7F7F", // Lighter Coral for accents
          dark: "#E55A5A", // Darker Coral for hover/active states
        },
        accent: {
          DEFAULT: "#FFD166", // Soft Yellow
          light: "#FFE59D", // Lighter Yellow for highlights
          dark: "#E6B85C", // Darker Yellow for emphasis
        },
        text: {
          primary: "#333333", // Dark Gray for primary text
          secondary: "#4B5563", // Gray for secondary text
          light: "#FFFFFF", // White text for dark backgrounds
        },
        neutral: {
          light: "#F3F4F6", // Light Gray for backgrounds
          DEFAULT: "#A0AEC0", // Neutral Gray for borders and dividers
          dark: "#6B7280", // Dark Gray for subdued text
        },
        success: {
          DEFAULT: "#48BB78", // Mint Green for success messages
          light: "#68D391",
          dark: "#38A169",
        },
        error: {
          DEFAULT: "#E53E3E", // Crimson Red for error messages
          light: "#F56565",
          dark: "#C53030",
        },
      },
    },
  },
  plugins: [],
};
