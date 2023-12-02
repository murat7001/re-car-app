import { configureStore } from '@reduxjs/toolkit';
import carReducer from './CarSlice/carSlice';

export const store = configureStore({
  reducer: {
    cars: carReducer,
  },
});
