import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: '#f0f5f8',
      100: '#d4e0e8',
      200: '#a8bfd6',
      300: '#7a9ec4',
      400: '#557db2',
      500: '#3d5f99',
      600: '#2e4773',
      700: '#1f325a',
      800: '#152341',
      900: '#0d1529',
    },
    accent: {
      50: '#faf7f5',
      100: '#f0e8e3',
      200: '#dcc9be',
      300: '#c8a998',
      400: '#b88965',
      500: '#ae5438',
      600: '#993e2a',
      700: '#7a2f1f',
      800: '#5c2318',
      900: '#3e1810',
    },
    mint: {
      50: '#f0f8f5',
      100: '#d4eae4',
      200: '#a8ddd1',
      300: '#7ccfba',
      400: '#5ac6a8',
      500: '#3db895',
      600: '#2d967a',
      700: '#1f7260',
    },
    surface: {
      base: '#f9f8f6',
      raised: '#ffffff',
      sunken: '#ede8e0',
    },
    ink: {
      900: '#1a1f24',
      700: '#3a414a',
      500: '#6b7580',
      300: '#b0b8bf',
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
        lineHeight: '1.6',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 600,
        borderRadius: 'sm',
        transition: 'all 0.2s ease',
      },
      variants: {
        solid: (props: { colorScheme?: string }) => {
          if (props.colorScheme === 'accent') {
            return {
              bg: 'accent.500',
              color: 'white',
              _hover: { bg: 'accent.600', boxShadow: 'md' },
              _active: { bg: 'accent.700' },
            };
          }
          return {
            bg: 'brand.700',
            color: 'white',
            _hover: { bg: 'brand.600', boxShadow: 'md' },
            _active: { bg: 'brand.800' },
          };
        },
        outline: {
          borderColor: 'brand.700',
          color: 'brand.700',
          _hover: { bg: 'brand.50', borderColor: 'brand.600' },
          _active: { bg: 'brand.100' },
        },
      },
    },
    Heading: {
      baseStyle: {
        color: 'brand.900',
        letterSpacing: '-0.02em',
        fontWeight: 700,
      },
    },
  },
});

export default theme;
