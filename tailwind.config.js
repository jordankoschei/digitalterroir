/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './**/*.md'],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['Lora', 'serif'],
        },
    },
},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

