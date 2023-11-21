import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          "50": "#0C0C0C",
          "100": "#1C1C1C",
          "200": "#2C2C2C",
        },
        "fontDark": {
          "50": "#F6F6F6",
          "100": "#858A8E"
        }
      },
    },
  },
  plugins: [],
}
export default config
