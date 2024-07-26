/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#efcd59',
      secondary: '#42b883',
      warning: '#e83b9c',
      white: '#efede6',
      black: '#1f1f1f'
    },
    container: {
      center: true,
      screens: {
        sm: `640px`,
        md: `768px`,
        lg: `1024px`,
        xl: `1280px`,
        '2xl': `calc(1536px + 4rem)`
      }
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans]
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'var(--color-neutral-400)',
            iframe: {
              width: '100%',
              height: '100%',
              aspectRatio: '16/9'
            },
            a: {
              color: 'var(--color-secondary-500)',
              '&:hover': {
                color: 'var(--color-secondary-200)'
              }
            }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}
