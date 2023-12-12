import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    brand: Yup.string().required('Brand is required'),
    model: Yup.string().required('Model is required'),
    year: Yup.string().required('Year is required'),
    pricePerDay: Yup.string().required('Price is required'),
    fuelType: Yup.string().required('Fuel type is required'),
    transmissionType: Yup.string().required('Transmission type is required'),
    capacity: Yup.string().required('Capacity is required'),
});

export default validationSchema;