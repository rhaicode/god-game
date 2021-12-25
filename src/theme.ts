import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    blue: '#0D7EB7',
    lightBlue: '#00A4F6',
    yellow: '#EDC433',
    gold: '#DDAC00',
    charcoal: '#21262C',
  },
  fonts: {
    body: "'VT323', sans-serif",
  },
  fontSizes: {
    'xs-11': '0.6875rem', // 11px
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
    '6xl': '3.75rem', // 60px
  },
  styles: {
    global: {},
  },
});

export default theme;
