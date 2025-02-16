import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        // gray
        gray01: '#1D1D1D',
        gray02: '#444141',
        gray03: '#7B7676',
        gray04: '#ABA4A4',
        gray05: '#D0CDCD',
        gray06: '#D9D9D9',
        // brown
        brown01: '#321111',
        brown02: '#544C4B',
        brown03: '#756D6C',
        brown04: '#A28986',
        brown05: '#CABBB9',
        brown06: '#F5EEEC',
        brown07: '#FCF8F7',
        // pink
        pink01: '#FF6C6C',
        pink02: '#FF8585',
        pink03: '#FFA1A1',
        pink04: '#FFCBC2',
        pink05: '#FFD9D9',
        pink06: '#FFF3F3',
        // coral
        coral01: '#FFBFB7',
        coral02: '#FFCBC4',
        coral03: '#FFE7E3',
        coral04: '#FFEFEC',
        coral05: '#FFF6F5',
        coral06: '#FFFBFB',
        // apricot
        apricot01: '#FBDC93',
        apricot02: '#FFD9C2',
        apricot03: '#FFE5D5',
        apricot04: '#FFF0E3',
        apricot05: 'rgba(255, 246, 241, 0.90)',
        apricot06: '#FFF8F3',
      },
      fontFamily: {
        round: ['NeoDunggeunmo', 'sans-serif'], // 둥근모꼴
        nanum: ['NanumSquareNeo', 'sans-serif'], // 나눔스퀘어 네오
      },
      fontSize: {
        // Body1~8 텍스트 (둥근모꼴)
        body1: ['22px', { lineHeight: 'normal' }],
        body2: ['20px', { lineHeight: 'normal' }],
        body3: ['18px', { lineHeight: '24px' }],
        body4: ['18px', { lineHeight: 'normal' }],
        body5: ['17px', { lineHeight: 'normal' }],
        body6: ['16px', { lineHeight: 'normal' }],
        body7: ['15px', { lineHeight: '22px' }],
        body8: ['15px', { lineHeight: 'normal' }],

        // Caption1~5 텍스트 (둥근모꼴)
        caption1: ['14px', { lineHeight: '16px' }],
        caption2: ['13px', { lineHeight: 'normal' }],
        caption3: ['12px', { lineHeight: 'normal' }],
        caption4: ['11px', { lineHeight: 'normal' }],
        caption5: ['10px', { lineHeight: 'normal' }],

        // Caption6~8 (나눔스퀘어 네오)
        caption6: ['16px', { lineHeight: '24px', fontWeight: '700' }],
        caption7: ['12px', { lineHeight: '20px', fontWeight: '400' }],
        caption8: ['10px', { lineHeight: '13px', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
} satisfies Config;
