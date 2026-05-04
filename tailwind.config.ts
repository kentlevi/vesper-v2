/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./*.vue",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0a0a0a',
          surface: '#151515',
          surfaceLight: '#2a2a2a',
          gold: '#c5a47e',
          goldHover: '#d5b48e',
          text: '#e5e5e5',
          muted: '#888888'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
