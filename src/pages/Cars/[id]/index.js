import React, { useEffect } from 'react';
import { Stack, Box, Typography, Button, CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import ImageGallery from 'react-image-gallery';
import { fetchCarDetails } from '@/store/CarSlice/carSlice';

const Details = () => {
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch();
    const { carsDetails, loadingCarsDetails } = useSelector((state) => state.cars);
    let { loggedIn, user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (id) {
            dispatch(fetchCarDetails(id));
        }
    }, [id, dispatch]);

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
                alignItems: 'center',
                marginTop: { xs: '20px', md: '100px' }
            }}
        >
            {loadingCarsDetails ? (
                <CircularProgress style={{ margin: 'auto', display: 'block' }} />
            ) : (
                <Box
                    sx={{
                        maxWidth: '900px',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-around',
                        background: '#F3F3F3',
                        padding: {xs:'20px', md:'50px'},
                        borderRadius: '30px',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            height: '300px',
                        }}
                    >
                        <ImageGallery showPlayButton={false} items={images} />
                    </Box>

                    <Stack sx={{textAlign:{xs: 'center',md:'start'} }} >
                        <Typography variant="h4">{carsDetails.name}</Typography>
                        <Typography
                            sx={{ borderBottom: '1px solid #ccc', paddingBottom: '1px', marginTop: '20px' }}
                        >
                            Fuel Type: {carsDetails.fuelType}
                        </Typography>
                        <Typography
                            sx={{ borderBottom: '1px solid #ccc', paddingBottom: '1px', marginTop: '15px' }}
                        >
                            Type: {carsDetails.transmissionType}
                        </Typography>
                        <Typography
                            sx={{ borderBottom: '1px solid #ccc', paddingBottom: '1px', marginTop: '15px' }}
                        >
                            Price per day: {carsDetails.pricePerDay} TL
                        </Typography>
                        <Typography
                            sx={{ borderBottom: '1px solid #ccc', paddingBottom: '1px', marginTop: '15px' }}
                        >
                            Capacity: {carsDetails.capacity}
                        </Typography>

                        {user?.role !== 'admin' && (
                            <Stack sx={{ mt: '20px' }}>
                                <Button onClick={handleButtonClick} variant="contained" fullWidth>
                                    Rent
                                </Button>
                            </Stack>
                        )}
                    </Stack>
                </Box>
            )}
        </Stack>
    );
};

export default Details;
