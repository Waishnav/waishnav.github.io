/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        'custom': '21px', // Or any size you want
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
