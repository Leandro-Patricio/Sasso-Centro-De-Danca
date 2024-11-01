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
        bgMain: '#000000',
        purpleMain: '#7800FF',
        yellowMain: '#FBEE09',
        redMain: '#F61B51',
        orangeMain: '#D87B5C',
        pinkMain: '#F86288'
      },
      backgroundImage: {
        imagemParalax: 'url("/images/landingPage/imagemParalax2.png")',
      },
      screens: {
        xs: '450px'
      },
      animation: {
        'sideShow': 'sideShow .5s linear',
        'sideHide': 'sideHide .5s linear'  // animação de saída,
      },
      keyframes: {
        sideShow: {
          '0%': { transform: 'translateX(-1rem)', opacity: '0' },
          '100%': { transform: 'translateX(0rem)', opacity: '1', },
        }, sideHide: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(1rem)', opacity: '0', display: 'none' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
