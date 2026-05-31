import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Link,
  Heading,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useT } from '@/lib/useT';

const navItems = [
  { key: 'about', href: '/about' },
  { key: 'faq', href: '/faq' },
  { key: 'contact', href: '/contact' },
] as const;

export default function Footer() {
  const t = useT();

  return (
    <Box as='footer' bg='brand.700' color='whiteAlpha.900' mt={20}>
      <Container maxW='6xl' py={12}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Stack spacing={3}>
            <Heading as='div' size='md' color='white'>
              {t.brand}
            </Heading>
            <Text color='whiteAlpha.800' fontSize='sm'>
              {t.footer.tagline}
            </Text>
          </Stack>

          <Stack spacing={3}>
            <Heading
              as='h4'
              size='sm'
              color='white'
              textTransform='uppercase'
              letterSpacing='0.08em'
            >
              {t.footer.navTitle}
            </Heading>
            {navItems.map((i) => (
              <NextLink key={i.key} href={i.href} passHref legacyBehavior>
                <Link
                  color='whiteAlpha.800'
                  fontSize='sm'
                  _hover={{ color: 'accent.300' }}
                >
                  {t.nav[i.key]}
                </Link>
              </NextLink>
            ))}
          </Stack>

          <Stack spacing={3}>
            <Heading
              as='h4'
              size='sm'
              color='white'
              textTransform='uppercase'
              letterSpacing='0.08em'
            >
              {t.footer.contactTitle}
            </Heading>
            <Link
              href={`tel:${t.contact.phone.replace(/\s/g, '')}`}
              color='whiteAlpha.800'
              fontSize='sm'
              _hover={{ color: 'accent.300' }}
            >
              {t.contact.phone}
            </Link>
            <Link
              href={`mailto:${t.contact.email}`}
              color='whiteAlpha.800'
              fontSize='sm'
              _hover={{ color: 'accent.300' }}
            >
              {t.contact.email}
            </Link>
          </Stack>
        </SimpleGrid>

        <Box mt={10} pt={6} borderTop='1px solid' borderColor='whiteAlpha.300'>
          <Text color='whiteAlpha.700' fontSize='xs'>
            {t.footer.copyright}
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
