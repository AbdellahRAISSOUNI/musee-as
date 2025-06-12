/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'bodoni': ['var(--font-bodoni)', 'Bodoni', 'Didot', 'Baskerville', 'Times New Roman', 'serif'],
        'bodoni-italic': ['var(--font-bodoni-italic)', 'Bodoni Italic', 'Didot Italic', 'Baskerville Italic', 'Times New Roman', 'serif'],
        'bodoni-bold': ['var(--font-bodoni-bold)', 'Bodoni Bold', 'Didot Bold', 'Baskerville Bold', 'Times New Roman Bold', 'serif'],
      },
      fontSize: {
        // Slaoui Foundation brand guidelines typography system
        'title-grand': ['200pt', { lineHeight: '240pt', letterSpacing: '-0.02em' }],
        'sequence': ['50pt', { lineHeight: '65pt', letterSpacing: '-0.01em' }],
        'comment': ['34pt', { lineHeight: '39pt' }],
        'caption': ['24pt', { lineHeight: '30pt' }],
        'quote': ['32pt', { lineHeight: '42pt' }],
        'detail': ['18pt', { lineHeight: '28pt' }],
        'metadata': ['14pt', { lineHeight: '18pt' }],
      },
      colors: {
        // Modern premium black & white palette
        'premium-black': '#000000',
        'off-black': '#0A0A0A',
        'charcoal': '#1A1A1A',
        'graphite': '#2A2A2A',
        'slate': '#3A3A3A',
        'premium-white': '#FFFFFF',
        'off-white': '#F5F5F5',
        'soft-white': '#EFEFEF',
        'warm-white': '#F8F8F8',
        'accent-gold': '#D4AF37',
      },
      backgroundImage: {
        'moroccan-pattern': "url('/images/moroccan-pattern.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-premium': 'linear-gradient(to right, #0A0A0A, #2A2A2A, #0A0A0A)',
      },
      animation: {
        'gradient-shift': 'gradient 8s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: theme('fontFamily.bodoni'),
            },
            'blockquote p': {
              fontFamily: theme('fontFamily.bodoni-italic'),
              fontStyle: 'italic',
            },
            'strong': {
              fontFamily: theme('fontFamily.bodoni-bold'),
              fontWeight: 'bold',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}; 