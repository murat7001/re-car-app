import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
        selectedCategory: '',
    },
    reducers: {
        setCategories: (state, action) => {
            state.list = action.payload;
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
});

export const { setCategories, setSelectedCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
