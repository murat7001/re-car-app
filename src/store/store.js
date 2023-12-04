import { configureStore } from '@reduxjs/toolkit';
import carReducer from './CarSlice/carSlice';
import dateReducer from './DateSlice/dateSlice';
import categoriesSlice from './CategoriesSlice/categoriesSlice';

export const store = configureStore({
  reducer: {
    cars: carReducer,
    dates: dateReducer,
    categories: categoriesSlice,
  },
});
