import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: '#0a0a0a',
        purpleMain: '#7800FF',
        yellowMain: '#FBEE09',
        redMain: '#F61B51',
        orangeMain: '#D87B5C'
      },
      backgroundImage: {
        imagemParalax: 'url("/images/landingPage/imagemParalax2.png")',
      },
    },
  },
  plugins: [],
};
export default config;
