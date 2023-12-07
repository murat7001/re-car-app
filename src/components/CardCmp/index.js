import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from 'next/link';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';


export default function CardCmp({ car }) {

    return (
        <Card variant='outlined' sx={{ maxWidth: 345 }}>
            <CardHeader title={car.name} />
            {car.photos && (
                <Stack sx={{padding:'15px'}}>
                    <CardMedia sx={{
                        height: '190px',
                        borderRadius:'3px'
                    }} component="img" height="194" image={car.photos[0]} alt="Car" />
                </Stack>
            )}

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {car.fuelType}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {car.transmissionType}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {car.pricePerDay} TL
                </Typography>
            </CardContent>
            <CardActions disableSpacing>


                <Link href={`/Cars/${car.id}`} underline="none">
                    <Button sx={{marginLeft:'5px'}} variant="contained" size="small">
                        Details
                    </Button>
                </Link>

            </CardActions>
        </Card>
    );
}
