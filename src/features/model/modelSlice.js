import { createSlice } from '@reduxjs/toolkit';
import { irisData } from '../../components/iris';

const initData = irisData.map((el) => ({
  x: el.sepalLength,
  y: el.petalWidth,
}));

const initialState = {
  cubeData: initData,
};

const modelSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    builtCube: (state, action) => {
      state.cubeData = action.payload;
    },
  },
});

export const { builtCube } = modelSlice.actions;

export default modelSlice.reducer;
