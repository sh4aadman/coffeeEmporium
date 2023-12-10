/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rancho': 'Rancho, cursive',
        'raleway': 'Raleway, sans-serif'
      },
      backgroundImage: {
        'header': 'url(/src/assets/header.jpg)',
        'hero': 'url(/src/assets/hero.png)',
        'add': 'url(/src/assets/add.png)',
        'footerDetails': 'url(/src/assets/footerDetails.jpg)',
        'footer': 'url(/src/assets/footer.jpg)'
      }
    },
  },
  plugins: [require("daisyui")],
}

