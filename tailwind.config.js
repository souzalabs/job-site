/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "arrows-bg": "url('/src/assets/arrows_bg.png')",
        "full-bg": "url('/src/assets/full_bg.png')",
        "fundo-branco": "url('/src/assets/fundo_branco.png')"
      }
    },
    colors: {
      "facebook-modal": "#1c1e21",
      "pesca-maravilhosa": "#45C1C6",
      "whatsapp": "#3AAF23",
      "bg": "#121214",
      "black": "#000000",
      "white": "#ffffff"  
    },
    fontSize: {
      pp: '0.5rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [],
}