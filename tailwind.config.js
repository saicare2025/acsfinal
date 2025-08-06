module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0668a5',  // Vibrant orange
          dark: '#E06C1E'       // Darker orange
        },
        secondary: {
          DEFAULT: '#2563EB',   // Blue
          dark: '#1D4ED8'       // Darker blue
        }
      },
    },
  },
  plugins: [],
}