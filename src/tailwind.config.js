/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E90FF',
        accent: '#FFD700',
        secondary: '#32CD32',
        background: '#F0F8FF',
      },
    },
  },
  plugins: [],
}
