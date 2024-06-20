import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: string;
  modalType: string;
  prevModalType: string;
  currentPhoneNumber: string;
  testPhoneNumber: string;
}

const initialState: UserState = {
  user: '',
  modalType: '',
  prevModalType: '',
  currentPhoneNumber: '',
  testPhoneNumber: '79835404934',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },

    clearUser: (state) => {
      state.user = '';
    },

    switchModal: (state, action: PayloadAction<string>) => {
      state.prevModalType = state.modalType === action.payload ? state.prevModalType : state.modalType;
      state.modalType = action.payload;
    },

    closeModal: (state) => {
      state.modalType = '';
    },

    changePhoneNumber: (state, action: PayloadAction<string>) => {
      state.currentPhoneNumber = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { addUser, clearUser, switchModal, closeModal, changePhoneNumber } = userSlice.actions;
