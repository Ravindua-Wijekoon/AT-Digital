/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        hoverColor: '#F28D35', 
        bgColor:'#4F46E5',
        gradientBlue:'#1CBDDD',
        gradientGreen:'#4DCA79',
        buttonOrange:'#F28D35',
        textColor:'#4F46E5',
        cardBack:'#faf8ff',
        textColor2:'#6F6C90',
      },
      width: {
        '100': '700px', 
      },
      spacing: {
        'custom1': '450px', // Custom negative margin
      },
    },
  },
  plugins: [],
}

