/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          dark: "#1B2022",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}
