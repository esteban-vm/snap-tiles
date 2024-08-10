import daisyui from 'daisyui' 
// @ts-ignore
import tailwindMobileHover from 'tailwind-mobile-hover' 

/** @type {import("tailwindcss").Config} */
const tailwindConfig = {
  content: ['./src/(app|components|shared)/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.625rem',
      },
      fontFamily: {
        'reddit-sans': 'var(--font-reddit-sans)',
      },
    },
  },
  plugins: [daisyui, tailwindMobileHover],
  daisyui: {
    themes: ['dark'],
  },
}

export default tailwindConfig
