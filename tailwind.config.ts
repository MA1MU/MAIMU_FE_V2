import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
        caption6: ['16px', { lineHeight: '24px', fontWeight: 'bold' }],
        caption7: ['12px', { lineHeight: '20px', fontWeight: '400' }],
        caption8: ['10px', { lineHeight: '13px', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
} satisfies Config;
