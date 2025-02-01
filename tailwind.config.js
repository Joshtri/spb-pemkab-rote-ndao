/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add the Flowbite components to the content sources
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    // "./node_modules/flowbite-react/**/*.js", // Tambahkan ini

  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Add the Flowbite plugin
    require('flowbite/plugin')
  ],
}