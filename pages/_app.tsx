import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { GoogleTagManager } from '@next/third-parties/google';

import theme from '@/lib/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleTagManager gtmId='GTM-TRQSTNNH' />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
