module.exports = {
  content: ["./src/**/*.{tsx,ts,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF5300",
      },
      backgroundImage: {
        place:
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F29C72 100%);",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },

  plugins: [],
};
