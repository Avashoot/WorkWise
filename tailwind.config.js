/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#507dbc',
        powderBlue: '#a1c6ea',
        richBlack: '#04080f',
        platinum : '#dae3e5',
        columbiaBlue: '#bbd1ea'
      },
      textShadow: {
        outline: '2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff',
      },
      height: {
        'custom-height': '500px',
        'half-screen': '50vh',
      },
    },
  },
  plugins: [],
}

