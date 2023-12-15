import React from 'react';
import { useFormik } from 'formik';
import { Box, Button, FormControl, FormHelperText, FormLabel, Stack, TextField, Typography } from '@mui/material';
import validationSchema from './validations';
import { useDispatch } from 'react-redux';
import { registerUser } from '@/store/AuthSlice/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';

function SignUp() {
    const dispatch = useDispatch()
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            id: '',
            email: '',
            password: '',
            passwordConfirm: '',
            role: 'user'
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const data = await dispatch(registerUser(values))
                if (data.payload == undefined) {
                    toast.error('Username taken!!!');
                }else{
                    toast.success('Register success.');
                    formik.resetForm()
                    router.push('/Auth/Signin')
                }
                
            } catch (error) {
                toast.error('Kayit basarisiz!!!');
            }
        },
    });

    return (
        <Box mt={3} display="flex" justifyContent="center" alignItems="center">
            <Stack sx={{background:'#F3F3F3', padding:'30px',borderRadius:'10px'}} width="400px" spacing={1}>
                <Typography variant="h4" textAlign="center">
                    Sign Up
                </Typography>

                <ToastContainer position="top-center" />

                <form onSubmit={formik.handleSubmit}>
                    <FormControl fullWidth>
                        <FormLabel>Name</FormLabel>
                        <TextField
                            name="name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            autoFocus
                        />

                        {formik.touched.name && formik.errors.name && (
                            <FormHelperText error>{formik.errors.name}</FormHelperText>
                        )}
                    </FormControl>

                    <FormControl fullWidth mt={2}>
                        <FormLabel>Surname</FormLabel>
                        <TextField
                            name="surname"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.surname}
                            error={formik.touched.surname && Boolean(formik.errors.surname)}
                        />

                        {formik.touched.surname && formik.errors.surname && (
                            <FormHelperText error>{formik.errors.surname}</FormHelperText>
                        )}
                    </FormControl>

                    <FormControl fullWidth mt={2}>
                        <FormLabel>User Name</FormLabel>
                        <TextField
                            name="id"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.id}
                            error={formik.touched.id && Boolean(formik.errors.id)}
                        />

                        {formik.touched.id && formik.errors.id && (
                            <FormHelperText error>{formik.errors.id}</FormHelperText>
                        )}
                    </FormControl>

                    <FormControl fullWidth mt={2}>
                        <FormLabel>E-mail</FormLabel>
                        <TextField
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                        />

                        {formik.touched.email && formik.errors.email && (
                            <FormHelperText error>{formik.errors.email}</FormHelperText>
                        )}
                    </FormControl>

                    <FormControl fullWidth mt={2}>
                        <FormLabel>Password</FormLabel>
                        <TextField
                            name="password"
                            type='password'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                        />

                        {formik.touched.password && formik.errors.password && (
                            <FormHelperText error>{formik.errors.password}</FormHelperText>
                        )}
                    </FormControl>

                    <FormControl fullWidth mt={2}>
                        <FormLabel>Password Confirm</FormLabel>
                        <TextField
                            name='passwordConfirm'
                            type='password'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.passwordConfirm}
                            error={formik.touched.passwordConfirm && Boolean(formik.errors.passwordConfirm)}
                        />

                        {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
                            <FormHelperText error>{formik.errors.passwordConfirm}</FormHelperText>
                        )}
                    </FormControl>

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{ marginTop: '10px' }}
                    >
                        Sign Up
                    </Button>
                </form>
            </Stack>
        </Box>
    );
}

export default SignUp;
