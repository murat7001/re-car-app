import { configureStore } from '@reduxjs/toolkit';
import carReducer from './CarSlice/carSlice';
import dateReducer from './DateSlice/dateSlice';
import categoriesReducer from './CategoriesSlice/categoriesSlice';
import authReducer from './AuthSlice/authSlice';

export const store = configureStore({
  reducer: {
    cars: carReducer,
    dates: dateReducer,
    categories: categoriesReducer,
    auth: authReducer,
  },
});
