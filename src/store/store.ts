import { configureStore } from '@reduxjs/toolkit';
import indexSlice from './indexSlice';
import mainScreenSlice from './mainScreenSlice';
import searchSlice from './searchSlice';

export const store = configureStore({
  reducer: {
    index: indexSlice,
    search: searchSlice,
    mainScreen: mainScreenSlice
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
