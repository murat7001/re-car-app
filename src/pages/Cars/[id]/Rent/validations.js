import * as yup from 'yup';

const validations = yup.object().shape({
    adress: yup.string().required('Address is required'),
    phone: yup.string().required('Phone is required'),
});

export default validations;


