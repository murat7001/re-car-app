import React, { useEffect } from 'react'
import { Formik } from 'formik'
import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { editUser } from '@/store/AuthSlice/authSlice';

function EditProfile() {
    const dispatch = useDispatch()
    const router = useRouter();
    const { id } = router.query;
    const { user, loading } = useSelector((state) => state.auth);

    

    const handleSubmit = async (values) => {
        try {
            const updatedValues = {
                ...values,
                role: user.role,
                passwordConfirm: values.password,
            };
            console.log('values', updatedValues)
            dispatch(editUser({id, updatedValues}));
            toast.success('User edited.');
            router.push('/')
        } catch (error) {
            toast.error('User not edited');
        }
    }


    if (loading) {
        return <Box display={'flex'} justifyContent={'center'}>Loading...</Box>;
    }

    
    return (
        <Box>
            <ToastContainer position="top-center" />
            <Box sx={{ background: '#F3F3F3', padding: '50px', margin:'50px', borderRadius:'30px' }}>
            <Typography variant='h4'>Edit</Typography>
            <Formik
                initialValues={{
                    email: user.email,
                    name: user.name,
                    surname: user.surname,
                    password: user.password,
                }}
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
                                        label="Email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        error={touched.email && Boolean(errors.email)}
                                        helperText={touched.email && errors.email}
                                    />
                                </FormControl>

                                <FormControl sx={{ marginTop: '16px' }}>
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
                                        label="Surname"
                                        name="surname"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.surname}
                                        error={touched.surname && Boolean(errors.msurnameodel)}
                                        helperText={touched.surname && errors.surname}
                                    />
                                </FormControl>

                                

                                <FormControl sx={{ marginTop: '16px' }}>
                                    <TextField
                                        label="Password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        error={touched.password && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
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

export default EditProfile