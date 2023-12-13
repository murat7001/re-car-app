import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    name: Yup.string().required('Name is required'),
    surname: Yup.string().required('Surname is required'),
    password: Yup.string().min(5, 'Password must be at least 5 characters').required('Password is required'),
});

export default validationSchema;