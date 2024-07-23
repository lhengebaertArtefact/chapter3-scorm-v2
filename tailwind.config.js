/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgGradientBlue1: '#152C44',
        bgGradientBlue2: '#05111F',
        bordersCyan:'#26E5D3'
      },
    },
  },
  plugins: [],
}

