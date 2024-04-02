/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      green: '#122F21',
      lightgreen: '#143A2A',
      white: '#F0F0F0',
      brown: '#C9C3A2',
      // gray: '#20211E',
      lightgray: '#D4D4D8',
      darkgray: '#D4AC12',
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.red,
      blue:colors.blue,
      yellow:colors.amber,
      purple:colors.purple,
      green:colors.green,
    },
	fontFamily: { 
		body: ['Felix' ],
		title: ['Cinzel']
	},

    extend: {},
  },
  plugins: [],
}

