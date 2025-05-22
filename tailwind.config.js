/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'brown': {
          DEFAULT: '#8B5A2B',
          dark: '#5C4B41',
          light: '#A67C52',
        },
        'cream': {
          DEFAULT: '#F5EFE7',
          light: '#FBF7F0',
          dark: '#E2D7CA',
        },
        'accent': {
          DEFAULT: '#D27D2D',
          light: '#E6A96B',
          dark: '#A85A1B',
        },
        'success': {
          DEFAULT: '#4CAF50',
          light: '#81C784',
          dark: '#388E3C',
        },
        'warning': {
          DEFAULT: '#FFC107',
          light: '#FFD54F',
          dark: '#FFA000',
        },
        'error': {
          DEFAULT: '#F44336',
          light: '#E57373',
          dark: '#D32F2F',
        },
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(92, 75, 65, 0.1)',
        'medium': '0 6px 25px rgba(92, 75, 65, 0.15)',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'menu-pattern': "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
    },
  },
  plugins: [],
};