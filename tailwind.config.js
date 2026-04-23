/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070d08',
        canopy: '#0d1a0f',
        forest: '#1a5c2e',
        emerald: '#2d8a4e',
        leaf: '#4aaa6a',
        fog: '#f5f0eb',
        gold: '#c8a96e',
        'gold-light': '#e0c98a',
        mist: '#1a2a1c',
        ivory: '#ffffff',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
