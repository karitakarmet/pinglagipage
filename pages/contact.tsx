import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Heading,
  Icon,
  HStack,
  Link,
} from '@chakra-ui/react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import CallbackForm from '@/components/CallbackForm';
import { useT } from '@/lib/useT';

export default function Contact() {
  const t = useT();

  const items = [
    {
      icon: FiPhone,
      label: t.contact.phoneLabel,
      value: t.contact.phone,
      href: `tel:${t.contact.phone.replace(/\s/g, '')}`,
      note: undefined,
    },
    {
      icon: FiMail,
      label: t.contact.emailLabel,
      value: t.contact.email,
      href: `mailto:${t.contact.email}`,
      note: undefined,
    },
    {
      icon: FiClock,
      label: t.contact.hoursLabel,
      value: t.contact.hours,
      href: undefined,
      note: t.contact.hoursNote,
    },
  ];

  return (
    <Layout pageTitle={t.contact.title} description={t.contact.intro}>
      <PageHeader title={t.contact.title} intro={t.contact.intro} />

      <Container maxW='6xl' py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
          <Stack spacing={6}>
            <Heading as='h2' size='md' color='brand.700'>
              {t.contact.title}
            </Heading>
            {items.map((item, i) => (
              <HStack key={i} spacing={4} align='start'>
                <Box
                  w='44px'
                  h='44px'
                  borderRadius='md'
                  bg='brand.50'
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  flexShrink={0}
                >
                  <Icon as={item.icon} color='brand.700' boxSize={5} />
                </Box>
                <Box>
                  <Text
                    fontSize='sm'
                    color='ink.500'
                    fontWeight={600}
                    textTransform='uppercase'
                    letterSpacing='0.05em'
                  >
                    {item.label}
                  </Text>
                  {item.href ? (
                    <Link
                      href={item.href}
                      fontSize='lg'
                      color='brand.700'
                      fontWeight={600}
                      _hover={{ color: 'accent.600' }}
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <Text fontSize='lg' color='brand.700' fontWeight={600}>
                      {item.value}
                    </Text>
                  )}
                  {item.note && (
                    <Text fontSize='sm' color='ink.500' mt={1}>
                      {item.note}
                    </Text>
                  )}
                </Box>
              </HStack>
            ))}
          </Stack>

          <Box>
            <CallbackForm />
          </Box>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
