import { configureStore } from '@reduxjs/toolkit';
import indexSlice from './indexSlice';
import mainScreenSlice from './mainScreenSlice';
import searchSlice from './searchSlice';
import my_dataSlice from './my_dataSlice'
import videoSlice from './videoSlice'
export const store = configureStore({
  reducer: {
    search: searchSlice,
    index: indexSlice,
    mainScreen: mainScreenSlice,
    my_data: my_dataSlice,
    video: videoSlice,
  },
});
