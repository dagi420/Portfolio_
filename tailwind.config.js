/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          dark: '#4f46e5'
        },
        secondary: {
          DEFAULT: '#4f46e5',
          light: '#6366f1',
          dark: '#3730a3'
        },
        dark: {
          DEFAULT: '#0f172a',
          lighter: '#1e293b',
          surface: '#293548'
        },
        light: {
          DEFAULT: '#f8fafc',
          darker: '#e2e8f0',
          surface: '#f1f5f9'
        }
      },
      boxShadow: {
        'neumorph-light': '10px 10px 20px #d1d9e6, -10px -10px 20px #ffffff',
        'neumorph-dark': '8px 8px 16px #0a0f1c, -8px -8px 16px #141f38',
        'neumorph-inset-light': 'inset 5px 5px 10px #d1d9e6, inset -5px -5px 10px #ffffff',
        'neumorph-inset-dark': 'inset 5px 5px 10px #0a0f1c, inset -5px -5px 10px #141f38',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'pattern': 'pattern 15s linear infinite',
        'blob': 'blob 7s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        pattern: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' }
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)'
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)'
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)'
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)'
          }
        }
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      }
    },
  },
  plugins: [],
};