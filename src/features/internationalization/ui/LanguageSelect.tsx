'use client';
import { MenuItem, Select, SelectProps } from '@mui/material';
import { Locales, usePathname, useRouter } from '@shared/i18n';
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';

export const LanguageSelect = (props: SelectProps) => {
  const localeStart = useLocale() as Locales;
  const [locale, setLocale] = useState<Locales>(Locales.English);
  const router = useRouter();
  const pathname = usePathname();
  const onChangeLocale = (lang: string) => {
    router.replace(pathname, { locale: lang as Locales });
  };

  useEffect(() => {
    setLocale(localeStart);
  }, []);

  useEffect(() => {
    onChangeLocale(locale);
  }, [locale]);

  return (
    <Select
      variant="outlined"
      value={locale}
      onChange={(event) => setLocale(event.target.value as Locales)}
      slotProps={{ root: { sx: { py: 1, px: 1.5 } }, input: { sx: { p: 0 } } }}
      {...props}
    >
      <MenuItem value={Locales.English}>EN</MenuItem>
      <MenuItem value={Locales.Russian}>RU</MenuItem>
    </Select>
  );
};
