import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: '#e6f4f7',
      100: '#bfe1e8',
      200: '#93c8d3',
      300: '#5fa9b8',
      400: '#348ea0',
      500: '#1a7286',
      600: '#0e5b6e',
      700: '#0a4655',
      800: '#07333f',
      900: '#04222c',
    },
    accent: {
      50: '#fff1e6',
      100: '#fcdcbe',
      200: '#f9bf8c',
      300: '#f4a25b',
      400: '#ef8a37',
      500: '#e87325',
      600: '#c75a14',
      700: '#97430e',
      800: '#642c08',
      900: '#331604',
    },
    mint: {
      50: '#e6f7f3',
      100: '#c5ebe1',
      200: '#9bdbc8',
      300: '#6ec9b8',
      400: '#3fb59f',
      500: '#2da38c',
      600: '#1d846f',
      700: '#125e4f',
    },
    surface: {
      base: '#FBF7F1',
      raised: '#FFFFFF',
      sunken: '#F0E9DC',
    },
    ink: {
      900: '#1A2A30',
      700: '#324047',
      500: '#5F6B72',
      300: '#A3ADB3',
    },
  },
  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
  },
  styles: {
    global: {
      'html, body': {
        bg: 'surface.base',
        color: 'ink.900',
      },
    },
  },
  components: {
    Button: {
      baseStyle: { fontWeight: 600, borderRadius: 'md' },
      variants: {
        solid: (props: { colorScheme?: string }) => {
          if (props.colorScheme === 'accent') {
            return {
              bg: 'accent.500',
              color: 'white',
              _hover: { bg: 'accent.600' },
            };
          }
          return {
            bg: 'brand.700',
            color: 'white',
            _hover: { bg: 'brand.600' },
          };
        },
        outline: {
          borderColor: 'brand.700',
          color: 'brand.700',
          _hover: { bg: 'brand.50' },
        },
      },
    },
    Heading: {
      baseStyle: { color: 'brand.700', letterSpacing: '-0.01em' },
    },
  },
});

export default theme;
