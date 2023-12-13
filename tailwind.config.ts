import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes:{
        hoverScale: {
          '0%': {transform: 'scale(0)'},
          '100%': {transform: 'scale(1.3)'}
        },
      }
    },
  },
  plugins: [],
}
export default config
