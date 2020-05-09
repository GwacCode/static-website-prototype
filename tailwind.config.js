module.exports = {
  theme: {
    extend: {
      colors: {
        "gw-blue": "#2990b5",
        "gw-blue-dark": "#2384a7",
        "gw-blue-darker": "#104354",
        "gw-yellow": "#f9d35b",
        "facebook-blue": "#4267b2",
        "vimeo-blue": "#00adef",
      },
      // fontSize: {
      //   "7xl": "5rem",
      // },
      opacity: {
        "85": "0.85",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
