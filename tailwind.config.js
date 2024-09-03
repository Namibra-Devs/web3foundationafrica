/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#03045e',
        secondary: '#023e8a',
        other: '#0077b6',
        plight: '#00b4d8',
        plighter: '#48cae4',
        danger: '#DC063F',
      },
      fontFamily: {
        inter: 'Inter, sans-serif',
        merriweather: 'Merriweather, serif',
        mono: 'Menlo, monospace',
        sans: 'sans-serif',
      },
    },
  },
  plugins: [],
}

