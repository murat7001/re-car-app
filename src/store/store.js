import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist'; 
import persistedAuthReducer from './AuthSlice/authSlice'; 
import carReducer from './CarSlice/carSlice';
import dateReducer from './DateSlice/dateSlice';
import categoriesReducer from './CategoriesSlice/categoriesSlice';
import reservationsReducer from './ReservationsSlice/reservationsSlice';

export const store = configureStore({
  reducer: {
    cars: carReducer,
    dates: dateReducer,
    categories: categoriesReducer,
    auth: persistedAuthReducer,
    reservations: reservationsReducer,
  },
});

export const persistor = persistStore(store);