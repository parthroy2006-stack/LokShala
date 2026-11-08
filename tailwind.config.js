/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#245B45',
          dark: '#1A4333',
          light: '#2D7256',
          muted: '#366E58',
        },
        cream: {
          DEFAULT: '#F8F7F2',
          dark: '#EFECE2',
          light: '#FAF9F6',
        },
        sage: {
          DEFAULT: '#E5EFE7',
          dark: '#D0E3D3',
          light: '#F2F7F3',
        },
        terracotta: {
          DEFAULT: '#C87552',
          dark: '#B06140',
          light: '#D78C6D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(36, 91, 69, 0.08)',
        'card': '0 2px 12px -1px rgba(36, 91, 69, 0.06)',
      }
    },
  },
  plugins: [],
}
