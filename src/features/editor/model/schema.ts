import * as yup from 'yup';

export const headersSchema = yup.object().shape({
  key: yup.string().required('This field is required'),
  value: yup.string().required('This field is required'),
});
