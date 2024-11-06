/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: '#6366f1',
          secondary: '#4f46e5',
          dark: {
            DEFAULT: '#0f172a',
            lighter: '#1e293b'
          }
        },
        animation: {
          'gradient': 'gradient 8s linear infinite',
          'pattern': 'pattern 15s linear infinite',
          'blob': 'blob 7s infinite',
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
        }
      },
    },
    plugins: [],
  };