import CardCmp from "@/components/CardCmp";
import {
  Grid,
  Stack,
} from '@mui/material';
import { useEffect, useState } from "react";
import { fetchCars } from "./api/api";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [cars, setCars] = useState([]);

  const getCars = async () => {
    const cars = await fetchCars();
    setCars(cars);
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <>
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
    </>
  );
}
