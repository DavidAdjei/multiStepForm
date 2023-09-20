import { createSlice } from '@reduxjs/toolkit';

const plansSlice = createSlice({
  name: 'showYearlyPlans',
  initialState: false, 
  reducers: {
    toggleShowYearlyPlans: (state) => !state,
  },
});

export const { toggleShowYearlyPlans } = plansSlice.actions;
export default plansSlice.reducer;
