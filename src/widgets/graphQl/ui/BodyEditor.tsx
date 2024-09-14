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
    setError('');

    try {
      if (type === IBodyType.GraphQL) {
        const prettifiedQuery: IBodyOfGraphQl = gqlPrettier(graphQL);

        setGraphQl(prettifiedQuery);
        setBody({ type: IBodyType.GraphQL, body: prettifiedQuery });
      } else {
        const parsed: IBodyOfJson = JSON.parse(json);

        setBody({ type: IBodyType.JSON, body: parsed });
      }
    } catch (error) {
      setError(
        type === IBodyType.GraphQL
          ? 'Invalid GraphQL query...'
          : 'Invalid JSON...',
      );
      setBody(null);
    }
  };

  const handleChangeOfJson = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e?.target || {};

    setJson(value);
  };

  const handleChangeOfGraphQl = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { value } = e?.target || {};

    setGraphQl(value);
  };

  useEffect(() => {
    setError('');
    setGraphQl('');
    setJson('');
    setBody(null);
  }, [type]);

  return (
    <Box margin="1em 0">
      <div
        style={{
          marginBottom: '0.5em',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
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
      </div>
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
