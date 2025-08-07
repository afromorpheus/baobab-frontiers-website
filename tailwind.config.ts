import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Baobab Frontiers Primary Brand Colors
        'baobab': {
          yellow: '#F3EE33',
          gold: '#D09229',
          olive: '#756E33',
          green: '#007628',
          lightGreen: '#A3B3B5',
        },
        // Baobab Frontiers Secondary Colors (Grayscale)
        'baobab-gray': {
          50: '#E2E2E2',
          100: '#C2C2C2',
          200: '#A0A0A0',
          300: '#525252',
          400: '#222222',
        },
        // Legacy color mappings for existing components
        'maize': {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#F3EE33', // Your yellow
          500: '#D09229', // Your gold
          600: '#756E33', // Your olive
          700: '#007628', // Your green
          800: '#A3B3B5', // Your light green
          900: '#1c1917',
        },
        'earth': {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#756E33', // Your olive
          600: '#525252', // Your dark gray
          700: '#44403c',
          800: '#292524',
          900: '#222222', // Your black
        },
      },
      fontFamily: {
        'kannada-bold': ['Kannada MN Bold', 'system-ui', 'sans-serif'],
        'kannada-regular': ['Kannada MN Regular', 'system-ui', 'sans-serif'],
        'nunito-light': ['Nunito Light', 'system-ui', 'sans-serif'],
        sans: ['Nunito Light', 'system-ui', 'sans-serif'], // Default body font
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pebble-bounce': 'pebbleBounce 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pebbleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config; 