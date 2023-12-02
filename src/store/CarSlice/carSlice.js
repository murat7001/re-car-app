import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    cars: [],
    loadingCars: false,
    error: null,
    carsDetails: {},
    loadingCarsDetails: false,
};

export const fetchCars = createAsyncThunk(
    'cars/fetchCars',
    async () => {
        const response = await axios.get("http://localhost:3001/vehicles");
        return response.data;
    }
);


export const fetchCarDetails = createAsyncThunk(
    'cars/fetchCarDetails',
    async (id) => {
        const response = await axios.get(`http://localhost:3001/vehicles/${id}`)
        return response.data;
    }
);

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCars.pending, (state) => {
                state.loadingCars = true;
            })
            .addCase(fetchCars.fulfilled, (state, action) => {
                state.cars = action.payload;
                state.loadingCars = false;
            })
            .addCase(fetchCars.rejected, (state, action) => {
                state.loadingCars = false;
                state.error = action.error.message;
            })
            .addCase(fetchCarDetails.pending, (state) => {
                state.loadingCarsDetails = true;
            })
            .addCase(fetchCarDetails.fulfilled, (state, action) => {
                state.carsDetails = action.payload;
                state.loadingCarsDetails = false;
            })
            .addCase(fetchCarDetails.rejected, (state, action) => {
                state.error = action.error.message;
                state.loadingCarsDetails = false;
            });
    }
})

export default carsSlice.reducer;
