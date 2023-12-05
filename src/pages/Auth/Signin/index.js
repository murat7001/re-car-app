import React from 'react';
import { useFormik } from 'formik';
import { Alert, Box, Button, FormControl, FormHelperText, FormLabel, Stack, TextField, Typography } from '@mui/material';
import validationSchema from './validations'

function Signin() {
    const formik = useFormik({
        initialValues: {
            email: '', // Corrected typo in the property name
            password: '',
        },
        validationSchema,
        onSubmit: async (values, bag) => {
            // Handle form submission logic here
        },
    });


    return (
        <Box mt={10} display="flex" justifyContent="center" alignItems="center">
            <Stack width="400px" spacing={4}>
                <Typography variant="h4" textAlign="center">
                    Sign In
                </Typography>

                {formik.errors.general && (
                    <Alert severity="error">{formik.errors.general}</Alert>
                )}

                <form onSubmit={formik.handleSubmit}>
                    <FormControl fullWidth>
                        <FormLabel>E-mail</FormLabel>
                        <TextField
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            autoFocus
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
            </Stack>
        </Box>
    );
}

export default Signin;
