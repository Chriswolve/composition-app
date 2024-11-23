/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme'
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Use 'media' for system-based preferences
  theme: {
    fontFamily: {
      sans: ['Airbnb Cereal', ...fontFamily.sans], // Add your custom font
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.9rem', '1.20rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.5rem', '2rem'],
      custom: ['2.5rem', '3rem'],
    },

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        black: '#1d1d1d'
      },

    },
  },
  plugins: [],
}

