import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CardCmp from '@/components/CardCmp';
import { Stack, Box } from '@mui/material';

const Details = () => {
    const router = useRouter();
    const { id } = router.query;
    const [car, setCar] = useState(null);

    useEffect(() => {
        if (id) {
            axios
                .get(`http://localhost:3001/vehicles/${id}`)
                .then((response) => {
                    setCar(response.data);
                })
                .catch((error) => console.log(error));
        }
    }, [id]);

    if (!car) return <div>Loading...</div>;

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
                <CardCmp car={car} showButton={false} />
            </Stack>
        </Box>
    );
}

export default Details;
