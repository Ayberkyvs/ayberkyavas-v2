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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'primary-text': "var(--primary-text)",
        'primary-text-60': "var(--primary-text-60)",
        'light-gray': "var(--light-gray)",
        'primary-bg': "var(--primary-bg)",
        'hover-bg-1': "var(--hover-bg-1)",
        'hover-bg-2': "var(--hover-bg-2)",
        'nav-bg': "var(--nav-bg)",
        'nav-border': "var(--nav-border)",
        'orange': "var(--orange)",
        'red': "var(--red)",
        'blue': "var(--blue)",
        'green': "var(--green)",
        'pink': "var(--pink)",
        'yellow': "var(--yellow)",
        'black-70': "var(--black-70)",
        'link-border': "var(--link-border)",
        'link-blue': "var(--link-blue)"
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"),require('@tailwindcss/line-clamp')],
}