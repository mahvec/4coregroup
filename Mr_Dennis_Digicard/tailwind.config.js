/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1536px) { ... }
    },
    // extend: {
    //   animation: {
    //     scale: "scale 6s infinite",
    //     scale2: "scale 8s infinite",
    //   },
    //   keyframes: {
    //     scale: {
    //       "0%": { transform: "scale(1)" },
    //       "50%": { transform: "scale(0.5)" },
    //       "100%": { transform: "scale(1)" },
    //     },
    //   },
    // },
  },
  plugins: [],
};
