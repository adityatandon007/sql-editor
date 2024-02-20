module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#228B22",
        bgDark: "#150c36",
        hotGreen: "#2bff2b",
        darkBorder: "#474747",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
