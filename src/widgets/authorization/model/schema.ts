import * as yup from 'yup';

const regExpEmail = new RegExp(/^\S+@\S+\.\S+$/);

export const schema = yup.object().shape({
  email: yup
    .string()
    .required('This field is required')
    .matches(regExpEmail, 'Invalid mail format'),
  password: yup
    .string()
    .required('This field is required')
    .matches(/[a-z]+/, 'Password must contain lowercase letter')
    .matches(/[A-Z]+/, 'Password must contain uppercase letter')
    .matches(/[0-9]+/, 'Password must contain digit')
    .matches(/[@#$%&]+/, 'Password must contain (@, #, $, %, &)')
    .matches(/.{8,}$/, 'Password must contain 8 characters'),
  confirmPassword: yup
    .string()
    .required('This field is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});
