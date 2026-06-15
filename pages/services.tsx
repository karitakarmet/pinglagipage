import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Button,
  Icon,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useT } from '@/lib/useT';

const SERVICE_IMAGES = [
  '/mattlagi.png',
  '/glossylagi.png',
  '/satiinlagi.png',
  '/fotolagi.png',
  '/valgustusegalagi.png',
  '/mitmetasandilinelagi.png',
];

export default function Services() {
  const t = useT();

  return (
    <Layout pageTitle={t.services.title} description={t.services.intro}>
      <PageHeader title={t.services.title} intro={t.services.intro} />

      <Container maxW='6xl' py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {t.services.items.map((item, i) => (
            <Box
              key={i}
              bg='surface.raised'
              borderRadius='lg'
              overflow='hidden'
              boxShadow='sm'
              _hover={{ boxShadow: 'lg', transform: 'translateY(-4px)' }}
              transition='all 0.2s'
              display='flex'
              flexDirection='column'
            >
              <Box h='180px' position='relative' overflow='hidden'>
                <NextImage
                  src={SERVICE_IMAGES[i]}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
                <Text
                  position='absolute'
                  top={4}
                  left={5}
                  color='white'
                  fontSize='sm'
                  fontWeight={700}
                  letterSpacing='0.1em'
                  textShadow='0 1px 3px rgba(0,0,0,0.6)'
                >
                  {String(i + 1).padStart(2, '0')}
                </Text>
              </Box>
              <Box p={6} flex={1} display='flex' flexDirection='column'>
                <Heading as='h3' size='md' mb={3}>
                  {item.title}
                </Heading>
                <Text color='ink.700' fontSize='sm' lineHeight='1.6' flex={1}>
                  {item.body}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        <Box
          mt={16}
          bg='surface.raised'
          borderRadius='lg'
          p={{ base: 8, md: 12 }}
          textAlign='center'
          borderTop='4px solid'
          borderTopColor='accent.500'
        >
          <Heading as='h2' size='lg' mb={3}>
            {t.home.ctaBannerTitle}
          </Heading>
          <Text color='ink.700' fontSize='lg' mb={6}>
            {t.home.ctaBannerBody}
          </Text>
          <NextLink href='/contact' passHref legacyBehavior>
            <Button
              as='a'
              colorScheme='accent'
              size='lg'
              rightIcon={<Icon as={FiArrowRight} />}
            >
              {t.common.requestCallback}
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  );
}
