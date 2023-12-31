import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '0px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '1920px',
    },
    fontFamily: {
     sans: ['"Gilroy"', 'arial' , 'sans-serif']
    },
  },
     plugins: [
      plugin(function({ addVariant }: { addVariant:any}) {
        addVariant('current', '&.active')
      })
    ],
}
export default config