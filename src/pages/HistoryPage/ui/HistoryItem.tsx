import { ICRUD } from '@features/editor/model/methodEditorModel';
import { Chip, Paper, Stack, Typography } from '@mui/material';
import { EditorType } from '@shared/model';
import { Link } from '@shared/ui';
import { FC } from 'react';

export interface IHistoryItemProps {
  editorType: EditorType;
  url: string;
  method: ICRUD;
}

export const HistoryItem: FC<IHistoryItemProps> = ({
  editorType,
  url,
  method,
}) => {
  const editorUrl = `/editor/${editorType === EditorType.GraphQL ? 'graphiql' : 'restfull'}`;
  return (
    <Paper variant="outlined">
      <Stack p={1} alignItems="flex-start" gap={1}>
        <Link href={editorUrl}>
          <Typography
            color="text.secondary"
            sx={{ fontFamily: 'monospace' }}
            overflow="auto"
          >
            {url}
          </Typography>
        </Link>
        <Stack direction="row" gap={1}>
          <Chip label={editorType} color="primary" size="small" />
          <Chip label={method} color="success" size="small" />
        </Stack>
      </Stack>
    </Paper>
  );
};
