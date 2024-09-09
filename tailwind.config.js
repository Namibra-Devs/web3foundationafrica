/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
    './src/**/*.{html,js,}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b7793',
        secondary: '#2090a9',
        other: '#0077b6',
        plight: '#00b4d8',
        plighter: '#48cae4',
        danger: '#de1635',
      },
      fontFamily: {
        inter: 'Inter, sans-serif',
        merriweather: 'Merriweather, serif',
        'space-grotesk': 'Space Grotesk, sans-serif',
        pixelify: 'Pixelify Sans, sans-serif',
        changa: 'Changa,sans-serif',
        mono: 'Menlo, monospace',
        sans: 'sans-serif',
      },
      backgroundImage: {
        meetingImg: "url('/public/images/ug1.jpg')",
      }
    },
  },
  plugins: [],
}

