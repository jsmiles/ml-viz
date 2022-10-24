import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  xpicked: 'sepalLength',
  ypicked: 'petalWidth',
  clusters: 2,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    inputParameters: (state, action) => {
      state.xpicked = action.payload.xpicked;
      state.ypicked = action.payload.ypicked;
      state.clusters = action.payload.clusters;
    },
  },
});

export const { inputParameters } = formSlice.actions;

export default formSlice.reducer;
