import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Landing page tokens: CSS variables in globals.css, light + dark. */
        k: {
          'bg': 'rgb(var(--k-bg) / <alpha-value>)',
          'surface': 'rgb(var(--k-surface) / <alpha-value>)',
          'paper': 'rgb(var(--k-paper) / <alpha-value>)',
          'tint': 'rgb(var(--k-tint) / <alpha-value>)',
          'ink': 'rgb(var(--k-ink) / <alpha-value>)',
          'body': 'rgb(var(--k-body) / <alpha-value>)',
          'muted': 'rgb(var(--k-muted) / <alpha-value>)',
          'line': 'rgb(var(--k-line) / <alpha-value>)',
          'purple': 'rgb(var(--k-purple) / <alpha-value>)',
          'purple-hover': 'rgb(var(--k-purple-hover) / <alpha-value>)',
          'link': 'rgb(var(--k-link) / <alpha-value>)',
          'lilac': 'rgb(var(--k-lilac) / <alpha-value>)',
          'hi': 'rgb(var(--k-hi) / <alpha-value>)',
          'hi-hover': 'rgb(var(--k-hi-hover) / <alpha-value>)',
          'onhi': 'rgb(var(--k-onhi) / <alpha-value>)',
          'night': 'rgb(var(--k-night) / <alpha-value>)',
          'warm': 'rgb(var(--k-warm) / <alpha-value>)',
          'warmbg': 'rgb(var(--k-warmbg) / <alpha-value>)',
          'ok': 'rgb(var(--k-ok) / <alpha-value>)',
          'okbg': 'rgb(var(--k-okbg) / <alpha-value>)',
          'bubble': 'rgb(var(--k-bubble) / <alpha-value>)',
          ig: '#D6246E',
          wa: '#1FA855',
          web: '#2F6FE0',
        },
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
        kbody: ['var(--font-instrument)', 'system-ui', 'sans-serif'],
        kdisplay: ['var(--font-archivo)', 'var(--font-instrument)', 'system-ui', 'sans-serif'],
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
