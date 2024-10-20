/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'dark-white': '#cccccc',
        'normal-red': '#f73d3d',
        'normal-white': '#ffffff',
        'dark-black': '#0f1119',
        'normal-black': '#1d1f2b',
      },
    },
  },
  plugins: [],
}

