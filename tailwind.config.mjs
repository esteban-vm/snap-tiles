import daisyui from 'daisyui'
import tailwindFluid, { extract, fontSize, screens } from 'fluid-tailwind'
// @ts-ignore
import tailwindMobileHover from 'tailwind-mobile-hover'
// @ts-ignore
import tailwindTouch from 'tailwindcss-touch'

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
      fontFamily: {
        'reddit-sans': 'var(--font-reddit-sans)',
      },
    },
  },
  plugins: [daisyui, tailwindFluid, tailwindTouch(), tailwindMobileHover],
}

export default tailwindConfig
