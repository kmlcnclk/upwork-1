import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
};

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    createCustomer: (state, action) => {
      state.value = action.payload;
    },
    updateCustomer: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
    deleteCustomer: (state) => {
      state.value = {};
    },
  },
});

export const { createCustomer, updateCustomer, deleteCustomer } =
  customerSlice.actions;

export default customerSlice.reducer;
