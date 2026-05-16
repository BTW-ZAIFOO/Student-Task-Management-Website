import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'bounce-lg': 'bounce 1s ease-in-out infinite',
        'pulse-lg': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.7s ease-out',
        'slide-down': 'slideDown 0.7s ease-out',
        'rotate-in': 'rotateIn 0.6s ease-out',
        'heartbeat': 'heartbeat 1.3s ease-in-out infinite',
        'wiggle': 'wiggle 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;
