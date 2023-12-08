import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    reservations: [],
    loadingReservations: false,
    error: null,
};

export const fetchReservations = createAsyncThunk(
    'reservations/fetchReservations',
    async () => {
        const response = await axios.get(
            `http://localhost:3001/reservations`
        );
        return response.data;
    }
);

export const saveReservations = createAsyncThunk(
    'reservations/saveReservations',
    async (input, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `http://localhost:3001/reservations`,
                input
            );
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data.error);
        }
    }
);

const reservationsSlice = createSlice({
    name: 'reservations',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchReservations.pending, (state) => {
                state.loadingReservations = true;
                state.error = null;
            })
            .addCase(fetchReservations.fulfilled, (state, action) => {
                state.loadingReservations = false;
                state.reservations = action.payload;
            })
            .addCase(fetchReservations.rejected, (state, action) => {
                state.loadingReservations = false;
                state.error = action.error.message;
            })
            .addCase(saveReservations.pending, (state) => {
                state.loadingReservations = true;
                state.error = null;
            })
            .addCase(saveReservations.fulfilled, (state) => {
                state.loadingReservations = false;
            })
            .addCase(saveReservations.rejected, (state, action) => {
                state.loadingReservations = false;
                state.error = action.payload;
            });
    },
});


export default reservationsSlice.reducer;
