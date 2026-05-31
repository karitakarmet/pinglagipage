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
      </Head>
      <Header />
      <Box as="main" minH="60vh">
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
