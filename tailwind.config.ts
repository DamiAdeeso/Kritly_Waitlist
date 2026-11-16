import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0716',
          900: '#0B0716',
          800: '#140D26',
          700: '#1E1538',
          600: '#2C2150',
        },
        brand: {
          50: '#F4EEFF',
          100: '#E8DCFF',
          200: '#D2B8FF',
          300: '#B48AFF',
          400: '#9558FF',
          500: '#7C2FFF',
          600: '#6A12F0',
          700: '#5508C4',
          800: '#40008C',
          900: '#2B0061',
        },
        sun: {
          DEFAULT: '#FFC30D',
          400: '#FFD24D',
          500: '#FFC30D',
          600: '#E6A800',
        },
        wa: '#25D366',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'var(--font-inter)', 'ui-sans-serif', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #40008C 0%, #7C2FFF 55%, #C04BFF 100%)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'msg-in': {
          from: { opacity: '0', transform: 'translateY(8px) scale(0.98)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        blink: {
          '0%, 80%, 100%': { opacity: '0.25' },
          '40%': { opacity: '1' },
        },
        glow: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.9' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'msg-in': 'msg-in 0.35s ease-out both',
        blink: 'blink 1.2s infinite',
        glow: 'glow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
