import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserModel } from '../models/User.model';

export interface MainStoreStates {
  userPlaying: UserModel,
  isShowComment: boolean,
  currentComment: string
}

const state: MainStoreStates = {
  //@ts-ignore
  userPlaying: {
    id: "2", username: "Sohail", email: "sohailwarriach@gmail.com", avatar: 'https://picsum.photos/200', createdAt: new Date().toISOString(),
    name: 'Sohail', type: 0
  },
  isShowComment: false,
  currentComment: ''
}

const mainScreenSlice = createSlice({
  name: 'search',
  initialState: state,
  reducers: {
    setIsShowComment: (state, action: PayloadAction<boolean>) => {
      state.isShowComment = action.payload;
    },
    setCurrentComment: (state, action: PayloadAction<string>) => {
      state.currentComment = action.payload;
    },
    setUserPlaying: (state, action: PayloadAction<UserModel>) => {
      state.userPlaying = action.payload;
    }
  },
});

export default mainScreenSlice.reducer;

export const { setIsShowComment, setCurrentComment } = mainScreenSlice.actions;
