// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Specify content paths for Tailwind CSS
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#07A3FC', // Define a custom color named customBlue
        customGrey: '#737373', // Define a custom color named customGrey
      },
      screens: {
        'sm': '640px', // Define a custom screen breakpoint for small screens
        'md': '768px', // Define a custom screen breakpoint for medium screens
        'lg': '1024px', // Define a custom screen breakpoint for large screens
        'xl': '1280px', // Define a custom screen breakpoint for extra-large screens
      },
    },
  },
};
