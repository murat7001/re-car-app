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
                alignItems: 'center',
                height: 'calc(100vh - 64px)',
                justifyContent:'center',
            }}
        >
            <Box
                sx={{
                    maxWidth: '800px',
                    width: '100%',
                    display:'flex',
                    justifyContent:'space-around',
                    background:'#F3F3F3',
                    padding:'50px',
                    borderRadius:'30px'
                }}
            >
                <Box sx={{
                    height: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <ImageGallery showPlayButton={false} items={images} />
                </Box>
                <Stack>
                    <Typography variant="h4">
                        {carsDetails.name}
                    </Typography>
                    <Typography sx={{ borderBottom: '1px solid #ccc', paddingBottom: '1px', marginTop:'20px' }}>
                        Fuel Type: {carsDetails.fuelType} 
                    </Typography>
                    <Typography sx={{ borderBottom: '1px solid #ccc', paddingBottom: '1px', marginTop:'15px' }}>
                        Type: {carsDetails.transmissionType}
                    </Typography>
                    <Typography sx={{ borderBottom: '1px solid #ccc', paddingBottom: '1px', marginTop:'15px' }}>
                        Price per day: {carsDetails.pricePerDay} TL
                    </Typography>
                    <Typography sx={{ borderBottom: '1px solid #ccc', paddingBottom: '1px', marginTop:'15px' }}>
                        Capacity: {carsDetails.capacity}
                    </Typography>


                    <Stack sx={{ mt: 'auto' }}>
                        <Button onClick={handleButtonClick} variant='contained'>Rent</Button>
                    </Stack>
                </Stack>


            </Box>
        </Stack>
    );
};

export default Details;
