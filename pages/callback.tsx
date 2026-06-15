import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  HStack,
  Icon,
  Heading,
} from '@chakra-ui/react';
import { FiPhone, FiMail, FiClock } from 'react-icons/fi';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import CallbackForm from '@/components/CallbackForm';
import { useT } from '@/lib/useT';

export default function Callback() {
  const t = useT();

  return (
    <Layout pageTitle={t.callback.title} description={t.callback.intro}>
      <PageHeader title={t.callback.title} intro={t.callback.intro} />

      <Container maxW='5xl' py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <CallbackForm />

          <Stack spacing={6}>
            <Heading as='h2' size='md' color='brand.700'>
              {t.contact.title}
            </Heading>
            <HStack spacing={4} align='start'>
              <Box
                w='40px'
                h='40px'
                borderRadius='md'
                bg='brand.50'
                display='flex'
                alignItems='center'
                justifyContent='center'
                flexShrink={0}
              >
                <Icon as={FiPhone} color='brand.700' />
              </Box>
              <Box>
                <Text fontSize='sm' color='ink.500' fontWeight={600}>
                  {t.contact.phoneLabel}
                </Text>
                <Text fontSize='lg' color='brand.700' fontWeight={600}>
                  {t.contact.phone}
                </Text>
              </Box>
            </HStack>
            <HStack spacing={4} align='start'>
              <Box
                w='40px'
                h='40px'
                borderRadius='md'
                bg='brand.50'
                display='flex'
                alignItems='center'
                justifyContent='center'
                flexShrink={0}
              >
                <Icon as={FiMail} color='brand.700' />
              </Box>
              <Box>
                <Text fontSize='sm' color='ink.500' fontWeight={600}>
                  {t.contact.emailLabel}
                </Text>
                <Text fontSize='lg' color='brand.700' fontWeight={600}>
                  {t.contact.email}
                </Text>
              </Box>
            </HStack>
            <HStack spacing={4} align='start'>
              <Box
                w='40px'
                h='40px'
                borderRadius='md'
                bg='brand.50'
                display='flex'
                alignItems='center'
                justifyContent='center'
                flexShrink={0}
              >
                <Icon as={FiClock} color='brand.700' />
              </Box>
              <Box>
                <Text fontSize='sm' color='ink.500' fontWeight={600}>
                  {t.contact.hoursLabel}
                </Text>
                <Text fontSize='lg' color='brand.700' fontWeight={600}>
                  {t.contact.hours}
                </Text>
              </Box>
            </HStack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/contact',
      permanent: false,
    },
  };
}
