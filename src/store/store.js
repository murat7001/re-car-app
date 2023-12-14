import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist'; // persistStore ekledik
import persistedAuthReducer from './AuthSlice/authSlice'; // persistedAuthReducer'ı import ettik
import carReducer from './CarSlice/carSlice';
import dateReducer from './DateSlice/dateSlice';
import categoriesReducer from './CategoriesSlice/categoriesSlice';
import reservationsReducer from './ReservationsSlice/reservationsSlice';

export const store = configureStore({
  reducer: {
    cars: carReducer,
    dates: dateReducer,
    categories: categoriesReducer,
    auth: persistedAuthReducer, // persistedAuthReducer'ı kullanın
    reservations: reservationsReducer,
  },
});

export const persistor = persistStore(store); // persistor'ı ekledik