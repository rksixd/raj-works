import img from "./public/curser.svg"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {


    extend: {

      cursor: {
        default: "url(https://play.tailwindcss.com/favicons/favicon-16x16.png?v=3)",
        pointer: "url(/curser.svg)"
        // 'fancy' : "url('./public/curser.svg'), pointer"
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        backgroundColor: {
            'gradient-custom': 'linear-gradient(92.33deg, rgba(255, 255, 255, 0.08) -0.39%, rgba(255, 255, 255, 0.02) 102.66%)',
          }

      },
      fontFamily: {
        "bungee" : ["var(--font-bungee)"],
        "nunito" : ["var(--font-nunito)"],
        "poppins" : ["var(--font-poppins)"],
        "fontspring":["var(--font-fontspring)"],
        "fontspringNormal":["var(--font-fontspring-normal)"]
      }
    },
  },
  plugins: [],
};
