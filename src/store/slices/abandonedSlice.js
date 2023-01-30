import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
};

export const abandonedSlice = createSlice({
  name: 'abandoned',
  initialState,
  reducers: {
    createAbandoned: (state, action) => {
      state.value = action.payload;
    },
    updateAbandoned: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
    deleteAbandoned: (state) => {
      state.value = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { createAbandoned, updateAbandoned, deleteAbandoned } =
  abandonedSlice.actions;

export default abandonedSlice.reducer;
