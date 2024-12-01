module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Specify files to scan for classes
  darkMode: "class", // 'media' or 'class'
  theme: {
    extend: {}, // Customize theme
  },
  variants: {
    extend: {
      // Example: Enable additional variants for specific utilities
      backgroundColor: ["active", "hover"],
      textColor: ["focus"],
    },
  },
  plugins: [],
};
