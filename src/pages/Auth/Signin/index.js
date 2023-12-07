import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Alert, Box, Button, FormControl, FormHelperText, FormLabel, Stack, TextField, Typography } from '@mui/material';
import validationSchema from './validations'
import { fetchUser, loggedFalse } from '@/store/AuthSlice/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {
    const dispatch = useDispatch()
    let { loggedIn, user } = useSelector((state) => state.auth);
    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const data = await dispatch(fetchUser(values));
                
                if (data && data.payload.password !== values.password) {
                    toast.error('Wrong paassword!!!');
                    dispatch(loggedFalse())
                    user = null
                    console.log('loggedIn', loggedIn)
                    console.log('user', user)
                } else {
                    toast.success('Login successful.');
                    formik.resetForm()
                    router.push('/')
                }
            } catch (error) {
                toast.error('User not found!!!');
                dispatch(loggedFalse())
                user = null
                console.log('loggedIn', loggedIn)
                console.log('user', user)
                
            }
        },
    });

    return (
        <Box  mt={10} display="flex" justifyContent="center" alignItems="center">
            <Stack sx={{background:'#F3F3F3', padding:'30px',borderRadius:'30px'}} width="400px" spacing={4}>
                <Typography variant="h4" textAlign="center">
                    Sign In
                </Typography>

                <ToastContainer position="top-center" />

                <form onSubmit={formik.handleSubmit}>
                    <FormControl fullWidth>
                        <FormLabel>Username</FormLabel>
                        <TextField
                            name="userName" 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.userName} 
                            error={formik.touched.userName && Boolean(formik.errors.userName)}
                            autoFocus
                        />

                        {formik.touched.userName && formik.errors.userName && ( 
                            <FormHelperText error>{formik.errors.userName}</FormHelperText>
                        )}
                    </FormControl>

                    <FormControl fullWidth mt={2}>
                        <FormLabel>Password</FormLabel>
                        <TextField
                            name="password"
                            type='password'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                        />

                        {formik.touched.password && formik.errors.password && (
                            <FormHelperText error>{formik.errors.password}</FormHelperText>
                        )}
                    </FormControl>

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{ marginTop: '10px' }}
                    >
                        Sign In
                    </Button>
                </form>
                <Box my={5}>
                    {
                        formik.errors.general && (
                            <Alert status='error'>
                                {formik.errors.general}
                            </Alert>
                        )
                    }
                </Box>
            </Stack>
        </Box>
    );
}

export default Signin;
