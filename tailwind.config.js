module.exports = {
  theme: {
    extend: {
      colors: {
        "gw-blue-dark": "#1e84a7",
        "gw-blue-darker": "#0f4254",
        "gw-yellow": "#ffd33c",
      },
      fontSize: {
        "7xl": "5rem",
      },
      opacity: {
        "85": "0.85",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
