import { Box, Container, Heading, Text } from '@chakra-ui/react';

type Props = {
  title: string;
  intro?: string;
};

export default function PageHeader({ title, intro }: Props) {
  return (
    <Box bg="brand.700" color="white" py={{ base: 12, md: 16 }} position="relative" overflow="hidden">
      <Box
        position="absolute"
        right="-100px"
        top="-100px"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="brand.600"
        opacity={0.4}
      />
      <Box
        position="absolute"
        left="-80px"
        bottom="-120px"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="accent.500"
        opacity={0.08}
      />
      <Container maxW="6xl" position="relative">
        <Heading as="h1" size="2xl" color="white" mb={intro ? 4 : 0} letterSpacing="-0.02em">
          {title}
        </Heading>
        {intro && (
          <Text fontSize={{ base: 'md', md: 'lg' }} color="whiteAlpha.800" maxW="3xl">
            {intro}
          </Text>
        )}
      </Container>
    </Box>
  );
}
