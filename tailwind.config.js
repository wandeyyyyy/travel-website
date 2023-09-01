/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/images/firstimg.png')",
      })
    },
  },
  plugins: [],
}

