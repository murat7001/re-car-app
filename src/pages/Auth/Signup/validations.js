import * as yup from 'yup';

const validations = yup.object().shape({
    name: yup.string().required('Required field.'),
    surname: yup.string().required('Required field.'),
    email: yup.string().email('Enter a valid email.').required('Required field.'),
    password: yup.string().min(5, 'The password must be at least 5 characters.').required('Required field.'),
    passwordConfirm: yup
        .string()
        .min(5, 'The password must be at least 5 characters.')
        .oneOf([yup.ref('password')], 'Passwords do not match.')
        .required('Required field.'),
});

export default validations;