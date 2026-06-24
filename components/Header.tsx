import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
  Button,
  Text,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import LanguageSwitcher from './LanguageSwitcher';
import { useT } from '@/lib/useT';

const navItems = [
  { key: 'home', href: '/' },
  { key: 'ceilingTypes', href: '/ceiling-types' },
  { key: 'about', href: '/about' },
  { key: 'faq', href: '/faq' },
  { key: 'contact', href: '/contact' },
] as const;

export default function Header() {
  const t = useT();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isActive = (href: string) =>
    href === '/' ? router.pathname === '/' : router.pathname.startsWith(href);

  return (
    <Box
      as='header'
      bg='surface.raised'
      borderBottom='1px solid'
      borderColor='surface.sunken'
      position='sticky'
      top={0}
      zIndex={20}
      boxShadow='0 1px 3px rgba(0, 0, 0, 0.05)'
    >
      <Container maxW='6xl' py={4}>
        <Flex align='center' justify='space-between'>
          <NextLink href='/' passHref legacyBehavior>
            <Box as='a' display='flex' alignItems='center' gap={2}>
              <Box as='img' src='/logo-pinglagi-2.svg' alt={t.brand} h='36px' />
              {/* <Text fontWeight={700} fontSize="xl" color="brand.700" letterSpacing="-0.02em">
                {t.brand}
              </Text> */}
            </Box>
          </NextLink>

          <HStack spacing={1} display={{ base: 'none', lg: 'flex' }}>
            {navItems.map((item) => (
              <NextLink key={item.key} href={item.href} passHref legacyBehavior>
                <Button
                  as='a'
                  variant='ghost'
                  size='sm'
                  color={isActive(item.href) ? 'brand.700' : 'ink.700'}
                  fontWeight={isActive(item.href) ? 700 : 500}
                  borderBottom={
                    isActive(item.href) ? '2px solid' : '2px solid transparent'
                  }
                  borderColor={
                    isActive(item.href) ? 'brand.700' : 'transparent'
                  }
                  borderRadius={0}
                  transition='all 0.2s ease'
                  _hover={{ color: 'brand.700', bg: 'transparent' }}
                >
                  {t.nav[item.key]}
                </Button>
              </NextLink>
            ))}
          </HStack>

          <HStack spacing={2}>
            <LanguageSwitcher />
            <NextLink href='/contact' passHref legacyBehavior>
              <Button
                as='a'
                colorScheme='accent'
                size='sm'
                display={{ base: 'none', md: 'inline-flex' }}
              >
                {t.nav.callback}
              </Button>
            </NextLink>
            <IconButton
              aria-label='Open menu'
              icon={<FiMenu />}
              variant='ghost'
              display={{ base: 'inline-flex', lg: 'none' }}
              onClick={onOpen}
            />
          </HStack>
        </Flex>
      </Container>

      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color='brand.700'>{t.brand}</DrawerHeader>
          <DrawerBody>
            <VStack align='stretch' spacing={1}>
              {navItems.map((item) => (
                <NextLink
                  key={item.key}
                  href={item.href}
                  passHref
                  legacyBehavior
                >
                  <Button
                    as='a'
                    variant='ghost'
                    justifyContent='flex-start'
                    color={isActive(item.href) ? 'brand.700' : 'ink.700'}
                    fontWeight={isActive(item.href) ? 700 : 500}
                    onClick={onClose}
                  >
                    {t.nav[item.key]}
                  </Button>
                </NextLink>
              ))}
              <NextLink href='/contact' passHref legacyBehavior>
                <Button as='a' colorScheme='accent' mt={4} onClick={onClose}>
                  {t.nav.callback}
                </Button>
              </NextLink>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
