/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')



module.exports = {
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Serif Thai' , ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          400: '#4CAF50', // แทนด้วยโค้ดสีของคุณ
        },
      },
    },
  },
  plugins: [],
}

