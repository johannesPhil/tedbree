module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "jb-blue": "#0F4A7B",
        "jb-blue-light": "#62BECB",
        "jb-red": "#EA5566",
        "jb-red-light": "#F57D7D",
        "jb-pink": "#FFEDED",
        "jb-text": "#3E3E40",
        "jb-card": "rgba(98, 190, 203, 0.15)",
      },
      shadows: {
        card: "0 4px 17px 0 rgba(98, 190, 203, 0.15)",
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        gilroyReg: ["Gilroy-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
