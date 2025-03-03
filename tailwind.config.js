module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        digital: ['Digital-7'], // ou 'Digital7', dependendo do nome
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
