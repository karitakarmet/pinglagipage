import { Box, Container, SimpleGrid, Text, Heading } from '@chakra-ui/react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useT } from '@/lib/useT';

const projects = [
  { tone: 'brand.700', label: 'Apartment, Tallinn' },
  { tone: 'brand.500', label: 'Office, Tartu' },
  { tone: 'brand.600', label: 'House, Pärnu' },
  { tone: 'accent.700', label: 'Restaurant, Tallinn' },
  { tone: 'brand.800', label: 'Spa, Narva' },
  { tone: 'brand.500', label: 'Apartment, Viljandi' },
  { tone: 'accent.600', label: 'Kindergarten, Tartu' },
  { tone: 'brand.700', label: 'Penthouse, Tallinn' },
  { tone: 'brand.600', label: 'Salon, Rakvere' },
];

export default function Gallery() {
  const t = useT();

  return (
    <Layout pageTitle={t.gallery.title} description={t.gallery.intro}>
      <PageHeader title={t.gallery.title} intro={t.gallery.intro} />

      <Container maxW="6xl" py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={5}>
          {projects.map((p, i) => (
            <Box
              key={i}
              h="260px"
              borderRadius="lg"
              bg={p.tone}
              position="relative"
              overflow="hidden"
              cursor="pointer"
              _hover={{ transform: 'scale(1.02)' }}
              transition="all 0.3s"
            >
              <Box
                position="absolute"
                inset={0}
                bgGradient="linear(to-b, transparent 50%, blackAlpha.700)"
              />
              <Text
                position="absolute"
                top={4}
                right={5}
                color="whiteAlpha.300"
                fontSize="6xl"
                fontWeight={700}
              >
                {String(i + 1).padStart(2, '0')}
              </Text>
              <Box position="absolute" bottom={4} left={5} right={5}>
                <Text color="accent.300" fontSize="xs" fontWeight={700} letterSpacing="0.1em" textTransform="uppercase">
                  {t.gallery.placeholder} {i + 1}
                </Text>
                <Heading as="h3" size="sm" color="white" mt={1}>
                  {p.label}
                </Heading>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
