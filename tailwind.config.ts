import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        garamond: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      colors: {
        'muted-rose': '#F4E0E0',
        'champagne': '#FDFBF7',
        'midnight-navy': '#0A192F',
        'brushed-gold': '#C5A059',
      },
    },
  },
  plugins: [],
}

export default config
