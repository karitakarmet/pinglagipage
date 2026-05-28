import { Box, Container, SimpleGrid, Stack, Text, Heading, Icon } from '@chakra-ui/react';
import { FiTarget, FiUsers, FiAward } from 'react-icons/fi';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useT } from '@/lib/useT';

const valueIcons = [FiAward, FiTarget, FiUsers];

export default function About() {
  const t = useT();

  return (
    <Layout pageTitle={t.about.title} description={t.about.paragraphs[0]}>
      <PageHeader title={t.about.title} />

      <Container maxW="4xl" py={{ base: 12, md: 16 }}>
        <Stack spacing={6}>
          {t.about.paragraphs.map((p, i) => (
            <Text key={i} fontSize="lg" color="ink.700" lineHeight="1.8">
              {p}
            </Text>
          ))}
        </Stack>
      </Container>

      <Box bg="surface.sunken" py={{ base: 12, md: 16 }}>
        <Container maxW="6xl">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            {t.about.valuesTitle}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {t.about.values.map((v, i) => {
              const IconCmp = valueIcons[i];
              return (
                <Box
                  key={i}
                  bg="surface.raised"
                  p={8}
                  borderRadius="lg"
                  boxShadow="sm"
                  textAlign="center"
                >
                  <Box
                    w="56px"
                    h="56px"
                    borderRadius="full"
                    bg="brand.50"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mx="auto"
                    mb={5}
                  >
                    <Icon as={IconCmp} boxSize={6} color="brand.700" />
                  </Box>
                  <Heading as="h3" size="md" mb={3}>
                    {v.title}
                  </Heading>
                  <Text color="ink.700" lineHeight="1.6">
                    {v.body}
                  </Text>
                </Box>
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  );
}
