/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A', // Sleeker dark blue background
        secondary: '#00FFC8', // Neon cyan for retro accents
        accent: '#e3066e', // Specific pink color for buttons as requested
        tertiary: '#FFD700', // Gold for highlights
        background: '#0F172A', // Same as primary
        text: '#000000',
        'text-light': '#FFFFFF',
        'vector-purple': '#6B21A8', // Keeping the original purple as an accent
        'vector-blue': '#2563EB', // Adding a vector blue color
        'retro-purple': '#9333EA', // Retro purple shade
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        retro: ["'Press Start 2P'", 'cursive'],
        mono: ['Space Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'glow-conic': 'conic-gradient(from 180deg at 50% 50%, #0F172A 0deg, #2563EB 90deg, #00FFC8 180deg, #FF3864 270deg, #0F172A 360deg)',
        'vector-gradient': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        'retro-grid': 'repeating-linear-gradient(90deg, rgba(0, 255, 200, 0.03) 0px, rgba(0, 255, 200, 0.03) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(0deg, rgba(0, 255, 200, 0.03) 0px, rgba(0, 255, 200, 0.03) 1px, transparent 1px, transparent 20px)',
        'vector-lines': 'linear-gradient(135deg, rgba(0, 255, 200, 0.1) 0%, rgba(255, 56, 100, 0.1) 100%)',
      },
      boxShadow: {
        'neon-glow': '0 0 5px rgba(0, 255, 200, 0.5), 0 0 20px rgba(0, 255, 200, 0.3)',
        'pink-glow': '0 0 5px rgba(255, 56, 100, 0.5), 0 0 20px rgba(255, 56, 100, 0.3)',
        'sleek-shadow': '0 4px 20px rgba(0, 0, 0, 0.25)',
        'vector-shadow': '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
        'retro-shadow': '5px 5px 0px rgba(0, 255, 200, 0.5)',
      },
      animation: {
        'vector-float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: 0.7 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
