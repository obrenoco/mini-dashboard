module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      header: "#c4dae9",
      gray: {
        light: "#20384D",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
