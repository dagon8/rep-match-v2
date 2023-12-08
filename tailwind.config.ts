import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        layout: {}, // light theme layout tokens
        colors: {
          darkBlue: "#234366",
          mediumBlue: "#086ad9",
          lightBlue: "#11c7dc",
        } // light theme colors
      },
      dark: {
        layout: {}, // dark theme layout tokens
        colors: {} // dark theme colors
      },
    }
  })],
}
export default config
