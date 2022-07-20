/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'proj-yel': '#ffc800',
      },
      screens: {
        "sm": "360px",
        "md": "768px",
        "lg": "1024px",
      },
      fontFamily: {
        'Roboto' : ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
};
