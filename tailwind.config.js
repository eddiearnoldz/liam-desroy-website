module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'heroPink': '#EAA5A5',
      'heroGrey': '#2e2b2f',
      'heroSand': '#ffe0a0',
      'heroCream':'#FDF0DA',
      'black':'#000'
    },
    extend: { 
      aspectRatio: {
      '16/9': '16 / 9',
    },},
  },
  plugins: [],
}
