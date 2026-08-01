/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#163E64',
          700: '#1F5183',
        },
        sky: {
          50: '#EEF8FF',
          100: '#DCEFFC',
          200: '#BFE4F7',
          300: '#82CBF2',
          400: '#4FC3F7',
          500: '#1FA6E0',
          600: '#0B6FA3',
          700: '#075985',
        },
        cream: {
          50: '#FEF7E9',
        },
        slate: {
          100: '#EEF2F6',
          200: '#DCE3EA',
          300: '#C7D1DB',
          400: '#B8C4D0',
          500: '#8A97A6',
          600: '#64707E',
          700: '#47515D',
        },
        ink: {
          900: '#14181C',
        },
        paper: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '72ch',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
      boxShadow: {
        soft: '0 1px 2px 0 rgba(22,62,100,0.04), 0 1px 3px 0 rgba(22,62,100,0.06)',
        elevated: '0 8px 24px -6px rgba(22,62,100,0.14), 0 4px 10px -4px rgba(22,62,100,0.10)',
        focus: '0 0 0 3px rgba(31,166,224,0.35)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
