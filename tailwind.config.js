/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        'dark-blue':'#224279',
        'light-blue':'#BCDCF5'
      }
    },
    fontFamily : {
      roboto:["Roboto","sans-serif"]
    }

    
  },
  plugins: [],
}