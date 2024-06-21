/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        646: '646px',
        648: '648px',
        '1px': '1px',
      },
      width: {
        472: '472px',
        '30per': '30%',
      },
    },
  },
  plugins: [],
};
