module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      logobold: ['Gilroy ExtraBold'],
      logothin: ['Gilroy Light'],
    },
    extend: {},
  },
  variants: {
    extend: {
      cursor: ['hover', 'focus', 'disabled'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
