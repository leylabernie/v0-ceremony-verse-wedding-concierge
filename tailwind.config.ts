import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cormorant Garamond', 'Georgia', 'serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        garamond: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      colors: {
        'muted-rose': '#f8f6f2',
        'champagne': '#ffffff',
        'midnight-navy': '#2f2f2f',
        'brushed-gold': '#c7b28a',
      },
    },
  },
  plugins: [],
}

export default config
