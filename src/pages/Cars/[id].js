import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CardCmp from '@/components/CardCmp';
import { Stack, Box } from '@mui/material';
import { fetchCarDetails } from '@/store/CarSlice/carSlice';
import { useDispatch, useSelector } from 'react-redux';

const Details = () => {
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch();
    const { carsDetails } = useSelector(
        (state) => state.cars
    );

    useEffect(() => {
        if (id) {
            dispatch(fetchCarDetails(id));
        }
    }, [id, dispatch]);
    if (!carsDetails) return <div>Loading...</div>;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'calc(100vh - 64px)',
            }}
        >
            <Stack>
                <CardCmp car={carsDetails} showButton={false} />
            </Stack>
        </Box>
    );
}

export default Details;
