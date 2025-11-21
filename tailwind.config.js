/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0A0E1A',
          DEFAULT: '#141824',
        },
        accent: {
          green: '#D4FF00',
          purple: '#9B51E0',
          blue: '#56CCF2',
        },
        card: '#1E2230',
        text: {
          primary: '#FFFFFF',
          secondary: '#B8B8B8',
        },
        status: {
          creator: '#D4FF00',
          organizer: '#FFB84D',
          soulchild: '#FF6B9D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'party-gradient': 'linear-gradient(135deg, #0A0E1A 0%, #141824 50%, rgba(155, 81, 224, 0.3) 100%)',
      },
    },
  },
  plugins: [],
}
