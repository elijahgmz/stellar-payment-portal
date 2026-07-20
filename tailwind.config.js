/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          900: '#1e1b4b',
        },
        cinema: {
          gold: '#f59e0b',
          dark: '#0f172a',
          card: 'rgba(30, 41, 59, 0.7)',
        }
      }
    },
  },
  plugins: [],
}
