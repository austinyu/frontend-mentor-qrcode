/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        'f-paragraph': '15px'
      },
      colors: {
        white: 'hsl(0, 0%, 100%)',
        slate: {
          300: 'hsl(212, 45%, 89%)',
          500: 'hsl(216, 15%, 48%)',
          900: 'hsl(218, 44%, 22%)'
        }      
      },
      borderRadius: {
        '10': '10px',
        '20': '20px',
      }
    },
  },
  plugins: [],
}

