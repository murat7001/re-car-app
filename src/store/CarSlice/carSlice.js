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
        const response = await axios.get("http://localhost:3001/cars");
        return response.data;
    }
);


export const fetchCarDetails = createAsyncThunk(
    'cars/fetchCarDetails',
    async (id) => {
        const response = await axios.get(`http://localhost:3001/cars/${id}`)
        return response.data;
    }
);

export const searchCars = createAsyncThunk(
    'cars/searchCars',
    async (search) => {
        const response = await axios.get(`http://localhost:3001/cars?q=${search}`);
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
            })
            .addCase(searchCars.pending, (state) => {
                state.loadingCars = true;
            })
            .addCase(searchCars.fulfilled, (state, action) => {
                state.cars = action.payload;
                state.loadingCars = false;
            })
            .addCase(searchCars.rejected, (state, action) => {
                state.loadingCars = false;
                state.error = action.error.message;
            });
    }
})

export default carsSlice.reducer;
