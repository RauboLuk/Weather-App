module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        bg: "376px",
      },
      width: {
        30: "7.5rem",
        82: "20.5rem",
      },
      minHeight: {
        40: "10rem",
      },
      colors: {
        navyBlue: {
          light: "#1E213A",
          dark: "#100E1D",
          text: "#616475",
        },
        blue1: "#3C47E9",
        gray: {
          light: "#E7E7EB",
          dark: "#6E707A",
          border: "#616475",
          text1: "#A09FB1",
          text2: "#88869D",
        },
        yellow: {
          progress: "#FFEC65",
        },
      },
      fontFamily: {
        rale: ["Raleway"],
        mon: ["Montserrat"],
      },
      fontSize: {
        "10xl": "9rem",
      },
      gridTemplateRows: {
        layout: "repeat(2, minmax(0, max-content)) 1fr",
      },
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
  },
  plugins: [],
};
