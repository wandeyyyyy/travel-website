/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/images/firstimg.png')",
      }),
      colors: {
        custom: {
      navcolor: '#FFA500',
      navhover: '#0336FF',
      facebook: '#4056AC',
      twitter: '#60B7FE',
      youtube: '#FE2C3C',
      instagram: '#E14D93',
      }
    }
    },
  },
  plugins: [],
}

