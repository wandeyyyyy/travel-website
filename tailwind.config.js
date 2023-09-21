/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","about.html","index.js","./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/images/firstimg.png')",
        'laptop-girl': "url('/images/lapgirl.png')",
        'about-us': "url('/images/aboutBg.png')",
        
      }),
      colors: {
        custom: {
      navcolor: '#FFA500',
      navhover: '#0336FF',
      facebook: '#4056AC',
      twitter: '#60B7FE',
      youtube: '#FE2C3C',
      instagram: '#E14D93',
      hr: "#c4c4c4",
      }
    }
    },
  },
  plugins: [],
}

