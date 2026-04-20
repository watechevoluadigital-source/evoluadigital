/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050a14',
          900: '#0a1628',
          800: '#0f1f35',
          700: '#152a45',
        },
        accent: {
          DEFAULT: '#0ea5e9',
          bright: '#38bdf8',
          glow: '#7dd3fc',
        },
        silver: {
          100: '#f1f5f9',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
        },
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(14, 165, 233, 0.18), transparent 55%)',
        'metal-text':
          'linear-gradient(180deg, #f8fafc 0%, #94a3b8 45%, #e2e8f0 55%, #64748b 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(14, 165, 233, 0.45)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        shimmer: 'shimmer 8s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
