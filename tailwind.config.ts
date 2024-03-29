import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '16px',
        md: '42px',
        xl: '32px',
      },
    },
    extend: {
      fontFamily: {
        raleway: ['var(--font-raleway)'],
        geologica: ['var(--font-geologica)'],
      },

      colors: {
        white: '#FFFFFF',
        accent: '#0052F2',
        red: '#FF0000',
        darkBg: '#0D0A19',
        lightBg: '#F1F5F9',
        headline: '#102141',
        primaryText: '#33343C',
        secondaryText: 'rgba(51, 52, 60, 0.70)',
        greyText: '#8E8E93',
        darkBlue: '#0045CB',
        lightBlue: '#ACC8FF',
        strokeColor: '#CBD8E5',
        backdropBg: '#303036',
        heroRing: '#BFD5FF',
        black: '#000000',
        selectedBg: '#D6EAFF',
        delimiterGrey: '#373347',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
