/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
    './src/**/*.{html,js,}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EDB11F',
        secondary: '#FF0051',
        other: '#250F98',
        'other-light': ' #b0a2f6',
        plight: '#f4cf71',
        plighter: '#f8dfa0',
        // danger: '#3311BD',
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

