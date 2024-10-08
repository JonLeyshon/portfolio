/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F28C43",
        primaryDark: "#D97837", // Darker variant of the primary color
        secondary: "#EF9B5D",
      },
      animation: {
        bounce: "bounce 1.5s infinite",
      },
      keyframes: {
        bounce: {
          "0%, 20%, 50%, 80%, 100%": {
            transform: "translateY(0)",
          },
          "40%": {
            transform: "translateY(-10px)",
          },
          "60%": {
            transform: "translateY(-5px)",
          },
        },
      },
    },
  },
  plugins: [],
};
