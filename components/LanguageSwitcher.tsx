import { Menu, MenuButton, MenuItem, MenuList, Button, Icon } from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';
import { useRouter } from 'next/router';

const labels: Record<string, string> = {
  et: 'EE',
  en: 'EN',
  ru: 'RU',
};

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, locales, pathname, asPath, query } = router;
  const active = locale ?? 'et';

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<Icon as={FiChevronDown} />}
        variant="ghost"
        size="sm"
        color="brand.700"
        fontWeight={600}
      >
        {labels[active]}
      </MenuButton>
      <MenuList minW="120px">
        {(locales ?? []).map((l) => (
          <MenuItem
            key={l}
            onClick={() => router.push({ pathname, query }, asPath, { locale: l })}
            fontWeight={l === active ? 700 : 500}
            color={l === active ? 'brand.700' : 'ink.700'}
          >
            {labels[l]}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
