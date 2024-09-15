import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material';
import { FC, useEffect, useState } from 'react';
import {
  IBodyEditorProps,
  IBodyOfGraphQl,
  IBodyOfJson,
  BodyType,
} from '../model/bodyEditorModel';
import gqlPrettier from 'graphql-prettier';
import { format } from 'graphql-formatter';
import { AutoAwesome } from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import { examples } from '@features/editor/lib';

const BodyEditor: FC<IBodyEditorProps> = ({ setBody }) => {
  const t = useTranslations('BodyEditor');
  const [type, setType] = useState<BodyType>(BodyType.JSON);
  const [graphQL, setGraphQl] = useState<string>('');
  const [json, setJson] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleChangeType = (e: SelectChangeEvent<string>): void => {
    const { value } = e?.target || {};

    if (!value) {
      return;
    }

    setType(value as BodyType);
  };

  const prettifyQuery = (): void => {
    try {
      if (type === BodyType.GraphQL) {
        const prettifiedQuery: IBodyOfGraphQl = gqlPrettier(graphQL);

        setGraphQl(prettifiedQuery);
      } else {
        const result = format(json);

        setJson(result);
      }
    } catch (error) {
      setError(t(type === BodyType.GraphQL ? 'invalidGraphQL' : 'invalidJson'));
    }
  };

  const handleChangeOfJson = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setError('');
    const { value } = e?.target || {};
    setJson(value);

    try {
      const parsed: IBodyOfJson = JSON.parse(value);
      setBody({ type: BodyType.JSON, body: parsed });
    } catch {
      setError(t('invalidJson'));
      setBody(null);
    }
  };

  const handleChangeOfGraphQl = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setError('');
    const { value } = e?.target || {};
    setGraphQl(value);

    try {
      const prettifiedQuery: IBodyOfGraphQl = gqlPrettier(value);
      setBody({ type: BodyType.GraphQL, body: prettifiedQuery });
    } catch {
      setError(t('invalidGraphQL'));
      setBody(null);
    }
  };

  useEffect(() => {
    setError('');
    setGraphQl('');
    setJson('');
    setBody(null);
  }, [type]);

  return (
    <Stack pt={1} gap={1}>
      <Stack direction="row" gap={1}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{t('bodyType')}</InputLabel>
          <Select
            labelId="body-type-select-label"
            id="body-type-select"
            value={type}
            label={t('bodyType')}
            onChange={handleChangeType}
          >
            <MenuItem value={BodyType.JSON}>{BodyType.JSON}</MenuItem>
            <MenuItem value={BodyType.GraphQL}>{BodyType.GraphQL}</MenuItem>
          </Select>
        </FormControl>

        <IconButton onClick={prettifyQuery} color="primary">
          <AutoAwesome />
        </IconButton>
      </Stack>
      {type === BodyType.JSON ? (
        <TextField
          label={t('body')}
          placeholder={`${t('example')}: ${examples.json}`}
          fullWidth
          multiline
          rows={3}
          onChange={handleChangeOfJson}
          value={json}
          helperText={error}
        />
      ) : (
        <TextField
          label={t('body')}
          placeholder={`${t('example')}: ${examples.graphql}`}
          fullWidth
          multiline
          rows={6}
          onChange={handleChangeOfGraphQl}
          value={graphQL}
          helperText={error}
        />
      )}
    </Stack>
  );
};

export default BodyEditor;
