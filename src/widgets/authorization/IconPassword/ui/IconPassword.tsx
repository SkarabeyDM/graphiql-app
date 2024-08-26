import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { IIconPassword } from '@widgets/authorization/model/authorization.model';

const IconPassword = (props: IIconPassword) => {
  const { showPassword, setShowPassword } = props;

  return (
    <IconButton
      onClick={() => setShowPassword(!showPassword)}
      sx={{
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
      }}
    >
      {showPassword ? <Visibility /> : <VisibilityOff />}
    </IconButton>
  );
};

export default IconPassword;
