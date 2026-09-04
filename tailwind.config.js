/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#22d3ee',
          600: '#0891b2',
        },
        darkBg: {
          DEFAULT: '#0b0f19',
          lighter: '#0e1322',
          darker: '#080b13',
        },
      },
      fontFamily: {
        sans: ['var(--font-space)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
};
