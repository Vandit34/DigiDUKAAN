/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(#ADD8E6, #FFDAB9)',
        'gradient-linear': 'linear-gradient(to right, #89f7fe, #66a6ff)'
      }),
      fontFamily: {
        brandFont: ['Exo 2', 'sans-serif']
      },
      screens: {
        customScreen1: '460px',
        customScreen2: '747px',
        customScreen3:"1070px",
        
      }
    }
  },
  variants:{},
  plugins: [require('@tailwindcss/typography')]
}
