import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Icon,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import Layout from '@/components/Layout';
import { useT } from '@/lib/useT';
import {
  FiShield,
  FiClock,
  FiDroplet,
  FiAward,
  FiCheckCircle,
  FiArrowRight,
} from 'react-icons/fi';

const advantageIcons = [FiShield, FiClock, FiDroplet, FiAward];

const SERVICE_IMAGES = [
  '/mattlagi.png',
  '/glossylagi.png',
  '/satiinlagi.png',
  '/fotolagi.png',
  '/valgustusegalagi.png',
  '/mitmetasandilinelagi.png',
];

export default function Home() {
  const t = useT();

  return (
    <Layout description={t.home.heroSubtitle}>
      <Box
        bg='brand.700'
        color='white'
        position='relative'
        overflow='hidden'
        py={{ base: 16, md: 28 }}
        filter='brightness(0.92) saturate(0.88)'
        sx={{
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backdropFilter: 'blur(0.3px)',
          },
        }}
        backgroundImage={`
   linear-gradient(
    90deg,
    rgba(15,35,75,0.98) 0%,
    rgba(15,35,75,0.96) 45%,
    rgba(15,35,75,0.82) 52%,
    rgba(15,35,75,0.45) 62%,
    rgba(15,35,75,0.10) 66.5%,
    transparent 67%
  ),
    url('/heroimage.png')
  `}
        backgroundSize='cover'
        backgroundPosition='center right'
        backgroundRepeat='no-repeat'
      >
        <Container maxW='6xl' position='relative'>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={10}
            alignItems='center'
          >
            <Stack spacing={6}>
              <Text
                color='accent.300'
                fontWeight={600}
                fontSize='sm'
                letterSpacing='0.1em'
                textTransform='uppercase'
              >
                {t.home.heroEyebrow}
              </Text>
              <Heading
                as='h1'
                size='3xl'
                color='white'
                lineHeight='1.05'
                letterSpacing='-0.02em'
              >
                {t.home.heroTitle}
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='whiteAlpha.800'
                maxW='xl'
              >
                {t.home.heroSubtitle}
              </Text>
              <HStack spacing={4} flexWrap='wrap'>
                <NextLink href='/callback' passHref legacyBehavior>
                  <Button
                    as='a'
                    colorScheme='accent'
                    size='lg'
                    rightIcon={<Icon as={FiArrowRight} />}
                  >
                    {t.home.ctaPrimary}
                  </Button>
                </NextLink>
                {/* <NextLink href='/gallery' passHref legacyBehavior>
                  <Button
                    as='a'
                    size='lg'
                    variant='outline'
                    color='white'
                    borderColor='whiteAlpha.500'
                    _hover={{ bg: 'whiteAlpha.100' }}
                  >
                    {t.home.ctaSecondary}
                  </Button>
                </NextLink> */}
              </HStack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>

      <Container maxW='6xl' py={{ base: 12, md: 20 }}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          alignItems='center'
        >
          <Box>
            <Heading as='h2' size='xl' mb={5}>
              {t.home.introTitle}
            </Heading>
            <Text fontSize='lg' color='ink.700' lineHeight='1.7'>
              {t.home.introBody}
            </Text>
          </Box>
          <Box
            bg='surface.raised'
            p={8}
            borderRadius='lg'
            borderLeft='4px solid'
            borderLeftColor='brand.700'
            boxShadow='0 4px 6px rgba(0, 0, 0, 0.07)'
            border='1px solid'
            borderColor='surface.sunken'
          >
            <VStack align='stretch' spacing={4}>
              {t.home.benefits.map((item, i) => (
                <HStack key={i} spacing={3}>
                  <Icon as={FiCheckCircle} color='brand.700' boxSize={5} />
                  <Text fontWeight={600} color='ink.900'>
                    {item}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>

      <Box bg='surface.base' py={{ base: 12, md: 20 }}>
        <Container maxW='6xl'>
          <Heading as='h2' size='xl' mb={10} textAlign='center'>
            {t.home.advantagesTitle}
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6}>
            {t.home.advantages.map((a, i) => {
              const IconCmp = advantageIcons[i];
              return (
                <Box
                  key={i}
                  bg='surface.raised'
                  p={7}
                  borderRadius='lg'
                  border='1px solid'
                  borderColor='surface.sunken'
                  boxShadow='0 2px 8px rgba(0, 0, 0, 0.06)'
                  _hover={{
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                    transform: 'translateY(-4px)',
                  }}
                  transition='all 0.3s ease'
                >
                  <Box
                    w='48px'
                    h='48px'
                    borderRadius='md'
                    bg='brand.50'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    mb={4}
                  >
                    <Icon as={IconCmp} boxSize={6} color='brand.700' />
                  </Box>
                  <Heading as='h3' size='sm' mb={3} color='brand.900'>
                    {a.title}
                  </Heading>
                  <Text color='ink.700' fontSize='sm' lineHeight='1.7'>
                    {a.body}
                  </Text>
                </Box>
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>

      <Container maxW='6xl' py={{ base: 12, md: 20 }}>
        <Heading as='h2' size='xl' mb={10} textAlign='center'>
          {t.home.typesTitle}
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
          {t.services.items.slice(0, 6).map((s, i) => (
            <Box
              key={i}
              bg='surface.raised'
              borderRadius='lg'
              overflow='hidden'
              border='1px solid'
              borderColor='surface.sunken'
              boxShadow='0 2px 8px rgba(0, 0, 0, 0.06)'
              _hover={{
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                transform: 'translateY(-4px)',
              }}
              transition='all 0.3s ease'
            >
              <Box h='160px' position='relative' overflow='hidden'>
                <NextImage
                  src={SERVICE_IMAGES[i]}
                  alt={s.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
                <Text
                  position='absolute'
                  bottom={3}
                  right={4}
                  color='white'
                  fontSize='6xl'
                  fontWeight={700}
                  textShadow='0 1px 4px rgba(0,0,0,0.5)'
                >
                  {String(i + 1).padStart(2, '0')}
                </Text>
              </Box>
              <Box p={5}>
                <Heading as='h3' size='sm'>
                  {s.title}
                </Heading>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
        <Box textAlign='center' mt={10}>
          <NextLink href='/services' passHref legacyBehavior>
            <Button
              as='a'
              variant='outline'
              size='lg'
              rightIcon={<Icon as={FiArrowRight} />}
            >
              {t.common.learnMore}
            </Button>
          </NextLink>
        </Box>
      </Container>

      <Box bg='brand.700' color='white' py={{ base: 12, md: 16 }}>
        <Container maxW='4xl' textAlign='center'>
          <Heading as='h2' size='xl' color='white' mb={4}>
            {t.home.ctaBannerTitle}
          </Heading>
          <Text fontSize='lg' color='whiteAlpha.800' mb={8}>
            {t.home.ctaBannerBody}
          </Text>
          <NextLink href='/callback' passHref legacyBehavior>
            <Button
              as='a'
              colorScheme='accent'
              size='lg'
              rightIcon={<Icon as={FiArrowRight} />}
            >
              {t.common.requestCallback}
            </Button>
          </NextLink>
        </Container>
      </Box>
    </Layout>
  );
}
