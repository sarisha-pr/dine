import type { Config } from 'tailwindcss'

const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      xs:'390px',
      sm:'576px',
      md:'768px',
      lg:'992px',
      xl:'1280px',
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      primary: {
        DEFAULT: '#9e7f66',
        beaver: '#9e7f66',
        cod: '#111111',
      },
      secondary: {
        DEFAULT: '#17192b',
        mirage: '#17192b',
        ebony: '#242b37',
        shuttle: '#5c6779',
      },
    },
    fontFamily: {
      'league-spartan': ['League Spartan', 'sans-serif']
    },
    extend: {
    },
  },
  plugins: [],
}
export default config
