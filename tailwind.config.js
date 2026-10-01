/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.vue', './pages/**/*.vue', './app.vue', './data/**/*.ts'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07090d',
          900: '#0b0f15',
          800: '#121821',
          700: '#1c2430',
          600: '#2a3442',
        },
        accent: {
          DEFAULT: '#34d399',
          soft: '#6ee7b7',
          cyan: '#22d3ee',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        blink: { '50%': { opacity: '0' } },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.7' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        blink: 'blink 1s step-end infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulseRing 1.8s cubic-bezier(0.2, 0.6, 0.4, 1) infinite',
      },
    },
  },
  plugins: [],
}
