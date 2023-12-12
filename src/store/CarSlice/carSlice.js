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

export const fetchCarByCategory = createAsyncThunk(
    'cars/fetchCarByCategory',
    async (brand) => {
        const response = await axios.get(`http://localhost:3001/cars?brand=${brand}`)
        return response.data;
    }
);

export const addNewCar = createAsyncThunk(
    'cars/addNewCar',
    async (newCarData) => {
        const response = await axios.post("http://localhost:3001/cars", newCarData);
        return response.data;
    }
);

export const deleteCar = createAsyncThunk(
    'cars/deleteCar',
    async (carId) => {
        const response = await axios.delete(`http://localhost:3001/cars/${carId}`);
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
            })
            .addCase(fetchCarByCategory.pending, (state) => {
                state.loadingCars = true;
            })
            .addCase(fetchCarByCategory.fulfilled, (state, action) => {
                state.cars = action.payload;
                state.loadingCars = false;
            })
            .addCase(fetchCarByCategory.rejected, (state, action) => {
                state.loadingCars = false;
                state.error = action.error.message;
            })
            .addCase(addNewCar.pending, (state) => {
                state.loadingCars = true;
            })
            .addCase(addNewCar.fulfilled, (state, action) => {
                state.cars.push(action.payload);
                state.loadingCars = false;
            })
            .addCase(addNewCar.rejected, (state, action) => {
                state.loadingCars = false;
                state.error = action.error.message;
            })
            .addCase(deleteCar.pending, (state) => {
                state.loadingCars = true;
            })
            .addCase(deleteCar.fulfilled, (state, action) => {
                state.cars = state.cars.filter(car => car.id !== action.payload.id);
                state.loadingCars = false;
            })
            .addCase(deleteCar.rejected, (state, action) => {
                state.loadingCars = false;
                state.error = action.error.message;
            });
    }
})

export default carsSlice.reducer;
