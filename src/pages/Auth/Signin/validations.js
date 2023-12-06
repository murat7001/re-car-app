import * as yup from 'yup';

const validations = yup.object().shape({
    userName: yup.string().required('Required field.'),
    password: yup.string().min(5, 'The password must be at least 5 characters.').required('Required field.'),
});

export default validations;
