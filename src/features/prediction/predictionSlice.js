import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  predictions: [],
};

const predictionSlice = createSlice({
  name: 'prediction',
  initialState,
  reducers: {
    prediction: (state, action) => {
      state.predictions = action.payload;
    },
  },
});

export const { prediction } = predictionSlice.actions;

export default predictionSlice.reducer;
