/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./public/index.html'
  ],
  darkMode: false,
  theme: {
    colors: {
      primary: '#3498db',
      secondary: '#2ecc71',
        },
    extend: {
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
    },
    },
  },
  plugins: [],
}
