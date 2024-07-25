/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#00a69c',
      'off-white': '#fff',
      black: '#000'
    },
    extend: {}
  },
  plugins: []
}
