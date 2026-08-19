/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        page: 'var(--bg-page)',
        surface: 'var(--bg-surface)',
        'surface-subtle': 'var(--bg-surface-subtle)',
        pill: 'var(--bg-pill)',
        'pill-hover': 'var(--bg-pill-hover)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'border-default': 'var(--border-color)',
        'border-subtle': 'var(--border-subtle)',
        'border-dark': 'var(--border-dark)',
        'btn-primary-bg': 'var(--btn-primary-bg)',
        'btn-primary-text': 'var(--btn-primary-text)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.045em',
        tight: '-0.04em',
        tracked: '0.1em',
        'tracked-wide': '0.18em',
      },
      maxWidth: {
        editorial: '1320px',
      },
      transitionTimingFunction: {
        'spring-blob': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'lux-hover': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
