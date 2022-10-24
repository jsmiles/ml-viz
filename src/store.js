import { configureStore } from '@reduxjs/toolkit';
import formReducer from './features/form/formSlice';
import modelReducer from './features/model/modelSlice';
import predictionReducer from './features/prediction/predictionSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    model: modelReducer,
    prediction: predictionReducer,
  },
});
