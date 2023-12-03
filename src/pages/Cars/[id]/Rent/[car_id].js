import React from 'react';
import { useFormik } from 'formik';
import { Alert, Box, Button, FormControl, FormHelperText, FormLabel, Stack, TextField, Typography } from '@mui/material';
import DateRange from '@/components/Navbar/DateRange';
import validationSchema from './validations';
import { useSelector } from 'react-redux';

function Rent() {
    const { startDate, endDate } = useSelector((state) => state.dates);
    const formik = useFormik({
        initialValues: {
            address: '', // Corrected typo in the property name
            phone: '',
        },
        validationSchema,
        onSubmit: async (values, bag) => {
            // Handle form submission logic here
        },
    });

    const isDateSelected = startDate && endDate;

    return (
        <Box mt={10} display="flex" justifyContent="center" alignItems="center">
            <Stack width="400px" spacing={4}>
                <Typography variant="h4" textAlign="center">
                    Rent A Car
                </Typography>
                <Box textAlign={'center'}>
                    <DateRange></DateRange>
                </Box>
                {!isDateSelected && (
                    <Typography variant="body2" color="error" textAlign="center">
                        Select a date.
                    </Typography>
                )}
                {formik.errors.general && (
                    <Alert severity="error">{formik.errors.general}</Alert>
                )}

                <form onSubmit={formik.handleSubmit}>
                    <FormControl fullWidth>
                        <FormLabel>Address</FormLabel>
                        <TextField
                            name="address"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            autoFocus
                        />

                        {formik.touched.address && formik.errors.address && (
                            <FormHelperText error>{formik.errors.address}</FormHelperText>
                        )}
                    </FormControl>

                    <FormControl fullWidth mt={2}>
                        <FormLabel>Phone</FormLabel>
                        <TextField
                            name="phone"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                        />

                        {formik.touched.phone && formik.errors.phone && (
                            <FormHelperText error>{formik.errors.phone}</FormHelperText>
                        )}
                    </FormControl>

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{ marginTop: '10px' }}
                        disabled={!isDateSelected}
                    >
                        Rent
                    </Button>
                </form>
            </Stack>
        </Box>
    );
}

export default Rent;
