/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
     
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        customOrange: '#FAA533',
        customOrangeHover: '#D18A28',
        customPurple: '#662D91',
        customMint: '#699984',
        whiteNotWhite: '#FCFBF8',
        whiteNotWhiteHover: '#F0EFEA',
        textGray: '#535353',
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      spacing: {
        '100': '30rem',
        '128': '32rem'
      },
      
      margin: {
        "30": "7.5rem",
        "40": "10rem"
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 70s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }    
    },
  },
  plugins: [require("tailwindcss-animate")],
};
