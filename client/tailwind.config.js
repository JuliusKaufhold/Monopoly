/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'questionMark' : "url('../public/icons8-fragezeichen-100.png')",
        'questionMarkLeft' : "url('../public/icons8-fragezeichen-100-left.png')",
        'chest' : "url('../public/icons8-schatztruhe-64.png')",
        'chestLeft' : "url('../public/icons8-schatztruhe-64-left.png')",
        'chestRight' : "url('../public/icons8-schatztruhe-64-right.png')"
      }),  
    },
  },
  plugins: [],
};

