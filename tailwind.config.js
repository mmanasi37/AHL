/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#e8f0f9',
          100: '#c5d8f0',
          200: '#9dbce4',
          300: '#74a0d8',
          400: '#4d83c9',
          500: '#1e4d8c',
          600: '#0f2d5c',
          700: '#0a1f42',
          800: '#071428',
          900: '#040c18',
        },
        leaf: {
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        flame: {
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        gold: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          900: '#78350f',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'scan': 'scan 4s linear infinite',
        'glow-leaf': 'glow-leaf 3s ease-in-out infinite alternate',
        'glow-flame': 'glow-flame 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'reverse-spin': 'reverse-spin 12s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'glow-leaf': {
          '0%': { 'box-shadow': '0 0 5px rgba(34, 197, 94, 0.2), 0 0 10px rgba(34, 197, 94, 0.1)' },
          '100%': { 'box-shadow': '0 0 20px rgba(34, 197, 94, 0.5), 0 0 30px rgba(34, 197, 94, 0.3)' },
        },
        'glow-flame': {
          '0%': { 'box-shadow': '0 0 5px rgba(249, 115, 22, 0.2), 0 0 10px rgba(249, 115, 22, 0.1)' },
          '100%': { 'box-shadow': '0 0 20px rgba(249, 115, 22, 0.5), 0 0 30px rgba(249, 115, 22, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'reverse-spin': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      },
      boxShadow: {
        'neon-leaf': '0 0 15px rgba(34, 197, 94, 0.4)',
        'neon-flame': '0 0 15px rgba(249, 115, 22, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.8)',
        'inner-glow': 'inset 0 0 12px rgba(255, 255, 255, 0.05)',
      },
      backdropBlur: {
        '4xl': '72px',
      }
    },
  },
  plugins: [],
};
