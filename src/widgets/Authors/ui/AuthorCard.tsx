import { Stack, Avatar, Typography, IconButton, Paper } from '@mui/material';

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
  <Paper component="li" elevation={3}>
    <Stack direction="row" alignItems="center" p={1} gap={1}>
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
  </Paper>
);
