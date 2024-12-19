/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {
      borderRadius: {
        '80p': '80%',
      },  
    },
  },
  plugins: [],
}

