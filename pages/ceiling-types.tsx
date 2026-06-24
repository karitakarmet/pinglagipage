import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useT } from '@/lib/useT';

const CEILING_TYPES = [
  {
    key: 'matte',
    image: '/mattlagi.png',
  },
  {
    key: 'glossy',
    image: '/glossylagi.png',
  },
  {
    key: 'satin',
    image: '/satiinlagi.png',
  },
  {
    key: 'photo',
    image: '/fotolagi.png',
  },
  {
    key: 'lighting',
    image: '/valgustusegalagi.png',
  },
  {
    key: 'multilevel',
    image: '/mitmetasandilinelagi.png',
  },
];

export default function CeilingTypes() {
  const t = useT();
  const services = t.services.items;

  return (
    <Layout pageTitle={t.home.typesTitle} description={t.services.intro}>
      <PageHeader title={t.home.typesTitle} intro={t.services.intro} />

      <Container maxW='6xl' py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {CEILING_TYPES.map((type, idx) => (
            <VStack
              key={type.key}
              align='stretch'
              spacing={4}
              bg='surface.raised'
              borderRadius='lg'
              overflow='hidden'
              boxShadow='md'
              transition='all 0.3s ease'
              _hover={{ boxShadow: 'lg', transform: 'translateY(-4px)' }}
            >
              <Box position='relative' w='full' h='240px'>
                <NextImage
                  src={type.image}
                  alt={services[idx]?.title || 'Ceiling type'}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
              <Stack spacing={3} px={6} pb={6}>
                <Heading as='h3' size='md' color='brand.700'>
                  {services[idx]?.title}
                </Heading>
                <Text fontSize='md' color='ink.700' lineHeight='1.6'>
                  {services[idx]?.body}
                </Text>
              </Stack>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
