import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { FC, useEffect, useState } from 'react';
import {
  IBodyEditorProps,
  IBodyOfGraphQl,
  IBodyOfJson,
  IBodyType,
} from '../model/bodyEditorModel';
import gqlPrettier from 'graphql-prettier';
import { format } from 'graphql-formatter';

const BodyEditor: FC<IBodyEditorProps> = ({ setBody }) => {
  const [type, setType] = useState<IBodyType>(IBodyType.JSON);
  const [graphQL, setGraphQl] = useState<string>('');
  const [json, setJson] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleChangeType = (e: SelectChangeEvent<string>): void => {
    const { value } = e?.target || {};

    if (!value) {
      return;
    }

    setType(value as IBodyType);
  };

  const prettifyQuery = (): void => {
    try {
      if (type === IBodyType.GraphQL) {
        const prettifiedQuery: IBodyOfGraphQl = gqlPrettier(graphQL);

        setGraphQl(prettifiedQuery);
      } else {
        const result = format(json);

        setJson(result);
      }
    } catch (error) {
      setError(
        type === IBodyType.GraphQL
          ? 'Invalid GraphQL query...'
          : 'Invalid JSON...',
      );
    }
  };

  const handleChangeOfJson = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setError('');
    const { value } = e?.target || {};
    setJson(value);

    try {
      const parsed: IBodyOfJson = JSON.parse(value);
      setBody({ type: IBodyType.JSON, body: parsed });
    } catch {
      setError('Invalid JSON...');
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
      setBody({ type: IBodyType.GraphQL, body: prettifiedQuery });
    } catch {
      setError('Invalid GraphQL query...');
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
    <Box margin="1em 0">
      <Box marginBottom="0.5em" display="flex" justifyContent="space-around">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="body-type-select-label"
            id="body-type-select"
            value={type}
            label="Type"
            onChange={handleChangeType}
          >
            <MenuItem value={IBodyType.JSON}>{IBodyType.JSON}</MenuItem>
            <MenuItem value={IBodyType.GraphQL}>{IBodyType.GraphQL}</MenuItem>
          </Select>
        </FormControl>

        <Button onClick={prettifyQuery} variant="contained" color="primary">
          Prettify
        </Button>
      </Box>
      {type === IBodyType.JSON ? (
        <TextField
          label="Body"
          placeholder={`Example: {"model":"Cooper"}`}
          fullWidth
          multiline
          rows={3}
          onChange={handleChangeOfJson}
          value={json}
          helperText={error}
        />
      ) : (
        <TextField
          label="Body"
          placeholder={`Example: query Viewer {
                user {
                    id
                    name
                  }
              }`}
          fullWidth
          multiline
          rows={6}
          onChange={handleChangeOfGraphQl}
          value={graphQL}
          helperText={error}
        />
      )}
    </Box>
  );
};

export default BodyEditor;