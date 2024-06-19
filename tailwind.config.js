/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#001C4A",
      secondary: "#1d92d4",
      tertiary: "#df3e4a",
      white: "#FFFFFF",
      darkblue: "#010404",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        external: ["CeraCondensedPro", "sans-serif"],
      },
      boxShadow: {
        "white-glow": "0 0 10px rgba(255, 255, 255, 0.8)",
      },
    },
  },
  plugins: [],
};
