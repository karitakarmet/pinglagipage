import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea,
  Alert,
  AlertIcon,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useT } from '@/lib/useT';

export default function CallbackForm() {
  const t = useT();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', time: 'now', message: '' });

  const onChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        py={10}
        borderRadius="lg"
        bg="accent.50"
        color="brand.700"
      >
        <AlertIcon boxSize="40px" mr={0} color="accent.500" />
        <Text mt={4} fontSize="lg" fontWeight={700}>
          {t.callback.success}
        </Text>
      </Alert>
    );
  }

  return (
    <Box
      as="form"
      onSubmit={onSubmit}
      bg="surface.raised"
      p={{ base: 6, md: 8 }}
      borderRadius="lg"
      boxShadow="md"
      borderTop="4px solid"
      borderTopColor="accent.500"
    >
      <Stack spacing={5}>
        <FormControl>
          <FormLabel color="ink.700" fontWeight={600} fontSize="sm">
            {t.callback.nameLabel}
          </FormLabel>
          <Input
            value={form.name}
            onChange={onChange('name')}
            placeholder={t.callback.namePlaceholder}
            bg="surface.base"
            borderColor="surface.sunken"
            focusBorderColor="brand.500"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel color="ink.700" fontWeight={600} fontSize="sm">
            {t.callback.phoneLabel}
          </FormLabel>
          <Input
            type="tel"
            value={form.phone}
            onChange={onChange('phone')}
            placeholder={t.callback.phonePlaceholder}
            bg="surface.base"
            borderColor="surface.sunken"
            focusBorderColor="brand.500"
          />
        </FormControl>

        <FormControl>
          <FormLabel color="ink.700" fontWeight={600} fontSize="sm">
            {t.callback.timeLabel}
          </FormLabel>
          <Select
            value={form.time}
            onChange={onChange('time')}
            bg="surface.base"
            borderColor="surface.sunken"
            focusBorderColor="brand.500"
          >
            <option value="now">{t.callback.timeNow}</option>
            <option value="morning">{t.callback.timeMorning}</option>
            <option value="afternoon">{t.callback.timeAfternoon}</option>
            <option value="evening">{t.callback.timeEvening}</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel color="ink.700" fontWeight={600} fontSize="sm">
            {t.callback.messageLabel}
          </FormLabel>
          <Textarea
            value={form.message}
            onChange={onChange('message')}
            placeholder={t.callback.messagePlaceholder}
            rows={3}
            bg="surface.base"
            borderColor="surface.sunken"
            focusBorderColor="brand.500"
          />
        </FormControl>

        {error && (
          <Alert status="error" borderRadius="md">
            <AlertIcon />
            Midagi läks valesti. Palun proovi uuesti või helista meile otse.
          </Alert>
        )}

        <Button type="submit" colorScheme="accent" size="lg" isLoading={loading}>
          {t.callback.submit}
        </Button>

        <Text fontSize="xs" color="ink.500" textAlign="center">
          {t.callback.privacy}
        </Text>
      </Stack>
    </Box>
  );
}
