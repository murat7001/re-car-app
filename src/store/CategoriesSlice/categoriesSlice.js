import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_ENDPOINT = "http://localhost:3001";
const BASE_ENDPOINT2 = "https://json-server-7qt7.onrender.com";

const initialState = {
    categories: [],
    loadingCategories: false,
    error: null,
    selectedCategory: '',
};

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const response = await axios.get(
            `${BASE_ENDPOINT2}/categories`
        );
        return response.data;
    }
);

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loadingCategories = true;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.loadingCategories = false;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loadingCategories = false;
                state.error = action.error.message;
            });
    },
});

export const { setSelectedCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
