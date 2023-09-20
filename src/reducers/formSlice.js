import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'formData',
  initialState: {
    displayName: '',
    email: '',
    phoneNumber: '',
    errors: {
      displayName: '',
      email: '',
      phoneNumber: '',
    },
  },
  reducers: {
    setFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFormData } = formSlice.actions;
export default formSlice.reducer;
