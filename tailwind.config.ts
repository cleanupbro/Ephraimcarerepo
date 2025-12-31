import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Teal (Healthcare, Trust, Growth)
        primary: {
          50: '#E6F4F2',
          100: '#C0E4DE',
          200: '#96D3C9',
          300: '#6BC1B4',
          400: '#4BB3A4',
          500: '#2E7D6B',
          600: '#276A5A',
          700: '#1F5749',
          800: '#1A5C4E',
          900: '#0F3A31',
          DEFAULT: '#2E7D6B',
        },
        // Secondary - Warm Gold (Comfort, Hope)
        secondary: {
          50: '#FEF8EB',
          100: '#FCEACD',
          200: '#F9DBAB',
          300: '#F5C789',
          400: '#E8A54B',
          500: '#D9922E',
          600: '#B87A20',
          700: '#8C5E18',
          800: '#6B4812',
          DEFAULT: '#E8A54B',
        },
        // Neutral grays
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#4A4A4A',
          800: '#262626',
          900: '#1A1A1A',
        },
        // Semantic colors
        success: '#2E7D32',
        error: '#C62828',
        warning: '#F57C00',
        info: '#1565C0',
        // Background
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: '#F5F5F5',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        comfort: ['var(--font-atkinson)', 'Arial', 'Verdana', 'sans-serif'],
      },
      fontSize: {
        base: ['1rem', { lineHeight: '1.625' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
