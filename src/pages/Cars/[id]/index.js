import React, { useEffect } from 'react';
import { Stack, Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import CardCmp from '@/components/CardCmp';
import ImageGallery from 'react-image-gallery';
import { fetchCarDetails } from '@/store/CarSlice/carSlice';
import DateRange from '@/components/DateRange';
import Link from 'next/link';

const Details = () => {
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch();
    const { carsDetails } = useSelector((state) => state.cars);
    let { loggedIn } = useSelector((state) => state.auth);


    useEffect(() => {
        if (id) {
            dispatch(fetchCarDetails(id));
        }
    }, [id, dispatch]);

    if (!carsDetails) {
        return <div>Loading...</div>;
    }

    const images = carsDetails.photos ? carsDetails.photos.map((url) => ({ original: url })) : [];

    const handleButtonClick = () => {
        if (loggedIn) {
            router.push(`${carsDetails.id}/Rent/${carsDetails.id}`);
        } else {
            router.push('/Auth/Signin');
        }
    };
    return (
        <Stack
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'calc(100vh - 64px)',
            }}
        >
            <Box
                sx={{
                    maxWidth: '500px',
                    width: '100%',
                    background: 'red'
                }}
            >
                <Box sx={{
                    background: 'yellow',
                    height: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <ImageGallery  showPlayButton={false} items={images} />
                </Box>
                <Typography>
                    {carsDetails.name}
                </Typography>
                <Typography>
                    Günlük ücret: {carsDetails.pricePerDay} TL
                </Typography>
                <Typography>
                    {carsDetails.transmissionType}
                </Typography>
                <Typography>
                    Kapasite: {carsDetails.capacity}
                </Typography>


                <Button onClick={handleButtonClick} variant='contained'>Rent</Button>

            </Box>
        </Stack>
    );
};

export default Details;
