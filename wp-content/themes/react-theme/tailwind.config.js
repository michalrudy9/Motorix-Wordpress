/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.php", "./src/**/*.{js,jsx,php}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "color-text": "#D2D3D5",
        "text-dark": "#FCFCFC",
        dark: "#0D0C0C",
        link: "#F56E21",
        link2: "#0A83FF",
        "inverse-link": "#F8F8F8",
        "bg-color": "#0D0D0D",
      },
    },
  },
};
