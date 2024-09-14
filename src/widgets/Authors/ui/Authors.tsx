import { Container, List } from '@mui/material';
import { AuthorCard } from './AuthorCard';
import { useTranslations } from 'next-intl';

export const Authors = () => {
  const t = useTranslations('Authors');

  return (
    <Container component={'section'} maxWidth="xs">
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <AuthorCard
          name={t('authors.Jamal.name')}
          description={t('authors.Jamal.description')}
          avatar="https://avatars.githubusercontent.com/u/46022177?s=64&v=4"
          link="https://github.com/SkarabeyDM"
        />
        <AuthorCard
          name={t('authors.Mikhail.name')}
          description={t('authors.Mikhail.description')}
          avatar="https://avatars.githubusercontent.com/u/90133332?s=64&v=4"
          link="https://github.com/mikhaelHan"
        />
        <AuthorCard
          name={t('authors.Natalia.name')}
          description={t('authors.Natalia.description')}
          avatar="https://avatars.githubusercontent.com/u/48165950?s=64&v=4"
          link="https://github.com/harmfuly"
        />
      </List>
    </Container>
  );
};
