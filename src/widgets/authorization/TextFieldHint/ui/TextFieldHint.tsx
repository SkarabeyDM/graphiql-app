import { Box } from '@mui/material';

const TextFieldHint = (props: { text: string }) => {
  const { text } = props;

  return (
    <Box
      component="div"
      position="absolute"
      left="0"
      bottom="-1.1em"
      color="#ff0000"
      fontSize="0.6em"
    >
      {text}
    </Box>
  );
};

export default TextFieldHint;
