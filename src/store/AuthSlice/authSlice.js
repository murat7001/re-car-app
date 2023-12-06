import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: null,
    loggedIn: false,
    loading: false,
};

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (input, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `http://localhost:3001/users/${input.userName}`
            );
                
            return response.data
        } catch (error) {
            rejectWithValue(error.response.data.error)
        }
    }
);




const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.loggedIn = true
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.loggedIn = false;
            });
    },
});


export default authSlice.reducer;
