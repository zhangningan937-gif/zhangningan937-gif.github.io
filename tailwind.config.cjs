/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Noto Sans SC", "PingFang SC", "Microsoft YaHei UI", "sans-serif", ...defaultTheme.fontFamily.sans],
        serif: ["Noto Serif SC", "Source Han Serif SC", "Source Han Serif CN", "Songti SC", "STSong", "Georgia", "serif", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
