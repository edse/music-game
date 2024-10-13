/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "background": "rgba(var(--background))",
        "background-nav": "rgba(var(--background-nav))",
        "background-card": "rgba(var(--background-card))",
        "background-button": "rgba(var(--background-button))",
        "background-button-hover": "rgba(var(--background-button-hover))",
        "border": "rgba(var(--border))",
        "card": "rgba(var(--card))",
        "copy-primary": "rgba(var(--copy-primary))",
        "copy-secondary": "rgba(var(--copy-secondary))",
        "cta": "rgba(var(--cta))",
        "active": "rgba(var(--active))",
        "active-text": "rgba(var(--active-text))",
        "hover-item": "rgba(var(--hover-item))",
        "hover-text": "rgba(var(--hover-text))",
        "text-primary": "rgba(var(--text-primary))",
        "text-secondary": "rgba(var(--text-secondary))",
        "text-button": "rgba(var(--text-button))",
        "text-button-hover": "rgba(var(--text-button-hover))",
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }
}