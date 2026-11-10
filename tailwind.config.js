/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FAF8F2',
        surface: '#FFFFFF',
        sand: '#F1EDE3',
        line: '#E3DED2',
        'line-strong': '#8A8474',
        ink: '#0F1F1A',
        muted: '#52625B',
        brand: {
          DEFAULT: '#047857',
          strong: '#065F46',
          deep: '#024D4B',
          soft: '#ECFDF5',
        },
        gold: {
          DEFAULT: '#A67C1A',
          ink: '#8A6512',
          soft: '#F3E7C9',
        },
        danger: '#BE123C',
        warning: '#B45309',
      },
      fontFamily: {
        sans: [
          '"Manrope Variable"',
          'Manrope',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 31, 26, 0.06)',
        lift: '0 8px 24px rgba(15, 31, 26, 0.08)',
        preview: '0 24px 60px rgba(2, 77, 75, 0.16)',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        rise: 'rise 240ms cubic-bezier(0.2, 0, 0, 1) both',
        'fade-in': 'fade-in 200ms ease-out both',
      },
    },
  },
  plugins: [],
};
