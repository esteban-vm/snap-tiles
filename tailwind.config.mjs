import daisyui from 'daisyui'
import tailwindFluid, { extract, fontSize, screens } from 'fluid-tailwind'
// @ts-ignore
import tailwindCSSTouch from 'tailwindcss-touch'

/** @type {import("tailwindcss").Config} */
const tailwindConfig = {
  content: {
    extract,
    files: ['./src/(app|components|shared)/**/*.{js,ts,jsx,tsx,mdx}'],
  },
  theme: {
    screens,
    fontSize,
    extend: {
      fontSize: {
        '2xs': '0.625rem',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [daisyui, tailwindFluid, tailwindCSSTouch()],
}

export default tailwindConfig
