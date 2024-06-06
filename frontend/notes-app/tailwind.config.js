/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //colors used in the project
      colors:{
        primary:'#2885ff',
        secondary:'#ef863e',
      },
    },
  },
  plugins: [],
}

