import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './slices/alertSlice';

export const store = configureStore({
  reducer: {
    alertState: alertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
