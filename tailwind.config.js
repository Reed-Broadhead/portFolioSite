/** @type {import('tailwindcss').Config} */
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
      
      gray: '#D4D4D8',
      lightgray: "#E4E4E7"
    },
    extend: {},
  },
  plugins: [],
}

