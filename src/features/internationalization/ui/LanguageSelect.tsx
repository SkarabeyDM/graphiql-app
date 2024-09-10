'use client';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Locales, usePathname, useRouter, routing } from '@shared/i18n';
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';

const SX_UPPERCASE = { textTransform: 'uppercase' };

export const LanguageSelect = () => {
  const initialLocale = useLocale() as Locales;
  const [selectedLocale, setLocale] = useState<Locales>(routing.defaultLocale);
  const router = useRouter();
  const pathname = usePathname();
  const changeLocale = (lang: string) => {
    router.replace(pathname, { locale: lang as Locales });
  };

  const handleChangeLocale = (event: SelectChangeEvent<string>) => {
    const newLocale = event?.target?.value;

    if (!newLocale) return;

    setLocale(newLocale as Locales);
  };

  useEffect(() => {
    setLocale(initialLocale);
  }, []);

  useEffect(() => {
    changeLocale(selectedLocale);
  }, [selectedLocale]);

  return (
    <Select
      variant="outlined"
      value={selectedLocale}
      onChange={handleChangeLocale}
      sx={SX_UPPERCASE}
      slotProps={{ root: { sx: { py: 1, px: 1.5 } }, input: { sx: { p: 0 } } }}
    >
      {[Locales.English, Locales.Russian].map((lang) => (
        <MenuItem key={lang} value={lang} sx={SX_UPPERCASE}>
          {lang}
        </MenuItem>
      ))}
    </Select>
  );
};
