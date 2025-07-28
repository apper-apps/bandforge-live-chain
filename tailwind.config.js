/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF006E',
        secondary: '#3A0CA3',
        accent: '#FFBE0B',
        surface: '#1A1A2E',
        background: '#0F0F1E',
        success: '#00F5A0',
        warning: '#F7931E',
        error: '#D00000',
        info: '#00B4D8',
      },
      fontFamily: {
        'righteous': ['Righteous', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      boxShadow: {
        'neon-pink': '0 0 20px rgba(255, 0, 110, 0.3)',
        'neon-purple': '0 0 20px rgba(58, 12, 163, 0.3)',
        'neon-yellow': '0 0 20px rgba(255, 190, 11, 0.3)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'name-reveal': 'name-reveal 0.5s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 0, 110, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 0, 110, 0.5)' },
        },
        'name-reveal': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}