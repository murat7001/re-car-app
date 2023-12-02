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

export default function CardCmp({ car, showButton = true }) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader title={car.name} />
            {car.photos &&  (
                <CardMedia component="img" height="194" image={car.photos[0]} alt="Car" />
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
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                {showButton && (
                    <Link href={`/Cars/${car.id}`} underline="none">
                        <Button variant="contained" size="small">
                            Details
                        </Button>
                    </Link>
                )}
            </CardActions>
        </Card>
    );
}
