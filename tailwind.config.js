/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#D4AF37",
          foreground: "#8B0000",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#FFD700",
          foreground: "#8B0000",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // 故宫红配色
        palace: {
          red: '#C41E3A',
          deep: '#8B0000',
          cinnabar: '#E34234',
        },
        gold: {
          DEFAULT: '#D4AF37',
          bright: '#FFD700',
          warm: '#F4E4C1',
        },
        cream: '#FFF8DC',
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'gold': "0 0 20px rgba(212, 175, 55, 0.3)",
        'gold-lg': "0 0 40px rgba(212, 175, 55, 0.5)",
        'red': "0 0 20px rgba(196, 30, 58, 0.3)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "float-gold": {
          "0%, 100%": { transform: "translateY(0px)", opacity: "0.8" },
          "50%": { transform: "translateY(-15px)", opacity: "1" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 10px rgba(212, 175, 55, 0.3)" },
          "50%": { boxShadow: "0 0 25px rgba(212, 175, 55, 0.6)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "float-gold": "float-gold 4s ease-in-out infinite",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
        "shimmer": "shimmer 3s infinite",
      },
      fontFamily: {
        sans: ['Noto Sans SC', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Noto Serif SC', 'serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
