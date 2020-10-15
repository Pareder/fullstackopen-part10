import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1)
    .max(30)
    .required('Repository owner name is required'),
  password: yup
    .string()
    .min(5)
    .max(30)
    .required('Password is required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
    .required('Password confirmation is required'),
});

export default validationSchema;
