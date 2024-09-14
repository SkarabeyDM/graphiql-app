import {
  Stack,
  Avatar,
  Typography,
  IconButton,
  Container,
} from '@mui/material';

export interface IAuthorCardProps {
  avatar: string;
  name: string;
  description: string;
  link: string;
}

export const AuthorCard: React.FC<IAuthorCardProps> = ({
  avatar,
  name,
  description,
  link,
}) => (
  <Container component={'li'} maxWidth="xs">
    <Stack direction="row" spacing={2} alignItems="center">
      <IconButton href={link} target="_blank" rel="noopener noreferrer">
        <Avatar src={avatar} alt={name} />
      </IconButton>
      <Stack>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Stack>
    </Stack>
  </Container>
);
