/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B35",
        secondary: "#004643",
        accent: "#F25C05",
        success: "#06D6A0",
        warning: "#FFD166",
        error: "#EF476F",
        info: "#118AB2",
        surface: "#FFFFFF",
        background: "#FAF9F6"
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 15px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}