import { useRouter } from 'next/router';
import { translations, type Locale, type Translations } from './translations';

export function useT(): Translations {
  const { locale, defaultLocale } = useRouter();
  const key = (locale ?? defaultLocale ?? 'et') as Locale;
  return translations[key] ?? translations.et;
}
