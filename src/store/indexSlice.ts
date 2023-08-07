import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CurrentBottomTab = 'Home' | undefined;

interface InitialState {
  currentBottomTab: CurrentBottomTab;
  bottomSheetSignIn: boolean;
  currentUser: string;
  modalSignIn: boolean;
  bottomSheetSettingProfile: boolean;
  bottomSheetLogout: boolean;
  rechargeSheet: boolean;
}

const initialState: InitialState = {
  currentBottomTab: 'Home',
  bottomSheetSignIn: false,
  currentUser: '',
  modalSignIn: false,
  bottomSheetSettingProfile: false,
  bottomSheetLogout: false,
  rechargeSheet: false
};

const indexSlice = createSlice({
  name: 'index',
  initialState,
  reducers: {
    setCurrentBottomTab: (state, action: PayloadAction<InitialState>) => {
      state.currentBottomTab = action.payload.currentBottomTab;
    },
    setBottomSheetSignIn: (state, action: PayloadAction<InitialState>) => {
      state.bottomSheetSignIn = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<InitialState>) => {
      state.currentUser = action.payload;
    },
    setModalSignIn: (state, action: PayloadAction<InitialState>) => {
      state.modalSignIn = action.payload;
    },
    setBottomSheetSettingProfile: (state, action: PayloadAction<InitialState>) => {
      state.bottomSheetSettingProfile = action.payload;
    },
    setBottomSheetLogout: (state, action: PayloadAction<InitialState>) => {
      state.bottomSheetLogout = action.payload;
    },
    setRechargeSheet: (state, action: PayloadAction<InitialState>) => {
      state.rechargeSheet = action.payload;
    },
  },
});

export default indexSlice.reducer;

export const {
  setCurrentBottomTab,
  setBottomSheetSignIn,
  setCurrentUser,
  setModalSignIn,
  setBottomSheetSettingProfile,
  setBottomSheetLogout,
  setRechargeSheet
} = indexSlice.actions;
