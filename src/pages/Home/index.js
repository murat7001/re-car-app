import CardCmp from "@/components/CardCmp";
import Navbar from "@/components/Navbar";
import { fetchCarByCategory, fetchCars } from "@/store/CarSlice/carSlice";
import {
    Grid,
    Stack,
} from '@mui/material';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    const { cars } = useSelector((state) => state.cars);
    const { selectedCategory } = useSelector((state) => state.categories);

    useEffect(() => {
        if (selectedCategory && selectedCategory  != "All") {
            dispatch(fetchCarByCategory(selectedCategory));
        } else {
            dispatch(fetchCars());
        }
    }, [dispatch, selectedCategory]);

    
    return (
        <div>
            <Navbar></Navbar>

            <Stack
                width={"90%"}
                margin={"auto"}
                marginTop={3}
                spacing={3}
                direction={"row"}
                justifyContent="space-around"
                useFlexGap
            >
                <Grid container spacing={3}>
                    {cars &&
                        cars.map((car) => (
                            <Grid key={car.id} item xs={12} sm={6} md={4} lg={3}>
                                <CardCmp car={car}></CardCmp>
                            </Grid>
                        ))}
                </Grid>
            </Stack>
        </div>
    )
}

export default Home