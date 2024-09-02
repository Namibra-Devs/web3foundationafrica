/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#f1c40f',
      },
      fontFamily: {
        // sans: 'sans-serif',
      },
    },
  },
  plugins: [],
}

