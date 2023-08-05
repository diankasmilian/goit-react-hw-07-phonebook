import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filtersSlice';
import { contactApi } from './contactSlice';

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
});
