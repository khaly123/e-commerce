/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#780000',
        secondary: '#c1121f',
        beige: '#fdf0d5',
        navy: '#003049',
        sky: '#669bbc',
      },
    },
  },
  plugins: [],
}