/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "rgb(23, 37, 84)",
        secondary: "#FACC15",
        dark: "#333",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        morph: {
          "0%": {
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          },
          "25%": {
            clipPath: "polygon(70% 0%, 100% 70%, 70% 100%, 0% 70%)",
          },
          "50%": {
            clipPath: "polygon(100% 20%, 80% 100%, 20% 80%, 0% 20%)",
          },
          "75%": {
            clipPath: "polygon(60% 10%, 90% 50%, 60% 90%, 10% 60%)",
          },
          "100%": {
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          },
        },
      },
      animation: {
        morph: "morph 6s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
