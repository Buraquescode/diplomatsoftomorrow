/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#071510",
          900: "#0B2118",
          800: "#0F2B20",
          700: "#153A2B",
        },
        gold: {
          DEFAULT: "#D4AF37",
          400: "#E6C158",
          500: "#D4AF37",
          600: "#B8952E",
        },
        champagne: "#F0D896",
        offwhite: "#F5F5F0",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(circle at 20% 20%, rgba(212,175,55,0.2), transparent 40%), radial-gradient(circle at 80% 0%, rgba(240,216,150,0.15), transparent 40%), radial-gradient(circle at 50% 80%, rgba(11,33,24,0.6), transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(212,175,55,0.25)",
      },
    },
  },
  plugins: [],
};