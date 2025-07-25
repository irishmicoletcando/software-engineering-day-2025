/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        // Custom colors for the event theme
        event: {
          blue: {
            light: '#1EAEDB',
            DEFAULT: '#0079BF',
            dark: '#005A8C'
          },
          accent: '#00C2FF',
          dark: '#121826',
          black: '#0A0E17',
          gray: {
            light: '#A0AEC0',
            DEFAULT: '#4A5568',
            dark: '#2D3748'
          }
        },
        'darkest': 'var(--color-darkest)',
        'dark': 'var(--color-dark)',
        'accent-black': 'var(--color-accent-black)',
        'shining-yellow': 'var(--color-shining-yellow)',
        'bright-orange': 'var(--color-bright-orange)',
        'dull-yellow': 'var(--color-dull-yellow)',
        'light-sea-green': 'var(--color-light-sea-green)',
        'sea-green': 'var(--color-sea-green)',
        'bright-sea-green': 'var(--color-bright-sea-green)',
        'dull-sea-green': 'var(--color-dull-sea-green)',
        'dark-red': 'var(--color-dark-red)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--color-sea-green), var(--color-light-sea-green))',
        'gradient-secondary': 'linear-gradient(to right, var(--color-shining-yellow), var(--color-bright-orange))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'data-flow': {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(10px) translateY(10px)' },
          '50%': { transform: 'translateX(0) translateY(20px)' },
          '75%': { transform: 'translateX(-10px) translateY(10px)' },
          '100%': { transform: 'translateX(0) translateY(0)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'data-flow': 'data-flow 10s ease-in-out infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
