import { FieldArray, Formik } from 'formik'
import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import ProtectedAdmin from '../../ProtectedAdmin';
import { addNewCar } from '@/store/CarSlice/carSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup';

function AddCar() {
    const dispatch = useDispatch()

    const handleSubmit = async (values, { resetForm }) => {
        try {
            dispatch(addNewCar(values));
            resetForm();
            toast.success('Car added.');
        } catch (error) {
            toast.error('Car not added');
        }
    }


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

    return (
        <Box>
            <ToastContainer position="top-center" />
            <ProtectedAdmin></ProtectedAdmin>
            <Box sx={{ background: '#F3F3F3', padding: '50px', margin: '50px', borderRadius: '30px' }}>
                <Typography variant='h4'>New Car</Typography>
                <Formik
                    initialValues={{
                        name: "",
                        brand: "",
                        model: "",
                        photos: [],
                        year: "",
                        pricePerDay: "",
                        fuelType: "",
                        transmissionType: "",
                        capacity: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        errors,
                        touched,
                    }) => (
                        <>
                            <form onSubmit={handleSubmit}>
                                <Box display={'flex'} flexDirection={'column'} >
                                    <FormControl sx={{ marginTop: '30px' }}>
                                        <TextField
                                            label="Name"
                                            name="name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            error={touched.name && Boolean(errors.name)}
                                            helperText={touched.name && errors.name}
                                        />
                                    </FormControl>

                                    <FormControl sx={{ marginTop: '16px' }}>
                                        <TextField
                                            label="Brand"
                                            name="brand"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.brand}
                                            error={touched.brand && Boolean(errors.brand)}
                                            helperText={touched.brand && errors.brand}
                                        />
                                    </FormControl>

                                    <FormControl sx={{ marginTop: '16px' }}>
                                        <TextField
                                            label="Model"
                                            name="model"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.model}
                                            error={touched.model && Boolean(errors.model)}
                                            helperText={touched.model && errors.model}
                                        />
                                    </FormControl>

                                    <FormControl sx={{ marginTop: '16px' }}>
                                        <FieldArray
                                            name="photos"
                                            render={(arrayHelpers) => (
                                                <div>
                                                    {values.photos.map((photo, index) => (
                                                        <Box sx={{ marginTop: '8px' }} key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                            <TextField
                                                                label={`Photo ${index + 1}`}
                                                                name={`photos.${index}`}
                                                                value={photo}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                            />
                                                            <Button variant="contained" color="error" onClick={() => arrayHelpers.remove(index)}>
                                                                Remove
                                                            </Button>
                                                        </Box>
                                                    ))}

                                                    <Button variant="contained" style={{ marginTop: '8px' }} color="success" onClick={() => arrayHelpers.push('')}>
                                                        Add a Photo
                                                    </Button>
                                                </div>
                                            )}
                                        />

                                    </FormControl>

                                    <FormControl sx={{ marginTop: '16px' }}>
                                        <TextField
                                            label="Year"
                                            name="year"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.year}
                                            error={touched.year && Boolean(errors.year)}
                                            helperText={touched.year && errors.year}
                                        />
                                    </FormControl>

                                    <FormControl sx={{ marginTop: '16px' }}>
                                        <TextField
                                            label="Price"
                                            name="pricePerDay"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.pricePerDay}
                                            error={touched.pricePerDay && Boolean(errors.pricePerDay)}
                                            helperText={touched.pricePerDay && errors.pricePerDay}
                                        />
                                    </FormControl>

                                    <FormControl sx={{ marginTop: '16px' }}>
                                        <TextField
                                            label="Fuel Type"
                                            name="fuelType"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.fuelType}
                                            error={touched.fuelType && Boolean(errors.fuelType)}
                                            helperText={touched.fuelType && errors.fuelType}
                                        />
                                    </FormControl>

                                    <FormControl sx={{ marginTop: '16px' }}>
                                        <TextField
                                            label="Transmission Type"
                                            name="transmissionType"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.transmissionType}
                                            error={touched.transmissionType && Boolean(errors.transmissionType)}
                                            helperText={touched.transmissionType && errors.transmissionType}
                                        />
                                    </FormControl>

                                    <FormControl sx={{ marginTop: '16px' }}>
                                        <TextField
                                            label="Capacity"
                                            name="capacity"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.capacity}
                                            error={touched.capacity && Boolean(errors.capacity)}
                                            helperText={touched.capacity && errors.capacity}
                                        />
                                    </FormControl>

                                    <Button sx={{ marginTop: '30px' }} variant='contained' width={'full'} type='submit' >
                                        Save
                                    </Button>
                                </Box>

                            </form>

                        </>
                    )}
                </Formik>
            </Box>
        </Box>
    )
}

export default AddCar