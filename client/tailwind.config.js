/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'dmsans': ['DM Sans', 'sans-serif'],
      }
    },
    safelist: [
      "bg-orange-600",
      "bg-blue-400",
      "bg-blue-400",
      "bg-blue-400",
      "bg-yellow-500",
      "bg-lime-600",
      "bg-green-400",
      "bg-blue-400",
      "bg-teal-600",
      "bg-cyan-800",
    ],
  },
  plugins: [],
}

