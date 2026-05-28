import {
  Box,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Text,
  Button,
  Icon,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useT } from '@/lib/useT';

export default function FAQ() {
  const t = useT();

  return (
    <Layout pageTitle={t.faq.title}>
      <PageHeader title={t.faq.title} />

      <Container maxW="3xl" py={{ base: 12, md: 16 }}>
        <Accordion allowToggle defaultIndex={[0]}>
          {t.faq.items.map((item, i) => (
            <AccordionItem
              key={i}
              border="1px solid"
              borderColor="surface.sunken"
              bg="surface.raised"
              borderRadius="md"
              mb={3}
              overflow="hidden"
            >
              <h3>
                <AccordionButton
                  py={5}
                  px={6}
                  _expanded={{ bg: 'brand.50', color: 'brand.700' }}
                >
                  <Box flex="1" textAlign="left" fontWeight={600} fontSize="md">
                    {item.q}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel px={6} pb={5} color="ink.700" lineHeight="1.7">
                {item.a}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>

        <Box
          mt={12}
          bg="brand.700"
          color="white"
          p={{ base: 8, md: 10 }}
          borderRadius="lg"
          textAlign="center"
        >
          <Heading as="h2" size="md" color="white" mb={3}>
            {t.home.ctaBannerTitle}
          </Heading>
          <Text color="whiteAlpha.800" mb={6}>
            {t.home.ctaBannerBody}
          </Text>
          <NextLink href="/callback" passHref legacyBehavior>
            <Button as="a" colorScheme="accent" size="lg" rightIcon={<Icon as={FiArrowRight} />}>
              {t.common.requestCallback}
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  );
}
