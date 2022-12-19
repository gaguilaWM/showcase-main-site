/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
      xxl: '1536px',
      xxxl: '1920px'
    },
    extend: {
      colors: {
        wbdBlue: '#0022AF',
        darkGrey: '#333333'
      },
    },
  },
  plugins: [],
}
