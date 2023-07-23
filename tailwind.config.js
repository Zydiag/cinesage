export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'other': {'min': '340px', 'max': '1280px' }
      }
    },
  },
  plugins: [],
}