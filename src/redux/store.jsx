import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filtersSlice';
import { contactsReducer } from './contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
