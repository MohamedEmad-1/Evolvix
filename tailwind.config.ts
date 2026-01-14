import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: '#ffffff',
          10: '#fff9d9',
          20: '#ffe3a4',
        },
        brown: {
          10: '#eea83e',
          50: '#763b0e',
          90: '#39250e',
        },
        darkb: {
          DEFAULT: '#000000',
          90: '#080100',
        },
        red: {
          DEFAULT: '#c1121f',
          100: '#780000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'serif'],
        display: ['Cedarville Cursive', 'cursive'],
        body: ['Inter', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
