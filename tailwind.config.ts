import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'bounce-once': 'bounceOnce 0.5s linear',
        'slideLeft': 'slideLeft 25s linear infinite'
      },
      keyframes:{
        bounceOnce: {
          "0%, 50%": {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
          },
          "25%, 100%": {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
          }
        },
        slideLeft: {
          "0%": {
            transform: "translateX(0)"
          },
          "100%": {
            transform: "translateX(calc(-3380px))"
          }
        }
      }
    },
  },
  plugins: [],
}
export default config
