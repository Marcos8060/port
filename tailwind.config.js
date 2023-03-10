/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#0A192F',
      secondary: '#64FFDA',
      tertiary: '#112240',
      white: '#CCD6F6',
      gray: '#8892B0',
      black: '#000000'
     },
  },
  plugins: [],
};
