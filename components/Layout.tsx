import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import { useT } from '@/lib/useT';

type Props = {
  children: React.ReactNode;
  pageTitle?: string;
  description?: string;
};

export default function Layout({ children, pageTitle, description }: Props) {
  const t = useT();
  const title = pageTitle ? `${pageTitle} – ${t.brand}` : `${t.brand} – ${t.footer.tagline}`;

  return (
    <Box>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Box as="main" minH="60vh">
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
