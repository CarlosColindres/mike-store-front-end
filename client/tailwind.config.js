module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      screens: {
        mb: 'max-width: 90%',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
