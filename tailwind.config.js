/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/client/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f2f5fc',
        secondary: '#4F46E5',
        secondaryHover: '#4039bd',
        fontPrimary: '#111827',
        fontSecondary: '#F5F3FF',
        fontHover: '#4F46E5',
        fontError: '#EF4444',
      },
      margin: {
        centerScreen: '25vh',
      },
      maxHeight: {
        '75vh': '75vh',
      },
    },
  },
  plugins: [],
};
